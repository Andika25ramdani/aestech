<template>
  <div class="tab-card py-4">
    <div class="flex justify-between items-center">
      <h4 class="profile-card-title">Ubah kode akses</h4>
      <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs" />
    </div>
  </div>
  <div class="tab-card py-4">
    <div class="flex justify-between items-center">
      <h4 class="profile-card-title">Ubah password</h4>
      <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs" />
    </div>
  </div>
  <div class="tab-card">
    <div class="flex flex-col gap-4">
      <h4 class="profile-card-title">Sosial Media</h4>
      <div class="info-group">
        <p class="info-group-title">Facebook</p>
        <input
          v-model="inputFacebook"
          type="text"
          placeholder="Username Facebook"
          class="w-3/4 rounded-form-input"
        />
      </div>
      <div class="info-group">
        <p class="info-group-title">Twitter</p>
        <input
          v-model="inputTwitter"
          type="text"
          placeholder="Username Twitter"
          class="w-3/4 rounded-form-input"
        />
      </div>
      <div class="info-group">
        <p class="info-group-title">Instagram</p>
        <input
          v-model="inputInstagram"
          type="text"
          placeholder="Username Instagram"
          class="w-3/4 rounded-form-input"
        />
      </div>
    </div>
  </div>
  <button
    class="py-4 px-6 rounded-full bg-dark-orange text-white w-max mx-auto mt-4"
  >
    Simpan
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Profile } from '../../utils/models/profile'

export default defineComponent({
  props: {
    profile: {} as PropType<Profile>,
  },
  data: function () {
    return {
      inputFacebook: this.profile?.social_media[0].facebook,
      inputTwitter: this.profile?.social_media[0].twitter,
      inputInstagram: this.profile?.social_media[0].instagram,
    }
  },
})
</script>
