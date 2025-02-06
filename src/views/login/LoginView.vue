<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAutentificationStore } from '@/domain/store/AutentificationStore'
import { onMounted, ref } from 'vue'
const email = ref('')
const password = ref('')
const userStore = useAutentificationStore()
const Login = async () => {
  if (email.value && password.value) {
    await userStore.login(email.value, password.value)
  }
}

onMounted(() => {
  userStore.automaticLogin();
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <Card class="mx-auto max-w-8xl bg-white custom-card-width">
      <CardHeader>
        <CardTitle class="text-xl"> Prijava </CardTitle>
        <CardDescription>
          Unesite informacije za prijavu na Vaš račun
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="E-mail" required v-model="email" />
          </div>
          <div class="grid gap-2 pas">
            <Label for="password">Password</Label>
            <Input id="password" type="password" placeholder="Lozinka" v-model="password" />
          </div>
          <Button type="submit" class="w-full" @click="Login"> Prijava </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Nemate račun?
          <router-link to="/signup" class="text-primary hover:text-primary/90 transition-colors cursor-pointer">
            Kreiraj ga
          </router-link>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
<style scoped>
.custom-card-width {
  width: 500px;

  .w-full {
    margin-top: 10px;
  }

  .pas {
    margin-bottom: 5px;
  }
}
</style>
