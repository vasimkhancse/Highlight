export const COMPANY_INFO = {
  name: "HIGHLIGHT ENGINEERING TECHNOLOGY",
  shortName: "HET",
  tagline: "Precision CNC Machining, Milling & Turning Solutions",
  description: "We are a team of qualified professionals with proficient technical background. We undertake all kinds of challenging precision engineering projects with firm emphasis on quality, timely delivery, and optimum pricing.",
  address: {
    line1: "NO: 137 / 1A 2A, NO: 50/2, Bharathi Street",
    area: "Chinnavedampatti",
    city: "Coimbatore",
    pincode: "641049",
    state: "Tamil Nadu",
    country: "India",
    full: "NO: 137 / 1A 2A, NO: 50/2, Bharathi Street, Chinnavedampatti, Coimbatore - 641049, Tamil Nadu, India"
  },
  email: "highlightenggtech2024@gmail.com",
  gstin: "33AAQFH3901B1ZU",
  contacts: [
    {
      name: "RAJESH KUMAR.R",
      role: "Managing Partner / Technical Operations",
      mobile: "+91 70107 07542",
      rawPhone: "917010707542",
      email: "highlightenggtech2024@gmail.com"
    },
    {
      name: "RAMESH.T",
      role: "Managing Partner / Client Relations",
      mobile: "+91 98848 35774",
      rawPhone: "919884835774",
      email: "highlightenggtech2024@gmail.com"
    }
  ],
  facility: {
    totalArea: "1100 Sq.ft",
    constructedArea: "1100 Sq.ft",
    workers: "04 Skilled Machine Operators",
    staffs: "02 Technical Staffs",
    cadCamProgrammer: "01 Designer & Programmer",
    location: "Chinnavedampatti Industrial Zone, Coimbatore"
  }
};

export const CORE_PILLARS = [
  {
    title: "Qualified Engineering Team",
    description: "A team of qualified professionals with proficient technical background undertaking all kinds of challenging projects.",
    icon: "Users"
  },
  {
    title: "Precise Planning & Execution",
    description: "Thorough understanding of customer requirements with strict adherence to micro-precision planning and execution.",
    icon: "Target"
  },
  {
    title: "Quality & Timely Delivery",
    description: "Firm emphasis on quality assurance, strict tolerance inspection, and zero-delay delivery at optimum cost.",
    icon: "ClockCheck"
  },
  {
    title: "State-of-the-Art Infrastructure",
    description: "Equipped with advanced CNC Vertical Machining Centre and heavy-duty UK & USA Centre Lathes operated by certified technicians.",
    icon: "Cpu"
  }
];

export const VMC_SPECIFICATIONS = {
  title: "VERTICAL MACHINING CENTRE (VMC)",
  make: "VETRIMACH V650 CNC Milling M/c",
  brandBadge: "A TATA Product (TAL)",
  modelNumber: "SM0165000351",
  image: "/assets/vmc-machine-hq.png",
  highlights: [
    "High-speed 10,000 RPM Spindle for ultra-fine surface finishing",
    "Heavy-duty rigid casting for vibration-free heavy cutting",
    "20-pocket Automatic Tool Changer (ATC) for rapid cycle times",
    "High precision linear motion guideways on all 3 axes"
  ],
  bedSize: {
    xAxis: "1200 mm",
    yAxis: "650 mm",
    zAxis: "600 mm"
  },
  travel: {
    xAxis: "1050 mm",
    yAxis: "650 mm",
    zAxis: "650 mm"
  },
  toolPocket: "20 Tools (ATC)",
  spindleRpm: "10,000 RPM",
  spindlePower: "12 / 16 kW"
};

export const LATHE_FLEET = [
  {
    id: 1,
    sNo: 1,
    model: "DSG 17",
    make: "DSG (UK)",
    chuckSize: "14 inch",
    centerHeight: "10 inch",
    lengthOfJob: "700 mm",
    swingDia: "450 mm",
    type: "Precision Centre Lathe",
    origin: "United Kingdom"
  },
  {
    id: 2,
    sNo: 2,
    model: "DSG 25",
    make: "DSG (UK)",
    chuckSize: "25 inch",
    centerHeight: "15 inch",
    lengthOfJob: "1500 mm",
    swingDia: "1050 mm",
    type: "Heavy-Duty Extended Bed Lathe",
    origin: "United Kingdom"
  },
  {
    id: 3,
    sNo: 3,
    model: "LS 54",
    make: "LODGE & SHIPLEY (USA)",
    chuckSize: "18 inch",
    centerHeight: "12 inch",
    lengthOfJob: "1200 mm",
    swingDia: "470 mm",
    type: "High-Rigidity Production Lathe",
    origin: "United States"
  }
];

