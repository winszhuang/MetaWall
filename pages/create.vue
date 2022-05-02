<script lang="ts" setup>
import { ref } from 'vue';
import { UploadHandler } from '@/components/Uploader.vue';

const currentErrorMessage = ref('');
const isFileFormatCorrect = ref(true);
const data = ref({
  content: '',
  imgUrl: ''
});

const handleAfterUpload: UploadHandler = (emitData) => {
  isFileFormatCorrect.value = emitData.info.success;
  currentErrorMessage.value = emitData.info.message;
  data.value.imgUrl = emitData.url;
};
</script>

<template>
  <div>
    <h2 class="relative bg-white text-center isolate font-mono font-bold text-xl mb-4
      after:absolute after:w-full after:h-full after:bg-white after:-left-1 after:top-1 after:border-2 after:z-[-1]">
      <div class="w-full py-[18px] border-2 bg-white">
        張貼動態
      </div>
    </h2>
  
    <section class="border-2 rounded bg-white p-8 font-noto">
      <Inputer
        v-model:value="data.content"
        title="貼文內容"
        placeholder="來寫點什麼吧"
        class="mb-4"
        tag="textarea"
      />

      <ImgUploader
        text="上傳圖片"
        class="mb-8"
        @update="handleAfterUpload"
      />

      <pre
        v-if="!isFileFormatCorrect"
        class="text-negative text-center text-sm mb-4"
      >{{ currentErrorMessage }}</pre>

      <Btn
        class="mx-auto font-noto"
        text="送出貼文"
        bg-color-class="bg-yellow active:bg-primary"
        text-color-class="text-black active:text-white"
        width-class="sm:w-[323px] w-full"
      />
    </section>

  </div>
</template>