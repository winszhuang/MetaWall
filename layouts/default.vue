<template>
  <div>
    <Header />
    <main class="bg-[url('@/assets/image/bg.png')] h-full">
      <div class="md:container mx-auto">
        <div class="flex flex-row justify-between md:py-8 py-4 md:px-0 px-3">
          <!-- 主要貼文區塊 -->
          <div class="w-full md:w-2/3 md:mr-7 ">
            <slot />
          </div>

          <!-- 側邊攔 -->
          <aside class="flex-1 hidden md:block">
            <Sidebar />
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>