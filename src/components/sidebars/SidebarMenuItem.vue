<template>
  <li class="`sidebar-menu-item ${active ? ' text-dark-orange' : ''}`">
    <div class="sidebar-menu-item-content">
      <p class="flex gap-4 items-center">
        <font-awesome-icon :icon="['fas', icon]" size="lg" class="w-5" />
        <span class="max-one-line">{{ label }}</span>
      </p>

      <font-awesome-icon
        v-if="hasChild"
        :icon="['fas', 'chevron-right']"
        size="xs"
      />
    </div>
    <ul class="sidebar-menu pl-6">
      <slot />
    </ul>
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
  @apply flex flex-col justify-between items-center cursor-pointer;
}

.sidebar-menu-item-content {
  @apply flex justify-between items-center py-3 px-6;
}
</style>
