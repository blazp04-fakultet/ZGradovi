<template>
  <CityCard :model="city" />
</template>

<script setup lang="ts">
import type { CityModel } from "@/domain/model/local/CityModel";
import CityCard from "./components/CityCard.vue";


const city: CityModel = {
  id: '1',
  name: 'Tomislavgrad',
  country: 'Bosna i Hercegovina',
  thumbnailURL: 'https://tomislavgrad.gov.ba/wp-content/uploads/2022/05/Tomislavgrad1.jpg',
};

</script>
<style></style>
