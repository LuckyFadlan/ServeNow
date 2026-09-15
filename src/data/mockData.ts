import {
  HistoricalFinancial,
  TransformationTarget,
  DOAItem,
  ApprovalRequest,
  ImplementationPackage,
  IndustryTemplate,
  CustomerAccount,
  OmnichannelTicket,
  ComplianceControl,
  SalesDeal,
  EmployeeScorecard,
  PersonaInfo
} from '../types';

export const PERSONAS: PersonaInfo[] = [
  {
    role: 'director',
    title: 'Direktur Utama (CEO)',
    name: 'Rahmat Wibowo, M.B.A.',
    department: 'Executive Board',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    badge: 'C-Level Executive',
    accessibleTabs: ['cockpit', 'doa', 'delivery', 'customer360', 'compliance', 'sales', 'workforce'],
    description: 'Fokus pada strategi perusahaan, mengawasi de-coupling rasio karyawan, persetujuan nominal tinggi (>Rp50M/diskon >20%), dan pemenuhan roadmap 36 bulan.'
  },
  {
    role: 'manager',
    title: 'Head of Implementation & Ops',
    name: 'Dian Paramita, S.T.',
    department: 'Service Delivery & Implementation',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    badge: 'Middle Management',
    accessibleTabs: ['doa', 'delivery', 'customer360', 'workforce', 'cockpit'],
    description: 'Memegang span-of-control tim delivery (8.3:1), mengontrol 3 paket implementasi (target 8 minggu), persetujuan DOA wewenang tingkat 1, dan evaluasi scorecard bulanan.'
  },
  {
    role: 'agent',
    title: 'Senior CS Agent & Tech Specialist',
    name: 'Budi Santoso',
    department: 'Omnichannel Operations',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    badge: 'Operational Staff',
    accessibleTabs: ['customer360', 'delivery', 'workforce'],
    description: 'Menangani tiket pelanggan di Customer 360 Workspace, mengeksekusi asistensi AI dan auto-triage tiket, serta mematuhi Core Hours (10.00-16.00 WIB).'
  },
  {
    role: 'compliance',
    title: 'Chief Compliance & Data Protection Officer',
    name: 'Prof. Hendra Kusuma, LL.M.',
    department: 'Legal, Risk & Data Privacy',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    badge: 'Governance Specialist',
    accessibleTabs: ['compliance', 'customer360', 'cockpit'],
    description: 'Mengawasi Lapis Kepatuhan AI (UU PDP No. 27/2022 & Tata Kelola AI Perbankan OJK 2025), log audit model, verifikasi residensi data lokal, dan persetujuan mitigasi etis AI.'
  },
  {
    role: 'sales',
    title: 'Head of Sales & Regional Expansion',
    name: 'Dimas Wicaksono',
    department: 'Business Development & Growth',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    badge: 'Revenue Lead',
    accessibleTabs: ['sales', 'delivery', 'cockpit'],
    description: 'Menggerakkan pipeline 8 tahap CRM, memimpin pembagian SDR dan AE, mengejar target ekspansi non-Jabodetabek (target ≥40%), dan memantau kuota AE.'
  }
];

export const HISTORICAL_FINANCIALS: HistoricalFinancial[] = [
  {
    year: 'Tahun ke-1',
    revenue: 8.2,
    growth: 38,
    arr: 4.5,
    clients: 24,
    employees: 45,
    netProfit: 410,
    netMargin: 5.0,
    churn: 2,
    criticalIncidents: 14,
    revPerEmployee: 182.2,
    profitPerEmployee: 9.11
  },
  {
    year: 'Tahun ke-2',
    revenue: 11.5,
    growth: 40,
    arr: 6.7,
    clients: 33,
    employees: 61,
    netProfit: 460,
    netMargin: 4.0,
    churn: 4,
    criticalIncidents: 25,
    revPerEmployee: 188.5,
    profitPerEmployee: 7.54
  },
  {
    year: 'Tahun ke-3 (Kondisi Awal)',
    revenue: 15.8,
    growth: 37,
    arr: 9.4,
    clients: 42,
    employees: 78,
    netProfit: 395,
    netMargin: 2.5,
    churn: 7,
    criticalIncidents: 43,
    revPerEmployee: 202.6,
    profitPerEmployee: 5.06
  }
];

