<template>
  <ul class="sidebar-menu">
    <SidebarMenuItem
      label="Dashboard"
      icon="square-poll-vertical"
      :hasChild="true"
      @click="$emit('menu-choosen', CurrentMenu.DASHBOARD)"
    />
    <SidebarMenuItem label="Penjualan" icon="chart-line" :hasChild="true" />
    <SidebarMenuItem label="Pelayanan" icon="stethoscope" :hasChild="true" />
    <SidebarMenuItem label="Rekam Medis" icon="address-card" :hasChild="true" />
    <SidebarMenuItem label="Promo" icon="percent" :hasChild="true" />
    <SidebarMenuItem label="Pembelian" icon="cart-plus" :hasChild="true" />
    <SidebarMenuItem label="Penyimpanan" icon="box" :hasChild="true" />
    <SidebarMenuItem label="Kepegawaian" icon="users" :hasChild="true" />
    <SidebarMenuItem label="Tagihan" icon="receipt" :hasChild="true" />
    <SidebarMenuItem label="Reservasi" icon="calendar-check" :hasChild="true" />
    <SidebarMenuItem
      label="Aplikasi & Bisnis"
      icon="table-cells"
      :hasChild="true"
    />
  </ul>
</template>

<script lang="ts">
import SidebarMenuItem from '@/components/sidebars/SidebarMenuItem.vue'
import { CurrentMenu } from '@/utils/enums/current-menu'

export default {
  components: { SidebarMenuItem },
  data: function () {
    return {
      CurrentMenu,
    }
  },
}
</script>
