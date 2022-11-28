<script lang="ts" setup>
import dayjs from 'dayjs'
import { getOneFollowingUserRes } from '@/types/reqRes/follow'

const props = defineProps<{
  info: getOneFollowingUserRes
}>()
const emit = defineEmits<{(e: 'clickName', userId: string): void}>()

const followingDay = computed(() => {
  const followedTime = dayjs(props.info.followedAt)
  const now = dayjs()
  return now.diff(followedTime, 'day')
})
</script>

<template>
  <div
    class="relative bg-white border-2 rounded p-4 flex justify-between items-end isolate
    after:absolute after:w-full after:-bottom-1 after:h-full after:border-b-2 after:rounded after:left-0 after:z-[-1]"
  >
    <div class="flex items-center">
      <img
        :src="props.info?.avatar || ''"
        alt=""
        width="30px"
      >
      <div class="ml-4">
        <h6
          class="mb-1 font-mono font-bold leading-5 cursor-pointer hover:text-primary"
          @click="emit('clickName', props.info._id)"
        >
          {{ props.info?.name || '名稱' }}
        </h6>
        <div class="text-xs text-grey-400">
          追蹤時間 : {{ props.info?.followedAt || '0' }}
        </div>
      </div>
    </div>

    <slot :info="props.info" />
  </div>
</template>
