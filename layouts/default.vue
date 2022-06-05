<script lang="ts" setup>
import { injectKeyForReFetchUserProfileFunc, injectKeyForUserProfile } from '@/constants/injectionKey'
import { GenderEnum } from '@/enum/gender'
import { getUserProfile } from '@/services/userService'

const userProfile = ref({
  name: '',
  avatar: '',
  gender: GenderEnum.Male
})

const setUserProfile = async () => {
  const userData = (await getUserProfile()).data
  const { name, avatar, gender } = userData

  userProfile.value = { name, avatar, gender }
}

provide(injectKeyForUserProfile, readonly(userProfile))
provide(injectKeyForReFetchUserProfileFunc, () => setUserProfile())

setUserProfile()
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <main class="bg-[url('@/assets/image/bg.png')] flex-1">
      <div class="mx-auto md:container">
        <div class="flex flex-row justify-between px-3 py-4 md:py-8 md:px-0">
          <!-- 主要貼文區塊 -->
          <div class="w-full md:w-2/3 md:mr-7 ">
            <slot />
          </div>

          <!-- 側邊攔 -->
          <aside class="flex-1 hidden md:block ">
            <Sidebar class="sticky top-8" />
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>
