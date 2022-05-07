<script lang="ts" setup>
import { ref } from 'vue';

const searchValue = ref('');

const { data: postList } = await useApi().get<GetSinglePostRes[]>('/posts');
</script>

<template>
  <div>
    <div class="flex flex-row flex-wrap mb-4">
      <PostCategorySelector 
        class="md:mb-0 mb-[6px] md:mr-3 md:w-[156px] w-full"/>
      <PostSearch 
        class="flex-1"
        :placeholder="'搜尋貼文'"
        v-model:value="searchValue"
      />
    </div>
  
    <!-- 貼文 -->
    <Post 
      v-for="post in postList"
      :key="post._id"
      :author="post.author.name"
      :avator="post.author.avator"
      :created-at="post.createdAt"
      :content="post.content"
      :image="post.image"
      :likes="post.likes.length"
      :id="post._id"
      class="mb-4"
    />
  </div>
</template>