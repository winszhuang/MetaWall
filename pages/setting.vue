<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

const baseUrl = '/setting';
const operation = [
  {
    path: `${baseUrl}/editName`,
    name: '暱稱修改',
  },
  {
    path: `${baseUrl}/resetPassword`,
    name: '重設密碼',
  }
];
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
        :key="item.path"
      >
        <button
          class="text-base px-6 py-2 rounded-t border-2 border-b-0 border-black"
          :class="item.path === route.path 
            ? 'bg-black text-white'
            : 'bg-white text-black'"
          @click="router.push(item.path)"
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