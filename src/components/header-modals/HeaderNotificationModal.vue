<template>
  <div class="header-notif-modal">
    <p class="font-bold px-8 mb-2">Notifikasi</p>

    <ul class="header-notif-list">
      <li v-for="i in 3" :key="i" class="notif-list-item">
        <div
          class="bg-gray-100 flex items-center justify-center w-6 h-6 rounded-lg p-5"
        >
          <font-awesome-icon :icon="['fas', 'bell']" class="text-gray-400" />
        </div>
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

<style>
.header-notif-modal {
  @apply absolute top-12 -right-14 w-72 sm:w-80 bg-white shadow-lg rounded-2xl py-5 flex flex-col gap-1;
  @layer min-[375px]:-right-28;
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
</style>
