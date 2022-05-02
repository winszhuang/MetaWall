<script lang="ts" setup>
import { ValidateImgFunc } from '@/types/validate';

export type UploadHandler = (data: EmitData) => void;
export interface EmitData {
  info: {
    message: string,
    success: boolean
  },
  url: string
};

const props = withDefaults(defineProps<{
  text?: string,
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
          const trueOrErrorMessage = customValidationFunc(image);

          if (trueOrErrorMessage !== true) {
            emits('update', {
              url: '',
              info: { success: false, message: trueOrErrorMessage }
            });
            return;
          }
        }

        // 驗證全部通過就回傳正確的值
        emits('update', {
          url: imgUrl,
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
  <div>
    <input
      @change="getNewFile"
      hidden
      accept="image/*"
      class=" mb-3 py-1 px-6 bg-black text-white"
      type="file" id="fileupload" name="fileupload" 
    />
    <label
      for="fileupload"
      class="block mb-3 py-1 px-6 bg-black text-white cursor-pointer">
      {{ props.text }}
    </label>
  </div>
</template>