# 🐊 NILE ECOSYSTEM — Production-Grade Web3 Fintech Platform

> **Institutional Grade • Absolute Control • Free Deployment on Vercel & Cloudflare**  
> An enterprise-ready Web3 multi-asset investment protocol, digital banking portal, crypto marketplace, and multi-wallet internal ledger platform.

---

## 🌟 Executive Overview & Key Features

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Motion animations, responsive fintech UI with RTL support (English, Persian, Arabic, etc.).
- **Backend API:** Node.js, Express, Prisma ORM, JWT Authentication with salted bcrypt hashing, 2FA support, rate-limiting, and Helmet security.
- **Serverless Ready:** Fully configured for 100% Free deployment on Vercel (via `api/index.js` and `vercel.json`) and Cloudflare Pages.
- **Internal Ledger Wallets:** 4 segregated wallets per user (`Internal Wallet`, `Investment Wallet`, `Referral Wallet`, `Shop Wallet`).
- **Investment Engine:**
  - **Plan 1 (Asset Based):** Flexible entry/exit daily algorithmic yield across USDT, ETH, and BTC.
  - **Plan 2 (Time Locked):** Fixed maturity rewards (30d: +25-50%, 50d: +55-110%, 100d: +140-280%).
  - **Plan 3 (Amount Tiers):** Scalable daily yield from 10 USDT (0.25% daily) up to 10,000 USDT (12.0% daily).
  - **🔥 NILE Token 2× Multiplier Rule:** When an investment is funded using NILE token, all calculated profits are automatically doubled!
  - **NILE Staking Pools:** 30 Days (+50%), 50 Days (+100%), 100 Days (+250%).
- **Withdrawal System:** 4 dedicated 3-hour cycles daily with manual compliance review and on-chain TXID recording.
- **10-Level Referral Engine:** Uncapped affiliate commissions (10% down to 1%), ranks (Bronze to Diamond), with mandatory reinvestment protection.
- **Web3 Marketplace & Token Creation:** Digital software licenses, virtual debit cards, and custom token generation across BEP20, ERC20, TRC20, Solana, and Sui.
- **Crypto Cards Portal:** Issue and manage virtual and physical Nile Visa/Mastercard cards.
- **Super Admin Panel & Audit Logging:** Every administrative action (balance adjustment, KYC approval, withdrawal approval, impersonation) is logged with before/after state and mandatory reason.
- **Internationalization (i18n):** Complete multilingual support across 7 languages including **English, Persian (فارسی), Arabic (العربية - RTL), French, Russian, Chinese, and Spanish**.

---

## 🚀 Quickstart & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Database (SQLite Default for Local Development)
```bash
npm run prisma:push
npm run prisma:seed
```

### 3. Run Locally
In terminal 1 (Backend API on port 5000):
```bash
npm run start
```

In terminal 2 (Frontend on port 3000):
```bash
npm run dev
```

The frontend will run at `http://localhost:3000` and automatically proxy all `/api` calls to `http://localhost:5000`.

---

## ☁️ 100% Free Production Deployment on Vercel

1. Push your repository to **GitHub**.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. The build settings are auto-configured from `vercel.json`.
4. Add the following Environment Variables in the Vercel dashboard:
   - `JWT_SECRET`: A secure random secret string.
   - `DATABASE_URL`: Connection string from [Neon.tech](https://neon.tech) (100% Free PostgreSQL) or [Supabase](https://supabase.com).
   - `ADMIN_EMAIL`: `admin@nileecosystem.com`
   - `ADMIN_DEFAULT_PASSWORD`: `AdminNileSecure2026!`
   - `NODE_ENV`: `production`
5. Click **Deploy**. Vercel will build and host both your frontend and serverless API backend with zero hosting costs!

---

## 🔐 Default Super Admin Credentials

- **Email:** `admin@nileecosystem.com`
- **Password:** `AdminNileSecure2026!`
- **Referral Code:** `NILE-FOUNDER`
- **Access Level:** Super Administrator with full control in `AdminPortalPage`.

---

## 📖 Persian Documentation
For detailed Persian instructions, see [DEPLOYMENT_GUIDE_FA.md](./DEPLOYMENT_GUIDE_FA.md).
