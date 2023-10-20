<template>
  <div class="flex justify-between items-center gap-4 w-full">
    <div class="flex items-center justify-between gap-4">
      <IconContainer
        :icon="icon"
        iconSize="2xl"
        containerClass="bg-light-orange text-dark-orange h-16 w-16"
      />

      <div class="flex flex-col">
        <h5 class="max-one-line font-bold text-2xl">{{ title }}</h5>
        <p class="max-one-line">{{ subtitle }}</p>
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import IconContainer from '@/components/IconContainer.vue'

export default defineComponent({
  components: { IconContainer },
  props: {
    title: String,
    subtitle: String,
    icon: [] as PropType<String[]>,
  },
})
</script>
