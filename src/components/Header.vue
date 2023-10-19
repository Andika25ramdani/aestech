<template>
  <header class="header">
    <div class="header-left">
      <button class="current-branch">
        <font-awesome-icon :icon="['fas', 'hospital']" />
        <p>Cabang Bandung</p>
        <font-awesome-icon :icon="['fas', 'chevron-down']" size="xs" />
      </button>
    </div>
    <div class="header-right">
      <font-awesome-icon :icon="['fas', 'bell']" />
      <font-awesome-icon :icon="['fas', 'circle-info']" />

      <div class="header-profile">
        <div class="h12 relative">
          <img
            src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
            alt="User Picture"
            class="w-12 h-12 rounded-full object-cover relative cursor-pointer"
            @click="showProfileModal = !showProfileModal"
          />

          <HeaderProfileModal v-if="showProfileModal" />
        </div>

        <div class="header-profile-info">
          <p class="font-semibold leading-tight">Bagas Bayu</p>
          <p class="text-xs">Manager</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderProfileModal from '@/components/header-modals/HeaderProfileModal.vue'

export default defineComponent({
  components: { HeaderProfileModal },
  data: function () {
    return {
      showProfileModal: false,
    }
  }
})
</script>

<style>
.header {
  @apply fixed py-3 px-8 md:px-12 flex items-center justify-between bg-white shadow;
  width: -webkit-fill-available;
}

.current-branch {
  @apply flex items-center gap-2 font-semibold;
}

.header-right {
  @apply flex items-center gap-4;
}

.header-profile {
  @apply flex items-center gap-2;
}
</style>
