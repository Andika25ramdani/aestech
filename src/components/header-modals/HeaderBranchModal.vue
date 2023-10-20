<template>
  <div class="header-branch-modal">
    <p class="font-bold">Data Cabang</p>

    <ul class="leading-snug my-2">
      <li>Cabang Jakarta</li>
      <li>Cabang Palembang</li>
      <li>Cabang Samarinda</li>
      <li>Cabang Padang</li>
    </ul>

    <router-link to="/branchs">
      <div class="rounded-full bg-dark-orange text-white min-w-max py-1 px-7 mt-2">
        Lihat semua cabang
      </div>
    </router-link>
  </div>
</template>

<style>
.header-branch-modal {
  @apply absolute top-12 bg-white shadow-lg rounded-2xl px-8 py-5 flex flex-col gap-1;
}
</style>