export const HOME_BANNERS = [
  {
    id: "about-us",
    tag: "Company Overview & Facility",
    title: "World-Class Precision Engineering & Facility",
    subtitle: "1,100 Sq.Ft advanced machine shop in Chinnavedampatti, Coimbatore with certified technical experts delivering micro-level precision.",
    image: "/assets/banners/banner-about-us.jpg",
    primaryCta: { text: "Learn About Us", href: "#about", isInternalPage: false },
    secondaryCta: { text: "Request Quote", href: "#estimator", isInternalPage: false },
    highlights: ["1,100 Sq.Ft Machine Shop", "4 Skilled CNC Operators", "Chinnavedampatti, Coimbatore"]
  },
  {
    id: "instruments-and-gauges",
    tag: "Metrology & Quality Assurance",
    title: "12+ Certified Instruments & Gauges",
    subtitle: "Calibrated Mitutoyo (Japan), Insize, Baker & Micron master gauges ensuring micron-level accuracy and zero-defect delivery.",
    image: "/assets/banners/banner-instruments.jpg",
    primaryCta: { text: "Explore All Instruments & Specs", href: "/instruments", isInternalPage: true },
    secondaryCta: { text: "View Quality Standards", href: "#quality", isInternalPage: false },
    highlights: ["Mitutoyo & Baker Metrology", "0.001mm Micro Tolerance", "100% Traceable Calibration"]
  },
  {
    id: "explore-machinery",
    tag: "High-Tech Machinery Fleet",
    title: "VMC CNC Milling & Heavy-Duty Lathes",
    subtitle: "Equipped with Tata Vetrimach V650 VMC (10,000 RPM) and heavy-duty UK DSG & USA Lodge Shipley precision lathes.",
    image: "/assets/banners/banner-machinery.jpg",
    primaryCta: { text: "Explore Machinery Fleet", href: "#machinery", isInternalPage: false },
    secondaryCta: { text: "Download PDF Profile", href: "/Highlight-Engineering-Technology-Profile.pdf", isInternalPage: false, isDownload: true },
    highlights: ["Vetrimach V650 VMC (TAL)", "1500mm DSG Lathe Swing", "20-Pocket Tool ATC"]
  }
];

