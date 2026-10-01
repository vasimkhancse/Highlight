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

export const INSTRUMENTS_AND_GAUGES = [
  {
    sNo: 1,
    item: "Surface Table (Granite)",
    make: "RRP",
    model: "9117",
    rangeSize: "1600 × 1000 × 200 mm",
    category: "Surface Metrology",
    usage: "Master datum reference for high-accuracy component inspection"
  },
  {
    sNo: 2,
    item: "Digital Vernier Caliper",
    make: "INSIZE",
    model: "1112-300",
    rangeSize: "0 - 300 mm",
    category: "Calipers",
    usage: "High-precision digital outer/inner dimension measurement"
  },
  {
    sNo: 3,
    item: "Vernier Caliper",
    make: "INSIZE",
    model: "Standard Series",
    rangeSize: "0 - 300 mm",
    category: "Calipers",
    usage: "Manual precision dimension inspection"
  },
  {
    sNo: 4,
    item: "7/8-9UNC – 2B Thread Gauge",
    make: "HIP",
    model: "Standard 2B",
    rangeSize: "7/8-9 UNC",
    category: "Thread Gauges",
    usage: "Imperial UNC internal thread pitch verification"
  },
  {
    sNo: 5,
    item: "M20*2.5-6H Thread Gauge",
    make: "SMG",
    model: "Metric 6H",
    rangeSize: "M20 × 2.5",
    category: "Thread Gauges",
    usage: "Standard metric pitch tolerance thread verification"
  },
  {
    sNo: 6,
    item: "M12*1.75-6H Thread Gauge",
    make: "BAKER",
    model: "Metric 6H",
    rangeSize: "M12 × 1.75",
    category: "Thread Gauges",
    usage: "Precision thread gauge inspection"
  },
  {
    sNo: 7,
    item: "M12*1.75-6H Thread Gauge",
    make: "SUCCESS",
    model: "Metric 6H",
    rangeSize: "M12 × 1.75",
    category: "Thread Gauges",
    usage: "Secondary verification thread gauge"
  },
  {
    sNo: 8,
    item: "M10*1.5-6H Thread Gauge",
    make: "SUCCESS",
    model: "Metric 6H",
    rangeSize: "M10 × 1.5",
    category: "Thread Gauges",
    usage: "Metric M10 fine thread inspection"
  },
  {
    sNo: 9,
    item: "Plain Plug Gauge",
    make: "MICRON",
    model: "Class H/F",
    rangeSize: "10F8",
    category: "Plug Gauges",
    usage: "Bore diameter go/no-go precision fit verification"
  },
  {
    sNo: 10,
    item: "Height Gauge",
    make: "MITUTOYO",
    model: "Precision Column",
    rangeSize: "0 - 300 mm",
    category: "Height & Depth",
    usage: "Vertical coordinate and step height measurement"
  },
  {
    sNo: 11,
    item: "Depth Vernier",
    make: "MITUTOYO",
    model: "Precision Base",
    rangeSize: "0 - 200 mm",
    category: "Height & Depth",
    usage: "Blind hole and recess depth measurement"
  },
  {
    sNo: 12,
    item: "Bore Dial Gauge",
    make: "MITUTOYO",
    model: "Cylinder Gauge Series",
    rangeSize: "0-150 / 150-250 mm",
    category: "Dial Gauges",
    usage: "Internal cylinder and hole diameter concentricity check"
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
