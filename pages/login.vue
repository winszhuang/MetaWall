<script lang="ts" setup>
import { ref } from 'vue';
import { errorMessgae } from '@/constants/errorMessage';

const showError = ref(false);
const data = ref({
  email: '',
  password: ''
});

const hasError = () => !data.value.email || !data.value.password;
const submit = () => {
  if(hasError()) {
    showError.value = true;
    return;
  }

  showError.value = false;
  console.log('post api!!');
};

definePageMeta({
  layout: "entrance",
});
</script>

<template>
  <div class="px-4 md:pr-12 md:pl-0 text-center -translate-y-1/2 mt-[50vh]">
    <h1 class="font-paytone text-primary text-6xl leading-[1.4]">
      MetaWall
    </h1>
    <h2 class=" font-helvetica font-bold text-2xl mb-8">
      到元宇宙展開全新社交圈
    </h2>

    <Inputer
      v-model:value="data.email"
      class="mb-4"
      placeholder="Email"
      type="email"/>
    <Inputer
      v-model:value="data.password"
      class="mb-8"
      placeholder="Password"
      type="password"/>

    <!-- 錯誤信息 -->
    <pre
        v-if="showError"
        class="text-negative text-center text-sm mb-4 font-noto"
    >{{ errorMessgae.emailOrPasswordError }}</pre>

    <Btn
      class="mb-4"
      text="登入"
      @click="submit"
    />
    <NuxtLink 
      to="/register"
      class="font-mono text-base"
    >
      註冊帳號
    </NuxtLink>
  </div>
</template>