<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import type { TeamModel } from "@/domain/model/local/TeamModel";
import { socialIcon } from "@/utils/SocialMediaUtils";

import BlazPeric from "@/assets/icons/BlazPeric.jpeg"
import JelenaVucic from "@/assets/icons/jelena.jpg"
import VinkoJakeljic from "@/assets/icons/vinko.jpg"


const teamList: TeamModel[] = [

  {
    imageUrl: BlazPeric,
    firstName: "Blaž",
    lastName: "Perić",
    positions: ["Frontend"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/blazperic/",
      },
      {
        name: "Github",
        url: "https://github.com/Blazp04",
      },

    ],
  },
  {
    imageUrl: VinkoJakeljic,
    firstName: "Vinko",
    lastName: "Jakečjić",
    positions: ["Frontend"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vinko-jakelji%C4%87-2089542a2/",
      },
      {
        name: "Github",
        url: "https://github.com/Vinko004",
      },

    ],
  },
  {
    imageUrl: JelenaVucic,
    firstName: "Jelena",
    lastName: "Vučić",
    positions: ["Frontend"],
    socialNetworks: [
      {
        name: "Github",
        url: "https://github.com/vucicj",
      },

    ],
  },


];


</script>

<template>
  <div class="bg-gray-100 pb-16">

    <div class="text-center mb-8 bg-gray-100">
      <h2 class="text-4xl font-bold text-primary text-center mb-2 tracking-wider ">Tim</h2>
    </div>

    <div class="mx-auto w-[70rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 bg-gray-100">
      <Card v-for="{
        imageUrl,
        firstName,
        lastName,
        positions,
        socialNetworks,
      } in teamList" :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg ">
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img :src="imageUrl" alt=""
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]" />
          </div>
          <CardTitle class="py-6 pb-4 px-6">{{ firstName }}
            <span class="text-primary">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent v-for="(position, index) in positions" :key="index" :class="{
          'pb-0 text-muted-foreground ': true,
          'pb-4': index === positions.length - 1,
        }">
          {{ position }}<span v-if="index < positions.length - 1">,</span>
        </CardContent>

        <CardFooter class="space-x-4 mt-auto">
          <a v-for="{ name, url } in socialNetworks" :key="name" :href="url" target="_blank"
            class="hover:opacity-80 transition-all" :aria-label="`Visit our ${name} page`">
            <component :is="socialIcon(name)" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
