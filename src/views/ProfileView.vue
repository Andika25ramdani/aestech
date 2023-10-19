<template>
  <TemplateView
    viewTitle="Profil Akun"
    viewSubitle="Lihat profil dan kelola data akun"
  >
    <div class="profile-column pb-4">
      <div class="w-full lg:w-1/3"></div>
      <div class="w-full lg:w-2/3 border-b border-gray-300 flex items-center">
        <button
          @click="currentTab = 0"
          :class="`tab-menu-item ${currentTab == 0 ? 'active' : ''}`"
        >
          <font-awesome-icon :icon="['fas', 'file-lines']" />
          <p>Informasi Pribadi</p>
        </button>
        <button
          @click="currentTab = 1"
          :class="`tab-menu-item ${currentTab == 1 ? 'active' : ''}`"
        >
          <font-awesome-icon :icon="['fas', 'gear']" />
          <p>Pengaturan Akun</p>
        </button>
      </div>
    </div>

    <div class="profile-column">
      <ProfileCard :profile="profile" />

      <div class="w-full lg:w-2/3 flex flex-col gap-4">
        <ProfilePersonalInfo v-if="currentTab == 0" :profile="profile" />
        <ProfileAccountSetting v-if="currentTab == 1" :profile="profile" />
      </div>
    </div>
  </TemplateView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import axios from 'axios'

import { Profile } from '@/utils/models/profile'
import ProfileAccountSetting from '@/components/profiles/ProfileAccountSetting.vue'
import ProfileCard from '@/components/profiles/ProfileCard.vue'
import ProfilePersonalInfo from '@/components/profiles/ProfilePersonalInfo.vue'
import TemplateView from '@/components/RouterViewTemplate.vue'

export default defineComponent({
  components: { ProfileAccountSetting, ProfileCard, ProfilePersonalInfo, TemplateView },
  data: function () {
    return {
      profile: {} as Profile,
      currentTab: 0,
    }
  },
  created: function () {
    this.getProfile()
  },
  methods: {
    getProfile: function () {
      console.log('GET PROFILE START')
      axios
        .get(
          'https://my-json-server.typicode.com/Andika25ramdani/aestech/KRYWN-202310-0018'
        )
        .catch((er) => {
          console.error('GET PROFILE FAIL', er)
        })
        .then((res) => {
          console.log('GET PROFILE RES', res)
          console.log('GET PROFILE RES DATA', (res as any).data)
          this.profile = (res as any).data
          console.log('GET PROFILE ', this.profile)
        })
        .finally(() => {
          console.log('GET PROFILE FINISH')
        })
    },
  },
})
</script>

<style>
.profile-column {
  @apply flex flex-col lg:flex-row justify-between gap-4 text-gray-700;
}

.tab-menu-item {
  @apply flex gap-3 items-baseline border-b border-gray-300 min-w-[214px] py-2 px-8 -mb-px;
}

.tab-menu-item.active {
  @apply border-b-2 border-dark-orange text-dark-orange;
}

.tab-card {
  @apply rounded-xl bg-white p-10 shadow-md;
}

.info-group {
  @apply flex gap-1 items-center;
}

.info-group-title {
  @apply w-1/4 min-w-[128px] font-semibold;
}

.profile-info-card {
  @apply min-w-[272px] w-full lg:w-1/3 h-full tab-card flex flex-col gap-6 items-center pb-16 text-center;
}

.rounded-form-input {
  @apply border rounded-lg outline-none py-1 px-3;
}

.profile-card-title {
  @apply font-medium text-lg;
}
</style>
