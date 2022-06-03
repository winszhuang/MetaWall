<script lang="ts" setup>
import { ref } from 'vue'
import { errorMessgae } from '@/constants/errorMessage'

const showError = ref(false)
const data = ref({
  name: '',
  email: '',
  password: ''
})

const hasError = () => !data.value.email || !data.value.password || !data.value.name
const submit = () => {
  if (hasError()) {
    showError.value = true
    return
  }

  showError.value = false
  console.log('post api!!')
}

definePageMeta({
  layout: 'entrance'
})
</script>

<template>
  <div class="px-4 md:pr-12 md:pl-0 text-center -translate-y-1/2 mt-[50vh]">
    <h1 class="font-paytone text-primary text-6xl leading-[1.4]">
      MetaWall
    </h1>
    <h2 class="mb-8 text-2xl font-bold  font-helvetica">
      註冊
    </h2>

    <Inputer
      v-model:value="data.name"
      class="mb-4"
      placeholder="暱稱"
      type="password"
    />
    <Inputer
      v-model:value="data.email"
      class="mb-4"
      placeholder="Email"
      type="email"
    />
    <Inputer
      v-model:value="data.password"
      class="mb-8"
      placeholder="Password"
      type="password"
    />

    <!-- 錯誤信息 -->
    <pre
      v-if="showError"
      class="mb-4 text-sm text-center text-negative font-noto"
    >{{ errorMessgae.emailOrPasswordError }}</pre>

    <Btn
      class="mb-4"
      text="註冊"
      @click="submit"
    />
    <NuxtLink
      to="/login"
      class="font-mono text-base"
    >
      登入
    </NuxtLink>
  </div>
</template>
