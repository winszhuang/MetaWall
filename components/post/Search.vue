<script lang="ts" setup>
import { ref } from 'vue';

const emits = defineEmits(['handle', 'update:value']);
const props = defineProps<{
  value: string, // v-model傳入
  placeholder: string
}>();

const data = ref(props.value);

watch(data, (value) => {
  emits('update:value', value);
});

const onClick = () => {
  emits('handle', data.value);
}
</script>

<template>
  <label class="relative flex bg-white">
    <input 
      class=" border-2 placeholder:text-base placeholder:leading-[22px] text-cyan-1 text-left block bg-cyan-5 w-full py-2 px-4 pr-3" 
      :placeholder="props.placeholder" 
      type="text"
      v-model="data"
    />
    <div
      @click="onClick" 
      class="flex justify-center items-center bg-primary text-white border-black border-2 border-l-0 w-[46px] cursor-pointer active:bg-yellow active:text-black">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="w-5" />
    </div>
  </label>
</template>