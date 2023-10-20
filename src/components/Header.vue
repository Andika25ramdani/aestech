<template>
  <header class="header">
    <div class="header-left relative">
      <button
        @click="showBranchModal = !showBranchModal"
        class="current-branch"
      >
        <font-awesome-icon :icon="['fas', 'hospital']" />
        <p>Cabang Bandung</p>
        <font-awesome-icon :icon="['fas', 'chevron-down']" size="xs" />
      </button>

      <HeaderBranchModal v-if="showBranchModal" />
    </div>
    <div class="header-right">
      <div class="relative">
        <button @click="showNotifModal = !showNotifModal">
          <font-awesome-icon :icon="['fas', 'bell']" />
        </button>

        <HeaderNotificationModal v-if="showNotifModal" />
      </div>
      <font-awesome-icon :icon="['fas', 'circle-info']" />

      <div class="header-profile">
        <div class="h12 relative">
          <img
            src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
            alt="User Picture"
            class="w-12 h-12 min-w-[48px] rounded-full object-cover relative cursor-pointer"
            @click="showProfileModal = !showProfileModal"
          />

          <HeaderProfileModal v-if="showProfileModal" />
        </div>

        <div class="header-profile-info">
          <p class="font-semibold leading-tight max-one-line">Bagas Bayu</p>
          <p class="text-xs max-one-line">Manager</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderBranchModal from '@/components/header-modals/HeaderBranchModal.vue'
import HeaderNotificationModal from '@/components/header-modals/HeaderNotificationModal.vue'
import HeaderProfileModal from '@/components/header-modals/HeaderProfileModal.vue'

export default defineComponent({
  components: {
    HeaderBranchModal,
    HeaderNotificationModal,
    HeaderProfileModal,
  },
  data: function () {
    return {
      showBranchModal: false,
      showNotifModal: false,
      showProfileModal: false,
    }
  },
})
</script>

<style>
.header {
  @apply fixed py-3 px-8 md:px-12 flex items-center justify-between gap-8 bg-white shadow;
  width: -webkit-fill-available;
}

.current-branch {
  @apply flex items-center gap-2 font-bold min-w-[178px];
}

.header-right {
  @apply flex items-center gap-4;
}

.header-profile {
  @apply flex items-center gap-2;
}
</style>