export const TRANSFORMATION_TARGETS: TransformationTarget[] = [
  {
    metric: 'Pendapatan Total',
    current: 'Rp15,8 Miliar',
    target: 'Rp45,0 Miliar',
    gap: '+Rp29,2 Miliar (+185%)',
    status: 'on-track',
    category: 'Financial'
  },
  {
    metric: 'Recurring Revenue (ARR)',
    current: 'Rp9,4 Miliar (59,5%)',
    target: 'Rp32,0 Miliar (71,1%)',
    gap: '+Rp22,6 Miliar',
    status: 'on-track',
    category: 'Financial'
  },
  {
    metric: 'Margin Laba Bersih',
    current: '2,5% (Rp395 jt)',
    target: '17,5% (Rp7,86 Miliar)',
    gap: '+15,0 poin persentase (Laba naik 20x)',
    status: 'on-track',
    category: 'Financial'
  },
  {
    metric: 'Jumlah Pelanggan Aktif',
    current: '42 perusahaan',
    target: '120 perusahaan',
    gap: '+78 perusahaan (Net Baru)',
    status: 'on-track',
    category: 'Market'
  },
  {
    metric: 'Tingkat Churn',
    current: '16,7% (7 berhenti)',
    target: '< 5% per tahun',
    gap: 'Turun > 11,7 poin',
    status: 'on-track',
    category: 'Operational'
  },
  {
    metric: 'Durasi Rata-rata Implementasi',
    current: '16–22 minggu (avg 19)',
    target: '6–10 minggu (avg 8)',
    gap: 'Pangkas 58% waktu tunggu',
    status: 'achieved',
    category: 'Operational'
  },
  {
    metric: 'Pencapaian SLA Pelayanan',
    current: '78% (43 isu kritis)',
    target: '≥ 96% (≤ 4 per kuartal)',
    gap: '+18% SLA & pangkas 63% komplain',
    status: 'on-track',
    category: 'Operational'
  },
  {
    metric: 'Porsi Revenue Luar Jabodetabek',
    current: '12%',
    target: '≥ 40%',
    gap: '+28 poin penetrasi pasar nasional',
    status: 'on-track',
    category: 'Market'
  },
  {
    metric: 'Span of Control Direksi',
    current: '26:1 (78 : 3 direksi)',
    target: '8,3:1 (Melalui 6 Lead & Head)',
    gap: 'Bebaskan 70% waktu strategis direksi',
    status: 'achieved',
    category: 'Operational'
  }
];

export const DOA_RULES: DOAItem[] = [
  {
    id: 'doa-1',
    category: 'Diskon Harga Penjualan',
    description: 'Pemberian potongan harga dari daftar tarif standar subscription atau implementasi.',
    headLimit: '≤ 10%',
    directorLimit: '10% – 20%',
    dirutLimit: '> 20%',
    rationale: 'Diskon agresif langsung merusak unit economics. Head Sales memegang kendali deal reguler, Direksi mengawal deal strategis.'
  },
  {
    id: 'doa-2',
    category: 'Pengeluaran Operasional (OPEX)',
    description: 'Persetujuan belanja operasional, lisensi perangkat lunak, training, dan perbaikan sarana.',
    headLimit: '≤ Rp 10 Juta',
    directorLimit: 'Rp 10 Juta – Rp 50 Juta',
    dirutLimit: '> Rp 50 Juta',
    rationale: 'Mencegah bottleneck approval untuk kebutuhan operasional cepat harian sambil menjaga kontrol budget ketat.'
  },
  {
    id: 'doa-3',
    category: 'Perubahan Lingkup Proyek (Scope Creep)',
    description: 'Permintaan kustomisasi tambahan atau deviasi fitur saat proses implementasi klien berlangsung.',
    headLimit: '≤ 5% nilai kontrak',
    directorLimit: '5% – 15% nilai kontrak',
    dirutLimit: '> 15% nilai kontrak',
    rationale: 'Akar dari implementasi molor 19 minggu di masa lalu adalah modifikasi tak berbatas tanpa tagihan biaya kustomisasi.'
  },
  {
    id: 'doa-4',
    category: 'Persetujuan Nilai Proposal B2B',
    description: 'Kewenangan otorisasi penandatanganan penawaran harga dan kontrak kemitraan klien.',
    headLimit: '≤ Rp 300 Juta',
    directorLimit: 'Rp 300 Juta – Rp 1 Miliar',
    dirutLimit: '> Rp 1 Miliar',
    rationale: 'Memampukan tim sales bergerak cepat menembus mid-market tanpa harus menunggu 3 direktur menandatangani proposal rutin.'
  },
  {
    id: 'doa-5',
    category: 'Eskalasi Insiden Kritis (Severity 1)',
    description: 'Tingkat penanganan kegagalan sistem down, kebocoran data, atau terputusnya kanal omnichannel pelanggan.',
    headLimit: 'Severity 2–4 (Mandiri)',
    directorLimit: 'Severity 1 (> 4 Jam tak tuntas)',
    dirutLimit: 'Severity 1 (> 24 Jam)',
    rationale: 'Mencegah direksi terbebani komplain harian operasional, namun memastikan respon krisis darurat terstruktur.'
  }
];

