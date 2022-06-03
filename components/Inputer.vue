<script lang="ts" setup>
import { ref, watch } from 'vue'

const emits = defineEmits(['update:value'])
const props = withDefaults(defineProps<{
  title?: string,
  placeholder: string,
  type?: string,
  tag?: 'input' | 'textarea'
}>(), {
  type: 'text',
  tag: 'input'
})

const data = ref('')

watch(data, (value) => {
  emits('update:value', value)
})

</script>

<template>
  <label class="block w-full">
    <h6
      v-if="props.title"
      class="mb-1"
    >
      {{ props.title }}
    </h6>
    <input
      v-if="props.tag === 'input'"
      v-model="data"
      class="border-2 placeholder:text-base placeholder:leading-[22px] text-cyan-1 text-left block bg-cyan-5 w-full py-2 px-4 pr-3"
      :placeholder="props.placeholder"
      :type="props.type"
    >
    <textarea
      v-if="props.tag === 'textarea'"
      id="e-textarea"
      v-model="data"
      rows="3"
      class="h-[169px] border-2 placeholder:text-base placeholder:leading-[22px] text-cyan-1 text-left block bg-cyan-5 w-full py-2 px-4 pr-3"
      :placeholder="props.placeholder"
    />
  </label>
</template>
