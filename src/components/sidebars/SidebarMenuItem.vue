<template>
  <li :class="`sidebar-menu-item${active ? ' text-dark-orange' : ''}`">
    <p class="flex gap-4 items-center">
      <font-awesome-icon :icon="['fas', icon]" size="lg" class="w-5" />
      <span>{{ label }}</span>
    </p>

    <font-awesome-icon
      v-if="hasChild"
      :icon="['fas', 'chevron-right']"
      size="xs"
    />
  </li>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    icon: String,
    hasChild: Boolean,
    active: Boolean,
  },
}
</script>

<style>
.sidebar-menu-item {
  @apply flex justify-between items-center cursor-pointer py-3 px-6;
}
</style>
