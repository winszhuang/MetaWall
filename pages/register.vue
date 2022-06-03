<script lang="ts" setup>
import { Form } from 'vee-validate'
import { RoutePathEnum } from '@/enum/routePathEnum'
import { object, string } from 'yup'
import { signUp } from '@/services/authService'
import { ResponseStatusEnum } from '@/enum/responseStatusEnum'

const router = useRouter()

const schema = object().shape({
  name: string().required().min(2, '至少2碼'),
  email: string().required().email('email格式錯誤'),
  password: string().matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, '密碼必須英數混合')
})

const onSubmit = async (values: any) => {
  const result = await signUp({
    name: (values as SignUpReq).name,
    email: (values as SignUpReq).email,
    password: (values as SignUpReq).password
  })

  if (result.status === ResponseStatusEnum.Success) {
    router.push(RoutePathEnum.Login)
  } else {
    console.log('註冊有問題')
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
      註冊
    </h2>

    <Form
      v-slot="{ meta }"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <FormInput
        name="name"
        type="text"
        placeholder="暱稱"
      />
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
        text="註冊"
        type="submit"
      />
    </Form>
    <NuxtLink
      to="/login"
      class="font-mono text-base"
    >
      登入
    </NuxtLink>
  </div>
</template>
