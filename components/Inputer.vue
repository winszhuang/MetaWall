<script lang="ts" setup>
import { ref, watch } from 'vue';

const emits = defineEmits(['update:value']);
const props = defineProps<{
  title: string,
  placeholder: string
}>();

const data = ref('');

watch(data, (value) => {
  emits('update:value', value);
})

</script>

<template>
  <label class="w-full">
    <h6 class="mb-1">
      {{ props.title }}
    </h6>
    <input 
      class=" border-2 placeholder:text-base placeholder:leading-[22px] text-cyan-1 text-left block bg-cyan-5 w-full py-2 px-4 pr-3" 
      :placeholder="props.placeholder" 
      type="text"
      v-model="data"
    />
  </label>
</template>