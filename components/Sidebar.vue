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
  <div class=" border-2 bg-white px-6 py-8">
    <button 
      class="font-mono font-bold text-center leading-5
        bg-primary text-white border-black
          rounded border-2
          py-4 mb-6
          w-full">
      張貼動態
    </button>

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
            class=" inline-block mr-4">
          <h6 class="inline-block font-bold">
            {{ (item as Item).text }}
          </h6>
        </div>
      </NuxtLink>
    </template>
  </div>
</template>