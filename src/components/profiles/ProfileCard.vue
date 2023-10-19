<template>
  <div class="profile-info-card">
    <img
      :src="`${profile?.avatar}`"
      :alt="`${profile?.fullname} Picture`"
      class="w-48 h-48 rounded-xl object-cover"
    />

    <div class="flex flex-col items-center gap-0">
      <p class="font-bold leading-none">{{ profile?.fullname }}</p>
      <p class="text-xs">{{ profile?.position }}</p>
    </div>

    <div class="flex gap-4">
      <a :href="`${profile?.social_media[0].instagram}`">
        <font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
      </a>
      <a :href="`${profile?.social_media[0].twitter}`">
        <font-awesome-icon :icon="['fab', 'twitter']" size="xl" />
      </a>
      <a :href="`${profile?.social_media[0].facebook}`">
        <font-awesome-icon :icon="['fab', 'facebook']" size="xl" />
      </a>
    </div>

    <div class="flex flex-col items-center gap-0">
      <p class="font-bold leading-none">
        Kantor Cabang {{ profile?.branch.name }}
      </p>
      <p class="text-sm">{{ profile?.branch.address }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Profile } from '../../utils/models/profile'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    profile: {} as PropType<Profile>,
  },
})
</script>
