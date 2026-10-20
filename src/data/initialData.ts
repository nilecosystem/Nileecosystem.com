import { 
  DepositWalletsConfig, 
  PresalePhase, 
  CryptoCard, 
  MarketplaceProduct, 
  Testimonial,
  DexToken,
  AdminAuditEntry,
  NileStakingPool,
  NileUserStake,
  AchievementBadge,
  ReferralTierConfig,
  TokenomicsAllocation,
  VestingScheduleEvent,
  KycAmlProviderSession,
  UserProfile
} from '../types/index.ts';

// Official Deposit Wallet Addresses specified by Project Owner
export const INITIAL_DEPOSIT_WALLETS: DepositWalletsConfig = {
  BTC_1: 'bc1qhcyuprv4m2akkflcy3aszmx5wggzzadf42y3as',
  BTC_2: '1KisoLQNGUZKSG3PZZcfGUn2RUTpBRfsZB',
  ETH_BNB: '0x9ad1Faa6d1DBDC047001b16eA1ced073a6058399',
  TRON: 'TE5QqMoBbLbTkUtkcfe93WTyH9ytm78zaR',
  SOLANA_1: '8XPTkroufgEDJoCLM9KDBhMZzaBzo6FfdHpvaHcWbTpE',
  SOLANA_2: 'FGucaYXLFpeFVAQP6cUW8vsVpjo55MjeBgqPrRuNLCfj',
  BCH: 'qqyvysrxd72yxa04kj703vd6tt63axnkdv7heyzc8l',
  ETC: '0x8Df46ed561dE2e92DB979ED1fbE183748F636250',
  XRP: 'rJ8MNvjZhSHShg3uwQLnZwbyaCRTmTXmSf'
};

// Official Support & Contact details
export const OFFICIAL_CONTACT_INFO = {
  ownerEmail: 'owner@nileecosystem.com',
  infoEmail: 'info@nileecosystem.com',
  supportEmail: 'support@nileecosystem.com',
  phone: '+447558847468',
  whatsapp: '+447552847468',
  telegram: 'https://t.me/Nile_support',
  twitter: 'https://x.com/nileecosystem',
  youtube: 'https://www.youtube.com/@Nilecosystem',
  website: 'https://nileecosystem.com',
  registeredCompany: 'NILE INVESTMENT LTD',
  companyNumber: '08253865',
  registryJurisdiction: 'Companies House, Cardiff, United Kingdom',
  complianceCertDate: '28.12.2025',
  incorporationDate: '11 October 2026'
};

export const SCHENGEN_COUNTRIES = [
  'Austria', 'Belgium', 'Croatia', 'Czech Republic', 'Denmark',
  'Estonia', 'Finland', 'France', 'Germany', 'Greece',
  'Hungary', 'Iceland', 'Italy', 'Latvia', 'Liechtenstein',
  'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Norway',
  'Poland', 'Portugal', 'Slovakia', 'Slovenia', 'Spain',
  'Sweden', 'Switzerland'
];

export const ALL_SHIPPING_REGIONS = [
  'United Kingdom',
  'United States of America',
  'Canada',
  'United Arab Emirates (UAE)',
  ...SCHENGEN_COUNTRIES
];

// Total Supply: 500,000,000 NILE
export const TOTAL_TOKEN_SUPPLY = 500000000;

export const TOKENOMICS_ALLOCATIONS: TokenomicsAllocation[] = [
  { category: 'Public & Seed Presale', percentage: 30, amount: 150000000, color: '#E5B842', lockPeriod: '15% at TGE, 85% vested over 9 months' },
  { category: 'Ecosystem & Treasury Fund', percentage: 25, amount: 125000000, color: '#00F0FF', lockPeriod: '6-month cliff, 36-month linear unlock' },
  { category: 'Staking & Community Rewards', percentage: 20, amount: 100000000, color: '#38BDF8', lockPeriod: 'Released per block/era according to staking participation' },
  { category: 'Founders & Core Contributors', percentage: 15, amount: 75000000, color: '#818CF8', lockPeriod: '12-month cliff, 24-month linear vesting' },
  { category: 'Liquidity & Exchange Listings', percentage: 10, amount: 50000000, color: '#34D399', lockPeriod: '100% unlocked at TGE locked in DEX liquidity pools' },
];

export const VESTING_SCHEDULE_EVENTS: VestingScheduleEvent[] = [
  { id: '1', date: 'Q1 2026', title: 'TGE Initial Liquidity & 15% Presale Unlock', allocationTokens: 72500000, category: 'Liquidity / Presale' },
  { id: '2', date: 'Q2 2026', title: 'Presale Tranche 2 & Staking Incentives Start', allocationTokens: 35000000, category: 'Community' },
  { id: '3', date: 'Q3 2026', title: 'Ecosystem Treasury Cliff End & Presale Tranche 3', allocationTokens: 45000000, category: 'Ecosystem' },
  { id: '4', date: 'Q4 2026', title: 'Presale Final Tranche & Marketplace Liquidity', allocationTokens: 50000000, category: 'Marketplace' },
  { id: '5', date: 'Q1 2027', title: 'Founders 12-Month Cliff Unlock Initiation', allocationTokens: 18750000, category: 'Team' },
  { id: '6', date: 'Q2 2027', title: 'Ecosystem Linear Unlock Year 2 Tranche', allocationTokens: 31250000, category: 'Ecosystem' },
];

export const INITIAL_PRESALE_PHASES: PresalePhase[] = [
  {
    id: 1,
    name: 'Phase 1: Seed Pioneer',
    tokenPriceUsd: 0.05,
    totalAllocation: 50000000,
    soldAllocation: 41250000,
    minPurchaseUsd: 50,
    maxPurchaseUsd: 25000,
    startDate: '2026-02-01',
    endDate: '2026-04-15',
    status: 'active',
    vestingRule: '15% at TGE, 85% released linearly across 9 months'
  },
  {
    id: 2,
    name: 'Phase 2: Strategic Ecosystem',
    tokenPriceUsd: 0.08,
    totalAllocation: 50000000,
    soldAllocation: 0,
    minPurchaseUsd: 100,
    maxPurchaseUsd: 50000,
    startDate: '2026-04-16',
    endDate: '2026-06-30',
    status: 'upcoming',
    vestingRule: '20% at TGE, 80% released linearly across 6 months'
  },
  {
    id: 3,
    name: 'Phase 3: Public Launchpad',
    tokenPriceUsd: 0.12,
    totalAllocation: 50000000,
    soldAllocation: 0,
    minPurchaseUsd: 25,
    maxPurchaseUsd: 100000,
    startDate: '2026-07-01',
    endDate: '2026-08-31',
    status: 'upcoming',
    vestingRule: '25% at TGE, 75% released linearly across 4 months'
  }
];

export const INITIAL_CRYPTO_CARDS: CryptoCard[] = [
  {
    id: 'card-1',
    type: 'visa',
    cardholderName: 'Matin Parsa',
    cardNumberMasked: '4319 •••• •••• 3787',
    fullCardNumber: '4319590004233787',
    expiryMonth: '08',
    expiryYear: '29',
    cvv: '842',
    status: 'active',
    balance: 25000,
    tier: 'Gold',
    currency: 'USD',
    cashbackRate: 3.5,
    isPhysical: true,
    limits: {
      dailySpending: 10000,
      monthlySpending: 50000,
      dailyAtm: 3000
    }
  },
  {
    id: 'card-2',
    type: 'mastercard',
    cardholderName: 'Matin Parsa',
    cardNumberMasked: '5205 •••• •••• 5546',
    fullCardNumber: '5205812310475546',
    expiryMonth: '11',
    expiryYear: '28',
    cvv: '193',
    status: 'active',
    balance: 50000,
    tier: 'Black Elite',
    currency: 'EUR',
    cashbackRate: 5.0,
    isPhysical: true,
    limits: {
      dailySpending: 25000,
      monthlySpending: 100000,
      dailyAtm: 5000
    }
  },
  {
    id: 'card-3',
    type: 'mastercard',
    cardholderName: 'Matin Parsa',
    cardNumberMasked: '5331 •••• •••• 8336',
    fullCardNumber: '5331714100448336',
    expiryMonth: '04',
    expiryYear: '30',
    cvv: '614',
    status: 'active',
    balance: 10000,
    tier: 'Standard',
    currency: 'GBP',
    cashbackRate: 2.0,
    isPhysical: false,
    limits: {
      dailySpending: 5000,
      monthlySpending: 20000,
      dailyAtm: 1500
    }
  }
];