export const INITIAL_APPROVAL_REQUESTS: ApprovalRequest[] = [
  {
    id: 'REQ-2026-081',
    applicant: 'Bambang Sudirgo',
    role: 'Account Executive',
    type: 'diskon',
    title: 'Permintaan Diskon Penjualan Bank Artha Graha',
    nominalValue: 12,
    unit: '%',
    assignedApprover: 'Direktur',
    status: 'Pending',
    timestamp: '15 Menit yang lalu',
    justification: 'Klien memesan paket Enterprise 36 bulan dengan 80 pengguna aktif di 3 kantor regional.'
  },
  {
    id: 'REQ-2026-082',
    applicant: 'Ferry Andrian',
    role: 'Lead Implementation',
    type: 'perubahan_lingkup',
    title: 'Kustomisasi Konektor ERP SAP Siloam Health',
    nominalValue: 4.2,
    unit: '%',
    assignedApprover: 'Head',
    status: 'Approved',
    timestamp: '2 Jam yang lalu',
    justification: 'Penyesuaian skema API webhook HL7 standar kesehatan, waktu pengerjaan 3 hari kerja.'
  },
  {
    id: 'REQ-2026-083',
    applicant: 'Rina Marlina',
    role: 'Head of Support',
    type: 'pengeluaran',
    title: 'Peningkatan Kuota Node Elastic Cloud Jakarta',
    nominalValue: 28,
    unit: 'Juta IDR',
    assignedApprover: 'Direktur',
    status: 'Approved',
    timestamp: 'Kemarin',
    justification: 'Menampung lonjakan log audit OJK dan riwayat chat 12 klien perbankan baru.'
  },
  {
    id: 'REQ-2026-084',
    applicant: 'Teguh Prakoso',
    role: 'Sales Director',
    type: 'proposal',
    title: 'Penawaran Tender Contact Center Kementerian ATR/BPN',
    nominalValue: 1450,
    unit: 'Juta IDR (Rp1,45 M)',
    assignedApprover: 'Direktur Utama',
    status: 'Pending',
    timestamp: '3 Jam yang lalu',
    justification: 'Proposal implementasi SPBE terintegrasi dengan modul kepatuhan data residensi lokal.'
  }
];

