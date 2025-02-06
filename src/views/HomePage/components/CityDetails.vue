<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useCityStore } from '@/domain/store/CityStore';

const cityStore = useCityStore();

const props = defineProps<{
  id: string
}>();

</script>

<template>
  <Dialog>
    <DialogTrigger class="w-full h-full flex items-center justify-center">
      <Button class="w-full" @click="async () => cityStore.getCityDetails(props.id)"> Pročitaj više </Button>
    </DialogTrigger>
    <DialogContent class=" w-fit">
      <DialogHeader>
        <DialogDescription class="flex items-center space-x-4 w-full">
          <img :src="cityStore.cityDetails?.imageUrl" alt="profile image" class="w-64 h-64 " />

          <div class="flex flex-col space-y-4 w-full">
            <div>
              <Label for="grad"><strong>Ime grada:</strong> {{ cityStore.cityDetails?.name }}</Label>
              <Separator class="my-4 w-full" label="" />
            </div>
            <div>
              <Label for="grad"><strong>Opis:</strong> {{ cityStore.cityDetails?.description }}</Label>
              <Separator class="my-4 w-full" label="" />
            </div>
            <div>
              <Label for="grad"><strong>Država:</strong> {{ cityStore.cityDetails?.country }}</Label>
              <Separator class="my-4 w-full" label="" />
            </div>
            <div>
              <Label for="grad"><strong>Poštanski broj:</strong> {{ cityStore.cityDetails?.zipCode }}</Label>
              <Separator class="my-4 w-full" label="" />
            </div>
            <div>
              <Label for="grad"><strong>Broj stanovnika:</strong> {{ cityStore.cityDetails?.population }}</Label>
              <Separator class="my-4 w-full" label="" />
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>
