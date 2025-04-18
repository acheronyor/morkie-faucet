
---

### `README.md` (final versi lengkap)

```markdown
<h1 align="center">🤖 Morkie Faucet Auto-Claim Bot</h1>
<p align="center">
  Script otomatis untuk klaim faucet MON di testnet Monad.
</p>

---

## ✨ Fitur

- Cek saldo wallet MON
- Auto klaim faucet setiap 24 jam
- Countdown sambil menunggu
- Terminal log yang berwarna
- Anti-error: tetap lanjut walau gagal koneksi

---

## ⚙️ Instalasi & Penggunaan

### Jika menggunakan Termux (Android)

```bash
pkg update && pkg upgrade
pkg install nodejs git
git clone https://github.com/acheronyor/morkie-faucet.git
cd morkie-faucet
npm install
```

### Jika menggunakan Linux / MacOS

```bash
git clone https://github.com/acheronyor/morkie-faucet.git
cd morkie-faucet
npm install
```

### 1. Buat file `.env`

Isi dengan wallet address kamu:
```env
WALLET_ADDRESS=0xAlamatWalletKamu
```

### 2. Jalankan script

```bash
node auto-claim.js
```

---

## ⚠️ Disclaimer

**DYOR - Do Your Own Research**  
Script ini dibuat untuk tujuan edukasi. Gunakan dengan risiko Anda sendiri.

---

<p align="center">
  Made with 💻 by <strong>ACHERON</strong>
</p>
```

---


