<script lang="ts" setup>
const props = defineProps<{
  text: string,
  bgColorClass: string,
  textColorClass: string,
  widthClass: string
}>();
</script>

<template>
  <button 
    class="relative text-center isolate font-mono font-bold text-base block
      after:absolute after:w-full after:h-full after:-left-0.5 after:top-0.5 after:border-[3px] after:z-[-1] after:rounded"
    :class="`after:${props.bgColorClass} after:${props.textColorClass} ${props.widthClass}`"
  >
    <h6
      class="py-[18px] border-2 rounded border-black"
      :class="`${props.bgColorClass} ${props.textColorClass} ${props.widthClass}`">
      {{ props.text }}
    </h6>
  </button>
</template>