export const INITIAL_MARKETPLACE_PRODUCTS: MarketplaceProduct[] = [
  {
    "id": "prod-soft-001",
    "title": "Windows 11 Pro Retail License Key",
    "category": "software",
    "priceUsd": 15,
    "image": "/assets/products/software-license-box.png",
    "description": "Lifetime authentic digital retail activation key for Windows 11 Professional.",
    "features": [
      "Lifetime 1-PC activation",
      "Supports all languages",
      "Direct official Microsoft download",
      "BitLocker encryption & remote desktop"
    ],
    "inStock": true,
    "stockCount": 100,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-002",
    "title": "Windows 10 Pro Retail License Key",
    "category": "software",
    "priceUsd": 12,
    "image": "/assets/products/software-license-box.png",
    "description": "Lifetime authentic digital retail activation key for Windows 10 Professional.",
    "features": [
      "Instant digital key delivery",
      "Direct Microsoft ISO download",
      "Lifetime activation guarantee",
      "Free upgrade to Windows 11"
    ],
    "inStock": true,
    "stockCount": 105,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-003",
    "title": "Windows Server 2022 Datacenter 16-Core",
    "category": "software",
    "priceUsd": 99,
    "image": "/assets/products/software-license-box.png",
    "description": "Enterprise server operating system with unlimited virtual instances and shielded VMs.",
    "features": [
      "16-Core license entitlement",
      "Unlimited Hyper-V containers",
      "Software-defined networking",
      "Storage Spaces Direct"
    ],
    "inStock": true,
    "stockCount": 110,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-004",
    "title": "Microsoft Office 2024 Professional Plus",
    "category": "software",
    "priceUsd": 29,
    "image": "/assets/products/office-2024-enterprise.png",
    "description": "Full suite lifetime digital license for Word, Excel, PowerPoint, Outlook & Access.",
    "features": [
      "Lifetime validity on 1 PC",
      "Full 2024 offline suite",
      "Word, Excel, PowerPoint, Access, Outlook",
      "Commercial enterprise license"
    ],
    "inStock": true,
    "stockCount": 115,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-005",
    "title": "Microsoft Office 2021 Professional Plus",
    "category": "software",
    "priceUsd": 24,
    "image": "/assets/products/office-2024-enterprise.png",
    "description": "Official lifetime activation key for Microsoft Office 2021 Professional Plus.",
    "features": [
      "Instant digital dispatch",
      "Full desktop applications",
      "No monthly subscription fees",
      "Multilingual global support"
    ],
    "inStock": true,
    "stockCount": 120,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-006",
    "title": "Microsoft Office 365 Family 1-Year (6 Users)",
    "category": "software",
    "priceUsd": 45,
    "image": "/assets/products/office-2024-enterprise.png",
    "description": "1-Year authentic subscription for up to 6 accounts with 6TB total cloud storage.",
    "features": [
      "6 separate user accounts",
      "1TB OneDrive cloud storage per user",
      "Access on PC, Mac, iPad & Android",
      "Premium Word, Excel & Copilot"
    ],
    "inStock": true,
    "stockCount": 125,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-007",
    "title": "Microsoft Project Professional 2024",
    "category": "software",
    "priceUsd": 39,
    "image": "/assets/products/office-2024-enterprise.png",
    "description": "Advanced project management, Gantt resource scheduling and portfolio budgeting.",
    "features": [
      "Pre-built project templates",
      "Resource allocation heatmaps",
      "Automated scheduling engine",
      "Lifetime perpetual retail license"
    ],
    "inStock": true,
    "stockCount": 130,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-008",
    "title": "Microsoft Visio Professional 2024",
    "category": "software",
    "priceUsd": 35,
    "image": "/assets/products/office-2024-enterprise.png",
    "description": "Professional diagramming, engineering schematics, flowcharts and network topologies.",
    "features": [
      "Extensive shape libraries",
      "Link diagrams to live Excel data",
      "BPMN 2.0 & UML compliance",
      "Lifetime digital retail key"
    ],
    "inStock": true,
    "stockCount": 135,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-009",
    "title": "JetBrains All Products Pack (1-Year Commercial)",
    "category": "software",
    "priceUsd": 189,
    "image": "/assets/products/jetbrains-all-products-pack.png",
    "description": "Full professional commercial suite including IntelliJ IDEA, PyCharm, WebStorm, CLion & GoLand.",
    "features": [
      "Includes all 16 JetBrains IDEs",
      "Commercial deployment license",
      "Cross-platform Mac, Windows, Linux",
      "Continuous version updates"
    ],
    "inStock": true,
    "stockCount": 140,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-010",
    "title": "IntelliJ IDEA Ultimate 1-Year Subscription",
    "category": "software",
    "priceUsd": 89,
    "image": "/assets/products/jetbrains-all-products-pack.png",
    "description": "Industry leading Java, Kotlin & Full-Stack IDE with enterprise framework tools.",
    "features": [
      "Full Spring & Jakarta EE support",
      "Database tools & SQL client",
      "Advanced profiling & remote dev",
      "Instant license activation"
    ],
    "inStock": true,
    "stockCount": 145,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-011",
    "title": "PyCharm Professional 1-Year Subscription",
    "category": "software",
    "priceUsd": 79,
    "image": "/assets/products/jetbrains-all-products-pack.png",
    "description": "Premier Python IDE for data science, web development with Django & FastAPI.",
    "features": [
      "Jupyter Notebook integration",
      "Scientific tools & interactive plots",
      "Docker & Kubernetes container support",
      "Commercial license key"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-012",
    "title": "WebStorm 1-Year Commercial License",
    "category": "software",
    "priceUsd": 59,
    "image": "/assets/products/jetbrains-all-products-pack.png",
    "description": "Smartest JavaScript & TypeScript IDE with React, Vue, Angular and Node.js support.",
    "features": [
      "Built-in debugger & test runner",
      "Git version control integration",
      "Intelligent code completion",
      "Official JetBrains activation"
    ],
    "inStock": true,
    "stockCount": 155,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-013",
    "title": "GoLand 1-Year Commercial License",
    "category": "software",
    "priceUsd": 69,
    "image": "/assets/products/jetbrains-all-products-pack.png",
    "description": "Ergonomic Go (Golang) IDE with code inspection, refactorings and debugger.",
    "features": [
      "Deep Go syntax analysis",
      "On-the-fly error detection",
      "Built-in test runner & profiler",
      "Commercial seat assignment"
    ],
    "inStock": true,
    "stockCount": 160,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-014",
    "title": "CLion 1-Year Commercial C/C++ IDE",
    "category": "software",
    "priceUsd": 79,
    "image": "/assets/products/jetbrains-all-products-pack.png",
    "description": "Powerful cross-platform C and C++ IDE with CMake, embedded development and static analysis.",
    "features": [
      "CMake, Makefiles & Gradle support",
      "Embedded debugging with GDB/LLDB",
      "Memory profiling integration",
      "Cross-platform license"
    ],
    "inStock": true,
    "stockCount": 165,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-015",
    "title": "Rider 1-Year .NET & Game Dev License",
    "category": "software",
    "priceUsd": 79,
    "image": "/assets/products/jetbrains-all-products-pack.png",
    "description": "Fast, powerful cross-platform .NET IDE with Unity and Unreal Engine support.",
    "features": [
      "C#, F#, VB.NET & ASP.NET Core",
      "Unity & Unreal Engine game tooling",
      "ReSharper engine integrated",
      "Commercial license key"
    ],
    "inStock": true,
    "stockCount": 170,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-016",
    "title": "DataGrip 1-Year Database IDE License",
    "category": "software",
    "priceUsd": 59,
    "image": "/assets/products/jetbrains-all-products-pack.png",
    "description": "Multi-engine database environment supporting Postgres, MySQL, Oracle, SQL Server, Mongo.",
    "features": [
      "Smart query console",
      "Visual schema comparison",
      "VCS integration for migrations",
      "Export to CSV, JSON, Markdown"
    ],
    "inStock": true,
    "stockCount": 175,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-017",
    "title": "NordVPN 2-Year Dedicated IP & VPN Access",
    "category": "software",
    "priceUsd": 49,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Premium high-speed VPN with dedicated obfuscated servers, double encryption and no-logs.",
    "features": [
      "Dedicated private IP address",
      "Threat Protection & ad blocker",
      "Double VPN & Onion over VPN",
      "High-speed 10Gbps servers across 111 countries"
    ],
    "inStock": true,
    "stockCount": 180,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-018",
    "title": "ExpressVPN 1-Year Ultra-Fast Subscription",
    "category": "software",
    "priceUsd": 59,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Lightning fast Lightway protocol VPN with trusted RAM-only server infrastructure.",
    "features": [
      "Unlimited bandwidth",
      "Servers across 105 countries",
      "Strict certified no-log policy",
      "24/7 priority customer service"
    ],
    "inStock": true,
    "stockCount": 185,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-019",
    "title": "Surfshark VPN 2-Year Unlimited Devices",
    "category": "software",
    "priceUsd": 39,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Unlimited simultaneous devices with CleanWeb, MultiHop and rotating IP.",
    "features": [
      "Unlimited connections",
      "CleanWeb malware & ad blocker",
      "Camouflage mode & Kill Switch",
      "Independent audit certified"
    ],
    "inStock": true,
    "stockCount": 190,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-020",
    "title": "CyberGhost VPN 3-Year Secure Access",
    "category": "software",
    "priceUsd": 42,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Optimized streaming and peer-to-peer torrenting servers with military grade AES-256.",
    "features": [
      "Over 9,000 servers worldwide",
      "WireGuard high-speed protocol",
      "Automated Kill Switch protection",
      "Dedicated NoSpy server access"
    ],
    "inStock": true,
    "stockCount": 195,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-021",
    "title": "Mullvad VPN 1-Year Anonymous Token",
    "category": "software",
    "priceUsd": 55,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Privacy-first VPN with account numbers only, zero email, and WireGuard cryptography.",
    "features": [
      "Zero personal details required",
      "WireGuard & OpenVPN protocols",
      "Port forwarding enabled",
      "Transparent open-source clients"
    ],
    "inStock": true,
    "stockCount": 200,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-022",
    "title": "Proton VPN Plus 2-Year Privacy Suite",
    "category": "software",
    "priceUsd": 69,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Swiss privacy-protected VPN with Secure Core underground servers and Tor integration.",
    "features": [
      "Swiss jurisdiction privacy laws",
      "Secure Core routed servers",
      "10Gbps server network",
      "NetShield DNS filtering"
    ],
    "inStock": true,
    "stockCount": 205,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-023",
    "title": "ChatGPT Plus 3-Month Priority Voucher",
    "category": "software",
    "priceUsd": 58,
    "image": "/assets/products/ai-tools-subscription-voucher.png",
    "description": "Direct subscription activation code for OpenAI ChatGPT Plus with GPT-4o and DALL-E 3.",
    "features": [
      "GPT-4o unlimited reasoning",
      "DALL-E 3 image generation",
      "Advanced Voice mode access",
      "Custom GPT builder enabled"
    ],
    "inStock": true,
    "stockCount": 210,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-024",
    "title": "ChatGPT Team 6-Month Commercial Seat",
    "category": "software",
    "priceUsd": 149,
    "image": "/assets/products/ai-tools-subscription-voucher.png",
    "description": "Collaborative ChatGPT workspace with higher rate limits and zero data training.",
    "features": [
      "Zero model training on data",
      "Admin workspace console",
      "Shared GPTs & analytics",
      "Unlimited GPT-4o access"
    ],
    "inStock": true,
    "stockCount": 215,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-025",
    "title": "Claude Pro 3-Month Enterprise Voucher",
    "category": "software",
    "priceUsd": 58,
    "image": "/assets/products/ai-tools-subscription-voucher.png",
    "description": "Priority access code for Anthropic Claude 3.5 Sonnet with 200k context window.",
    "features": [
      "Claude 3.5 Sonnet priority access",
      "5x higher usage caps",
      "Artifacts interactive workspace",
      "Fast response times during peak hours"
    ],
    "inStock": true,
    "stockCount": 220,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-026",
    "title": "Midjourney Pro Plan 1-Month Voucher",
    "category": "software",
    "priceUsd": 55,
    "image": "/assets/products/ai-tools-subscription-voucher.png",
    "description": "Full stealth mode image generation with 30 fast GPU hours and unlimited relaxed generations.",
    "features": [
      "Stealth mode generation",
      "30 Fast GPU hours per month",
      "Unlimited Relaxed GPU generations",
      "Commercial usage rights"
    ],
    "inStock": true,
    "stockCount": 225,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-027",
    "title": "Midjourney Standard Plan 1-Month Code",
    "category": "software",
    "priceUsd": 29,
    "image": "/assets/products/ai-tools-subscription-voucher.png",
    "description": "15 Fast GPU hours per month with unlimited relaxed generations and full commercial license.",
    "features": [
      "15 Fast GPU hours",
      "Unlimited Relaxed generation",
      "General commercial terms",
      "Direct Discord activation"
    ],
    "inStock": true,
    "stockCount": 230,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-028",
    "title": "Cursor AI Pro 1-Year Commercial License",
    "category": "software",
    "priceUsd": 160,
    "image": "/assets/products/ai-tools-subscription-voucher.png",
    "description": "Next-generation AI-first code editor built on VS Code with Claude 3.5 Sonnet integration.",
    "features": [
      "Fast model requests",
      "Multi-file codebase indexing",
      "Instant diff application",
      "Commercial developer license"
    ],
    "inStock": true,
    "stockCount": 235,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-029",
    "title": "GitHub Copilot Individual 1-Year License",
    "category": "software",
    "priceUsd": 85,
    "image": "/assets/products/jetbrains-all-products-pack.png",
    "description": "AI pair programmer supporting all modern IDEs with real-time autocompletion.",
    "features": [
      "Real-time code suggestions",
      "Copilot Chat in editor & CLI",
      "Multi-language intelligence",
      "Commercial use permitted"
    ],
    "inStock": true,
    "stockCount": 240,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-030",
    "title": "Perplexity Pro 1-Year Research Subscription",
    "category": "software",
    "priceUsd": 99,
    "image": "/assets/products/ai-tools-subscription-voucher.png",
    "description": "Real-time AI research engine with multi-model queries (Claude 3.5, GPT-4o, Sonar).",
    "features": [
      "Unlimited Pro searches",
      "Selectable frontier AI models",
      "File upload & data analysis",
      "$5 monthly API credits included"
    ],
    "inStock": true,
    "stockCount": 245,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-031",
    "title": "Runway Gen-3 Alpha 1-Year Creative Sub",
    "category": "software",
    "priceUsd": 180,
    "image": "/assets/products/ai-tools-subscription-voucher.png",
    "description": "Photorealistic AI video generation with motion brush, camera control and gen-3 alpha.",
    "features": [
      "High-definition video generation",
      "Gen-3 Alpha model access",
      "Remove watermark & upscale 4K",
      "Full commercial ownership"
    ],
    "inStock": true,
    "stockCount": 250,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-032",
    "title": "ElevenLabs Creator 3-Month Voice License",
    "category": "software",
    "priceUsd": 59,
    "image": "/assets/products/ai-tools-subscription-voucher.png",
    "description": "High-fidelity AI voice cloning and speech synthesis with emotional nuance.",
    "features": [
      "Instant voice cloning",
      "Commercial license included",
      "100,000 characters per month",
      "Low-latency API access"
    ],
    "inStock": true,
    "stockCount": 255,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-033",
    "title": "Visual Studio 2022 Enterprise License",
    "category": "software",
    "priceUsd": 199,
    "image": "/assets/products/software-license-box.png",
    "description": "Comprehensive enterprise IDE for complex architecture, load testing and diagnostics.",
    "features": [
      "Advanced IntelliTrace & diagnostics",
      "Live Unit Testing & CodeLens",
      "Architectural dependency diagrams",
      "Official Microsoft digital retail key"
    ],
    "inStock": true,
    "stockCount": 260,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-034",
    "title": "Docker Desktop Pro 1-Year Subscription",
    "category": "software",
    "priceUsd": 69,
    "image": "/assets/products/jetbrains-all-products-pack.png",
    "description": "Commercial Docker container development license with Docker Scout vulnerability insights.",
    "features": [
      "Unlimited local container dev",
      "Docker Scout container analysis",
      "5 concurrent private builds",
      "Commercial business compliance"
    ],
    "inStock": true,
    "stockCount": 265,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-035",
    "title": "VMware Workstation Pro 17 Lifetime License",
    "category": "software",
    "priceUsd": 75,
    "image": "/assets/products/software-license-box.png",
    "description": "Industry standard desktop hypervisor for running multiple x86 operating systems.",
    "features": [
      "Run Windows, Linux & macOS VMs",
      "DirectX 11 & OpenGL 4.3 3D support",
      "Restricted & encrypted virtual machines",
      "Lifetime perpetual activation"
    ],
    "inStock": true,
    "stockCount": 270,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-036",
    "title": "VMware Fusion Pro 13 Lifetime for Mac",
    "category": "software",
    "priceUsd": 75,
    "image": "/assets/products/software-license-box.png",
    "description": "Desktop hypervisor for Apple Silicon M1/M2/M3 running Windows 11 ARM and Linux.",
    "features": [
      "Optimized for Apple Silicon",
      "Fast Windows 11 ARM virtualization",
      "DirectX 11 3D hardware acceleration",
      "Lifetime perpetual key"
    ],
    "inStock": true,
    "stockCount": 275,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-037",
    "title": "Tableau Desktop 1-Year Creator License",
    "category": "software",
    "priceUsd": 249,
    "image": "/assets/products/software-license-box.png",
    "description": "Enterprise visual business analytics, dashboard creation and interactive data exploration.",
    "features": [
      "Live & in-memory data connections",
      "Interactive storytelling dashboards",
      "Advanced statistical calculations",
      "Direct data export to web & cloud"
    ],
    "inStock": true,
    "stockCount": 280,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-038",
    "title": "Navicat Premium 16 Perpetual License",
    "category": "software",
    "priceUsd": 129,
    "image": "/assets/products/software-license-box.png",
    "description": "Universal multi-database GUI connecting MySQL, PostgreSQL, SQLite, Oracle, MongoDB.",
    "features": [
      "Simultaneous multi-db connection",
      "Data modeling & visual query builder",
      "Data sync & migration tools",
      "Lifetime commercial license"
    ],
    "inStock": true,
    "stockCount": 285,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-039",
    "title": "Postman Professional 1-Year License",
    "category": "software",
    "priceUsd": 99,
    "image": "/assets/products/software-license-box.png",
    "description": "Complete API development platform with mock servers, automated testing and monitors.",
    "features": [
      "Team API collaboration",
      "Automated collection runner",
      "API documentation generation",
      "Commercial enterprise seat"
    ],
    "inStock": true,
    "stockCount": 290,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-040",
    "title": "1Password Families 1-Year Digital Subscription",
    "category": "software",
    "priceUsd": 39,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Encrypted vault password manager for up to 5 family members with Watchtower breach alerts.",
    "features": [
      "Up to 5 family member accounts",
      "Secret Key end-to-end encryption",
      "Watchtower compromised site alerts",
      "Cross-device automatic autofill"
    ],
    "inStock": true,
    "stockCount": 295,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-041",
    "title": "Bitdefender Total Security 2-Year (5 Devices)",
    "category": "software",
    "priceUsd": 35,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Complete multi-layer ransomware protection, firewall, anti-phishing and secure banking.",
    "features": [
      "Protection for 5 PC, Mac, iOS, Android",
      "Zero performance impact",
      "Multi-layer ransomware protection",
      "Secure VPN and banking browser"
    ],
    "inStock": true,
    "stockCount": 300,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-042",
    "title": "Kaspersky Total Security 2-Year License",
    "category": "software",
    "priceUsd": 34,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Comprehensive cybersecurity suite with antivirus, privacy protection and safe money.",
    "features": [
      "Real-time threat detection",
      "Safe Money financial protection",
      "Parental controls & GPS tracker",
      "Fast cloud-based database"
    ],
    "inStock": true,
    "stockCount": 305,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-043",
    "title": "Malwarebytes Premium 2-Year (3 Devices)",
    "category": "software",
    "priceUsd": 32,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Smarter real-time threat defense against zero-day exploits, adware and spyware.",
    "features": [
      "Real-time ransomware shielding",
      "Malicious website blocking",
      "Exploit protection engine",
      "Lightweight background performance"
    ],
    "inStock": true,
    "stockCount": 310,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-044",
    "title": "Adobe Creative Cloud All Apps 1-Year Voucher",
    "category": "software",
    "priceUsd": 280,
    "image": "/assets/products/software-license-box.png",
    "description": "Full suite containing Photoshop, Illustrator, Premiere Pro, After Effects, InDesign.",
    "features": [
      "20+ creative applications",
      "100GB Adobe cloud storage",
      "Adobe Fonts library access",
      "Direct Adobe account activation"
    ],
    "inStock": true,
    "stockCount": 315,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-045",
    "title": "Adobe Photoshop 2024 Perpetual Commercial Key",
    "category": "software",
    "priceUsd": 89,
    "image": "/assets/products/software-license-box.png",
    "description": "Professional raster graphics editor with Generative Fill and advanced neural filters.",
    "features": [
      "Generative AI tools included",
      "Advanced layer masking & retouching",
      "RAW camera profile support",
      "Perpetual lifetime license"
    ],
    "inStock": true,
    "stockCount": 320,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-046",
    "title": "Adobe Illustrator 2024 Perpetual License",
    "category": "software",
    "priceUsd": 89,
    "image": "/assets/products/software-license-box.png",
    "description": "Industry standard vector graphics and illustration software for logos, icons and typography.",
    "features": [
      "Generative Recolor vector AI",
      "Precision vector anchor controls",
      "Cross-format SVG & PDF export",
      "Commercial lifetime activation"
    ],
    "inStock": true,
    "stockCount": 325,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-047",
    "title": "Adobe Premiere Pro 2024 Perpetual License",
    "category": "software",
    "priceUsd": 99,
    "image": "/assets/products/software-license-box.png",
    "description": "Industry leading video production and editing software with speech-to-text auto-captions.",
    "features": [
      "4K, 8K & VR video editing",
      "Lumetri color grading tools",
      "Essential Sound audio cleanup",
      "Perpetual commercial activation"
    ],
    "inStock": true,
    "stockCount": 330,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-048",
    "title": "Adobe After Effects 2024 Perpetual Key",
    "category": "software",
    "priceUsd": 99,
    "image": "/assets/products/software-license-box.png",
    "description": "Cinematic visual effects, motion graphics compositing and kinetic typography.",
    "features": [
      "3D camera tracker & rotoscoping",
      "Advanced particle systems",
      "Seamless Premiere Pro Dynamic Link",
      "Perpetual lifetime key"
    ],
    "inStock": true,
    "stockCount": 335,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-049",
    "title": "DaVinci Resolve Studio 19 Lifetime License",
    "category": "software",
    "priceUsd": 195,
    "image": "/assets/products/software-license-box.png",
    "description": "Hollywood color grading, professional visual effects, Fairlight audio and 8K editing.",
    "features": [
      "DaVinci Neural Engine AI tools",
      "Multi-user collaboration tools",
      "Advanced HDR grading palettes",
      "Official Blackmagic license key"
    ],
    "inStock": true,
    "stockCount": 340,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-050",
    "title": "Ableton Live 12 Suite Perpetual License",
    "category": "software",
    "priceUsd": 249,
    "image": "/assets/products/software-license-box.png",
    "description": "Flagship digital audio workstation for music production, sound design and live performance.",
    "features": [
      "Includes 71GB sound library",
      "Max for Live programming suite",
      "Advanced MIDI generation tools",
      "Lifetime transferable license"
    ],
    "inStock": true,
    "stockCount": 345,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-051",
    "title": "FL Studio 21 Signature Edition Perpetual Key",
    "category": "software",
    "priceUsd": 149,
    "image": "/assets/products/software-license-box.png",
    "description": "Complete music production environment with lifetime free future updates included.",
    "features": [
      "Lifetime free updates included",
      "Full audio recording & editing",
      "NewTone & Pitcher vocal tools",
      "Official Image-Line activation"
    ],
    "inStock": true,
    "stockCount": 350,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-052",
    "title": "Logic Pro Lifetime License for macOS",
    "category": "software",
    "priceUsd": 149,
    "image": "/assets/products/software-license-box.png",
    "description": "Apple professional recording studio DAW with Spatial Audio authoring and Dolby Atmos.",
    "features": [
      "Over 5,900 instruments & effects",
      "Alchemy multi-sample synthesizer",
      "Live Loops non-linear composition",
      "Official Mac App Store redemption"
    ],
    "inStock": true,
    "stockCount": 355,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-053",
    "title": "Sublime Text 4 Perpetual Commercial License",
    "category": "software",
    "priceUsd": 65,
    "image": "/assets/products/software-license-box.png",
    "description": "Sophisticated text editor for code, markup and prose with GPU hardware acceleration.",
    "features": [
      "GPU accelerated rendering",
      "Context-aware autocomplete",
      "Multiple tab selection",
      "Commercial multi-platform seat"
    ],
    "inStock": true,
    "stockCount": 360,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-054",
    "title": "Proxifier 4 Perpetual Corporate License",
    "category": "software",
    "priceUsd": 25,
    "image": "/assets/products/nordvpn-expressvpn-security.png",
    "description": "Advanced proxy client routing network traffic of any program through SOCKS or HTTPS.",
    "features": [
      "Route any app through proxy chains",
      "Flexible rule-based routing",
      "DNS over proxy support",
      "Lifetime commercial key"
    ],
    "inStock": true,
    "stockCount": 365,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-055",
    "title": "CleanMyMac X Lifetime License (2 Macs)",
    "category": "software",
    "priceUsd": 39,
    "image": "/assets/products/software-license-box.png",
    "description": "Premier system optimizer, junk file cleaner and malware remover for Apple macOS.",
    "features": [
      "Speed up macOS performance",
      "Deep uninstaller & updater",
      "Privacy history cleaner",
      "Official MacPaw lifetime license"
    ],
    "inStock": true,
    "stockCount": 370,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-056",
    "title": "BetterTouchTool Lifetime License (2 Devices)",
    "category": "software",
    "priceUsd": 19,
    "image": "/assets/products/software-license-box.png",
    "description": "Custom gesture mapping, window snapping and Touch Bar customization for macOS.",
    "features": [
      "Custom trackpad gestures",
      "Window snapping & tiling",
      "Keyboard shortcut remapping",
      "Lifetime software upgrades"
    ],
    "inStock": true,
    "stockCount": 375,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-057",
    "title": "Alfred 5 Powerpack Single License",
    "category": "software",
    "priceUsd": 29,
    "image": "/assets/products/software-license-box.png",
    "description": "Award-winning macOS productivity booster with custom automated workflows and clipboard history.",
    "features": [
      "Custom workflow automation",
      "Full clipboard history manager",
      "System command integration",
      "Lifetime single user license"
    ],
    "inStock": true,
    "stockCount": 380,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-058",
    "title": "Parallels Desktop 19 Pro 1-Year License",
    "category": "software",
    "priceUsd": 79,
    "image": "/assets/products/software-license-box.png",
    "description": "Run Windows on Mac seamlessly without rebooting, optimized for Apple Silicon M-series.",
    "features": [
      "Coherence mode Windows on Mac",
      "DirectX 11 3D graphics boost",
      "Up to 128GB vRAM allocation",
      "Official Parallels commercial key"
    ],
    "inStock": true,
    "stockCount": 385,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-059",
    "title": "Autodesk AutoCAD 2024 1-Year Commercial Sub",
    "category": "software",
    "priceUsd": 399,
    "image": "/assets/products/software-license-box.png",
    "description": "Premier computer-aided design CAD software for 2D drafting and 3D architectural modeling.",
    "features": [
      "Industry-specific toolsets",
      "Web & mobile drawing access",
      "Parametric 3D solid modeling",
      "Direct Autodesk account provisioning"
    ],
    "inStock": true,
    "stockCount": 390,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-soft-060",
    "title": "SketchUp Pro 2024 1-Year Commercial License",
    "category": "software",
    "priceUsd": 199,
    "image": "/assets/products/software-license-box.png",
    "description": "Intuitive 3D modeling software for architecture, interior design and civil engineering.",
    "features": [
      "LayOut 2D documentation tool",
      "3D Warehouse model library",
      "BIM IFC export support",
      "Official commercial subscription"
    ],
    "inStock": true,
    "stockCount": 395,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Delivery (2-5 mins)"
  },
  {
    "id": "prod-card-001",
    "title": "Nile Platinum Virtual Visa (Reloadable 3DS) \u2014 Standard (Limit $5,000)",
    "category": "cards",
    "priceUsd": 25,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Instant reloadable 3D Secure virtual card for international Web3 & e-commerce payments. Tier level Standard with adjusted monthly limit of $5,000 USD.",
    "features": [
      "Monthly spending ceiling: $5,000",
      "Compatible with Apple Pay & Google Pay",
      "Zero international transaction fees",
      "Instant issuance upon order"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-002",
    "title": "Nile Gold Commercial Mastercard ($25,000 Limit) \u2014 Plus (Limit $10,000)",
    "category": "cards",
    "priceUsd": 52,
    "image": "/assets/products/gold-mastercard-card.png",
    "description": "High-tier reloadable Mastercard with dedicated sub-account for online subscriptions and corporate ads. Tier level Plus with adjusted monthly limit of $10,000 USD.",
    "features": [
      "Monthly spending ceiling: $10,000",
      "Meta & Google Ads approved",
      "Instant freeze/unfreeze controls",
      "Multicurrency balance in USD & EUR"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-003",
    "title": "Nile Black Metal Corporate Executive Card ($100,000 Limit) \u2014 Pro (Limit $15,000)",
    "category": "cards",
    "priceUsd": 203,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Ultra-exclusive 18-gram matte black stainless steel executive card with private banking IBAN. Tier level Pro with adjusted monthly limit of $15,000 USD.",
    "features": [
      "Monthly spending ceiling: $15,000",
      "Dedicated private banking IBAN",
      "Global airport lounge access (Priority Pass)",
      "Laser engraved custom cardholder name"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": true,
    "deliveryEstimate": "2-5 days express courier"
  },
  {
    "id": "prod-card-004",
    "title": "Nile Anonymous Prepaid Visa Card ($500 Balance Included) \u2014 Executive (Limit $20,000)",
    "category": "cards",
    "priceUsd": 555,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Unregistered non-reloadable prepaid virtual Visa pre-funded with $500 balance for confidential checkout. Tier level Executive with adjusted monthly limit of $20,000 USD.",
    "features": [
      "Monthly spending ceiling: $20,000",
      "No name registration required",
      "Accepted at 40M+ merchants worldwide",
      "Instant card details dispatch"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-005",
    "title": "Nile Anonymous Prepaid Visa Card ($1,000 Balance Included) \u2014 Apex (Limit $25,000)",
    "category": "cards",
    "priceUsd": 1088,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Confidential prepaid debit card pre-loaded with $1,000 balance for private high-ticket shopping. Tier level Apex with adjusted monthly limit of $25,000 USD.",
    "features": [
      "Monthly spending ceiling: $25,000",
      "Zero identity linking required",
      "Valid for 24 months globally",
      "Instant credential delivery"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-006",
    "title": "Nile Web3 Crypto Spend Card (Direct Wallet Linked) \u2014 Standard (Limit $30,000)",
    "category": "cards",
    "priceUsd": 55,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Spend USDT, USDC, BTC, ETH directly at point of sale with real-time zero-slippage conversion. Tier level Standard with adjusted monthly limit of $30,000 USD.",
    "features": [
      "Monthly spending ceiling: $30,000",
      "Real-time crypto-to-fiat conversion",
      "Up to 3% crypto cashback in NILE tokens",
      "Virtual card instantly ready in mobile app"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-007",
    "title": "Nile Metal Gold Bullion Card (24K Gold Plated) \u2014 Plus (Limit $35,000)",
    "category": "cards",
    "priceUsd": 161,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Heavy metallic 24K gold plated Mastercard linked to Nile Crypto Bank treasury ledger. Tier level Plus with adjusted monthly limit of $35,000 USD.",
    "features": [
      "Monthly spending ceiling: $35,000",
      "Complimentary insured worldwide courier",
      "Zero foreign exchange surcharge",
      "High ATM cash withdrawal limits"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": true,
    "deliveryEstimate": "2-5 days express courier"
  },
  {
    "id": "prod-card-008",
    "title": "Nile Unlimited Virtual Card Pack (5 Cards) \u2014 Pro (Limit $40,000)",
    "category": "cards",
    "priceUsd": 113,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Package of 5 separate virtual Visa cards with individual card numbers and billing addresses. Tier level Pro with adjusted monthly limit of $40,000 USD.",
    "features": [
      "Monthly spending ceiling: $40,000",
      "Individual spending limits per card",
      "One-click burner card regeneration",
      "Perfect for multi-account media buying"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-009",
    "title": "Nile Media Buyer Pro Card Pack (15 Cards) \u2014 Executive (Limit $45,000)",
    "category": "cards",
    "priceUsd": 265,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Fleet of 15 high-limit commercial cards optimized for TikTok, Facebook, Google and Twitter ads. Tier level Executive with adjusted monthly limit of $45,000 USD.",
    "features": [
      "Monthly spending ceiling: $45,000",
      "High authorization pass rate",
      "Centralized budget allocation panel",
      "Automatic billing statement exports"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-010",
    "title": "Nile Private Banking Debit Card (UK Sort Code & Account) \u2014 Apex (Limit $50,000)",
    "category": "cards",
    "priceUsd": 138,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Personal UK Sort Code and Account Number with Faster Payments and SEPA instant transfer. Tier level Apex with adjusted monthly limit of $50,000 USD.",
    "features": [
      "Monthly spending ceiling: $50,000",
      "Faster Payments 1-minute settlement",
      "SEPA EUR instant transfer support",
      "Physical chip & PIN contactless card"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-011",
    "title": "Nile Swiss Private Banking IBAN Card \u2014 Standard (Limit $5,000)",
    "category": "cards",
    "priceUsd": 200,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Swiss domiciled multicurrency IBAN card with dedicated CH account credentials. Tier level Standard with adjusted monthly limit of $5,000 USD.",
    "features": [
      "Monthly spending ceiling: $5,000",
      "Supports CHF, EUR, USD, GBP",
      "Top-tier Swiss banking compliance",
      "Contactless metal debit card"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-012",
    "title": "Nile Titanium Crypto Reserve Card ($250,000 Limit) \u2014 Plus (Limit $10,000)",
    "category": "cards",
    "priceUsd": 321,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Aerospace grade titanium physical card tailored for high-net-worth liquidity holders. Tier level Plus with adjusted monthly limit of $10,000 USD.",
    "features": [
      "Monthly spending ceiling: $10,000",
      "Handcrafted solid aerospace titanium",
      "24/7 dedicated private wealth concierge",
      "Global medical & travel insurance included"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-013",
    "title": "Nile Platinum Virtual Visa (Reloadable 3DS) \u2014 Pro (Limit $15,000)",
    "category": "cards",
    "priceUsd": 49,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Instant reloadable 3D Secure virtual card for international Web3 & e-commerce payments. Tier level Pro with adjusted monthly limit of $15,000 USD.",
    "features": [
      "Monthly spending ceiling: $15,000",
      "Compatible with Apple Pay & Google Pay",
      "Zero international transaction fees",
      "Instant issuance upon order"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-014",
    "title": "Nile Gold Commercial Mastercard ($25,000 Limit) \u2014 Executive (Limit $20,000)",
    "category": "cards",
    "priceUsd": 76,
    "image": "/assets/products/gold-mastercard-card.png",
    "description": "High-tier reloadable Mastercard with dedicated sub-account for online subscriptions and corporate ads. Tier level Executive with adjusted monthly limit of $20,000 USD.",
    "features": [
      "Monthly spending ceiling: $20,000",
      "Meta & Google Ads approved",
      "Instant freeze/unfreeze controls",
      "Multicurrency balance in USD & EUR"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-015",
    "title": "Nile Black Metal Corporate Executive Card ($100,000 Limit) \u2014 Apex (Limit $25,000)",
    "category": "cards",
    "priceUsd": 227,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Ultra-exclusive 18-gram matte black stainless steel executive card with private banking IBAN. Tier level Apex with adjusted monthly limit of $25,000 USD.",
    "features": [
      "Monthly spending ceiling: $25,000",
      "Dedicated private banking IBAN",
      "Global airport lounge access (Priority Pass)",
      "Laser engraved custom cardholder name"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": true,
    "deliveryEstimate": "2-5 days express courier"
  },
  {
    "id": "prod-card-016",
    "title": "Nile Anonymous Prepaid Visa Card ($500 Balance Included) \u2014 Standard (Limit $30,000)",
    "category": "cards",
    "priceUsd": 579,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Unregistered non-reloadable prepaid virtual Visa pre-funded with $500 balance for confidential checkout. Tier level Standard with adjusted monthly limit of $30,000 USD.",
    "features": [
      "Monthly spending ceiling: $30,000",
      "No name registration required",
      "Accepted at 40M+ merchants worldwide",
      "Instant card details dispatch"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-017",
    "title": "Nile Anonymous Prepaid Visa Card ($1,000 Balance Included) \u2014 Plus (Limit $35,000)",
    "category": "cards",
    "priceUsd": 1112,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Confidential prepaid debit card pre-loaded with $1,000 balance for private high-ticket shopping. Tier level Plus with adjusted monthly limit of $35,000 USD.",
    "features": [
      "Monthly spending ceiling: $35,000",
      "Zero identity linking required",
      "Valid for 24 months globally",
      "Instant credential delivery"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-018",
    "title": "Nile Web3 Crypto Spend Card (Direct Wallet Linked) \u2014 Pro (Limit $40,000)",
    "category": "cards",
    "priceUsd": 79,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Spend USDT, USDC, BTC, ETH directly at point of sale with real-time zero-slippage conversion. Tier level Pro with adjusted monthly limit of $40,000 USD.",
    "features": [
      "Monthly spending ceiling: $40,000",
      "Real-time crypto-to-fiat conversion",
      "Up to 3% crypto cashback in NILE tokens",
      "Virtual card instantly ready in mobile app"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-019",
    "title": "Nile Metal Gold Bullion Card (24K Gold Plated) \u2014 Executive (Limit $45,000)",
    "category": "cards",
    "priceUsd": 185,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Heavy metallic 24K gold plated Mastercard linked to Nile Crypto Bank treasury ledger. Tier level Executive with adjusted monthly limit of $45,000 USD.",
    "features": [
      "Monthly spending ceiling: $45,000",
      "Complimentary insured worldwide courier",
      "Zero foreign exchange surcharge",
      "High ATM cash withdrawal limits"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": true,
    "deliveryEstimate": "2-5 days express courier"
  },
  {
    "id": "prod-card-020",
    "title": "Nile Unlimited Virtual Card Pack (5 Cards) \u2014 Apex (Limit $50,000)",
    "category": "cards",
    "priceUsd": 137,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Package of 5 separate virtual Visa cards with individual card numbers and billing addresses. Tier level Apex with adjusted monthly limit of $50,000 USD.",
    "features": [
      "Monthly spending ceiling: $50,000",
      "Individual spending limits per card",
      "One-click burner card regeneration",
      "Perfect for multi-account media buying"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-021",
    "title": "Nile Media Buyer Pro Card Pack (15 Cards) \u2014 Standard (Limit $5,000)",
    "category": "cards",
    "priceUsd": 289,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Fleet of 15 high-limit commercial cards optimized for TikTok, Facebook, Google and Twitter ads. Tier level Standard with adjusted monthly limit of $5,000 USD.",
    "features": [
      "Monthly spending ceiling: $5,000",
      "High authorization pass rate",
      "Centralized budget allocation panel",
      "Automatic billing statement exports"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-022",
    "title": "Nile Private Banking Debit Card (UK Sort Code & Account) \u2014 Plus (Limit $10,000)",
    "category": "cards",
    "priceUsd": 162,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Personal UK Sort Code and Account Number with Faster Payments and SEPA instant transfer. Tier level Plus with adjusted monthly limit of $10,000 USD.",
    "features": [
      "Monthly spending ceiling: $10,000",
      "Faster Payments 1-minute settlement",
      "SEPA EUR instant transfer support",
      "Physical chip & PIN contactless card"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-023",
    "title": "Nile Swiss Private Banking IBAN Card \u2014 Pro (Limit $15,000)",
    "category": "cards",
    "priceUsd": 224,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Swiss domiciled multicurrency IBAN card with dedicated CH account credentials. Tier level Pro with adjusted monthly limit of $15,000 USD.",
    "features": [
      "Monthly spending ceiling: $15,000",
      "Supports CHF, EUR, USD, GBP",
      "Top-tier Swiss banking compliance",
      "Contactless metal debit card"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-024",
    "title": "Nile Titanium Crypto Reserve Card ($250,000 Limit) \u2014 Executive (Limit $20,000)",
    "category": "cards",
    "priceUsd": 345,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Aerospace grade titanium physical card tailored for high-net-worth liquidity holders. Tier level Executive with adjusted monthly limit of $20,000 USD.",
    "features": [
      "Monthly spending ceiling: $20,000",
      "Handcrafted solid aerospace titanium",
      "24/7 dedicated private wealth concierge",
      "Global medical & travel insurance included"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-025",
    "title": "Nile Platinum Virtual Visa (Reloadable 3DS) \u2014 Apex (Limit $25,000)",
    "category": "cards",
    "priceUsd": 73,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Instant reloadable 3D Secure virtual card for international Web3 & e-commerce payments. Tier level Apex with adjusted monthly limit of $25,000 USD.",
    "features": [
      "Monthly spending ceiling: $25,000",
      "Compatible with Apple Pay & Google Pay",
      "Zero international transaction fees",
      "Instant issuance upon order"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-026",
    "title": "Nile Gold Commercial Mastercard ($25,000 Limit) \u2014 Standard (Limit $30,000)",
    "category": "cards",
    "priceUsd": 100,
    "image": "/assets/products/gold-mastercard-card.png",
    "description": "High-tier reloadable Mastercard with dedicated sub-account for online subscriptions and corporate ads. Tier level Standard with adjusted monthly limit of $30,000 USD.",
    "features": [
      "Monthly spending ceiling: $30,000",
      "Meta & Google Ads approved",
      "Instant freeze/unfreeze controls",
      "Multicurrency balance in USD & EUR"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-027",
    "title": "Nile Black Metal Corporate Executive Card ($100,000 Limit) \u2014 Plus (Limit $35,000)",
    "category": "cards",
    "priceUsd": 251,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Ultra-exclusive 18-gram matte black stainless steel executive card with private banking IBAN. Tier level Plus with adjusted monthly limit of $35,000 USD.",
    "features": [
      "Monthly spending ceiling: $35,000",
      "Dedicated private banking IBAN",
      "Global airport lounge access (Priority Pass)",
      "Laser engraved custom cardholder name"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": true,
    "deliveryEstimate": "2-5 days express courier"
  },
  {
    "id": "prod-card-028",
    "title": "Nile Anonymous Prepaid Visa Card ($500 Balance Included) \u2014 Pro (Limit $40,000)",
    "category": "cards",
    "priceUsd": 603,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Unregistered non-reloadable prepaid virtual Visa pre-funded with $500 balance for confidential checkout. Tier level Pro with adjusted monthly limit of $40,000 USD.",
    "features": [
      "Monthly spending ceiling: $40,000",
      "No name registration required",
      "Accepted at 40M+ merchants worldwide",
      "Instant card details dispatch"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-029",
    "title": "Nile Anonymous Prepaid Visa Card ($1,000 Balance Included) \u2014 Executive (Limit $45,000)",
    "category": "cards",
    "priceUsd": 1136,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Confidential prepaid debit card pre-loaded with $1,000 balance for private high-ticket shopping. Tier level Executive with adjusted monthly limit of $45,000 USD.",
    "features": [
      "Monthly spending ceiling: $45,000",
      "Zero identity linking required",
      "Valid for 24 months globally",
      "Instant credential delivery"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-030",
    "title": "Nile Web3 Crypto Spend Card (Direct Wallet Linked) \u2014 Apex (Limit $50,000)",
    "category": "cards",
    "priceUsd": 103,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Spend USDT, USDC, BTC, ETH directly at point of sale with real-time zero-slippage conversion. Tier level Apex with adjusted monthly limit of $50,000 USD.",
    "features": [
      "Monthly spending ceiling: $50,000",
      "Real-time crypto-to-fiat conversion",
      "Up to 3% crypto cashback in NILE tokens",
      "Virtual card instantly ready in mobile app"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-031",
    "title": "Nile Metal Gold Bullion Card (24K Gold Plated) \u2014 Standard (Limit $5,000)",
    "category": "cards",
    "priceUsd": 209,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Heavy metallic 24K gold plated Mastercard linked to Nile Crypto Bank treasury ledger. Tier level Standard with adjusted monthly limit of $5,000 USD.",
    "features": [
      "Monthly spending ceiling: $5,000",
      "Complimentary insured worldwide courier",
      "Zero foreign exchange surcharge",
      "High ATM cash withdrawal limits"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": true,
    "deliveryEstimate": "2-5 days express courier"
  },
  {
    "id": "prod-card-032",
    "title": "Nile Unlimited Virtual Card Pack (5 Cards) \u2014 Plus (Limit $10,000)",
    "category": "cards",
    "priceUsd": 161,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Package of 5 separate virtual Visa cards with individual card numbers and billing addresses. Tier level Plus with adjusted monthly limit of $10,000 USD.",
    "features": [
      "Monthly spending ceiling: $10,000",
      "Individual spending limits per card",
      "One-click burner card regeneration",
      "Perfect for multi-account media buying"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-033",
    "title": "Nile Media Buyer Pro Card Pack (15 Cards) \u2014 Pro (Limit $15,000)",
    "category": "cards",
    "priceUsd": 313,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Fleet of 15 high-limit commercial cards optimized for TikTok, Facebook, Google and Twitter ads. Tier level Pro with adjusted monthly limit of $15,000 USD.",
    "features": [
      "Monthly spending ceiling: $15,000",
      "High authorization pass rate",
      "Centralized budget allocation panel",
      "Automatic billing statement exports"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-034",
    "title": "Nile Private Banking Debit Card (UK Sort Code & Account) \u2014 Executive (Limit $20,000)",
    "category": "cards",
    "priceUsd": 186,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Personal UK Sort Code and Account Number with Faster Payments and SEPA instant transfer. Tier level Executive with adjusted monthly limit of $20,000 USD.",
    "features": [
      "Monthly spending ceiling: $20,000",
      "Faster Payments 1-minute settlement",
      "SEPA EUR instant transfer support",
      "Physical chip & PIN contactless card"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-035",
    "title": "Nile Swiss Private Banking IBAN Card \u2014 Apex (Limit $25,000)",
    "category": "cards",
    "priceUsd": 248,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Swiss domiciled multicurrency IBAN card with dedicated CH account credentials. Tier level Apex with adjusted monthly limit of $25,000 USD.",
    "features": [
      "Monthly spending ceiling: $25,000",
      "Supports CHF, EUR, USD, GBP",
      "Top-tier Swiss banking compliance",
      "Contactless metal debit card"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-036",
    "title": "Nile Titanium Crypto Reserve Card ($250,000 Limit) \u2014 Standard (Limit $30,000)",
    "category": "cards",
    "priceUsd": 369,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Aerospace grade titanium physical card tailored for high-net-worth liquidity holders. Tier level Standard with adjusted monthly limit of $30,000 USD.",
    "features": [
      "Monthly spending ceiling: $30,000",
      "Handcrafted solid aerospace titanium",
      "24/7 dedicated private wealth concierge",
      "Global medical & travel insurance included"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-037",
    "title": "Nile Platinum Virtual Visa (Reloadable 3DS) \u2014 Plus (Limit $35,000)",
    "category": "cards",
    "priceUsd": 97,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Instant reloadable 3D Secure virtual card for international Web3 & e-commerce payments. Tier level Plus with adjusted monthly limit of $35,000 USD.",
    "features": [
      "Monthly spending ceiling: $35,000",
      "Compatible with Apple Pay & Google Pay",
      "Zero international transaction fees",
      "Instant issuance upon order"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-038",
    "title": "Nile Gold Commercial Mastercard ($25,000 Limit) \u2014 Pro (Limit $40,000)",
    "category": "cards",
    "priceUsd": 124,
    "image": "/assets/products/gold-mastercard-card.png",
    "description": "High-tier reloadable Mastercard with dedicated sub-account for online subscriptions and corporate ads. Tier level Pro with adjusted monthly limit of $40,000 USD.",
    "features": [
      "Monthly spending ceiling: $40,000",
      "Meta & Google Ads approved",
      "Instant freeze/unfreeze controls",
      "Multicurrency balance in USD & EUR"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-039",
    "title": "Nile Black Metal Corporate Executive Card ($100,000 Limit) \u2014 Executive (Limit $45,000)",
    "category": "cards",
    "priceUsd": 275,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Ultra-exclusive 18-gram matte black stainless steel executive card with private banking IBAN. Tier level Executive with adjusted monthly limit of $45,000 USD.",
    "features": [
      "Monthly spending ceiling: $45,000",
      "Dedicated private banking IBAN",
      "Global airport lounge access (Priority Pass)",
      "Laser engraved custom cardholder name"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": true,
    "deliveryEstimate": "2-5 days express courier"
  },
  {
    "id": "prod-card-040",
    "title": "Nile Anonymous Prepaid Visa Card ($500 Balance Included) \u2014 Apex (Limit $50,000)",
    "category": "cards",
    "priceUsd": 627,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Unregistered non-reloadable prepaid virtual Visa pre-funded with $500 balance for confidential checkout. Tier level Apex with adjusted monthly limit of $50,000 USD.",
    "features": [
      "Monthly spending ceiling: $50,000",
      "No name registration required",
      "Accepted at 40M+ merchants worldwide",
      "Instant card details dispatch"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-041",
    "title": "Nile Anonymous Prepaid Visa Card ($1,000 Balance Included) \u2014 Standard (Limit $5,000)",
    "category": "cards",
    "priceUsd": 1160,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Confidential prepaid debit card pre-loaded with $1,000 balance for private high-ticket shopping. Tier level Standard with adjusted monthly limit of $5,000 USD.",
    "features": [
      "Monthly spending ceiling: $5,000",
      "Zero identity linking required",
      "Valid for 24 months globally",
      "Instant credential delivery"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-042",
    "title": "Nile Web3 Crypto Spend Card (Direct Wallet Linked) \u2014 Plus (Limit $10,000)",
    "category": "cards",
    "priceUsd": 127,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Spend USDT, USDC, BTC, ETH directly at point of sale with real-time zero-slippage conversion. Tier level Plus with adjusted monthly limit of $10,000 USD.",
    "features": [
      "Monthly spending ceiling: $10,000",
      "Real-time crypto-to-fiat conversion",
      "Up to 3% crypto cashback in NILE tokens",
      "Virtual card instantly ready in mobile app"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-043",
    "title": "Nile Metal Gold Bullion Card (24K Gold Plated) \u2014 Pro (Limit $15,000)",
    "category": "cards",
    "priceUsd": 233,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Heavy metallic 24K gold plated Mastercard linked to Nile Crypto Bank treasury ledger. Tier level Pro with adjusted monthly limit of $15,000 USD.",
    "features": [
      "Monthly spending ceiling: $15,000",
      "Complimentary insured worldwide courier",
      "Zero foreign exchange surcharge",
      "High ATM cash withdrawal limits"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": true,
    "deliveryEstimate": "2-5 days express courier"
  },
  {
    "id": "prod-card-044",
    "title": "Nile Unlimited Virtual Card Pack (5 Cards) \u2014 Executive (Limit $20,000)",
    "category": "cards",
    "priceUsd": 185,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Package of 5 separate virtual Visa cards with individual card numbers and billing addresses. Tier level Executive with adjusted monthly limit of $20,000 USD.",
    "features": [
      "Monthly spending ceiling: $20,000",
      "Individual spending limits per card",
      "One-click burner card regeneration",
      "Perfect for multi-account media buying"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-045",
    "title": "Nile Media Buyer Pro Card Pack (15 Cards) \u2014 Apex (Limit $25,000)",
    "category": "cards",
    "priceUsd": 337,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Fleet of 15 high-limit commercial cards optimized for TikTok, Facebook, Google and Twitter ads. Tier level Apex with adjusted monthly limit of $25,000 USD.",
    "features": [
      "Monthly spending ceiling: $25,000",
      "High authorization pass rate",
      "Centralized budget allocation panel",
      "Automatic billing statement exports"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-046",
    "title": "Nile Private Banking Debit Card (UK Sort Code & Account) \u2014 Standard (Limit $30,000)",
    "category": "cards",
    "priceUsd": 210,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Personal UK Sort Code and Account Number with Faster Payments and SEPA instant transfer. Tier level Standard with adjusted monthly limit of $30,000 USD.",
    "features": [
      "Monthly spending ceiling: $30,000",
      "Faster Payments 1-minute settlement",
      "SEPA EUR instant transfer support",
      "Physical chip & PIN contactless card"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-047",
    "title": "Nile Swiss Private Banking IBAN Card \u2014 Plus (Limit $35,000)",
    "category": "cards",
    "priceUsd": 272,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Swiss domiciled multicurrency IBAN card with dedicated CH account credentials. Tier level Plus with adjusted monthly limit of $35,000 USD.",
    "features": [
      "Monthly spending ceiling: $35,000",
      "Supports CHF, EUR, USD, GBP",
      "Top-tier Swiss banking compliance",
      "Contactless metal debit card"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-048",
    "title": "Nile Titanium Crypto Reserve Card ($250,000 Limit) \u2014 Pro (Limit $40,000)",
    "category": "cards",
    "priceUsd": 393,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Aerospace grade titanium physical card tailored for high-net-worth liquidity holders. Tier level Pro with adjusted monthly limit of $40,000 USD.",
    "features": [
      "Monthly spending ceiling: $40,000",
      "Handcrafted solid aerospace titanium",
      "24/7 dedicated private wealth concierge",
      "Global medical & travel insurance included"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-049",
    "title": "Nile Platinum Virtual Visa (Reloadable 3DS) \u2014 Executive (Limit $45,000)",
    "category": "cards",
    "priceUsd": 121,
    "image": "/assets/products/virtual-visa-platinum.png",
    "description": "Instant reloadable 3D Secure virtual card for international Web3 & e-commerce payments. Tier level Executive with adjusted monthly limit of $45,000 USD.",
    "features": [
      "Monthly spending ceiling: $45,000",
      "Compatible with Apple Pay & Google Pay",
      "Zero international transaction fees",
      "Instant issuance upon order"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-050",
    "title": "Nile Gold Commercial Mastercard ($25,000 Limit) \u2014 Apex (Limit $50,000)",
    "category": "cards",
    "priceUsd": 148,
    "image": "/assets/products/gold-mastercard-card.png",
    "description": "High-tier reloadable Mastercard with dedicated sub-account for online subscriptions and corporate ads. Tier level Apex with adjusted monthly limit of $50,000 USD.",
    "features": [
      "Monthly spending ceiling: $50,000",
      "Meta & Google Ads approved",
      "Instant freeze/unfreeze controls",
      "Multicurrency balance in USD & EUR"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-051",
    "title": "Nile Black Metal Corporate Executive Card ($100,000 Limit) \u2014 Standard (Limit $5,000)",
    "category": "cards",
    "priceUsd": 299,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Ultra-exclusive 18-gram matte black stainless steel executive card with private banking IBAN. Tier level Standard with adjusted monthly limit of $5,000 USD.",
    "features": [
      "Monthly spending ceiling: $5,000",
      "Dedicated private banking IBAN",
      "Global airport lounge access (Priority Pass)",
      "Laser engraved custom cardholder name"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": true,
    "deliveryEstimate": "2-5 days express courier"
  },
  {
    "id": "prod-card-052",
    "title": "Nile Anonymous Prepaid Visa Card ($500 Balance Included) \u2014 Plus (Limit $10,000)",
    "category": "cards",
    "priceUsd": 651,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Unregistered non-reloadable prepaid virtual Visa pre-funded with $500 balance for confidential checkout. Tier level Plus with adjusted monthly limit of $10,000 USD.",
    "features": [
      "Monthly spending ceiling: $10,000",
      "No name registration required",
      "Accepted at 40M+ merchants worldwide",
      "Instant card details dispatch"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-053",
    "title": "Nile Anonymous Prepaid Visa Card ($1,000 Balance Included) \u2014 Pro (Limit $15,000)",
    "category": "cards",
    "priceUsd": 1184,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Confidential prepaid debit card pre-loaded with $1,000 balance for private high-ticket shopping. Tier level Pro with adjusted monthly limit of $15,000 USD.",
    "features": [
      "Monthly spending ceiling: $15,000",
      "Zero identity linking required",
      "Valid for 24 months globally",
      "Instant credential delivery"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-054",
    "title": "Nile Web3 Crypto Spend Card (Direct Wallet Linked) \u2014 Executive (Limit $20,000)",
    "category": "cards",
    "priceUsd": 151,
    "image": "/assets/products/crypto-spend-debit-card.png",
    "description": "Spend USDT, USDC, BTC, ETH directly at point of sale with real-time zero-slippage conversion. Tier level Executive with adjusted monthly limit of $20,000 USD.",
    "features": [
      "Monthly spending ceiling: $20,000",
      "Real-time crypto-to-fiat conversion",
      "Up to 3% crypto cashback in NILE tokens",
      "Virtual card instantly ready in mobile app"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Issuance"
  },
  {
    "id": "prod-card-055",
    "title": "Nile Metal Gold Bullion Card (24K Gold Plated) \u2014 Apex (Limit $25,000)",
    "category": "cards",
    "priceUsd": 257,
    "image": "/assets/products/metal-black-corporate-card.png",
    "description": "Heavy metallic 24K gold plated Mastercard linked to Nile Crypto Bank treasury ledger. Tier level Apex with adjusted monthly limit of $25,000 USD.",
    "features": [
      "Monthly spending ceiling: $25,000",
      "Complimentary insured worldwide courier",
      "Zero foreign exchange surcharge",
      "High ATM cash withdrawal limits"
    ],
    "inStock": true,
    "stockCount": 50,
    "isPhysical": true,
    "deliveryEstimate": "2-5 days express courier"
  },
  {
    "id": "prod-col-001",
    "title": "Authentic US $1,000,000 Banknote & 6 Gold Bullion Bars \u2014 Series #01",
    "category": "collectibles",
    "priceUsd": 500000,
    "image": "/assets/products/million-dollar-banknote-gold.png",
    "description": "Fully verifiable genuine museum-grade US One-Million-Dollar collector banknote accompanied by six verified gold bullion bars. Serialized collector batch specimen #01 with registered certificate.",
    "features": [
      "Authentic certified banknote with registered serial number",
      "Accompanying 6 bullion bars in tamper-evident security cases",
      "Full legal provenance documentation & certificates",
      "Complimentary insured courier delivery to USA, Canada, UK, UAE & Schengen"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-002",
    "title": "Physical Casascius Bitcoin (0.25 BTC Balance) \u2014 Series #02",
    "category": "collectibles",
    "priceUsd": 20010,
    "image": "/assets/products/casascius-bitcoin-collectible.png",
    "description": "Original unpeeled 2013 Casascius brass physical Bitcoin containing funded 0.25 BTC on-chain balance. Serialized collector batch specimen #02 with registered certificate.",
    "features": [
      "Authentic 2013 Casascius unpeeled collectible",
      "Holographic tamper-evident private key seal",
      "Direct verifiable 0.25 BTC on Bitcoin blockchain",
      "Delivered in museum acrylic display slab"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-003",
    "title": "Physical Casascius Bitcoin (0.50 BTC Balance) \u2014 Series #03",
    "category": "collectibles",
    "priceUsd": 39020,
    "image": "/assets/products/casascius-bitcoin-collectible.png",
    "description": "Unpeeled vintage physical Casascius Bitcoin with 0.50 BTC verified unspent transaction output. Serialized collector batch specimen #03 with registered certificate.",
    "features": [
      "Rare 2012 series physical Bitcoin coin",
      "Verified unspent on-chain UTXO balance",
      "Intact holographic honeycomb seal",
      "Insured armored transport delivery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-004",
    "title": "Physical Casascius Bitcoin (1.00 BTC Full Coin) \u2014 Series #04",
    "category": "collectibles",
    "priceUsd": 78030,
    "image": "/assets/products/casascius-bitcoin-collectible.png",
    "description": "The holy grail of crypto collectibles: unpeeled 1 BTC Casascius original brass coin. Serialized collector batch specimen #04 with registered certificate.",
    "features": [
      "Iconic 1.0 BTC on-chain funded balance",
      "Untouched original private key under hologram",
      "Independent provenance certificate",
      "White-glove armored courier included"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-005",
    "title": "PAMP Suisse 100g 999.9 Fine Gold Bullion Bar \u2014 Series #05",
    "category": "collectibles",
    "priceUsd": 8940,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Swiss minted Lady Fortuna 100-gram 24K pure investment gold bar with individual assay card. Serialized collector batch specimen #05 with registered certificate.",
    "features": [
      "100 grams 999.9 fine 24-carat gold",
      "Official PAMP Suisse CertiPAMP packaging",
      "Individual serial number & QR verification",
      "LBMA certified refinery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-006",
    "title": "PAMP Suisse 50g 999.9 Fine Gold Ingot \u2014 Series #06",
    "category": "collectibles",
    "priceUsd": 4550,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Authentic 50-gram Swiss fine gold bar minted with classical Lady Fortuna cornucopia emblem. Serialized collector batch specimen #06 with registered certificate.",
    "features": [
      "50 grams pure 24K investment gold",
      "Sealed assay certificate card",
      "Recognized worldwide by all bullion banks",
      "Insured international delivery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-007",
    "title": "PAMP Suisse 1kg (1,000g) Investment Gold Bullion Bar \u2014 Series #07",
    "category": "collectibles",
    "priceUsd": 87060,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Institutional 1-Kilogram cast gold bar certified by Swiss accredited refinery. Serialized collector batch specimen #07 with registered certificate.",
    "features": [
      "1,000 grams 999.9 pure gold",
      "Official assay certificate included",
      "Global bullion exchange liquidity",
      "Insured security transport"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-008",
    "title": "Credit Suisse 1-Ounce (31.1g) 999.9 Gold Bar \u2014 Series #08",
    "category": "collectibles",
    "priceUsd": 2850,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Classic Credit Suisse 1 troy ounce fine gold bullion bar in original tamper-proof blister pack. Serialized collector batch specimen #08 with registered certificate.",
    "features": [
      "1 Troy Ounce 999.9 fine gold",
      "Original Credit Suisse assayer stamp",
      "High liquidity worldwide",
      "Complimentary insured delivery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-009",
    "title": "Valcambi Suisse 50g Gold CombiBar (50 x 1g) \u2014 Series #09",
    "category": "collectibles",
    "priceUsd": 4780,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Innovative Swiss CombiBar that can be broken into 50 individual 1-gram 24K gold pieces. Serialized collector batch specimen #09 with registered certificate.",
    "features": [
      "50 divisible 1-gram gold bars",
      "Each 1g piece stamped 999.9 pure",
      "Ultimate barter liquidity utility",
      "Valcambi serial assay packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-010",
    "title": "1 Kilogram (1,000g) 999 Fine Silver Investment Ingot \u2014 Series #10",
    "category": "collectibles",
    "priceUsd": 1240,
    "image": "/assets/products/silver-ingot-bar.png",
    "description": "LBMA accredited 1kg pure fine silver bullion bar with laser etched serial number. Serialized collector batch specimen #10 with registered certificate.",
    "features": [
      "1,000 grams pure 999 fine silver",
      "LBMA accredited refiner hallmark",
      "Low premium physical silver asset",
      "Insured tracked shipping worldwide"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-011",
    "title": "100 Ounce (3,110g) Fine Silver Bullion Bar \u2014 Series #11",
    "category": "collectibles",
    "priceUsd": 3550,
    "image": "/assets/products/silver-ingot-bar.png",
    "description": "Heavy industrial investment grade 100-ounce poured silver ingot. Serialized collector batch specimen #11 with registered certificate.",
    "features": [
      "100 Troy Ounces fine silver",
      "Poured bullion rustic finish",
      "Certified refinery assay stamp",
      "Secure armored transport"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-012",
    "title": "Ledger Stax Flagship Touchscreen Hardware Wallet \u2014 Series #12",
    "category": "collectibles",
    "priceUsd": 509,
    "image": "/assets/products/ledger-cold-storage-wallet.png",
    "description": "Next-gen curved E-Ink touchscreen crypto hardware wallet with Qi wireless charging. Serialized collector batch specimen #12 with registered certificate.",
    "features": [
      "Curved E-Ink clear-sign screen",
      "Secure Element chip (CC EAL6+)",
      "Bluetooth & Qi wireless charging",
      "Factory sealed authentic packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-013",
    "title": "Ledger Nano X Bluetooth Cold Storage Wallet \u2014 Series #13",
    "category": "collectibles",
    "priceUsd": 269,
    "image": "/assets/products/ledger-cold-storage-wallet.png",
    "description": "Mobile-ready Bluetooth hardware wallet supporting over 5,500 crypto assets and NFTs. Serialized collector batch specimen #13 with registered certificate.",
    "features": [
      "Bluetooth connection to iOS & Android",
      "Certified Secure Element (CC EAL5+)",
      "Manage up to 100 apps simultaneously",
      "Factory direct security seal"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-014",
    "title": "Trezor Safe 3 Hardware Wallet (Secure Element) \u2014 Series #14",
    "category": "collectibles",
    "priceUsd": 259,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "Next-generation open source hardware wallet with dedicated Secure Element and OLED screen. Serialized collector batch specimen #14 with registered certificate.",
    "features": [
      "Dedicated Secure Element chip",
      "Open source audited code",
      "Bitcoin-only firmware available",
      "Tamper-evident hologram packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-015",
    "title": "Trezor Model T Touchscreen Flagship \u2014 Series #15",
    "category": "collectibles",
    "priceUsd": 359,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "Color touchscreen crypto vault with Shamir Backup and on-device PIN/Passphrase entry. Serialized collector batch specimen #15 with registered certificate.",
    "features": [
      "Vibrant color LCD touchscreen",
      "Advanced Shamir Backup support",
      "FIDO2 / U2F hardware authenticator",
      "SD card slot for encrypted storage"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-016",
    "title": "Coldcard Mk4 Ultra-Secure Air-Gapped Bitcoin Vault \u2014 Series #16",
    "category": "collectibles",
    "priceUsd": 319,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "The security gold standard for Bitcoin cold storage with air-gap MicroSD and dual secure elements. Serialized collector batch specimen #16 with registered certificate.",
    "features": [
      "True air-gapped signing via MicroSD",
      "Dual Secure Elements from two vendors",
      "Duress PIN & brick-me self-destruct PIN",
      "Ultra-rugged transparent casing"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-017",
    "title": "Cryptosteel Capsule Indestructible Seed Backup \u2014 Series #17",
    "category": "collectibles",
    "priceUsd": 259,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "Solid stainless steel cylindrical capsule designed to survive fire up to 1400\u00b0C and floods. Serialized collector batch specimen #17 with registered certificate.",
    "features": [
      "Solid AISI 303 stainless steel",
      "Fireproof up to 1,400\u00b0C (2,500\u00b0F)",
      "Waterproof, rustproof, crushproof",
      "Compatible with all BIP39 recovery seeds"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-018",
    "title": "Titanium Seed Backup Plate (Laser Engraved) \u2014 Series #18",
    "category": "collectibles",
    "priceUsd": 219,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "Heavy aerospace titanium plate and tungsten carbide punch for permanent recovery seed backup. Serialized collector batch specimen #18 with registered certificate.",
    "features": [
      "Aerospace grade Grade 5 Titanium",
      "Melting point exceeds 1,668\u00b0C",
      "Acid and corrosion resistant",
      "Includes automatic center punch tool"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-019",
    "title": "Authentic US $1,000,000 Banknote & 6 Gold Bullion Bars \u2014 Series #19",
    "category": "collectibles",
    "priceUsd": 500180,
    "image": "/assets/products/million-dollar-banknote-gold.png",
    "description": "Fully verifiable genuine museum-grade US One-Million-Dollar collector banknote accompanied by six verified gold bullion bars. Serialized collector batch specimen #19 with registered certificate.",
    "features": [
      "Authentic certified banknote with registered serial number",
      "Accompanying 6 bullion bars in tamper-evident security cases",
      "Full legal provenance documentation & certificates",
      "Complimentary insured courier delivery to USA, Canada, UK, UAE & Schengen"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-020",
    "title": "Physical Casascius Bitcoin (0.25 BTC Balance) \u2014 Series #20",
    "category": "collectibles",
    "priceUsd": 20190,
    "image": "/assets/products/casascius-bitcoin-collectible.png",
    "description": "Original unpeeled 2013 Casascius brass physical Bitcoin containing funded 0.25 BTC on-chain balance. Serialized collector batch specimen #20 with registered certificate.",
    "features": [
      "Authentic 2013 Casascius unpeeled collectible",
      "Holographic tamper-evident private key seal",
      "Direct verifiable 0.25 BTC on Bitcoin blockchain",
      "Delivered in museum acrylic display slab"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-021",
    "title": "Physical Casascius Bitcoin (0.50 BTC Balance) \u2014 Series #21",
    "category": "collectibles",
    "priceUsd": 39200,
    "image": "/assets/products/casascius-bitcoin-collectible.png",
    "description": "Unpeeled vintage physical Casascius Bitcoin with 0.50 BTC verified unspent transaction output. Serialized collector batch specimen #21 with registered certificate.",
    "features": [
      "Rare 2012 series physical Bitcoin coin",
      "Verified unspent on-chain UTXO balance",
      "Intact holographic honeycomb seal",
      "Insured armored transport delivery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-022",
    "title": "Physical Casascius Bitcoin (1.00 BTC Full Coin) \u2014 Series #22",
    "category": "collectibles",
    "priceUsd": 78210,
    "image": "/assets/products/casascius-bitcoin-collectible.png",
    "description": "The holy grail of crypto collectibles: unpeeled 1 BTC Casascius original brass coin. Serialized collector batch specimen #22 with registered certificate.",
    "features": [
      "Iconic 1.0 BTC on-chain funded balance",
      "Untouched original private key under hologram",
      "Independent provenance certificate",
      "White-glove armored courier included"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-023",
    "title": "PAMP Suisse 100g 999.9 Fine Gold Bullion Bar \u2014 Series #23",
    "category": "collectibles",
    "priceUsd": 9120,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Swiss minted Lady Fortuna 100-gram 24K pure investment gold bar with individual assay card. Serialized collector batch specimen #23 with registered certificate.",
    "features": [
      "100 grams 999.9 fine 24-carat gold",
      "Official PAMP Suisse CertiPAMP packaging",
      "Individual serial number & QR verification",
      "LBMA certified refinery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-024",
    "title": "PAMP Suisse 50g 999.9 Fine Gold Ingot \u2014 Series #24",
    "category": "collectibles",
    "priceUsd": 4730,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Authentic 50-gram Swiss fine gold bar minted with classical Lady Fortuna cornucopia emblem. Serialized collector batch specimen #24 with registered certificate.",
    "features": [
      "50 grams pure 24K investment gold",
      "Sealed assay certificate card",
      "Recognized worldwide by all bullion banks",
      "Insured international delivery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-025",
    "title": "PAMP Suisse 1kg (1,000g) Investment Gold Bullion Bar \u2014 Series #25",
    "category": "collectibles",
    "priceUsd": 87240,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Institutional 1-Kilogram cast gold bar certified by Swiss accredited refinery. Serialized collector batch specimen #25 with registered certificate.",
    "features": [
      "1,000 grams 999.9 pure gold",
      "Official assay certificate included",
      "Global bullion exchange liquidity",
      "Insured security transport"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-026",
    "title": "Credit Suisse 1-Ounce (31.1g) 999.9 Gold Bar \u2014 Series #26",
    "category": "collectibles",
    "priceUsd": 3030,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Classic Credit Suisse 1 troy ounce fine gold bullion bar in original tamper-proof blister pack. Serialized collector batch specimen #26 with registered certificate.",
    "features": [
      "1 Troy Ounce 999.9 fine gold",
      "Original Credit Suisse assayer stamp",
      "High liquidity worldwide",
      "Complimentary insured delivery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-027",
    "title": "Valcambi Suisse 50g Gold CombiBar (50 x 1g) \u2014 Series #27",
    "category": "collectibles",
    "priceUsd": 4960,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Innovative Swiss CombiBar that can be broken into 50 individual 1-gram 24K gold pieces. Serialized collector batch specimen #27 with registered certificate.",
    "features": [
      "50 divisible 1-gram gold bars",
      "Each 1g piece stamped 999.9 pure",
      "Ultimate barter liquidity utility",
      "Valcambi serial assay packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-028",
    "title": "1 Kilogram (1,000g) 999 Fine Silver Investment Ingot \u2014 Series #28",
    "category": "collectibles",
    "priceUsd": 1420,
    "image": "/assets/products/silver-ingot-bar.png",
    "description": "LBMA accredited 1kg pure fine silver bullion bar with laser etched serial number. Serialized collector batch specimen #28 with registered certificate.",
    "features": [
      "1,000 grams pure 999 fine silver",
      "LBMA accredited refiner hallmark",
      "Low premium physical silver asset",
      "Insured tracked shipping worldwide"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-029",
    "title": "100 Ounce (3,110g) Fine Silver Bullion Bar \u2014 Series #29",
    "category": "collectibles",
    "priceUsd": 3730,
    "image": "/assets/products/silver-ingot-bar.png",
    "description": "Heavy industrial investment grade 100-ounce poured silver ingot. Serialized collector batch specimen #29 with registered certificate.",
    "features": [
      "100 Troy Ounces fine silver",
      "Poured bullion rustic finish",
      "Certified refinery assay stamp",
      "Secure armored transport"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-030",
    "title": "Ledger Stax Flagship Touchscreen Hardware Wallet \u2014 Series #30",
    "category": "collectibles",
    "priceUsd": 689,
    "image": "/assets/products/ledger-cold-storage-wallet.png",
    "description": "Next-gen curved E-Ink touchscreen crypto hardware wallet with Qi wireless charging. Serialized collector batch specimen #30 with registered certificate.",
    "features": [
      "Curved E-Ink clear-sign screen",
      "Secure Element chip (CC EAL6+)",
      "Bluetooth & Qi wireless charging",
      "Factory sealed authentic packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-031",
    "title": "Ledger Nano X Bluetooth Cold Storage Wallet \u2014 Series #31",
    "category": "collectibles",
    "priceUsd": 449,
    "image": "/assets/products/ledger-cold-storage-wallet.png",
    "description": "Mobile-ready Bluetooth hardware wallet supporting over 5,500 crypto assets and NFTs. Serialized collector batch specimen #31 with registered certificate.",
    "features": [
      "Bluetooth connection to iOS & Android",
      "Certified Secure Element (CC EAL5+)",
      "Manage up to 100 apps simultaneously",
      "Factory direct security seal"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-032",
    "title": "Trezor Safe 3 Hardware Wallet (Secure Element) \u2014 Series #32",
    "category": "collectibles",
    "priceUsd": 439,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "Next-generation open source hardware wallet with dedicated Secure Element and OLED screen. Serialized collector batch specimen #32 with registered certificate.",
    "features": [
      "Dedicated Secure Element chip",
      "Open source audited code",
      "Bitcoin-only firmware available",
      "Tamper-evident hologram packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-033",
    "title": "Trezor Model T Touchscreen Flagship \u2014 Series #33",
    "category": "collectibles",
    "priceUsd": 539,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "Color touchscreen crypto vault with Shamir Backup and on-device PIN/Passphrase entry. Serialized collector batch specimen #33 with registered certificate.",
    "features": [
      "Vibrant color LCD touchscreen",
      "Advanced Shamir Backup support",
      "FIDO2 / U2F hardware authenticator",
      "SD card slot for encrypted storage"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-034",
    "title": "Coldcard Mk4 Ultra-Secure Air-Gapped Bitcoin Vault \u2014 Series #34",
    "category": "collectibles",
    "priceUsd": 499,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "The security gold standard for Bitcoin cold storage with air-gap MicroSD and dual secure elements. Serialized collector batch specimen #34 with registered certificate.",
    "features": [
      "True air-gapped signing via MicroSD",
      "Dual Secure Elements from two vendors",
      "Duress PIN & brick-me self-destruct PIN",
      "Ultra-rugged transparent casing"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-035",
    "title": "Cryptosteel Capsule Indestructible Seed Backup \u2014 Series #35",
    "category": "collectibles",
    "priceUsd": 439,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "Solid stainless steel cylindrical capsule designed to survive fire up to 1400\u00b0C and floods. Serialized collector batch specimen #35 with registered certificate.",
    "features": [
      "Solid AISI 303 stainless steel",
      "Fireproof up to 1,400\u00b0C (2,500\u00b0F)",
      "Waterproof, rustproof, crushproof",
      "Compatible with all BIP39 recovery seeds"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-036",
    "title": "Titanium Seed Backup Plate (Laser Engraved) \u2014 Series #36",
    "category": "collectibles",
    "priceUsd": 399,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "Heavy aerospace titanium plate and tungsten carbide punch for permanent recovery seed backup. Serialized collector batch specimen #36 with registered certificate.",
    "features": [
      "Aerospace grade Grade 5 Titanium",
      "Melting point exceeds 1,668\u00b0C",
      "Acid and corrosion resistant",
      "Includes automatic center punch tool"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-037",
    "title": "Authentic US $1,000,000 Banknote & 6 Gold Bullion Bars \u2014 Series #37",
    "category": "collectibles",
    "priceUsd": 500360,
    "image": "/assets/products/million-dollar-banknote-gold.png",
    "description": "Fully verifiable genuine museum-grade US One-Million-Dollar collector banknote accompanied by six verified gold bullion bars. Serialized collector batch specimen #37 with registered certificate.",
    "features": [
      "Authentic certified banknote with registered serial number",
      "Accompanying 6 bullion bars in tamper-evident security cases",
      "Full legal provenance documentation & certificates",
      "Complimentary insured courier delivery to USA, Canada, UK, UAE & Schengen"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-038",
    "title": "Physical Casascius Bitcoin (0.25 BTC Balance) \u2014 Series #38",
    "category": "collectibles",
    "priceUsd": 20370,
    "image": "/assets/products/casascius-bitcoin-collectible.png",
    "description": "Original unpeeled 2013 Casascius brass physical Bitcoin containing funded 0.25 BTC on-chain balance. Serialized collector batch specimen #38 with registered certificate.",
    "features": [
      "Authentic 2013 Casascius unpeeled collectible",
      "Holographic tamper-evident private key seal",
      "Direct verifiable 0.25 BTC on Bitcoin blockchain",
      "Delivered in museum acrylic display slab"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-039",
    "title": "Physical Casascius Bitcoin (0.50 BTC Balance) \u2014 Series #39",
    "category": "collectibles",
    "priceUsd": 39380,
    "image": "/assets/products/casascius-bitcoin-collectible.png",
    "description": "Unpeeled vintage physical Casascius Bitcoin with 0.50 BTC verified unspent transaction output. Serialized collector batch specimen #39 with registered certificate.",
    "features": [
      "Rare 2012 series physical Bitcoin coin",
      "Verified unspent on-chain UTXO balance",
      "Intact holographic honeycomb seal",
      "Insured armored transport delivery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-040",
    "title": "Physical Casascius Bitcoin (1.00 BTC Full Coin) \u2014 Series #40",
    "category": "collectibles",
    "priceUsd": 78390,
    "image": "/assets/products/casascius-bitcoin-collectible.png",
    "description": "The holy grail of crypto collectibles: unpeeled 1 BTC Casascius original brass coin. Serialized collector batch specimen #40 with registered certificate.",
    "features": [
      "Iconic 1.0 BTC on-chain funded balance",
      "Untouched original private key under hologram",
      "Independent provenance certificate",
      "White-glove armored courier included"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-041",
    "title": "PAMP Suisse 100g 999.9 Fine Gold Bullion Bar \u2014 Series #41",
    "category": "collectibles",
    "priceUsd": 9300,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Swiss minted Lady Fortuna 100-gram 24K pure investment gold bar with individual assay card. Serialized collector batch specimen #41 with registered certificate.",
    "features": [
      "100 grams 999.9 fine 24-carat gold",
      "Official PAMP Suisse CertiPAMP packaging",
      "Individual serial number & QR verification",
      "LBMA certified refinery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-042",
    "title": "PAMP Suisse 50g 999.9 Fine Gold Ingot \u2014 Series #42",
    "category": "collectibles",
    "priceUsd": 4910,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Authentic 50-gram Swiss fine gold bar minted with classical Lady Fortuna cornucopia emblem. Serialized collector batch specimen #42 with registered certificate.",
    "features": [
      "50 grams pure 24K investment gold",
      "Sealed assay certificate card",
      "Recognized worldwide by all bullion banks",
      "Insured international delivery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-043",
    "title": "PAMP Suisse 1kg (1,000g) Investment Gold Bullion Bar \u2014 Series #43",
    "category": "collectibles",
    "priceUsd": 87420,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Institutional 1-Kilogram cast gold bar certified by Swiss accredited refinery. Serialized collector batch specimen #43 with registered certificate.",
    "features": [
      "1,000 grams 999.9 pure gold",
      "Official assay certificate included",
      "Global bullion exchange liquidity",
      "Insured security transport"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-044",
    "title": "Credit Suisse 1-Ounce (31.1g) 999.9 Gold Bar \u2014 Series #44",
    "category": "collectibles",
    "priceUsd": 3210,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Classic Credit Suisse 1 troy ounce fine gold bullion bar in original tamper-proof blister pack. Serialized collector batch specimen #44 with registered certificate.",
    "features": [
      "1 Troy Ounce 999.9 fine gold",
      "Original Credit Suisse assayer stamp",
      "High liquidity worldwide",
      "Complimentary insured delivery"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-045",
    "title": "Valcambi Suisse 50g Gold CombiBar (50 x 1g) \u2014 Series #45",
    "category": "collectibles",
    "priceUsd": 5140,
    "image": "/assets/products/pamp-suisse-gold-bullion.png",
    "description": "Innovative Swiss CombiBar that can be broken into 50 individual 1-gram 24K gold pieces. Serialized collector batch specimen #45 with registered certificate.",
    "features": [
      "50 divisible 1-gram gold bars",
      "Each 1g piece stamped 999.9 pure",
      "Ultimate barter liquidity utility",
      "Valcambi serial assay packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-046",
    "title": "1 Kilogram (1,000g) 999 Fine Silver Investment Ingot \u2014 Series #46",
    "category": "collectibles",
    "priceUsd": 1600,
    "image": "/assets/products/silver-ingot-bar.png",
    "description": "LBMA accredited 1kg pure fine silver bullion bar with laser etched serial number. Serialized collector batch specimen #46 with registered certificate.",
    "features": [
      "1,000 grams pure 999 fine silver",
      "LBMA accredited refiner hallmark",
      "Low premium physical silver asset",
      "Insured tracked shipping worldwide"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-047",
    "title": "100 Ounce (3,110g) Fine Silver Bullion Bar \u2014 Series #47",
    "category": "collectibles",
    "priceUsd": 3910,
    "image": "/assets/products/silver-ingot-bar.png",
    "description": "Heavy industrial investment grade 100-ounce poured silver ingot. Serialized collector batch specimen #47 with registered certificate.",
    "features": [
      "100 Troy Ounces fine silver",
      "Poured bullion rustic finish",
      "Certified refinery assay stamp",
      "Secure armored transport"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-048",
    "title": "Ledger Stax Flagship Touchscreen Hardware Wallet \u2014 Series #48",
    "category": "collectibles",
    "priceUsd": 869,
    "image": "/assets/products/ledger-cold-storage-wallet.png",
    "description": "Next-gen curved E-Ink touchscreen crypto hardware wallet with Qi wireless charging. Serialized collector batch specimen #48 with registered certificate.",
    "features": [
      "Curved E-Ink clear-sign screen",
      "Secure Element chip (CC EAL6+)",
      "Bluetooth & Qi wireless charging",
      "Factory sealed authentic packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-049",
    "title": "Ledger Nano X Bluetooth Cold Storage Wallet \u2014 Series #49",
    "category": "collectibles",
    "priceUsd": 629,
    "image": "/assets/products/ledger-cold-storage-wallet.png",
    "description": "Mobile-ready Bluetooth hardware wallet supporting over 5,500 crypto assets and NFTs. Serialized collector batch specimen #49 with registered certificate.",
    "features": [
      "Bluetooth connection to iOS & Android",
      "Certified Secure Element (CC EAL5+)",
      "Manage up to 100 apps simultaneously",
      "Factory direct security seal"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-col-050",
    "title": "Trezor Safe 3 Hardware Wallet (Secure Element) \u2014 Series #50",
    "category": "collectibles",
    "priceUsd": 619,
    "image": "/assets/products/trezor-titanium-seed-vault.png",
    "description": "Next-generation open source hardware wallet with dedicated Secure Element and OLED screen. Serialized collector batch specimen #50 with registered certificate.",
    "features": [
      "Dedicated Secure Element chip",
      "Open source audited code",
      "Bitcoin-only firmware available",
      "Tamper-evident hologram packaging"
    ],
    "inStock": true,
    "stockCount": 10,
    "isPhysical": true,
    "deliveryEstimate": "3-7 days insured priority courier"
  },
  {
    "id": "prod-esim-001",
    "title": "Europe Schengen 33-Country 5GB (30 Days) \u2014 Plan #01",
    "category": "esim",
    "priceUsd": 12,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "High-speed 5G/LTE roaming data across all 33 European nations. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Coverage across 33 European countries",
      "5GB high-speed 5G data",
      "30-day validity from activation",
      "Instant QR code activation"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-002",
    "title": "Europe Schengen 33-Country 10GB (30 Days) \u2014 Plan #02",
    "category": "esim",
    "priceUsd": 19,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Generous 10GB 5G data plan for seamless travel across UK, France, Germany, Italy, Spain. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "10GB 5G fast roaming",
      "Tethering / Mobile hotspot allowed",
      "Auto-connects to best local carriers",
      "No KYC or passport needed"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-003",
    "title": "Europe Schengen 33-Country 20GB (30 Days) \u2014 Plan #03",
    "category": "esim",
    "priceUsd": 30,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Heavy usage 20GB high-speed roaming plan across all EU member states. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB high-speed 5G data",
      "Zero roaming surcharges",
      "Instant QR code delivery via email & app",
      "Valid for 30 calendar days"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-004",
    "title": "Europe Schengen 33-Country Unlimited Data (15 Days) \u2014 Plan #04",
    "category": "esim",
    "priceUsd": 38,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Unlimited 5G data across Europe for worry-free streaming, navigation and remote work. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Unlimited high-speed 5G/4G",
      "Hotspot tethering enabled",
      "Instant digital QR activation",
      "24/7 technical carrier support"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-005",
    "title": "Europe Schengen 33-Country Unlimited Data (30 Days) \u2014 Plan #05",
    "category": "esim",
    "priceUsd": 59,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Premium 30-day uncapped 5G data bundle for extensive European travel. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Full 30 days unlimited data",
      "Ultra-fast low-latency local routing",
      "Works on iPhone, iPad, Galaxy, Pixel",
      "No physical SIM card swap"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-006",
    "title": "USA & Canada 10GB 5G High-Speed (30 Days) \u2014 Plan #06",
    "category": "esim",
    "priceUsd": 22,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Nationwide 5G access on AT&T, T-Mobile and Rogers with full cross-border roaming. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers USA, Alaska, Hawaii & Canada",
      "10GB unthrottled 5G data",
      "Hotspot tethering supported",
      "Instant QR installation"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-007",
    "title": "USA & Canada 20GB 5G High-Speed (30 Days) \u2014 Plan #07",
    "category": "esim",
    "priceUsd": 33,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Large 20GB high-speed bundle for cross-continental road trips and business. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB premium 5G carrier data",
      "Seamless border handover",
      "Valid for 30 days",
      "Instant QR code delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-008",
    "title": "USA & Canada Unlimited 5G Data (30 Days) \u2014 Plan #08",
    "category": "esim",
    "priceUsd": 64,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Unlimited 5G data across North America on premier tier-1 network infrastructure. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Truly unlimited 5G connectivity",
      "High-speed personal hotspot",
      "Direct eSIM profile download",
      "Instant email delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-009",
    "title": "United Arab Emirates (Dubai & Abu Dhabi) 10GB \u2014 Plan #09",
    "category": "esim",
    "priceUsd": 28,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "High-speed 5G roaming on Du and Etisalat networks across the UAE. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "10GB 5G data in UAE",
      "Instant activation upon arrival",
      "Fast WhatsApp & Telegram voice routing",
      "Valid for 30 days"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-010",
    "title": "United Arab Emirates (Dubai & Abu Dhabi) 20GB \u2014 Plan #10",
    "category": "esim",
    "priceUsd": 43,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Heavy data bundle for Dubai business travelers and digital finance summits. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB 5G ultra-fast data",
      "Premium Du/Etisalat coverage",
      "Personal hotspot enabled",
      "Instant activation QR"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-011",
    "title": "Japan & South Korea 15GB 5G Roaming (30 Days) \u2014 Plan #11",
    "category": "esim",
    "priceUsd": 24,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Ultra-low latency data on NTT Docomo, SoftBank and SK Telecom. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers Tokyo, Seoul and all prefectures",
      "15GB high-speed data",
      "Local carrier breakout routing",
      "Instant digital QR code"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-012",
    "title": "Asia Pacific 14-Country 20GB (30 Days) \u2014 Plan #12",
    "category": "esim",
    "priceUsd": 35,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Regional pass for Japan, Korea, Singapore, Thailand, Vietnam, Malaysia, Indonesia, Australia. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Coverage in 14 top Asian countries",
      "20GB high-speed regional data",
      "One eSIM for whole multi-stop trip",
      "Instant digital setup"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-013",
    "title": "Global Nomad 160-Country 20GB (365 Days Validity) \u2014 Plan #13",
    "category": "esim",
    "priceUsd": 81,
    "image": "/assets/products/esim-global-nomad-160.png",
    "description": "Universal travel eSIM covering 160+ countries, valid for a full calendar year. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers 160+ countries globally",
      "20GB data valid for 365 days",
      "Never expires while active",
      "Tethering & hotspot supported"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-014",
    "title": "Global Nomad 160-Country 50GB (365 Days Validity) \u2014 Plan #14",
    "category": "esim",
    "priceUsd": 152,
    "image": "/assets/products/esim-global-nomad-160.png",
    "description": "The ultimate globetrotter data reserve valid worldwide for 12 months. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "50GB worldwide roaming data",
      "Valid for 365 days",
      "Automatic tier-1 carrier switching",
      "Instant QR code delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-015",
    "title": "Europe Schengen 33-Country 5GB (30 Days) \u2014 Plan #15",
    "category": "esim",
    "priceUsd": 16,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "High-speed 5G/LTE roaming data across all 33 European nations. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Coverage across 33 European countries",
      "5GB high-speed 5G data",
      "30-day validity from activation",
      "Instant QR code activation"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-016",
    "title": "Europe Schengen 33-Country 10GB (30 Days) \u2014 Plan #16",
    "category": "esim",
    "priceUsd": 18,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Generous 10GB 5G data plan for seamless travel across UK, France, Germany, Italy, Spain. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "10GB 5G fast roaming",
      "Tethering / Mobile hotspot allowed",
      "Auto-connects to best local carriers",
      "No KYC or passport needed"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-017",
    "title": "Europe Schengen 33-Country 20GB (30 Days) \u2014 Plan #17",
    "category": "esim",
    "priceUsd": 29,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Heavy usage 20GB high-speed roaming plan across all EU member states. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB high-speed 5G data",
      "Zero roaming surcharges",
      "Instant QR code delivery via email & app",
      "Valid for 30 calendar days"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-018",
    "title": "Europe Schengen 33-Country Unlimited Data (15 Days) \u2014 Plan #18",
    "category": "esim",
    "priceUsd": 37,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Unlimited 5G data across Europe for worry-free streaming, navigation and remote work. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Unlimited high-speed 5G/4G",
      "Hotspot tethering enabled",
      "Instant digital QR activation",
      "24/7 technical carrier support"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-019",
    "title": "Europe Schengen 33-Country Unlimited Data (30 Days) \u2014 Plan #19",
    "category": "esim",
    "priceUsd": 58,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Premium 30-day uncapped 5G data bundle for extensive European travel. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Full 30 days unlimited data",
      "Ultra-fast low-latency local routing",
      "Works on iPhone, iPad, Galaxy, Pixel",
      "No physical SIM card swap"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-020",
    "title": "USA & Canada 10GB 5G High-Speed (30 Days) \u2014 Plan #20",
    "category": "esim",
    "priceUsd": 26,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Nationwide 5G access on AT&T, T-Mobile and Rogers with full cross-border roaming. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers USA, Alaska, Hawaii & Canada",
      "10GB unthrottled 5G data",
      "Hotspot tethering supported",
      "Instant QR installation"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-021",
    "title": "USA & Canada 20GB 5G High-Speed (30 Days) \u2014 Plan #21",
    "category": "esim",
    "priceUsd": 32,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Large 20GB high-speed bundle for cross-continental road trips and business. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB premium 5G carrier data",
      "Seamless border handover",
      "Valid for 30 days",
      "Instant QR code delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-022",
    "title": "USA & Canada Unlimited 5G Data (30 Days) \u2014 Plan #22",
    "category": "esim",
    "priceUsd": 63,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Unlimited 5G data across North America on premier tier-1 network infrastructure. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Truly unlimited 5G connectivity",
      "High-speed personal hotspot",
      "Direct eSIM profile download",
      "Instant email delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-023",
    "title": "United Arab Emirates (Dubai & Abu Dhabi) 10GB \u2014 Plan #23",
    "category": "esim",
    "priceUsd": 27,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "High-speed 5G roaming on Du and Etisalat networks across the UAE. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "10GB 5G data in UAE",
      "Instant activation upon arrival",
      "Fast WhatsApp & Telegram voice routing",
      "Valid for 30 days"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-024",
    "title": "United Arab Emirates (Dubai & Abu Dhabi) 20GB \u2014 Plan #24",
    "category": "esim",
    "priceUsd": 42,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Heavy data bundle for Dubai business travelers and digital finance summits. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB 5G ultra-fast data",
      "Premium Du/Etisalat coverage",
      "Personal hotspot enabled",
      "Instant activation QR"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-025",
    "title": "Japan & South Korea 15GB 5G Roaming (30 Days) \u2014 Plan #25",
    "category": "esim",
    "priceUsd": 28,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Ultra-low latency data on NTT Docomo, SoftBank and SK Telecom. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers Tokyo, Seoul and all prefectures",
      "15GB high-speed data",
      "Local carrier breakout routing",
      "Instant digital QR code"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-026",
    "title": "Asia Pacific 14-Country 20GB (30 Days) \u2014 Plan #26",
    "category": "esim",
    "priceUsd": 34,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Regional pass for Japan, Korea, Singapore, Thailand, Vietnam, Malaysia, Indonesia, Australia. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Coverage in 14 top Asian countries",
      "20GB high-speed regional data",
      "One eSIM for whole multi-stop trip",
      "Instant digital setup"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-027",
    "title": "Global Nomad 160-Country 20GB (365 Days Validity) \u2014 Plan #27",
    "category": "esim",
    "priceUsd": 80,
    "image": "/assets/products/esim-global-nomad-160.png",
    "description": "Universal travel eSIM covering 160+ countries, valid for a full calendar year. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers 160+ countries globally",
      "20GB data valid for 365 days",
      "Never expires while active",
      "Tethering & hotspot supported"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-028",
    "title": "Global Nomad 160-Country 50GB (365 Days Validity) \u2014 Plan #28",
    "category": "esim",
    "priceUsd": 151,
    "image": "/assets/products/esim-global-nomad-160.png",
    "description": "The ultimate globetrotter data reserve valid worldwide for 12 months. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "50GB worldwide roaming data",
      "Valid for 365 days",
      "Automatic tier-1 carrier switching",
      "Instant QR code delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-029",
    "title": "Europe Schengen 33-Country 5GB (30 Days) \u2014 Plan #29",
    "category": "esim",
    "priceUsd": 15,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "High-speed 5G/LTE roaming data across all 33 European nations. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Coverage across 33 European countries",
      "5GB high-speed 5G data",
      "30-day validity from activation",
      "Instant QR code activation"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-030",
    "title": "Europe Schengen 33-Country 10GB (30 Days) \u2014 Plan #30",
    "category": "esim",
    "priceUsd": 22,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Generous 10GB 5G data plan for seamless travel across UK, France, Germany, Italy, Spain. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "10GB 5G fast roaming",
      "Tethering / Mobile hotspot allowed",
      "Auto-connects to best local carriers",
      "No KYC or passport needed"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-031",
    "title": "Europe Schengen 33-Country 20GB (30 Days) \u2014 Plan #31",
    "category": "esim",
    "priceUsd": 28,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Heavy usage 20GB high-speed roaming plan across all EU member states. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB high-speed 5G data",
      "Zero roaming surcharges",
      "Instant QR code delivery via email & app",
      "Valid for 30 calendar days"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-032",
    "title": "Europe Schengen 33-Country Unlimited Data (15 Days) \u2014 Plan #32",
    "category": "esim",
    "priceUsd": 36,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Unlimited 5G data across Europe for worry-free streaming, navigation and remote work. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Unlimited high-speed 5G/4G",
      "Hotspot tethering enabled",
      "Instant digital QR activation",
      "24/7 technical carrier support"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-033",
    "title": "Europe Schengen 33-Country Unlimited Data (30 Days) \u2014 Plan #33",
    "category": "esim",
    "priceUsd": 57,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Premium 30-day uncapped 5G data bundle for extensive European travel. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Full 30 days unlimited data",
      "Ultra-fast low-latency local routing",
      "Works on iPhone, iPad, Galaxy, Pixel",
      "No physical SIM card swap"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-034",
    "title": "USA & Canada 10GB 5G High-Speed (30 Days) \u2014 Plan #34",
    "category": "esim",
    "priceUsd": 25,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Nationwide 5G access on AT&T, T-Mobile and Rogers with full cross-border roaming. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers USA, Alaska, Hawaii & Canada",
      "10GB unthrottled 5G data",
      "Hotspot tethering supported",
      "Instant QR installation"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-035",
    "title": "USA & Canada 20GB 5G High-Speed (30 Days) \u2014 Plan #35",
    "category": "esim",
    "priceUsd": 36,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Large 20GB high-speed bundle for cross-continental road trips and business. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB premium 5G carrier data",
      "Seamless border handover",
      "Valid for 30 days",
      "Instant QR code delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-036",
    "title": "USA & Canada Unlimited 5G Data (30 Days) \u2014 Plan #36",
    "category": "esim",
    "priceUsd": 62,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Unlimited 5G data across North America on premier tier-1 network infrastructure. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Truly unlimited 5G connectivity",
      "High-speed personal hotspot",
      "Direct eSIM profile download",
      "Instant email delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-037",
    "title": "United Arab Emirates (Dubai & Abu Dhabi) 10GB \u2014 Plan #37",
    "category": "esim",
    "priceUsd": 26,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "High-speed 5G roaming on Du and Etisalat networks across the UAE. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "10GB 5G data in UAE",
      "Instant activation upon arrival",
      "Fast WhatsApp & Telegram voice routing",
      "Valid for 30 days"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-038",
    "title": "United Arab Emirates (Dubai & Abu Dhabi) 20GB \u2014 Plan #38",
    "category": "esim",
    "priceUsd": 41,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Heavy data bundle for Dubai business travelers and digital finance summits. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB 5G ultra-fast data",
      "Premium Du/Etisalat coverage",
      "Personal hotspot enabled",
      "Instant activation QR"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-039",
    "title": "Japan & South Korea 15GB 5G Roaming (30 Days) \u2014 Plan #39",
    "category": "esim",
    "priceUsd": 27,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Ultra-low latency data on NTT Docomo, SoftBank and SK Telecom. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers Tokyo, Seoul and all prefectures",
      "15GB high-speed data",
      "Local carrier breakout routing",
      "Instant digital QR code"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-040",
    "title": "Asia Pacific 14-Country 20GB (30 Days) \u2014 Plan #40",
    "category": "esim",
    "priceUsd": 38,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Regional pass for Japan, Korea, Singapore, Thailand, Vietnam, Malaysia, Indonesia, Australia. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Coverage in 14 top Asian countries",
      "20GB high-speed regional data",
      "One eSIM for whole multi-stop trip",
      "Instant digital setup"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-041",
    "title": "Global Nomad 160-Country 20GB (365 Days Validity) \u2014 Plan #41",
    "category": "esim",
    "priceUsd": 79,
    "image": "/assets/products/esim-global-nomad-160.png",
    "description": "Universal travel eSIM covering 160+ countries, valid for a full calendar year. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers 160+ countries globally",
      "20GB data valid for 365 days",
      "Never expires while active",
      "Tethering & hotspot supported"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-042",
    "title": "Global Nomad 160-Country 50GB (365 Days Validity) \u2014 Plan #42",
    "category": "esim",
    "priceUsd": 150,
    "image": "/assets/products/esim-global-nomad-160.png",
    "description": "The ultimate globetrotter data reserve valid worldwide for 12 months. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "50GB worldwide roaming data",
      "Valid for 365 days",
      "Automatic tier-1 carrier switching",
      "Instant QR code delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-043",
    "title": "Europe Schengen 33-Country 5GB (30 Days) \u2014 Plan #43",
    "category": "esim",
    "priceUsd": 14,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "High-speed 5G/LTE roaming data across all 33 European nations. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Coverage across 33 European countries",
      "5GB high-speed 5G data",
      "30-day validity from activation",
      "Instant QR code activation"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-044",
    "title": "Europe Schengen 33-Country 10GB (30 Days) \u2014 Plan #44",
    "category": "esim",
    "priceUsd": 21,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Generous 10GB 5G data plan for seamless travel across UK, France, Germany, Italy, Spain. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "10GB 5G fast roaming",
      "Tethering / Mobile hotspot allowed",
      "Auto-connects to best local carriers",
      "No KYC or passport needed"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-045",
    "title": "Europe Schengen 33-Country 20GB (30 Days) \u2014 Plan #45",
    "category": "esim",
    "priceUsd": 32,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Heavy usage 20GB high-speed roaming plan across all EU member states. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB high-speed 5G data",
      "Zero roaming surcharges",
      "Instant QR code delivery via email & app",
      "Valid for 30 calendar days"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-046",
    "title": "Europe Schengen 33-Country Unlimited Data (15 Days) \u2014 Plan #46",
    "category": "esim",
    "priceUsd": 35,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Unlimited 5G data across Europe for worry-free streaming, navigation and remote work. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Unlimited high-speed 5G/4G",
      "Hotspot tethering enabled",
      "Instant digital QR activation",
      "24/7 technical carrier support"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-047",
    "title": "Europe Schengen 33-Country Unlimited Data (30 Days) \u2014 Plan #47",
    "category": "esim",
    "priceUsd": 56,
    "image": "/assets/products/esim-europe-unlimited.png",
    "description": "Premium 30-day uncapped 5G data bundle for extensive European travel. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Full 30 days unlimited data",
      "Ultra-fast low-latency local routing",
      "Works on iPhone, iPad, Galaxy, Pixel",
      "No physical SIM card swap"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-048",
    "title": "USA & Canada 10GB 5G High-Speed (30 Days) \u2014 Plan #48",
    "category": "esim",
    "priceUsd": 24,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Nationwide 5G access on AT&T, T-Mobile and Rogers with full cross-border roaming. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers USA, Alaska, Hawaii & Canada",
      "10GB unthrottled 5G data",
      "Hotspot tethering supported",
      "Instant QR installation"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-049",
    "title": "USA & Canada 20GB 5G High-Speed (30 Days) \u2014 Plan #49",
    "category": "esim",
    "priceUsd": 35,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Large 20GB high-speed bundle for cross-continental road trips and business. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB premium 5G carrier data",
      "Seamless border handover",
      "Valid for 30 days",
      "Instant QR code delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-050",
    "title": "USA & Canada Unlimited 5G Data (30 Days) \u2014 Plan #50",
    "category": "esim",
    "priceUsd": 66,
    "image": "/assets/products/esim-usa-north-america.png",
    "description": "Unlimited 5G data across North America on premier tier-1 network infrastructure. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Truly unlimited 5G connectivity",
      "High-speed personal hotspot",
      "Direct eSIM profile download",
      "Instant email delivery"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-051",
    "title": "United Arab Emirates (Dubai & Abu Dhabi) 10GB \u2014 Plan #51",
    "category": "esim",
    "priceUsd": 25,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "High-speed 5G roaming on Du and Etisalat networks across the UAE. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "10GB 5G data in UAE",
      "Instant activation upon arrival",
      "Fast WhatsApp & Telegram voice routing",
      "Valid for 30 days"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-052",
    "title": "United Arab Emirates (Dubai & Abu Dhabi) 20GB \u2014 Plan #52",
    "category": "esim",
    "priceUsd": 40,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Heavy data bundle for Dubai business travelers and digital finance summits. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "20GB 5G ultra-fast data",
      "Premium Du/Etisalat coverage",
      "Personal hotspot enabled",
      "Instant activation QR"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-053",
    "title": "Japan & South Korea 15GB 5G Roaming (30 Days) \u2014 Plan #53",
    "category": "esim",
    "priceUsd": 26,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Ultra-low latency data on NTT Docomo, SoftBank and SK Telecom. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers Tokyo, Seoul and all prefectures",
      "15GB high-speed data",
      "Local carrier breakout routing",
      "Instant digital QR code"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-054",
    "title": "Asia Pacific 14-Country 20GB (30 Days) \u2014 Plan #54",
    "category": "esim",
    "priceUsd": 37,
    "image": "/assets/products/digital-goods-esim.png",
    "description": "Regional pass for Japan, Korea, Singapore, Thailand, Vietnam, Malaysia, Indonesia, Australia. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Coverage in 14 top Asian countries",
      "20GB high-speed regional data",
      "One eSIM for whole multi-stop trip",
      "Instant digital setup"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-esim-055",
    "title": "Global Nomad 160-Country 20GB (365 Days Validity) \u2014 Plan #55",
    "category": "esim",
    "priceUsd": 83,
    "image": "/assets/products/esim-global-nomad-160.png",
    "description": "Universal travel eSIM covering 160+ countries, valid for a full calendar year. Digital eSIM profile with automatic QR code activation.",
    "features": [
      "Covers 160+ countries globally",
      "20GB data valid for 365 days",
      "Never expires while active",
      "Tethering & hotspot supported"
    ],
    "inStock": true,
    "stockCount": 999,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital QR Code (under 60s)"
  },
  {
    "id": "prod-gift-001",
    "title": "Amazon Global Digital Gift Card ($50) \u2014 Batch #01",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Amazon gift voucher redeemable on Amazon US, UK, EU and worldwide storefronts. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 face value digital code",
      "No expiration date or fees",
      "Redeemable for millions of physical items",
      "Instant digital code delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-002",
    "title": "Amazon Global Digital Gift Card ($100) \u2014 Batch #02",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Official Amazon digital gift card code with instant wallet balance top-up. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 spendable Amazon balance",
      "Never expires",
      "Stackable with other gift cards",
      "Delivered directly to dashboard"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-003",
    "title": "Amazon Global Digital Gift Card ($250) \u2014 Batch #03",
    "category": "giftcards",
    "priceUsd": 250,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "High-value Amazon digital gift voucher for electronics, cloud servers and essentials. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$250 full balance",
      "Universal redemption",
      "Secure cryptographic code",
      "Instant dispatch"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-004",
    "title": "Amazon Global Digital Gift Card ($500) \u2014 Batch #04",
    "category": "giftcards",
    "priceUsd": 500,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Premium $500 Amazon gift certificate for high-ticket online shopping. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$500 instant Amazon credit",
      "No hidden transaction charges",
      "Immediate code display",
      "100% replacement guarantee"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-005",
    "title": "Apple Gift Card & App Store ($50) \u2014 Batch #05",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/amazon-apple-giftcard-pack.png",
    "description": "All-in-one Apple gift card for hardware, App Store, iCloud, Apple Music and games. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 Apple account balance",
      "Buy iPhones, Macs, iPads & Apps",
      "Redeemable on Apple.com & App Store",
      "Instant digital dispatch"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-006",
    "title": "Apple Gift Card & App Store ($100) \u2014 Batch #06",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/amazon-apple-giftcard-pack.png",
    "description": "Universal Apple balance card for digital subscriptions and Apple Store purchases. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 spendable Apple credit",
      "Works for iCloud+, Apple TV+, Music",
      "Hardware & software eligible",
      "Instant code delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-007",
    "title": "Apple Gift Card & App Store ($250) \u2014 Batch #07",
    "category": "giftcards",
    "priceUsd": 250,
    "image": "/assets/products/amazon-apple-giftcard-pack.png",
    "description": "Premium Apple voucher for hardware upgrades and professional Mac apps. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$250 official Apple credit",
      "Stackable up to $2,000 per account",
      "No expiration date",
      "Instant digital code"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-008",
    "title": "Google Play Store Digital Card ($50) \u2014 Batch #08",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Google Play digital code for Android apps, games, YouTube Premium and movies. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 Google Play balance",
      "Instant Android redemption",
      "Pay for in-app subscriptions",
      "No expiration fees"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-009",
    "title": "Google Play Store Digital Card ($100) \u2014 Batch #09",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Official Google Play gift voucher code delivered instantly to your account. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 digital wallet balance",
      "Valid for all Google services",
      "Direct store redemption",
      "Instant delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-010",
    "title": "Steam Wallet Digital Gaming Card ($50) \u2014 Batch #10",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "Instant funds for your Steam account to purchase PC games, DLCs and community market skins. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 Steam Wallet credit",
      "Buy thousands of PC games on Steam",
      "Trade on Steam Community Market",
      "Instant code generation"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-011",
    "title": "Steam Wallet Digital Gaming Card ($100) \u2014 Batch #11",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "Top-tier Steam Wallet balance voucher for AAA game releases and VR titles. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 Steam balance code",
      "Never expires",
      "Global region un-restricted",
      "Instant digital reveal"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-012",
    "title": "PlayStation Network (PSN) Voucher ($75) \u2014 Batch #12",
    "category": "giftcards",
    "priceUsd": 75,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "PlayStation Store digital code for PS5 & PS4 digital games, add-ons and PS Plus. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$75 PSN Store credit",
      "Buy PS5 games and DLCs",
      "Renew PS Plus Essential/Extra",
      "Instant digital dispatch"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-013",
    "title": "Xbox Game Pass Ultimate 12-Month Card \u2014 Batch #13",
    "category": "giftcards",
    "priceUsd": 149,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "Full 1-Year Xbox Game Pass Ultimate including hundreds of games on PC and Xbox Series X. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "12 months of Game Pass Ultimate",
      "Day-one access to new Xbox games",
      "EA Play membership included",
      "Cloud gaming on mobile & browser"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-014",
    "title": "Netflix Premium 12-Month Subscription Card \u2014 Batch #14",
    "category": "giftcards",
    "priceUsd": 129,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "1-Year 4K Ultra HD Netflix subscription voucher supporting 4 simultaneous screens. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "12 months 4K UHD streaming",
      "4 simultaneous screens allowed",
      "Download on 6 devices",
      "Instant prepaid voucher code"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-015",
    "title": "Spotify Premium Individual 1-Year Voucher \u2014 Batch #15",
    "category": "giftcards",
    "priceUsd": 79,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "12 months uninterrupted ad-free music, offline listening and high-fidelity sound. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "12 months ad-free music",
      "Offline song downloads",
      "Unlimited track skips",
      "Direct account redemption"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-016",
    "title": "Binance USDT Gift Card ($100 USDT) \u2014 Batch #16",
    "category": "giftcards",
    "priceUsd": 105,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Direct zero-fee Binance crypto gift card pre-loaded with 100 USDT. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "100 USDT verified balance",
      "Zero deposit fee on Binance",
      "Transferable & instant redeem",
      "Safe on-chain verification"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-017",
    "title": "Binance USDT Gift Card ($500 USDT) \u2014 Batch #17",
    "category": "giftcards",
    "priceUsd": 515,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "High-value crypto gift card loaded with 500 USDT for immediate trading. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "500 USDT balance",
      "Instant account crediting",
      "Redeemable on Binance app & web",
      "Instant cryptographic code"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-018",
    "title": "Airbnb Travel Gift Voucher ($250) \u2014 Batch #18",
    "category": "giftcards",
    "priceUsd": 250,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Redeemable for luxury vacation villas, apartments and Airbnb Experiences worldwide. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$250 Airbnb booking credit",
      "Never expires",
      "Valid in 220+ countries",
      "Instant digital delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-019",
    "title": "Uber & Uber Eats Digital Gift Card ($100) \u2014 Batch #19",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Combined voucher for Uber rides and Uber Eats restaurant meal deliveries worldwide. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 Uber Cash balance",
      "Use for rides and food deliveries",
      "Valid in all countries Uber operates",
      "Instant code reveal"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-020",
    "title": "Amazon Global Digital Gift Card ($50) \u2014 Batch #20",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Amazon gift voucher redeemable on Amazon US, UK, EU and worldwide storefronts. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 face value digital code",
      "No expiration date or fees",
      "Redeemable for millions of physical items",
      "Instant digital code delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-021",
    "title": "Amazon Global Digital Gift Card ($100) \u2014 Batch #21",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Official Amazon digital gift card code with instant wallet balance top-up. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 spendable Amazon balance",
      "Never expires",
      "Stackable with other gift cards",
      "Delivered directly to dashboard"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-022",
    "title": "Amazon Global Digital Gift Card ($250) \u2014 Batch #22",
    "category": "giftcards",
    "priceUsd": 250,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "High-value Amazon digital gift voucher for electronics, cloud servers and essentials. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$250 full balance",
      "Universal redemption",
      "Secure cryptographic code",
      "Instant dispatch"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-023",
    "title": "Amazon Global Digital Gift Card ($500) \u2014 Batch #23",
    "category": "giftcards",
    "priceUsd": 500,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Premium $500 Amazon gift certificate for high-ticket online shopping. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$500 instant Amazon credit",
      "No hidden transaction charges",
      "Immediate code display",
      "100% replacement guarantee"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-024",
    "title": "Apple Gift Card & App Store ($50) \u2014 Batch #24",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/amazon-apple-giftcard-pack.png",
    "description": "All-in-one Apple gift card for hardware, App Store, iCloud, Apple Music and games. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 Apple account balance",
      "Buy iPhones, Macs, iPads & Apps",
      "Redeemable on Apple.com & App Store",
      "Instant digital dispatch"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-025",
    "title": "Apple Gift Card & App Store ($100) \u2014 Batch #25",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/amazon-apple-giftcard-pack.png",
    "description": "Universal Apple balance card for digital subscriptions and Apple Store purchases. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 spendable Apple credit",
      "Works for iCloud+, Apple TV+, Music",
      "Hardware & software eligible",
      "Instant code delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-026",
    "title": "Apple Gift Card & App Store ($250) \u2014 Batch #26",
    "category": "giftcards",
    "priceUsd": 250,
    "image": "/assets/products/amazon-apple-giftcard-pack.png",
    "description": "Premium Apple voucher for hardware upgrades and professional Mac apps. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$250 official Apple credit",
      "Stackable up to $2,000 per account",
      "No expiration date",
      "Instant digital code"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-027",
    "title": "Google Play Store Digital Card ($50) \u2014 Batch #27",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Google Play digital code for Android apps, games, YouTube Premium and movies. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 Google Play balance",
      "Instant Android redemption",
      "Pay for in-app subscriptions",
      "No expiration fees"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-028",
    "title": "Google Play Store Digital Card ($100) \u2014 Batch #28",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Official Google Play gift voucher code delivered instantly to your account. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 digital wallet balance",
      "Valid for all Google services",
      "Direct store redemption",
      "Instant delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-029",
    "title": "Steam Wallet Digital Gaming Card ($50) \u2014 Batch #29",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "Instant funds for your Steam account to purchase PC games, DLCs and community market skins. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 Steam Wallet credit",
      "Buy thousands of PC games on Steam",
      "Trade on Steam Community Market",
      "Instant code generation"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-030",
    "title": "Steam Wallet Digital Gaming Card ($100) \u2014 Batch #30",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "Top-tier Steam Wallet balance voucher for AAA game releases and VR titles. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 Steam balance code",
      "Never expires",
      "Global region un-restricted",
      "Instant digital reveal"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-031",
    "title": "PlayStation Network (PSN) Voucher ($75) \u2014 Batch #31",
    "category": "giftcards",
    "priceUsd": 75,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "PlayStation Store digital code for PS5 & PS4 digital games, add-ons and PS Plus. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$75 PSN Store credit",
      "Buy PS5 games and DLCs",
      "Renew PS Plus Essential/Extra",
      "Instant digital dispatch"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-032",
    "title": "Xbox Game Pass Ultimate 12-Month Card \u2014 Batch #32",
    "category": "giftcards",
    "priceUsd": 149,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "Full 1-Year Xbox Game Pass Ultimate including hundreds of games on PC and Xbox Series X. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "12 months of Game Pass Ultimate",
      "Day-one access to new Xbox games",
      "EA Play membership included",
      "Cloud gaming on mobile & browser"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-033",
    "title": "Netflix Premium 12-Month Subscription Card \u2014 Batch #33",
    "category": "giftcards",
    "priceUsd": 129,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "1-Year 4K Ultra HD Netflix subscription voucher supporting 4 simultaneous screens. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "12 months 4K UHD streaming",
      "4 simultaneous screens allowed",
      "Download on 6 devices",
      "Instant prepaid voucher code"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-034",
    "title": "Spotify Premium Individual 1-Year Voucher \u2014 Batch #34",
    "category": "giftcards",
    "priceUsd": 79,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "12 months uninterrupted ad-free music, offline listening and high-fidelity sound. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "12 months ad-free music",
      "Offline song downloads",
      "Unlimited track skips",
      "Direct account redemption"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-035",
    "title": "Binance USDT Gift Card ($100 USDT) \u2014 Batch #35",
    "category": "giftcards",
    "priceUsd": 105,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Direct zero-fee Binance crypto gift card pre-loaded with 100 USDT. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "100 USDT verified balance",
      "Zero deposit fee on Binance",
      "Transferable & instant redeem",
      "Safe on-chain verification"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-036",
    "title": "Binance USDT Gift Card ($500 USDT) \u2014 Batch #36",
    "category": "giftcards",
    "priceUsd": 515,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "High-value crypto gift card loaded with 500 USDT for immediate trading. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "500 USDT balance",
      "Instant account crediting",
      "Redeemable on Binance app & web",
      "Instant cryptographic code"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-037",
    "title": "Airbnb Travel Gift Voucher ($250) \u2014 Batch #37",
    "category": "giftcards",
    "priceUsd": 250,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Redeemable for luxury vacation villas, apartments and Airbnb Experiences worldwide. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$250 Airbnb booking credit",
      "Never expires",
      "Valid in 220+ countries",
      "Instant digital delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-038",
    "title": "Uber & Uber Eats Digital Gift Card ($100) \u2014 Batch #38",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Combined voucher for Uber rides and Uber Eats restaurant meal deliveries worldwide. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 Uber Cash balance",
      "Use for rides and food deliveries",
      "Valid in all countries Uber operates",
      "Instant code reveal"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-039",
    "title": "Amazon Global Digital Gift Card ($50) \u2014 Batch #39",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Amazon gift voucher redeemable on Amazon US, UK, EU and worldwide storefronts. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 face value digital code",
      "No expiration date or fees",
      "Redeemable for millions of physical items",
      "Instant digital code delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-040",
    "title": "Amazon Global Digital Gift Card ($100) \u2014 Batch #40",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Official Amazon digital gift card code with instant wallet balance top-up. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 spendable Amazon balance",
      "Never expires",
      "Stackable with other gift cards",
      "Delivered directly to dashboard"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-041",
    "title": "Amazon Global Digital Gift Card ($250) \u2014 Batch #41",
    "category": "giftcards",
    "priceUsd": 250,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "High-value Amazon digital gift voucher for electronics, cloud servers and essentials. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$250 full balance",
      "Universal redemption",
      "Secure cryptographic code",
      "Instant dispatch"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-042",
    "title": "Amazon Global Digital Gift Card ($500) \u2014 Batch #42",
    "category": "giftcards",
    "priceUsd": 500,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Premium $500 Amazon gift certificate for high-ticket online shopping. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$500 instant Amazon credit",
      "No hidden transaction charges",
      "Immediate code display",
      "100% replacement guarantee"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-043",
    "title": "Apple Gift Card & App Store ($50) \u2014 Batch #43",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/amazon-apple-giftcard-pack.png",
    "description": "All-in-one Apple gift card for hardware, App Store, iCloud, Apple Music and games. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 Apple account balance",
      "Buy iPhones, Macs, iPads & Apps",
      "Redeemable on Apple.com & App Store",
      "Instant digital dispatch"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-044",
    "title": "Apple Gift Card & App Store ($100) \u2014 Batch #44",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/amazon-apple-giftcard-pack.png",
    "description": "Universal Apple balance card for digital subscriptions and Apple Store purchases. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 spendable Apple credit",
      "Works for iCloud+, Apple TV+, Music",
      "Hardware & software eligible",
      "Instant code delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-045",
    "title": "Apple Gift Card & App Store ($250) \u2014 Batch #45",
    "category": "giftcards",
    "priceUsd": 250,
    "image": "/assets/products/amazon-apple-giftcard-pack.png",
    "description": "Premium Apple voucher for hardware upgrades and professional Mac apps. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$250 official Apple credit",
      "Stackable up to $2,000 per account",
      "No expiration date",
      "Instant digital code"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-046",
    "title": "Google Play Store Digital Card ($50) \u2014 Batch #46",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Google Play digital code for Android apps, games, YouTube Premium and movies. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 Google Play balance",
      "Instant Android redemption",
      "Pay for in-app subscriptions",
      "No expiration fees"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-047",
    "title": "Google Play Store Digital Card ($100) \u2014 Batch #47",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Official Google Play gift voucher code delivered instantly to your account. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 digital wallet balance",
      "Valid for all Google services",
      "Direct store redemption",
      "Instant delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-048",
    "title": "Steam Wallet Digital Gaming Card ($50) \u2014 Batch #48",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "Instant funds for your Steam account to purchase PC games, DLCs and community market skins. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 Steam Wallet credit",
      "Buy thousands of PC games on Steam",
      "Trade on Steam Community Market",
      "Instant code generation"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-049",
    "title": "Steam Wallet Digital Gaming Card ($100) \u2014 Batch #49",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "Top-tier Steam Wallet balance voucher for AAA game releases and VR titles. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 Steam balance code",
      "Never expires",
      "Global region un-restricted",
      "Instant digital reveal"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-050",
    "title": "PlayStation Network (PSN) Voucher ($75) \u2014 Batch #50",
    "category": "giftcards",
    "priceUsd": 75,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "PlayStation Store digital code for PS5 & PS4 digital games, add-ons and PS Plus. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$75 PSN Store credit",
      "Buy PS5 games and DLCs",
      "Renew PS Plus Essential/Extra",
      "Instant digital dispatch"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-051",
    "title": "Xbox Game Pass Ultimate 12-Month Card \u2014 Batch #51",
    "category": "giftcards",
    "priceUsd": 149,
    "image": "/assets/products/gaming-steam-playstation-voucher.png",
    "description": "Full 1-Year Xbox Game Pass Ultimate including hundreds of games on PC and Xbox Series X. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "12 months of Game Pass Ultimate",
      "Day-one access to new Xbox games",
      "EA Play membership included",
      "Cloud gaming on mobile & browser"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-052",
    "title": "Netflix Premium 12-Month Subscription Card \u2014 Batch #52",
    "category": "giftcards",
    "priceUsd": 129,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "1-Year 4K Ultra HD Netflix subscription voucher supporting 4 simultaneous screens. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "12 months 4K UHD streaming",
      "4 simultaneous screens allowed",
      "Download on 6 devices",
      "Instant prepaid voucher code"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-053",
    "title": "Spotify Premium Individual 1-Year Voucher \u2014 Batch #53",
    "category": "giftcards",
    "priceUsd": 79,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "12 months uninterrupted ad-free music, offline listening and high-fidelity sound. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "12 months ad-free music",
      "Offline song downloads",
      "Unlimited track skips",
      "Direct account redemption"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-054",
    "title": "Binance USDT Gift Card ($100 USDT) \u2014 Batch #54",
    "category": "giftcards",
    "priceUsd": 105,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Direct zero-fee Binance crypto gift card pre-loaded with 100 USDT. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "100 USDT verified balance",
      "Zero deposit fee on Binance",
      "Transferable & instant redeem",
      "Safe on-chain verification"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-055",
    "title": "Binance USDT Gift Card ($500 USDT) \u2014 Batch #55",
    "category": "giftcards",
    "priceUsd": 515,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "High-value crypto gift card loaded with 500 USDT for immediate trading. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "500 USDT balance",
      "Instant account crediting",
      "Redeemable on Binance app & web",
      "Instant cryptographic code"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-056",
    "title": "Airbnb Travel Gift Voucher ($250) \u2014 Batch #56",
    "category": "giftcards",
    "priceUsd": 250,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Redeemable for luxury vacation villas, apartments and Airbnb Experiences worldwide. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$250 Airbnb booking credit",
      "Never expires",
      "Valid in 220+ countries",
      "Instant digital delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-057",
    "title": "Uber & Uber Eats Digital Gift Card ($100) \u2014 Batch #57",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Combined voucher for Uber rides and Uber Eats restaurant meal deliveries worldwide. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 Uber Cash balance",
      "Use for rides and food deliveries",
      "Valid in all countries Uber operates",
      "Instant code reveal"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-058",
    "title": "Amazon Global Digital Gift Card ($50) \u2014 Batch #58",
    "category": "giftcards",
    "priceUsd": 50,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Amazon gift voucher redeemable on Amazon US, UK, EU and worldwide storefronts. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$50 face value digital code",
      "No expiration date or fees",
      "Redeemable for millions of physical items",
      "Instant digital code delivery"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-059",
    "title": "Amazon Global Digital Gift Card ($100) \u2014 Batch #59",
    "category": "giftcards",
    "priceUsd": 100,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "Official Amazon digital gift card code with instant wallet balance top-up. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$100 spendable Amazon balance",
      "Never expires",
      "Stackable with other gift cards",
      "Delivered directly to dashboard"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-gift-060",
    "title": "Amazon Global Digital Gift Card ($250) \u2014 Batch #60",
    "category": "giftcards",
    "priceUsd": 250,
    "image": "/assets/products/giftcard-luxury-vault.png",
    "description": "High-value Amazon digital gift voucher for electronics, cloud servers and essentials. Digital voucher code delivered with verified redemption guarantee.",
    "features": [
      "$250 full balance",
      "Universal redemption",
      "Secure cryptographic code",
      "Instant dispatch"
    ],
    "inStock": true,
    "stockCount": 150,
    "isPhysical": false,
    "deliveryEstimate": "Instant Digital Code Dispatch"
  },
  {
    "id": "prod-dev-001",
    "title": "Custom BEP20 Token Smart Contract Deployment \u2014 Tier #01",
    "category": "token_creation",
    "priceUsd": 499,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Full development, verification and mainnet deployment of audited BEP20 token on BNB Chain. Tier #01 custom deployment and architecture package.",
    "features": [
      "OpenZeppelin standard contract",
      "BscScan verified source code",
      "Custom name, symbol, decimals & supply",
      "Optional Mintable, Burnable & Pause"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-002",
    "title": "Custom ERC20 Token Deployment (Ethereum Mainnet) \u2014 Tier #02",
    "category": "token_creation",
    "priceUsd": 814,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Institutional Ethereum ERC20 smart contract deployment with full Etherscan verification. Tier #02 custom deployment and architecture package.",
    "features": [
      "Gas-optimized Solidity 0.8.24 code",
      "Etherscan automated verification",
      "Multi-Sig ownership transfer",
      "Ready for Uniswap V3 liquidity"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-003",
    "title": "TRC20 Token Smart Contract (TRON Mainnet) \u2014 Tier #03",
    "category": "token_creation",
    "priceUsd": 429,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Fast, high-throughput TRC20 token deployment on TRON network with TronScan verification. Tier #03 custom deployment and architecture package.",
    "features": [
      "TronScan verified contract",
      "Instant transfer speed (2000 TPS)",
      "Low energy fees optimization",
      "Ready for SunSwap listing"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-004",
    "title": "Solana SPL Token Creation & Metaplex Metadata \u2014 Tier #04",
    "category": "token_creation",
    "priceUsd": 544,
    "image": "/assets/products/solana-spl-token-launch.png",
    "description": "Ultra-fast Solana SPL token with on-chain Metaplex metadata, logo, social links and Raydium readiness. Tier #04 custom deployment and architecture package.",
    "features": [
      "Metaplex on-chain metadata standard",
      "Embedded logo & description",
      "Revoke Mint & Freeze authority option",
      "Ready for Raydium liquidity pool"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-005",
    "title": "Sui Move Token Smart Contract Deployment \u2014 Tier #05",
    "category": "token_creation",
    "priceUsd": 659,
    "image": "/assets/products/solana-spl-token-launch.png",
    "description": "Native Sui Move language token contract with object-centric ownership and sub-second finality. Tier #05 custom deployment and architecture package.",
    "features": [
      "Native Sui Move code verification",
      "Suiscan explorer verification",
      "Object-oriented treasury capability",
      "High TPS parallel execution"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-006",
    "title": "Uniswap V3 Concentrated Liquidity Pairing \u2014 Tier #06",
    "category": "token_creation",
    "priceUsd": 424,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Creation and mathematical optimization of Uniswap V3 concentrated liquidity pool. Tier #06 custom deployment and architecture package.",
    "features": [
      "Optimal price tick range modeling",
      "Liquidity NFT receipt minting",
      "Slippage tolerance configuration",
      "Zero-loss impermanent hedging guide"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-007",
    "title": "PancakeSwap V3 Liquidity Pool Initialization \u2014 Tier #07",
    "category": "token_creation",
    "priceUsd": 389,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Pairing and initializing your token liquidity pool on BNB Chain PancakeSwap. Tier #07 custom deployment and architecture package.",
    "features": [
      "V3 concentrated pool setup",
      "LP token lock or burn proof",
      "Trading pair verification",
      "Listing on DexScreener & GeckoTerminal"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-008",
    "title": "Full Quantitative Smart Contract Security Audit \u2014 Tier #08",
    "category": "token_creation",
    "priceUsd": 1404,
    "image": "/assets/products/smart-contract-audit.png",
    "description": "In-depth formal mathematical verification, static analysis and vulnerability penetration report. Tier #08 custom deployment and architecture package.",
    "features": [
      "Slither & Mythril automated scans",
      "Manual line-by-line developer review",
      "Reentrancy & overflow verification",
      "Official PDF audit certificate & badge"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-009",
    "title": "Staking & Yield Farming Smart Contract Suite \u2014 Tier #09",
    "category": "token_creation",
    "priceUsd": 1019,
    "image": "/assets/products/crypto-reserve-vault.png",
    "description": "Custom staking vault smart contract allowing token holders to lock tokens and earn rewards. Tier #09 custom deployment and architecture package.",
    "features": [
      "Configurable lock periods (30, 60, 90d)",
      "Automated compound interest math",
      "Emergency withdraw safety logic",
      "Full admin management dashboard"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-010",
    "title": "Token Vesting & Team Lock Smart Contract \u2014 Tier #10",
    "category": "token_creation",
    "priceUsd": 585,
    "image": "/assets/products/smart-contract-audit.png",
    "description": "Automated linear and cliff token vesting smart contract for team and seed investors. Tier #10 custom deployment and architecture package.",
    "features": [
      "Custom cliff and linear duration",
      "Beneficiary claim portal integration",
      "Immutable time-locked security",
      "Audited OpenZeppelin Vesting standard"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-011",
    "title": "Custom BEP20 Token Smart Contract Deployment \u2014 Tier #11",
    "category": "token_creation",
    "priceUsd": 649,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Full development, verification and mainnet deployment of audited BEP20 token on BNB Chain. Tier #11 custom deployment and architecture package.",
    "features": [
      "OpenZeppelin standard contract",
      "BscScan verified source code",
      "Custom name, symbol, decimals & supply",
      "Optional Mintable, Burnable & Pause"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-012",
    "title": "Custom ERC20 Token Deployment (Ethereum Mainnet) \u2014 Tier #12",
    "category": "token_creation",
    "priceUsd": 964,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Institutional Ethereum ERC20 smart contract deployment with full Etherscan verification. Tier #12 custom deployment and architecture package.",
    "features": [
      "Gas-optimized Solidity 0.8.24 code",
      "Etherscan automated verification",
      "Multi-Sig ownership transfer",
      "Ready for Uniswap V3 liquidity"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-013",
    "title": "TRC20 Token Smart Contract (TRON Mainnet) \u2014 Tier #13",
    "category": "token_creation",
    "priceUsd": 579,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Fast, high-throughput TRC20 token deployment on TRON network with TronScan verification. Tier #13 custom deployment and architecture package.",
    "features": [
      "TronScan verified contract",
      "Instant transfer speed (2000 TPS)",
      "Low energy fees optimization",
      "Ready for SunSwap listing"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-014",
    "title": "Solana SPL Token Creation & Metaplex Metadata \u2014 Tier #14",
    "category": "token_creation",
    "priceUsd": 694,
    "image": "/assets/products/solana-spl-token-launch.png",
    "description": "Ultra-fast Solana SPL token with on-chain Metaplex metadata, logo, social links and Raydium readiness. Tier #14 custom deployment and architecture package.",
    "features": [
      "Metaplex on-chain metadata standard",
      "Embedded logo & description",
      "Revoke Mint & Freeze authority option",
      "Ready for Raydium liquidity pool"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-015",
    "title": "Sui Move Token Smart Contract Deployment \u2014 Tier #15",
    "category": "token_creation",
    "priceUsd": 809,
    "image": "/assets/products/solana-spl-token-launch.png",
    "description": "Native Sui Move language token contract with object-centric ownership and sub-second finality. Tier #15 custom deployment and architecture package.",
    "features": [
      "Native Sui Move code verification",
      "Suiscan explorer verification",
      "Object-oriented treasury capability",
      "High TPS parallel execution"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-016",
    "title": "Uniswap V3 Concentrated Liquidity Pairing \u2014 Tier #16",
    "category": "token_creation",
    "priceUsd": 574,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Creation and mathematical optimization of Uniswap V3 concentrated liquidity pool. Tier #16 custom deployment and architecture package.",
    "features": [
      "Optimal price tick range modeling",
      "Liquidity NFT receipt minting",
      "Slippage tolerance configuration",
      "Zero-loss impermanent hedging guide"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-017",
    "title": "PancakeSwap V3 Liquidity Pool Initialization \u2014 Tier #17",
    "category": "token_creation",
    "priceUsd": 539,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Pairing and initializing your token liquidity pool on BNB Chain PancakeSwap. Tier #17 custom deployment and architecture package.",
    "features": [
      "V3 concentrated pool setup",
      "LP token lock or burn proof",
      "Trading pair verification",
      "Listing on DexScreener & GeckoTerminal"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-018",
    "title": "Full Quantitative Smart Contract Security Audit \u2014 Tier #18",
    "category": "token_creation",
    "priceUsd": 1554,
    "image": "/assets/products/smart-contract-audit.png",
    "description": "In-depth formal mathematical verification, static analysis and vulnerability penetration report. Tier #18 custom deployment and architecture package.",
    "features": [
      "Slither & Mythril automated scans",
      "Manual line-by-line developer review",
      "Reentrancy & overflow verification",
      "Official PDF audit certificate & badge"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-019",
    "title": "Staking & Yield Farming Smart Contract Suite \u2014 Tier #19",
    "category": "token_creation",
    "priceUsd": 1169,
    "image": "/assets/products/crypto-reserve-vault.png",
    "description": "Custom staking vault smart contract allowing token holders to lock tokens and earn rewards. Tier #19 custom deployment and architecture package.",
    "features": [
      "Configurable lock periods (30, 60, 90d)",
      "Automated compound interest math",
      "Emergency withdraw safety logic",
      "Full admin management dashboard"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-020",
    "title": "Token Vesting & Team Lock Smart Contract \u2014 Tier #20",
    "category": "token_creation",
    "priceUsd": 735,
    "image": "/assets/products/smart-contract-audit.png",
    "description": "Automated linear and cliff token vesting smart contract for team and seed investors. Tier #20 custom deployment and architecture package.",
    "features": [
      "Custom cliff and linear duration",
      "Beneficiary claim portal integration",
      "Immutable time-locked security",
      "Audited OpenZeppelin Vesting standard"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-021",
    "title": "Custom BEP20 Token Smart Contract Deployment \u2014 Tier #21",
    "category": "token_creation",
    "priceUsd": 799,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Full development, verification and mainnet deployment of audited BEP20 token on BNB Chain. Tier #21 custom deployment and architecture package.",
    "features": [
      "OpenZeppelin standard contract",
      "BscScan verified source code",
      "Custom name, symbol, decimals & supply",
      "Optional Mintable, Burnable & Pause"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-022",
    "title": "Custom ERC20 Token Deployment (Ethereum Mainnet) \u2014 Tier #22",
    "category": "token_creation",
    "priceUsd": 1114,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Institutional Ethereum ERC20 smart contract deployment with full Etherscan verification. Tier #22 custom deployment and architecture package.",
    "features": [
      "Gas-optimized Solidity 0.8.24 code",
      "Etherscan automated verification",
      "Multi-Sig ownership transfer",
      "Ready for Uniswap V3 liquidity"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-023",
    "title": "TRC20 Token Smart Contract (TRON Mainnet) \u2014 Tier #23",
    "category": "token_creation",
    "priceUsd": 729,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Fast, high-throughput TRC20 token deployment on TRON network with TronScan verification. Tier #23 custom deployment and architecture package.",
    "features": [
      "TronScan verified contract",
      "Instant transfer speed (2000 TPS)",
      "Low energy fees optimization",
      "Ready for SunSwap listing"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-024",
    "title": "Solana SPL Token Creation & Metaplex Metadata \u2014 Tier #24",
    "category": "token_creation",
    "priceUsd": 844,
    "image": "/assets/products/solana-spl-token-launch.png",
    "description": "Ultra-fast Solana SPL token with on-chain Metaplex metadata, logo, social links and Raydium readiness. Tier #24 custom deployment and architecture package.",
    "features": [
      "Metaplex on-chain metadata standard",
      "Embedded logo & description",
      "Revoke Mint & Freeze authority option",
      "Ready for Raydium liquidity pool"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-025",
    "title": "Sui Move Token Smart Contract Deployment \u2014 Tier #25",
    "category": "token_creation",
    "priceUsd": 959,
    "image": "/assets/products/solana-spl-token-launch.png",
    "description": "Native Sui Move language token contract with object-centric ownership and sub-second finality. Tier #25 custom deployment and architecture package.",
    "features": [
      "Native Sui Move code verification",
      "Suiscan explorer verification",
      "Object-oriented treasury capability",
      "High TPS parallel execution"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-026",
    "title": "Uniswap V3 Concentrated Liquidity Pairing \u2014 Tier #26",
    "category": "token_creation",
    "priceUsd": 724,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Creation and mathematical optimization of Uniswap V3 concentrated liquidity pool. Tier #26 custom deployment and architecture package.",
    "features": [
      "Optimal price tick range modeling",
      "Liquidity NFT receipt minting",
      "Slippage tolerance configuration",
      "Zero-loss impermanent hedging guide"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-027",
    "title": "PancakeSwap V3 Liquidity Pool Initialization \u2014 Tier #27",
    "category": "token_creation",
    "priceUsd": 689,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Pairing and initializing your token liquidity pool on BNB Chain PancakeSwap. Tier #27 custom deployment and architecture package.",
    "features": [
      "V3 concentrated pool setup",
      "LP token lock or burn proof",
      "Trading pair verification",
      "Listing on DexScreener & GeckoTerminal"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-028",
    "title": "Full Quantitative Smart Contract Security Audit \u2014 Tier #28",
    "category": "token_creation",
    "priceUsd": 1704,
    "image": "/assets/products/smart-contract-audit.png",
    "description": "In-depth formal mathematical verification, static analysis and vulnerability penetration report. Tier #28 custom deployment and architecture package.",
    "features": [
      "Slither & Mythril automated scans",
      "Manual line-by-line developer review",
      "Reentrancy & overflow verification",
      "Official PDF audit certificate & badge"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-029",
    "title": "Staking & Yield Farming Smart Contract Suite \u2014 Tier #29",
    "category": "token_creation",
    "priceUsd": 1319,
    "image": "/assets/products/crypto-reserve-vault.png",
    "description": "Custom staking vault smart contract allowing token holders to lock tokens and earn rewards. Tier #29 custom deployment and architecture package.",
    "features": [
      "Configurable lock periods (30, 60, 90d)",
      "Automated compound interest math",
      "Emergency withdraw safety logic",
      "Full admin management dashboard"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-030",
    "title": "Token Vesting & Team Lock Smart Contract \u2014 Tier #30",
    "category": "token_creation",
    "priceUsd": 885,
    "image": "/assets/products/smart-contract-audit.png",
    "description": "Automated linear and cliff token vesting smart contract for team and seed investors. Tier #30 custom deployment and architecture package.",
    "features": [
      "Custom cliff and linear duration",
      "Beneficiary claim portal integration",
      "Immutable time-locked security",
      "Audited OpenZeppelin Vesting standard"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-031",
    "title": "Custom BEP20 Token Smart Contract Deployment \u2014 Tier #31",
    "category": "token_creation",
    "priceUsd": 949,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Full development, verification and mainnet deployment of audited BEP20 token on BNB Chain. Tier #31 custom deployment and architecture package.",
    "features": [
      "OpenZeppelin standard contract",
      "BscScan verified source code",
      "Custom name, symbol, decimals & supply",
      "Optional Mintable, Burnable & Pause"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-032",
    "title": "Custom ERC20 Token Deployment (Ethereum Mainnet) \u2014 Tier #32",
    "category": "token_creation",
    "priceUsd": 1264,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Institutional Ethereum ERC20 smart contract deployment with full Etherscan verification. Tier #32 custom deployment and architecture package.",
    "features": [
      "Gas-optimized Solidity 0.8.24 code",
      "Etherscan automated verification",
      "Multi-Sig ownership transfer",
      "Ready for Uniswap V3 liquidity"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-033",
    "title": "TRC20 Token Smart Contract (TRON Mainnet) \u2014 Tier #33",
    "category": "token_creation",
    "priceUsd": 879,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Fast, high-throughput TRC20 token deployment on TRON network with TronScan verification. Tier #33 custom deployment and architecture package.",
    "features": [
      "TronScan verified contract",
      "Instant transfer speed (2000 TPS)",
      "Low energy fees optimization",
      "Ready for SunSwap listing"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-034",
    "title": "Solana SPL Token Creation & Metaplex Metadata \u2014 Tier #34",
    "category": "token_creation",
    "priceUsd": 994,
    "image": "/assets/products/solana-spl-token-launch.png",
    "description": "Ultra-fast Solana SPL token with on-chain Metaplex metadata, logo, social links and Raydium readiness. Tier #34 custom deployment and architecture package.",
    "features": [
      "Metaplex on-chain metadata standard",
      "Embedded logo & description",
      "Revoke Mint & Freeze authority option",
      "Ready for Raydium liquidity pool"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-035",
    "title": "Sui Move Token Smart Contract Deployment \u2014 Tier #35",
    "category": "token_creation",
    "priceUsd": 1109,
    "image": "/assets/products/solana-spl-token-launch.png",
    "description": "Native Sui Move language token contract with object-centric ownership and sub-second finality. Tier #35 custom deployment and architecture package.",
    "features": [
      "Native Sui Move code verification",
      "Suiscan explorer verification",
      "Object-oriented treasury capability",
      "High TPS parallel execution"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-036",
    "title": "Uniswap V3 Concentrated Liquidity Pairing \u2014 Tier #36",
    "category": "token_creation",
    "priceUsd": 874,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Creation and mathematical optimization of Uniswap V3 concentrated liquidity pool. Tier #36 custom deployment and architecture package.",
    "features": [
      "Optimal price tick range modeling",
      "Liquidity NFT receipt minting",
      "Slippage tolerance configuration",
      "Zero-loss impermanent hedging guide"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-037",
    "title": "PancakeSwap V3 Liquidity Pool Initialization \u2014 Tier #37",
    "category": "token_creation",
    "priceUsd": 839,
    "image": "/assets/products/bep20-token-deployment.png",
    "description": "Pairing and initializing your token liquidity pool on BNB Chain PancakeSwap. Tier #37 custom deployment and architecture package.",
    "features": [
      "V3 concentrated pool setup",
      "LP token lock or burn proof",
      "Trading pair verification",
      "Listing on DexScreener & GeckoTerminal"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-038",
    "title": "Full Quantitative Smart Contract Security Audit \u2014 Tier #38",
    "category": "token_creation",
    "priceUsd": 1854,
    "image": "/assets/products/smart-contract-audit.png",
    "description": "In-depth formal mathematical verification, static analysis and vulnerability penetration report. Tier #38 custom deployment and architecture package.",
    "features": [
      "Slither & Mythril automated scans",
      "Manual line-by-line developer review",
      "Reentrancy & overflow verification",
      "Official PDF audit certificate & badge"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-039",
    "title": "Staking & Yield Farming Smart Contract Suite \u2014 Tier #39",
    "category": "token_creation",
    "priceUsd": 1469,
    "image": "/assets/products/crypto-reserve-vault.png",
    "description": "Custom staking vault smart contract allowing token holders to lock tokens and earn rewards. Tier #39 custom deployment and architecture package.",
    "features": [
      "Configurable lock periods (30, 60, 90d)",
      "Automated compound interest math",
      "Emergency withdraw safety logic",
      "Full admin management dashboard"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  },
  {
    "id": "prod-dev-040",
    "title": "Token Vesting & Team Lock Smart Contract \u2014 Tier #40",
    "category": "token_creation",
    "priceUsd": 1035,
    "image": "/assets/products/smart-contract-audit.png",
    "description": "Automated linear and cliff token vesting smart contract for team and seed investors. Tier #40 custom deployment and architecture package.",
    "features": [
      "Custom cliff and linear duration",
      "Beneficiary claim portal integration",
      "Immutable time-locked security",
      "Audited OpenZeppelin Vesting standard"
    ],
    "inStock": true,
    "stockCount": 25,
    "isPhysical": false,
    "deliveryEstimate": "24-48 hours deployment turnaround"
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    userName: 'Serena James',
    userRoleOrLocation: 'Private Client, London, UK',
    rating: 5,
    comment: 'I have used several online banking and crypto platforms, but Nile stands out with top-tier security and intuitive design. The crypto card works seamlessly across Europe and transfers settle instantly.',
    productUsed: 'Cards',
    isApproved: true,
    submittedAt: '2026-03-12'
  },
  {
    id: 'test-2',
    userName: 'Boris Elbert',
    userRoleOrLocation: 'Fintech Entrepreneur, Zurich, Switzerland',
    rating: 5,
    comment: 'Opening the NCB account was fast and the compliance verification gave our team immense confidence. Transparent fee structure with no hidden surprises.',
    productUsed: 'NCB',
    isApproved: true,
    submittedAt: '2026-03-24'
  },
  {
    id: 'test-3',
    userName: 'Marcus Sterling',
    userRoleOrLocation: 'Private Collector, Dubai, UAE',
    rating: 5,
    comment: 'Acquired a physical Casascius Bitcoin through the marketplace. The provenance documentation was immaculate and delivery arrived via high-security courier in under 8 days.',
    productUsed: 'Marketplace',
    isApproved: true,
    submittedAt: '2026-04-02'
  },
  {
    id: 'test-4',
    userName: 'Elena Rostova',
    userRoleOrLocation: 'Early Presale Participant, Paris, France',
    rating: 5,
    comment: 'Participating in the NILE Token Presale was smooth. Connecting my wallet, seeing the exact calculation, and checking the vesting schedule on-chain was transparent from day one.',
    productUsed: 'Presale',
    isApproved: true,
    submittedAt: '2026-04-10'
  }
];

export const INITIAL_DEX_TOKENS: DexToken[] = [
  { symbol: 'NILE', name: 'Nile Token', priceUsd: 0.12, change24h: 8.4, iconBg: '#E5B842', balance: 12500 },
  { symbol: 'USDT', name: 'Tether USD', priceUsd: 1.00, change24h: 0.01, iconBg: '#26A17B', balance: 2500 },
  { symbol: 'BTC', name: 'Bitcoin', priceUsd: 68420, change24h: 2.15, iconBg: '#F7931A', balance: 0.45 },
  { symbol: 'ETH', name: 'Ethereum', priceUsd: 3580, change24h: 3.42, iconBg: '#627EEA', balance: 2.8 },
  { symbol: 'BNB', name: 'BNB', priceUsd: 590, change24h: 1.2, iconBg: '#F3BA2F', balance: 4.5 },
  { symbol: 'SOL', name: 'Solana', priceUsd: 178, change24h: 5.6, iconBg: '#9945FF', balance: 14.0 },
  { symbol: 'TRX', name: 'TRON', priceUsd: 0.165, change24h: 0.8, iconBg: '#FF0013', balance: 4200 }
];

export const INITIAL_ADMIN_AUDIT_LOGS: AdminAuditEntry[] = [
  {
    id: 'log-1',
    operator: 'Super Admin (nilecosystem@gmail.com)',
    action: 'SYSTEM_BOOTSTRAP',
    target: 'NILE ECOSYSTEM',
    details: 'Initial corporate verification certificates and multi-chain deposit addresses configured.',
    timestamp: '2026-10-13 18:22:36'
  },
  {
    id: 'log-2',
    operator: 'Finance Operator',
    action: 'PRESALE_INIT',
    target: 'Phase 1: Seed Pioneer',
    details: 'Presale Phase 1 active at $0.05/NILE. Allocation: 50,000,000 NILE.',
    timestamp: '2026-10-13 18:25:10'
  },
  {
    id: 'log-3',
    operator: 'Compliance Officer',
    action: 'KYC_POLICY_UPDATE',
    target: 'Tier 1 & Tier 2 Requirements',
    details: 'Standardized ID Card, Passport & Proof of Address verification workflows enforced.',
    timestamp: '2026-10-13 18:28:44'
  }
];

export const INITIAL_STAKING_POOLS: NileStakingPool[] = [
  {
    id: 'pool-30d',
    title: '30-Day Flexible Staking',
    lockDays: 30,
    baseAprPercent: 12.0,
    multiplier: 1.0,
    minStakeNile: 500,
    totalStakedInPool: 12450000,
    status: 'active',
    earlyUnstakePenaltyPercent: 3.0
  },
  {
    id: 'pool-90d',
    title: '90-Day Strategic Vault',
    lockDays: 90,
    baseAprPercent: 18.0,
    multiplier: 1.25,
    minStakeNile: 2500,
    totalStakedInPool: 28500000,
    status: 'active',
    earlyUnstakePenaltyPercent: 5.0
  },
  {
    id: 'pool-180d',
    title: '180-Day Institutional Reserve',
    lockDays: 180,
    baseAprPercent: 24.0,
    multiplier: 1.5,
    minStakeNile: 10000,
    totalStakedInPool: 45000000,
    status: 'active',
    earlyUnstakePenaltyPercent: 7.5
  },
  {
    id: 'pool-365d',
    title: '365-Day Diamond Multiplier Vault',
    lockDays: 365,
    baseAprPercent: 32.0,
    multiplier: 2.0,
    minStakeNile: 25000,
    totalStakedInPool: 64000000,
    status: 'active',
    earlyUnstakePenaltyPercent: 10.0
  }
];

export const INITIAL_USER_STAKES: NileUserStake[] = [
  {
    id: 'stake-01',
    poolId: 'pool-180d',
    stakedAmountNile: 100000,
    stakedAt: '2026-02-15',
    unlockDate: '2026-08-14',
    claimedRewardsNile: 1250,
    pendingRewardsNile: 3840,
    status: 'active'
  }
];

export const INITIAL_ACHIEVEMENT_BADGES: AchievementBadge[] = [
  {
    id: 'badge-pioneer',
    title: 'Pioneer Referrer',
    description: 'Directly referred 5 or more active KYC-verified participants to the platform.',
    category: 'referrals',
    criteria: '≥ 5 verified referrals',
    rewardBonus: '+0.5% referral commission tier boost',
    iconName: 'Users',
    isUnlocked: true,
    unlockedAt: '2026-02-01'
  },
  {
    id: 'badge-bullion',
    title: 'Bullion Collector',
    description: 'Facilitated or acquired a certified physical Casascius Bitcoin or gold bullion specimen.',
    category: 'marketplace',
    criteria: '1+ physical collectible transaction',
    rewardBonus: 'Zero insurance fee on courier deliveries',
    iconName: 'Award',
    isUnlocked: true,
    unlockedAt: '2026-03-10'
  },
  {
    id: 'badge-highroller',
    title: 'Institutional Whale',
    description: 'Maintained total portfolio or card balance exceeding $50,000 USD.',
    category: 'volume',
    criteria: '≥ $50,000 USD balance/volume',
    rewardBonus: 'Dedicated VIP Concierge desk priority',
    iconName: 'TrendingUp',
    isUnlocked: true,
    unlockedAt: '2026-03-25'
  },
  {
    id: 'badge-community',
    title: 'Community Pillar',
    description: 'Submitted an approved corporate review and shared verified platform insights.',
    category: 'community',
    criteria: '1 approved testimonial',
    rewardBonus: 'Featured badge on public profile',
    iconName: 'Crown',
    isUnlocked: true,
    unlockedAt: '2026-04-01'
  },
  {
    id: 'badge-diamond',
    title: 'Diamond Governance Council',
    description: 'Achieved Diamond rank with over 100 ecosystem referrals and 500,000 NILE staked.',
    category: 'leadership',
    criteria: 'Diamond rank + 500k NILE staked',
    rewardBonus: '5.0% flat cashback & revenue share tier',
    iconName: 'Shield',
    isUnlocked: true,
    unlockedAt: '2026-04-12'
  }
];

export const INITIAL_REFERRAL_TIERS: ReferralTierConfig[] = [
  {
    rank: 'Bronze',
    minReferrals: 0,
    minVolumeUsd: 0,
    tier1CommissionPercent: 3.0,
    tier2CommissionPercent: 1.0,
    tier3CommissionPercent: 0.5,
    cashbackBonusPercent: 0.5,
    perks: ['Standard card issuance', 'Community Discord access'],
    color: '#CD7F32'
  },
  {
    rank: 'Silver',
    minReferrals: 5,
    minVolumeUsd: 5000,
    tier1CommissionPercent: 4.0,
    tier2CommissionPercent: 1.5,
    tier3CommissionPercent: 0.75,
    cashbackBonusPercent: 1.0,
    perks: ['Express KYC priority', 'Reduced internal wire fees'],
    color: '#C0C0C0'
  },
  {
    rank: 'Gold',
    minReferrals: 20,
    minVolumeUsd: 25000,
    tier1CommissionPercent: 5.0,
    tier2CommissionPercent: 2.5,
    tier3CommissionPercent: 1.0,
    cashbackBonusPercent: 1.5,
    perks: ['Complimentary Gold Metal Card', 'Presale Phase priority allocation'],
    color: '#E5B842'
  },
  {
    rank: 'Platinum',
    minReferrals: 50,
    minVolumeUsd: 100000,
    tier1CommissionPercent: 6.5,
    tier2CommissionPercent: 3.0,
    tier3CommissionPercent: 1.5,
    cashbackBonusPercent: 2.0,
    perks: ['Dedicated Account Manager', 'Free insured courier to Schengen & UAE'],
    color: '#E5E4E2'
  },
  {
    rank: 'Diamond',
    minReferrals: 100,
    minVolumeUsd: 500000,
    tier1CommissionPercent: 8.0,
    tier2CommissionPercent: 4.0,
    tier3CommissionPercent: 2.0,
    cashbackBonusPercent: 3.0,
    perks: ['Black Metal Elite Card (Free)', 'Institutional OTC desk access', 'VIP Staking 2.0x Multiplier'],
    color: '#B9F2FF'
  }
];

export const INITIAL_KYC_AML_SESSION: KycAmlProviderSession = {
  sessionId: 'kyc-sess-889124',
  provider: 'Sumsub',
  applicantId: 'appl_6619a82c47f9a1',
  status: 'approved',
  riskScore: 'LOW',
  pepSanctionResult: 'CLEARED',
  ipAddress: '82.165.197.102 (London, UK)',
  deviceFingerprint: 'FP-SHA256-4b829c91f0923e',
  webhookLog: [
    {
      eventId: 'evt-1001',
      event: 'applicant.created',
      timestamp: '2026-01-15 14:10:02',
      payloadSummary: 'Applicant profile registered; Web SDK token issued for client-side document capture.'
    },
    {
      eventId: 'evt-1002',
      event: 'documents.submitted',
      timestamp: '2026-01-15 14:14:28',
      payloadSummary: 'Uploaded UK Passport & Barclays Bank statement. Automated OCR extracted name and DOB.'
    },
    {
      eventId: 'evt-1003',
      event: 'screening.completed',
      timestamp: '2026-01-15 14:15:45',
      payloadSummary: 'Sanctions list (OFAC, UK HMT, EU) screened clean. PEP check CLEARED. Risk Score: LOW.'
    },
    {
      eventId: 'evt-1004',
      event: 'applicant.reviewed',
      timestamp: '2026-01-16 09:00:12',
      payloadSummary: 'Manual compliance review completed. Status upgraded to APPROVED (Tier 3).'
    }
  ]
};

export const INITIAL_MANAGED_CLIENTS: UserProfile[] = [
  {
    id: 'usr-client-002',
    name: 'Alexander Vance',
    email: 'alexander@vance-holdings.ch',
    role: 'user',
    phone: '+41 44 211 4400',
    accountNumber: 'NCB-CH-992104',
    city: 'Zurich',
    country: 'Switzerland',
    kycStatus: 'verified',
    kycTier: 3,
    kycSubmittedAt: '2026-02-28',
    kycApprovedAt: '2026-03-01',
    referralCode: 'VANCE-ZURICH',
    rank: 'Diamond',
    badges: ['badge-pioneer', 'badge-bullion', 'badge-diamond'],
    twoFactorEnabled: true,
    registeredAt: '2026-01-20',
    referralDirectCount: 14,
    referralNetworkCount: 68,
    referralEarningsUsd: 48900,
    clientPanelRequested: true,
    clientPanelRequestDate: '2026-03-01',
    clientPanelRequestReason: 'Requesting Client Panel to configure private $2.5M treasury yield vaults and issue corporate virtual cards for Zurich associates.',
    delegatedPermissions: {
      hasClientPanelAccess: true,
      panelAccessLevel: 'vip_partner',
      approvedByOwnerAt: '2026-03-02',
      approvalNotes: 'Accredited Swiss family office approved by Platform Owner for custom yield vaults & virtual card issuing.',
      canCreateCustomVaults: true,
      canIssueVirtualCards: true,
      canManageSubAffiliates: true,
      canListMarketplaceProducts: false,
      canAccessAdvancedRoiSim: true,
      canExecuteOtcTranches: true,
      canAccessApiKeys: true,
      maxDelegatedDailyLimitUsd: 500000
    }
  },
  {
    id: 'usr-client-003',
    name: 'Elena Rostova',
    email: 'elena@apexcapital.ae',
    role: 'user',
    phone: '+971 4 388 9100',
    accountNumber: 'NCB-UAE-481902',
    city: 'Dubai (DIFC)',
    country: 'United Arab Emirates',
    kycStatus: 'verified',
    kycTier: 3,
    kycSubmittedAt: '2026-02-15',
    kycApprovedAt: '2026-02-18',
    referralCode: 'APEX-DUBAI-26',
    rank: 'Diamond',
    badges: ['badge-pioneer', 'badge-highroller', 'badge-community', 'badge-diamond'],
    twoFactorEnabled: true,
    registeredAt: '2026-01-18',
    referralDirectCount: 32,
    referralNetworkCount: 194,
    referralEarningsUsd: 124500,
    clientPanelRequested: true,
    clientPanelRequestDate: '2026-02-18',
    clientPanelRequestReason: 'Applying for full Delegated Operator permissions to manage regional downline brokers, OTC reserve tranches, and corporate crypto cards.',
    delegatedPermissions: {
      hasClientPanelAccess: true,
      panelAccessLevel: 'delegated_operator',
      approvedByOwnerAt: '2026-02-20',
      approvalNotes: 'Licensed regional UAE broker granted delegated operator controls by Platform Owner.',
      canCreateCustomVaults: true,
      canIssueVirtualCards: true,
      canManageSubAffiliates: true,
      canListMarketplaceProducts: true,
      canAccessAdvancedRoiSim: true,
      canExecuteOtcTranches: true,
      canAccessApiKeys: true,
      maxDelegatedDailyLimitUsd: 1000000
    }
  },
  {
    id: 'usr-client-004',
    name: 'Marcus Thorne',
    email: 'm.thorne@mayfairmerchants.co.uk',
    role: 'user',
    phone: '+44 20 7946 0912',
    accountNumber: 'NCB-UK-110293',
    city: 'London (Mayfair)',
    country: 'United Kingdom',
    kycStatus: 'verified',
    kycTier: 2,
    kycSubmittedAt: '2026-03-02',
    kycApprovedAt: '2026-03-04',
    referralCode: 'MAYFAIR-UK',
    rank: 'Gold',
    badges: ['badge-pioneer', 'badge-bullion'],
    twoFactorEnabled: true,
    registeredAt: '2026-02-01',
    referralDirectCount: 6,
    referralNetworkCount: 22,
    referralEarningsUsd: 14200,
    clientPanelRequested: true,
    clientPanelRequestDate: '2026-03-05',
    clientPanelRequestReason: 'Applying for Marketplace Merchant listing control to sell authenticated Casascius Bitcoins and physical bullion directly through Nile Marketplace.',
    delegatedPermissions: {
      hasClientPanelAccess: false,
      panelAccessLevel: 'standard_investor',
      canCreateCustomVaults: false,
      canIssueVirtualCards: false,
      canManageSubAffiliates: false,
      canListMarketplaceProducts: false,
      canAccessAdvancedRoiSim: true,
      canExecuteOtcTranches: false,
      canAccessApiKeys: false,
      maxDelegatedDailyLimitUsd: 50000
    }
  },
  {
    id: 'usr-client-005',
    name: 'Tariq Al-Mansoor',
    email: 'tariq@almansoor-invest.sa',
    role: 'user',
    phone: '+966 11 482 7700',
    accountNumber: 'NCB-SA-774120',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    kycStatus: 'pending',
    kycTier: 1,
    kycSubmittedAt: '2026-03-10',
    referralCode: 'RIYADH-CAP',
    rank: 'Silver',
    badges: ['badge-pioneer'],
    twoFactorEnabled: false,
    registeredAt: '2026-03-08',
    referralDirectCount: 1,
    referralNetworkCount: 3,
    referralEarningsUsd: 850,
    clientPanelRequested: false,
    delegatedPermissions: {
      hasClientPanelAccess: false,
      panelAccessLevel: 'standard_investor',
      canCreateCustomVaults: false,
      canIssueVirtualCards: false,
      canManageSubAffiliates: false,
      canListMarketplaceProducts: false,
      canAccessAdvancedRoiSim: false,
      canExecuteOtcTranches: false,
      canAccessApiKeys: false,
      maxDelegatedDailyLimitUsd: 10000
    }
  }
];

