let prismaClientInstance = null;

try {
  const { PrismaClient } = require('@prisma/client');
  prismaClientInstance = new PrismaClient();
} catch (err) {
  console.warn('⚠️ [PrismaNotice] Standard @prisma/client initialization deferred. Running resilient engine mode.');
}

if (!prismaClientInstance) {
  const store = {
    users: [
      {
        id: 'usr-admin-founder-001',
        email: 'admin@nileecosystem.com',
        passwordHash: '$2a$10$wTqKj8gJ2C/cQz7K1sFvwefA1H7w4w7.eL5/C5f7iE3fR/QzC3eGy',
        firstName: 'Super',
        lastName: 'Administrator',
        role: 'SUPER_ADMIN',
        kycStatus: 'APPROVED',
        referralCode: 'NILE-FOUNDER',
        referredById: null,
        referralRank: 'DIAMOND',
        preferredLanguage: 'en',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    wallets: [
      { id: 'w-1', userId: 'usr-admin-founder-001', type: 'INTERNAL', currency: 'USDT', balance: 350000.0 },
      { id: 'w-2', userId: 'usr-admin-founder-001', type: 'INTERNAL', currency: 'NILE', balance: 850000.0 },
      { id: 'w-3', userId: 'usr-admin-founder-001', type: 'INVESTMENT', currency: 'USDT', balance: 120000.0 },
      { id: 'w-4', userId: 'usr-admin-founder-001', type: 'REFERRAL', currency: 'USDT', balance: 45000.0 },
      { id: 'w-5', userId: 'usr-admin-founder-001', type: 'SHOP', currency: 'USDT', balance: 15000.0 }
    ],
    deposits: [],
    withdrawals: [],
    investmentPlans: [
      { id: 'plan-1', planType: 'ASSET_BASED', name: 'USDT Quantum Vault', minDeposit: 25.0, dailyProfitPercent: 1.2, lockDays: 0, isActive: true },
      { id: 'plan-2', planType: 'ASSET_BASED', name: 'ETH Guardian Yield', minDeposit: 100.0, dailyProfitPercent: 0.95, lockDays: 0, isActive: true },
      { id: 'plan-3', planType: 'ASSET_BASED', name: 'BTC Reserve Vault', minDeposit: 250.0, dailyProfitPercent: 0.85, lockDays: 0, isActive: true },
      { id: 'plan-4', planType: 'TIME_LOCKED', name: '30-Day Growth Lock', minDeposit: 50.0, lockDays: 30, fixedRewardPercent: 25.0, isActive: true },
      { id: 'plan-5', planType: 'TIME_LOCKED', name: '50-Day Strategic Lock', minDeposit: 100.0, lockDays: 50, fixedRewardPercent: 55.0, isActive: true },
      { id: 'plan-6', planType: 'TIME_LOCKED', name: '100-Day Dynasty Lock', minDeposit: 250.0, lockDays: 100, fixedRewardPercent: 140.0, isActive: true },
      { id: 'plan-7', planType: 'AMOUNT_TIER', name: 'Tier Alpha (10 USDT)', minDeposit: 10.0, dailyProfitPercent: 0.25, lockDays: 0, isActive: true },
      { id: 'plan-8', planType: 'AMOUNT_TIER', name: 'Tier Beta (50 USDT)', minDeposit: 50.0, dailyProfitPercent: 0.75, lockDays: 0, isActive: true },
      { id: 'plan-9', planType: 'AMOUNT_TIER', name: 'Tier Gamma (100 USDT)', minDeposit: 100.0, dailyProfitPercent: 1.5, lockDays: 0, isActive: true },
      { id: 'plan-10', planType: 'AMOUNT_TIER', name: 'Tier Delta (500 USDT)', minDeposit: 500.0, dailyProfitPercent: 3.0, lockDays: 0, isActive: true },
      { id: 'plan-11', planType: 'AMOUNT_TIER', name: 'Tier Epsilon (1,000 USDT)', minDeposit: 1000.0, dailyProfitPercent: 6.0, lockDays: 0, isActive: true },
      { id: 'plan-12', planType: 'AMOUNT_TIER', name: 'Tier Apex (10,000 USDT)', minDeposit: 10000.0, dailyProfitPercent: 12.0, lockDays: 0, isActive: true }
    ],
    userInvestments: [],
    nileStakings: [],
    referralEarnings: [],
    shopProducts: [
      {
            "id": "prod-soft-001",
            "category": "SOFTWARE",
            "title": "Windows 11 Pro Retail License Key",
            "description": "Lifetime authentic digital retail activation key for Windows 11 Professional.",
            "priceUsdt": 15.0,
            "inventoryCount": 100,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Lifetime 1-PC activation\", \"Supports all languages\", \"Direct official Microsoft download\", \"BitLocker encryption & remote desktop\"]}"
      },
      {
            "id": "prod-soft-002",
            "category": "SOFTWARE",
            "title": "Windows 10 Pro Retail License Key",
            "description": "Lifetime authentic digital retail activation key for Windows 10 Professional.",
            "priceUsdt": 12.0,
            "inventoryCount": 105,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Instant digital key delivery\", \"Direct Microsoft ISO download\", \"Lifetime activation guarantee\", \"Free upgrade to Windows 11\"]}"
      },
      {
            "id": "prod-soft-003",
            "category": "SOFTWARE",
            "title": "Windows Server 2022 Datacenter 16-Core",
            "description": "Enterprise server operating system with unlimited virtual instances and shielded VMs.",
            "priceUsdt": 99.0,
            "inventoryCount": 110,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"16-Core license entitlement\", \"Unlimited Hyper-V containers\", \"Software-defined networking\", \"Storage Spaces Direct\"]}"
      },
      {
            "id": "prod-soft-004",
            "category": "SOFTWARE",
            "title": "Microsoft Office 2024 Professional Plus",
            "description": "Full suite lifetime digital license for Word, Excel, PowerPoint, Outlook & Access.",
            "priceUsdt": 29.0,
            "inventoryCount": 115,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/office-2024-enterprise.png\", \"features\": [\"Lifetime validity on 1 PC\", \"Full 2024 offline suite\", \"Word, Excel, PowerPoint, Access, Outlook\", \"Commercial enterprise license\"]}"
      },
      {
            "id": "prod-soft-005",
            "category": "SOFTWARE",
            "title": "Microsoft Office 2021 Professional Plus",
            "description": "Official lifetime activation key for Microsoft Office 2021 Professional Plus.",
            "priceUsdt": 24.0,
            "inventoryCount": 120,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/office-2024-enterprise.png\", \"features\": [\"Instant digital dispatch\", \"Full desktop applications\", \"No monthly subscription fees\", \"Multilingual global support\"]}"
      },
      {
            "id": "prod-soft-006",
            "category": "SOFTWARE",
            "title": "Microsoft Office 365 Family 1-Year (6 Users)",
            "description": "1-Year authentic subscription for up to 6 accounts with 6TB total cloud storage.",
            "priceUsdt": 45.0,
            "inventoryCount": 125,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/office-2024-enterprise.png\", \"features\": [\"6 separate user accounts\", \"1TB OneDrive cloud storage per user\", \"Access on PC, Mac, iPad & Android\", \"Premium Word, Excel & Copilot\"]}"
      },
      {
            "id": "prod-soft-007",
            "category": "SOFTWARE",
            "title": "Microsoft Project Professional 2024",
            "description": "Advanced project management, Gantt resource scheduling and portfolio budgeting.",
            "priceUsdt": 39.0,
            "inventoryCount": 130,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/office-2024-enterprise.png\", \"features\": [\"Pre-built project templates\", \"Resource allocation heatmaps\", \"Automated scheduling engine\", \"Lifetime perpetual retail license\"]}"
      },
      {
            "id": "prod-soft-008",
            "category": "SOFTWARE",
            "title": "Microsoft Visio Professional 2024",
            "description": "Professional diagramming, engineering schematics, flowcharts and network topologies.",
            "priceUsdt": 35.0,
            "inventoryCount": 135,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/office-2024-enterprise.png\", \"features\": [\"Extensive shape libraries\", \"Link diagrams to live Excel data\", \"BPMN 2.0 & UML compliance\", \"Lifetime digital retail key\"]}"
      },
      {
            "id": "prod-soft-009",
            "category": "SOFTWARE",
            "title": "JetBrains All Products Pack (1-Year Commercial)",
            "description": "Full professional commercial suite including IntelliJ IDEA, PyCharm, WebStorm, CLion & GoLand.",
            "priceUsdt": 189.0,
            "inventoryCount": 140,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/jetbrains-all-products-pack.png\", \"features\": [\"Includes all 16 JetBrains IDEs\", \"Commercial deployment license\", \"Cross-platform Mac, Windows, Linux\", \"Continuous version updates\"]}"
      },
      {
            "id": "prod-soft-010",
            "category": "SOFTWARE",
            "title": "IntelliJ IDEA Ultimate 1-Year Subscription",
            "description": "Industry leading Java, Kotlin & Full-Stack IDE with enterprise framework tools.",
            "priceUsdt": 89.0,
            "inventoryCount": 145,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/jetbrains-all-products-pack.png\", \"features\": [\"Full Spring & Jakarta EE support\", \"Database tools & SQL client\", \"Advanced profiling & remote dev\", \"Instant license activation\"]}"
      },
      {
            "id": "prod-soft-011",
            "category": "SOFTWARE",
            "title": "PyCharm Professional 1-Year Subscription",
            "description": "Premier Python IDE for data science, web development with Django & FastAPI.",
            "priceUsdt": 79.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/jetbrains-all-products-pack.png\", \"features\": [\"Jupyter Notebook integration\", \"Scientific tools & interactive plots\", \"Docker & Kubernetes container support\", \"Commercial license key\"]}"
      },
      {
            "id": "prod-soft-012",
            "category": "SOFTWARE",
            "title": "WebStorm 1-Year Commercial License",
            "description": "Smartest JavaScript & TypeScript IDE with React, Vue, Angular and Node.js support.",
            "priceUsdt": 59.0,
            "inventoryCount": 155,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/jetbrains-all-products-pack.png\", \"features\": [\"Built-in debugger & test runner\", \"Git version control integration\", \"Intelligent code completion\", \"Official JetBrains activation\"]}"
      },
      {
            "id": "prod-soft-013",
            "category": "SOFTWARE",
            "title": "GoLand 1-Year Commercial License",
            "description": "Ergonomic Go (Golang) IDE with code inspection, refactorings and debugger.",
            "priceUsdt": 69.0,
            "inventoryCount": 160,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/jetbrains-all-products-pack.png\", \"features\": [\"Deep Go syntax analysis\", \"On-the-fly error detection\", \"Built-in test runner & profiler\", \"Commercial seat assignment\"]}"
      },
      {
            "id": "prod-soft-014",
            "category": "SOFTWARE",
            "title": "CLion 1-Year Commercial C/C++ IDE",
            "description": "Powerful cross-platform C and C++ IDE with CMake, embedded development and static analysis.",
            "priceUsdt": 79.0,
            "inventoryCount": 165,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/jetbrains-all-products-pack.png\", \"features\": [\"CMake, Makefiles & Gradle support\", \"Embedded debugging with GDB/LLDB\", \"Memory profiling integration\", \"Cross-platform license\"]}"
      },
      {
            "id": "prod-soft-015",
            "category": "SOFTWARE",
            "title": "Rider 1-Year .NET & Game Dev License",
            "description": "Fast, powerful cross-platform .NET IDE with Unity and Unreal Engine support.",
            "priceUsdt": 79.0,
            "inventoryCount": 170,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/jetbrains-all-products-pack.png\", \"features\": [\"C#, F#, VB.NET & ASP.NET Core\", \"Unity & Unreal Engine game tooling\", \"ReSharper engine integrated\", \"Commercial license key\"]}"
      },
      {
            "id": "prod-soft-016",
            "category": "SOFTWARE",
            "title": "DataGrip 1-Year Database IDE License",
            "description": "Multi-engine database environment supporting Postgres, MySQL, Oracle, SQL Server, Mongo.",
            "priceUsdt": 59.0,
            "inventoryCount": 175,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/jetbrains-all-products-pack.png\", \"features\": [\"Smart query console\", \"Visual schema comparison\", \"VCS integration for migrations\", \"Export to CSV, JSON, Markdown\"]}"
      },
      {
            "id": "prod-soft-017",
            "category": "SOFTWARE",
            "title": "NordVPN 2-Year Dedicated IP & VPN Access",
            "description": "Premium high-speed VPN with dedicated obfuscated servers, double encryption and no-logs.",
            "priceUsdt": 49.0,
            "inventoryCount": 180,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Dedicated private IP address\", \"Threat Protection & ad blocker\", \"Double VPN & Onion over VPN\", \"High-speed 10Gbps servers across 111 countries\"]}"
      },
      {
            "id": "prod-soft-018",
            "category": "SOFTWARE",
            "title": "ExpressVPN 1-Year Ultra-Fast Subscription",
            "description": "Lightning fast Lightway protocol VPN with trusted RAM-only server infrastructure.",
            "priceUsdt": 59.0,
            "inventoryCount": 185,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Unlimited bandwidth\", \"Servers across 105 countries\", \"Strict certified no-log policy\", \"24/7 priority customer service\"]}"
      },
      {
            "id": "prod-soft-019",
            "category": "SOFTWARE",
            "title": "Surfshark VPN 2-Year Unlimited Devices",
            "description": "Unlimited simultaneous devices with CleanWeb, MultiHop and rotating IP.",
            "priceUsdt": 39.0,
            "inventoryCount": 190,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Unlimited connections\", \"CleanWeb malware & ad blocker\", \"Camouflage mode & Kill Switch\", \"Independent audit certified\"]}"
      },
      {
            "id": "prod-soft-020",
            "category": "SOFTWARE",
            "title": "CyberGhost VPN 3-Year Secure Access",
            "description": "Optimized streaming and peer-to-peer torrenting servers with military grade AES-256.",
            "priceUsdt": 42.0,
            "inventoryCount": 195,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Over 9,000 servers worldwide\", \"WireGuard high-speed protocol\", \"Automated Kill Switch protection\", \"Dedicated NoSpy server access\"]}"
      },
      {
            "id": "prod-soft-021",
            "category": "SOFTWARE",
            "title": "Mullvad VPN 1-Year Anonymous Token",
            "description": "Privacy-first VPN with account numbers only, zero email, and WireGuard cryptography.",
            "priceUsdt": 55.0,
            "inventoryCount": 200,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Zero personal details required\", \"WireGuard & OpenVPN protocols\", \"Port forwarding enabled\", \"Transparent open-source clients\"]}"
      },
      {
            "id": "prod-soft-022",
            "category": "SOFTWARE",
            "title": "Proton VPN Plus 2-Year Privacy Suite",
            "description": "Swiss privacy-protected VPN with Secure Core underground servers and Tor integration.",
            "priceUsdt": 69.0,
            "inventoryCount": 205,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Swiss jurisdiction privacy laws\", \"Secure Core routed servers\", \"10Gbps server network\", \"NetShield DNS filtering\"]}"
      },
      {
            "id": "prod-soft-023",
            "category": "SOFTWARE",
            "title": "ChatGPT Plus 3-Month Priority Voucher",
            "description": "Direct subscription activation code for OpenAI ChatGPT Plus with GPT-4o and DALL-E 3.",
            "priceUsdt": 58.0,
            "inventoryCount": 210,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ai-tools-subscription-voucher.png\", \"features\": [\"GPT-4o unlimited reasoning\", \"DALL-E 3 image generation\", \"Advanced Voice mode access\", \"Custom GPT builder enabled\"]}"
      },
      {
            "id": "prod-soft-024",
            "category": "SOFTWARE",
            "title": "ChatGPT Team 6-Month Commercial Seat",
            "description": "Collaborative ChatGPT workspace with higher rate limits and zero data training.",
            "priceUsdt": 149.0,
            "inventoryCount": 215,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ai-tools-subscription-voucher.png\", \"features\": [\"Zero model training on data\", \"Admin workspace console\", \"Shared GPTs & analytics\", \"Unlimited GPT-4o access\"]}"
      },
      {
            "id": "prod-soft-025",
            "category": "SOFTWARE",
            "title": "Claude Pro 3-Month Enterprise Voucher",
            "description": "Priority access code for Anthropic Claude 3.5 Sonnet with 200k context window.",
            "priceUsdt": 58.0,
            "inventoryCount": 220,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ai-tools-subscription-voucher.png\", \"features\": [\"Claude 3.5 Sonnet priority access\", \"5x higher usage caps\", \"Artifacts interactive workspace\", \"Fast response times during peak hours\"]}"
      },
      {
            "id": "prod-soft-026",
            "category": "SOFTWARE",
            "title": "Midjourney Pro Plan 1-Month Voucher",
            "description": "Full stealth mode image generation with 30 fast GPU hours and unlimited relaxed generations.",
            "priceUsdt": 55.0,
            "inventoryCount": 225,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ai-tools-subscription-voucher.png\", \"features\": [\"Stealth mode generation\", \"30 Fast GPU hours per month\", \"Unlimited Relaxed GPU generations\", \"Commercial usage rights\"]}"
      },
      {
            "id": "prod-soft-027",
            "category": "SOFTWARE",
            "title": "Midjourney Standard Plan 1-Month Code",
            "description": "15 Fast GPU hours per month with unlimited relaxed generations and full commercial license.",
            "priceUsdt": 29.0,
            "inventoryCount": 230,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ai-tools-subscription-voucher.png\", \"features\": [\"15 Fast GPU hours\", \"Unlimited Relaxed generation\", \"General commercial terms\", \"Direct Discord activation\"]}"
      },
      {
            "id": "prod-soft-028",
            "category": "SOFTWARE",
            "title": "Cursor AI Pro 1-Year Commercial License",
            "description": "Next-generation AI-first code editor built on VS Code with Claude 3.5 Sonnet integration.",
            "priceUsdt": 160.0,
            "inventoryCount": 235,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ai-tools-subscription-voucher.png\", \"features\": [\"Fast model requests\", \"Multi-file codebase indexing\", \"Instant diff application\", \"Commercial developer license\"]}"
      },
      {
            "id": "prod-soft-029",
            "category": "SOFTWARE",
            "title": "GitHub Copilot Individual 1-Year License",
            "description": "AI pair programmer supporting all modern IDEs with real-time autocompletion.",
            "priceUsdt": 85.0,
            "inventoryCount": 240,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/jetbrains-all-products-pack.png\", \"features\": [\"Real-time code suggestions\", \"Copilot Chat in editor & CLI\", \"Multi-language intelligence\", \"Commercial use permitted\"]}"
      },
      {
            "id": "prod-soft-030",
            "category": "SOFTWARE",
            "title": "Perplexity Pro 1-Year Research Subscription",
            "description": "Real-time AI research engine with multi-model queries (Claude 3.5, GPT-4o, Sonar).",
            "priceUsdt": 99.0,
            "inventoryCount": 245,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ai-tools-subscription-voucher.png\", \"features\": [\"Unlimited Pro searches\", \"Selectable frontier AI models\", \"File upload & data analysis\", \"$5 monthly API credits included\"]}"
      },
      {
            "id": "prod-soft-031",
            "category": "SOFTWARE",
            "title": "Runway Gen-3 Alpha 1-Year Creative Sub",
            "description": "Photorealistic AI video generation with motion brush, camera control and gen-3 alpha.",
            "priceUsdt": 180.0,
            "inventoryCount": 250,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ai-tools-subscription-voucher.png\", \"features\": [\"High-definition video generation\", \"Gen-3 Alpha model access\", \"Remove watermark & upscale 4K\", \"Full commercial ownership\"]}"
      },
      {
            "id": "prod-soft-032",
            "category": "SOFTWARE",
            "title": "ElevenLabs Creator 3-Month Voice License",
            "description": "High-fidelity AI voice cloning and speech synthesis with emotional nuance.",
            "priceUsdt": 59.0,
            "inventoryCount": 255,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ai-tools-subscription-voucher.png\", \"features\": [\"Instant voice cloning\", \"Commercial license included\", \"100,000 characters per month\", \"Low-latency API access\"]}"
      },
      {
            "id": "prod-soft-033",
            "category": "SOFTWARE",
            "title": "Visual Studio 2022 Enterprise License",
            "description": "Comprehensive enterprise IDE for complex architecture, load testing and diagnostics.",
            "priceUsdt": 199.0,
            "inventoryCount": 260,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Advanced IntelliTrace & diagnostics\", \"Live Unit Testing & CodeLens\", \"Architectural dependency diagrams\", \"Official Microsoft digital retail key\"]}"
      },
      {
            "id": "prod-soft-034",
            "category": "SOFTWARE",
            "title": "Docker Desktop Pro 1-Year Subscription",
            "description": "Commercial Docker container development license with Docker Scout vulnerability insights.",
            "priceUsdt": 69.0,
            "inventoryCount": 265,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/jetbrains-all-products-pack.png\", \"features\": [\"Unlimited local container dev\", \"Docker Scout container analysis\", \"5 concurrent private builds\", \"Commercial business compliance\"]}"
      },
      {
            "id": "prod-soft-035",
            "category": "SOFTWARE",
            "title": "VMware Workstation Pro 17 Lifetime License",
            "description": "Industry standard desktop hypervisor for running multiple x86 operating systems.",
            "priceUsdt": 75.0,
            "inventoryCount": 270,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Run Windows, Linux & macOS VMs\", \"DirectX 11 & OpenGL 4.3 3D support\", \"Restricted & encrypted virtual machines\", \"Lifetime perpetual activation\"]}"
      },
      {
            "id": "prod-soft-036",
            "category": "SOFTWARE",
            "title": "VMware Fusion Pro 13 Lifetime for Mac",
            "description": "Desktop hypervisor for Apple Silicon M1/M2/M3 running Windows 11 ARM and Linux.",
            "priceUsdt": 75.0,
            "inventoryCount": 275,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Optimized for Apple Silicon\", \"Fast Windows 11 ARM virtualization\", \"DirectX 11 3D hardware acceleration\", \"Lifetime perpetual key\"]}"
      },
      {
            "id": "prod-soft-037",
            "category": "SOFTWARE",
            "title": "Tableau Desktop 1-Year Creator License",
            "description": "Enterprise visual business analytics, dashboard creation and interactive data exploration.",
            "priceUsdt": 249.0,
            "inventoryCount": 280,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Live & in-memory data connections\", \"Interactive storytelling dashboards\", \"Advanced statistical calculations\", \"Direct data export to web & cloud\"]}"
      },
      {
            "id": "prod-soft-038",
            "category": "SOFTWARE",
            "title": "Navicat Premium 16 Perpetual License",
            "description": "Universal multi-database GUI connecting MySQL, PostgreSQL, SQLite, Oracle, MongoDB.",
            "priceUsdt": 129.0,
            "inventoryCount": 285,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Simultaneous multi-db connection\", \"Data modeling & visual query builder\", \"Data sync & migration tools\", \"Lifetime commercial license\"]}"
      },
      {
            "id": "prod-soft-039",
            "category": "SOFTWARE",
            "title": "Postman Professional 1-Year License",
            "description": "Complete API development platform with mock servers, automated testing and monitors.",
            "priceUsdt": 99.0,
            "inventoryCount": 290,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Team API collaboration\", \"Automated collection runner\", \"API documentation generation\", \"Commercial enterprise seat\"]}"
      },
      {
            "id": "prod-soft-040",
            "category": "SOFTWARE",
            "title": "1Password Families 1-Year Digital Subscription",
            "description": "Encrypted vault password manager for up to 5 family members with Watchtower breach alerts.",
            "priceUsdt": 39.0,
            "inventoryCount": 295,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Up to 5 family member accounts\", \"Secret Key end-to-end encryption\", \"Watchtower compromised site alerts\", \"Cross-device automatic autofill\"]}"
      },
      {
            "id": "prod-soft-041",
            "category": "SOFTWARE",
            "title": "Bitdefender Total Security 2-Year (5 Devices)",
            "description": "Complete multi-layer ransomware protection, firewall, anti-phishing and secure banking.",
            "priceUsdt": 35.0,
            "inventoryCount": 300,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Protection for 5 PC, Mac, iOS, Android\", \"Zero performance impact\", \"Multi-layer ransomware protection\", \"Secure VPN and banking browser\"]}"
      },
      {
            "id": "prod-soft-042",
            "category": "SOFTWARE",
            "title": "Kaspersky Total Security 2-Year License",
            "description": "Comprehensive cybersecurity suite with antivirus, privacy protection and safe money.",
            "priceUsdt": 34.0,
            "inventoryCount": 305,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Real-time threat detection\", \"Safe Money financial protection\", \"Parental controls & GPS tracker\", \"Fast cloud-based database\"]}"
      },
      {
            "id": "prod-soft-043",
            "category": "SOFTWARE",
            "title": "Malwarebytes Premium 2-Year (3 Devices)",
            "description": "Smarter real-time threat defense against zero-day exploits, adware and spyware.",
            "priceUsdt": 32.0,
            "inventoryCount": 310,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Real-time ransomware shielding\", \"Malicious website blocking\", \"Exploit protection engine\", \"Lightweight background performance\"]}"
      },
      {
            "id": "prod-soft-044",
            "category": "SOFTWARE",
            "title": "Adobe Creative Cloud All Apps 1-Year Voucher",
            "description": "Full suite containing Photoshop, Illustrator, Premiere Pro, After Effects, InDesign.",
            "priceUsdt": 280.0,
            "inventoryCount": 315,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"20+ creative applications\", \"100GB Adobe cloud storage\", \"Adobe Fonts library access\", \"Direct Adobe account activation\"]}"
      },
      {
            "id": "prod-soft-045",
            "category": "SOFTWARE",
            "title": "Adobe Photoshop 2024 Perpetual Commercial Key",
            "description": "Professional raster graphics editor with Generative Fill and advanced neural filters.",
            "priceUsdt": 89.0,
            "inventoryCount": 320,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Generative AI tools included\", \"Advanced layer masking & retouching\", \"RAW camera profile support\", \"Perpetual lifetime license\"]}"
      },
      {
            "id": "prod-soft-046",
            "category": "SOFTWARE",
            "title": "Adobe Illustrator 2024 Perpetual License",
            "description": "Industry standard vector graphics and illustration software for logos, icons and typography.",
            "priceUsdt": 89.0,
            "inventoryCount": 325,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Generative Recolor vector AI\", \"Precision vector anchor controls\", \"Cross-format SVG & PDF export\", \"Commercial lifetime activation\"]}"
      },
      {
            "id": "prod-soft-047",
            "category": "SOFTWARE",
            "title": "Adobe Premiere Pro 2024 Perpetual License",
            "description": "Industry leading video production and editing software with speech-to-text auto-captions.",
            "priceUsdt": 99.0,
            "inventoryCount": 330,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"4K, 8K & VR video editing\", \"Lumetri color grading tools\", \"Essential Sound audio cleanup\", \"Perpetual commercial activation\"]}"
      },
      {
            "id": "prod-soft-048",
            "category": "SOFTWARE",
            "title": "Adobe After Effects 2024 Perpetual Key",
            "description": "Cinematic visual effects, motion graphics compositing and kinetic typography.",
            "priceUsdt": 99.0,
            "inventoryCount": 335,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"3D camera tracker & rotoscoping\", \"Advanced particle systems\", \"Seamless Premiere Pro Dynamic Link\", \"Perpetual lifetime key\"]}"
      },
      {
            "id": "prod-soft-049",
            "category": "SOFTWARE",
            "title": "DaVinci Resolve Studio 19 Lifetime License",
            "description": "Hollywood color grading, professional visual effects, Fairlight audio and 8K editing.",
            "priceUsdt": 195.0,
            "inventoryCount": 340,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"DaVinci Neural Engine AI tools\", \"Multi-user collaboration tools\", \"Advanced HDR grading palettes\", \"Official Blackmagic license key\"]}"
      },
      {
            "id": "prod-soft-050",
            "category": "SOFTWARE",
            "title": "Ableton Live 12 Suite Perpetual License",
            "description": "Flagship digital audio workstation for music production, sound design and live performance.",
            "priceUsdt": 249.0,
            "inventoryCount": 345,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Includes 71GB sound library\", \"Max for Live programming suite\", \"Advanced MIDI generation tools\", \"Lifetime transferable license\"]}"
      },
      {
            "id": "prod-soft-051",
            "category": "SOFTWARE",
            "title": "FL Studio 21 Signature Edition Perpetual Key",
            "description": "Complete music production environment with lifetime free future updates included.",
            "priceUsdt": 149.0,
            "inventoryCount": 350,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Lifetime free updates included\", \"Full audio recording & editing\", \"NewTone & Pitcher vocal tools\", \"Official Image-Line activation\"]}"
      },
      {
            "id": "prod-soft-052",
            "category": "SOFTWARE",
            "title": "Logic Pro Lifetime License for macOS",
            "description": "Apple professional recording studio DAW with Spatial Audio authoring and Dolby Atmos.",
            "priceUsdt": 149.0,
            "inventoryCount": 355,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Over 5,900 instruments & effects\", \"Alchemy multi-sample synthesizer\", \"Live Loops non-linear composition\", \"Official Mac App Store redemption\"]}"
      },
      {
            "id": "prod-soft-053",
            "category": "SOFTWARE",
            "title": "Sublime Text 4 Perpetual Commercial License",
            "description": "Sophisticated text editor for code, markup and prose with GPU hardware acceleration.",
            "priceUsdt": 65.0,
            "inventoryCount": 360,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"GPU accelerated rendering\", \"Context-aware autocomplete\", \"Multiple tab selection\", \"Commercial multi-platform seat\"]}"
      },
      {
            "id": "prod-soft-054",
            "category": "SOFTWARE",
            "title": "Proxifier 4 Perpetual Corporate License",
            "description": "Advanced proxy client routing network traffic of any program through SOCKS or HTTPS.",
            "priceUsdt": 25.0,
            "inventoryCount": 365,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/nordvpn-expressvpn-security.png\", \"features\": [\"Route any app through proxy chains\", \"Flexible rule-based routing\", \"DNS over proxy support\", \"Lifetime commercial key\"]}"
      },
      {
            "id": "prod-soft-055",
            "category": "SOFTWARE",
            "title": "CleanMyMac X Lifetime License (2 Macs)",
            "description": "Premier system optimizer, junk file cleaner and malware remover for Apple macOS.",
            "priceUsdt": 39.0,
            "inventoryCount": 370,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Speed up macOS performance\", \"Deep uninstaller & updater\", \"Privacy history cleaner\", \"Official MacPaw lifetime license\"]}"
      },
      {
            "id": "prod-soft-056",
            "category": "SOFTWARE",
            "title": "BetterTouchTool Lifetime License (2 Devices)",
            "description": "Custom gesture mapping, window snapping and Touch Bar customization for macOS.",
            "priceUsdt": 19.0,
            "inventoryCount": 375,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Custom trackpad gestures\", \"Window snapping & tiling\", \"Keyboard shortcut remapping\", \"Lifetime software upgrades\"]}"
      },
      {
            "id": "prod-soft-057",
            "category": "SOFTWARE",
            "title": "Alfred 5 Powerpack Single License",
            "description": "Award-winning macOS productivity booster with custom automated workflows and clipboard history.",
            "priceUsdt": 29.0,
            "inventoryCount": 380,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Custom workflow automation\", \"Full clipboard history manager\", \"System command integration\", \"Lifetime single user license\"]}"
      },
      {
            "id": "prod-soft-058",
            "category": "SOFTWARE",
            "title": "Parallels Desktop 19 Pro 1-Year License",
            "description": "Run Windows on Mac seamlessly without rebooting, optimized for Apple Silicon M-series.",
            "priceUsdt": 79.0,
            "inventoryCount": 385,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Coherence mode Windows on Mac\", \"DirectX 11 3D graphics boost\", \"Up to 128GB vRAM allocation\", \"Official Parallels commercial key\"]}"
      },
      {
            "id": "prod-soft-059",
            "category": "SOFTWARE",
            "title": "Autodesk AutoCAD 2024 1-Year Commercial Sub",
            "description": "Premier computer-aided design CAD software for 2D drafting and 3D architectural modeling.",
            "priceUsdt": 399.0,
            "inventoryCount": 390,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"Industry-specific toolsets\", \"Web & mobile drawing access\", \"Parametric 3D solid modeling\", \"Direct Autodesk account provisioning\"]}"
      },
      {
            "id": "prod-soft-060",
            "category": "SOFTWARE",
            "title": "SketchUp Pro 2024 1-Year Commercial License",
            "description": "Intuitive 3D modeling software for architecture, interior design and civil engineering.",
            "priceUsdt": 199.0,
            "inventoryCount": 395,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/software-license-box.png\", \"features\": [\"LayOut 2D documentation tool\", \"3D Warehouse model library\", \"BIM IFC export support\", \"Official commercial subscription\"]}"
      },
      {
            "id": "prod-card-001",
            "category": "CARDS",
            "title": "Nile Platinum Virtual Visa (Reloadable 3DS) \u2014 Standard (Limit $5,000)",
            "description": "Instant reloadable 3D Secure virtual card for international Web3 & e-commerce payments. Tier level Standard with adjusted monthly limit of $5,000 USD.",
            "priceUsdt": 25.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $5,000\", \"Compatible with Apple Pay & Google Pay\", \"Zero international transaction fees\", \"Instant issuance upon order\"]}"
      },
      {
            "id": "prod-card-002",
            "category": "CARDS",
            "title": "Nile Gold Commercial Mastercard ($25,000 Limit) \u2014 Plus (Limit $10,000)",
            "description": "High-tier reloadable Mastercard with dedicated sub-account for online subscriptions and corporate ads. Tier level Plus with adjusted monthly limit of $10,000 USD.",
            "priceUsdt": 52.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gold-mastercard-card.png\", \"features\": [\"Monthly spending ceiling: $10,000\", \"Meta & Google Ads approved\", \"Instant freeze/unfreeze controls\", \"Multicurrency balance in USD & EUR\"]}"
      },
      {
            "id": "prod-card-003",
            "category": "CARDS",
            "title": "Nile Black Metal Corporate Executive Card ($100,000 Limit) \u2014 Pro (Limit $15,000)",
            "description": "Ultra-exclusive 18-gram matte black stainless steel executive card with private banking IBAN. Tier level Pro with adjusted monthly limit of $15,000 USD.",
            "priceUsdt": 203.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $15,000\", \"Dedicated private banking IBAN\", \"Global airport lounge access (Priority Pass)\", \"Laser engraved custom cardholder name\"]}"
      },
      {
            "id": "prod-card-004",
            "category": "CARDS",
            "title": "Nile Anonymous Prepaid Visa Card ($500 Balance Included) \u2014 Executive (Limit $20,000)",
            "description": "Unregistered non-reloadable prepaid virtual Visa pre-funded with $500 balance for confidential checkout. Tier level Executive with adjusted monthly limit of $20,000 USD.",
            "priceUsdt": 555.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $20,000\", \"No name registration required\", \"Accepted at 40M+ merchants worldwide\", \"Instant card details dispatch\"]}"
      },
      {
            "id": "prod-card-005",
            "category": "CARDS",
            "title": "Nile Anonymous Prepaid Visa Card ($1,000 Balance Included) \u2014 Apex (Limit $25,000)",
            "description": "Confidential prepaid debit card pre-loaded with $1,000 balance for private high-ticket shopping. Tier level Apex with adjusted monthly limit of $25,000 USD.",
            "priceUsdt": 1088.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $25,000\", \"Zero identity linking required\", \"Valid for 24 months globally\", \"Instant credential delivery\"]}"
      },
      {
            "id": "prod-card-006",
            "category": "CARDS",
            "title": "Nile Web3 Crypto Spend Card (Direct Wallet Linked) \u2014 Standard (Limit $30,000)",
            "description": "Spend USDT, USDC, BTC, ETH directly at point of sale with real-time zero-slippage conversion. Tier level Standard with adjusted monthly limit of $30,000 USD.",
            "priceUsdt": 55.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $30,000\", \"Real-time crypto-to-fiat conversion\", \"Up to 3% crypto cashback in NILE tokens\", \"Virtual card instantly ready in mobile app\"]}"
      },
      {
            "id": "prod-card-007",
            "category": "CARDS",
            "title": "Nile Metal Gold Bullion Card (24K Gold Plated) \u2014 Plus (Limit $35,000)",
            "description": "Heavy metallic 24K gold plated Mastercard linked to Nile Crypto Bank treasury ledger. Tier level Plus with adjusted monthly limit of $35,000 USD.",
            "priceUsdt": 161.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $35,000\", \"Complimentary insured worldwide courier\", \"Zero foreign exchange surcharge\", \"High ATM cash withdrawal limits\"]}"
      },
      {
            "id": "prod-card-008",
            "category": "CARDS",
            "title": "Nile Unlimited Virtual Card Pack (5 Cards) \u2014 Pro (Limit $40,000)",
            "description": "Package of 5 separate virtual Visa cards with individual card numbers and billing addresses. Tier level Pro with adjusted monthly limit of $40,000 USD.",
            "priceUsdt": 113.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $40,000\", \"Individual spending limits per card\", \"One-click burner card regeneration\", \"Perfect for multi-account media buying\"]}"
      },
      {
            "id": "prod-card-009",
            "category": "CARDS",
            "title": "Nile Media Buyer Pro Card Pack (15 Cards) \u2014 Executive (Limit $45,000)",
            "description": "Fleet of 15 high-limit commercial cards optimized for TikTok, Facebook, Google and Twitter ads. Tier level Executive with adjusted monthly limit of $45,000 USD.",
            "priceUsdt": 265.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $45,000\", \"High authorization pass rate\", \"Centralized budget allocation panel\", \"Automatic billing statement exports\"]}"
      },
      {
            "id": "prod-card-010",
            "category": "CARDS",
            "title": "Nile Private Banking Debit Card (UK Sort Code & Account) \u2014 Apex (Limit $50,000)",
            "description": "Personal UK Sort Code and Account Number with Faster Payments and SEPA instant transfer. Tier level Apex with adjusted monthly limit of $50,000 USD.",
            "priceUsdt": 138.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $50,000\", \"Faster Payments 1-minute settlement\", \"SEPA EUR instant transfer support\", \"Physical chip & PIN contactless card\"]}"
      },
      {
            "id": "prod-card-011",
            "category": "CARDS",
            "title": "Nile Swiss Private Banking IBAN Card \u2014 Standard (Limit $5,000)",
            "description": "Swiss domiciled multicurrency IBAN card with dedicated CH account credentials. Tier level Standard with adjusted monthly limit of $5,000 USD.",
            "priceUsdt": 200.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $5,000\", \"Supports CHF, EUR, USD, GBP\", \"Top-tier Swiss banking compliance\", \"Contactless metal debit card\"]}"
      },
      {
            "id": "prod-card-012",
            "category": "CARDS",
            "title": "Nile Titanium Crypto Reserve Card ($250,000 Limit) \u2014 Plus (Limit $10,000)",
            "description": "Aerospace grade titanium physical card tailored for high-net-worth liquidity holders. Tier level Plus with adjusted monthly limit of $10,000 USD.",
            "priceUsdt": 321.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $10,000\", \"Handcrafted solid aerospace titanium\", \"24/7 dedicated private wealth concierge\", \"Global medical & travel insurance included\"]}"
      },
      {
            "id": "prod-card-013",
            "category": "CARDS",
            "title": "Nile Platinum Virtual Visa (Reloadable 3DS) \u2014 Pro (Limit $15,000)",
            "description": "Instant reloadable 3D Secure virtual card for international Web3 & e-commerce payments. Tier level Pro with adjusted monthly limit of $15,000 USD.",
            "priceUsdt": 49.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $15,000\", \"Compatible with Apple Pay & Google Pay\", \"Zero international transaction fees\", \"Instant issuance upon order\"]}"
      },
      {
            "id": "prod-card-014",
            "category": "CARDS",
            "title": "Nile Gold Commercial Mastercard ($25,000 Limit) \u2014 Executive (Limit $20,000)",
            "description": "High-tier reloadable Mastercard with dedicated sub-account for online subscriptions and corporate ads. Tier level Executive with adjusted monthly limit of $20,000 USD.",
            "priceUsdt": 76.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gold-mastercard-card.png\", \"features\": [\"Monthly spending ceiling: $20,000\", \"Meta & Google Ads approved\", \"Instant freeze/unfreeze controls\", \"Multicurrency balance in USD & EUR\"]}"
      },
      {
            "id": "prod-card-015",
            "category": "CARDS",
            "title": "Nile Black Metal Corporate Executive Card ($100,000 Limit) \u2014 Apex (Limit $25,000)",
            "description": "Ultra-exclusive 18-gram matte black stainless steel executive card with private banking IBAN. Tier level Apex with adjusted monthly limit of $25,000 USD.",
            "priceUsdt": 227.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $25,000\", \"Dedicated private banking IBAN\", \"Global airport lounge access (Priority Pass)\", \"Laser engraved custom cardholder name\"]}"
      },
      {
            "id": "prod-card-016",
            "category": "CARDS",
            "title": "Nile Anonymous Prepaid Visa Card ($500 Balance Included) \u2014 Standard (Limit $30,000)",
            "description": "Unregistered non-reloadable prepaid virtual Visa pre-funded with $500 balance for confidential checkout. Tier level Standard with adjusted monthly limit of $30,000 USD.",
            "priceUsdt": 579.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $30,000\", \"No name registration required\", \"Accepted at 40M+ merchants worldwide\", \"Instant card details dispatch\"]}"
      },
      {
            "id": "prod-card-017",
            "category": "CARDS",
            "title": "Nile Anonymous Prepaid Visa Card ($1,000 Balance Included) \u2014 Plus (Limit $35,000)",
            "description": "Confidential prepaid debit card pre-loaded with $1,000 balance for private high-ticket shopping. Tier level Plus with adjusted monthly limit of $35,000 USD.",
            "priceUsdt": 1112.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $35,000\", \"Zero identity linking required\", \"Valid for 24 months globally\", \"Instant credential delivery\"]}"
      },
      {
            "id": "prod-card-018",
            "category": "CARDS",
            "title": "Nile Web3 Crypto Spend Card (Direct Wallet Linked) \u2014 Pro (Limit $40,000)",
            "description": "Spend USDT, USDC, BTC, ETH directly at point of sale with real-time zero-slippage conversion. Tier level Pro with adjusted monthly limit of $40,000 USD.",
            "priceUsdt": 79.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $40,000\", \"Real-time crypto-to-fiat conversion\", \"Up to 3% crypto cashback in NILE tokens\", \"Virtual card instantly ready in mobile app\"]}"
      },
      {
            "id": "prod-card-019",
            "category": "CARDS",
            "title": "Nile Metal Gold Bullion Card (24K Gold Plated) \u2014 Executive (Limit $45,000)",
            "description": "Heavy metallic 24K gold plated Mastercard linked to Nile Crypto Bank treasury ledger. Tier level Executive with adjusted monthly limit of $45,000 USD.",
            "priceUsdt": 185.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $45,000\", \"Complimentary insured worldwide courier\", \"Zero foreign exchange surcharge\", \"High ATM cash withdrawal limits\"]}"
      },
      {
            "id": "prod-card-020",
            "category": "CARDS",
            "title": "Nile Unlimited Virtual Card Pack (5 Cards) \u2014 Apex (Limit $50,000)",
            "description": "Package of 5 separate virtual Visa cards with individual card numbers and billing addresses. Tier level Apex with adjusted monthly limit of $50,000 USD.",
            "priceUsdt": 137.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $50,000\", \"Individual spending limits per card\", \"One-click burner card regeneration\", \"Perfect for multi-account media buying\"]}"
      },
      {
            "id": "prod-card-021",
            "category": "CARDS",
            "title": "Nile Media Buyer Pro Card Pack (15 Cards) \u2014 Standard (Limit $5,000)",
            "description": "Fleet of 15 high-limit commercial cards optimized for TikTok, Facebook, Google and Twitter ads. Tier level Standard with adjusted monthly limit of $5,000 USD.",
            "priceUsdt": 289.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $5,000\", \"High authorization pass rate\", \"Centralized budget allocation panel\", \"Automatic billing statement exports\"]}"
      },
      {
            "id": "prod-card-022",
            "category": "CARDS",
            "title": "Nile Private Banking Debit Card (UK Sort Code & Account) \u2014 Plus (Limit $10,000)",
            "description": "Personal UK Sort Code and Account Number with Faster Payments and SEPA instant transfer. Tier level Plus with adjusted monthly limit of $10,000 USD.",
            "priceUsdt": 162.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $10,000\", \"Faster Payments 1-minute settlement\", \"SEPA EUR instant transfer support\", \"Physical chip & PIN contactless card\"]}"
      },
      {
            "id": "prod-card-023",
            "category": "CARDS",
            "title": "Nile Swiss Private Banking IBAN Card \u2014 Pro (Limit $15,000)",
            "description": "Swiss domiciled multicurrency IBAN card with dedicated CH account credentials. Tier level Pro with adjusted monthly limit of $15,000 USD.",
            "priceUsdt": 224.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $15,000\", \"Supports CHF, EUR, USD, GBP\", \"Top-tier Swiss banking compliance\", \"Contactless metal debit card\"]}"
      },
      {
            "id": "prod-card-024",
            "category": "CARDS",
            "title": "Nile Titanium Crypto Reserve Card ($250,000 Limit) \u2014 Executive (Limit $20,000)",
            "description": "Aerospace grade titanium physical card tailored for high-net-worth liquidity holders. Tier level Executive with adjusted monthly limit of $20,000 USD.",
            "priceUsdt": 345.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $20,000\", \"Handcrafted solid aerospace titanium\", \"24/7 dedicated private wealth concierge\", \"Global medical & travel insurance included\"]}"
      },
      {
            "id": "prod-card-025",
            "category": "CARDS",
            "title": "Nile Platinum Virtual Visa (Reloadable 3DS) \u2014 Apex (Limit $25,000)",
            "description": "Instant reloadable 3D Secure virtual card for international Web3 & e-commerce payments. Tier level Apex with adjusted monthly limit of $25,000 USD.",
            "priceUsdt": 73.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $25,000\", \"Compatible with Apple Pay & Google Pay\", \"Zero international transaction fees\", \"Instant issuance upon order\"]}"
      },
      {
            "id": "prod-card-026",
            "category": "CARDS",
            "title": "Nile Gold Commercial Mastercard ($25,000 Limit) \u2014 Standard (Limit $30,000)",
            "description": "High-tier reloadable Mastercard with dedicated sub-account for online subscriptions and corporate ads. Tier level Standard with adjusted monthly limit of $30,000 USD.",
            "priceUsdt": 100.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gold-mastercard-card.png\", \"features\": [\"Monthly spending ceiling: $30,000\", \"Meta & Google Ads approved\", \"Instant freeze/unfreeze controls\", \"Multicurrency balance in USD & EUR\"]}"
      },
      {
            "id": "prod-card-027",
            "category": "CARDS",
            "title": "Nile Black Metal Corporate Executive Card ($100,000 Limit) \u2014 Plus (Limit $35,000)",
            "description": "Ultra-exclusive 18-gram matte black stainless steel executive card with private banking IBAN. Tier level Plus with adjusted monthly limit of $35,000 USD.",
            "priceUsdt": 251.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $35,000\", \"Dedicated private banking IBAN\", \"Global airport lounge access (Priority Pass)\", \"Laser engraved custom cardholder name\"]}"
      },
      {
            "id": "prod-card-028",
            "category": "CARDS",
            "title": "Nile Anonymous Prepaid Visa Card ($500 Balance Included) \u2014 Pro (Limit $40,000)",
            "description": "Unregistered non-reloadable prepaid virtual Visa pre-funded with $500 balance for confidential checkout. Tier level Pro with adjusted monthly limit of $40,000 USD.",
            "priceUsdt": 603.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $40,000\", \"No name registration required\", \"Accepted at 40M+ merchants worldwide\", \"Instant card details dispatch\"]}"
      },
      {
            "id": "prod-card-029",
            "category": "CARDS",
            "title": "Nile Anonymous Prepaid Visa Card ($1,000 Balance Included) \u2014 Executive (Limit $45,000)",
            "description": "Confidential prepaid debit card pre-loaded with $1,000 balance for private high-ticket shopping. Tier level Executive with adjusted monthly limit of $45,000 USD.",
            "priceUsdt": 1136.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $45,000\", \"Zero identity linking required\", \"Valid for 24 months globally\", \"Instant credential delivery\"]}"
      },
      {
            "id": "prod-card-030",
            "category": "CARDS",
            "title": "Nile Web3 Crypto Spend Card (Direct Wallet Linked) \u2014 Apex (Limit $50,000)",
            "description": "Spend USDT, USDC, BTC, ETH directly at point of sale with real-time zero-slippage conversion. Tier level Apex with adjusted monthly limit of $50,000 USD.",
            "priceUsdt": 103.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $50,000\", \"Real-time crypto-to-fiat conversion\", \"Up to 3% crypto cashback in NILE tokens\", \"Virtual card instantly ready in mobile app\"]}"
      },
      {
            "id": "prod-card-031",
            "category": "CARDS",
            "title": "Nile Metal Gold Bullion Card (24K Gold Plated) \u2014 Standard (Limit $5,000)",
            "description": "Heavy metallic 24K gold plated Mastercard linked to Nile Crypto Bank treasury ledger. Tier level Standard with adjusted monthly limit of $5,000 USD.",
            "priceUsdt": 209.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $5,000\", \"Complimentary insured worldwide courier\", \"Zero foreign exchange surcharge\", \"High ATM cash withdrawal limits\"]}"
      },
      {
            "id": "prod-card-032",
            "category": "CARDS",
            "title": "Nile Unlimited Virtual Card Pack (5 Cards) \u2014 Plus (Limit $10,000)",
            "description": "Package of 5 separate virtual Visa cards with individual card numbers and billing addresses. Tier level Plus with adjusted monthly limit of $10,000 USD.",
            "priceUsdt": 161.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $10,000\", \"Individual spending limits per card\", \"One-click burner card regeneration\", \"Perfect for multi-account media buying\"]}"
      },
      {
            "id": "prod-card-033",
            "category": "CARDS",
            "title": "Nile Media Buyer Pro Card Pack (15 Cards) \u2014 Pro (Limit $15,000)",
            "description": "Fleet of 15 high-limit commercial cards optimized for TikTok, Facebook, Google and Twitter ads. Tier level Pro with adjusted monthly limit of $15,000 USD.",
            "priceUsdt": 313.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $15,000\", \"High authorization pass rate\", \"Centralized budget allocation panel\", \"Automatic billing statement exports\"]}"
      },
      {
            "id": "prod-card-034",
            "category": "CARDS",
            "title": "Nile Private Banking Debit Card (UK Sort Code & Account) \u2014 Executive (Limit $20,000)",
            "description": "Personal UK Sort Code and Account Number with Faster Payments and SEPA instant transfer. Tier level Executive with adjusted monthly limit of $20,000 USD.",
            "priceUsdt": 186.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $20,000\", \"Faster Payments 1-minute settlement\", \"SEPA EUR instant transfer support\", \"Physical chip & PIN contactless card\"]}"
      },
      {
            "id": "prod-card-035",
            "category": "CARDS",
            "title": "Nile Swiss Private Banking IBAN Card \u2014 Apex (Limit $25,000)",
            "description": "Swiss domiciled multicurrency IBAN card with dedicated CH account credentials. Tier level Apex with adjusted monthly limit of $25,000 USD.",
            "priceUsdt": 248.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $25,000\", \"Supports CHF, EUR, USD, GBP\", \"Top-tier Swiss banking compliance\", \"Contactless metal debit card\"]}"
      },
      {
            "id": "prod-card-036",
            "category": "CARDS",
            "title": "Nile Titanium Crypto Reserve Card ($250,000 Limit) \u2014 Standard (Limit $30,000)",
            "description": "Aerospace grade titanium physical card tailored for high-net-worth liquidity holders. Tier level Standard with adjusted monthly limit of $30,000 USD.",
            "priceUsdt": 369.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $30,000\", \"Handcrafted solid aerospace titanium\", \"24/7 dedicated private wealth concierge\", \"Global medical & travel insurance included\"]}"
      },
      {
            "id": "prod-card-037",
            "category": "CARDS",
            "title": "Nile Platinum Virtual Visa (Reloadable 3DS) \u2014 Plus (Limit $35,000)",
            "description": "Instant reloadable 3D Secure virtual card for international Web3 & e-commerce payments. Tier level Plus with adjusted monthly limit of $35,000 USD.",
            "priceUsdt": 97.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $35,000\", \"Compatible with Apple Pay & Google Pay\", \"Zero international transaction fees\", \"Instant issuance upon order\"]}"
      },
      {
            "id": "prod-card-038",
            "category": "CARDS",
            "title": "Nile Gold Commercial Mastercard ($25,000 Limit) \u2014 Pro (Limit $40,000)",
            "description": "High-tier reloadable Mastercard with dedicated sub-account for online subscriptions and corporate ads. Tier level Pro with adjusted monthly limit of $40,000 USD.",
            "priceUsdt": 124.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gold-mastercard-card.png\", \"features\": [\"Monthly spending ceiling: $40,000\", \"Meta & Google Ads approved\", \"Instant freeze/unfreeze controls\", \"Multicurrency balance in USD & EUR\"]}"
      },
      {
            "id": "prod-card-039",
            "category": "CARDS",
            "title": "Nile Black Metal Corporate Executive Card ($100,000 Limit) \u2014 Executive (Limit $45,000)",
            "description": "Ultra-exclusive 18-gram matte black stainless steel executive card with private banking IBAN. Tier level Executive with adjusted monthly limit of $45,000 USD.",
            "priceUsdt": 275.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $45,000\", \"Dedicated private banking IBAN\", \"Global airport lounge access (Priority Pass)\", \"Laser engraved custom cardholder name\"]}"
      },
      {
            "id": "prod-card-040",
            "category": "CARDS",
            "title": "Nile Anonymous Prepaid Visa Card ($500 Balance Included) \u2014 Apex (Limit $50,000)",
            "description": "Unregistered non-reloadable prepaid virtual Visa pre-funded with $500 balance for confidential checkout. Tier level Apex with adjusted monthly limit of $50,000 USD.",
            "priceUsdt": 627.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $50,000\", \"No name registration required\", \"Accepted at 40M+ merchants worldwide\", \"Instant card details dispatch\"]}"
      },
      {
            "id": "prod-card-041",
            "category": "CARDS",
            "title": "Nile Anonymous Prepaid Visa Card ($1,000 Balance Included) \u2014 Standard (Limit $5,000)",
            "description": "Confidential prepaid debit card pre-loaded with $1,000 balance for private high-ticket shopping. Tier level Standard with adjusted monthly limit of $5,000 USD.",
            "priceUsdt": 1160.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $5,000\", \"Zero identity linking required\", \"Valid for 24 months globally\", \"Instant credential delivery\"]}"
      },
      {
            "id": "prod-card-042",
            "category": "CARDS",
            "title": "Nile Web3 Crypto Spend Card (Direct Wallet Linked) \u2014 Plus (Limit $10,000)",
            "description": "Spend USDT, USDC, BTC, ETH directly at point of sale with real-time zero-slippage conversion. Tier level Plus with adjusted monthly limit of $10,000 USD.",
            "priceUsdt": 127.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $10,000\", \"Real-time crypto-to-fiat conversion\", \"Up to 3% crypto cashback in NILE tokens\", \"Virtual card instantly ready in mobile app\"]}"
      },
      {
            "id": "prod-card-043",
            "category": "CARDS",
            "title": "Nile Metal Gold Bullion Card (24K Gold Plated) \u2014 Pro (Limit $15,000)",
            "description": "Heavy metallic 24K gold plated Mastercard linked to Nile Crypto Bank treasury ledger. Tier level Pro with adjusted monthly limit of $15,000 USD.",
            "priceUsdt": 233.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $15,000\", \"Complimentary insured worldwide courier\", \"Zero foreign exchange surcharge\", \"High ATM cash withdrawal limits\"]}"
      },
      {
            "id": "prod-card-044",
            "category": "CARDS",
            "title": "Nile Unlimited Virtual Card Pack (5 Cards) \u2014 Executive (Limit $20,000)",
            "description": "Package of 5 separate virtual Visa cards with individual card numbers and billing addresses. Tier level Executive with adjusted monthly limit of $20,000 USD.",
            "priceUsdt": 185.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $20,000\", \"Individual spending limits per card\", \"One-click burner card regeneration\", \"Perfect for multi-account media buying\"]}"
      },
      {
            "id": "prod-card-045",
            "category": "CARDS",
            "title": "Nile Media Buyer Pro Card Pack (15 Cards) \u2014 Apex (Limit $25,000)",
            "description": "Fleet of 15 high-limit commercial cards optimized for TikTok, Facebook, Google and Twitter ads. Tier level Apex with adjusted monthly limit of $25,000 USD.",
            "priceUsdt": 337.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $25,000\", \"High authorization pass rate\", \"Centralized budget allocation panel\", \"Automatic billing statement exports\"]}"
      },
      {
            "id": "prod-card-046",
            "category": "CARDS",
            "title": "Nile Private Banking Debit Card (UK Sort Code & Account) \u2014 Standard (Limit $30,000)",
            "description": "Personal UK Sort Code and Account Number with Faster Payments and SEPA instant transfer. Tier level Standard with adjusted monthly limit of $30,000 USD.",
            "priceUsdt": 210.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $30,000\", \"Faster Payments 1-minute settlement\", \"SEPA EUR instant transfer support\", \"Physical chip & PIN contactless card\"]}"
      },
      {
            "id": "prod-card-047",
            "category": "CARDS",
            "title": "Nile Swiss Private Banking IBAN Card \u2014 Plus (Limit $35,000)",
            "description": "Swiss domiciled multicurrency IBAN card with dedicated CH account credentials. Tier level Plus with adjusted monthly limit of $35,000 USD.",
            "priceUsdt": 272.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $35,000\", \"Supports CHF, EUR, USD, GBP\", \"Top-tier Swiss banking compliance\", \"Contactless metal debit card\"]}"
      },
      {
            "id": "prod-card-048",
            "category": "CARDS",
            "title": "Nile Titanium Crypto Reserve Card ($250,000 Limit) \u2014 Pro (Limit $40,000)",
            "description": "Aerospace grade titanium physical card tailored for high-net-worth liquidity holders. Tier level Pro with adjusted monthly limit of $40,000 USD.",
            "priceUsdt": 393.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $40,000\", \"Handcrafted solid aerospace titanium\", \"24/7 dedicated private wealth concierge\", \"Global medical & travel insurance included\"]}"
      },
      {
            "id": "prod-card-049",
            "category": "CARDS",
            "title": "Nile Platinum Virtual Visa (Reloadable 3DS) \u2014 Executive (Limit $45,000)",
            "description": "Instant reloadable 3D Secure virtual card for international Web3 & e-commerce payments. Tier level Executive with adjusted monthly limit of $45,000 USD.",
            "priceUsdt": 121.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/virtual-visa-platinum.png\", \"features\": [\"Monthly spending ceiling: $45,000\", \"Compatible with Apple Pay & Google Pay\", \"Zero international transaction fees\", \"Instant issuance upon order\"]}"
      },
      {
            "id": "prod-card-050",
            "category": "CARDS",
            "title": "Nile Gold Commercial Mastercard ($25,000 Limit) \u2014 Apex (Limit $50,000)",
            "description": "High-tier reloadable Mastercard with dedicated sub-account for online subscriptions and corporate ads. Tier level Apex with adjusted monthly limit of $50,000 USD.",
            "priceUsdt": 148.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gold-mastercard-card.png\", \"features\": [\"Monthly spending ceiling: $50,000\", \"Meta & Google Ads approved\", \"Instant freeze/unfreeze controls\", \"Multicurrency balance in USD & EUR\"]}"
      },
      {
            "id": "prod-card-051",
            "category": "CARDS",
            "title": "Nile Black Metal Corporate Executive Card ($100,000 Limit) \u2014 Standard (Limit $5,000)",
            "description": "Ultra-exclusive 18-gram matte black stainless steel executive card with private banking IBAN. Tier level Standard with adjusted monthly limit of $5,000 USD.",
            "priceUsdt": 299.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $5,000\", \"Dedicated private banking IBAN\", \"Global airport lounge access (Priority Pass)\", \"Laser engraved custom cardholder name\"]}"
      },
      {
            "id": "prod-card-052",
            "category": "CARDS",
            "title": "Nile Anonymous Prepaid Visa Card ($500 Balance Included) \u2014 Plus (Limit $10,000)",
            "description": "Unregistered non-reloadable prepaid virtual Visa pre-funded with $500 balance for confidential checkout. Tier level Plus with adjusted monthly limit of $10,000 USD.",
            "priceUsdt": 651.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $10,000\", \"No name registration required\", \"Accepted at 40M+ merchants worldwide\", \"Instant card details dispatch\"]}"
      },
      {
            "id": "prod-card-053",
            "category": "CARDS",
            "title": "Nile Anonymous Prepaid Visa Card ($1,000 Balance Included) \u2014 Pro (Limit $15,000)",
            "description": "Confidential prepaid debit card pre-loaded with $1,000 balance for private high-ticket shopping. Tier level Pro with adjusted monthly limit of $15,000 USD.",
            "priceUsdt": 1184.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $15,000\", \"Zero identity linking required\", \"Valid for 24 months globally\", \"Instant credential delivery\"]}"
      },
      {
            "id": "prod-card-054",
            "category": "CARDS",
            "title": "Nile Web3 Crypto Spend Card (Direct Wallet Linked) \u2014 Executive (Limit $20,000)",
            "description": "Spend USDT, USDC, BTC, ETH directly at point of sale with real-time zero-slippage conversion. Tier level Executive with adjusted monthly limit of $20,000 USD.",
            "priceUsdt": 151.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-spend-debit-card.png\", \"features\": [\"Monthly spending ceiling: $20,000\", \"Real-time crypto-to-fiat conversion\", \"Up to 3% crypto cashback in NILE tokens\", \"Virtual card instantly ready in mobile app\"]}"
      },
      {
            "id": "prod-card-055",
            "category": "CARDS",
            "title": "Nile Metal Gold Bullion Card (24K Gold Plated) \u2014 Apex (Limit $25,000)",
            "description": "Heavy metallic 24K gold plated Mastercard linked to Nile Crypto Bank treasury ledger. Tier level Apex with adjusted monthly limit of $25,000 USD.",
            "priceUsdt": 257.0,
            "inventoryCount": 50,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/metal-black-corporate-card.png\", \"features\": [\"Monthly spending ceiling: $25,000\", \"Complimentary insured worldwide courier\", \"Zero foreign exchange surcharge\", \"High ATM cash withdrawal limits\"]}"
      },
      {
            "id": "prod-col-001",
            "category": "COLLECTIBLES",
            "title": "Authentic US $1,000,000 Banknote & 6 Gold Bullion Bars \u2014 Series #01",
            "description": "Fully verifiable genuine museum-grade US One-Million-Dollar collector banknote accompanied by six verified gold bullion bars. Serialized collector batch specimen #01 with registered certificate.",
            "priceUsdt": 500000.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/million-dollar-banknote-gold.png\", \"features\": [\"Authentic certified banknote with registered serial number\", \"Accompanying 6 bullion bars in tamper-evident security cases\", \"Full legal provenance documentation & certificates\", \"Complimentary insured courier delivery to USA, Canada, UK, UAE & Schengen\"]}"
      },
      {
            "id": "prod-col-002",
            "category": "COLLECTIBLES",
            "title": "Physical Casascius Bitcoin (0.25 BTC Balance) \u2014 Series #02",
            "description": "Original unpeeled 2013 Casascius brass physical Bitcoin containing funded 0.25 BTC on-chain balance. Serialized collector batch specimen #02 with registered certificate.",
            "priceUsdt": 20010.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/casascius-bitcoin-collectible.png\", \"features\": [\"Authentic 2013 Casascius unpeeled collectible\", \"Holographic tamper-evident private key seal\", \"Direct verifiable 0.25 BTC on Bitcoin blockchain\", \"Delivered in museum acrylic display slab\"]}"
      },
      {
            "id": "prod-col-003",
            "category": "COLLECTIBLES",
            "title": "Physical Casascius Bitcoin (0.50 BTC Balance) \u2014 Series #03",
            "description": "Unpeeled vintage physical Casascius Bitcoin with 0.50 BTC verified unspent transaction output. Serialized collector batch specimen #03 with registered certificate.",
            "priceUsdt": 39020.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/casascius-bitcoin-collectible.png\", \"features\": [\"Rare 2012 series physical Bitcoin coin\", \"Verified unspent on-chain UTXO balance\", \"Intact holographic honeycomb seal\", \"Insured armored transport delivery\"]}"
      },
      {
            "id": "prod-col-004",
            "category": "COLLECTIBLES",
            "title": "Physical Casascius Bitcoin (1.00 BTC Full Coin) \u2014 Series #04",
            "description": "The holy grail of crypto collectibles: unpeeled 1 BTC Casascius original brass coin. Serialized collector batch specimen #04 with registered certificate.",
            "priceUsdt": 78030.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/casascius-bitcoin-collectible.png\", \"features\": [\"Iconic 1.0 BTC on-chain funded balance\", \"Untouched original private key under hologram\", \"Independent provenance certificate\", \"White-glove armored courier included\"]}"
      },
      {
            "id": "prod-col-005",
            "category": "COLLECTIBLES",
            "title": "PAMP Suisse 100g 999.9 Fine Gold Bullion Bar \u2014 Series #05",
            "description": "Swiss minted Lady Fortuna 100-gram 24K pure investment gold bar with individual assay card. Serialized collector batch specimen #05 with registered certificate.",
            "priceUsdt": 8940.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"100 grams 999.9 fine 24-carat gold\", \"Official PAMP Suisse CertiPAMP packaging\", \"Individual serial number & QR verification\", \"LBMA certified refinery\"]}"
      },
      {
            "id": "prod-col-006",
            "category": "COLLECTIBLES",
            "title": "PAMP Suisse 50g 999.9 Fine Gold Ingot \u2014 Series #06",
            "description": "Authentic 50-gram Swiss fine gold bar minted with classical Lady Fortuna cornucopia emblem. Serialized collector batch specimen #06 with registered certificate.",
            "priceUsdt": 4550.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"50 grams pure 24K investment gold\", \"Sealed assay certificate card\", \"Recognized worldwide by all bullion banks\", \"Insured international delivery\"]}"
      },
      {
            "id": "prod-col-007",
            "category": "COLLECTIBLES",
            "title": "PAMP Suisse 1kg (1,000g) Investment Gold Bullion Bar \u2014 Series #07",
            "description": "Institutional 1-Kilogram cast gold bar certified by Swiss accredited refinery. Serialized collector batch specimen #07 with registered certificate.",
            "priceUsdt": 87060.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"1,000 grams 999.9 pure gold\", \"Official assay certificate included\", \"Global bullion exchange liquidity\", \"Insured security transport\"]}"
      },
      {
            "id": "prod-col-008",
            "category": "COLLECTIBLES",
            "title": "Credit Suisse 1-Ounce (31.1g) 999.9 Gold Bar \u2014 Series #08",
            "description": "Classic Credit Suisse 1 troy ounce fine gold bullion bar in original tamper-proof blister pack. Serialized collector batch specimen #08 with registered certificate.",
            "priceUsdt": 2850.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"1 Troy Ounce 999.9 fine gold\", \"Original Credit Suisse assayer stamp\", \"High liquidity worldwide\", \"Complimentary insured delivery\"]}"
      },
      {
            "id": "prod-col-009",
            "category": "COLLECTIBLES",
            "title": "Valcambi Suisse 50g Gold CombiBar (50 x 1g) \u2014 Series #09",
            "description": "Innovative Swiss CombiBar that can be broken into 50 individual 1-gram 24K gold pieces. Serialized collector batch specimen #09 with registered certificate.",
            "priceUsdt": 4780.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"50 divisible 1-gram gold bars\", \"Each 1g piece stamped 999.9 pure\", \"Ultimate barter liquidity utility\", \"Valcambi serial assay packaging\"]}"
      },
      {
            "id": "prod-col-010",
            "category": "COLLECTIBLES",
            "title": "1 Kilogram (1,000g) 999 Fine Silver Investment Ingot \u2014 Series #10",
            "description": "LBMA accredited 1kg pure fine silver bullion bar with laser etched serial number. Serialized collector batch specimen #10 with registered certificate.",
            "priceUsdt": 1240.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/silver-ingot-bar.png\", \"features\": [\"1,000 grams pure 999 fine silver\", \"LBMA accredited refiner hallmark\", \"Low premium physical silver asset\", \"Insured tracked shipping worldwide\"]}"
      },
      {
            "id": "prod-col-011",
            "category": "COLLECTIBLES",
            "title": "100 Ounce (3,110g) Fine Silver Bullion Bar \u2014 Series #11",
            "description": "Heavy industrial investment grade 100-ounce poured silver ingot. Serialized collector batch specimen #11 with registered certificate.",
            "priceUsdt": 3550.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/silver-ingot-bar.png\", \"features\": [\"100 Troy Ounces fine silver\", \"Poured bullion rustic finish\", \"Certified refinery assay stamp\", \"Secure armored transport\"]}"
      },
      {
            "id": "prod-col-012",
            "category": "COLLECTIBLES",
            "title": "Ledger Stax Flagship Touchscreen Hardware Wallet \u2014 Series #12",
            "description": "Next-gen curved E-Ink touchscreen crypto hardware wallet with Qi wireless charging. Serialized collector batch specimen #12 with registered certificate.",
            "priceUsdt": 509.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ledger-cold-storage-wallet.png\", \"features\": [\"Curved E-Ink clear-sign screen\", \"Secure Element chip (CC EAL6+)\", \"Bluetooth & Qi wireless charging\", \"Factory sealed authentic packaging\"]}"
      },
      {
            "id": "prod-col-013",
            "category": "COLLECTIBLES",
            "title": "Ledger Nano X Bluetooth Cold Storage Wallet \u2014 Series #13",
            "description": "Mobile-ready Bluetooth hardware wallet supporting over 5,500 crypto assets and NFTs. Serialized collector batch specimen #13 with registered certificate.",
            "priceUsdt": 269.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ledger-cold-storage-wallet.png\", \"features\": [\"Bluetooth connection to iOS & Android\", \"Certified Secure Element (CC EAL5+)\", \"Manage up to 100 apps simultaneously\", \"Factory direct security seal\"]}"
      },
      {
            "id": "prod-col-014",
            "category": "COLLECTIBLES",
            "title": "Trezor Safe 3 Hardware Wallet (Secure Element) \u2014 Series #14",
            "description": "Next-generation open source hardware wallet with dedicated Secure Element and OLED screen. Serialized collector batch specimen #14 with registered certificate.",
            "priceUsdt": 259.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"Dedicated Secure Element chip\", \"Open source audited code\", \"Bitcoin-only firmware available\", \"Tamper-evident hologram packaging\"]}"
      },
      {
            "id": "prod-col-015",
            "category": "COLLECTIBLES",
            "title": "Trezor Model T Touchscreen Flagship \u2014 Series #15",
            "description": "Color touchscreen crypto vault with Shamir Backup and on-device PIN/Passphrase entry. Serialized collector batch specimen #15 with registered certificate.",
            "priceUsdt": 359.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"Vibrant color LCD touchscreen\", \"Advanced Shamir Backup support\", \"FIDO2 / U2F hardware authenticator\", \"SD card slot for encrypted storage\"]}"
      },
      {
            "id": "prod-col-016",
            "category": "COLLECTIBLES",
            "title": "Coldcard Mk4 Ultra-Secure Air-Gapped Bitcoin Vault \u2014 Series #16",
            "description": "The security gold standard for Bitcoin cold storage with air-gap MicroSD and dual secure elements. Serialized collector batch specimen #16 with registered certificate.",
            "priceUsdt": 319.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"True air-gapped signing via MicroSD\", \"Dual Secure Elements from two vendors\", \"Duress PIN & brick-me self-destruct PIN\", \"Ultra-rugged transparent casing\"]}"
      },
      {
            "id": "prod-col-017",
            "category": "COLLECTIBLES",
            "title": "Cryptosteel Capsule Indestructible Seed Backup \u2014 Series #17",
            "description": "Solid stainless steel cylindrical capsule designed to survive fire up to 1400\u00b0C and floods. Serialized collector batch specimen #17 with registered certificate.",
            "priceUsdt": 259.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"Solid AISI 303 stainless steel\", \"Fireproof up to 1,400\\u00b0C (2,500\\u00b0F)\", \"Waterproof, rustproof, crushproof\", \"Compatible with all BIP39 recovery seeds\"]}"
      },
      {
            "id": "prod-col-018",
            "category": "COLLECTIBLES",
            "title": "Titanium Seed Backup Plate (Laser Engraved) \u2014 Series #18",
            "description": "Heavy aerospace titanium plate and tungsten carbide punch for permanent recovery seed backup. Serialized collector batch specimen #18 with registered certificate.",
            "priceUsdt": 219.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"Aerospace grade Grade 5 Titanium\", \"Melting point exceeds 1,668\\u00b0C\", \"Acid and corrosion resistant\", \"Includes automatic center punch tool\"]}"
      },
      {
            "id": "prod-col-019",
            "category": "COLLECTIBLES",
            "title": "Authentic US $1,000,000 Banknote & 6 Gold Bullion Bars \u2014 Series #19",
            "description": "Fully verifiable genuine museum-grade US One-Million-Dollar collector banknote accompanied by six verified gold bullion bars. Serialized collector batch specimen #19 with registered certificate.",
            "priceUsdt": 500180.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/million-dollar-banknote-gold.png\", \"features\": [\"Authentic certified banknote with registered serial number\", \"Accompanying 6 bullion bars in tamper-evident security cases\", \"Full legal provenance documentation & certificates\", \"Complimentary insured courier delivery to USA, Canada, UK, UAE & Schengen\"]}"
      },
      {
            "id": "prod-col-020",
            "category": "COLLECTIBLES",
            "title": "Physical Casascius Bitcoin (0.25 BTC Balance) \u2014 Series #20",
            "description": "Original unpeeled 2013 Casascius brass physical Bitcoin containing funded 0.25 BTC on-chain balance. Serialized collector batch specimen #20 with registered certificate.",
            "priceUsdt": 20190.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/casascius-bitcoin-collectible.png\", \"features\": [\"Authentic 2013 Casascius unpeeled collectible\", \"Holographic tamper-evident private key seal\", \"Direct verifiable 0.25 BTC on Bitcoin blockchain\", \"Delivered in museum acrylic display slab\"]}"
      },
      {
            "id": "prod-col-021",
            "category": "COLLECTIBLES",
            "title": "Physical Casascius Bitcoin (0.50 BTC Balance) \u2014 Series #21",
            "description": "Unpeeled vintage physical Casascius Bitcoin with 0.50 BTC verified unspent transaction output. Serialized collector batch specimen #21 with registered certificate.",
            "priceUsdt": 39200.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/casascius-bitcoin-collectible.png\", \"features\": [\"Rare 2012 series physical Bitcoin coin\", \"Verified unspent on-chain UTXO balance\", \"Intact holographic honeycomb seal\", \"Insured armored transport delivery\"]}"
      },
      {
            "id": "prod-col-022",
            "category": "COLLECTIBLES",
            "title": "Physical Casascius Bitcoin (1.00 BTC Full Coin) \u2014 Series #22",
            "description": "The holy grail of crypto collectibles: unpeeled 1 BTC Casascius original brass coin. Serialized collector batch specimen #22 with registered certificate.",
            "priceUsdt": 78210.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/casascius-bitcoin-collectible.png\", \"features\": [\"Iconic 1.0 BTC on-chain funded balance\", \"Untouched original private key under hologram\", \"Independent provenance certificate\", \"White-glove armored courier included\"]}"
      },
      {
            "id": "prod-col-023",
            "category": "COLLECTIBLES",
            "title": "PAMP Suisse 100g 999.9 Fine Gold Bullion Bar \u2014 Series #23",
            "description": "Swiss minted Lady Fortuna 100-gram 24K pure investment gold bar with individual assay card. Serialized collector batch specimen #23 with registered certificate.",
            "priceUsdt": 9120.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"100 grams 999.9 fine 24-carat gold\", \"Official PAMP Suisse CertiPAMP packaging\", \"Individual serial number & QR verification\", \"LBMA certified refinery\"]}"
      },
      {
            "id": "prod-col-024",
            "category": "COLLECTIBLES",
            "title": "PAMP Suisse 50g 999.9 Fine Gold Ingot \u2014 Series #24",
            "description": "Authentic 50-gram Swiss fine gold bar minted with classical Lady Fortuna cornucopia emblem. Serialized collector batch specimen #24 with registered certificate.",
            "priceUsdt": 4730.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"50 grams pure 24K investment gold\", \"Sealed assay certificate card\", \"Recognized worldwide by all bullion banks\", \"Insured international delivery\"]}"
      },
      {
            "id": "prod-col-025",
            "category": "COLLECTIBLES",
            "title": "PAMP Suisse 1kg (1,000g) Investment Gold Bullion Bar \u2014 Series #25",
            "description": "Institutional 1-Kilogram cast gold bar certified by Swiss accredited refinery. Serialized collector batch specimen #25 with registered certificate.",
            "priceUsdt": 87240.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"1,000 grams 999.9 pure gold\", \"Official assay certificate included\", \"Global bullion exchange liquidity\", \"Insured security transport\"]}"
      },
      {
            "id": "prod-col-026",
            "category": "COLLECTIBLES",
            "title": "Credit Suisse 1-Ounce (31.1g) 999.9 Gold Bar \u2014 Series #26",
            "description": "Classic Credit Suisse 1 troy ounce fine gold bullion bar in original tamper-proof blister pack. Serialized collector batch specimen #26 with registered certificate.",
            "priceUsdt": 3030.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"1 Troy Ounce 999.9 fine gold\", \"Original Credit Suisse assayer stamp\", \"High liquidity worldwide\", \"Complimentary insured delivery\"]}"
      },
      {
            "id": "prod-col-027",
            "category": "COLLECTIBLES",
            "title": "Valcambi Suisse 50g Gold CombiBar (50 x 1g) \u2014 Series #27",
            "description": "Innovative Swiss CombiBar that can be broken into 50 individual 1-gram 24K gold pieces. Serialized collector batch specimen #27 with registered certificate.",
            "priceUsdt": 4960.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"50 divisible 1-gram gold bars\", \"Each 1g piece stamped 999.9 pure\", \"Ultimate barter liquidity utility\", \"Valcambi serial assay packaging\"]}"
      },
      {
            "id": "prod-col-028",
            "category": "COLLECTIBLES",
            "title": "1 Kilogram (1,000g) 999 Fine Silver Investment Ingot \u2014 Series #28",
            "description": "LBMA accredited 1kg pure fine silver bullion bar with laser etched serial number. Serialized collector batch specimen #28 with registered certificate.",
            "priceUsdt": 1420.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/silver-ingot-bar.png\", \"features\": [\"1,000 grams pure 999 fine silver\", \"LBMA accredited refiner hallmark\", \"Low premium physical silver asset\", \"Insured tracked shipping worldwide\"]}"
      },
      {
            "id": "prod-col-029",
            "category": "COLLECTIBLES",
            "title": "100 Ounce (3,110g) Fine Silver Bullion Bar \u2014 Series #29",
            "description": "Heavy industrial investment grade 100-ounce poured silver ingot. Serialized collector batch specimen #29 with registered certificate.",
            "priceUsdt": 3730.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/silver-ingot-bar.png\", \"features\": [\"100 Troy Ounces fine silver\", \"Poured bullion rustic finish\", \"Certified refinery assay stamp\", \"Secure armored transport\"]}"
      },
      {
            "id": "prod-col-030",
            "category": "COLLECTIBLES",
            "title": "Ledger Stax Flagship Touchscreen Hardware Wallet \u2014 Series #30",
            "description": "Next-gen curved E-Ink touchscreen crypto hardware wallet with Qi wireless charging. Serialized collector batch specimen #30 with registered certificate.",
            "priceUsdt": 689.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ledger-cold-storage-wallet.png\", \"features\": [\"Curved E-Ink clear-sign screen\", \"Secure Element chip (CC EAL6+)\", \"Bluetooth & Qi wireless charging\", \"Factory sealed authentic packaging\"]}"
      },
      {
            "id": "prod-col-031",
            "category": "COLLECTIBLES",
            "title": "Ledger Nano X Bluetooth Cold Storage Wallet \u2014 Series #31",
            "description": "Mobile-ready Bluetooth hardware wallet supporting over 5,500 crypto assets and NFTs. Serialized collector batch specimen #31 with registered certificate.",
            "priceUsdt": 449.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ledger-cold-storage-wallet.png\", \"features\": [\"Bluetooth connection to iOS & Android\", \"Certified Secure Element (CC EAL5+)\", \"Manage up to 100 apps simultaneously\", \"Factory direct security seal\"]}"
      },
      {
            "id": "prod-col-032",
            "category": "COLLECTIBLES",
            "title": "Trezor Safe 3 Hardware Wallet (Secure Element) \u2014 Series #32",
            "description": "Next-generation open source hardware wallet with dedicated Secure Element and OLED screen. Serialized collector batch specimen #32 with registered certificate.",
            "priceUsdt": 439.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"Dedicated Secure Element chip\", \"Open source audited code\", \"Bitcoin-only firmware available\", \"Tamper-evident hologram packaging\"]}"
      },
      {
            "id": "prod-col-033",
            "category": "COLLECTIBLES",
            "title": "Trezor Model T Touchscreen Flagship \u2014 Series #33",
            "description": "Color touchscreen crypto vault with Shamir Backup and on-device PIN/Passphrase entry. Serialized collector batch specimen #33 with registered certificate.",
            "priceUsdt": 539.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"Vibrant color LCD touchscreen\", \"Advanced Shamir Backup support\", \"FIDO2 / U2F hardware authenticator\", \"SD card slot for encrypted storage\"]}"
      },
      {
            "id": "prod-col-034",
            "category": "COLLECTIBLES",
            "title": "Coldcard Mk4 Ultra-Secure Air-Gapped Bitcoin Vault \u2014 Series #34",
            "description": "The security gold standard for Bitcoin cold storage with air-gap MicroSD and dual secure elements. Serialized collector batch specimen #34 with registered certificate.",
            "priceUsdt": 499.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"True air-gapped signing via MicroSD\", \"Dual Secure Elements from two vendors\", \"Duress PIN & brick-me self-destruct PIN\", \"Ultra-rugged transparent casing\"]}"
      },
      {
            "id": "prod-col-035",
            "category": "COLLECTIBLES",
            "title": "Cryptosteel Capsule Indestructible Seed Backup \u2014 Series #35",
            "description": "Solid stainless steel cylindrical capsule designed to survive fire up to 1400\u00b0C and floods. Serialized collector batch specimen #35 with registered certificate.",
            "priceUsdt": 439.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"Solid AISI 303 stainless steel\", \"Fireproof up to 1,400\\u00b0C (2,500\\u00b0F)\", \"Waterproof, rustproof, crushproof\", \"Compatible with all BIP39 recovery seeds\"]}"
      },
      {
            "id": "prod-col-036",
            "category": "COLLECTIBLES",
            "title": "Titanium Seed Backup Plate (Laser Engraved) \u2014 Series #36",
            "description": "Heavy aerospace titanium plate and tungsten carbide punch for permanent recovery seed backup. Serialized collector batch specimen #36 with registered certificate.",
            "priceUsdt": 399.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"Aerospace grade Grade 5 Titanium\", \"Melting point exceeds 1,668\\u00b0C\", \"Acid and corrosion resistant\", \"Includes automatic center punch tool\"]}"
      },
      {
            "id": "prod-col-037",
            "category": "COLLECTIBLES",
            "title": "Authentic US $1,000,000 Banknote & 6 Gold Bullion Bars \u2014 Series #37",
            "description": "Fully verifiable genuine museum-grade US One-Million-Dollar collector banknote accompanied by six verified gold bullion bars. Serialized collector batch specimen #37 with registered certificate.",
            "priceUsdt": 500360.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/million-dollar-banknote-gold.png\", \"features\": [\"Authentic certified banknote with registered serial number\", \"Accompanying 6 bullion bars in tamper-evident security cases\", \"Full legal provenance documentation & certificates\", \"Complimentary insured courier delivery to USA, Canada, UK, UAE & Schengen\"]}"
      },
      {
            "id": "prod-col-038",
            "category": "COLLECTIBLES",
            "title": "Physical Casascius Bitcoin (0.25 BTC Balance) \u2014 Series #38",
            "description": "Original unpeeled 2013 Casascius brass physical Bitcoin containing funded 0.25 BTC on-chain balance. Serialized collector batch specimen #38 with registered certificate.",
            "priceUsdt": 20370.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/casascius-bitcoin-collectible.png\", \"features\": [\"Authentic 2013 Casascius unpeeled collectible\", \"Holographic tamper-evident private key seal\", \"Direct verifiable 0.25 BTC on Bitcoin blockchain\", \"Delivered in museum acrylic display slab\"]}"
      },
      {
            "id": "prod-col-039",
            "category": "COLLECTIBLES",
            "title": "Physical Casascius Bitcoin (0.50 BTC Balance) \u2014 Series #39",
            "description": "Unpeeled vintage physical Casascius Bitcoin with 0.50 BTC verified unspent transaction output. Serialized collector batch specimen #39 with registered certificate.",
            "priceUsdt": 39380.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/casascius-bitcoin-collectible.png\", \"features\": [\"Rare 2012 series physical Bitcoin coin\", \"Verified unspent on-chain UTXO balance\", \"Intact holographic honeycomb seal\", \"Insured armored transport delivery\"]}"
      },
      {
            "id": "prod-col-040",
            "category": "COLLECTIBLES",
            "title": "Physical Casascius Bitcoin (1.00 BTC Full Coin) \u2014 Series #40",
            "description": "The holy grail of crypto collectibles: unpeeled 1 BTC Casascius original brass coin. Serialized collector batch specimen #40 with registered certificate.",
            "priceUsdt": 78390.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/casascius-bitcoin-collectible.png\", \"features\": [\"Iconic 1.0 BTC on-chain funded balance\", \"Untouched original private key under hologram\", \"Independent provenance certificate\", \"White-glove armored courier included\"]}"
      },
      {
            "id": "prod-col-041",
            "category": "COLLECTIBLES",
            "title": "PAMP Suisse 100g 999.9 Fine Gold Bullion Bar \u2014 Series #41",
            "description": "Swiss minted Lady Fortuna 100-gram 24K pure investment gold bar with individual assay card. Serialized collector batch specimen #41 with registered certificate.",
            "priceUsdt": 9300.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"100 grams 999.9 fine 24-carat gold\", \"Official PAMP Suisse CertiPAMP packaging\", \"Individual serial number & QR verification\", \"LBMA certified refinery\"]}"
      },
      {
            "id": "prod-col-042",
            "category": "COLLECTIBLES",
            "title": "PAMP Suisse 50g 999.9 Fine Gold Ingot \u2014 Series #42",
            "description": "Authentic 50-gram Swiss fine gold bar minted with classical Lady Fortuna cornucopia emblem. Serialized collector batch specimen #42 with registered certificate.",
            "priceUsdt": 4910.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"50 grams pure 24K investment gold\", \"Sealed assay certificate card\", \"Recognized worldwide by all bullion banks\", \"Insured international delivery\"]}"
      },
      {
            "id": "prod-col-043",
            "category": "COLLECTIBLES",
            "title": "PAMP Suisse 1kg (1,000g) Investment Gold Bullion Bar \u2014 Series #43",
            "description": "Institutional 1-Kilogram cast gold bar certified by Swiss accredited refinery. Serialized collector batch specimen #43 with registered certificate.",
            "priceUsdt": 87420.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"1,000 grams 999.9 pure gold\", \"Official assay certificate included\", \"Global bullion exchange liquidity\", \"Insured security transport\"]}"
      },
      {
            "id": "prod-col-044",
            "category": "COLLECTIBLES",
            "title": "Credit Suisse 1-Ounce (31.1g) 999.9 Gold Bar \u2014 Series #44",
            "description": "Classic Credit Suisse 1 troy ounce fine gold bullion bar in original tamper-proof blister pack. Serialized collector batch specimen #44 with registered certificate.",
            "priceUsdt": 3210.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"1 Troy Ounce 999.9 fine gold\", \"Original Credit Suisse assayer stamp\", \"High liquidity worldwide\", \"Complimentary insured delivery\"]}"
      },
      {
            "id": "prod-col-045",
            "category": "COLLECTIBLES",
            "title": "Valcambi Suisse 50g Gold CombiBar (50 x 1g) \u2014 Series #45",
            "description": "Innovative Swiss CombiBar that can be broken into 50 individual 1-gram 24K gold pieces. Serialized collector batch specimen #45 with registered certificate.",
            "priceUsdt": 5140.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/pamp-suisse-gold-bullion.png\", \"features\": [\"50 divisible 1-gram gold bars\", \"Each 1g piece stamped 999.9 pure\", \"Ultimate barter liquidity utility\", \"Valcambi serial assay packaging\"]}"
      },
      {
            "id": "prod-col-046",
            "category": "COLLECTIBLES",
            "title": "1 Kilogram (1,000g) 999 Fine Silver Investment Ingot \u2014 Series #46",
            "description": "LBMA accredited 1kg pure fine silver bullion bar with laser etched serial number. Serialized collector batch specimen #46 with registered certificate.",
            "priceUsdt": 1600.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/silver-ingot-bar.png\", \"features\": [\"1,000 grams pure 999 fine silver\", \"LBMA accredited refiner hallmark\", \"Low premium physical silver asset\", \"Insured tracked shipping worldwide\"]}"
      },
      {
            "id": "prod-col-047",
            "category": "COLLECTIBLES",
            "title": "100 Ounce (3,110g) Fine Silver Bullion Bar \u2014 Series #47",
            "description": "Heavy industrial investment grade 100-ounce poured silver ingot. Serialized collector batch specimen #47 with registered certificate.",
            "priceUsdt": 3910.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/silver-ingot-bar.png\", \"features\": [\"100 Troy Ounces fine silver\", \"Poured bullion rustic finish\", \"Certified refinery assay stamp\", \"Secure armored transport\"]}"
      },
      {
            "id": "prod-col-048",
            "category": "COLLECTIBLES",
            "title": "Ledger Stax Flagship Touchscreen Hardware Wallet \u2014 Series #48",
            "description": "Next-gen curved E-Ink touchscreen crypto hardware wallet with Qi wireless charging. Serialized collector batch specimen #48 with registered certificate.",
            "priceUsdt": 869.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ledger-cold-storage-wallet.png\", \"features\": [\"Curved E-Ink clear-sign screen\", \"Secure Element chip (CC EAL6+)\", \"Bluetooth & Qi wireless charging\", \"Factory sealed authentic packaging\"]}"
      },
      {
            "id": "prod-col-049",
            "category": "COLLECTIBLES",
            "title": "Ledger Nano X Bluetooth Cold Storage Wallet \u2014 Series #49",
            "description": "Mobile-ready Bluetooth hardware wallet supporting over 5,500 crypto assets and NFTs. Serialized collector batch specimen #49 with registered certificate.",
            "priceUsdt": 629.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/ledger-cold-storage-wallet.png\", \"features\": [\"Bluetooth connection to iOS & Android\", \"Certified Secure Element (CC EAL5+)\", \"Manage up to 100 apps simultaneously\", \"Factory direct security seal\"]}"
      },
      {
            "id": "prod-col-050",
            "category": "COLLECTIBLES",
            "title": "Trezor Safe 3 Hardware Wallet (Secure Element) \u2014 Series #50",
            "description": "Next-generation open source hardware wallet with dedicated Secure Element and OLED screen. Serialized collector batch specimen #50 with registered certificate.",
            "priceUsdt": 619.0,
            "inventoryCount": 10,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/trezor-titanium-seed-vault.png\", \"features\": [\"Dedicated Secure Element chip\", \"Open source audited code\", \"Bitcoin-only firmware available\", \"Tamper-evident hologram packaging\"]}"
      },
      {
            "id": "prod-esim-001",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 5GB (30 Days) \u2014 Plan #01",
            "description": "High-speed 5G/LTE roaming data across all 33 European nations. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 12.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Coverage across 33 European countries\", \"5GB high-speed 5G data\", \"30-day validity from activation\", \"Instant QR code activation\"]}"
      },
      {
            "id": "prod-esim-002",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 10GB (30 Days) \u2014 Plan #02",
            "description": "Generous 10GB 5G data plan for seamless travel across UK, France, Germany, Italy, Spain. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 19.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"10GB 5G fast roaming\", \"Tethering / Mobile hotspot allowed\", \"Auto-connects to best local carriers\", \"No KYC or passport needed\"]}"
      },
      {
            "id": "prod-esim-003",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 20GB (30 Days) \u2014 Plan #03",
            "description": "Heavy usage 20GB high-speed roaming plan across all EU member states. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 30.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"20GB high-speed 5G data\", \"Zero roaming surcharges\", \"Instant QR code delivery via email & app\", \"Valid for 30 calendar days\"]}"
      },
      {
            "id": "prod-esim-004",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country Unlimited Data (15 Days) \u2014 Plan #04",
            "description": "Unlimited 5G data across Europe for worry-free streaming, navigation and remote work. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 38.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Unlimited high-speed 5G/4G\", \"Hotspot tethering enabled\", \"Instant digital QR activation\", \"24/7 technical carrier support\"]}"
      },
      {
            "id": "prod-esim-005",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country Unlimited Data (30 Days) \u2014 Plan #05",
            "description": "Premium 30-day uncapped 5G data bundle for extensive European travel. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 59.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Full 30 days unlimited data\", \"Ultra-fast low-latency local routing\", \"Works on iPhone, iPad, Galaxy, Pixel\", \"No physical SIM card swap\"]}"
      },
      {
            "id": "prod-esim-006",
            "category": "ESIM",
            "title": "USA & Canada 10GB 5G High-Speed (30 Days) \u2014 Plan #06",
            "description": "Nationwide 5G access on AT&T, T-Mobile and Rogers with full cross-border roaming. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 22.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"Covers USA, Alaska, Hawaii & Canada\", \"10GB unthrottled 5G data\", \"Hotspot tethering supported\", \"Instant QR installation\"]}"
      },
      {
            "id": "prod-esim-007",
            "category": "ESIM",
            "title": "USA & Canada 20GB 5G High-Speed (30 Days) \u2014 Plan #07",
            "description": "Large 20GB high-speed bundle for cross-continental road trips and business. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 33.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"20GB premium 5G carrier data\", \"Seamless border handover\", \"Valid for 30 days\", \"Instant QR code delivery\"]}"
      },
      {
            "id": "prod-esim-008",
            "category": "ESIM",
            "title": "USA & Canada Unlimited 5G Data (30 Days) \u2014 Plan #08",
            "description": "Unlimited 5G data across North America on premier tier-1 network infrastructure. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 64.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"Truly unlimited 5G connectivity\", \"High-speed personal hotspot\", \"Direct eSIM profile download\", \"Instant email delivery\"]}"
      },
      {
            "id": "prod-esim-009",
            "category": "ESIM",
            "title": "United Arab Emirates (Dubai & Abu Dhabi) 10GB \u2014 Plan #09",
            "description": "High-speed 5G roaming on Du and Etisalat networks across the UAE. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 28.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"10GB 5G data in UAE\", \"Instant activation upon arrival\", \"Fast WhatsApp & Telegram voice routing\", \"Valid for 30 days\"]}"
      },
      {
            "id": "prod-esim-010",
            "category": "ESIM",
            "title": "United Arab Emirates (Dubai & Abu Dhabi) 20GB \u2014 Plan #10",
            "description": "Heavy data bundle for Dubai business travelers and digital finance summits. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 43.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"20GB 5G ultra-fast data\", \"Premium Du/Etisalat coverage\", \"Personal hotspot enabled\", \"Instant activation QR\"]}"
      },
      {
            "id": "prod-esim-011",
            "category": "ESIM",
            "title": "Japan & South Korea 15GB 5G Roaming (30 Days) \u2014 Plan #11",
            "description": "Ultra-low latency data on NTT Docomo, SoftBank and SK Telecom. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 24.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"Covers Tokyo, Seoul and all prefectures\", \"15GB high-speed data\", \"Local carrier breakout routing\", \"Instant digital QR code\"]}"
      },
      {
            "id": "prod-esim-012",
            "category": "ESIM",
            "title": "Asia Pacific 14-Country 20GB (30 Days) \u2014 Plan #12",
            "description": "Regional pass for Japan, Korea, Singapore, Thailand, Vietnam, Malaysia, Indonesia, Australia. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 35.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"Coverage in 14 top Asian countries\", \"20GB high-speed regional data\", \"One eSIM for whole multi-stop trip\", \"Instant digital setup\"]}"
      },
      {
            "id": "prod-esim-013",
            "category": "ESIM",
            "title": "Global Nomad 160-Country 20GB (365 Days Validity) \u2014 Plan #13",
            "description": "Universal travel eSIM covering 160+ countries, valid for a full calendar year. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 81.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-global-nomad-160.png\", \"features\": [\"Covers 160+ countries globally\", \"20GB data valid for 365 days\", \"Never expires while active\", \"Tethering & hotspot supported\"]}"
      },
      {
            "id": "prod-esim-014",
            "category": "ESIM",
            "title": "Global Nomad 160-Country 50GB (365 Days Validity) \u2014 Plan #14",
            "description": "The ultimate globetrotter data reserve valid worldwide for 12 months. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 152.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-global-nomad-160.png\", \"features\": [\"50GB worldwide roaming data\", \"Valid for 365 days\", \"Automatic tier-1 carrier switching\", \"Instant QR code delivery\"]}"
      },
      {
            "id": "prod-esim-015",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 5GB (30 Days) \u2014 Plan #15",
            "description": "High-speed 5G/LTE roaming data across all 33 European nations. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 16.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Coverage across 33 European countries\", \"5GB high-speed 5G data\", \"30-day validity from activation\", \"Instant QR code activation\"]}"
      },
      {
            "id": "prod-esim-016",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 10GB (30 Days) \u2014 Plan #16",
            "description": "Generous 10GB 5G data plan for seamless travel across UK, France, Germany, Italy, Spain. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 18.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"10GB 5G fast roaming\", \"Tethering / Mobile hotspot allowed\", \"Auto-connects to best local carriers\", \"No KYC or passport needed\"]}"
      },
      {
            "id": "prod-esim-017",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 20GB (30 Days) \u2014 Plan #17",
            "description": "Heavy usage 20GB high-speed roaming plan across all EU member states. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 29.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"20GB high-speed 5G data\", \"Zero roaming surcharges\", \"Instant QR code delivery via email & app\", \"Valid for 30 calendar days\"]}"
      },
      {
            "id": "prod-esim-018",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country Unlimited Data (15 Days) \u2014 Plan #18",
            "description": "Unlimited 5G data across Europe for worry-free streaming, navigation and remote work. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 37.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Unlimited high-speed 5G/4G\", \"Hotspot tethering enabled\", \"Instant digital QR activation\", \"24/7 technical carrier support\"]}"
      },
      {
            "id": "prod-esim-019",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country Unlimited Data (30 Days) \u2014 Plan #19",
            "description": "Premium 30-day uncapped 5G data bundle for extensive European travel. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 58.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Full 30 days unlimited data\", \"Ultra-fast low-latency local routing\", \"Works on iPhone, iPad, Galaxy, Pixel\", \"No physical SIM card swap\"]}"
      },
      {
            "id": "prod-esim-020",
            "category": "ESIM",
            "title": "USA & Canada 10GB 5G High-Speed (30 Days) \u2014 Plan #20",
            "description": "Nationwide 5G access on AT&T, T-Mobile and Rogers with full cross-border roaming. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 26.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"Covers USA, Alaska, Hawaii & Canada\", \"10GB unthrottled 5G data\", \"Hotspot tethering supported\", \"Instant QR installation\"]}"
      },
      {
            "id": "prod-esim-021",
            "category": "ESIM",
            "title": "USA & Canada 20GB 5G High-Speed (30 Days) \u2014 Plan #21",
            "description": "Large 20GB high-speed bundle for cross-continental road trips and business. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 32.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"20GB premium 5G carrier data\", \"Seamless border handover\", \"Valid for 30 days\", \"Instant QR code delivery\"]}"
      },
      {
            "id": "prod-esim-022",
            "category": "ESIM",
            "title": "USA & Canada Unlimited 5G Data (30 Days) \u2014 Plan #22",
            "description": "Unlimited 5G data across North America on premier tier-1 network infrastructure. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 63.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"Truly unlimited 5G connectivity\", \"High-speed personal hotspot\", \"Direct eSIM profile download\", \"Instant email delivery\"]}"
      },
      {
            "id": "prod-esim-023",
            "category": "ESIM",
            "title": "United Arab Emirates (Dubai & Abu Dhabi) 10GB \u2014 Plan #23",
            "description": "High-speed 5G roaming on Du and Etisalat networks across the UAE. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 27.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"10GB 5G data in UAE\", \"Instant activation upon arrival\", \"Fast WhatsApp & Telegram voice routing\", \"Valid for 30 days\"]}"
      },
      {
            "id": "prod-esim-024",
            "category": "ESIM",
            "title": "United Arab Emirates (Dubai & Abu Dhabi) 20GB \u2014 Plan #24",
            "description": "Heavy data bundle for Dubai business travelers and digital finance summits. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 42.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"20GB 5G ultra-fast data\", \"Premium Du/Etisalat coverage\", \"Personal hotspot enabled\", \"Instant activation QR\"]}"
      },
      {
            "id": "prod-esim-025",
            "category": "ESIM",
            "title": "Japan & South Korea 15GB 5G Roaming (30 Days) \u2014 Plan #25",
            "description": "Ultra-low latency data on NTT Docomo, SoftBank and SK Telecom. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 28.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"Covers Tokyo, Seoul and all prefectures\", \"15GB high-speed data\", \"Local carrier breakout routing\", \"Instant digital QR code\"]}"
      },
      {
            "id": "prod-esim-026",
            "category": "ESIM",
            "title": "Asia Pacific 14-Country 20GB (30 Days) \u2014 Plan #26",
            "description": "Regional pass for Japan, Korea, Singapore, Thailand, Vietnam, Malaysia, Indonesia, Australia. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 34.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"Coverage in 14 top Asian countries\", \"20GB high-speed regional data\", \"One eSIM for whole multi-stop trip\", \"Instant digital setup\"]}"
      },
      {
            "id": "prod-esim-027",
            "category": "ESIM",
            "title": "Global Nomad 160-Country 20GB (365 Days Validity) \u2014 Plan #27",
            "description": "Universal travel eSIM covering 160+ countries, valid for a full calendar year. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 80.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-global-nomad-160.png\", \"features\": [\"Covers 160+ countries globally\", \"20GB data valid for 365 days\", \"Never expires while active\", \"Tethering & hotspot supported\"]}"
      },
      {
            "id": "prod-esim-028",
            "category": "ESIM",
            "title": "Global Nomad 160-Country 50GB (365 Days Validity) \u2014 Plan #28",
            "description": "The ultimate globetrotter data reserve valid worldwide for 12 months. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 151.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-global-nomad-160.png\", \"features\": [\"50GB worldwide roaming data\", \"Valid for 365 days\", \"Automatic tier-1 carrier switching\", \"Instant QR code delivery\"]}"
      },
      {
            "id": "prod-esim-029",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 5GB (30 Days) \u2014 Plan #29",
            "description": "High-speed 5G/LTE roaming data across all 33 European nations. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 15.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Coverage across 33 European countries\", \"5GB high-speed 5G data\", \"30-day validity from activation\", \"Instant QR code activation\"]}"
      },
      {
            "id": "prod-esim-030",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 10GB (30 Days) \u2014 Plan #30",
            "description": "Generous 10GB 5G data plan for seamless travel across UK, France, Germany, Italy, Spain. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 22.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"10GB 5G fast roaming\", \"Tethering / Mobile hotspot allowed\", \"Auto-connects to best local carriers\", \"No KYC or passport needed\"]}"
      },
      {
            "id": "prod-esim-031",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 20GB (30 Days) \u2014 Plan #31",
            "description": "Heavy usage 20GB high-speed roaming plan across all EU member states. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 28.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"20GB high-speed 5G data\", \"Zero roaming surcharges\", \"Instant QR code delivery via email & app\", \"Valid for 30 calendar days\"]}"
      },
      {
            "id": "prod-esim-032",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country Unlimited Data (15 Days) \u2014 Plan #32",
            "description": "Unlimited 5G data across Europe for worry-free streaming, navigation and remote work. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 36.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Unlimited high-speed 5G/4G\", \"Hotspot tethering enabled\", \"Instant digital QR activation\", \"24/7 technical carrier support\"]}"
      },
      {
            "id": "prod-esim-033",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country Unlimited Data (30 Days) \u2014 Plan #33",
            "description": "Premium 30-day uncapped 5G data bundle for extensive European travel. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 57.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Full 30 days unlimited data\", \"Ultra-fast low-latency local routing\", \"Works on iPhone, iPad, Galaxy, Pixel\", \"No physical SIM card swap\"]}"
      },
      {
            "id": "prod-esim-034",
            "category": "ESIM",
            "title": "USA & Canada 10GB 5G High-Speed (30 Days) \u2014 Plan #34",
            "description": "Nationwide 5G access on AT&T, T-Mobile and Rogers with full cross-border roaming. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 25.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"Covers USA, Alaska, Hawaii & Canada\", \"10GB unthrottled 5G data\", \"Hotspot tethering supported\", \"Instant QR installation\"]}"
      },
      {
            "id": "prod-esim-035",
            "category": "ESIM",
            "title": "USA & Canada 20GB 5G High-Speed (30 Days) \u2014 Plan #35",
            "description": "Large 20GB high-speed bundle for cross-continental road trips and business. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 36.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"20GB premium 5G carrier data\", \"Seamless border handover\", \"Valid for 30 days\", \"Instant QR code delivery\"]}"
      },
      {
            "id": "prod-esim-036",
            "category": "ESIM",
            "title": "USA & Canada Unlimited 5G Data (30 Days) \u2014 Plan #36",
            "description": "Unlimited 5G data across North America on premier tier-1 network infrastructure. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 62.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"Truly unlimited 5G connectivity\", \"High-speed personal hotspot\", \"Direct eSIM profile download\", \"Instant email delivery\"]}"
      },
      {
            "id": "prod-esim-037",
            "category": "ESIM",
            "title": "United Arab Emirates (Dubai & Abu Dhabi) 10GB \u2014 Plan #37",
            "description": "High-speed 5G roaming on Du and Etisalat networks across the UAE. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 26.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"10GB 5G data in UAE\", \"Instant activation upon arrival\", \"Fast WhatsApp & Telegram voice routing\", \"Valid for 30 days\"]}"
      },
      {
            "id": "prod-esim-038",
            "category": "ESIM",
            "title": "United Arab Emirates (Dubai & Abu Dhabi) 20GB \u2014 Plan #38",
            "description": "Heavy data bundle for Dubai business travelers and digital finance summits. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 41.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"20GB 5G ultra-fast data\", \"Premium Du/Etisalat coverage\", \"Personal hotspot enabled\", \"Instant activation QR\"]}"
      },
      {
            "id": "prod-esim-039",
            "category": "ESIM",
            "title": "Japan & South Korea 15GB 5G Roaming (30 Days) \u2014 Plan #39",
            "description": "Ultra-low latency data on NTT Docomo, SoftBank and SK Telecom. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 27.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"Covers Tokyo, Seoul and all prefectures\", \"15GB high-speed data\", \"Local carrier breakout routing\", \"Instant digital QR code\"]}"
      },
      {
            "id": "prod-esim-040",
            "category": "ESIM",
            "title": "Asia Pacific 14-Country 20GB (30 Days) \u2014 Plan #40",
            "description": "Regional pass for Japan, Korea, Singapore, Thailand, Vietnam, Malaysia, Indonesia, Australia. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 38.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"Coverage in 14 top Asian countries\", \"20GB high-speed regional data\", \"One eSIM for whole multi-stop trip\", \"Instant digital setup\"]}"
      },
      {
            "id": "prod-esim-041",
            "category": "ESIM",
            "title": "Global Nomad 160-Country 20GB (365 Days Validity) \u2014 Plan #41",
            "description": "Universal travel eSIM covering 160+ countries, valid for a full calendar year. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 79.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-global-nomad-160.png\", \"features\": [\"Covers 160+ countries globally\", \"20GB data valid for 365 days\", \"Never expires while active\", \"Tethering & hotspot supported\"]}"
      },
      {
            "id": "prod-esim-042",
            "category": "ESIM",
            "title": "Global Nomad 160-Country 50GB (365 Days Validity) \u2014 Plan #42",
            "description": "The ultimate globetrotter data reserve valid worldwide for 12 months. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 150.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-global-nomad-160.png\", \"features\": [\"50GB worldwide roaming data\", \"Valid for 365 days\", \"Automatic tier-1 carrier switching\", \"Instant QR code delivery\"]}"
      },
      {
            "id": "prod-esim-043",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 5GB (30 Days) \u2014 Plan #43",
            "description": "High-speed 5G/LTE roaming data across all 33 European nations. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 14.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Coverage across 33 European countries\", \"5GB high-speed 5G data\", \"30-day validity from activation\", \"Instant QR code activation\"]}"
      },
      {
            "id": "prod-esim-044",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 10GB (30 Days) \u2014 Plan #44",
            "description": "Generous 10GB 5G data plan for seamless travel across UK, France, Germany, Italy, Spain. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 21.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"10GB 5G fast roaming\", \"Tethering / Mobile hotspot allowed\", \"Auto-connects to best local carriers\", \"No KYC or passport needed\"]}"
      },
      {
            "id": "prod-esim-045",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country 20GB (30 Days) \u2014 Plan #45",
            "description": "Heavy usage 20GB high-speed roaming plan across all EU member states. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 32.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"20GB high-speed 5G data\", \"Zero roaming surcharges\", \"Instant QR code delivery via email & app\", \"Valid for 30 calendar days\"]}"
      },
      {
            "id": "prod-esim-046",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country Unlimited Data (15 Days) \u2014 Plan #46",
            "description": "Unlimited 5G data across Europe for worry-free streaming, navigation and remote work. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 35.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Unlimited high-speed 5G/4G\", \"Hotspot tethering enabled\", \"Instant digital QR activation\", \"24/7 technical carrier support\"]}"
      },
      {
            "id": "prod-esim-047",
            "category": "ESIM",
            "title": "Europe Schengen 33-Country Unlimited Data (30 Days) \u2014 Plan #47",
            "description": "Premium 30-day uncapped 5G data bundle for extensive European travel. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 56.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-europe-unlimited.png\", \"features\": [\"Full 30 days unlimited data\", \"Ultra-fast low-latency local routing\", \"Works on iPhone, iPad, Galaxy, Pixel\", \"No physical SIM card swap\"]}"
      },
      {
            "id": "prod-esim-048",
            "category": "ESIM",
            "title": "USA & Canada 10GB 5G High-Speed (30 Days) \u2014 Plan #48",
            "description": "Nationwide 5G access on AT&T, T-Mobile and Rogers with full cross-border roaming. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 24.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"Covers USA, Alaska, Hawaii & Canada\", \"10GB unthrottled 5G data\", \"Hotspot tethering supported\", \"Instant QR installation\"]}"
      },
      {
            "id": "prod-esim-049",
            "category": "ESIM",
            "title": "USA & Canada 20GB 5G High-Speed (30 Days) \u2014 Plan #49",
            "description": "Large 20GB high-speed bundle for cross-continental road trips and business. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 35.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"20GB premium 5G carrier data\", \"Seamless border handover\", \"Valid for 30 days\", \"Instant QR code delivery\"]}"
      },
      {
            "id": "prod-esim-050",
            "category": "ESIM",
            "title": "USA & Canada Unlimited 5G Data (30 Days) \u2014 Plan #50",
            "description": "Unlimited 5G data across North America on premier tier-1 network infrastructure. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 66.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-usa-north-america.png\", \"features\": [\"Truly unlimited 5G connectivity\", \"High-speed personal hotspot\", \"Direct eSIM profile download\", \"Instant email delivery\"]}"
      },
      {
            "id": "prod-esim-051",
            "category": "ESIM",
            "title": "United Arab Emirates (Dubai & Abu Dhabi) 10GB \u2014 Plan #51",
            "description": "High-speed 5G roaming on Du and Etisalat networks across the UAE. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 25.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"10GB 5G data in UAE\", \"Instant activation upon arrival\", \"Fast WhatsApp & Telegram voice routing\", \"Valid for 30 days\"]}"
      },
      {
            "id": "prod-esim-052",
            "category": "ESIM",
            "title": "United Arab Emirates (Dubai & Abu Dhabi) 20GB \u2014 Plan #52",
            "description": "Heavy data bundle for Dubai business travelers and digital finance summits. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 40.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"20GB 5G ultra-fast data\", \"Premium Du/Etisalat coverage\", \"Personal hotspot enabled\", \"Instant activation QR\"]}"
      },
      {
            "id": "prod-esim-053",
            "category": "ESIM",
            "title": "Japan & South Korea 15GB 5G Roaming (30 Days) \u2014 Plan #53",
            "description": "Ultra-low latency data on NTT Docomo, SoftBank and SK Telecom. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 26.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"Covers Tokyo, Seoul and all prefectures\", \"15GB high-speed data\", \"Local carrier breakout routing\", \"Instant digital QR code\"]}"
      },
      {
            "id": "prod-esim-054",
            "category": "ESIM",
            "title": "Asia Pacific 14-Country 20GB (30 Days) \u2014 Plan #54",
            "description": "Regional pass for Japan, Korea, Singapore, Thailand, Vietnam, Malaysia, Indonesia, Australia. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 37.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/digital-goods-esim.png\", \"features\": [\"Coverage in 14 top Asian countries\", \"20GB high-speed regional data\", \"One eSIM for whole multi-stop trip\", \"Instant digital setup\"]}"
      },
      {
            "id": "prod-esim-055",
            "category": "ESIM",
            "title": "Global Nomad 160-Country 20GB (365 Days Validity) \u2014 Plan #55",
            "description": "Universal travel eSIM covering 160+ countries, valid for a full calendar year. Digital eSIM profile with automatic QR code activation.",
            "priceUsdt": 83.0,
            "inventoryCount": 999,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/esim-global-nomad-160.png\", \"features\": [\"Covers 160+ countries globally\", \"20GB data valid for 365 days\", \"Never expires while active\", \"Tethering & hotspot supported\"]}"
      },
      {
            "id": "prod-gift-001",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($50) \u2014 Batch #01",
            "description": "Amazon gift voucher redeemable on Amazon US, UK, EU and worldwide storefronts. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$50 face value digital code\", \"No expiration date or fees\", \"Redeemable for millions of physical items\", \"Instant digital code delivery\"]}"
      },
      {
            "id": "prod-gift-002",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($100) \u2014 Batch #02",
            "description": "Official Amazon digital gift card code with instant wallet balance top-up. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$100 spendable Amazon balance\", \"Never expires\", \"Stackable with other gift cards\", \"Delivered directly to dashboard\"]}"
      },
      {
            "id": "prod-gift-003",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($250) \u2014 Batch #03",
            "description": "High-value Amazon digital gift voucher for electronics, cloud servers and essentials. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 250.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$250 full balance\", \"Universal redemption\", \"Secure cryptographic code\", \"Instant dispatch\"]}"
      },
      {
            "id": "prod-gift-004",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($500) \u2014 Batch #04",
            "description": "Premium $500 Amazon gift certificate for high-ticket online shopping. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 500.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$500 instant Amazon credit\", \"No hidden transaction charges\", \"Immediate code display\", \"100% replacement guarantee\"]}"
      },
      {
            "id": "prod-gift-005",
            "category": "GIFTCARDS",
            "title": "Apple Gift Card & App Store ($50) \u2014 Batch #05",
            "description": "All-in-one Apple gift card for hardware, App Store, iCloud, Apple Music and games. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/amazon-apple-giftcard-pack.png\", \"features\": [\"$50 Apple account balance\", \"Buy iPhones, Macs, iPads & Apps\", \"Redeemable on Apple.com & App Store\", \"Instant digital dispatch\"]}"
      },
      {
            "id": "prod-gift-006",
            "category": "GIFTCARDS",
            "title": "Apple Gift Card & App Store ($100) \u2014 Batch #06",
            "description": "Universal Apple balance card for digital subscriptions and Apple Store purchases. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/amazon-apple-giftcard-pack.png\", \"features\": [\"$100 spendable Apple credit\", \"Works for iCloud+, Apple TV+, Music\", \"Hardware & software eligible\", \"Instant code delivery\"]}"
      },
      {
            "id": "prod-gift-007",
            "category": "GIFTCARDS",
            "title": "Apple Gift Card & App Store ($250) \u2014 Batch #07",
            "description": "Premium Apple voucher for hardware upgrades and professional Mac apps. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 250.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/amazon-apple-giftcard-pack.png\", \"features\": [\"$250 official Apple credit\", \"Stackable up to $2,000 per account\", \"No expiration date\", \"Instant digital code\"]}"
      },
      {
            "id": "prod-gift-008",
            "category": "GIFTCARDS",
            "title": "Google Play Store Digital Card ($50) \u2014 Batch #08",
            "description": "Google Play digital code for Android apps, games, YouTube Premium and movies. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$50 Google Play balance\", \"Instant Android redemption\", \"Pay for in-app subscriptions\", \"No expiration fees\"]}"
      },
      {
            "id": "prod-gift-009",
            "category": "GIFTCARDS",
            "title": "Google Play Store Digital Card ($100) \u2014 Batch #09",
            "description": "Official Google Play gift voucher code delivered instantly to your account. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$100 digital wallet balance\", \"Valid for all Google services\", \"Direct store redemption\", \"Instant delivery\"]}"
      },
      {
            "id": "prod-gift-010",
            "category": "GIFTCARDS",
            "title": "Steam Wallet Digital Gaming Card ($50) \u2014 Batch #10",
            "description": "Instant funds for your Steam account to purchase PC games, DLCs and community market skins. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"$50 Steam Wallet credit\", \"Buy thousands of PC games on Steam\", \"Trade on Steam Community Market\", \"Instant code generation\"]}"
      },
      {
            "id": "prod-gift-011",
            "category": "GIFTCARDS",
            "title": "Steam Wallet Digital Gaming Card ($100) \u2014 Batch #11",
            "description": "Top-tier Steam Wallet balance voucher for AAA game releases and VR titles. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"$100 Steam balance code\", \"Never expires\", \"Global region un-restricted\", \"Instant digital reveal\"]}"
      },
      {
            "id": "prod-gift-012",
            "category": "GIFTCARDS",
            "title": "PlayStation Network (PSN) Voucher ($75) \u2014 Batch #12",
            "description": "PlayStation Store digital code for PS5 & PS4 digital games, add-ons and PS Plus. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 75.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"$75 PSN Store credit\", \"Buy PS5 games and DLCs\", \"Renew PS Plus Essential/Extra\", \"Instant digital dispatch\"]}"
      },
      {
            "id": "prod-gift-013",
            "category": "GIFTCARDS",
            "title": "Xbox Game Pass Ultimate 12-Month Card \u2014 Batch #13",
            "description": "Full 1-Year Xbox Game Pass Ultimate including hundreds of games on PC and Xbox Series X. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 149.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"12 months of Game Pass Ultimate\", \"Day-one access to new Xbox games\", \"EA Play membership included\", \"Cloud gaming on mobile & browser\"]}"
      },
      {
            "id": "prod-gift-014",
            "category": "GIFTCARDS",
            "title": "Netflix Premium 12-Month Subscription Card \u2014 Batch #14",
            "description": "1-Year 4K Ultra HD Netflix subscription voucher supporting 4 simultaneous screens. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 129.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"12 months 4K UHD streaming\", \"4 simultaneous screens allowed\", \"Download on 6 devices\", \"Instant prepaid voucher code\"]}"
      },
      {
            "id": "prod-gift-015",
            "category": "GIFTCARDS",
            "title": "Spotify Premium Individual 1-Year Voucher \u2014 Batch #15",
            "description": "12 months uninterrupted ad-free music, offline listening and high-fidelity sound. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 79.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"12 months ad-free music\", \"Offline song downloads\", \"Unlimited track skips\", \"Direct account redemption\"]}"
      },
      {
            "id": "prod-gift-016",
            "category": "GIFTCARDS",
            "title": "Binance USDT Gift Card ($100 USDT) \u2014 Batch #16",
            "description": "Direct zero-fee Binance crypto gift card pre-loaded with 100 USDT. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 105.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"100 USDT verified balance\", \"Zero deposit fee on Binance\", \"Transferable & instant redeem\", \"Safe on-chain verification\"]}"
      },
      {
            "id": "prod-gift-017",
            "category": "GIFTCARDS",
            "title": "Binance USDT Gift Card ($500 USDT) \u2014 Batch #17",
            "description": "High-value crypto gift card loaded with 500 USDT for immediate trading. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 515.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"500 USDT balance\", \"Instant account crediting\", \"Redeemable on Binance app & web\", \"Instant cryptographic code\"]}"
      },
      {
            "id": "prod-gift-018",
            "category": "GIFTCARDS",
            "title": "Airbnb Travel Gift Voucher ($250) \u2014 Batch #18",
            "description": "Redeemable for luxury vacation villas, apartments and Airbnb Experiences worldwide. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 250.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$250 Airbnb booking credit\", \"Never expires\", \"Valid in 220+ countries\", \"Instant digital delivery\"]}"
      },
      {
            "id": "prod-gift-019",
            "category": "GIFTCARDS",
            "title": "Uber & Uber Eats Digital Gift Card ($100) \u2014 Batch #19",
            "description": "Combined voucher for Uber rides and Uber Eats restaurant meal deliveries worldwide. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$100 Uber Cash balance\", \"Use for rides and food deliveries\", \"Valid in all countries Uber operates\", \"Instant code reveal\"]}"
      },
      {
            "id": "prod-gift-020",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($50) \u2014 Batch #20",
            "description": "Amazon gift voucher redeemable on Amazon US, UK, EU and worldwide storefronts. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$50 face value digital code\", \"No expiration date or fees\", \"Redeemable for millions of physical items\", \"Instant digital code delivery\"]}"
      },
      {
            "id": "prod-gift-021",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($100) \u2014 Batch #21",
            "description": "Official Amazon digital gift card code with instant wallet balance top-up. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$100 spendable Amazon balance\", \"Never expires\", \"Stackable with other gift cards\", \"Delivered directly to dashboard\"]}"
      },
      {
            "id": "prod-gift-022",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($250) \u2014 Batch #22",
            "description": "High-value Amazon digital gift voucher for electronics, cloud servers and essentials. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 250.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$250 full balance\", \"Universal redemption\", \"Secure cryptographic code\", \"Instant dispatch\"]}"
      },
      {
            "id": "prod-gift-023",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($500) \u2014 Batch #23",
            "description": "Premium $500 Amazon gift certificate for high-ticket online shopping. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 500.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$500 instant Amazon credit\", \"No hidden transaction charges\", \"Immediate code display\", \"100% replacement guarantee\"]}"
      },
      {
            "id": "prod-gift-024",
            "category": "GIFTCARDS",
            "title": "Apple Gift Card & App Store ($50) \u2014 Batch #24",
            "description": "All-in-one Apple gift card for hardware, App Store, iCloud, Apple Music and games. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/amazon-apple-giftcard-pack.png\", \"features\": [\"$50 Apple account balance\", \"Buy iPhones, Macs, iPads & Apps\", \"Redeemable on Apple.com & App Store\", \"Instant digital dispatch\"]}"
      },
      {
            "id": "prod-gift-025",
            "category": "GIFTCARDS",
            "title": "Apple Gift Card & App Store ($100) \u2014 Batch #25",
            "description": "Universal Apple balance card for digital subscriptions and Apple Store purchases. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/amazon-apple-giftcard-pack.png\", \"features\": [\"$100 spendable Apple credit\", \"Works for iCloud+, Apple TV+, Music\", \"Hardware & software eligible\", \"Instant code delivery\"]}"
      },
      {
            "id": "prod-gift-026",
            "category": "GIFTCARDS",
            "title": "Apple Gift Card & App Store ($250) \u2014 Batch #26",
            "description": "Premium Apple voucher for hardware upgrades and professional Mac apps. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 250.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/amazon-apple-giftcard-pack.png\", \"features\": [\"$250 official Apple credit\", \"Stackable up to $2,000 per account\", \"No expiration date\", \"Instant digital code\"]}"
      },
      {
            "id": "prod-gift-027",
            "category": "GIFTCARDS",
            "title": "Google Play Store Digital Card ($50) \u2014 Batch #27",
            "description": "Google Play digital code for Android apps, games, YouTube Premium and movies. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$50 Google Play balance\", \"Instant Android redemption\", \"Pay for in-app subscriptions\", \"No expiration fees\"]}"
      },
      {
            "id": "prod-gift-028",
            "category": "GIFTCARDS",
            "title": "Google Play Store Digital Card ($100) \u2014 Batch #28",
            "description": "Official Google Play gift voucher code delivered instantly to your account. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$100 digital wallet balance\", \"Valid for all Google services\", \"Direct store redemption\", \"Instant delivery\"]}"
      },
      {
            "id": "prod-gift-029",
            "category": "GIFTCARDS",
            "title": "Steam Wallet Digital Gaming Card ($50) \u2014 Batch #29",
            "description": "Instant funds for your Steam account to purchase PC games, DLCs and community market skins. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"$50 Steam Wallet credit\", \"Buy thousands of PC games on Steam\", \"Trade on Steam Community Market\", \"Instant code generation\"]}"
      },
      {
            "id": "prod-gift-030",
            "category": "GIFTCARDS",
            "title": "Steam Wallet Digital Gaming Card ($100) \u2014 Batch #30",
            "description": "Top-tier Steam Wallet balance voucher for AAA game releases and VR titles. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"$100 Steam balance code\", \"Never expires\", \"Global region un-restricted\", \"Instant digital reveal\"]}"
      },
      {
            "id": "prod-gift-031",
            "category": "GIFTCARDS",
            "title": "PlayStation Network (PSN) Voucher ($75) \u2014 Batch #31",
            "description": "PlayStation Store digital code for PS5 & PS4 digital games, add-ons and PS Plus. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 75.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"$75 PSN Store credit\", \"Buy PS5 games and DLCs\", \"Renew PS Plus Essential/Extra\", \"Instant digital dispatch\"]}"
      },
      {
            "id": "prod-gift-032",
            "category": "GIFTCARDS",
            "title": "Xbox Game Pass Ultimate 12-Month Card \u2014 Batch #32",
            "description": "Full 1-Year Xbox Game Pass Ultimate including hundreds of games on PC and Xbox Series X. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 149.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"12 months of Game Pass Ultimate\", \"Day-one access to new Xbox games\", \"EA Play membership included\", \"Cloud gaming on mobile & browser\"]}"
      },
      {
            "id": "prod-gift-033",
            "category": "GIFTCARDS",
            "title": "Netflix Premium 12-Month Subscription Card \u2014 Batch #33",
            "description": "1-Year 4K Ultra HD Netflix subscription voucher supporting 4 simultaneous screens. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 129.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"12 months 4K UHD streaming\", \"4 simultaneous screens allowed\", \"Download on 6 devices\", \"Instant prepaid voucher code\"]}"
      },
      {
            "id": "prod-gift-034",
            "category": "GIFTCARDS",
            "title": "Spotify Premium Individual 1-Year Voucher \u2014 Batch #34",
            "description": "12 months uninterrupted ad-free music, offline listening and high-fidelity sound. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 79.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"12 months ad-free music\", \"Offline song downloads\", \"Unlimited track skips\", \"Direct account redemption\"]}"
      },
      {
            "id": "prod-gift-035",
            "category": "GIFTCARDS",
            "title": "Binance USDT Gift Card ($100 USDT) \u2014 Batch #35",
            "description": "Direct zero-fee Binance crypto gift card pre-loaded with 100 USDT. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 105.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"100 USDT verified balance\", \"Zero deposit fee on Binance\", \"Transferable & instant redeem\", \"Safe on-chain verification\"]}"
      },
      {
            "id": "prod-gift-036",
            "category": "GIFTCARDS",
            "title": "Binance USDT Gift Card ($500 USDT) \u2014 Batch #36",
            "description": "High-value crypto gift card loaded with 500 USDT for immediate trading. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 515.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"500 USDT balance\", \"Instant account crediting\", \"Redeemable on Binance app & web\", \"Instant cryptographic code\"]}"
      },
      {
            "id": "prod-gift-037",
            "category": "GIFTCARDS",
            "title": "Airbnb Travel Gift Voucher ($250) \u2014 Batch #37",
            "description": "Redeemable for luxury vacation villas, apartments and Airbnb Experiences worldwide. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 250.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$250 Airbnb booking credit\", \"Never expires\", \"Valid in 220+ countries\", \"Instant digital delivery\"]}"
      },
      {
            "id": "prod-gift-038",
            "category": "GIFTCARDS",
            "title": "Uber & Uber Eats Digital Gift Card ($100) \u2014 Batch #38",
            "description": "Combined voucher for Uber rides and Uber Eats restaurant meal deliveries worldwide. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$100 Uber Cash balance\", \"Use for rides and food deliveries\", \"Valid in all countries Uber operates\", \"Instant code reveal\"]}"
      },
      {
            "id": "prod-gift-039",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($50) \u2014 Batch #39",
            "description": "Amazon gift voucher redeemable on Amazon US, UK, EU and worldwide storefronts. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$50 face value digital code\", \"No expiration date or fees\", \"Redeemable for millions of physical items\", \"Instant digital code delivery\"]}"
      },
      {
            "id": "prod-gift-040",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($100) \u2014 Batch #40",
            "description": "Official Amazon digital gift card code with instant wallet balance top-up. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$100 spendable Amazon balance\", \"Never expires\", \"Stackable with other gift cards\", \"Delivered directly to dashboard\"]}"
      },
      {
            "id": "prod-gift-041",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($250) \u2014 Batch #41",
            "description": "High-value Amazon digital gift voucher for electronics, cloud servers and essentials. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 250.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$250 full balance\", \"Universal redemption\", \"Secure cryptographic code\", \"Instant dispatch\"]}"
      },
      {
            "id": "prod-gift-042",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($500) \u2014 Batch #42",
            "description": "Premium $500 Amazon gift certificate for high-ticket online shopping. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 500.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$500 instant Amazon credit\", \"No hidden transaction charges\", \"Immediate code display\", \"100% replacement guarantee\"]}"
      },
      {
            "id": "prod-gift-043",
            "category": "GIFTCARDS",
            "title": "Apple Gift Card & App Store ($50) \u2014 Batch #43",
            "description": "All-in-one Apple gift card for hardware, App Store, iCloud, Apple Music and games. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/amazon-apple-giftcard-pack.png\", \"features\": [\"$50 Apple account balance\", \"Buy iPhones, Macs, iPads & Apps\", \"Redeemable on Apple.com & App Store\", \"Instant digital dispatch\"]}"
      },
      {
            "id": "prod-gift-044",
            "category": "GIFTCARDS",
            "title": "Apple Gift Card & App Store ($100) \u2014 Batch #44",
            "description": "Universal Apple balance card for digital subscriptions and Apple Store purchases. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/amazon-apple-giftcard-pack.png\", \"features\": [\"$100 spendable Apple credit\", \"Works for iCloud+, Apple TV+, Music\", \"Hardware & software eligible\", \"Instant code delivery\"]}"
      },
      {
            "id": "prod-gift-045",
            "category": "GIFTCARDS",
            "title": "Apple Gift Card & App Store ($250) \u2014 Batch #45",
            "description": "Premium Apple voucher for hardware upgrades and professional Mac apps. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 250.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/amazon-apple-giftcard-pack.png\", \"features\": [\"$250 official Apple credit\", \"Stackable up to $2,000 per account\", \"No expiration date\", \"Instant digital code\"]}"
      },
      {
            "id": "prod-gift-046",
            "category": "GIFTCARDS",
            "title": "Google Play Store Digital Card ($50) \u2014 Batch #46",
            "description": "Google Play digital code for Android apps, games, YouTube Premium and movies. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$50 Google Play balance\", \"Instant Android redemption\", \"Pay for in-app subscriptions\", \"No expiration fees\"]}"
      },
      {
            "id": "prod-gift-047",
            "category": "GIFTCARDS",
            "title": "Google Play Store Digital Card ($100) \u2014 Batch #47",
            "description": "Official Google Play gift voucher code delivered instantly to your account. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$100 digital wallet balance\", \"Valid for all Google services\", \"Direct store redemption\", \"Instant delivery\"]}"
      },
      {
            "id": "prod-gift-048",
            "category": "GIFTCARDS",
            "title": "Steam Wallet Digital Gaming Card ($50) \u2014 Batch #48",
            "description": "Instant funds for your Steam account to purchase PC games, DLCs and community market skins. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"$50 Steam Wallet credit\", \"Buy thousands of PC games on Steam\", \"Trade on Steam Community Market\", \"Instant code generation\"]}"
      },
      {
            "id": "prod-gift-049",
            "category": "GIFTCARDS",
            "title": "Steam Wallet Digital Gaming Card ($100) \u2014 Batch #49",
            "description": "Top-tier Steam Wallet balance voucher for AAA game releases and VR titles. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"$100 Steam balance code\", \"Never expires\", \"Global region un-restricted\", \"Instant digital reveal\"]}"
      },
      {
            "id": "prod-gift-050",
            "category": "GIFTCARDS",
            "title": "PlayStation Network (PSN) Voucher ($75) \u2014 Batch #50",
            "description": "PlayStation Store digital code for PS5 & PS4 digital games, add-ons and PS Plus. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 75.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"$75 PSN Store credit\", \"Buy PS5 games and DLCs\", \"Renew PS Plus Essential/Extra\", \"Instant digital dispatch\"]}"
      },
      {
            "id": "prod-gift-051",
            "category": "GIFTCARDS",
            "title": "Xbox Game Pass Ultimate 12-Month Card \u2014 Batch #51",
            "description": "Full 1-Year Xbox Game Pass Ultimate including hundreds of games on PC and Xbox Series X. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 149.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/gaming-steam-playstation-voucher.png\", \"features\": [\"12 months of Game Pass Ultimate\", \"Day-one access to new Xbox games\", \"EA Play membership included\", \"Cloud gaming on mobile & browser\"]}"
      },
      {
            "id": "prod-gift-052",
            "category": "GIFTCARDS",
            "title": "Netflix Premium 12-Month Subscription Card \u2014 Batch #52",
            "description": "1-Year 4K Ultra HD Netflix subscription voucher supporting 4 simultaneous screens. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 129.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"12 months 4K UHD streaming\", \"4 simultaneous screens allowed\", \"Download on 6 devices\", \"Instant prepaid voucher code\"]}"
      },
      {
            "id": "prod-gift-053",
            "category": "GIFTCARDS",
            "title": "Spotify Premium Individual 1-Year Voucher \u2014 Batch #53",
            "description": "12 months uninterrupted ad-free music, offline listening and high-fidelity sound. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 79.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"12 months ad-free music\", \"Offline song downloads\", \"Unlimited track skips\", \"Direct account redemption\"]}"
      },
      {
            "id": "prod-gift-054",
            "category": "GIFTCARDS",
            "title": "Binance USDT Gift Card ($100 USDT) \u2014 Batch #54",
            "description": "Direct zero-fee Binance crypto gift card pre-loaded with 100 USDT. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 105.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"100 USDT verified balance\", \"Zero deposit fee on Binance\", \"Transferable & instant redeem\", \"Safe on-chain verification\"]}"
      },
      {
            "id": "prod-gift-055",
            "category": "GIFTCARDS",
            "title": "Binance USDT Gift Card ($500 USDT) \u2014 Batch #55",
            "description": "High-value crypto gift card loaded with 500 USDT for immediate trading. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 515.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"500 USDT balance\", \"Instant account crediting\", \"Redeemable on Binance app & web\", \"Instant cryptographic code\"]}"
      },
      {
            "id": "prod-gift-056",
            "category": "GIFTCARDS",
            "title": "Airbnb Travel Gift Voucher ($250) \u2014 Batch #56",
            "description": "Redeemable for luxury vacation villas, apartments and Airbnb Experiences worldwide. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 250.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$250 Airbnb booking credit\", \"Never expires\", \"Valid in 220+ countries\", \"Instant digital delivery\"]}"
      },
      {
            "id": "prod-gift-057",
            "category": "GIFTCARDS",
            "title": "Uber & Uber Eats Digital Gift Card ($100) \u2014 Batch #57",
            "description": "Combined voucher for Uber rides and Uber Eats restaurant meal deliveries worldwide. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$100 Uber Cash balance\", \"Use for rides and food deliveries\", \"Valid in all countries Uber operates\", \"Instant code reveal\"]}"
      },
      {
            "id": "prod-gift-058",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($50) \u2014 Batch #58",
            "description": "Amazon gift voucher redeemable on Amazon US, UK, EU and worldwide storefronts. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 50.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$50 face value digital code\", \"No expiration date or fees\", \"Redeemable for millions of physical items\", \"Instant digital code delivery\"]}"
      },
      {
            "id": "prod-gift-059",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($100) \u2014 Batch #59",
            "description": "Official Amazon digital gift card code with instant wallet balance top-up. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 100.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$100 spendable Amazon balance\", \"Never expires\", \"Stackable with other gift cards\", \"Delivered directly to dashboard\"]}"
      },
      {
            "id": "prod-gift-060",
            "category": "GIFTCARDS",
            "title": "Amazon Global Digital Gift Card ($250) \u2014 Batch #60",
            "description": "High-value Amazon digital gift voucher for electronics, cloud servers and essentials. Digital voucher code delivered with verified redemption guarantee.",
            "priceUsdt": 250.0,
            "inventoryCount": 150,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/giftcard-luxury-vault.png\", \"features\": [\"$250 full balance\", \"Universal redemption\", \"Secure cryptographic code\", \"Instant dispatch\"]}"
      },
      {
            "id": "prod-dev-001",
            "category": "TOKEN_CREATION",
            "title": "Custom BEP20 Token Smart Contract Deployment \u2014 Tier #01",
            "description": "Full development, verification and mainnet deployment of audited BEP20 token on BNB Chain. Tier #01 custom deployment and architecture package.",
            "priceUsdt": 499.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"OpenZeppelin standard contract\", \"BscScan verified source code\", \"Custom name, symbol, decimals & supply\", \"Optional Mintable, Burnable & Pause\"]}"
      },
      {
            "id": "prod-dev-002",
            "category": "TOKEN_CREATION",
            "title": "Custom ERC20 Token Deployment (Ethereum Mainnet) \u2014 Tier #02",
            "description": "Institutional Ethereum ERC20 smart contract deployment with full Etherscan verification. Tier #02 custom deployment and architecture package.",
            "priceUsdt": 814.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"Gas-optimized Solidity 0.8.24 code\", \"Etherscan automated verification\", \"Multi-Sig ownership transfer\", \"Ready for Uniswap V3 liquidity\"]}"
      },
      {
            "id": "prod-dev-003",
            "category": "TOKEN_CREATION",
            "title": "TRC20 Token Smart Contract (TRON Mainnet) \u2014 Tier #03",
            "description": "Fast, high-throughput TRC20 token deployment on TRON network with TronScan verification. Tier #03 custom deployment and architecture package.",
            "priceUsdt": 429.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"TronScan verified contract\", \"Instant transfer speed (2000 TPS)\", \"Low energy fees optimization\", \"Ready for SunSwap listing\"]}"
      },
      {
            "id": "prod-dev-004",
            "category": "TOKEN_CREATION",
            "title": "Solana SPL Token Creation & Metaplex Metadata \u2014 Tier #04",
            "description": "Ultra-fast Solana SPL token with on-chain Metaplex metadata, logo, social links and Raydium readiness. Tier #04 custom deployment and architecture package.",
            "priceUsdt": 544.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/solana-spl-token-launch.png\", \"features\": [\"Metaplex on-chain metadata standard\", \"Embedded logo & description\", \"Revoke Mint & Freeze authority option\", \"Ready for Raydium liquidity pool\"]}"
      },
      {
            "id": "prod-dev-005",
            "category": "TOKEN_CREATION",
            "title": "Sui Move Token Smart Contract Deployment \u2014 Tier #05",
            "description": "Native Sui Move language token contract with object-centric ownership and sub-second finality. Tier #05 custom deployment and architecture package.",
            "priceUsdt": 659.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/solana-spl-token-launch.png\", \"features\": [\"Native Sui Move code verification\", \"Suiscan explorer verification\", \"Object-oriented treasury capability\", \"High TPS parallel execution\"]}"
      },
      {
            "id": "prod-dev-006",
            "category": "TOKEN_CREATION",
            "title": "Uniswap V3 Concentrated Liquidity Pairing \u2014 Tier #06",
            "description": "Creation and mathematical optimization of Uniswap V3 concentrated liquidity pool. Tier #06 custom deployment and architecture package.",
            "priceUsdt": 424.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"Optimal price tick range modeling\", \"Liquidity NFT receipt minting\", \"Slippage tolerance configuration\", \"Zero-loss impermanent hedging guide\"]}"
      },
      {
            "id": "prod-dev-007",
            "category": "TOKEN_CREATION",
            "title": "PancakeSwap V3 Liquidity Pool Initialization \u2014 Tier #07",
            "description": "Pairing and initializing your token liquidity pool on BNB Chain PancakeSwap. Tier #07 custom deployment and architecture package.",
            "priceUsdt": 389.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"V3 concentrated pool setup\", \"LP token lock or burn proof\", \"Trading pair verification\", \"Listing on DexScreener & GeckoTerminal\"]}"
      },
      {
            "id": "prod-dev-008",
            "category": "TOKEN_CREATION",
            "title": "Full Quantitative Smart Contract Security Audit \u2014 Tier #08",
            "description": "In-depth formal mathematical verification, static analysis and vulnerability penetration report. Tier #08 custom deployment and architecture package.",
            "priceUsdt": 1404.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/smart-contract-audit.png\", \"features\": [\"Slither & Mythril automated scans\", \"Manual line-by-line developer review\", \"Reentrancy & overflow verification\", \"Official PDF audit certificate & badge\"]}"
      },
      {
            "id": "prod-dev-009",
            "category": "TOKEN_CREATION",
            "title": "Staking & Yield Farming Smart Contract Suite \u2014 Tier #09",
            "description": "Custom staking vault smart contract allowing token holders to lock tokens and earn rewards. Tier #09 custom deployment and architecture package.",
            "priceUsdt": 1019.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-reserve-vault.png\", \"features\": [\"Configurable lock periods (30, 60, 90d)\", \"Automated compound interest math\", \"Emergency withdraw safety logic\", \"Full admin management dashboard\"]}"
      },
      {
            "id": "prod-dev-010",
            "category": "TOKEN_CREATION",
            "title": "Token Vesting & Team Lock Smart Contract \u2014 Tier #10",
            "description": "Automated linear and cliff token vesting smart contract for team and seed investors. Tier #10 custom deployment and architecture package.",
            "priceUsdt": 585.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/smart-contract-audit.png\", \"features\": [\"Custom cliff and linear duration\", \"Beneficiary claim portal integration\", \"Immutable time-locked security\", \"Audited OpenZeppelin Vesting standard\"]}"
      },
      {
            "id": "prod-dev-011",
            "category": "TOKEN_CREATION",
            "title": "Custom BEP20 Token Smart Contract Deployment \u2014 Tier #11",
            "description": "Full development, verification and mainnet deployment of audited BEP20 token on BNB Chain. Tier #11 custom deployment and architecture package.",
            "priceUsdt": 649.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"OpenZeppelin standard contract\", \"BscScan verified source code\", \"Custom name, symbol, decimals & supply\", \"Optional Mintable, Burnable & Pause\"]}"
      },
      {
            "id": "prod-dev-012",
            "category": "TOKEN_CREATION",
            "title": "Custom ERC20 Token Deployment (Ethereum Mainnet) \u2014 Tier #12",
            "description": "Institutional Ethereum ERC20 smart contract deployment with full Etherscan verification. Tier #12 custom deployment and architecture package.",
            "priceUsdt": 964.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"Gas-optimized Solidity 0.8.24 code\", \"Etherscan automated verification\", \"Multi-Sig ownership transfer\", \"Ready for Uniswap V3 liquidity\"]}"
      },
      {
            "id": "prod-dev-013",
            "category": "TOKEN_CREATION",
            "title": "TRC20 Token Smart Contract (TRON Mainnet) \u2014 Tier #13",
            "description": "Fast, high-throughput TRC20 token deployment on TRON network with TronScan verification. Tier #13 custom deployment and architecture package.",
            "priceUsdt": 579.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"TronScan verified contract\", \"Instant transfer speed (2000 TPS)\", \"Low energy fees optimization\", \"Ready for SunSwap listing\"]}"
      },
      {
            "id": "prod-dev-014",
            "category": "TOKEN_CREATION",
            "title": "Solana SPL Token Creation & Metaplex Metadata \u2014 Tier #14",
            "description": "Ultra-fast Solana SPL token with on-chain Metaplex metadata, logo, social links and Raydium readiness. Tier #14 custom deployment and architecture package.",
            "priceUsdt": 694.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/solana-spl-token-launch.png\", \"features\": [\"Metaplex on-chain metadata standard\", \"Embedded logo & description\", \"Revoke Mint & Freeze authority option\", \"Ready for Raydium liquidity pool\"]}"
      },
      {
            "id": "prod-dev-015",
            "category": "TOKEN_CREATION",
            "title": "Sui Move Token Smart Contract Deployment \u2014 Tier #15",
            "description": "Native Sui Move language token contract with object-centric ownership and sub-second finality. Tier #15 custom deployment and architecture package.",
            "priceUsdt": 809.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/solana-spl-token-launch.png\", \"features\": [\"Native Sui Move code verification\", \"Suiscan explorer verification\", \"Object-oriented treasury capability\", \"High TPS parallel execution\"]}"
      },
      {
            "id": "prod-dev-016",
            "category": "TOKEN_CREATION",
            "title": "Uniswap V3 Concentrated Liquidity Pairing \u2014 Tier #16",
            "description": "Creation and mathematical optimization of Uniswap V3 concentrated liquidity pool. Tier #16 custom deployment and architecture package.",
            "priceUsdt": 574.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"Optimal price tick range modeling\", \"Liquidity NFT receipt minting\", \"Slippage tolerance configuration\", \"Zero-loss impermanent hedging guide\"]}"
      },
      {
            "id": "prod-dev-017",
            "category": "TOKEN_CREATION",
            "title": "PancakeSwap V3 Liquidity Pool Initialization \u2014 Tier #17",
            "description": "Pairing and initializing your token liquidity pool on BNB Chain PancakeSwap. Tier #17 custom deployment and architecture package.",
            "priceUsdt": 539.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"V3 concentrated pool setup\", \"LP token lock or burn proof\", \"Trading pair verification\", \"Listing on DexScreener & GeckoTerminal\"]}"
      },
      {
            "id": "prod-dev-018",
            "category": "TOKEN_CREATION",
            "title": "Full Quantitative Smart Contract Security Audit \u2014 Tier #18",
            "description": "In-depth formal mathematical verification, static analysis and vulnerability penetration report. Tier #18 custom deployment and architecture package.",
            "priceUsdt": 1554.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/smart-contract-audit.png\", \"features\": [\"Slither & Mythril automated scans\", \"Manual line-by-line developer review\", \"Reentrancy & overflow verification\", \"Official PDF audit certificate & badge\"]}"
      },
      {
            "id": "prod-dev-019",
            "category": "TOKEN_CREATION",
            "title": "Staking & Yield Farming Smart Contract Suite \u2014 Tier #19",
            "description": "Custom staking vault smart contract allowing token holders to lock tokens and earn rewards. Tier #19 custom deployment and architecture package.",
            "priceUsdt": 1169.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-reserve-vault.png\", \"features\": [\"Configurable lock periods (30, 60, 90d)\", \"Automated compound interest math\", \"Emergency withdraw safety logic\", \"Full admin management dashboard\"]}"
      },
      {
            "id": "prod-dev-020",
            "category": "TOKEN_CREATION",
            "title": "Token Vesting & Team Lock Smart Contract \u2014 Tier #20",
            "description": "Automated linear and cliff token vesting smart contract for team and seed investors. Tier #20 custom deployment and architecture package.",
            "priceUsdt": 735.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/smart-contract-audit.png\", \"features\": [\"Custom cliff and linear duration\", \"Beneficiary claim portal integration\", \"Immutable time-locked security\", \"Audited OpenZeppelin Vesting standard\"]}"
      },
      {
            "id": "prod-dev-021",
            "category": "TOKEN_CREATION",
            "title": "Custom BEP20 Token Smart Contract Deployment \u2014 Tier #21",
            "description": "Full development, verification and mainnet deployment of audited BEP20 token on BNB Chain. Tier #21 custom deployment and architecture package.",
            "priceUsdt": 799.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"OpenZeppelin standard contract\", \"BscScan verified source code\", \"Custom name, symbol, decimals & supply\", \"Optional Mintable, Burnable & Pause\"]}"
      },
      {
            "id": "prod-dev-022",
            "category": "TOKEN_CREATION",
            "title": "Custom ERC20 Token Deployment (Ethereum Mainnet) \u2014 Tier #22",
            "description": "Institutional Ethereum ERC20 smart contract deployment with full Etherscan verification. Tier #22 custom deployment and architecture package.",
            "priceUsdt": 1114.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"Gas-optimized Solidity 0.8.24 code\", \"Etherscan automated verification\", \"Multi-Sig ownership transfer\", \"Ready for Uniswap V3 liquidity\"]}"
      },
      {
            "id": "prod-dev-023",
            "category": "TOKEN_CREATION",
            "title": "TRC20 Token Smart Contract (TRON Mainnet) \u2014 Tier #23",
            "description": "Fast, high-throughput TRC20 token deployment on TRON network with TronScan verification. Tier #23 custom deployment and architecture package.",
            "priceUsdt": 729.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"TronScan verified contract\", \"Instant transfer speed (2000 TPS)\", \"Low energy fees optimization\", \"Ready for SunSwap listing\"]}"
      },
      {
            "id": "prod-dev-024",
            "category": "TOKEN_CREATION",
            "title": "Solana SPL Token Creation & Metaplex Metadata \u2014 Tier #24",
            "description": "Ultra-fast Solana SPL token with on-chain Metaplex metadata, logo, social links and Raydium readiness. Tier #24 custom deployment and architecture package.",
            "priceUsdt": 844.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/solana-spl-token-launch.png\", \"features\": [\"Metaplex on-chain metadata standard\", \"Embedded logo & description\", \"Revoke Mint & Freeze authority option\", \"Ready for Raydium liquidity pool\"]}"
      },
      {
            "id": "prod-dev-025",
            "category": "TOKEN_CREATION",
            "title": "Sui Move Token Smart Contract Deployment \u2014 Tier #25",
            "description": "Native Sui Move language token contract with object-centric ownership and sub-second finality. Tier #25 custom deployment and architecture package.",
            "priceUsdt": 959.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/solana-spl-token-launch.png\", \"features\": [\"Native Sui Move code verification\", \"Suiscan explorer verification\", \"Object-oriented treasury capability\", \"High TPS parallel execution\"]}"
      },
      {
            "id": "prod-dev-026",
            "category": "TOKEN_CREATION",
            "title": "Uniswap V3 Concentrated Liquidity Pairing \u2014 Tier #26",
            "description": "Creation and mathematical optimization of Uniswap V3 concentrated liquidity pool. Tier #26 custom deployment and architecture package.",
            "priceUsdt": 724.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"Optimal price tick range modeling\", \"Liquidity NFT receipt minting\", \"Slippage tolerance configuration\", \"Zero-loss impermanent hedging guide\"]}"
      },
      {
            "id": "prod-dev-027",
            "category": "TOKEN_CREATION",
            "title": "PancakeSwap V3 Liquidity Pool Initialization \u2014 Tier #27",
            "description": "Pairing and initializing your token liquidity pool on BNB Chain PancakeSwap. Tier #27 custom deployment and architecture package.",
            "priceUsdt": 689.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"V3 concentrated pool setup\", \"LP token lock or burn proof\", \"Trading pair verification\", \"Listing on DexScreener & GeckoTerminal\"]}"
      },
      {
            "id": "prod-dev-028",
            "category": "TOKEN_CREATION",
            "title": "Full Quantitative Smart Contract Security Audit \u2014 Tier #28",
            "description": "In-depth formal mathematical verification, static analysis and vulnerability penetration report. Tier #28 custom deployment and architecture package.",
            "priceUsdt": 1704.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/smart-contract-audit.png\", \"features\": [\"Slither & Mythril automated scans\", \"Manual line-by-line developer review\", \"Reentrancy & overflow verification\", \"Official PDF audit certificate & badge\"]}"
      },
      {
            "id": "prod-dev-029",
            "category": "TOKEN_CREATION",
            "title": "Staking & Yield Farming Smart Contract Suite \u2014 Tier #29",
            "description": "Custom staking vault smart contract allowing token holders to lock tokens and earn rewards. Tier #29 custom deployment and architecture package.",
            "priceUsdt": 1319.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-reserve-vault.png\", \"features\": [\"Configurable lock periods (30, 60, 90d)\", \"Automated compound interest math\", \"Emergency withdraw safety logic\", \"Full admin management dashboard\"]}"
      },
      {
            "id": "prod-dev-030",
            "category": "TOKEN_CREATION",
            "title": "Token Vesting & Team Lock Smart Contract \u2014 Tier #30",
            "description": "Automated linear and cliff token vesting smart contract for team and seed investors. Tier #30 custom deployment and architecture package.",
            "priceUsdt": 885.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/smart-contract-audit.png\", \"features\": [\"Custom cliff and linear duration\", \"Beneficiary claim portal integration\", \"Immutable time-locked security\", \"Audited OpenZeppelin Vesting standard\"]}"
      },
      {
            "id": "prod-dev-031",
            "category": "TOKEN_CREATION",
            "title": "Custom BEP20 Token Smart Contract Deployment \u2014 Tier #31",
            "description": "Full development, verification and mainnet deployment of audited BEP20 token on BNB Chain. Tier #31 custom deployment and architecture package.",
            "priceUsdt": 949.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"OpenZeppelin standard contract\", \"BscScan verified source code\", \"Custom name, symbol, decimals & supply\", \"Optional Mintable, Burnable & Pause\"]}"
      },
      {
            "id": "prod-dev-032",
            "category": "TOKEN_CREATION",
            "title": "Custom ERC20 Token Deployment (Ethereum Mainnet) \u2014 Tier #32",
            "description": "Institutional Ethereum ERC20 smart contract deployment with full Etherscan verification. Tier #32 custom deployment and architecture package.",
            "priceUsdt": 1264.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"Gas-optimized Solidity 0.8.24 code\", \"Etherscan automated verification\", \"Multi-Sig ownership transfer\", \"Ready for Uniswap V3 liquidity\"]}"
      },
      {
            "id": "prod-dev-033",
            "category": "TOKEN_CREATION",
            "title": "TRC20 Token Smart Contract (TRON Mainnet) \u2014 Tier #33",
            "description": "Fast, high-throughput TRC20 token deployment on TRON network with TronScan verification. Tier #33 custom deployment and architecture package.",
            "priceUsdt": 879.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"TronScan verified contract\", \"Instant transfer speed (2000 TPS)\", \"Low energy fees optimization\", \"Ready for SunSwap listing\"]}"
      },
      {
            "id": "prod-dev-034",
            "category": "TOKEN_CREATION",
            "title": "Solana SPL Token Creation & Metaplex Metadata \u2014 Tier #34",
            "description": "Ultra-fast Solana SPL token with on-chain Metaplex metadata, logo, social links and Raydium readiness. Tier #34 custom deployment and architecture package.",
            "priceUsdt": 994.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/solana-spl-token-launch.png\", \"features\": [\"Metaplex on-chain metadata standard\", \"Embedded logo & description\", \"Revoke Mint & Freeze authority option\", \"Ready for Raydium liquidity pool\"]}"
      },
      {
            "id": "prod-dev-035",
            "category": "TOKEN_CREATION",
            "title": "Sui Move Token Smart Contract Deployment \u2014 Tier #35",
            "description": "Native Sui Move language token contract with object-centric ownership and sub-second finality. Tier #35 custom deployment and architecture package.",
            "priceUsdt": 1109.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/solana-spl-token-launch.png\", \"features\": [\"Native Sui Move code verification\", \"Suiscan explorer verification\", \"Object-oriented treasury capability\", \"High TPS parallel execution\"]}"
      },
      {
            "id": "prod-dev-036",
            "category": "TOKEN_CREATION",
            "title": "Uniswap V3 Concentrated Liquidity Pairing \u2014 Tier #36",
            "description": "Creation and mathematical optimization of Uniswap V3 concentrated liquidity pool. Tier #36 custom deployment and architecture package.",
            "priceUsdt": 874.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"Optimal price tick range modeling\", \"Liquidity NFT receipt minting\", \"Slippage tolerance configuration\", \"Zero-loss impermanent hedging guide\"]}"
      },
      {
            "id": "prod-dev-037",
            "category": "TOKEN_CREATION",
            "title": "PancakeSwap V3 Liquidity Pool Initialization \u2014 Tier #37",
            "description": "Pairing and initializing your token liquidity pool on BNB Chain PancakeSwap. Tier #37 custom deployment and architecture package.",
            "priceUsdt": 839.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/bep20-token-deployment.png\", \"features\": [\"V3 concentrated pool setup\", \"LP token lock or burn proof\", \"Trading pair verification\", \"Listing on DexScreener & GeckoTerminal\"]}"
      },
      {
            "id": "prod-dev-038",
            "category": "TOKEN_CREATION",
            "title": "Full Quantitative Smart Contract Security Audit \u2014 Tier #38",
            "description": "In-depth formal mathematical verification, static analysis and vulnerability penetration report. Tier #38 custom deployment and architecture package.",
            "priceUsdt": 1854.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/smart-contract-audit.png\", \"features\": [\"Slither & Mythril automated scans\", \"Manual line-by-line developer review\", \"Reentrancy & overflow verification\", \"Official PDF audit certificate & badge\"]}"
      },
      {
            "id": "prod-dev-039",
            "category": "TOKEN_CREATION",
            "title": "Staking & Yield Farming Smart Contract Suite \u2014 Tier #39",
            "description": "Custom staking vault smart contract allowing token holders to lock tokens and earn rewards. Tier #39 custom deployment and architecture package.",
            "priceUsdt": 1469.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/crypto-reserve-vault.png\", \"features\": [\"Configurable lock periods (30, 60, 90d)\", \"Automated compound interest math\", \"Emergency withdraw safety logic\", \"Full admin management dashboard\"]}"
      },
      {
            "id": "prod-dev-040",
            "category": "TOKEN_CREATION",
            "title": "Token Vesting & Team Lock Smart Contract \u2014 Tier #40",
            "description": "Automated linear and cliff token vesting smart contract for team and seed investors. Tier #40 custom deployment and architecture package.",
            "priceUsdt": 1035.0,
            "inventoryCount": 25,
            "isAvailable": true,
            "metadata": "{\"image\": \"/assets/products/smart-contract-audit.png\", \"features\": [\"Custom cliff and linear duration\", \"Beneficiary claim portal integration\", \"Immutable time-locked security\", \"Audited OpenZeppelin Vesting standard\"]}"
      }
],
    shopOrders: [],
    tokenRequests: [],
    academyArticles: [
      { id: 'art-1', title: 'Understanding the NILE 2x Profit Multiplier Mechanism', slug: 'nile-2x-profit-multiplier', category: 'INVESTMENT', language: 'en', summary: 'How funding your staking and tier investments using NILE doubles all daily returns.', contentMarkdown: '# Maximizing Returns with the NILE Ecosystem Token', readTimeMinutes: 4, isPublished: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 'art-2', title: 'Comprehensive Guide to Nile 4-Daily Withdrawal Cycles', slug: 'withdrawal-cycles-guide', category: 'GUIDES', language: 'fa', summary: 'In-depth overview of the 4 daily 3-hour withdrawal processing windows, manual security compliance verification, and on-chain TXID recording.', contentMarkdown: '# Nile Ecosystem Withdrawal Cycles', readTimeMinutes: 5, isPublished: true, createdAt: new Date(), updatedAt: new Date() }
    ],
    adminAuditLogs: [],
    kycDocuments: [],
    cryptoCards: [],
    supportTickets: [],
    presalePurchases: []
  };

  prismaClientInstance = {
    user: {
      findUnique: async ({ where }) => {
        if (where.email) return store.users.find(u => u.email.toLowerCase() === where.email.toLowerCase()) || null;
        if (where.id) return store.users.find(u => u.id === where.id) || null;
        if (where.referralCode) return store.users.find(u => u.referralCode === where.referralCode) || null;
        return null;
      },
      findMany: async (params = {}) => {
        let res = [...store.users];
        if (params.where?.referredById) res = res.filter(u => u.referredById === params.where.referredById);
        return res.map(u => ({
          ...u,
          wallets: store.wallets.filter(w => w.userId === u.id),
          _count: {
            investments: store.userInvestments.filter(i => i.userId === u.id).length,
            deposits: store.deposits.filter(d => d.userId === u.id).length,
            withdrawals: store.withdrawals.filter(w => w.userId === u.id).length,
            referrals: store.users.filter(r => r.referredById === u.id).length
          }
        }));
      },
      count: async (params = {}) => {
        if (params.where?.referredById) return store.users.filter(u => u.referredById === params.where.referredById).length;
        return store.users.length;
      },
      create: async ({ data }) => {
        const newUser = { id: data.id || `usr-${Date.now().toString(36)}`, ...data, createdAt: new Date(), updatedAt: new Date() };
        store.users.push(newUser);
        return newUser;
      },
      update: async ({ where, data }) => {
        const u = store.users.find(x => x.id === where.id);
        if (u) Object.assign(u, data, { updatedAt: new Date() });
        return u;
      }
    },
    wallet: {
      findUnique: async ({ where }) => {
        if (where.userId_type_currency) {
          const { userId, type, currency } = where.userId_type_currency;
          return store.wallets.find(w => w.userId === userId && w.type === type && w.currency === currency) || null;
        }
        if (where.id) return store.wallets.find(w => w.id === where.id) || null;
        return null;
      },
      findMany: async ({ where } = {}) => {
        if (where?.userId) return store.wallets.filter(w => w.userId === where.userId);
        return [...store.wallets];
      },
      create: async ({ data }) => {
        const newW = { id: `w-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`, balance: 0.0, ...data, createdAt: new Date(), updatedAt: new Date() };
        store.wallets.push(newW);
        return newW;
      },
      update: async ({ where, data }) => {
        const w = store.wallets.find(x => x.id === where.id);
        if (w) {
          if (data.balance?.increment !== undefined) w.balance += data.balance.increment;
          else if (data.balance?.decrement !== undefined) w.balance -= data.balance.decrement;
          else if (typeof data.balance === 'number') w.balance = data.balance;
          w.updatedAt = new Date();
        }
        return w;
      }
    },
    deposit: {
      findUnique: async ({ where }) => {
        if (where.id) return store.deposits.find(d => d.id === where.id) || null;
        if (where.txid) return store.deposits.find(d => d.txid === where.txid) || null;
        return null;
      },
      findMany: async (params = {}) => {
        let res = [...store.deposits];
        if (params.where?.userId) res = res.filter(d => d.userId === params.where.userId);
        if (params.take) res = res.slice(0, params.take);
        return res.map(d => ({ ...d, user: store.users.find(u => u.id === d.userId) || null, wallet: store.wallets.find(w => w.id === d.walletId) || null }));
      },
      create: async ({ data }) => {
        const d = { id: `dep-${Date.now().toString(36)}`, status: 'PENDING', ...data, createdAt: new Date() };
        store.deposits.unshift(d);
        return d;
      },
      update: async ({ where, data }) => {
        const d = store.deposits.find(x => x.id === where.id);
        if (d) Object.assign(d, data);
        return d;
      },
      aggregate: async ({ where, _sum } = {}) => {
        let filtered = store.deposits;
        if (where?.status) filtered = filtered.filter(d => d.status === where.status);
        const sum = filtered.reduce((acc, d) => acc + (d.amount || 0), 0);
        return { _sum: { amount: sum } };
      }
    },
    withdrawal: {
      findUnique: async ({ where }) => store.withdrawals.find(w => w.id === where.id) || null,
      findMany: async (params = {}) => {
        let res = [...store.withdrawals];
        if (params.where?.userId) res = res.filter(w => w.userId === params.where.userId);
        if (params.take) res = res.slice(0, params.take);
        return res.map(w => ({ ...w, user: store.users.find(u => u.id === w.userId) || null, wallet: store.wallets.find(wl => wl.id === w.walletId) || null }));
      },
      create: async ({ data }) => {
        const w = { id: `wth-${Date.now().toString(36)}`, status: 'PENDING', ...data, createdAt: new Date() };
        store.withdrawals.unshift(w);
        return w;
      },
      update: async ({ where, data }) => {
        const w = store.withdrawals.find(x => x.id === where.id);
        if (w) Object.assign(w, data);
        return w;
      },
      count: async ({ where } = {}) => {
        if (where?.status) return store.withdrawals.filter(w => w.status === where.status).length;
        return store.withdrawals.length;
      },
      aggregate: async ({ where, _sum } = {}) => {
        let filtered = store.withdrawals;
        if (where?.status) filtered = filtered.filter(w => w.status === where.status);
        const sum = filtered.reduce((acc, w) => acc + (w.amount || 0), 0);
        return { _sum: { amount: sum } };
      }
    },
    investmentPlan: {
      findMany: async () => [...store.investmentPlans],
      findUnique: async ({ where }) => store.investmentPlans.find(p => p.id === where.id) || null
    },
    userInvestment: {
      create: async ({ data }) => {
        const inv = { id: `inv-${Date.now().toString(36)}`, totalProfitAccrued: 0.0, status: 'ACTIVE', ...data, createdAt: new Date(), updatedAt: new Date() };
        store.userInvestments.unshift(inv);
        return inv;
      },
      findMany: async (params = {}) => {
        let res = [...store.userInvestments];
        if (params.where?.userId) res = res.filter(i => i.userId === params.where.userId);
        return res.map(i => ({ ...i, plan: store.investmentPlans.find(p => p.id === i.planId) || null }));
      },
      count: async ({ where } = {}) => {
        if (where?.status) return store.userInvestments.filter(i => i.status === where.status).length;
        return store.userInvestments.length;
      }
    },
    nileStaking: {
      create: async ({ data }) => {
        const st = { id: `stk-${Date.now().toString(36)}`, status: 'ACTIVE', ...data, createdAt: new Date() };
        store.nileStakings.unshift(st);
        return st;
      },
      findMany: async ({ where } = {}) => {
        if (where?.userId) return store.nileStakings.filter(s => s.userId === where.userId);
        return [...store.nileStakings];
      }
    },
    referralEarning: {
      aggregate: async ({ where } = {}) => {
        const filtered = store.referralEarnings.filter(r => !where?.referrerId || r.referrerId === where.referrerId);
        const sum = filtered.reduce((acc, r) => acc + (r.amount || 0), 0);
        return { _sum: { amount: sum } };
      },
      groupBy: async () => [],
      findMany: async ({ where } = {}) => store.referralEarnings.filter(r => !where?.referrerId || r.referrerId === where.referrerId),
      create: async ({ data }) => {
        const r = { id: `ref-${Date.now().toString(36)}`, ...data, createdAt: new Date() };
        store.referralEarnings.unshift(r);
        return r;
      }
    },
    shopProduct: {
      findMany: async ({ where } = {}) => {
        if (where?.category) return store.shopProducts.filter(p => p.category === where.category);
        return [...store.shopProducts];
      },
      findUnique: async ({ where }) => store.shopProducts.find(p => p.id === where.id) || null
    },
    shopOrder: {
      create: async ({ data }) => {
        const o = { id: `ord-${Date.now().toString(36)}`, ...data, createdAt: new Date() };
        store.shopOrders.unshift(o);
        return o;
      },
      findMany: async ({ where } = {}) => {
        let res = [...store.shopOrders];
        if (where?.userId) res = res.filter(o => o.userId === where.userId);
        return res.map(o => ({ ...o, product: store.shopProducts.find(p => p.id === o.productId) || null }));
      }
    },
    tokenCreationRequest: {
      create: async ({ data }) => {
        const t = { id: `tok-${Date.now().toString(36)}`, ...data, createdAt: new Date() };
        store.tokenRequests.unshift(t);
        return t;
      },
      findMany: async ({ where } = {}) => {
        if (where?.userId) return store.tokenRequests.filter(t => t.userId === where.userId);
        return [...store.tokenRequests];
      }
    },
    academyArticle: {
      findMany: async ({ where } = {}) => {
        let res = [...store.academyArticles];
        if (where?.language) res = res.filter(a => a.language === where.language);
        if (where?.category) res = res.filter(a => a.category === where.category);
        return res;
      },
      findUnique: async ({ where }) => store.academyArticles.find(a => a.slug === where.slug) || null
    },
    adminAuditLog: {
      create: async ({ data }) => {
        const log = { id: `log-${Date.now().toString(36)}`, ...data, createdAt: new Date() };
        store.adminAuditLogs.unshift(log);
        return log;
      },
      findMany: async (params = {}) => {
        let res = [...store.adminAuditLogs];
        if (params.take) res = res.slice(0, params.take);
        return res.map(l => ({
          ...l,
          admin: store.users.find(u => u.id === l.adminId) || null,
          targetUser: store.users.find(u => u.id === l.targetUserId) || null
        }));
      }
    },
    kycDocument: {
      create: async ({ data }) => {
        const k = { id: `kyc-${Date.now().toString(36)}`, ...data, createdAt: new Date() };
        store.kycDocuments.unshift(k);
        return k;
      },
      findMany: async ({ where } = {}) => {
        let res = [...store.kycDocuments];
        if (where?.status) res = res.filter(k => k.status === where.status);
        if (where?.userId) res = res.filter(k => k.userId === where.userId);
        return res.map(k => ({ ...k, user: store.users.find(u => u.id === k.userId) || null }));
      },
      count: async ({ where } = {}) => {
        if (where?.status) return store.kycDocuments.filter(k => k.status === where.status).length;
        return store.kycDocuments.length;
      },
      updateMany: async ({ where, data }) => {
        store.kycDocuments.forEach(k => {
          if (k.userId === where.userId && (where.status === undefined || k.status === where.status)) {
            Object.assign(k, data);
          }
        });
        return { count: 1 };
      }
    },
    cryptoCard: {
      findMany: async ({ where } = {}) => {
        if (where?.userId) return store.cryptoCards.filter(c => c.userId === where.userId);
        return [...store.cryptoCards];
      },
      findUnique: async ({ where }) => store.cryptoCards.find(c => c.id === where.id) || null,
      create: async ({ data }) => {
        const c = { id: `card-${Date.now().toString(36)}`, ...data, createdAt: new Date() };
        store.cryptoCards.push(c);
        return c;
      },
      update: async ({ where, data }) => {
        const c = store.cryptoCards.find(x => x.id === where.id);
        if (c) {
          if (data.balance?.increment !== undefined) c.balance += data.balance.increment;
          else if (typeof data.balance === 'number') c.balance = data.balance;
          if (data.status) c.status = data.status;
        }
        return c;
      }
    },
    supportTicket: {
      findMany: async ({ where } = {}) => {
        if (where?.userId) return store.supportTickets.filter(t => t.userId === where.userId);
        return [...store.supportTickets];
      },
      findUnique: async ({ where }) => store.supportTickets.find(t => t.id === where.id) || null,
      create: async ({ data }) => {
        const t = { id: `tkt-${Date.now().toString(36)}`, ...data, createdAt: new Date(), updatedAt: new Date() };
        store.supportTickets.unshift(t);
        return t;
      },
      update: async ({ where, data }) => {
        const t = store.supportTickets.find(x => x.id === where.id);
        if (t) Object.assign(t, data, { updatedAt: new Date() });
        return t;
      }
    },
    presalePurchase: {
      findMany: async ({ where } = {}) => {
        if (where?.userId) return store.presalePurchases.filter(p => p.userId === where.userId);
        return [...store.presalePurchases];
      },
      create: async ({ data }) => {
        const p = { id: `presale-${Date.now().toString(36)}`, ...data, createdAt: new Date() };
        store.presalePurchases.unshift(p);
        return p;
      }
    },
    $transaction: async (arg) => {
      if (typeof arg === 'function') return await arg(prismaClientInstance);
      if (Array.isArray(arg)) return await Promise.all(arg);
      return null;
    },
    $disconnect: async () => {}
  };
}

module.exports = prismaClientInstance;
