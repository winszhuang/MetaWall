<script lang="ts" setup>
import { ref } from 'vue';
import { GenderEnum } from '@/enum/gender';

const userInfo = ref({
  avator: 'https://www.w3schools.com/howto/img_avatar.png',
  name: '邊緣小杰',
  gender: GenderEnum.Male
});

const hasError = ref(false);

</script>

<template>
  <div class="w-80 font-noto">
    <div class="flex flex-col items-center">
      <img
        class=" border-2 rounded-[53px] mb-4"
        :src="userInfo.avator" 
        alt="" 
        width="107px">
      
      <button class=" mb-3 py-1 px-6 bg-black text-white">
        上傳大頭照
      </button>

      <label class="w-full mb-4">
        <h6 class="mb-1">
          暱稱
        </h6>
        <input 
          class=" border-2 placeholder:text-base placeholder:leading-[22px] text-cyan-1 text-left block bg-cyan-5 w-full py-2 px-4 pr-3" 
          placeholder="請輸入暱稱" 
          type="text"
          v-model="userInfo.name"
        />
      </label>
      
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
        v-if="hasError"
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