export const IMPLEMENTATION_PACKAGES: ImplementationPackage[] = [
  {
    id: 'pkg-std',
    name: 'Paket Standard',
    durationWeeks: 6,
    priceMillion: 90,
    marginPercent: 50,
    manWeeks: 17.4,
    staffing: 'Staf implementasi mandiri (No programmer needed)',
    targetSegment: 'UKM Skala Atas / Retail Tunggal (60% volume)',
    features: [
      'Konfigurasi omnichannel WA, Live Chat, Email',
      'Template industri siap pakai (Retail/Pendidikan)',
      'Standar SLA 8 jam respon',
      'Training mandiri & video tutorial online',
      'Konektor webhook standar marketplace lokal'
    ],
    isPopular: true
  },
  {
    id: 'pkg-adv',
    name: 'Paket Advanced',
    durationWeeks: 10,
    priceMillion: 151,
    marginPercent: 50,
    manWeeks: 29.0,
    staffing: '1 Staf Implementasi + 1 Programmer pendamping',
    targetSegment: 'Mid-Market Menengah, Multi-Cabang (30% volume)',
    features: [
      'Semua fitur Paket Standard',
      'Integrasi REST API ke CRM / ERP internal',
      'Kustomisasi rule routing tiket berbobot',
      'Modul Lapis Kepatuhan AI (UU PDP Masking)',
      'Pelatihan tatap muka 4 sesi & pendampingan UAT 2 minggu'
    ]
  },
  {
    id: 'pkg-ent',
    name: 'Paket Enterprise',
    durationWeeks: 14,
    priceMillion: 290,
    marginPercent: 48,
    manWeeks: 58.0,
    staffing: 'Dedicated Implementation Team + Tech Architect',
    targetSegment: 'Perbankan, RS Besar, BUMN, Regulasi Ketat (10% volume)',
    features: [
      'Semua fitur Paket Advanced',
      'Audit Trail OJK & Kepatuhan Tata Kelola AI Perbankan',
      'Integrasi Core Banking / SIMRS / SSO LDAP',
      'Layanan operasional 24/7 dedicated SLA 99.9%',
      'Deployment on-premise hybrid / private sovereign cloud'
    ]
  }
];

export const INDUSTRY_TEMPLATES: IndustryTemplate[] = [
  {
    id: 'tpl-retail',
    industry: 'Retail & E-Commerce',
    title: 'Omnichannel Fast-Commerce Blueprint',
    timeReduction: 'Pangkas dari 18 minggu ke 5 minggu',
    keyWorkflows: ['Pelacakan Resi Otomatis', 'Return & Refund Triage', 'Flash Sale Bot Queue', 'Integrasi Tokopedia/Shopee API'],
    prebuiltConnectors: ['Midtrans', 'JNE/J&T Webhook', 'Shopify', 'Accurate POS'],
    sampleClient: 'PT Gaya Nusantara Retail',
    iconName: 'ShoppingBag'
  },
  {
    id: 'tpl-bfsi',
    industry: 'Jasa Keuangan (BFSI)',
    title: 'OJK Banking AI & Secure Contact Suite',
    timeReduction: 'Pangkas dari 22 minggu ke 9 minggu',
    keyWorkflows: ['Penyamaran NIK & No Rekening', 'Pelaporan Insiden Audit Trail', 'Eskalasi Fraud Alert Otomatis', 'Human-in-the-Loop Mandatori'],
    prebuiltConnectors: ['Core Banking ISO 8583', 'Dukcapil KYC Gateway', 'BI-Fast Notification', 'Finnet'],
    sampleClient: 'Bank Artha Pratama Syariah',
    iconName: 'ShieldCheck'
  },
  {
    id: 'tpl-health',
    industry: 'Kesehatan & Rumah Sakit',
    title: 'Healthcare Patient Experience Hub',
    timeReduction: 'Pangkas dari 19 minggu ke 7 minggu',
    keyWorkflows: ['Pendaftaran Poliklinik via WA', 'Pengingat Janji Medis Otomatis', 'Integrasi BPJS PCare', 'Kerahasiaan Rekam Medis'],
    prebuiltConnectors: ['SIMRS Khanza', 'BPJS SatuSehat API', 'Lab Gateway', 'Halodoc Partner'],
    sampleClient: 'RS Medika Husada Internasional',
    iconName: 'Activity'
  },
  {
    id: 'tpl-edu',
    industry: 'Pendidikan & Kampus',
    title: 'Academic Admissions & Student Desk',
    timeReduction: 'Pangkas dari 16 minggu ke 6 minggu',
    keyWorkflows: ['Penerimaan Mahasiswa Baru (PMB)', 'Helpdesk Kuliah Online', 'Pengingat SPP Kuliah', 'Broadcast Akreditasi'],
    prebuiltConnectors: ['SIAKAD Cloud', 'Edlink Gateway', 'Virtual Account Bank', 'Moodle SSO'],
    sampleClient: 'Universitas Bina Cendekia',
    iconName: 'GraduationCap'
  },
  {
    id: 'tpl-prop',
    industry: 'Properti & Building Mgmt',
    title: 'Tenant Service & Maintenance Portal',
    timeReduction: 'Pangkas dari 17 minggu ke 6 minggu',
    keyWorkflows: ['Work Order Kerusakan Unit', 'Billing Iuran Pengelolaan (IPL)', 'Akses Parkir & Visitor Log', 'Emergency Broadcast'],
    prebuiltConnectors: ['Yardi Voyager', 'SAP Real Estate', 'BCA Virtual Account', 'IoT Meteran Listrik'],
    sampleClient: 'Grand Mahakam Residences',
    iconName: 'Building2'
  }
];

