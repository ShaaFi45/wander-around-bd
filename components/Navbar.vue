<template>
<div class=""></div>
<div class="relative h-[55rem]">
    <img class="w-full h-full object-cover" src="https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" />
<img class="w-full h-1/5 absolute bottom-0 left-0 w-full text-center" src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-bottom.png" alt="logo" />
<h1 class="absolute top-1/2 left-1/2  text-white ">  
  <span>There</span>
  <span>are</span>
  <span>no</span>
  <span>limits</span>
  <span>to</span>
  <span>what</span>
  <span>you</span>
  <span>can</span>
  <span>accomplish,</span>
  <span>except</span>
  <span>the</span>
  <span>limits</span>
  <span>you</span>
  <span>place</span>
  <span>on</span>
  <span>your</span>
  <span>own</span>
  <span>thinking.</span>
</h1>

<nav

      class="flex items-center absolute top-5 left-5 right-5 lg:border-b lg:border-t border-gray-200 justify-between  p-6 lg:px-8"
      aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5 lg:flex">
          <img class="h-6 w-auto" src="../assets/images/" alt="" />
          <!-- <span
            class="hidden lg:flex lg:gap-2 text-[#FFFFFF] font-family-sans-serif font-bold uppercase  m-auto pl-2">WANDERAROUND</span> -->
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
          class="text-[#FFFFFF] hover-1 font-family-sans-serif font-bold uppercase px-3 py-1">
          {{ item.name }}
        </span>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <img class="h-16 w-auto ml-12" src="../assets/images/wander-around.png" alt="" />
      </div>
      <div class="hidden lg:flex lg:gap-x-12 ml-12">
        <span v-for="item in left_navigation" :key="item.name" :href="item.href"
          class="text-[#FFFFFF] hover-1  font-family-sans-serif font-bold uppercase px-3 py-1">
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
              type="text" placeholder="search" aria-label="Full name"> <span aria-hidden="true">&#x1F50E;</span>
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
.hero-section {
  height: 600px;
  width: 100vw
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


.hover-1 {
  background-image: linear-gradient(#ffffff,#ffffff);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: .4s;
}
.hover-1:hover {
  background-size: 100% 100%;
  color: #59815b;
  cursor: pointer;
}


h1 {
  font-family: "Montserrat Medium";
  gap:5px;
  max-width: 40ch;
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}

h1  > span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

h1  > span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(11) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(12) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(13) {
  animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
} 

h1  > span:nth-child(14) {
  animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(15) {
  animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(16) {
  animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(17) {
  animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

h1  > span:nth-child(18) {
  animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

</style>