<template>
  <div class="flex flex-col gap-8 bg-white rounded-xl p-8 w-full">
    <HeaderCard :title="title" :subtitle="subtitle" :icon="icon" />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import HeaderCard from '@/components/home-cards/HomeCardHeader.vue'

export default defineComponent({
  components: { HeaderCard },
  props: {
    title: String,
    subtitle: String,
    icon: [] as PropType<String[]>,
  },
})
</script>
