# Laman Pautan Peribadi

Laman pautan peribadi yang ringan untuk kongsi affiliate link dan media sosial.

## Tukar nama dan pautan

Buka `script.js`, kemudian kemas kini bahagian `siteConfig`:

- `name`, `profileImage`, serta `bio.text` dan `bio.accent` untuk profil.
- `welcome` untuk ayat penerangan showroom di halaman utama.
- `platforms` untuk nama platform yang dipaparkan.
- `categories` untuk kategori produk.
- `products` untuk produk, nombor, kategori, platform dan affiliate link.

Setiap pautan produk akan dibuka dalam tab baharu dengan perlindungan `noopener noreferrer`.

## Jalankan secara setempat

Buka `index.html` terus dalam pelayar, atau gunakan pelayan statik seperti VS Code Live Server.

## Terbitkan ke GitHub Pages

1. Hantar fail ini ke repositori GitHub.
2. Dalam GitHub, buka **Settings** > **Pages**.
3. Pilih **Deploy from a branch**, pilih branch `main` atau `master`, kemudian folder `/(root)`.
4. Simpan. GitHub akan beri URL laman selepas deployment siap.


## Status deployment

Laman diterbitkan secara automatik daripada branch `main` menggunakan GitHub Pages.
