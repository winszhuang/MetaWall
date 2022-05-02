<script lang="ts" setup>
import { ref } from 'vue';
import { GenderEnum } from '@/enum/gender';
import { UploadHandler } from '@/components/AvatorUploader.vue';

const imgUrl = ref('');
const isFileFormatCorrect = ref(true);
const userInfo = ref({
  avator: 'https://www.w3schools.com/howto/img_avatar.png',
  name: '邊緣小杰',
  gender: GenderEnum.Male
});

const handleAfterUpload: UploadHandler = (data) => {
  isFileFormatCorrect.value = data.info.success;
  imgUrl.value = data.url;
};

</script>

<template>
  <div class="xs:w-80 mx-4 xs:mx-0 font-noto">
    <div class="flex flex-col items-center">
      <!-- 上傳圖片 -->
      <AvatorUploader 
        text="上傳大頭照"
        @update="handleAfterUpload"/>

      <Inputer
        class="mb-4"
        v-model="userInfo.name"
        title="暱稱"
        placeholder="請輸入暱稱"
      />
      
      <section class="w-full mb-8">
        <h6 class="mb-1">
          暱稱
        </h6>
        <div class="flex">
          <label for="item1" class="flex mr-6 cursor-pointer">
            <div class="flex items-center justify-center mr-3">
              <input
                @click="userInfo.gender = GenderEnum.Male"
                id="item1"
                name="radio"
                type="radio" 
                checked="true"
                class="relative w-5 h-5 accent-black after:border-2 cursor-pointer
                  after:absolute after:w-full after:h-full after:rounded-[50px]"
              >
            </div>
            <span>
              男性
            </span>
          </label>
          <label for="item2" class="flex mr-6 cursor-pointer">
            <div class="flex items-center justify-center mr-3">
              <input
                @click="userInfo.gender = GenderEnum.Female"
                id="item2"
                name="radio"
                type="radio"
                class="relative w-5 h-5 accent-black after:border-2 cursor-pointer
                  after:absolute after:w-full after:h-full after:rounded-[50px]"
              >
            </div>
            <span>
              女性
            </span>
          </label>
        </div>
      </section>

      <!-- 錯誤警示 -->
      <section
        v-if="!isFileFormatCorrect"
        class="text-negative text-center text-sm mb-4">
        1.圖片寬高比必需為 1:1，請重新輸入<br/> 2. 解析度寬度至少 300像素以上，請重新輸入
      </section>

      <Btn
        text="送出更新"
        bg-color-class="bg-yellow active:bg-primary"
        text-color-class="text-black active:text-white"
        width-class="w-full"
      />
    </div>
  </div>
</template>