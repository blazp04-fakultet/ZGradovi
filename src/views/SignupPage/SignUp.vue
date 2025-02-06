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
import SignupRequestModel from '@/domain/model/request/SignupRequestModel';
import { useAutentificationStore } from '@/domain/store/AutentificationStore';
import { ref } from 'vue';


const authStore = useAutentificationStore()

const firstName = ref<string>('')
const lastName = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')

const handleSignup = async () => {
  console.log('signup')
  console.log(firstName.value, lastName.value, email.value, password.value)
  const model:SignupRequestModel = {firstName: firstName.value, lastName: lastName.value, email: email.value, password: password.value}
  await authStore.signup(model)
}

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
            <Input id="name" placeholder="Ime" v-model="firstName" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="framework">Prezime</Label>
            <Input id="framework" placeholder="Prezime" v-model="lastName" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="name">E-mail</Label>
            <Input id="name" placeholder="email" v-model="email"/>
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Zaporka</Label>
            <Input type="password" id="name" placeholder="zaporka" v-model="password" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex flex-col gap-4 px-6 pb-6">
  <div class="flex justify-between gap-4">
    <Button @click="handleSignup">Registriraj se</Button>
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
