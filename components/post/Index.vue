<script lang="ts" setup>
const props = defineProps<{
  author: string,
  avator: string,
  createdAt: string,
  content: string,
  image?: string,
  likes: number,
  id: string
}>();
</script>

<template>
  <article class="p-6 bg-white border-2 rounded">
    <!-- 個人資訊 -->
    <div class="flex items-center mb-4">
      <img :src="props.avator" alt="" width="30px">
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
      <img :src="props.image" alt="" class="rounded">
    </section>

    <!-- 按讚 -->
    <section class="">
      <font-awesome-icon 
        :icon="['far', 'thumbs-up']"
        class="inline-block w-5 mr-2" />
      <span class="text-sm font-baloo">
        {{ props.likes }}
      </span>
    </section>
  </article>
</template>