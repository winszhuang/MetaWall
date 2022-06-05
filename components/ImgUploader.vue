<script lang="ts" setup>
import { errorMessgae } from '@/constants/errorMessage'
import { UploadHandler, EmitData } from './Uploader.vue'
import { ValidateImgFunc } from '@/types/validate'

const props = withDefaults(defineProps<{
  text?: string,
}>(), {
  text: '上傳'
})
const emits = defineEmits<{(e: 'update', data: EmitData): void}>()

const currentImageUrl = ref('')
const imgRef = ref<HTMLImageElement>()

const emitUpdate: UploadHandler = (data) => {
  currentImageUrl.value = data.url
  emits('update', data)
}

/** 驗證圖片大小是否1MB以內 */
const sizeLessThan1Mb: ValidateImgFunc = (imageData) => {
  const { file } = imageData
  // 單位KB
  const size = file.size / 1024

  return size < 1024 ? true : errorMessgae.jpgAndPngAndGreaterThan1mb
}

/** 驗證圖片是否是JPG和PNG */
const isJpgOrPng: ValidateImgFunc = (imageData) => {
  const { file } = imageData

  return file.type === 'image/jpeg' ||
    file.type === 'image/png'
    ? true
    : errorMessgae.jpgAndPngAndGreaterThan1mb
}

</script>

<template>
  <section>
    <Uploader
      class="w-32 mb-4"
      :text="props.text"
      :validation-func-list="[sizeLessThan1Mb, isJpgOrPng]"
      @update="emitUpdate"
    />
    <img
      v-if="currentImageUrl"
      ref="imgRef"
      class="w-full mx-auto border-2 rounded after:content-[xjjj]"
      :src="currentImageUrl"
      alt=""
      width="107"
    >
    <img
      v-else
      ref="imgRef"
      class="w-full mx-auto border-2 rounded after:content-[xjjj]"
      src="@/assets/image/defaultimage.png"
      alt=""
      width="107"
    >
  </section>
</template>
