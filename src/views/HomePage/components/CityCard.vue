<template>
  <Card class="w-[20rem] p-0 transition-shadow hover:shadow-lg">
    <CardContent class="flex flex-col p-0">
      <img class="w-full aspect-video pb-4" :src="props.model.thumbnailURL" :alt="props.model.name">
      <h3 class="text-2xl font-bold pl-3">{{ props.model.name }}</h3>
      <p class="text-cs pl-3 pb-3">{{ props.model.country }}</p>
    </CardContent>
    <CardFooter class="p-3">
      <Button class="w-full">Nauči više</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { CityModel } from '@/domain/model/local/CityModel';

const props = defineProps<{
  model: CityModel
}>()

</script>
<style></style>
