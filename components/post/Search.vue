<script lang="ts" setup>
import { ref, watch } from 'vue';

const emits = defineEmits(['update:value']);
const props = defineProps<{
  placeholder: string
}>();

const data = ref('');

watch(data, (value) => {
  emits('update:value', value);
})
</script>

<template>
  <label class="relative flex bg-white">
    <input 
      class=" border-2 placeholder:text-base placeholder:leading-[22px] text-cyan-1 text-left block bg-cyan-5 w-full py-2 px-4 pr-3" 
      :placeholder="props.placeholder" 
      type="text"
      v-model="data"
    />
    <div class="flex justify-center items-center bg-primary text-white border-black border-2 border-l-0 w-[46px]">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="w-5" />
    </div>
  </label>
</template>