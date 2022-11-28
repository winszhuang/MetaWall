<script lang="ts" setup>
import { ResponseStatusEnum } from '@/enum/responseStatusEnum'
import { postCategory } from '@/constants/postCategory'
import { correctImageUrl } from '@/helpers/correctImageUrl'
import { follow, unFollow } from '@/services/followService'
import { getUserPosts } from '@/services/postService'
import { getSpecificUserProfile } from '@/services/userService'
import { getUserProfileRes } from '@/types/reqRes/user'
import { GetSinglePostRes } from '@/types/reqRes/post'

const router = useRouter()
const route = useRoute()
const currentUserProfile = ref<getUserProfileRes>()
const haveIFollowed = ref(false)
const searchValue = ref('')
const postList = ref<GetSinglePostRes[]>()
const currentCategory = ref({
  name: '',
  queryKey: '',
  queryValue: '',
  id: ''
})

const fetchUserProfile = async (userId: string) => {
  const data = (await getSpecificUserProfile(userId as string))?.data
  if (data) {
    currentUserProfile.value = data
  }
}

const handleFollow = () => {

}

const clickToAddFollow = async () => {
  currentUserProfile.value.followers.push({
    user: '',
    _id: '',
    followedAt: ''
  })
  const result = await follow(currentUserProfile.value._id)
  if (result.status === ResponseStatusEnum.Success) {
    await fetchUserProfile(currentUserProfile.value._id)
  }
}

const clickToUnFollow = async () => {
  currentUserProfile.value.followers.pop()
  const result = await unFollow(currentUserProfile.value._id)
  if (result.status === ResponseStatusEnum.Success) {
    await fetchUserProfile(currentUserProfile.value._id)
  }
}

function updateQueryWithSearch (value: string) {
  const { queryKey, queryValue } = currentCategory.value
  const newRoute = `/?${queryKey}=${queryValue}` +
    (value ? `&q=${value}` : '')

  router.push(newRoute)
}

watch(() => route.params, async (params) => {
  const { userId } = params
  const [userProfileResult, userPostsResult] = await Promise.all([
    fetchUserProfile(userId as string),
    getUserPosts(userId as string)
  ]
  )
  if (userPostsResult.status === ResponseStatusEnum.Success) {
    postList.value = userPostsResult.data
  }
}, { immediate: true })
</script>

<template>
  <div>
    <section class="mb-4 ghost-bl-5 after:bg-white after:border-2 after:rounded">
      <div
        v-if="currentUserProfile"
        class="flex w-full leading-8 bg-white border-2 rounded"
      >
        <img
          :src="correctImageUrl(currentUserProfile?.avatar)"
          alt=""
          width="80"
          height="80"
        >
        <div class="flex justify-between p-4 basis-full font-noto">
          <div>
            <h6 class="font-bold leading-6">
              {{ currentUserProfile?.name }}
            </h6>
            <span>
              {{ currentUserProfile?.followers.length }} 人追蹤
            </span>
          </div>
          <Btn
            class=""
            text="追蹤"
            width-class="w-24"
            padding-class="py-[6px]"
            @click="clickToAddFollow"
          />
        </div>
      </div>
    </section>
    <div class="flex flex-row flex-wrap items-stretch mb-4">
      <PostCategorySelector
        v-model:value="currentCategory"
        :list="postCategory"
        class="md:mb-0 mb-[6px] md:mr-3 md:w-[156px] w-full relative z-10"
      />
      <PostSearch
        v-model:value="searchValue"
        class="relative z-0 flex-1"
        :placeholder="'搜尋貼文'"
        @handle="updateQueryWithSearch"
      />
    </div>
    <section v-if="postList?.length">
      <Post
        v-for="post in postList"
        :id="post._id"
        :key="post._id"
        :user-id="post.user._id"
        :user-name="post.user.name"
        :user-avatar="post.user.avatar || ''"
        :created-at="post.createdAt"
        :updated-at="post.updatedAt"
        :content="post.content"
        :image="post.image || ''"
        :likes="post.likes"
        :comments="post.comments"
        class="mb-4 bg-white border-2 rounded"
      />
    </section>
    <PostEmpty
      v-else
      text="該使用者沒有任何貼文"
    />
  </div>
</template>
