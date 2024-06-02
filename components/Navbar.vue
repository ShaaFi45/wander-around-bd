<template>

  <div class="relative">
    
      <img class="w-full"
        src="../assets/images/h1-rev-slide1-bckg.jpg" alt="logo" />
        
    
    <nav class="flex items-center absolute top-5 left-5 right-5 lg:border-b lg:border-t border-gray-200 justify-between  p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5 lg:flex">
            <img class="h-6 w-auto" src="../assets/images/airplane-journey_13794440.svg" alt="" />
            <span
              class="hidden lg:flex lg:gap-2 text-[#FFFFFF] font-family-sans-serif font-bold uppercase  m-auto pl-2">WANDER
              AROUND</span>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icons class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <span v-for="item in right_navigation" :key="item.name" :href="item.href"
            class="text-[#FFFFFF] font-family-sans-serif font-bold uppercase">
            {{ item.name }}
          </span>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <img class="h-16 w-auto ml-12" src="../assets/images/wander-around.png" alt="" />
        </div>
        <div class="hidden lg:flex lg:gap-x-12 ml-12">
          <span v-for="item in left_navigation" :key="item.name" :href="item.href"
            class="text-[#FFFFFF] font-family-sans-serif font-bold uppercase">
            {{ item.name }}
          </span>
        </div>


        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900"><span
              aria-hidden="true">&#x1F50E;</span></a> -->
          <form class="w-25  max-w-sm">
            <div class="flex items-center border-l border-teal-500 py-2">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="search" aria-label="Full name">  <span
              aria-hidden="true">&#x1F50E;</span>
            </div>
          
          </form>
        </div>
        
      </nav>

  </div>
    
</template>

<script setup>
// import { ref } from 'vue'
// import { Dialog, DialogPanel } from '@headlessui/vue'
// import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const right_navigation = [
  { name: 'HOME', href: '#' },
  { name: 'PAGES', href: '#' },
  { name: 'BLOGS', href: '#' },

]
const left_navigation = [
  { name: 'SHOP', href: '#' },
  { name: 'GALLARY', href: '#' },
  { name: 'ABOUT', href: '#' },

]
const mobileMenuOpen = ref(false)
</script>


<style scoped>
.hero-section{
height:600px;
width:100vw

}


.background {
  background-image: linear-gradient(rgba(34, 34, 34, 0.6),
      rgba(34, 34, 34, 0.6)), url("../assets/images/h1-rev-slide1-bckg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  overflow: hidden;
  height: 100%;

}

</style>