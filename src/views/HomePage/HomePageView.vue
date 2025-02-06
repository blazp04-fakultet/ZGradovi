<template>
  <div class="h-[50rem] bg-gray-500 flex flex-col justify-center items-center">
    <h2 class="text-6xl font-bold text-white">Discover the World's Most Vibrant Cities</h2>→
    <p class="text-2xl font-lg text-white pt-2 pb-6">Explore culture, landmarks, and hidden gems</p>
    <Button>Start exploring → </Button>
  </div>
  <div class="h-10 bg-gray-100"></div>
  <div class="pl-4 pr-4 bg-gray-100">
    <h3 class="text-4xl pb-6 font-lg text-black font-bold flex justify-center items-center">Featured Cities</h3>
    <div
      class="mx-auto my-auto w-full max-w-[70rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 grid-auto-rows ">
      <CityCard v-for="(city) in cityStore.cities" :model="city" :key="city.id" />

    </div>
  </div>
  <div class="h-10 bg-gray-100"></div>
  <div class="h-60 bg-cyan-700 flex flex-col justify-center items-center">
    <h3 class="text-3xl font-lg text-white pt-2 pb-6">Ready to Plan Your Next Adventure?</h3>
    <Button>Dodaj novi grad</Button>
  </div>
  <div class="h-10 bg-gray-100"></div>
  <TeamSection />
  <div class="h-20 bg-gray-700 flex flex-col items-center justify-center">
    <h3 class="text-xl font-medium text-white pt-2">© ŽGRADOVI 2025. All rights reserved.</h3>
  </div>


</template>

<script setup lang="ts">
import CityCard from "./components/CityCard.vue";
import { Button } from '@/components/ui/button'
import TeamSection from "./components/TeamSection.vue";
import { onMounted } from "vue";
import { useCityStore } from "@/domain/store/CityStore";




const cityStore = useCityStore();
onMounted(async () => {
  await cityStore.initial();
});

</script>
<style></style>
