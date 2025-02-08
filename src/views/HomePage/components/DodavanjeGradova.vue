<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ref, defineProps, defineEmits, watch } from 'vue'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useCityStore } from '@/domain/store/CityStore'
import type { CityDetailsModel } from '@/domain/model/local/CityDetailsModel'
import { uploadFile } from '@/domain/repository/SuperbaseRepository'


// Define the image upload handler function
const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files ? input.files[0] : null

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()

    // Read the file as a data URL and store it in imageUrl
    reader.onload = () => {
      imageUrl.value = reader.result as string
    }
    reader.readAsDataURL(file)
  } else {
    alert('Please upload a valid image file.')
  }
}
// Props

const open = ref(false)

const name = ref('')
const description = ref('')
const country = ref('')
const settledYear = ref('')
const population = ref('')
const consolidatedYear = ref('')
const zipCode = ref('')
const imageUrl = ref<string | null>(null)


const cityStore = useCityStore()

const resetAll = async () => {
  // Nemoj sklanjati ovo async. dole ima funkcija koja radi upload await
  // Ovdje iako se ne koirsti await direktno bez njega će se resertiranje prvo dogoditi a to nije dobro
  name.value = ''
  description.value = ''
  country.value = ''
  settledYear.value = ''
  population.value = ''
  consolidatedYear.value = ''
  zipCode.value = ''
  imageUrl.value = null
}

</script>

<template>
  <Drawer :open="open" @update:open="open = $event">
    <DrawerTrigger as-child>
      <Button>Dodaj novi grad</Button>
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-7xl items-center justify-around ">
        <DrawerHeader>
          <DrawerTitle>Dodavanje novog grada</DrawerTitle>
        </DrawerHeader>
        <div class="flex space-x-2 items-center justify-around ">
          <!-- Left Div -->
          <div class="p-4 pb-0 w-1/2 flex-shrink-0">
            <label v-if="!imageUrl" for="image-upload"
              class="w-[300px] h-[300px] border-2 border-dashed border-gray-400 rounded-md flex items-center justify-around cursor-pointer hover:border-indigo-500">
              <input id="image-upload" type="file" accept="image/*" class="hidden" @change="handleImageUpload" />
              <span class="text-gray-600">Učitaj sliku</span>
            </label>
            <div v-if="imageUrl" class="mt-4">
              <img :src="imageUrl" alt="Uploaded Image" class="w-[300px] h-[300px] object-cover rounded-md" />
            </div>
          </div>

          <!-- Right Div -->
          <div class="p-6 pb-0 w-1/2 space-y-4">
            <div class="flex flex-col space-y-1.5">
              <Input id="cityName" type="text" placeholder="Unesite naziv grada" v-model="name"
                class="w-[500px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div class="space-y-2">
              <Textarea id="cityDescription" placeholder="Unesite opis grada" rows="4" v-model="description"
                class="w-[500px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" />
            </div>
            <div class="flex space-x-4">
              <div class="flex-1">
                <Input id="country" type="text" v-model="country" placeholder="Unesite naziv države"
                  class="w-[370px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div class="flex-1">
                <Input id="zip" type="number" v-model="zipCode" placeholder="ZIP"
                  class="w-[115px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div class="flex space-x-4 w-[500px]">
              <div class="flex-1">
                <Input id="population" type="number" v-model="population" placeholder="Broj stanovnika"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div class="flex-1">
                <Input id="year" type="number" v-model="settledYear" placeholder="God. naseljenja"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div class="flex-1">
                <Input id="secondYear" type="number" v-model="consolidatedYear" placeholder="konsolidirana god."
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div class="flex space-x-4 w-[500px]">

              <Button type="submit" @click="async () => {
                const img = await uploadFile(imageUrl as string)
                console.log('img:', img)
                const data: CityDetailsModel = {
                  name: name,
                  description: description,
                  imageURL: img,
                  country: country,
                  zipCode: zipCode,
                  population: population,
                  settledYear: settledYear,
                  consolidatedYear: consolidatedYear
                }
                cityStore.addNewCity(data)
                open = false
                await resetAll()



              }" class="w-full px-6 py-3  text-white font-semibold rounded-lg  focus:outline-none focus:ring-2 ">
                Spremi

              </Button>
            </div>
          </div>
        </div>
        <DrawerFooter>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>