export const CUSTOMER_ACCOUNTS: CustomerAccount[] = [
  {
    id: 'ACC-001',
    name: 'Bank Mega Pratama Syariah',
    sector: 'Jasa Keuangan (BFSI)',
    arrMillion: 420,
    healthScore: 94,
    churnRisk: 'Low',
    onboardingDay: 180,
    slaPerformance: 98.4,
    activeChannels: ['WhatsApp Official', 'Voice Telephony', 'Mobile App SDK'],
    criticalIssues: 0,
    contactPerson: 'Aditya Pratama (Head of CX)',
    implementationPkg: 'Paket Enterprise',
    isOutsideJabodetabek: false
  },
  {
    id: 'ACC-002',
    name: 'Siloam Prima Hospital Group',
    sector: 'Kesehatan',
    arrMillion: 380,
    healthScore: 89,
    churnRisk: 'Low',
    onboardingDay: 120,
    slaPerformance: 96.8,
    activeChannels: ['WhatsApp Official', 'Live Web Chat', 'Email Ticketing'],
    criticalIssues: 1,
    contactPerson: 'dr. Melinda Sianipar',
    implementationPkg: 'Paket Advanced',
    isOutsideJabodetabek: true
  },
  {
    id: 'ACC-003',
    name: 'Surabaya Mega Retailindo',
    sector: 'Retail',
    arrMillion: 210,
    healthScore: 68,
    churnRisk: 'Medium',
    onboardingDay: 74, // in 90-day danger zone!
    slaPerformance: 88.5,
    activeChannels: ['WhatsApp Official', 'Instagram DM'],
    criticalIssues: 3,
    contactPerson: 'Johan Santoso',
    implementationPkg: 'Paket Standard',
    isOutsideJabodetabek: true
  },
  {
    id: 'ACC-004',
    name: 'Universitas Cendekia Nusantara',
    sector: 'Pendidikan',
    arrMillion: 180,
    healthScore: 91,
    churnRisk: 'Low',
    onboardingDay: 240,
    slaPerformance: 97.2,
    activeChannels: ['WhatsApp Official', 'Web Widget', 'Email Ticketing'],
    criticalIssues: 0,
    contactPerson: 'Dr. Ir. Suryadi',
    implementationPkg: 'Paket Standard',
    isOutsideJabodetabek: true
  },
  {
    id: 'ACC-005',
    name: 'Makassar Marina Tower & Residences',
    sector: 'Properti',
    arrMillion: 260,
    healthScore: 54,
    churnRisk: 'High',
    onboardingDay: 52, // In danger zone!
    slaPerformance: 81.2,
    activeChannels: ['WhatsApp Official', 'Voice Telephony'],
    criticalIssues: 4,
    contactPerson: 'Hj. Rosdiana M.',
    implementationPkg: 'Paket Advanced',
    isOutsideJabodetabek: true
  },
  {
    id: 'ACC-006',
    name: 'Dinas Kominfo Pemprov Jabar',
    sector: 'Pemerintahan',
    arrMillion: 490,
    healthScore: 96,
    churnRisk: 'Low',
    onboardingDay: 310,
    slaPerformance: 99.1,
    activeChannels: ['WhatsApp Official', 'Voice Telephony', 'Portal Aduan SPBE'],
    criticalIssues: 0,
    contactPerson: 'Drs. Hendrawan, M.Si.',
    implementationPkg: 'Paket Enterprise',
    isOutsideJabodetabek: true
  }
];

