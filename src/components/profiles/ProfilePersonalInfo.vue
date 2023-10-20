<template>
  <div class="tab-card">
    <div class="flex flex-col gap-4">
      <div class="info-group">
        <p class="info-group-title">ID Pegawai</p>
        <p class="w-3/4">{{ profile?.id }}</p>
      </div>
      <div class="info-group">
        <p class="info-group-title">Nama Pegawai</p>
        <p class="w-3/4">{{ profile?.fullname }}</p>
      </div>
      <div class="info-group">
        <p class="info-group-title">Jenis Kelamin</p>
        <p class="w-3/4">{{ profile?.gender }}</p>
      </div>
      <div class="info-group">
        <p class="info-group-title">Tanggal Lahir</p>
        <p class="w-3/4">{{ profile?.date_of_birth }}</p>
      </div>
      <div class="info-group">
        <p class="info-group-title">Posisi</p>
        <p class="w-3/4">{{ profile?.position }}</p>
      </div>
      <div class="info-group">
        <p class="info-group-title">Klinik Cabang</p>
        <p class="w-3/4">Klinik Cabang {{ profile?.branch.name }}</p>
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
  <button class="rounded-fill-button w-max mx-auto mt-4">Simpan</button>
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
      inputPhone: '',
      inputEmail: '',
      inputAddress: '',
    }
  },
})
</script>
