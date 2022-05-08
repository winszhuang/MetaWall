<script lang="ts" setup>
import { ValidateImgFunc } from '@/types/validate';

export type UploadHandler = (data: EmitData) => void;
export interface EmitData {
  info: {
    message: string,
    success: boolean
  },
  url: string,
  file: File
};

const props = withDefaults(defineProps<{
  text?: string,
  uploadType?: string,
  validationFuncList: ValidateImgFunc[]
}>(), {
  text: '上傳',
});
const emits = defineEmits<{
  (e: 'update', data: EmitData): void
}>()

const getNewFile = (e: Event) => {
  try {
    const file = (e.target as HTMLInputElement).files[0];
  
    if (file.type.match(/image.*/)) {
      const image = new Image();
      const imgUrl = URL.createObjectURL(file);

      image.src = imgUrl;
      image.onload = () => {
        for (const customValidationFunc of props.validationFuncList) {
          const trueOrErrorMessage = customValidationFunc({
            imgElement: image,
            file
          });

          if (trueOrErrorMessage !== true) {
            emits('update', {
              url: '',
              file: null,
              info: { success: false, message: trueOrErrorMessage }
            });
            return;
          }
        }

        // 驗證全部通過就回傳正確的值
        emits('update', {
          url: imgUrl,
          file,
          info: { success: true, message: '' }
        });
      }
      return;
    }
  
    throw new Error('file is not a image');
  } catch (error) {
    console.error(error);
  }
};

</script>

<template>
  <div class="text-center">
    <input
      @change="getNewFile"
      hidden
      accept="image/*"
      class="px-6 py-1 mb-3 text-white bg-black "
      type="file" id="fileupload" name="fileupload" 
    />
    <label
      for="fileupload"
      class="block px-6 py-1 mb-3 text-white bg-black cursor-pointer">
      {{ props.text }}
    </label>
  </div>
</template>