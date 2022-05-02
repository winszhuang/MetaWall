<script lang="ts" setup>
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
}>(), {
  text: '上傳',
});
const emits = defineEmits<{
  (e: 'update', data: EmitData): void
}>()

const currentImageUrl = ref('');
const imgRef = ref<HTMLImageElement>();

const resetImageUrl = () => currentImageUrl.value = '';

const getNewFile = (e: Event) => {
  try {
    const file = (e.target as HTMLInputElement).files[0];
  
    if (file.type.match(/image.*/)) {
      currentImageUrl.value = URL.createObjectURL(file);

      imgRef.value.onload = () => {
        const width = imgRef.value.naturalWidth | imgRef.value.width;
        const height = imgRef.value.naturalHeight | imgRef.value.height;

        if (width < 300) {
          resetImageUrl();
          emits('update', {
            url: '',
            info: { success: false, message: 'width needs to be greater than 300' }
          });
          return;
        }

        if (width !== height) {
          resetImageUrl();
          emits('update', {
            url: '',
            info: { success: false, message: '1:1 ratio required' }
          });
          return;
        }

        emits('update', {
          url: currentImageUrl.value,
          info: { success: true, message: 'upload success' }
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
  <section class="text-center">
    <img
      ref="imgRef"
      class="mx-auto border-2 rounded-[100px] mb-4"
      :src="currentImageUrl || '../assets/image/user_default.png'" 
      alt="" 
      width="107px">
    <input
      @change="getNewFile"
      hidden
      accept="image/*"
      class=" mb-3 py-1 px-6 bg-black text-white"
      type="file" id="fileupload" name="fileupload" />
    <label
      for="fileupload"
      class="block mb-3 py-1 px-6 bg-black text-white cursor-pointer">
      {{ props.text }}
    </label>
  </section>
</template>