<script lang="ts" setup>
import { ref } from 'vue';
import userImg from '@/assets/image/user.png';
import thumbupImg from '@/assets/image/thumbup.svg';
import bell from '@/assets/image/bell.svg';
import { fakePostList } from '@/mock/const/post';

export interface Item {
  icon: any,
  text: string,
  key: string,
  id: string
};

const sidebarList: Item[] = [
  {
    icon: userImg,
    text: '邊緣小杰',
    key: 'user',
    id: 'rjerilgj'
  },
  {
    icon: bell,
    text: '追蹤名單',
    key: 'track',
    id: '484rthth'
  },
  {
    icon: thumbupImg,
    text: '我按讚的文章',
    key: 'like',
    id: '994rgergh'
  }
];

const searchValue = ref('');

</script>

<template>
  <div class="flex flex-row justify-between md:py-8 py-4 md:px-0 px-3">
    <!-- 主要貼文區塊 -->
    <main class="w-full md:w-2/3 md:mr-7 ">
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
        class="mb-4"/>
    </main>

    <!-- 側邊攔 -->
    <aside class="flex-1 hidden md:block">
      <Sidebar :list="sidebarList">
        <template #header>
          <button 
            class="font-mono font-bold text-center leading-5
              bg-primary text-white border-black
                rounded border-2
                py-4 mb-6
                w-full">
            張貼動態
          </button>
        </template>

        <template #default="{ item, index }">
          <div :class="{ 'mb-[22px]': index !== (sidebarList.length - 1) }">
            <img
              width="50px"
              :src="(item as Item).icon" 
              alt=""
              class=" inline-block mr-4">
            <h6 class="inline-block font-bold">
              {{ (item as Item).text }}
            </h6>
          </div>
        </template>
      </Sidebar>
    </aside>
  </div>
</template>