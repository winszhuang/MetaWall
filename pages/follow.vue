<script lang="ts" setup>
const followList = [
  {
    avator: '',
    name: '愛爾敏',
    followAt: '2022/1/10 12:00',
    followTime: '90',
    id: 'ehwfilwehjf'
  },
  {
    avator: '',
    name: '李維',
    followAt: '2005/3/6 5:27',
    followTime: '35',
    id: 'nerilhni'
  },
  {
    avator: '',
    name: '米歇爾',
    followAt: '2019/5/13 9:00',
    followTime: '22',
    id: 'pnmonrog'
  }
];
</script>

<template>
  <div>
    <h2 class="relative bg-white text-center isolate font-mono font-bold text-xl mb-4
      after:absolute after:w-full after:h-full after:bg-white after:-left-1 after:top-1 after:border-2 after:z-[-1]">
      <div class="w-full py-[18px] border-2 bg-white">
        追蹤名單
      </div>
    </h2>
  
    <PersonCard 
      v-for="item in followList"
      :key="item.id"
      :info="item"
      class="mb-4"/>
  </div>
</template>