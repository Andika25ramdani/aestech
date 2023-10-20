<template>
  <div
    :class="`flex items-center justify-center rounded-lg ${containerClass}`"
  >
    <font-awesome-icon :icon="icon" :class="iconClass" :size="iconSize" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    icon: [] as PropType<String[]>,
    iconSize: String,
    iconClass: String,
    containerClass: String,
  },
})
</script>
