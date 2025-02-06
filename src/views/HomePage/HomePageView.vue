<template>
  <div class="h-[50rem] bg-gray-500 flex flex-col justify-center items-center">
    <h2 class="text-6xl font-bold text-white">Discover the World's Most Vibrant Cities</h2>→
    <p class="text-2xl font-lg text-white pt-2 pb-6">Explore culture, landmarks, and hidden gems</p>
    <Button>Start exploring → </Button>
  </div>
  <div class="h-10 bg-gray-100"></div>
  <div class="pl-4 pr-4 bg-gray-100">
    <h3 class="text-4xl pb-6 font-lg text-black font-bold flex justify-center items-center">Featured Cities</h3>
    <CityCard :model="city" />
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
import type { CityModel } from "@/domain/model/local/CityModel";
import CityCard from "./components/CityCard.vue";
import { Button } from '@/components/ui/button'
import TeamSection from "./components/TeamSection.vue";


const city: CityModel = {
  id: '1',
  name: 'Tomislavgrad',
  country: 'Bosna i Hercegovina',
  thumbnailURL: 'https://tomislavgrad.gov.ba/wp-content/uploads/2022/05/Tomislavgrad1.jpg',
};

</script>
<style></style>
