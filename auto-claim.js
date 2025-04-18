require('dotenv').config();
const axios = require('axios');
const { ethers } = require('ethers');
const chalk = require('chalk');

const address = process.env.WALLET_ADDRESS;
const url = "https://faucet.morkie.xyz/api/monad";
const rpc = "https://testnet-rpc.monad.xyz";

if (!address) {
  console.error("❌ Wallet address belum di-set di file .env");
  process.exit(1);
}

function printBanner() {
  const line = chalk.cyan('========================================');
  console.log(line);
  console.log(chalk.greenBright('        Bot Auto Claim Faucet MON'));
  console.log(chalk.greenBright('           Created by ACHERON'));
  console.log(line);
}

async function getBalance() {
  try {
    const res = await axios.post(rpc, {
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: [address, "latest"],
      id: 1
    });
    const balanceWei = res.data.result;
    const balance = ethers.formatEther(balanceWei);
    console.log(`[${new Date().toLocaleString()}] 💰 Saldo MON: ${balance} MON`);
  } catch (e) {
    console.log("⚠️  Gagal cek saldo:", e.message);
  }
}

function countdown(ms) {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      ms -= 1000;
      const sec = Math.floor((ms / 1000) % 60);
      const min = Math.floor((ms / 1000 / 60) % 60);
      const hrs = Math.floor((ms / 1000 / 60 / 60) % 24);
      const days = Math.floor(ms / 1000 / 60 / 60 / 24);

      process.stdout.write(`\r⏳ Menunggu: ${days}d ${hrs}h ${min}m ${sec}s `);

      if (ms <= 0) {
        clearInterval(interval);
        process.stdout.write('\n');
        resolve();
      }
    }, 1000);
  });
}

async function claimFaucet() {
  try {
    const response = await axios.post(url, { address }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://faucet.morkie.xyz',
        'Referer': 'https://faucet.morkie.xyz/monad'
      }
    });

    const data = response.data;

      if (data.success) {
      console.log(`[${new Date().toLocaleString()}] ✅ Claim berhasil!`);
      await getBalance();
      const jam = "24:00:00";
      console.log(`[${new Date().toLocaleString()}] ⏳ Menunggu ${jam} hingga claim berikutnya.`);
      return 24 * 60 * 60 * 1000; // 24 jam
    } else {
      const waitMs = data.remainingTime ? data.remainingTime + 60000 : 10 * 60 * 1000;
      console.log(`[${new Date().toLocaleString()}] ⏳ Belum bisa claim: ${data.message}. Coba lagi dalam ${Math.round(waitMs / 60000)} menit`);
      await countdown(waitMs);
      return 0;
    }

  } catch (error) {
    if (error.response && error.response.data) {
      const data = error.response.data;
      if (data.remainingTime) {
        const waitMs = data.remainingTime + 60000;
        console.log(`[${new Date().toLocaleString()}] ⏳ Sudah klaim. Tunggu ${Math.round(waitMs / 60000)} menit.`);
        await countdown(waitMs);
        return 0;
      }
    }

    console.error(`[${new Date().toLocaleString()}] ❌ Error saat klaim: ${error.message}. Kemungkinan jaringan padat.`);
    return 5 * 60 * 1000;
  }
}

async function mainLoop() {
  printBanner();
  while (true) {
    const wait = await claimFaucet();
    if (wait > 0) await new Promise(resolve => setTimeout(resolve, wait));
  }
}

mainLoop();
