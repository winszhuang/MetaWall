<script lang="ts" setup>
import { ref, watch } from 'vue';
import { postCategory } from '@/constants/postCategory';
import { LocationQuery } from 'vue-router';

const route = useRoute();
const router = useRouter();
const postList = ref<GetSinglePostRes[]>();
const currentCategory = ref(getCategoryByCurrentQuery(route.query));
const searchValue = ref('');

function getSearchValueByCurrentQuery(queryObj: LocationQuery) {
  return queryObj.q || '';
}

function getCategoryByCurrentQuery(queryObj: LocationQuery) {
  if (queryObj.dateSort) {
    return postCategory.find(category => category.queryString === `dateSort=${queryObj.dateSort}`);
  }
  
  if (queryObj.likesSort) {
    return postCategory.find(category => category.queryString === `likesSort=${queryObj.likesSort}`);
  }

  return postCategory[0];
}

function updateQueryWithSearch (value: string) {
  const newRoute = `/?${currentCategory.value.queryString}` + 
    (value ? `&q=${value}` : '');
    
  router.push(newRoute);
}
// 根據切換切文種類，更換query值
watch(currentCategory, (category) => {
  const newRoute = `/?${category.queryString}` + 
    (route.query.q ? `&q=${route.query.q}` : '');

  router.push(newRoute);
});

// 根據更換query值，重新發api
watch(() => route.query, async (queryObj) => {
  // 確定在該基本路由才處理，進入其他頁如/setting就不執行
  if (route.path === '/') {
    searchValue.value = getSearchValueByCurrentQuery(queryObj) as string;
    currentCategory.value = getCategoryByCurrentQuery(queryObj);
    postList.value = (await getManyPost(`/posts${route.fullPath}`)).data;
  }
}, { immediate: true });
</script>

<template>
  <div>
    <div class="flex flex-row flex-wrap mb-4">
      <PostCategorySelector
        :list="postCategory"
        v-model:value="currentCategory"
        class="md:mb-0 mb-[6px] md:mr-3 md:w-[156px] w-full"/>
      <PostSearch 
        class="flex-1"
        :placeholder="'搜尋貼文'"
        v-model:value="searchValue"
        @handle="updateQueryWithSearch"
      />
    </div>

    <template v-if="postList?.length > 0">
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
    </template>
    <PostEmpty v-else/>
  </div>
</template>