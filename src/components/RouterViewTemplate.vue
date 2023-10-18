<template>
  <div class="flex flex-col gap-0 px-8 pb-8 pt-[104px] xl:px-16 xl:pb-16 xl:pt-[136px]">
    <h1 class="text-4xl font-semibold mb-2">{{ viewTitle }}</h1>
    <p class="text-lg">{{ viewSubitle }}</p>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    viewTitle: String,
    viewSubitle: String,
  },
})
</script>
