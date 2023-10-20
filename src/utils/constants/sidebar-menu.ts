export const SIDEBAR_MENU = [
  {
    icon: 'square-poll-vertical',
    name: 'Dashboard',
    children: [
      {
        icon: 'sitemap',
        name: 'CRM',
        children: []
      },
      {
        icon: 'chart-pie',
        name: 'Analisis',
        children: []
      },
      {
        icon: 'shopping-cart',
        name: 'Penjualan',
        route: '/',
        children: []
      },
      {
        icon: 'arrow-up-right-dots',
        name: 'Eksekutif',
        children: []
      },
    ]
  },
  {
    icon: 'shopping-cart',
    name: 'Penjualan',
    route: '/',
    children: [
      {
        icon: 'arrow-up-right-dots',
        name: 'Pengunjung',
        children: []
      },
      {
        icon: 'arrow-up-right-dots',
        name: 'Pesanan Online',
        children: []
      },
      {
        icon: 'arrow-up-right-dots',
        name: 'Faktur',
        children: []
      },
      {
        icon: 'arrow-up-right-dots',
        name: 'Data Master',
        children: [
          {
            name: 'Daftar Menu'
          },
          {
            name: 'Tambah Menu'
          },
          {
            name: 'Daftar Kategori'
          },
          {
            name: 'Tambah Kategri'
          },
        ],
      },
      {
        icon: 'arrow-up-right-dots',
        name: 'Laporan',
        children: [
          {
            name: 'Rincian Penjualan'
          },
          {
            name: 'Rekap Penjualan'
          },
          {
            name: 'Pasien'
          },
          {
            name: 'Perkategori Menu'
          },
          {
            name: 'Menu Terlaris'
          },
          {
            name: 'Void Menu'
          },
          {
            name: 'Free Menu'
          },
          {
            name: 'Rekap Penuh'
          },
          {
            name: 'Data Pengunjung'
          },
        ],
      },
      {
        icon: 'arrow-up-right-dots',
        name: 'Pengaturan',
        children: []
      },
    ],
  },
  {
    icon: 'stethoscope',
    name: 'Pelayanan',
    children: [
      {
        icon: 'stethoscope',
        name: 'Antrian',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Proses Konsultasi',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Aktifitas Pelayanan',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Paket Pelayanan',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Deposit',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Persentase Konsultasi',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Laporan',
        children: [
          {
            name: 'Persentase',
          },
          {
            name: 'Persentase by Kategori',
          },
          {
            name: 'Rekap Persentase',
          },
          {
            name: 'Rekap',
          },
          {
            name: 'Rincian Buku Tamu',
          },
          {
            name: 'Rekap Buku Tamu',
          },
        ]
      },
      {
        icon: 'stethoscope',
        name: 'Pengaturan',
        children: [
          {
            name: 'Ruangan',
          },
          {
            name: 'Aktifitas',
          },
          {
            name: 'Persentase',
          },
          {
            name: 'Referensi Keluhan',
          },
          {
            name: 'Referensi Diagnosa',
          },
        ]
      },
    ]
  },
  {
    icon: 'address-card',
    name: 'Rekam Medis',
    children: [
      {
        icon: 'stethoscope',
        name: 'Pasien',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Hasil Analisis',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Resep Konsultasi',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Membership',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Laporan',
        children: [
          {
            name: 'Data Pasien',
          },
          {
            name: 'Registrasi',
          },
        ]
      },
      {
        icon: 'stethoscope',
        name: 'Pengaturan',
        children: []
      },
    ]
  },
  {
    icon: 'percent',
    name: 'Promo',
    children: [
      {
        icon: 'stethoscope',
        name: 'Promo Otomatis',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Promo Voucher',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Laporan',
        children: [
          {
            name: 'Aktifitas Promo',
          },
          {
            name: 'Penggunaan Prom',
          },
        ]
      },
      {
        icon: 'stethoscope',
        name: 'Pengaturan',
        children: []
      },
    ]
  },
  {
    icon: 'cart-plus',
    name: 'Pembelian',
    children: [
      {
        icon: 'stethoscope',
        name: 'Pemesanan',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Kontrol Kualitas',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Laporan',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Pengaturan',
        children: []
      },
    ]
  },
  {
    icon: 'box',
    name: 'Penyimpanan',
    children: [
      {
        icon: 'stethoscope',
        name: 'Stok',
        children: [
          {
            name: 'Stok Tersedia',
          },
          {
            name: 'Stok Masuk',
          },
          {
            name: 'Stok Keluar',
          },
          {
            name: 'Stok Kadaluarsa',
          },
          {
            name: 'Aktifitas Stok',
          },
        ]
      },
      {
        icon: 'stethoscope',
        name: 'Data Master',
        children: [
          {
            name: 'Daftar Barang',
          },
          {
            name: 'Tambah Barang',
          },
        ]
      },
      {
        icon: 'stethoscope',
        name: 'Pengaturan',
        children: []
      },
    ]
  },
  {
    icon: 'users',
    name: 'Kepegawaian',
    children: [
      {
        icon: 'stethoscope',
        name: 'Daftar Pegawai',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Tambah Pegawai',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Penjadwalan',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Presensi',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Kontrak Kerja',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Penilaian Karyawan',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Proses Penggajian',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Laporan',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Pengaturan',
        children: [
          {
            name: 'Posisi',
          },
          {
            name: 'Departemen',
          },
          {
            name: 'Shift Kerja',
          },
          {
            name: 'Kelompok Kerja',
          },
          {
            name: 'Komponen Penggajian',
          },
          {
            name: 'Waktu Penilaian',
          },
          {
            name: 'Komponen Penilaian',
          },
        ]
      },
    ]
  }, 
  {
    icon: 'receipt',
    name: 'Tagihan',
    children: []
  }, 
  {
    icon: 'calendar-check',
    name: 'Reservasi',
    children: []
  }, 
  {
    icon: 'table-cells',
    name: 'Aplikasi & Bisnis',
    children: [
      {
        icon: 'stethoscope',
        name: 'Data Perusahaan',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Manajemen Bisnis',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Tambah Bisnis',
        children: []
      },
      {
        icon: 'stethoscope',
        name: 'Kontrak & Tagihan',
        children: []
      },
    ]
  },
]