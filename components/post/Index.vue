<script lang="ts" setup>
import { addLike, unLike } from '@/services/postService'
import { correctImageUrl } from '@/helpers/correctImageUrl'
import { getSingleUserRes } from '@/types/reqRes/user'

const props = defineProps<{
  userName: string,
  userAvatar: string,
  userId: string,
  createdAt: string,
  updatedAt: string,
  content: string,
  image: string,
  likes: getSingleUserRes[],
  id: string
}>()

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

</script>

<template>
  <article class="p-6 bg-white border-2 rounded">
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
    <section class="">
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
  </article>
</template>
