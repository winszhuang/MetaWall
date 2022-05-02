<script lang="ts" setup>
import { errorMessgae } from '@/constants/errorMessage';
import { UploadHandler, EmitData } from './Uploader.vue';

const props = withDefaults(defineProps<{
  text?: string,
}>(), {
  text: '上傳',
});
const emits = defineEmits<{
  (e: 'update', data: EmitData): void
}>()

const currentImageUrl = ref('');
const imgRef = ref<HTMLImageElement>();

const emitUpdate: UploadHandler = (data) => {
  currentImageUrl.value = data.url;
  emits('update', data);
};

/** 驗證圖片是否1:1比例 */
const ratio1To1 = (imgElement: HTMLImageElement) => {
  const width = imgElement.naturalWidth | imgElement.width;
  const height = imgElement.naturalHeight | imgElement.height;

  return width === height ? true : errorMessgae.ratio11AndGreaterThan300;
}

/** 驗證圖片寬度是否大於300px */
const widthGreaterThan300px = (imgElement: HTMLImageElement) => {
  const width = imgElement.naturalWidth | imgElement.width;
  
  return width >= 300 ? true : errorMessgae.ratio11AndGreaterThan300;
}

</script>

<template>
  <section class="text-center">
    <img
      ref="imgRef"
      class="mx-auto border-2 rounded-[100px] mb-4"
      :src="currentImageUrl || '../assets/image/user_default.png'" 
      alt="" 
      width="107px"
    >
    <Uploader
      @update="emitUpdate"
      :text="props.text"
      :validation-func-list="[ratio1To1, widthGreaterThan300px]"/>
  </section>
</template>