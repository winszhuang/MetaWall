<script lang="ts" setup>
import userImg from '@/assets/image/user.png';
import thumbupImg from '@/assets/image/thumbup.svg';
import bell from '@/assets/image/bell.svg';

export interface Item {
  icon: any,
  text: string,
  key: string,
  id: string,
  route: string
};

const sidebarList: Item[] = [
  {
    icon: userImg,
    text: '邊緣小杰',
    key: 'user',
    id: 'rjerilgj',
    route: '/setting'
  },
  {
    icon: bell,
    text: '追蹤名單',
    key: 'track',
    id: '484rthth',
    route: '/follow'
  },
  {
    icon: thumbupImg,
    text: '我按讚的文章',
    key: 'like',
    id: '994rgergh',
    route: '/like'
  }
];
</script>

<template>
  <div class="px-6 py-8 bg-white border-2 basis">
    <NuxtLink to="/create">
      <button
        class="w-full mb-6 leading-5 text-white border-2 rounded after:border-2 after:bg-primary after:border-black ghost-bl-2 after:hover:bg-yellow after:hover:rounded-[10px] after:rounded-[10px]">
        <span class="inline-block w-full py-4 font-mono font-bold text-center border-2 border-black rounded bg-primary hover:bg-yellow hover:text-black">
          張貼動態
        </span>
      </button>
    </NuxtLink>

    <template 
      v-for="(item, index) in sidebarList"
      :key="item.id"
    >
      <NuxtLink :to="item.route">
        <div :class="{ 'mb-[22px]': index !== (sidebarList.length - 1) }">
          <img
            width="50px"
            :src="(item as Item).icon" 
            alt=""
            class="inline-block mr-4 ">
          <h6 class="inline-block font-bold">
            {{ (item as Item).text }}
          </h6>
        </div>
      </NuxtLink>
    </template>
  </div>
</template>