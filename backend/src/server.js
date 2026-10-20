const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const config = require('./config');

const authRoutes = require('./routes/authRoutes');
const walletRoutes = require('./routes/walletRoutes');
const investmentRoutes = require('./routes/investmentRoutes');
const referralRoutes = require('./routes/referralRoutes');
const shopRoutes = require('./routes/shopRoutes');
const academyRoutes = require('./routes/academyRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cardRoutes = require('./routes/cardRoutes');
const presaleRoutes = require('./routes/presaleRoutes');
const supportRoutes = require('./routes/supportRoutes');
const { runDailyProfitDistribution } = require('./services/investmentEngine');

const app = express();

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: false
}));

app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests from this IP, please try again later.' }
});
app.use('/api/', limiter);

// Logging & Body Parsers
if (config.nodeEnv !== 'test' && !process.env.VERCEL) {
  app.use(morgan('combined'));
}
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'NILE INVESTMENT',
    version: '1.0.0',
    mode: process.env.VERCEL ? 'vercel-serverless' : 'standalone-node',
    timestamp: new Date().toISOString(),
    offices: config.offices
  });
});

// Mount Platform Routers (both plural and singular aliases supported)
app.use('/api/auth', authRoutes);
app.use('/api/wallets', walletRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/referrals', referralRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/academy', academyRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/presale', presaleRoutes);
app.use('/api/support', supportRoutes);

// Daily Profit Engine Runner
if (!process.env.VERCEL && process.env.NODE_ENV !== 'test') {
  setInterval(async () => {
    try {
      const res = await runDailyProfitDistribution();
      console.log(`[DAILY PROFIT ENGINE] Distributed profits: ${res.processed} investments credited.`);
    } catch (err) {
      console.error('[DAILY PROFIT ENGINE ERROR]', err.message);
    }
  }, 24 * 60 * 60 * 1000);
}

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error occurred.'
  });
});

// Start Server in standalone mode
if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(config.port, () => {
    console.log(`=======================================================`);
    console.log(`🚀 NILE INVESTMENT BACKEND ONLINE ON PORT ${config.port}`);
    console.log(`🌍 UK Office: ${config.offices.uk.address}`);
    console.log(`🏢 UAE Office: ${config.offices.uae.address}`);
    console.log(`=======================================================`);
  });
}

module.exports = app;