export const MOCK_TICKETS: OmnichannelTicket[] = [
  {
    id: 'TCK-2026-904',
    clientName: 'Bank Mega Pratama Syariah',
    customerUser: 'Nasabah Budi Hartono (KTP 3174092801820003)',
    channel: 'WhatsApp',
    subject: 'Gagal transaksi transfer BI-Fast namun saldo terpotong',
    category: 'Billing & Transaksi Finansial',
    priority: 'Critical',
    status: 'In Progress',
    slaHoursLeft: 1.2,
    aiClassification: 'Transaksi Gantung / Reversal Diperlukan',
    aiSummary: 'Nasabah mentransfer Rp 2.500.000 via aplikasi mobile, status pending di gateway FINNET tapi saldo tabungan terdebet. Membutuhkan verifikasi jurnal mutasi.',
    sentiment: 'Angry',
    requiresHumanOversight: true,
    piiMasked: true,
    createdAt: '45 Menit yang lalu'
  },
  {
    id: 'TCK-2026-905',
    clientName: 'Siloam Prima Hospital Group',
    customerUser: 'Ibu Ratna Juwita (+6281299887766)',
    channel: 'Live Chat',
    subject: 'Perubahan jadwal konsultasi Dokter Spesialis Jantung',
    category: 'Penjadwalan Medis',
    priority: 'Medium',
    status: 'Open',
    slaHoursLeft: 4.8,
    aiClassification: 'Reschedule Booking Poliklinik',
    aiSummary: 'Pasien meminta geser hari Kamis 18 Sept pukul 14.00 karena perjalanan luar kota. Dokter pengganti dr. Santoso Sp.JP tersedia.',
    sentiment: 'Neutral',
    requiresHumanOversight: false,
    piiMasked: true,
    createdAt: '1 Jam yang lalu'
  },
  {
    id: 'TCK-2026-906',
    clientName: 'Surabaya Mega Retailindo',
    customerUser: 'Pelanggan Tokopedia Cindy Clarissa',
    channel: 'WhatsApp',
    subject: 'Barang pesanan nomor INV/2026/09/8812 belum dikirim hari ke-3',
    category: 'Logistik & Pengiriman',
    priority: 'High',
    status: 'In Progress',
    slaHoursLeft: 2.1,
    aiClassification: 'Keterlambatan Ekspedisi',
    aiSummary: 'Paket tertahan di hub gudang Surabaya Barat karena lonjakan promo tanggal kembar. Nomor resi JNE SOC-091823 sudah di-generate tapi belum di-pickup kurir.',
    sentiment: 'Frustrated',
    requiresHumanOversight: false,
    piiMasked: true,
    createdAt: '2 Jam yang lalu'
  },
  {
    id: 'TCK-2026-907',
    clientName: 'Makassar Marina Tower',
    customerUser: 'Penghuni Tower A Unit 1402 (Bpk. Ilham)',
    channel: 'Voice',
    subject: 'Kebocoran pipa air bersih kamar mandi utama',
    category: 'Maintenance & Facility',
    priority: 'Critical',
    status: 'Escalated',
    slaHoursLeft: 0.5,
    aiClassification: 'Insiden Fasilitas Darurat',
    aiSummary: 'Pipa saluran air bersih pecah menggenangi lantai 14 dan merembes ke plafon lantai 12. Telah dieskalasi ke Teknisi Siaga Gedung.',
    sentiment: 'Angry',
    requiresHumanOversight: true,
    piiMasked: false,
    createdAt: '30 Menit yang lalu'
  }
];

