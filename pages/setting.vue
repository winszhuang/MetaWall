<script lang="ts" setup>
import { ref } from 'vue';

const operation = [
  {
    key: 'editName',
    name: '暱稱修改',
  },
  {
    key: 'resetPassword',
    name: '重設密碼',
  }
];

const router = useRouter();
const currentOperate = ref(operation[0]);

watch(currentOperate, (operate) => {
  router.push(`/setting/${operate.key}`);
}, { immediate: true });
</script>

<template>
  <div>
    <h2 class="relative bg-white text-center isolate font-mono font-bold text-xl mb-4
      after:absolute after:w-full after:h-full after:bg-white after:-left-1 after:top-1 after:border-2 after:z-[-1]">
      <div class="w-full py-[18px] border-2 bg-white">
        修改個人資料
      </div>
    </h2>

    <nav class="flex font-noto mt-8">
      <div class="mr-4"></div>
      <template 
        v-for="item in operation"
        :key="item.key"
      >
        <button
          class="text-base px-6 py-2 rounded-t border-2 border-b-0 border-black"
          :class="item.key === currentOperate.key 
            ? 'bg-black text-white'
            : 'bg-white text-black'"
          @click="currentOperate = item"
        >
          {{ item.name }}
        </button>
      </template>
    </nav>
    <section class="border-2 rounded bg-white py-8 flex flex-col items-center">
      <NuxtPage />
    </section>
  </div>
</template>