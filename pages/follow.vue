<script lang="ts" setup>
import dayjs from 'dayjs'
import { getFollowing } from '@/services/followService'
import { useUserStore } from '@/store/userStore'
import { RoutePathEnum } from '@/enum/routePathEnum'
import { storeToRefs } from 'pinia'

const router = useRouter()
const userStore = useUserStore()
const { userFollowingList } = storeToRefs(userStore)

const followDays = computed(() =>
  (date: string) => {
    const followedTime = dayjs(date)
    const now = dayjs()
    return now.diff(followedTime, 'day')
  })

const toSpecificUserPage = (userId: string) => {
  router.push(RoutePathEnum.SpecificUser.replace(':userId', userId))
}
</script>

<template>
  <div>
    <h2
      class="relative bg-white text-center isolate font-mono font-bold text-xl mb-4
      after:absolute after:w-full after:h-full after:bg-white after:-left-1 after:top-1 after:border-2 after:z-[-1]"
    >
      <div class="w-full py-[18px] border-2 bg-white">
        追蹤名單
      </div>
    </h2>

    <template v-if="userFollowingList.length">
      <PersonCard
        v-for="item in userFollowingList"
        :key="item._id"
        :info="item"
        class="mb-4"
        @click-name="toSpecificUserPage"
      >
        <template #default="{ info }">
          <div class="text-sm font-noto">
            您已追蹤{{ followDays(info.followedAt) }}天
          </div>
        </template>
      </PersonCard>
    </template>
  </div>
</template>
