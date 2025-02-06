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

const imageUrl = ref<string | null>(null)

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
const { modelValue } = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})
// Watch the modelValue prop and emit updates when it changes
const open = ref(modelValue)

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
            <label for="image-upload" class="w-[300px] h-[300px] border-2 border-dashed border-gray-400 rounded-md flex items-center justify-around cursor-pointer hover:border-indigo-500">
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleImageUpload"
              />
              <span class="text-gray-600">Upload Image</span>
            </label>
            <div v-if="imageUrl" class="mt-4">
              <img :src="imageUrl" alt="Uploaded Image" class="w-[300px] h-[300px] object-cover rounded-md" />
            </div>
          </div>

          <!-- Right Div -->
          <div class="p-6 pb-0 w-1/2 space-y-4">
            <div class="flex flex-col space-y-1.5">
              <Input
                id="cityName"
                type="text"
                placeholder="Unesite naziv grada"
                class="w-[500px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div class="space-y-2">
              <Textarea
                id="cityDescription"
                placeholder="Unesite opis grada"
                rows="4"
                class="w-[500px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            </div>
            <div class="flex space-x-4">
              <div class="flex-1">
                <Input
                  id="country"
                  type="text"
                  placeholder="Unesite naziv države"
                  class="w-[370px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div class="flex-1">
                <Input
                  id="zip"
                  type="number"
                  placeholder="ZIP"
                  class="w-[115px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div class="flex space-x-4 w-[500px]">
              <div class="flex-1">
                <Input
                  id="population"
                  type="number"
                  placeholder="Broj stanovnika"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div class="flex-1">
                <Input
                  id="year"
                  type="number"
                  placeholder="God. naseljenja"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div class="flex-1">
                <Input
                  id="secondYear"
                  type="number"
                  placeholder="konsolidirana god."
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div class="flex space-x-4 w-[500px]">
              <Button
                type="submit"
                class="w-full px-6 py-3  text-white font-semibold rounded-lg  focus:outline-none focus:ring-2 "
              >
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
