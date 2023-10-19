<template>
  <TemplateView
    viewTitle="Daftar Cabang"
    viewSubitle="Pilih salah satu cabang untuk melihat aktifitas melalui sistem informasi"
  >
    <input
      v-model="inputSearchBranch"
      type="search"
      placeholder="Cari cabang"
      class="rounded-md border border-gray-200 outline-none py-1 px-2 m-4"
    />

    <div class="branchs-list">
      <BranchItem
        v-for="branch in branchs.filter(
          (item) =>
            item.name.toLowerCase().includes(inputSearchBranch.toLowerCase()) ||
            item.email
              .toLowerCase()
              .includes(inputSearchBranch.toLowerCase()) ||
            item.address.toLowerCase().includes(inputSearchBranch.toLowerCase())
        )"
        :key="`${branch.id}`"
        :branch="branch"
      />
    </div>
  </TemplateView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

import { Branch } from '@/utils/models/branch'
import BranchItem from '@/components/branchs/BranchListCard.vue'
import TemplateView from '@/components/RouterViewTemplate.vue'

export default defineComponent({
  components: { TemplateView, BranchItem },
  data: function () {
    return {
      branchs: [] as Branch[],
      inputSearchBranch: '',
    }
  },
  created: function () {
    this.getAllBranchs()
  },
  methods: {
    getAllBranchs: function () {
      console.log('GET BRANCHS START')
      axios
        .get(
          'https://my-json-server.typicode.com/Andika25ramdani/aestech/branchs'
        )
        .catch((er) => {
          console.error('GET BRANCHS FAIL', er)
        })
        .then((res) => {
          console.log('GET BRANCHS RES', res)
          console.log('GET BRANCHS RES DATA', (res as any).data)
          this.branchs = (res as any).data
          console.log('GET BRANCHS ', this.branchs)
        })
        .finally(() => {
          console.log('GET BRANCHS FINISH')
        })
    },
  },
})
</script>

<style>
.branchs-list {
  @apply grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-4;
}
</style>
