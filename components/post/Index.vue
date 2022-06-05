<script lang="ts" setup>
import { addComment, addLike, unLike } from '@/services/postService'
import { correctImageUrl } from '@/helpers/correctImageUrl'
import { getSingleUserRes } from '@/types/reqRes/user'
import { AddSinglePostReq, GetSinglePostRes } from '@/types/reqRes/post'

const props = defineProps<{
  userName: string,
  userAvatar: string,
  userId: string,
  createdAt: string,
  updatedAt: string,
  content: string,
  image: string,
  likes: getSingleUserRes[],
  comments: GetSinglePostRes[],
  id: string,
}>()

const currentComment = ref<AddSinglePostReq>({
  content: '',
  image: ''
})
const post = toRefs(props)
const isLike = computed(() => {
  const test = post.likes.value.find(item => {
    return item._id === post.userId.value
  })
  return !!test
})

const clickLike = () => {
  isLike.value ? postUnlike() : postLike()
}

const postLike = async () => {
  post.likes.value.push({
    _id: post.userId.value,
    name: post.userName.value,
    avatar: post.userAvatar.value
  })
  await addLike(post.id.value)
}

const postUnlike = async () => {
  const index = post.likes.value.findIndex(item => item._id === post.userId.value)
  post.likes.value.splice(index, 1)
  await unLike(post.id.value)
}

const postComment = async () => {
  if (!currentComment.value.content) return
  const comments = post.comments.value
  comments.unshift({
    ...currentComment.value,
    likes: [],
    comments: [],
    updatedAt: Date.now().toString(),
    createdAt: Date.now().toString(),
    _id: '',
    user: {
      name: post.userName.value,
      _id: post.userId.value,
      avatar: post.userAvatar.value
    }
  })
  const newComment = (await addComment(props.id, { ...currentComment.value })).data
  if (newComment) {
    comments[0]._id = newComment._id
  }
}

</script>

<template>
  <article class="p-6">
    <!-- 個人資訊 -->
    <div class="flex items-center mb-4">
      <img
        v-if="post.userAvatar.value"
        class="border-2 rounded-full"
        :src="correctImageUrl(post.userAvatar.value)"
        alt=""
        width="45"
        height="45"
      >
      <img
        v-else
        class="border-2 rounded-full"
        src="@/assets/image/default-avatar.jpg"
        alt=""
        width="45"
        height="45"
      >
      <div class="ml-4">
        <h6 class="mb-1 font-mono font-bold leading-5">
          {{ post.userName.value }}
        </h6>
        <div class="text-xs text-grey-100">
          {{ post.createdAt.value }}
        </div>
      </div>
    </div>

    <!-- 主要文章 -->
    <section class="mb-4 whitespace-pre-line">
      {{ post.content.value }}
    </section>

    <!-- 圖片 -->
    <section
      v-if="post.image.value"
      class="mb-4 border-2 rounded"
    >
      <img
        :src="correctImageUrl(post.image.value)"
        alt=""
        class="rounded"
      >
    </section>

    <!-- 按讚 -->
    <section class="mb-4">
      <font-awesome-icon
        :icon="['far', 'thumbs-up']"
        class="inline-block w-5 mr-2 cursor-pointer hover:text-primary"
        :class="{ 'text-primary': isLike }"
        @click="clickLike"
      />
      <span class="text-sm font-baloo">
        {{ post.likes.value.length }}
      </span>
    </section>

    <!-- 評論區 -->
    <section class="flex mb-4">
      <!-- 圖片 -->
      <div class="w-10 mr-2">
        <img
          v-if="post.userAvatar.value"
          :src="correctImageUrl(post.userAvatar.value)"
          class="border-2 rounded-full"
          alt=""
        >
        <img
          v-else
          class="border-2 rounded-full"
          src="../assets/image/user.png"
          alt=""
        >
      </div>
      <!-- 留言 -->
      <label class="relative flex w-full h-10 bg-white">
        <input
          v-model="currentComment.content"
          class=" border-2 placeholder:text-base placeholder:leading-[22px] text-cyan-1 text-left block bg-cyan-5 w-full py-2 px-4 pr-3"
          placeholder="留言..."
          type="text"
        >
        <div
          class="flex items-center justify-center w-32 text-white border-2 border-l-0 border-black cursor-pointer bg-primary hover:bg-yellow hover:text-black active:text-black"
          @click="postComment"
        >
          留言
        </div>
      </label>
    </section>
    <template v-if="post.comments.value.length">
      <PostComment
        v-for="commentData in post.comments.value"
        :id="commentData._id"
        :key="commentData._id"
        :user-id="commentData.user._id"
        :user-name="commentData.user.name"
        :user-avatar="commentData.user.avatar || ''"
        :created-at="commentData.createdAt"
        :updated-at="commentData.updatedAt"
        :content="commentData.content"
        :image="commentData.image || ''"
        :likes="commentData.likes"
        :comments="commentData.comments"
        class="mb-4 rounded bg-grey-700"
      />
    </template>
  </article>
</template>
