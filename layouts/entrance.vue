<template>
  <div class="flex h-screen bg-[url('@/assets/image/bg.png')]">
    <div class="hidden md:block md:basis-1/2">
      <img 
        src="@/assets/image/img.svg" 
        alt=""
        class="h-full px-12"
      >
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>