export const COMPLIANCE_CONTROLS: ComplianceControl[] = [
  {
    id: 'comp-1',
    code: 'OJK-AI-01',
    title: 'Jejak Audit Penuh & Reprodusibilitas (Accountability)',
    framework: 'Pedoman AI Perbankan OJK 2025',
    status: 'Compliant',
    description: 'Menyimpan riwayat utuh seluruh prompt masukan, output inferensi, bobot keyakinan (confidence score), versi model LLM, verifikator manusia, dan timestamp kriptografis.',
    technicalEnforcement: 'PostgreSQL Immutable Audit Log + SHA-256 Hash Chaining.',
    metrics: '100% audit log terekam, 0% data hilang'
  },
  {
    id: 'comp-2',
    code: 'OJK-AI-02',
    title: 'Kendali Manusia Wajib (Mandatory Human-in-the-Loop)',
    framework: 'Pedoman AI Perbankan OJK 2025',
    status: 'Active',
    description: 'Tiket berkategori finansial, komplain fraud, atau mutasi dana sensitif dilarang dieksekusi bot tanpa validasi agen bersertifikasi perbankan.',
    technicalEnforcement: 'Role-based policy engine mengunci eksekusi otomatis untuk kategori transaksi bernilai >Rp 0.',
    metrics: 'Escalation block 100% pada tiket finansial berisiko'
  },
  {
    id: 'comp-3',
    code: 'OJK-AI-03',
    title: 'Pemantauan Keandalan Model & Drift Guard (Reliability)',
    framework: 'Pedoman AI Perbankan OJK 2025',
    status: 'Audit Ready',
    description: 'Bila skor keyakinan klasifikasi AI berada di bawah ambang batas 92%, tiket otomatis dialihkan ke agen tanpa memberikan jawaban halusinasi.',
    technicalEnforcement: 'Threshold interceptor dengan fallback rule ke agen manusia dalam 15 detik.',
    metrics: 'Akurasi klasifikasi 96.4%, Hallucination rate 0.02%'
  },
  {
    id: 'comp-4',
    code: 'PDP-ART-04',
    title: 'Penyamaran & Pseudonimisasi Data Pribadi Spesifik',
    framework: 'UU PDP No. 27/2022',
    status: 'Compliant',
    description: 'NIK (Nomor Induk Kependudukan), nomor kartu kredit/debit, nomor telepon, dan data rekam medis disamarkan menggunakan token sebelum diproses ke LLM.',
    technicalEnforcement: 'Edge PII Scrubber berbasis Regex & NER lokal sebelum payload dikirim.',
    metrics: '100% PII tertutup, 0 data plain-text keluar batas'
  },
  {
    id: 'comp-5',
    code: 'PDP-ART-05',
    title: 'Manajemen Persetujuan & Hak Menolak Subjek Data',
    framework: 'UU PDP No. 27/2022',
    status: 'Compliant',
    description: 'Pelanggan memiliki hak untuk menarik persetujuan pemrosesan profil AI dan meminta penanganan eksklusif oleh manusia kapan saja.',
    technicalEnforcement: 'Opt-out switch langsung pada menu awal chatbot WhatsApp/Web.',
    metrics: 'Persetujuan tercatat digital, waktu pencabutan < 1 detik'
  },
  {
    id: 'comp-6',
    code: 'RES-DATA-06',
    title: 'Residensi & Kedaulatan Data di Wilayah Republik Indonesia',
    framework: 'UU PDP No. 27/2022',
    status: 'Compliant',
    description: 'Seluruh server database, model inferensi AI lokal, dan storage percakapan wajib berlokasi di data center terakreditasi Tier IV di wilayah Indonesia.',
    technicalEnforcement: 'Hosting pada Sovereign Local Cloud Node di Jakarta & Cikarang IDC.',
    metrics: 'Latency < 12ms, 0 byte traffic diekspor ke yurisdiksi luar'
  }
];

