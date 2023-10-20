<template>
  <TemplateView
    viewTitle="Performa Klinik Cabang Bandung"
    viewSubitle="Lihat performa dan lihat laporan klinik"
  >
    <div class="flex flex-col gap-4">
      <section class="flex flex-col lg:flex-row gap-4">
        <HomeCard
          title="Pendapatan Bulan Ini"
          subtitle="Grafik Pendapatan bulan Mei 2022"
          :icon="['fas', 'arrow-trend-up']"
          class="w-full lg:w-3/5"
        ></HomeCard>
        <HomeCard
          title="Layanan terlaris"
          :icon="['fas', 'repeat']"
          class="w-full lg:w-2/5"
        >
          <div class="flex flex-col gap-4">
            <div
              v-for="service in services"
              :key="service.id"
              class="flex flex-col gap-1"
            >
              <div class="flex justify-between gap-4 font-semibold text-lg">
                <p>
                  {{ service.name }}: {{ service.count }} {{ service.unit }}
                </p>
                <p>
                  {{
                    parseInt(`${(service.count / service.total) * 100}`, 10)
                  }}%
                </p>
              </div>
              <progress
                :value="service.count"
                :max="service.total"
                class="w-full rounded-full h-2"
              ></progress>
            </div>
          </div>
        </HomeCard>
      </section>

      <section
        class="grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4"
      >
        <HomeCard
          v-for="stat in stats"
          :key="stat.id"
          :icon="['fas', stat.icon]"
        >
          <div class="flex flex-col gap-4">
            <h1 class="text-6xl font-black">{{ stat.count }}</h1>
            <p class="font-medium">{{ stat.desc }}</p>
          </div>
        </HomeCard>
      </section>

      <section class="flex flex-col lg:flex-row gap-4">
        <HomeCard
          title="Aktifitas Ahli Kecantikan"
          subtitle="Jumlah aktifitas ahli kecantikan bulan ini"
          :icon="['fas', 'user-doctor']"
          class="w-full lg:w-2/3"
        ></HomeCard>
        <HomeCard
          title="Penilaian"
          :icon="['fas', 'star']"
          class="w-full lg:w-1/3"
        >
          <div class="flex flex-col gap-4">
            <div v-for="rate in ratings" :key="rate.id" class="flex flex-col gap-4">
              <p>{{ rate.desc }}</p>
              <div class="flex justify-between items-center gap-4">
                <div class="flex items-center gap-0">
                  <font-awesome-icon
                    v-for="j in parseInt(`${rate.count}` ,10)"
                    :key="j"
                    :icon="['fas', 'star']"
                    size="xl"
                    class="text-dark-orange"
                  />
                  <font-awesome-icon
                    v-for="j in parseInt(`${5 - rate.count}` ,10)"
                    :key="j"
                    :icon="['far', 'star']"
                    size="xl"
                    class="text-gray-300"
                  />
                </div>
                <p>{{ rate.count }}</p>
              </div>
            </div>
          </div>
        </HomeCard>
      </section>

      <section>
        <HomeCard
          title="Daftar promo klinik"
          subtitle="Promo-promo yang sedang berlangsung"
          :icon="['fas', 'percent']"
        >
          <table class="table table-fixed">
            <thead class="bg-gray-50 font-semibold">
              <td scope="col" class="py-4 px-6">#</td>
              <td scope="col" class="py-4 px-6">Nama Promo</td>
              <td scope="col" class="py-4 px-6">Besaran Promo</td>
              <td scope="col" class="py-4 px-6">Periode</td>
              <td scope="col" class="py-4 px-6">Kode Promo</td>
            </thead>
            <tbody>
              <tr v-for="promo in promos" :key="promo.id">
                <td scope="col" class="py-4 px-6">{{ promo.id }}</td>
                <td scope="col" class="py-4 px-6">{{ promo.name }}</td>
                <td scope="col" class="py-4 px-6">{{ promo.value }}</td>
                <td scope="col" class="py-4 px-6">{{ promo.periode }}</td>
                <td scope="col" class="py-4 px-6">{{ promo.code }}</td>
              </tr>
            </tbody>
          </table>
        </HomeCard>
      </section>
    </div>
  </TemplateView>
</template>

<script lang="ts">
import HomeCard from '@/components/home-cards/HomeCard.vue'
import TemplateView from '@/components/RouterViewTemplate.vue'

export default {
  components: { HomeCard, TemplateView },
  data: function () {
    return {
      services: [
        {
          id: 0,
          name: 'Produk',
          count: 213,
          total: 426,
          unit: 'pcs',
        },
        {
          id: 1,
          name: 'Perawatan',
          count: 213,
          total: 1331,
          unit: 'Pasien',
        },
        {
          id: 2,
          name: 'Paket Perawatan',
          count: 176,
          total: 1242,
          unit: 'pcs',
        },
        {
          id: 3,
          name: 'Konsultasi',
          count: 113,
          total: 1130,
          unit: 'pcs',
        },
        {
          id: 4,
          name: 'Tindakan',
          count: 113,
          total: 1130,
          unit: 'pcs',
        },
      ],
      stats: [
        { id: 0, icon: 'users', count: 500, desc: 'Pasien di bulan ini' },
        { id: 1, icon: 'box', count: 241, desc: 'Stok habis bulan ini' },
        {
          id: 2,
          icon: 'people-group',
          count: 23,
          desc: 'Pasien menunggu hari ini',
        },
        {
          id: 3,
          icon: 'cart-shopping',
          count: 350,
          desc: 'Transaksi di bulan ini',
        },
      ],
      ratings: [
        {
          id: 0,
          desc: 'Resepsionis',
          count: 4.0,
        },
        {
          id: 0,
          desc: 'Dokter',
          count: 5.0,
        },
        {
          id: 0,
          desc: 'Ahli Kecantikan',
          count: 4.0,
        },
      ],
      promos: [
        {
          id:1,name: 'Promo all treatment',value: '15%',periode: '12/5/2022 - 30/5/2022',code: 'TREATMENT',},
          {id:2,name: 'Promo skincare',value: '25%',periode: '21/6/2022 - 30/8/2022',code: 'SKINCARE'},
          {id:3,name: 'Buy 1 get 2',value: 'Gratis Produk',periode: '21/6/2022 - 05/7/2022',code: 'FREE'},
          {id:4,name: 'Promo Toner',value: '45%',periode: '01/7/2022 - 30/8/2022',code: 'TONER'}
      ]
    }
  },
}
</script>
