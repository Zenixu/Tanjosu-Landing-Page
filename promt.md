# PREMIUM LANDING PAGE GENERATOR PROMPT

Gunakan prompt di bawah ini (copy dari bagian "START PROMPT" hingga "END PROMPT") kepada AI (seperti Claude, GPT-4, atau Gemini) untuk menghasilkan ulang atau membuat versi yang lebih baik dari website premium landing page Anda untuk produk atau brand lain.

---

### 👇 START PROMPT 👇

**Role & Objective:**
Bertindaklah sebagai Expert Frontend Developer dan Senior UI/UX Designer yang berspesialisasi dalam merancang website premium, luxury, dan high-converting. Tugas Anda adalah membuat sebuah Premium Landing Page modern, interaktif, dan berkelas tinggi untuk sebuah brand [NAMA_BRAND/PRODUK_ANDA], dengan kualitas yang melampaui standar website konvensional.

**Teknologi & Stack yang Digunakan:**
- React 19 + TypeScript (Vite)
- Tailwind CSS (v4)
- Framer Motion (untuk animasi kompleks dan micro-interactions)
- Lucide React / Heroicons (untuk ikonografi)
- @fontsource/playfair-display (Font Heading Premium)
- @fontsource/inter (Font Body Modern)

**Brand Identity & Aesthetic Guidelines:**
- **Color Palette:** 
  - Primary Dark (Luxury Emerald/Navy/Black): `[KODE_WARNA_GELAP]` (contoh: `#043927`)
  - Primary Light (Cream/White): `[KODE_WARNA_TERANG]` (contoh: `#FDFCFB`)
  - Accent/Luxury (Gold/Bronze): `[KODE_WARNA_AKSEN]` (contoh: `#C5A059`)
- **Typography:** Gunakan serif yang elegan (Playfair Display) untuk Heading agar terkesan mahal, dipadukan dengan sans-serif (Inter) yang bersih untuk kemudahan membaca teks paragraf.
- **Vibe & Mood:** Exclusive, elegan, mysterious, high-end, memukau (WOW effect).
- **Design Elements:** 
  - Glassmorphism yang mulus (`backdrop-blur-xl`, border tipis transparan).
  - Custom Scrollbar yang stylish.
  - Custom Cursor berukuran kecil yang mengikuti pergerakan mouse dengan `mix-blend-mode: difference` dan efek dot emas.
  - Efek Shimmer/Kilau Emas pada teks penting.

**Arsitektur & Spesifikasi Komponen (Wajib Diimplementasikan secara Modular):**

1. **Loading Screen (`LoadingScreen.tsx`)**
   - Buat layar loading yang memblokir tampilan utama selama 2.5 - 3 detik.
   - Tampilkan progress bar berwarna emas yang terisi perlahan.
   - Sertakan logo atau teks dengan animasi "pulse" (membesar & mengecil halus).
   - Sertakan tagline atau hashtag brand (contoh: `#PREMIUMQUALITY`) yang berkedip elegan.
   - Gunakan `AnimatePresence` dari Framer Motion agar hilang secara *fade-out*.

2. **Custom Cursor (`CustomCursor.tsx`)**
   - Sembunyikan cursor default (`cursor: none` di CSS).
   - Buat cursor kustom berupa lingkaran border (20px) dan titik dot (6px) di tengah, yang tertinggal (lagging/trailing effect) secara halus saat digerakkan.
   - Matikan di perangkat mobile.

3. **Glassmorphism Navbar (`Navbar.tsx`)**
   - Posisi `fixed` di atas, transparan saat di paling atas, lalu berubah menjadi efek glass (blur) dengan background semi-transparan saat di-scroll.
   - Animasi *slide-down* saat web pertama kali dimuat.

4. **Hero Section (`Hero.tsx`)**
   - Background berupa Video Full-Screen (atau High-Res Image dengan efek parallax).
   - Layer *overlay gradient* dari atas ke bawah untuk menggelapkan gambar agar teks terlihat jelas (misalnya dari opacity 30% ke 95%).
   - Teks Heading berukuran masif dengan animasi *staggered text reveal* (muncul per kata/huruf dari bawah).
   - Call-to-Action (CTA) button dengan efek *magnetic* atau *pulse ring* yang memancar.

5. **Marquee Banner (`MarqueeBanner.tsx`)**
   - Banner horizontal yang berjalan tanpa henti (infinite scroll) menampilkan kata kunci atau USP brand.
   - Berhenti bergerak (paused) ketika di-hover.

6. **Signature / Featured Section (`SignaturePicks.tsx`)**
   - Layout grid asimetris atau bento-box.
   - Gambar produk dengan efek *zoom-in* lambat saat kontainernya di-hover (`group-hover:scale-110`).
   - Teks deskripsi dengan sentuhan kilau emas (`gold-shimmer`).

7. **Menu / Product Showcase (`MenuSection.tsx` & `MenuCard.tsx`)**
   - Kartu produk (MenuCard) dengan transisi `translateY(-8px)` dan penambahan drop shadow elegan saat di-hover.
   - Gunakan Framer Motion `whileInView` agar kartu muncul (fade up) satu per satu saat di-scroll (menggunakan viewport `margin: "-100px"`).

8. **About / Story Section (`AboutSection.tsx`)**
   - Gunakan ornamen pemisah (divider) eksklusif (seperti ikon daun 🌿 atau diamond 💎).
   - Animasi elemen yang mengambang perlahan (floating animation: naik turun 10px secara *infinite*).

9. **Location / Contact (`LocationSection.tsx`)**
   - Tampilkan peta interaktif atau gambar estetis lokasi/toko dengan frame *glassmorphism*.
   - Informasi jam buka dan detail kontak yang tersusun rapi.

10. **Footer (`Footer.tsx`)**
    - Footer gelap nan mewah dengan tautan navigasi, sosial media, dan copyright.

**Aturan Animasi CSS & Framer Motion Khusus:**
- Tambahkan kelas CSS kustom di `index.css`:
  - `.glass`, `.glass-dark`
  - `@keyframes shimmer` (untuk `.gold-shimmer`)
  - `@keyframes float` (untuk animasi mengambang)
  - `@keyframes pulse-ring` (untuk cincin yang memancar di tombol)
- Selalu gunakan `ease: [0.22, 1, 0.36, 1]` atau serupa untuk transisi yang terasa natural dan *buttery smooth*.

**Instruksi Output Code:**
Tuliskan struktur lengkapnya, dimulai dari `package.json`, konfigurasi Tailwind (`index.css`), struktur `App.tsx`, hingga detail kode masing-masing komponen. Pastikan kode bersifat *production-ready*, bebas error, dan mengutamakan estetika "WOW" factor di setiap pikselnya. Jangan gunakan placeholder untuk warna; langsung terapkan palet warna premium.

### 👆 END PROMPT 👆

---

**Cara Menggunakan Prompt Ini:**
1. Salin teks dari **START PROMPT** sampai **END PROMPT**.
2. Ganti placeholder `[NAMA_BRAND/PRODUK_ANDA]`, `[KODE_WARNA_GELAP]`, dll dengan identitas brand produk baru Anda.
3. Kirimkan ke AI Assistant (seperti Claude 3.5 Sonnet, GPT-4o, atau Gemini 1.5 Pro).
4. AI akan menghasilkan kode yang lengkap, terstruktur, dan kualitasnya minimal setara atau **jauh lebih bagus** dari website Tanjosu Premium ini karena sudah menginstruksikan standar animasi, glassmorphism, dan komponen interaktif yang tinggi.
