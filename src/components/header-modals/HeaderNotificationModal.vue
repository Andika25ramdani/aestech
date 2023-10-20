<template>
  <div class="header-notif-modal">
    <p class="font-bold px-8 mb-2">Notifikasi</p>

    <ul class="header-notif-list">
      <li v-for="i in 3" :key="i" class="notif-list-item">
        <IconContainer
          :icon="['fas', 'bell']"
          iconClass="text-gray-400"
          containerClass="bg-gray-100 w-6 h-6 rounded-lg p-5"
        />

        <div class="flex flex-col gap-1">
          <p class="content-title max-one-line">Pembayaran berhasil</p>
          <p class="content-text max-one-line">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconContainer from '@/components/IconContainer.vue'

export default defineComponent({
  components: { IconContainer },
})
</script>

<style>
.header-notif-modal {
  @apply absolute top-12 -right-14 w-72 sm:w-80 bg-white shadow-lg rounded-2xl py-5 flex flex-col gap-1;
}

.header-notif-list .notif-list-item {
  @apply flex gap-3 items-center px-8 py-4 max-h-[66px] hover:bg-light-orange;
}

.header-notif-list .notif-list-item .content-title {
  @apply text-sm leading-none font-semibold text-gray-800;
}

.header-notif-list .notif-list-item .content-text {
  @apply text-xs;
}

@media (min-width: 375px) {
  .header-notif-modal {
    @apply -right-28;
  }
}
</style>
