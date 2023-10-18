<template>
  <TemplateView
    viewTitle="Profil Akun"
    viewSubitle="Lihat profil dan kelola data akun"
  >
    <div class="profile-column pb-4">
      <div class="w-full lg:w-1/3"></div>
      <div class="w-full lg:w-2/3 border-b border-gray-300 flex items-center">
        <button class="tab-menu-item active">
          <font-awesome-icon :icon="['fas', 'file-lines']" />
          <p>Informasi Pribadi</p>
        </button>
        <button class="tab-menu-item">
          <font-awesome-icon :icon="['fas', 'gear']" />
          <p>Pengaturan Akun</p>
        </button>
      </div>
    </div>

    <div class="profile-column">
      <div class="profile-info-card">
        <img
          src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
          alt="User Picture"
          class="w-48 h-48 rounded-xl object-cover"
        />

        <div class="flex flex-col items-center gap-0">
          <p class="font-bold leading-none">YOUR NAME</p>
          <p class="text-xs">Frontend Developer</p>
        </div>

        <div class="flex gap-4">
          <font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
          <font-awesome-icon :icon="['fab', 'twitter']" size="xl" />
          <font-awesome-icon :icon="['fab', 'facebook']" size="xl" />
        </div>

        <div class="flex flex-col items-center gap-0">
          <p class="font-bold leading-none">Kantor Cabang Bandung</p>
          <p class="text-sm">Bandung, Jawa Barat</p>
        </div>
      </div>

      <div class="w-full lg:w-2/3 flex flex-col gap-4">
        <div class="tab-card">
          <div class="flex flex-col gap-4">
            <div class="info-group">
              <p class="info-group-title">ID Pegawai</p>
              <p class="w-3/4">KRYWN-202310-0018</p>
            </div>
            <div class="info-group">
              <p class="info-group-title">Nama Pegawai</p>
              <p class="w-3/4">YOUR NAME</p>
            </div>
            <div class="info-group">
              <p class="info-group-title">Jenis Kelamin</p>
              <p class="w-3/4">L</p>
            </div>
            <div class="info-group">
              <p class="info-group-title">Tanggal Lahir</p>
              <p class="w-3/4">09/10/2023</p>
            </div>
            <div class="info-group">
              <p class="info-group-title">Posisi</p>
              <p class="w-3/4">Frontend Developer</p>
            </div>
            <div class="info-group">
              <p class="info-group-title">Klinik Cabang</p>
              <p class="w-3/4">Klinik Cabang Bandung</p>
            </div>
          </div>
        </div>
        <div class="tab-card">
          <div class="flex flex-col gap-4">
            <div class="info-group">
              <p class="info-group-title">No. Telepon</p>
              <input
                v-model="inputPhone"
                type="tel"
                placeholder="No. Telepon"
                class="w-3/4 rounded-form-input"
              />
            </div>
            <div class="info-group">
              <p class="info-group-title">Email</p>
              <input
                v-model="inputEmail"
                type="email"
                placeholder="Email"
                class="w-3/4 rounded-form-input"
              />
            </div>
            <div class="info-group items-start">
              <p class="info-group-title">Alamat</p>
              <textarea
                v-model="inputAddress"
                placeholder="Alamat"
                class="w-3/4 rounded-form-input"
              ></textarea>
            </div>
          </div>
        </div>
        <button
          class="py-4 px-6 rounded-full bg-dark-orange text-white w-max mx-auto mt-4"
        >
          Simpan
        </button>
      </div>
    </div>
  </TemplateView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TemplateView from '@/components/RouterViewTemplate.vue'

export default defineComponent({
  components: { TemplateView },
  data: function () {
    return {
      inputPhone: '',
      inputEmail: '',
      inputAddress: '',
    }
  },
})
</script>

<style>
.profile-column {
  @apply flex flex-col lg:flex-row justify-between gap-4 text-gray-700;
}

.tab-menu-item {
  @apply flex gap-3 items-baseline border-b border-gray-300 min-w-[214px] pb-2 px-8 -mb-px;
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
</style>
