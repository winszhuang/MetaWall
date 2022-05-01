<script lang="ts" setup>
import { ref, computed } from 'vue';

const passwordData = ref({
  password: '',
  confirmPassword: ''
});

const canSubmit = computed(() => {
  if (passwordData.value.password 
    && passwordData.value.confirmPassword) {
    return passwordData.value.password === passwordData.value.confirmPassword;
  }

  return false;
});

</script>

<template>
  <div class="w-80 font-noto">
    <inputer
      v-model:value="passwordData.password"
      title="輸入新密碼"
      placeholder="請輸入新密碼"
      class="mb-4"
      type="password"
    />
    <inputer
      v-model:value="passwordData.confirmPassword"
      title="再次輸入"
      placeholder="再次輸入新密碼"
      class="mb-8"
      type="password"
    />
    <Btn
      text="重設密碼"
      :disabled="!canSubmit"
      :class="canSubmit ? 'border-black' : 'border-grey-600'"
      :bg-color-class="canSubmit ? 'bg-yellow' : 'bg-grey-500'"  
      :text-color-class="canSubmit ? 'text-black' : 'text-white'"
    />
  </div> 
</template>