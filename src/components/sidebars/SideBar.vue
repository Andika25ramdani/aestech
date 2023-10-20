<template>
  <div class="sidebar">
    <div class="w-full mb-8">
      <img
        src="../../assets/logo-white.svg"
        alt="Aestech Logo"
        class="w-48 mx-auto"
      />
    </div>

    <p
      v-if="currentMenu.length > 0"
      @click="setCurrentMenu(CurrentMenu.MAIN)"
      class="flex gap-4 items-center px-6 mb-8"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left']" size="lg" class="w-5" />
      <span>{{ currentMenu }}</span>
    </p>

    <!-- <SidebarMainMenu
      v-if="currentMenu == CurrentMenu.MAIN"
      @menu-choosen="setCurrentMenu"
    />
    <SidebarMenuDashboard v-if="currentMenu == CurrentMenu.DASHBOARD" /> -->

    <ul class="sidebar-menu overflow-auto">
      <SidebarMenuItem
        v-for="menu in SIDEBAR_MENU"
        :key="menu.name"
        :label="menu.name"
        :icon="menu.icon"
        :hasChild="menu.children.length > 0"
      >
        <!-- <SidebarMenuItem
          v-for="submenu in menu.children"
          :key="submenu.name"
          :label="submenu.name"
          :icon="submenu.icon"
          :hasChild="submenu.children.length > 0"
        >
          <SidebarMenuItem
            v-for="submenuitem in submenu.children"
            :key="submenuitem.name"
            :label="submenuitem.name"
          />
        </SidebarMenuItem> -->
      </SidebarMenuItem>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SidebarMainMenu from '@/components/sidebars/SidebarMainMenu.vue'
import SidebarMenuDashboard from '@/components/sidebars/SidebarDashboardMenu.vue'
import SidebarMenuItem from '@/components/sidebars/SidebarMenuItem.vue'

import { CurrentMenu } from '@/utils/enums/current-menu'
import { SIDEBAR_MENU } from '@/utils/constants/sidebar-menu'

export default defineComponent({
  components: { SidebarMainMenu, SidebarMenuDashboard, SidebarMenuItem },
  data: function () {
    return {
      SIDEBAR_MENU,
      CurrentMenu,
      currentMenu: CurrentMenu.MAIN,
    }
  },
  methods: {
    setCurrentMenu: function (newMenu: CurrentMenu) {
      this.currentMenu = newMenu
    },
  },
})
</script>

<style>
.sidebar {
  @apply bg-dark-green fixed h-full hidden sm:block w-full sm:w-52 md:w-72 py-8 text-white;
}
</style>
