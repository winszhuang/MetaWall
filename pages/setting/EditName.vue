<script lang="ts" setup>
import { ref } from 'vue'
import { GenderEnum } from '@/enum/gender'
import { UploadHandler } from '@/components/Uploader.vue'
import { postImage } from '@/services/imageService'
import { updateUserProfile } from '@/services/userService'
import { correctImageUrl } from '@/helpers/correctImageUrl'
import { ResponseStatusEnum } from '@/enum/responseStatusEnum'
import { useUserStore } from '@/store/userStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { userProfile } = storeToRefs(userStore)

userStore.fetchUserProfile()

const imgUrl = ref('')
const currentErrorMessage = ref('')
const isFileFormatCorrect = ref(true)
const localUserProfile = ref({ name: '', avatar: '', gender: GenderEnum.Male })

const handleAfterUpload: UploadHandler = async (data) => {
  isFileFormatCorrect.value = data.info.success
  currentErrorMessage.value = data.info.message
  imgUrl.value = data.url

  if (!data.file) return

  const result = (await postImage(data.file)).data
  if (result.imageUrl.includes('images/')) {
    // localUserProfile.value.avatar = result.imageUrl.split('images/')[1]
  }
}

const submit = async () => {
  const result = await updateUserProfile(localUserProfile.value)
  if (result.status === ResponseStatusEnum.Fail) {
    return
  }
  alert('更新成功')

  await userStore.fetchUserProfile()
}

// watch(userProfile, (data) => {
//   if (data) {
//     localUserProfile.value = { ...data }
//   }
// }, { immediate: true })

</script>

<template>
  <div class="mx-4 xs:w-80 xs:mx-0 font-noto">
    <div class="flex flex-col items-center">
      <div>
        {{ localUserProfile?.name }}
      </div>
      ---
      <!-- 上傳圖片 -->
      <AvatorUploader
        :image-url="correctImageUrl(localUserProfile.avatar)"
        text="上傳大頭照"
        @update="handleAfterUpload"
      />

      <Inputer
        v-model:value="localUserProfile.name"
        class="mb-4"
        title="暱稱"
        placeholder="請輸入暱稱"
      />

      <section class="w-full mb-8">
        <h6 class="mb-1">
          暱稱
        </h6>
        <div class="flex">
          <label
            for="item1"
            class="flex mr-6 cursor-pointer"
          >
            <div class="flex items-center justify-center mr-3">
              <input
                id="item1"
                v-model="localUserProfile.gender"
                :value="GenderEnum.Male"
                name="radio"
                type="radio"
                checked="true"
                class="relative w-5 h-5 accent-black after:border-2 cursor-pointer
                  after:absolute after:w-full after:h-full after:rounded-[50px]"
                @click="localUserProfile.gender = GenderEnum.Male"
              >
            </div>
            <span>
              男性
            </span>
          </label>
          <label
            for="item2"
            class="flex mr-6 cursor-pointer"
          >
            <div class="flex items-center justify-center mr-3">
              <input
                id="item2"
                v-model="localUserProfile.gender"
                :value="GenderEnum.Female"
                name="radio"
                type="radio"
                class="relative w-5 h-5 accent-black after:border-2 cursor-pointer
                  after:absolute after:w-full after:h-full after:rounded-[50px]"
                @click="localUserProfile.gender = GenderEnum.Female"
              >
            </div>
            <span>
              女性
            </span>
          </label>
        </div>
      </section>

      <!-- 錯誤警示 -->
      <pre
        v-if="!isFileFormatCorrect"
        class="mb-4 text-sm text-center text-negative"
      >{{ currentErrorMessage }}</pre>

      <Btn
        text="送出更新"
        bg-color-class="bg-yellow active:bg-primary"
        text-color-class="text-black active:text-white"
        width-class="w-full"
        @click="submit"
      />
    </div>
  </div>
</template>
