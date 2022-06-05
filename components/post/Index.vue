<script lang="ts" setup>
const props = defineProps<{
  author: string,
  avatar: string,
  createdAt: string,
  content: string,
  image?: string,
  likes: number,
  id: string
}>()

const correctImageUrl = computed(() => {
  const baseApiUrl = useRuntimeConfig().public.apiBase

  return `${baseApiUrl}/images/${props.image}`
})
</script>

<template>
  <article class="p-6 bg-white border-2 rounded">
    <!-- 個人資訊 -->
    <div class="flex items-center mb-4">
      <img
        class="border-2 rounded-full"
        :src="props.avatar || '@/assets/image/default-avatar.jpg'"
        alt=""
        width="45"
        height="45
      "
      >
      <div class="ml-4">
        <h6 class="mb-1 font-mono font-bold leading-5">
          {{ props.author }}
        </h6>
        <div class="text-xs text-grey-100">
          {{ props.createdAt }}
        </div>
      </div>
    </div>

    <!-- 主要文章 -->
    <section class="mb-4 whitespace-pre-line">
      {{ props.content }}
    </section>

    <!-- 圖片 -->
    <section
      v-if="props.image"
      class="mb-4 border-2 rounded"
    >
      <img
        :src="correctImageUrl"
        alt=""
        class="rounded"
      >
    </section>

    <!-- 按讚 -->
    <section class="">
      <font-awesome-icon
        :icon="['far', 'thumbs-up']"
        class="inline-block w-5 mr-2"
      />
      <span class="text-sm font-baloo">
        {{ props.likes }}
      </span>
    </section>
  </article>
</template>
