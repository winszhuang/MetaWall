<script lang="ts" setup>
import { errorMessgae } from '@/constants/errorMessage'
import { UploadHandler, EmitData } from './Uploader.vue'
import { ValidateImgFunc } from '@/types/validate'
import { correctImageUrl } from '@/helpers/correctImageUrl'

const props = withDefaults(defineProps<{
  imageUrl?: string,
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

/** 驗證圖片是否1:1比例 */
const ratio1To1: ValidateImgFunc = (imageData) => {
  const { imgElement } = imageData
  const width = imgElement.naturalWidth | imgElement.width
  const height = imgElement.naturalHeight | imgElement.height

  return width === height ? true : errorMessgae.ratio11AndGreaterThan300
}

/** 驗證圖片寬度是否大於300px */
const widthGreaterThan300px: ValidateImgFunc = (imageData) => {
  const { imgElement } = imageData
  const width = imgElement.naturalWidth | imgElement.width

  return width >= 300 ? true : errorMessgae.ratio11AndGreaterThan300
}

watch(() => props.imageUrl, (url) => {
  currentImageUrl.value = url
}, { immediate: true })

</script>

<template>
  <section class="text-center">
    <img
      v-if="currentImageUrl"
      ref="imgRef"
      class="mx-auto border-2 rounded-[100px] mb-4"
      :src="currentImageUrl"
      alt=""
      width="107"
      height="107"
    >
    <img
      v-else
      ref="imgRef"
      class="mx-auto border-2 rounded-[100px] mb-4"
      src="../assets/image/user.png"
      alt=""
      width="107"
      height="107"
    >
    <Uploader
      :text="props.text"
      :validation-func-list="[ratio1To1, widthGreaterThan300px]"
      @update="emitUpdate"
    />
  </section>
</template>
