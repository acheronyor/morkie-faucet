# Morkie Faucet Bot

Bot otomatis untuk klaim faucet MON di jaringan **testnet Monad** dari [https://faucet.morkie.xyz](https://faucet.morkie.xyz).  
Bot akan terus berjalan dan melakukan klaim otomatis saat tersedia, serta menampilkan informasi mining & faucet secara real-time.

---

## Fitur

- Klaim otomatis dari faucet Morkie (jika tersedia).
- Cek dan tampilkan info sesi seperti reward, shares, hashrate, dan waktu tersisa.
- Tampilkan status faucet (running, stopped, expired).
- Retry otomatis jika klaim gagal.
- Dukungan session ganda: jika satu session selesai, bisa lanjut pakai session baru.
- Logging berwarna & informatif di terminal.
- Dukungan multi-thread mining hingga 32 worker.
- DYOR (Do Your Own Research) – gunakan dengan tanggung jawab pribadi.

---

## Instalasi

### 1. Clone repo ini

```bash
git clone https://github.com/acheronyor/morkie-faucet.git
cd morkie-faucet
```

### 2. Install dependencies

```bash
npm install
```

### 3. Siapkan file `.env`

Buat file `.env` dan isi dengan:

```env
SESSION_ID=isi_session_id_dari_browser
TARGET_ADDRESS=0xAlamatWalletKamu
```

> **Catatan:**  
> Login dulu ke faucet di browser agar bisa bypass captcha dan dapat session ID.  
> Lalu salin `SESSION_ID` dari devtools > Application > Cookies > `sepolia-faucet.pk910.de`.

---

## Jalankan script

```bash
node faucet-miner.js
```

Script akan otomatis mulai mining, tampilkan status live, dan klaim saat faucet siap.

---

## Peringatan

- Script ini **hanya untuk keperluan testnet**.
- Tidak boleh dijalankan dari device/browser berbeda dengan tempat login.
- Jangan gunakan untuk aktivitas berlebihan atau abuse faucet publik.
- Tidak ada jaminan reward atau keberhasilan.

---

## Author

Created by **ACHERON**

Jika script ini membantu kamu farming testnet, jangan lupa kasih **bintang repo ini** dan share ke teman pejuang faucet lainnya!

---