export const SALES_DEALS: SalesDeal[] = [
  {
    id: 'DEAL-101',
    clientName: 'Bank Daerah Jawa Timur Tbk',
    sector: 'Jasa Keuangan (BFSI)',
    dealSizeMillion: 540,
    stage: 'Negosiasi Legal',
    winProbability: 80,
    ownerSdr: 'Annisa Putri',
    ownerAe: 'Bambang Sudirgo',
    isOutsideJabodetabek: true,
    city: 'Surabaya',
    expectedCloseDate: '28 Sept 2026'
  },
  {
    id: 'DEAL-102',
    clientName: 'RS Hermina Nusantara Regional',
    sector: 'Kesehatan',
    dealSizeMillion: 360,
    stage: 'Proposal Demo',
    winProbability: 60,
    ownerSdr: 'Annisa Putri',
    ownerAe: 'Bambang Sudirgo',
    isOutsideJabodetabek: true,
    city: 'Medan',
    expectedCloseDate: '15 Okt 2026'
  },
  {
    id: 'DEAL-103',
    clientName: 'Kallagroup Automotive & Logistics',
    sector: 'Retail & Distribusi',
    dealSizeMillion: 280,
    stage: 'Terkualifikasi (SDR)',
    winProbability: 40,
    ownerSdr: 'Fajar Nugraha',
    ownerAe: 'Dimas Wicaksono',
    isOutsideJabodetabek: true,
    city: 'Makassar',
    expectedCloseDate: '02 Nov 2026'
  },
  {
    id: 'DEAL-104',
    clientName: 'Universitas Kristen Satya Wacana',
    sector: 'Pendidikan',
    dealSizeMillion: 180,
    stage: 'Menang (Closed-Won)',
    winProbability: 100,
    ownerSdr: 'Fajar Nugraha',
    ownerAe: 'Dimas Wicaksono',
    isOutsideJabodetabek: true,
    city: 'Salatiga / Semarang',
    expectedCloseDate: '12 Sept 2026'
  },
  {
    id: 'DEAL-105',
    clientName: 'Pakuwon City Supermall',
    sector: 'Properti',
    dealSizeMillion: 310,
    stage: 'Proposal Demo',
    winProbability: 55,
    ownerSdr: 'Annisa Putri',
    ownerAe: 'Bambang Sudirgo',
    isOutsideJabodetabek: true,
    city: 'Surabaya',
    expectedCloseDate: '24 Okt 2026'
  },
  {
    id: 'DEAL-106',
    clientName: 'Fintech DANA Lentera Nusantara',
    sector: 'Jasa Keuangan (BFSI)',
    dealSizeMillion: 480,
    stage: 'Negosiasi Legal',
    winProbability: 85,
    ownerSdr: 'Fajar Nugraha',
    ownerAe: 'Bambang Sudirgo',
    isOutsideJabodetabek: false,
    city: 'Jakarta Selatan',
    expectedCloseDate: '20 Sept 2026'
  }
];

export const EMPLOYEE_SCORECARDS: EmployeeScorecard[] = [
  {
    id: 'EMP-014',
    name: 'Budi Santoso',
    role: 'Senior CS Agent & Tech Specialist',
    department: 'Support & Operations',
    targetOutputScore: 98,
    qualitySlaScore: 96,
    disciplineScore: 94,
    developmentScore: 90,
    totalScore: 95.8,
    overtimeHours: 2.5,
    overtimeRootCause: 'Klien',
    coreHoursCompliance: 99.2
  },
  {
    id: 'EMP-022',
    name: 'Sarah Maharani',
    role: 'Implementation Specialist',
    department: 'Delivery Team',
    targetOutputScore: 92,
    qualitySlaScore: 94,
    disciplineScore: 88,
    developmentScore: 85,
    totalScore: 91.1,
    overtimeHours: 4.0,
    overtimeRootCause: 'Perencanaan',
    coreHoursCompliance: 96.5
  },
  {
    id: 'EMP-038',
    name: 'Indra Gunawan',
    role: 'Fullstack Solution Engineer',
    department: 'Engineering',
    targetOutputScore: 88,
    qualitySlaScore: 90,
    disciplineScore: 92,
    developmentScore: 95,
    totalScore: 89.9,
    overtimeHours: 1.5,
    overtimeRootCause: 'Dependensi Tim',
    coreHoursCompliance: 98.0
  },
  {
    id: 'EMP-045',
    name: 'Doni Pratama',
    role: 'Junior Support Officer',
    department: 'Support & Operations',
    targetOutputScore: 78,
    qualitySlaScore: 72,
    disciplineScore: 68,
    developmentScore: 75,
    totalScore: 73.9,
    overtimeHours: 14.0,
    overtimeRootCause: 'Perilaku',
    coreHoursCompliance: 81.4
  }
];
