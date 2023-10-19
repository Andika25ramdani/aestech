<template>
  <div class="branch-list-card">
    <div class="flex gap-4 items-center">
      <div class="bg-light-orange rounded-md p-4">
        <font-awesome-icon
          :icon="['fas', 'hospital']"
          size="xl text-dark-orange"
        />
      </div>
      <div class="branch-list-card-info">
        <h5 class="leading-none font-semibold text-gray-900">
          {{ branch?.name }}
        </h5>
        <p class="text-sm">{{ branch?.email }}</p>
      </div>
    </div>
    <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Branch } from '../../utils/models/branch'

export default defineComponent({
  props: {
    branch: {} as PropType<Branch>,
  },
})
</script>

<style>
.branch-list-card {
  @apply flex justify-between items-center bg-white p-4 rounded-xl shadow-sm;
}

.branch-list-card-info {
  @apply flex flex-col gap-0;
}
</style>
