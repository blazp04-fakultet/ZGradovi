<template>
  <Card
    class="transition-shadow hover:drop-shadow-2xl drop-shadow-xl rounded-xg h-full overflow-hidden"
  >
    <CardContent class="flex flex-col p-0 rounded-xg h-full">
      <img
        class="w-full aspect-[16/11] rounded-xg object-cover"
        :src="props.model.thumbnailURL"
        :alt="props.model.name"
      />
      <div class="flex-grow">
        <h3 class="text-2xl font-bold pl-3">{{ props.model.name }}</h3>
        <p class="text-cs pl-3 pb-3">{{ props.model.country }}</p>
      </div>
      <CardFooter class="p-3 mt-auto">
        <Button class="w-full">Nauči više</Button>
      </CardFooter>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { CityModel } from '@/domain/model/local/CityModel'
import CityDetails from './CityDetails.vue'

const props = defineProps<{
  model: CityModel
}>()
</script>
<style></style>
