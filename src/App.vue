<template>
  <SideBar />
  <div class="main-content">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import SideBar from './components/sidebars/SideBar.vue'

export default {
  components: { SideBar, Header },
}
</script>
