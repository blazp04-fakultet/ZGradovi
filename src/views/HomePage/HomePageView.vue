<template>
  <div class="bg-gray-900 bg-opacity-10 flex justify-between relative">
    <video autoplay muted loop class="object-cover w-full h-[50rem]">
      <source src="@/assets/video/town.mp4" type="video/mp4">
    </video>
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
    <div class="absolute top-0 left-0 w-full h-full flex justify-between pt-4 pl-10 pr-10 z-30">
      <h3 class="text-xl text-white">Pozdrav, {{ autentificationStore.userData?.fullName || '' }}</h3>
      <Button variant="outline" @click="autentificationStore.logout">Odjavi se</Button>
    </div>
    <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
      <h2 class="text-6xl font-bold text-white">Otkrijte najživopisnije gradove na svijetu</h2>
      <p class="text-2xl font-lg text-white pt-2 pb-6">Istražite kulturu, znamenitosti i skrivene dragulje</p>
      <Button variant="outline">Počnite istraživanje → </Button>
    </div>
  </div>

  <div class="h-10 bg-gray-100"></div>
  <div class="pl-4 pr-4 bg-gray-100">
    <h3 class="text-4xl pb-6 font-lg text-black font-bold flex justify-center items-center">Istaknuti gradovi</h3>
    <div
      class="mx-auto my-auto w-full max-w-[70rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 grid-auto-rows ">
      <CityCard v-for="(city) in cityStore.cities" :model="city" :key="city.id" />

    </div>
  </div>
  <div class="h-10 bg-gray-100"></div>
  <div class="h-60 bg-cyan-700 flex flex-col justify-center items-center">
    <h3 class="text-3xl font-lg text-white pt-2 pb-6">
      Tvoj grad nije ovdje?
    </h3>

    <DodavanjeGradova />
  </div>
  <div class="h-10 bg-gray-100"></div>
  <TeamSection />
  <div class="h-20 bg-gray-700 flex flex-col items-center justify-center">
    <h3 class="text-xl font-medium text-white pt-2">
      © ŽGRADOVI 2025. All rights reserved.
    </h3>
  </div>
</template>

<script setup lang="ts">
import CityCard from "./components/CityCard.vue";
import { Button } from '@/components/ui/button'
import TeamSection from "./components/TeamSection.vue";
import { onMounted } from "vue";
import { useCityStore } from "@/domain/store/CityStore";
import { useAutentificationStore } from "@/domain/store/AutentificationStore";
import DodavanjeGradova from "./components/DodavanjeGradova.vue";




const cityStore = useCityStore();
const autentificationStore = useAutentificationStore();
onMounted(async () => {
  await cityStore.initial();
});

</script>
<style></style>
