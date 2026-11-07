'use strict';
/**
 * Konfigurasi Aplikasi APEX
 */
const HARD = {
  d1Url: 'https://apex-api.aizaciruji0.workers.dev',
  gasUrl: 'https://script.google.com/macros/s/AKfycbzMwt9mhJNBbgqEAaQq_SP4WkAammzczt_kkI3oqgXF_26GcvOSfIOkVuWQ_dTxlnrb/exec',
  store: {
    name: 'TB. AIZA CIRUJI',
    sub: 'Sembako Percetakan Material',
    phone: '08787 117 6447',
    bank: 'BRI: 0166 0113 7004 507',
    footer: 'TERIMA KASIH!'
  },
  shs: [
    'penjualan', 'produk_jual', 'produk', 'pembelian',
    'produk_beli', 'kas', 'kontak', 'cicil', 'ecer',
    'users', 'roles', 'cms', 'absen'
  ],
  cols: {
    penjualan: ['idjual','user','date','bayar','catatan','diskon','idkontak','lokasi','foto','status'],
    produk_jual: ['idpenjualan','idproduk','namaproduk','hargabeli','hargajual','qty','diskon','catatan'],
    produk: ['idproduk','subkategori','kategori','namaproduk','hargabeli','hargajual','stok','foto_url'],
    pembelian: ['idbeli','user','date','bayar','catatan','idkontak','lokasi','foto','status'],
    produk_beli: ['idpembelian','idproduk','namaproduk','hargabeli','hargajual','qty'],
    kas: ['idkas','user','date','kategori','masuk','keluar','uraian','foto'],
    kontak: ['idkontak','user','kategori','nama','alamat','hp','lokasi','foto'],
    cicil: ['idcicil','idjual','user','date','jumlah','catatan','idkontak'],
    ecer: ['idecer','date','user','idproduk','namaproduk','hargabeli','hargajual','qty','diskon','catatan'],
    users: ['user','role','pass'],
    roles: ['role','hide','validasi'],
    cms: ['idcms','date','user','judul','kategori','foto','file','status','konten'],
    absen: ['idabsen','user','date','tipe','jam','lokasi','foto','catatan']
  },
  vis: {
    penjualan: ['idjual','date','bayar','idkontak','status'],
    produk_jual: ['idpenjualan','namaproduk','qty','hargajual'],
    produk: ['subkategori','kategori','namaproduk','hargajual','stok'],
    pembelian: ['idbeli','date','bayar','idkontak','status'],
    produk_beli: ['idpembelian','namaproduk','qty','hargajual'],
    kas: ['date','kategori','masuk','keluar','uraian'],
    kontak: ['idkontak','nama','kategori','hp'],
    cicil: ['idjual','date','jumlah','idkontak'],
    ecer: ['namaproduk','qty','hargajual'],
    users: ['user','role'],
    roles: ['role','hide','validasi'],
    cms: ['date','judul','kategori','foto','status'],
    absen: ['user','date','tipe','jam']
  },
  db: {
    penjualan: [['aaa18006446','admin','2026-10-03','100000','diambil ke toko','4000','K001','-6.2088,106.8456','','piutang']],
    produk_jual: [
      ['aaa18006446','P001','lakban gipsum 1','10000','15000','3','1000',''],
      ['aaa18006446','P002','led cahaya 12','25000','35000','6','0','']
    ],
    produk: [
      ['P001','Material','Gipsum','lakban gipsum 1','10000','15000','50',''],
      ['P002','Listrik','Lampu','led cahaya 12','25000','35000','40',''],
      ['P003','Material','Semen','semen instan 40kg','45000','55000','20','']
    ],
    pembelian: [],
    produk_beli: [],
    kas: [['KAS01','admin','2026-10-03','Operasional','0','25000','beli bensin operasional','']],
    kontak: [['K001','admin','Pelanggan','aan h. udin picung','picung','+6285724511555','-6.2088,106.8456','']],
    cicil: [],
    ecer: [],
    users: [['admin','admin','admin']],
    roles: [
      ['admin','',''],
      ['user','profit,modal_ready,profit_ready,users,roles,del,clear,schema,bulksheet','wajibstok,wajiblokasi']
    ],
    cms: [['C001','2026-10-03','admin','Info Toko','Umum','','','publish','Buka setiap hari 07:00 - 17:00 WIB']],
    absen: [['A001','admin','2026-10-03','masuk','07:00','-6.2088,106.8456','','ontime']]
  }
};
