<script lang="ts" setup>
import { ref } from 'vue';
import { UploadHandler } from '@/components/Uploader.vue';

const currentErrorMessage = ref('');
const isFileFormatCorrect = ref(true);
const data = ref({
  content: '',
  imgUrl: ''
});

const handleAfterUpload: UploadHandler = async (emitData) => {
  isFileFormatCorrect.value = emitData.info.success;
  currentErrorMessage.value = emitData.info.message;

  if(!emitData.file) return;

  const result = (await postImage(emitData.file)).data;
  if (result.imageUrl.includes('images/')) {
    data.value.imgUrl = result.imageUrl.split('images/')[1];
  }
};

const submitPost = async () => {
  const { content, imgUrl } = data.value;
  const result = await addPost({
    content,
    image: imgUrl
  });

  if (result.data) {
    useRouter().push('/');
  }
}
</script>

<template>
  <div>
    <h2 class="relative bg-white text-center isolate font-mono font-bold text-xl mb-4
      after:absolute after:w-full after:h-full after:bg-white after:-left-1 after:top-1 after:border-2 after:z-[-1]">
      <div class="w-full py-[18px] border-2 bg-white">
        張貼動態
      </div>
    </h2>
  
    <section class="p-8 bg-white border-2 rounded font-noto">
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
        class="mb-4 text-sm text-center text-negative"
      >{{ currentErrorMessage }}</pre>

      <button
        @click="submitPost"
        :disabled="!data.content"
        :class="data.content ? 'bg-primary text-white hover:bg-yellow hover:text-black' : 'bg-grey-500'"
        class="w-full py-4 font-mono font-bold text-center border-2 border-black rounded">
        送出貼文
      </button>
    </section>

  </div>
</template>