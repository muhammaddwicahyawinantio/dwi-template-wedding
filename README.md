# Wedding Portfolio Template

Template portofolio undangan pernikahan digital berbasis Next.js, Tailwind CSS, dan MongoDB. Konten default sudah dibuat sebagai contoh fiktif minimalis elegan `Arka & Liora`, sehingga siap dipakai sebagai demo atau diganti untuk klien berikutnya.

## Fitur

- Halaman undangan digital dengan pembuka, cerita pasangan, detail acara, countdown, video prewedding, RSVP, dan daftar ucapan.
- Konfigurasi konten melalui environment variable.
- RSVP dan ucapan tersimpan di MongoDB Atlas.
- Asset gambar lokal sudah diganti dengan stok fiktif bernuansa minimalis elegan dari Unsplash.
- Siap deploy ke Vercel.

## Setup Lokal

1. Install dependency:

   ```bash
   npm install
   ```

2. Buat file `.env.local` dari `.env.example`, lalu isi `MONGODB_URI` dengan connection string MongoDB Atlas.

3. Jalankan project:

   ```bash
   npm run dev
   ```

4. Buka alamat lokal yang muncul di terminal.

## Environment Variable

Minimal untuk deploy:

```env
MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/wedding_portfolio?retryWrites=true&w=majority"
MONGODB_DB_NAME="wedding_portfolio"
NEXT_PUBLIC_EVENT_DATE="2027-01-01T10:00:00"
NEXT_PUBLIC_COUPLE_NAMES="Arka & Liora"
NEXT_PUBLIC_GROOM_NAME="Arka Pradana"
NEXT_PUBLIC_BRIDE_NAME="Liora Anindya"
NEXT_PUBLIC_RSVP=true
```

Variabel lengkap tersedia di `.env.example`.

## Deploy ke Vercel

1. Push project ke repository Git.
2. Import repository ke Vercel.
3. Di menu Environment Variables Vercel, salin nilai dari `.env.local` atau `.env.example` yang sudah diisi.
4. Pastikan `MONGODB_URI` memakai connection string MongoDB Atlas yang valid.
5. Deploy.

Build command default:

```bash
npm run build
```

Output framework otomatis dikenali oleh Vercel sebagai Next.js.

## Kustomisasi

- Ganti nama, tanggal, lokasi, cerita, kutipan, link Google Maps, link live streaming, dan video prewedding melalui environment variable.
- Ganti gambar di folder `public` bila ingin membuat versi klien tertentu.
- Untuk undangan personal, gunakan URL seperti `/to:Nama%20Tamu`.
