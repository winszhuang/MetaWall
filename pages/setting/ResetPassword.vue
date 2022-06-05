<script lang="ts" setup>
import { Form } from 'vee-validate'
import { object, string, ref as yupRef } from 'yup'
import { updatePassword } from '@/services/userService'
import { updatePasswordReq } from '@/types/reqRes/user'

const schema = object().shape({
  password: string().matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, '密碼必須英數混合'),
  confirmPassword: string().oneOf([yupRef('password'), null], '密碼必須一致')
})

const submit = async (values: any) => {
  await updatePassword(values as updatePasswordReq)
}

</script>

<template>
  <div class="mx-4 xs:w-80 xs:mx-0 font-noto">
    <Form
      v-slot="{ meta }"
      :validation-schema="schema"
      @submit="submit"
    >
      <h6 class="mb-1">
        輸入新密碼
      </h6>
      <FormInput
        title="輸入新密碼"
        name="password"
        type="password"
        placeholder="請輸入新密碼"
      />
      <h6 class="mb-1">
        再次輸入
      </h6>
      <FormInput
        title="再次輸入"
        name="confirmPassword"
        type="password"
        placeholder="再次輸入新密碼"
      />
      <Btn
        :bg-color-class="meta.valid ? 'bg-primary hover:bg-yellow' : 'bg-grey-500'"
        :text-color-class="meta.valid ? 'text-white hover:text-black': 'text-white'"
        :disabled="!meta.valid"
        class="mb-4"
        text="重設密碼"
        type="submit"
      />
    </Form>
  </div>
</template>
