<script lang="ts" setup>
const props = defineProps<{
  info: {
    avator: string,
    name: string,
    followAt: string,
    followTime: string,
    id: string
  }
}>();
</script>

<template>
  <div class="relative bg-white border-2 rounded p-4 flex justify-between items-end isolate
    after:absolute after:w-full after:-bottom-1 after:h-full after:border-b-2 after:rounded after:left-0 after:z-[-1]">
    <div class="flex items-center">
      <img :src="props.info.avator" alt="" width="30px">
      <div class="ml-4">
        <h6 class="font-bold font-mono leading-5 mb-1">
          {{ props.info.name }}
        </h6>
        <div class="text-xs text-grey-400">
          追蹤時間 : {{ props.info.followAt }}
        </div>
      </div>
    </div>

    <slot :info="props.info"/>
  </div>
</template>