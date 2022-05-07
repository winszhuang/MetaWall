<script lang="ts" setup>
import { ref, watch } from 'vue';
import { postCategory } from '@/constants/postCategory';

const route = useRoute();
const router = useRouter();
const postList = ref<GetSinglePostRes[]>();
const currentCategory = ref(postCategory[0]);
const searchValue = ref('');

const updateSearchValue = () => {
  const queryObj = route.query;

  if (queryObj.q) {
    searchValue.value = queryObj.q as string;
  }
}

const updateCurrentCategory = () => {
  const queryObj = route.query;

  if (queryObj.dateSort) {
    currentCategory.value = postCategory.find(category => category.queryString === `dateSort=${queryObj.dateSort}`);
  } else if (queryObj.likesSort) {
    currentCategory.value = postCategory.find(category => category.queryString === `likesSort=${queryObj.likesSort}`);

    console.log(currentCategory.value);
  }
}

const updateQueryWithSearch = (value: string) => {
  const newRoute = `/?${currentCategory.value.queryString}` + 
    (value ? `&q=${value}` : '');
    
  router.push(newRoute);
}
// 根據切換切文種類，更換query值
watch(currentCategory, (category) => {
  const newRoute = `/?${category.queryString}` + 
    (route.query.q ? `&q=${route.query.q}` : '');

  router.push(newRoute);
}, { immediate: true });

// 根據更換query值，重新發api
watch(() => route.query, async () => {
  updateSearchValue();
  updateCurrentCategory();
  postList.value = (await useApi().get<GetSinglePostRes[]>(`/posts${route.fullPath}`)).data;
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