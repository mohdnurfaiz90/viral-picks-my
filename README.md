# Viral Picks MY Manager

Showroom affiliate dan panel pengurusan barang tanpa perlu edit kod selepas sistem diaktifkan.

## Fungsi

- Tambah, edit, sorok, papar dan buang barang.
- Upload gambar atau gunakan link gambar.
- Susun barang naik dan turun.
- Tapis Shopee atau TikTok Shop.
- Carian dan kategori pada showroom.
- Login Manager melalui Supabase Auth.

## Pratonton setempat

Jika `config.js` masih kosong, sistem berjalan dalam mod demo menggunakan storan browser. Ia sesuai untuk menguji antaramuka tetapi perubahan tidak dikongsi kepada pelawat lain.

## Aktifkan storan online sekali sahaja

1. Cipta projek Supabase percuma.
2. Jalankan `supabase-setup.sql` dalam SQL Editor.
3. Dalam Authentication, cipta seorang pengguna Manager menggunakan email abg.
4. Salin Project URL dan anon public key ke `config.js`.
5. Deploy semua fail ke hosting. Selepas itu semua urusan barang dibuat melalui `manager.html` sahaja.

Jangan letakkan service-role key atau kata laluan dalam fail laman.
