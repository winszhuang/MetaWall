<script lang="ts" setup>
const router = useRouter();

const login = () => {
  console.log('login');
  router.push('/login')
}
</script>

<template>
  <header class="border-b-[3px]">
    <div class="flex items-center px-4 mx-auto md:container md:px-0">
      <NuxtLink to="/">
        <h1 class="text-3xl text-black font-paytone">
          MetaWall
        </h1>
      </NuxtLink>
      <div class="relative flex items-center py-3 ml-auto group">
        <img src="../assets/image/user.png" alt="" width="30px">
        <div class="ml-2">
          <div class="mb-1 font-mono font-bold leading-5">
            Member
          </div>
          <div class="border-b-2 "/>
        </div>

        <!-- menu -->
        <section 
          class="absolute hidden md:group-hover:block
            top-[90%] lg:-right-[50%] md:right-2 isolate z-10
            before:z-[-1] before:absolute before:border-2 before:bg-white before:left-1 before:top-1 before:w-full before:h-full"
        >
          <ul class="cursor-pointer w-[170px] bg-white z-10 font-noto text-base text-center divide-y-2 border-2">
            <li class="py-2 hover:bg-grey-300">
              <NuxtLink to="/personal">
                我的貼文牆
              </NuxtLink>
            </li>
            <li class="py-2 hover:bg-grey-300">
              <NuxtLink to="/setting">
              修改個人資料
              </NuxtLink>
            </li>
            <li 
              class="py-2 hover:bg-grey-300"
              @click="login"
            >
              登出
            </li>
          </ul>
        </section>
      </div>
    </div>
  </header>
</template>