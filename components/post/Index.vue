<script lang="ts" setup>
import { Post } from '@/types/post';

const props = defineProps<{ post: Post }>();
</script>

<template>
  <article class="p-6 rounded border-2 bg-white">
    <!-- 個人資訊 -->
    <div class="flex items-center mb-4">
      <img :src="props.post.avator" alt="" width="30px">
      <div class="ml-4">
        <h6 class="font-bold font-mono leading-5 mb-1">
          {{ props.post.author }}
        </h6>
        <div class="text-xs text-grey-100">
          {{ props.post.createdAt }}
        </div>
      </div>
    </div>

    <!-- 主要文章 -->
    <section class="mb-4 whitespace-pre-line">
      {{ props.post.content }}
    </section>

    <!-- 圖片 -->
    <section 
      v-if="props.post.image" 
      class="border-2 rounded mb-4"
    >
      <img :src="props.post.image" alt="" class="rounded">
    </section>

    <!-- 按讚 -->
    <section class="">
      <font-awesome-icon 
        :icon="['far', 'thumbs-up']"
        class="mr-2 w-5 inline-block" />
      <span class=" font-baloo text-sm">
        {{ props.post.like }}
      </span>
    </section>
  </article>
</template>