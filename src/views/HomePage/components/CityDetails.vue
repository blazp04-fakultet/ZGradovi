<script setup lang="ts">
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
</script>

<template>
  <Dialog>
    <DialogTrigger
      class="text-white border-2 border-black bg-transparent px-6 py-2 rounded-md bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
    >
      Nauči više
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogDescription class="flex items-center space-x-4 w-full">
          <img src="" alt="profile image" class="w-16 h-16 rounded-full" />

          <div class="flex flex-col space-y-4 w-full">
            <div>
              <Label for="grad">Ime grada</Label>
              <Separator class="my-4 w-full" label="" />
            </div>
            <div>
              <Label for="grad">Opis</Label>
              <Separator class="my-4 w-full" label="" />
            </div>
            <div>
              <Label for="grad">Država</Label>
              <Separator class="my-4 w-full" label="" />
            </div>
            <div>
              <Label for="grad">Poštanski broj</Label>
              <Separator class="my-4 w-full" label="" />
            </div>
            <div>
              <Label for="grad">Broj stanovnika</Label>
              <Separator class="my-4 w-full" label="" />
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>