export const INSTRUMENTS_AND_GAUGES = [
  {
    id: "granite-surface-table",
    sNo: 1,
    item: "Surface Table (Granite)",
    make: "RRP",
    model: "9117",
    rangeSize: "1600 × 1000 × 200 mm",
    category: "Surface Metrology",
    image: "/assets/instruments/granite-surface-table.jpg",
    accuracy: "Grade 0 (DIN 876 / IS 7327)",
    leastCount: "0.001 mm",
    material: "Black Jinan Natural Granite",
    calibrationStatus: "Periodically Calibrated with Master Level",
    usage: "Master datum reference for high-accuracy component inspection, flatness verification, and multi-axis coordinate layout inspection.",
    inspectedParts: ["VMC Milled Base Plates", "Fixture Housings", "Engine Mounts", "Tooling Plates"],
    features: [
      "Zero internal tension and corrosion-proof natural granite",
      "High rigidity 200 mm thick granite slab absorbing shop vibrations",
      "Accommodates workpieces up to 1500 mm length with sub-micron datum precision"
    ]
  },
  {
    id: "digital-vernier-caliper",
    sNo: 2,
    item: "Digital Vernier Caliper",
    make: "INSIZE",
    model: "1112-300",
    rangeSize: "0 - 300 mm (0 - 12 in)",
    category: "Calipers",
    image: "/assets/instruments/digital-vernier-caliper.jpg",
    accuracy: "±0.03 mm",
    leastCount: "0.01 mm / 0.0005 in",
    material: "Hardened Stainless Steel",
    calibrationStatus: "NABL Traceable Calibrated",
    usage: "High-precision digital outer, inner, depth, and step dimension measurement with absolute encoder readout.",
    inspectedParts: ["Shaft Diameters", "Milled Step Depths", "Bore IDs", "Flange Thicknesses"],
    features: [
      "High-contrast LCD digital readout with inch/metric instant switching",
      "Carbide-tipped measuring jaws for high abrasion resistance",
      "Data hold function and thumb roll for smooth, repeatable clamping force"
    ]
  },
  {
    id: "vernier-caliper-manual",
    sNo: 3,
    item: "Vernier Caliper (Manual)",
    make: "INSIZE",
    model: "Standard 1205 Series",
    rangeSize: "0 - 300 mm",
    category: "Calipers",
    image: "/assets/instruments/vernier-caliper-manual.jpg",
    accuracy: "±0.04 mm",
    leastCount: "0.02 mm / 0.001 in",
    material: "Satin Chrome Plated Tool Steel",
    calibrationStatus: "Traceable Standard Calibrated",
    usage: "Manual precision dimension inspection and quick in-process shop floor turning and milling verification.",
    inspectedParts: ["Turned Cylinders", "Groove Widths", "Outer Diameters", "Shoulder Lengths"],
    features: [
      "Satin chrome finish for glare-free scale reading under workshop lighting",
      "Raised sliding surfaces preventing scale wear over extended usage",
      "Integrated depth measuring rod and internal nib jaws"
    ]
  },
  {
    id: "thread-gauge-unc",
    sNo: 4,
    item: "7/8-9UNC – 2B Thread Gauge",
    make: "HIP",
    model: "Standard 2B Plug Gauge",
    rangeSize: "7/8-9 UNC",
    category: "Thread Gauges",
    image: "/assets/instruments/thread-gauge-unc.jpg",
    accuracy: "Class 2B ANSI/ASME B1.2",
    leastCount: "Go / No-Go Fit Check",
    material: "Oil Hardened Non-Shrinking Steel (OHNS - 60-62 HRC)",
    calibrationStatus: "Certified Master Calibrated",
    usage: "Imperial UNC internal thread pitch diameter, lead error, and flank angle go/no-go verification.",
    inspectedParts: ["Heavy Fastener Bores", "Hydraulic Cylinder Heads", "Industrial Flanges", "Export Assemblies"],
    features: [
      "Precision ground thread flanks with chip clearance grooves",
      "Dual ended Go / No-Go members on knurled hexagonal aluminium handle",
      "Certified to ANSI / ASME B1.2 standard for imperial unified threads"
    ]
  },
  {
    id: "thread-gauge-m20",
    sNo: 5,
    item: "M20*2.5-6H Thread Gauge",
    make: "SMG",
    model: "Metric 6H Plug Gauge",
    rangeSize: "M20 × 2.5 mm",
    category: "Thread Gauges",
    image: "/assets/instruments/thread-gauge-m20.jpg",
    accuracy: "Class 6H ISO 1502",
    leastCount: "Go / No-Go Limit",
    material: "Tungsten Alloy Gauge Steel (Hardened & Sub-zero treated)",
    calibrationStatus: "Certified Master Calibrated",
    usage: "Standard metric pitch tolerance thread verification for structural tapped holes and machine linkages.",
    inspectedParts: ["Gearbox Casings", "Motor Mounting Blocks", "Heavy Support Brackets", "Shaft Ends"],
    features: [
      "Class 6H tolerance class compliant with ISO metric thread standards",
      "Sub-zero cryogenically treated steel to eliminate dimensional drift",
      "Wear allowance built into Go member for extended production longevity"
    ]
  },
  {
    id: "thread-gauge-m12-baker",
    sNo: 6,
    item: "M12*1.75-6H Thread Gauge (Baker)",
    make: "BAKER",
    model: "Metric 6H Baker Master",
    rangeSize: "M12 × 1.75 mm",
    category: "Thread Gauges",
    image: "/assets/instruments/thread-gauge-m12-baker.jpg",
    accuracy: "Class 6H ISO 965",
    leastCount: "Go / No-Go Limit",
    material: "High Carbon High Chrome Steel (HCHCr)",
    calibrationStatus: "NABL Laboratory Calibrated",
    usage: "Precision metric internal thread inspection with zero-tolerance pitch verification for critical fastening.",
    inspectedParts: ["Automotive Sub-assemblies", "Pump Flanges", "VMC Milled Fixtures", "Bearing Retainers"],
    features: [
      "Baker Gauges legendary precision manufacturing with sub-micron thread form fidelity",
      "Distinct color-coded / marked No-Go ring for mistake-proof rapid QC",
      "Micro-lapped thread profiles for low-friction, scratch-free entry"
    ]
  },
  {
    id: "thread-gauge-m12-success",
    sNo: 7,
    item: "M12*1.75-6H Thread Gauge (Success)",
    make: "SUCCESS",
    model: "Metric 6H Standard",
    rangeSize: "M12 × 1.75 mm",
    category: "Thread Gauges",
    image: "/assets/instruments/thread-gauge-m12-success.jpg",
    accuracy: "Class 6H ISO 1502",
    leastCount: "Go / No-Go Limit",
    material: "Alloy Tool Steel (62 HRC)",
    calibrationStatus: "Workshop Cross-Check Calibrated",
    usage: "Secondary in-process line inspection thread gauge ensuring cross-verification during continuous batch tapping.",
    inspectedParts: ["Batch Machined Parts", "Manifold Blocks", "Cover Plates", "Custom Brackets"],
    features: [
      "In-line tool setter verification gauge preventing bad batch threading",
      "High rigidity taper lock handle design",
      "High resistance to thread stripping and burr deformation"
    ]
  },
  {
    id: "thread-gauge-m10",
    sNo: 8,
    item: "M10*1.5-6H Thread Gauge",
    make: "SUCCESS",
    model: "Metric 6H Fine Series",
    rangeSize: "M10 × 1.5 mm",
    category: "Thread Gauges",
    image: "/assets/instruments/thread-gauge-m10.jpg",
    accuracy: "Class 6H ISO 1502",
    leastCount: "Go / No-Go Limit",
    material: "Alloy Tool Steel",
    calibrationStatus: "Master Gauge Calibrated",
    usage: "Metric M10 medium thread pitch inspection on precision CNC turned and milled aerospace & industrial housings.",
    inspectedParts: ["Sensor Housings", "Motor Flanges", "Valve Bodies", "Precision Enclosures"],
    features: [
      "Rigid ground thread leads ensuring smooth thread engagement check",
      "Laser engraved size, pitch, and tolerance markings",
      "Ideal for quick batch sampling at the VMC machining station"
    ]
  },
  {
    id: "plain-plug-gauge",
    sNo: 9,
    item: "Plain Plug Gauge (10F8)",
    make: "MICRON",
    model: "Class H/F Precision Series",
    rangeSize: "Ø 10 mm (Tolerance F8)",
    category: "Plug Gauges",
    image: "/assets/instruments/plain-plug-gauge.jpg",
    accuracy: "ISO Fit 10F8 (+0.028 / +0.013 mm)",
    leastCount: "Class F8 Limit Verification",
    material: "Hard Chrome Plated High Speed Steel (64 HRC)",
    calibrationStatus: "Certified Gauge Calibrated",
    usage: "Precision bore diameter go/no-go fit verification ensuring close running fit tolerance for dowel pins and shafts.",
    inspectedParts: ["Dowel Pin Holes", "Hydraulic Spool Bores", "Guide Bushings", "Bearing Sleeves"],
    features: [
      "Precision lapped cylindrical measuring surfaces with Ra < 0.05 µm",
      "Reversible gauge members for double service life",
      "Ensures exact ISO tolerance fit without costly optical bore scanning"
    ]
  },
  {
    id: "height-gauge-mitutoyo",
    sNo: 10,
    item: "Precision Height Gauge",
    make: "MITUTOYO",
    model: "Precision Column 514 Series",
    rangeSize: "0 - 300 mm (0 - 12 in)",
    category: "Height & Depth",
    image: "/assets/instruments/height-gauge-mitutoyo.jpg",
    accuracy: "±0.02 mm",
    leastCount: "0.01 mm",
    material: "Precision Ground Stainless Column & Carbide Scriber",
    calibrationStatus: "Mitutoyo Japan Certified / Traceable",
    usage: "Vertical coordinate, step height, center-to-center distance, and precision scriber layout marking on granite table.",
    inspectedParts: ["Multi-step VMC Blocks", "Engine Brackets", "Keyway Elevations", "Datum Step Faces"],
    features: [
      "Rigid dual-column design ensuring zero parallax distortion and high stability",
      "Carbide-tipped scriber for sharp, accurate datum layout lines",
      "Fine feed wheel mechanism for micro-adjustment to exact micrometer heights"
    ]
  },
  {
    id: "depth-vernier-mitutoyo",
    sNo: 11,
    item: "Depth Vernier Caliper",
    make: "MITUTOYO",
    model: "Precision Base 527 Series",
    rangeSize: "0 - 200 mm",
    category: "Height & Depth",
    image: "/assets/instruments/depth-vernier-mitutoyo.png",
    accuracy: "±0.03 mm",
    leastCount: "0.02 mm",
    material: "Hardened Stainless Steel",
    calibrationStatus: "NABL Traceable Calibrated",
    usage: "Blind hole depth, counterbore shoulder depth, and internal step recess measurement with ultra-flat ground base.",
    inspectedParts: ["Counterbored Bolt Pockets", "Internal Ring Grooves", "Blind Cylinders", "Seal Cavities"],
    features: [
      "100 mm wide ultra-flat reference base ensuring stable seating on workpiece shoulders",
      "Fine-lapped contact faces preventing cocking during depth measurement",
      "Clear satin chrome vernier scale resistant to cutting fluids and oils"
    ]
  },
  {
    id: "bore-dial-gauge-mitutoyo",
    sNo: 12,
    item: "Bore Dial Gauge Set",
    make: "MITUTOYO",
    model: "511 Series Cylinder Gauge",
    rangeSize: "0 - 150 mm / 150 - 250 mm",
    category: "Dial Gauges",
    image: "/assets/instruments/bore-dial-gauge-mitutoyo.png",
    accuracy: "±0.002 mm (2 µm)",
    leastCount: "0.001 mm / 0.01 mm",
    material: "Carbide Contact Anvils & Shockproof Dial Indicator",
    calibrationStatus: "Mitutoyo Certified / Traceable Standards",
    usage: "Internal cylinder bore diameter, ovality, taper, and concentricity inspection across deep holes.",
    inspectedParts: ["Engine Cylinder Sleeves", "Hydraulic Bores", "Bearing Housings", "Flange Bushings"],
    features: [
      "Carbide-tipped contact points for maximum wear protection in continuous production",
      "Spring-loaded centering bridge providing automatic self-centering inside the bore",
      "Grip insulator minimizing thermal transfer from operator hand to gauge body"
    ]
  }
];

