<template>
  <SideBar />
  <div class="main-content">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import SideBar from "./components/sidebars/SideBar.vue"

export default {
  components: { SideBar },
}
</script>
