<template>
  <ul class="header-profile-modal-menu">
    <router-link to="/profile">
      <li class="header-profile-modal-menu-item">
        <font-awesome-icon :icon="['fas', 'user']" class="w-5" />
        <span>Profil</span>
      </li>
    </router-link>
    <li class="header-profile-modal-menu-item">
      <font-awesome-icon :icon="['fas', 'circle-info']" class="w-5" />
      <span>Bantuan</span>
    </li>
    <li class="header-profile-modal-menu-item text-dark-orange">
      <font-awesome-icon
        :icon="['fas', 'arrow-right-from-bracket']"
        class="w-5"
      />
      <span>Logout</span>
    </li>
  </ul>
</template>

<style>
.header-profile-modal-menu {
  @apply absolute top-14 bg-white shadow-lg rounded-2xl px-5 py-6 flex flex-col gap-1;
}
.header-profile-modal-menu-item {
  @apply flex items-center gap-2 w-32;
}
</style>
