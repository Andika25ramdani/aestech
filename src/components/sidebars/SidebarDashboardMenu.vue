<template>
  <ul class="sidebar-menu">
      <SidebarMenuItem label="CRM" icon="sitemap" />
      <SidebarMenuItem label="Analisis" icon="chart-pie" />
      <hr class="bg-gray-50 border-none h-[1px] opacity-25">
      <router-link to="/">
        <SidebarMenuItem label="Penjualan" icon="shopping-cart" :active="$route.name == 'home'" />
      </router-link>
      <SidebarMenuItem label="Eksekutif" icon="arrow-up-right-dots" />
  </ul>
</template>

<script lang="ts">
import SidebarMenuItem from "@/components/sidebars/SidebarMenuItem.vue"

export default {
  components: { SidebarMenuItem },
}
</script>