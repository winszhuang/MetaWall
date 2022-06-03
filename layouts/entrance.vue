<template>
  <div class="h-screen flex justify-center items-center bg-[url('@/assets/image/bg.png')] px-4">
    <div class="flex w-full py-16 border-2 shadow md:max-w-4xl bg-grey-300">
      <div class="hidden md:block md:basis-1/2">
        <img
          src="@/assets/image/img.svg"
          alt=""
          class="h-full px-12"
        >
      </div>
      <div class="flex items-center flex-1">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.shadow {
  box-shadow: -6px 6px 0 0 #CCCCCC;
}
</style>
