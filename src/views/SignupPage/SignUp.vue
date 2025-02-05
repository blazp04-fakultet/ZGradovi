<script setup lang='ts'>
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
  <Card class="w-[400px]">
    <CardHeader>
      <CardTitle>Registriraj se</CardTitle>
      <CardDescription></CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Ime</Label>
            <Input id="name" placeholder="Ime" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="framework">Prezime</Label>
            <Input id="framework" placeholder="Prezime" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="name">E-mail</Label>
            <Input id="name" placeholder="email" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Zaporka</Label>
            <Input id="name" placeholder="zaporka" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex flex-col gap-4 px-6 pb-6">
  <div class="flex justify-between gap-4">
    <Button variant="outline">
      Odustani
    </Button>
    <Button>Registriraj se</Button>
  </div>
  <div class="text-center">
    Već imate račun? -
    <router-link
      to="/prijava"
      class="text-primary hover:text-primary/90 transition-colors cursor-pointer"
    >
      Prijava
    </router-link>
  </div>
</CardFooter>
  </Card>
</div>
</template>
