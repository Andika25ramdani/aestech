<template>
  <div class="branch-list-card">
    <div class="flex gap-4 items-center max-w-full">
      <IconContainer
        :icon="['fas', 'hospital']"
        iconSize="xl"
        containerClass="bg-light-orange text-dark-orange rounded-md h-14 min-w-[56px] w-14"
      />
      
      <div class="branch-list-card-info">
        <h5 class="leading-none font-semibold text-gray-900 max-one-line">
          {{ branch?.name }}
        </h5>
        <p class="text-sm max-one-line">{{ branch?.email }}</p>
      </div>
    </div>
    <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Branch } from '../../utils/models/branch'
import IconContainer from '@/components/IconContainer.vue'

export default defineComponent({
  components: { IconContainer },
  props: {
    branch: {} as PropType<Branch>,
  },
})
</script>

<style>
.branch-list-card {
  @apply flex justify-between items-center bg-white p-4 rounded-xl shadow-sm min-w-[256px];
}

.branch-list-card-info {
  @apply flex flex-col gap-0 max-w-[128px];
}

@media (min-width: 425px) {
  .branch-list-card-info {
    @apply max-w-full;
  }
}
</style>
