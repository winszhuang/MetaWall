<script lang="ts" setup>
import { correctImageUrl } from '@/helpers/correctImageUrl'
import { useUserStore } from '@/store/userStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()

const { profile } = storeToRefs(userStore)
</script>

<template>
  <div class="px-6 py-8 bg-white border-2 basis font-noto">
    <NuxtLink to="/create">
      <button
        class="w-full mb-6 leading-5 text-white border-2 rounded after:border-2 after:bg-primary after:border-black ghost-bl-2 after:hover:bg-yellow after:hover:rounded-[10px] after:rounded-[10px]"
      >
        <span class="inline-block w-full py-4 font-mono font-bold text-center border-2 border-black rounded bg-primary hover:bg-yellow hover:text-black">
          張貼動態
        </span>
      </button>
    </NuxtLink>

    <NuxtLink
      to="/setting"
      class="mb-[22px] inline-block"
    >
      <img
        v-if="profile?.avatar"
        :src="correctImageUrl(profile.avatar)"
        class="inline-block mr-4"
        width="50"
        height="50"
        loading="lazy"
      >
      <img
        v-else
        width="50"
        height="50"
        src="@/assets/image/user.png"
        alt=""
        class="inline-block mr-4"
      >

      <h6 class="inline-block font-bold hover:text-primary">
        {{ profile?.name || '使用者' }}
      </h6>
    </NuxtLink>

    <NuxtLink
      to="/follow"
      class="mb-[22px] inline-block"
    >
      <span class="inline-block leading-[46px] w-[50px] mr-4 rounded-full border-2  text-center bg-light hover:bg-primary hover:text-white hover:border-black">
        <font-awesome-icon
          :icon="['far', 'bell']"
          class="inline-block w-5"
        />
      </span>
      <h6 class="inline-block font-bold hover:text-primary">
        追蹤名單
      </h6>
    </NuxtLink>

    <NuxtLink
      to="/follow"
      class="inline-block"
    >
      <span class="inline-block leading-[46px] w-[50px] mr-4 rounded-full bg-light border-2  text-center hover:bg-primary hover:text-white hover:border-black">
        <font-awesome-icon
          :icon="['far', 'thumbs-up']"
          class="inline-block w-5"
        />
      </span>
      <h6 class="inline-block font-bold hover:text-primary">
        追蹤名單
      </h6>
    </NuxtLink>
  </div>
</template>
