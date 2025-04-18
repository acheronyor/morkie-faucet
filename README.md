# Morkie Faucet Bot

Bot otomatis untuk klaim faucet token MON dari jaringan testnet Monad.

Faucet ini digunakan untuk mendapatkan token MON secara berkala dari [faucet resmi Monad](https://faucet.testnet.monad.xyz/). Bot akan mencoba klaim otomatis setiap kali dijalankan.

---

## Fitur

- Otomatis klaim token MON dari faucet.
- Validasi input wallet sebelum mengirim request.
- Logging berwarna dan informatif di terminal.
- Konfigurasi simpel via file `.env`.
- DYOR – gunakan dengan tanggung jawab pribadi.

---

## Instalasi

### 1. Clone repository

```bash
git clone https://github.com/acheronyor/morkie-faucet.git
cd morkie-faucet
```

### 2. Install dependencies

```bash
npm install
npm install axios dotenv chalk readline-sync
```

> Penjelasan dependensi:
>
> - `axios`: HTTP request ke endpoint faucet.
> - `dotenv`: Membaca data dari file `.env`.
> - `chalk`: Memberi warna pada log terminal.
> - `readline-sync`: Membaca input pengguna jika diperlukan.

### 3. Siapkan file `.env`

Buat file `.env` di root folder dan isi seperti berikut:

```env
WALLET_ADDRESS=0xAlamatWalletKamu
```

Ganti `0xAlamatWalletKamu` dengan alamat wallet testnet Monad milikmu.

### 4. Jalankan bot

```bash
node auto-claim.js
```

---

## Peringatan

- Bot ini dibuat hanya untuk keperluan testnet Monad.
- Gunakan hanya dengan wallet testnet, **bukan wallet utama kamu**.
- Tidak ada jaminan performa atau keamanan – gunakan dengan risiko masing-masing.
- **DYOR (Do Your Own Research)** sebelum menggunakan, memodifikasi, atau mendistribusikan ulang bot ini.

---

## Author

Created by **ACHERON**

Jika kamu merasa bot ini bermanfaat, jangan lupa kasih ⭐ di repo dan bagikan ke teman-teman pejuang testnet lainnya!
```

---