export const CLIENTS = [
  {
    name: "M/s AP Tekhnocraft",
    sector: "Precision Engineering & Components",
    badge: "Long-term Partner"
  },
  {
    name: "M/s Bestex Engineering India Pvt Ltd",
    sector: "Automotive & Industrial Systems",
    badge: "Corporate Client"
  },
  {
    name: "M/s Covai Machine Tech",
    sector: "Machine Tools & Automation",
    badge: "OEM Manufacturer"
  },
  {
    name: "M/s Rajavel Engineering",
    sector: "Heavy Machining & Fabrication",
    badge: "Key Account"
  },
  {
    name: "M/s KV Engineering",
    sector: "Pumps, Valves & Mechanical Systems",
    badge: "Specialized Parts"
  },
  {
    name: "M/s Mahathi Technologies",
    sector: "Advanced Industrial Solutions",
    badge: "Tech Partner"
  },
  {
    name: "M/s Bilichitech Private Limited",
    sector: "Precision High-Tech Manufacturing",
    badge: "Aerospace & Tech"
  }
];

export const PDF_PAGES = Array.from({ length: 10 }, (_, i) => ({
  pageNumber: i + 1,
  title: [
    "Cover / Title Page",
    "Company Profile & Quality Philosophy",
    "Company View / Machine Shop Facility",
    "Our Valued Customers",
    "Infrastructure & Manpower Metrics",
    "Vertical Machining Centre (Vetrimach V650)",
    "Centre Lathes Fleet (DSG UK & Lodge Shipley USA)",
    "List of Instruments & Gauges (Mitutoyo, Insize, Baker)",
    "Contact & GST Credentials",
    "Thank You"
  ][i],
  image: `/assets/pdf_pages/page_${i + 1}.png`
}));
