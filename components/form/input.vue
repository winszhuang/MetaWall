<script lang="ts" setup>
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = withDefaults(defineProps<{
  type: string,
  value?: string,
  name: string,
  placeholder: string,
}>(), {
  type: 'text',
  value: ''
})

const name = toRef(props, 'name')

const {
  value,
  errorMessage,
  handleBlur,
  handleChange,
  meta
} = useField(name, undefined, {
  initialValue: props.value
})
</script>

<template>
  <div
    class="relative w-full mb-5 leading-[51px]"
  >
    <input
      :id="name"
      v-model="value"
      class=" placeholder:text-base placeholder:leading-[22px] text-left block w-full px-4 pr-3 border-2 border-black "
      :name="name"
      :type="type"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    >
    <pre
      :class="{ 'visible': errorMessage || meta.valid }"
      class="h-3 mb-4 text-sm text-center text-negative font-noto"
    >{{ errorMessage }}</pre>
  </div>
</template>
