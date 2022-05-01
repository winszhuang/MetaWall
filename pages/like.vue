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
        我按讚的貼文
      </div>
    </h2>
  
    <PersonCard 
      v-for="item in followList"
      :key="item.id"
      :info="item"
      class="mb-4"
    >
      <template #default="{ info }">
        <div class="text-sm font-noto pr-6">
          <button class="text-center mr-8">
            <font-awesome-icon 
              :icon="['far', 'thumbs-up']"
              class="w-5 mx-auto mb-1"
            />
            <span class="font-bold">
              取消
            </span>
          </button>

          <button class="text-center">
            <font-awesome-icon 
              :icon="['far', 'arrow-alt-circle-right']"
              class="w-5 mx-auto mb-1"
            />
            <span class="font-bold">
              查看
            </span>
          </button>
        </div>
      </template>  
    </PersonCard>
  </div>
</template>