<script lang="ts" setup>
import { ResponseStatusEnum } from '@/enum/responseStatusEnum'
import { RoutePathEnum } from '@/enum/routePathEnum'
import { signIn } from '@/services/authService'
import { Form } from 'vee-validate'
import { object, string } from 'yup'

const router = useRouter()

const schema = object().shape({
  email: string().required().email('email格式錯誤'),
  password: string().matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, '密碼必須英數混合')
})

const onSubmit = async (values: any) => {
  const result = await signIn({
    email: (values as SignInReq).email,
    password: (values as SignInReq).password
  })

  if (result.status === ResponseStatusEnum.Success) {
    const token = result.data.token
    useLocalStorage().setToken(token)
    router.push(RoutePathEnum.Home)
  } else {
    console.log('登入有問題')
  }
}

definePageMeta({
  layout: 'entrance'
})
</script>

<template>
  <div class="w-full px-4 text-center md:pr-12 md:pl-0">
    <h1 class="font-paytone text-primary text-5xl md:text-6xl !leading-[1.4]">
      MetaWall
    </h1>
    <h2 class="mb-8 text-xl font-bold md:text-2xl font-helvetica">
      到元宇宙展開全新社交圈
    </h2>
    <Form
      v-slot="{ meta }"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <FormInput
        name="email"
        type="email"
        placeholder="Email"
      />
      <FormInput
        name="password"
        type="password"
        placeholder="Password"
      />
      <Btn
        :bg-color-class="meta.valid ? 'bg-primary hover:bg-yellow' : 'bg-grey-500'"
        :text-color-class="meta.valid ? 'text-white hover:text-black': 'text-white'"
        :disabled="!meta.valid"
        class="mb-4"
        text="登入"
        type="submit"
      />
    </Form>
    <NuxtLink
      to="/register"
      class="font-mono text-base"
    >
      註冊帳號
    </NuxtLink>
  </div>
</template>
