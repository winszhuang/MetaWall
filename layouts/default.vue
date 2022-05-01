<template>
  <div>
    <Header />
    <main class="bg-[url('@/assets/image/bg.png')] h-full">
      <div class="md:container mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>