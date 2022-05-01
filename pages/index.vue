<script lang="ts" setup>
import { ref } from 'vue';
import { fakePostList } from '@/mock/const/post';

const searchValue = ref('');

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
      v-for="item in fakePostList"
      :key="item.id"
      :post="item"
      class="mb-4"
    />
  </div>
</template>