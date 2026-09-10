// College Information & Mock Data for Alshifa University

export const collegeInfo = {
  name: "Alshifa University",
  shortName: "Alshifa University",
  acronym: "AU",
  motto: "Knowledge • Integrity • Innovation",
  established: 1984,
  location: "Alshifa University Knowledge Park, Sector 62, Metro Corridor",
  phone: "+1 (800) 456-7890 / +1 (800) 456-7891",
  email: "admissions@alshifa-university.edu",
  infoEmail: "contact@alshifa-university.edu",
  registrarEmail: "registrar@alshifa-university.edu",
  accreditations: [
    { name: "NAAC A++ Grade", detail: "CGPA 3.84 / 4.0 (Highest Tier)" },
    { name: "NIRF Ranked #24", detail: "National Institutional Ranking Framework" },
    { name: "NBA Accredited", detail: "All Engineering & Management Programs" },
    { name: "UGC & AICTE", detail: "Statutory Approval & Autonomy" }
  ],
  stats: [
    { label: "Acres Lush Campus", value: "85+", suffix: "Acres" },
    { label: "Active Students", value: "12,500+", suffix: "Enrolled" },
    { label: "Qualified Faculty", value: "480+", suffix: "Professors" },
    { label: "Placement Rate", value: "96.4%", suffix: "Success" },
    { label: "Highest Package", value: "48.5", suffix: "LPA" },
    { label: "Partner Recruiters", value: "340+", suffix: "Global MNCs" }
  ],
  principal: {
    name: "Dr. Eleanor Vance",
    qualification: "Ph.D. in Computer Science (MIT), Post-Doc (Stanford)",
    experience: "28+ Years of Academic Excellence & Research Leadership",
    image: "/principal.jpg",
    message: "At Alshifa University, education transcends textbooks and lecture halls. For over four decades, our institution has been an incubator for visionary engineers, scientific pioneers, ethical entrepreneurs, and creative thinkers. We blend rigorous academic inquiry with humanistic values, cutting-edge laboratories, and global industrial immersion. Whether you step into our supercomputing clusters, our modern library, or our athletic arenas, you are joining an intellectual community dedicated to making a profound impact on humanity."
  }
};

export const departmentsData = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    category: "tech",
    code: "CSE",
    icon: "Cpu",
    hod: "Dr. Rajeshwar Iyer",
    established: 1992,
    facultyCount: 42,
    studentsCount: 960,
    shortDesc: "Pioneering research in Artificial Intelligence, Cloud Systems, Cybersecurity, and Next-Generation Computing Architecture.",
    fullDesc: "The Department of Computer Science & Engineering is recognized internationally for cutting-edge computing education and applied research. Equipped with high-performance GPU clusters, IoT testbeds, and collaborative corporate centers of excellence with Nvidia and Google Cloud.",
    coursesOffered: ["B.Tech Computer Science & Engg", "B.Tech in Artificial Intelligence & Data Science", "M.Tech CSE", "Ph.D. in Computing"],
    labs: ["High Performance GPU Cluster Lab", "Cybersecurity & Forensic Center", "IoT & Embedded Systems Lab", "Software Engineering Studio"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "it",
    name: "Information Technology",
    category: "tech",
    code: "IT",
    icon: "Network",
    hod: "Dr. Priya Sundaram",
    established: 1999,
    facultyCount: 34,
    studentsCount: 780,
    shortDesc: "Specialized in Full-Stack Distributed Engineering, Cloud Infrastructure, Mobile Architectures, and Enterprise Systems.",
    fullDesc: "Information Technology bridges software theory with robust enterprise implementations. Our curriculum emphasizes large-scale data pipelines, web frameworks, DevOps methodologies, and real-time network security.",
    coursesOffered: ["B.Tech Information Technology", "Bachelor of Computer Applications (BCA)", "Master of Computer Applications (MCA)"],
    labs: ["Cloud Computing & DevOps Sandbox", "Mobile App Development Hub", "Network Simulation & Routing Lab", "Human-Computer Interaction Lab"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "commerce",
    name: "Commerce & Financial Studies",
    category: "commerce",
    code: "COM",
    icon: "TrendingUp",
    hod: "Prof. Vikram Malhotra",
    established: 1988,
    facultyCount: 26,
    studentsCount: 650,
    shortDesc: "Equipping leaders in Corporate Finance, Fintech, Forensic Accounting, International Trade, and Investment Banking.",
    fullDesc: "The Commerce Department merges traditional accounting mastery with modern algorithmic trading, financial modeling, and global tax policy. Students gain real-world market exposure through our live Bloomberg Terminal Finance Lab.",
    coursesOffered: ["B.Com (Honours - Finance & Analytics)", "B.Com (Banking & Insurance)", "M.Com (International Business)", "ACCA Integrated Program"],
    labs: ["Live Bloomberg Finance & Trading Lab", "Taxation & GST Simulation Cell", "Fintech Innovation Workshop"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "management",
    name: "Management Studies",
    category: "commerce",
    code: "MBA",
    icon: "Briefcase",
    hod: "Dr. Sunita Deshmukh",
    established: 1995,
    facultyCount: 30,
    studentsCount: 720,
    shortDesc: "Nurturing transformative global leaders, venture strategists, operations chiefs, and marketing innovators.",
    fullDesc: "Accredited by leading business bodies, our School of Management utilizes the Harvard case method, executive simulations, venture incubators, and corporate residencies to groom decision-makers capable of navigating volatile markets.",
    coursesOffered: ["Bachelor of Business Administration (BBA)", "MBA (Dual Specialization)", "Executive PGDM", "Ph.D. in Management"],
    labs: ["Venture Incubation & Pitch Studio", "Design Thinking & Behavioral Lab", "Business Analytics Simulation Center"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "mathematics",
    name: "Mathematics & Data Science",
    category: "science",
    code: "MATH",
    icon: "Binary",
    hod: "Dr. Alok Nath Verma",
    established: 1984,
    facultyCount: 22,
    studentsCount: 420,
    shortDesc: "Fostering analytical rigor across Pure Mathematics, Cryptography, Statistical Modeling, and Machine Learning theory.",
    fullDesc: "Mathematics is the foundational bedrock of all technological advancement. Our department provides rigorous training in pure and applied mathematics, operations research, graph theory, and mathematical physics with national research projects.",
    coursesOffered: ["B.Sc (Hons) Mathematics", "B.Sc Statistics & Data Analytics", "M.Sc Applied Mathematics", "Ph.D. in Mathematical Sciences"],
    labs: ["Computational Mathematics & MATLAB Lab", "Statistical Modeling Studio", "Cryptographic Algorithms Center"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "physics",
    name: "Physics & Materials Science",
    category: "science",
    code: "PHY",
    icon: "Atom",
    hod: "Dr. Margaret Chen",
    established: 1984,
    facultyCount: 20,
    studentsCount: 380,
    shortDesc: "Investigating Quantum Mechanics, Condensed Matter Physics, Nanophotonics, and Renewable Energy materials.",
    fullDesc: "With state-of-the-art spectrometers, laser setups, and vacuum deposition systems, the Physics Department conducts internationally funded research while training graduates for top research labs worldwide.",
    coursesOffered: ["B.Sc (Hons) Physics", "B.Sc Electronics & Optoelectronics", "M.Sc Physics (Nanotechnology Specialization)"],
    labs: ["Condensed Matter & Nanomaterials Lab", "Optics & Laser Spectroscopy Lab", "Modern Physics & Nuclear Instrumentation Lab"],
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "chemistry",
    name: "Chemical & Biological Sciences",
    category: "science",
    code: "CHEM",
    icon: "FlaskConical",
    hod: "Dr. Sanjeev Khurana",
    established: 1984,
    facultyCount: 21,
    studentsCount: 390,
    shortDesc: "Advancing Green Chemistry, Drug Discovery, Polymer Synthesis, and Environmental Remediation.",
    fullDesc: "Focusing on sustainable synthetic techniques and analytical chemistry, our research facilities include NMR, HPLC, GC-MS, and automated spectroscopic systems partnering with global pharma giants.",
    coursesOffered: ["B.Sc (Hons) Chemistry", "B.Sc Industrial & Pharmaceutical Chemistry", "M.Sc Organic Chemistry", "Ph.D. in Chemical Sciences"],
    labs: ["Analytical Chromatography (HPLC/GC-MS) Lab", "Polymer & Material Synthesis Lab", "Environmental Testing & Water Quality Lab"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "english",
    name: "English & Cultural Studies",
    category: "humanities",
    code: "ENG",
    icon: "BookOpen",
    hod: "Dr. Beatrice Montgomery",
    established: 1984,
    facultyCount: 18,
    studentsCount: 340,
    shortDesc: "Cultivating critical inquiry, Digital Humanities, World Literature, Media Rhetoric, and Professional Communication.",
    fullDesc: "The English Department prepares graduates for careers in diplomacy, media, publishing, corporate communications, and research through deep engagement with linguistic craft, critical literary theories, and multimedia storytelling.",
    coursesOffered: ["B.A. (Hons) English Literature", "B.A. Journalism & Media Studies", "M.A. English & Comparative Literature", "Diploma in Professional Rhetoric"],
    labs: ["Advanced Digital Language & Phonetics Lab", "Multimedia Studio & Podcast Lab", "Creative Writing & Publishing Guild"],
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800"
  }
];

export const coursesData = [
  {
    id: "btech-cse",
    name: "B.Tech in Computer Science & Engineering",
    level: "UG",
    department: "Computer Science & Engineering",
    duration: "4 Years (8 Semesters)",
    eligibility: "10+2 with Physics, Mathematics & Chemistry (Min 60% aggregate)",
    fees: "$4,200 / Year",
    seats: 240,
    description: "Comprehensive curriculum covering DSA, Operating Systems, AI, Cloud Computing, Database Engineering, and Software Design Patterns.",
    highlights: ["Industry Projects with Google & Microsoft", "Semester Abroad options", "100% Placement assistance"],
    careerPaths: ["Software Architect", "AI/ML Engineer", "Systems Engineer", "Cloud Solutions Architect"]
  },
  {
    id: "btech-it",
    name: "B.Tech in Information Technology",
    level: "UG",
    department: "Information Technology",
    duration: "4 Years (8 Semesters)",
    eligibility: "10+2 with PCM (Min 60% aggregate) or equivalent",
    fees: "$4,000 / Year",
    seats: 180,
    description: "Focuses on modern enterprise software, DevOps, mobile platform engineering, network security, and large-scale data infrastructures.",
    highlights: ["DevOps & AWS Cloud Certification included", "Full-Stack Capstone Showcase", "Live Hackathons"],
    careerPaths: ["Full-Stack Developer", "DevOps Engineer", "Cybersecurity Analyst", "Enterprise Architect"]
  },
  {
    id: "btech-aids",
    name: "B.Tech in Artificial Intelligence & Data Science",
    level: "UG",
    department: "Computer Science & Engineering",
    duration: "4 Years (8 Semesters)",
    eligibility: "10+2 with PCM (Min 65% aggregate)",
    fees: "$4,500 / Year",
    seats: 120,
    description: "Deep dive into Deep Learning, Natural Language Processing, Computer Vision, Big Data Pipelines, and Neural Network architectures.",
    highlights: ["Nvidia Deep Learning Institute Partnership", "Hands-on GPU cluster training", "Generative AI workshops"],
    careerPaths: ["Data Scientist", "Computer Vision Specialist", "NLP Engineer", "Quantitative Researcher"]
  },
  {
    id: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    level: "UG",
    department: "Information Technology",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 in any stream with Mathematics or Computer Science (Min 50%)",
    fees: "$2,800 / Year",
    seats: 120,
    description: "A fast-track modern application development program focusing on web apps, mobile systems, Python programming, and UI/UX design.",
    highlights: ["Industry internship in 5th Semester", "Agile & Scrum methodology training", "Portfolio development"],
    careerPaths: ["Frontend Engineer", "Mobile App Developer", "Database Administrator", "Tech Consultant"]
  },
  {
    id: "bcom-hons",
    name: "B.Com (Honours) - Finance & Analytics",
    level: "UG",
    department: "Commerce & Financial Studies",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 Commerce/Science with min 55% aggregate",
    fees: "$2,400 / Year",
    seats: 150,
    description: "Blends financial accounting, taxation, auditing, and corporate finance with FinTech tools and Bloomberg Terminal analysis.",
    highlights: ["Integrated CFA / ACCA curriculum modules", "Equity Research projects", "Wall Street training"],
    careerPaths: ["Financial Analyst", "Tax Consultant", "Investment Banker", "Auditor"]
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration (BBA)",
    level: "UG",
    department: "Management Studies",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 in any stream (Min 50% aggregate)",
    fees: "$2,900 / Year",
    seats: 180,
    description: "Foundational business leadership covering marketing management, supply chains, human capital, digital strategy, and venture creation.",
    highlights: ["Incubator support for student startups", "Live corporate consulting projects", "Executive speaker series"],
    careerPaths: ["Business Analyst", "Marketing Strategist", "Product Manager", "Startup Founder"]
  },
  {
    id: "bsc-maths",
    name: "B.Sc (Honours) Mathematics & Data Science",
    level: "UG",
    department: "Mathematics & Data Science",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with Mathematics (Min 55%)",
    fees: "$2,100 / Year",
    seats: 80,
    description: "Rigorous theoretical training in Calculus, Linear Algebra, Probability, Statistical Computing, and Discrete Structures.",
    highlights: ["Python & R programming integration", "Research thesis option", "Math modeling competitions"],
    careerPaths: ["Actuary", "Statistical Analyst", "Cryptographer", "Data Researcher"]
  },
  {
    id: "bsc-physics",
    name: "B.Sc (Honours) Physics",
    level: "UG",
    department: "Physics & Materials Science",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with Physics & Mathematics (Min 55%)",
    fees: "$2,200 / Year",
    seats: 70,
    description: "Fundamental and applied physics with extensive laboratory training in optics, electromagnetism, quantum mechanics, and solid state.",
    highlights: ["Observatory and Laser lab access", "Summer fellowships at premier institutes", "Clean room training"],
    careerPaths: ["Research Scientist", "Optical Engineer", "Laboratory Analyst", "Defense Technologist"]
  },
  {
    id: "bsc-chemistry",
    name: "B.Sc (Honours) Chemistry",
    level: "UG",
    department: "Chemical & Biological Sciences",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with Chemistry (Min 55%)",
    fees: "$2,200 / Year",
    seats: 70,
    description: "Core disciplines across Organic, Inorganic, Physical, and Analytical Chemistry, with hands-on instrumental analysis.",
    highlights: ["State-of-the-art HPLC and FTIR labs", "Green chemistry industrial projects", "Pharmaceutical internships"],
    careerPaths: ["Chemist", "Quality Assurance Analyst", "Formulation Scientist", "Forensic Expert"]
  },
  {
    id: "ba-english",
    name: "B.A. (Honours) English Literature & Media",
    level: "UG",
    department: "English & Cultural Studies",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 in any stream (Min 50%)",
    fees: "$2,000 / Year",
    seats: 90,
    description: "Literary history, rhetoric, critical discourse, cultural studies, digital journalism, and technical writing.",
    highlights: ["Campus Literary Magazine publication", "Broadcasting and podcasting studio access", "Debating society"],
    careerPaths: ["Content Strategist", "Journalist / Editor", "Corporate Communications Officer", "Public Relations Lead"]
  },
  {
    id: "mtech-cse",
    name: "M.Tech in Computer Science & Engineering",
    level: "PG",
    department: "Computer Science & Engineering",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Tech/BE in CSE/IT or MCA (Min 60% aggregate / GATE qualified preferred)",
    fees: "$4,800 / Year",
    seats: 60,
    description: "Advanced study of distributed algorithms, cryptographic systems, quantum computing principles, and high-performance computing.",
    highlights: ["Paid research assistantships available", "Publishing in IEEE/ACM journals", "Sponsored corporate thesis"],
    careerPaths: ["Senior Research Engineer", "Principal Architect", "Lead Algorithm Developer", "University Professor"]
  },
  {
    id: "mba",
    name: "Master of Business Administration (MBA)",
    level: "PG",
    department: "Management Studies",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's Degree in any discipline (Min 50% aggregate) + Entrance Score",
    fees: "$5,500 / Year",
    seats: 180,
    description: "Flagship dual-specialization program across Finance, Marketing, Operations, Human Resources, and Business Analytics.",
    highlights: ["Summer internship with Fortune 500 companies", "Global immersion study tour", "Leadership simulation labs"],
    careerPaths: ["Management Consultant", "Investment Banker", "Brand Director", "Operations Head"]
  },
  {
    id: "mca",
    name: "Master of Computer Applications (MCA)",
    level: "PG",
    department: "Information Technology",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA/B.Sc Computer Science or equivalent (Min 55% aggregate)",
    fees: "$3,400 / Year",
    seats: 90,
    description: "Advanced software engineering, microservices architectures, cloud platforms, automated testing, and big data systems.",
    highlights: ["Industry-mentored final year live project", "Cyber defense certification", "100% placement track record"],
    careerPaths: ["Principal Developer", "Software Test Architect", "Cloud Administrator", "IT Project Manager"]
  },
  {
    id: "msc-maths",
    name: "M.Sc in Applied Mathematics & Computing",
    level: "PG",
    department: "Mathematics & Data Science",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Sc with Mathematics (Min 55% aggregate)",
    fees: "$2,600 / Year",
    seats: 40,
    description: "Numerical analysis, fluid dynamics, financial mathematics, stochastic calculus, and machine learning mathematical theories.",
    highlights: ["Direct pathway to Ph.D. programs", "Summer research at national institutes", "High-performance compute clusters"],
    careerPaths: ["Quantitative Analyst", "Risk Specialist", "Mathematical Modeler", "Data Scientist"]
  },
  {
    id: "msc-chem",
    name: "M.Sc in Organic & Industrial Chemistry",
    level: "PG",
    department: "Chemical & Biological Sciences",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Sc with Chemistry (Min 55% aggregate)",
    fees: "$2,800 / Year",
    seats: 40,
    description: "Advanced synthetic organic chemistry, medicinal formulation, spectroscopy (NMR, Mass), and process optimization.",
    highlights: ["Tie-ups with leading pharmaceutical R&D labs", "Patenting workshops", "State-of-the-art chromatography suites"],
    careerPaths: ["Medicinal Chemist", "Process Development Scientist", "R&D Specialist", "Regulatory Affairs Executive"]
  },
  {
    id: "ma-english",
    name: "M.A. in English & Comparative Literature",
    level: "PG",
    department: "English & Cultural Studies",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.A. in English or Humanities (Min 50% aggregate)",
    fees: "$2,400 / Year",
    seats: 45,
    description: "Post-colonial literature, gender studies, semiotics, literary theory, digital humanities, and translation studies.",
    highlights: ["International literary colloquium", "Teaching assistantship training", "Translation workshops"],
    careerPaths: ["Senior Editor", "University Lecturer", "Creative Director", "Publishing Manager"]
  }
];

export const facultyData = [
  {
    id: "fac-1",
    name: "Dr. Rajeshwar Iyer",
    designation: "Professor & Head of Department",
    department: "Computer Science & Engineering",
    qualification: "Ph.D. (IIT Delhi), M.Tech (CSE), IEEE Senior Member",
    experience: "21 Years",
    research: "Distributed Cloud Systems, Edge Computing, Fault-Tolerant Architectures",
    email: "rajeshwar.iyer@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-2",
    name: "Dr. Priya Sundaram",
    designation: "Professor & Head of Department",
    department: "Information Technology",
    qualification: "Ph.D. (National Univ. of Singapore), M.S. (Software Engg)",
    experience: "18 Years",
    research: "Cybersecurity, Blockchain Protocols, Enterprise Cloud Architectures",
    email: "priya.sundaram@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-3",
    name: "Dr. Alok Nath Verma",
    designation: "Professor & Head of Department",
    department: "Mathematics & Data Science",
    qualification: "Ph.D. (Univ. of Cambridge), M.Sc (Pure Mathematics)",
    experience: "24 Years",
    research: "Algebraic Topology, Cryptographic Primitives, Graph Theory",
    email: "alok.verma@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-4",
    name: "Dr. Sunita Deshmukh",
    designation: "Dean & Professor",
    department: "Management Studies",
    qualification: "Ph.D. (IIM Ahmedabad), MBA (Finance & Strategy)",
    experience: "22 Years",
    research: "Corporate Governance, Strategic Innovation, Venture Capital Funding",
    email: "sunita.deshmukh@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1580894732470-38e9d3d3ef44?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-5",
    name: "Prof. Vikram Malhotra",
    designation: "Professor & HOD",
    department: "Commerce & Financial Studies",
    qualification: "Ph.D. (London School of Economics), FCA, M.Com",
    experience: "19 Years",
    research: "FinTech Innovations, Algorithmic Trading Systems, International Taxation",
    email: "vikram.malhotra@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-6",
    name: "Dr. Margaret Chen",
    designation: "Professor & Head of Department",
    department: "Physics & Materials Science",
    qualification: "Ph.D. (Caltech), Post-Doc (Max Planck Institute)",
    experience: "17 Years",
    research: "Quantum Optics, Metamaterials, 2D Nanomaterials Synthesis",
    email: "margaret.chen@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-7",
    name: "Dr. Sanjeev Khurana",
    designation: "Professor & HOD",
    department: "Chemical & Biological Sciences",
    qualification: "Ph.D. (Oxford University), M.Sc (Organic Chemistry)",
    experience: "20 Years",
    research: "Green Catalysis, Drug Delivery Polymers, Wastewater Remediation",
    email: "sanjeev.khurana@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-8",
    name: "Dr. Beatrice Montgomery",
    designation: "Professor & HOD",
    department: "English & Cultural Studies",
    qualification: "Ph.D. (Harvard University), M.A. in English Literature",
    experience: "16 Years",
    research: "Digital Humanities, Post-Colonial Rhetoric, Media Semiotics",
    email: "beatrice.m@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-9",
    name: "Dr. Arvind Swaminathan",
    designation: "Associate Professor",
    department: "Computer Science & Engineering",
    qualification: "Ph.D. (Carnegie Mellon University), M.Tech",
    experience: "12 Years",
    research: "Deep Learning, Natural Language Understanding, Generative Models",
    email: "arvind.s@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-10",
    name: "Dr. Natasha Roy",
    designation: "Associate Professor",
    department: "Information Technology",
    qualification: "Ph.D. (IIT Bombay), M.Tech (IT)",
    experience: "11 Years",
    research: "Internet of Things (IoT), Wireless Sensor Networks, Autonomous Systems",
    email: "natasha.roy@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-11",
    name: "Dr. Rohan Kulkarni",
    designation: "Associate Professor",
    department: "Management Studies",
    qualification: "Ph.D. (Wharton School), MBA (Marketing)",
    experience: "13 Years",
    research: "Consumer Psychology, Digital Marketing Omnichannel Analytics",
    email: "rohan.kulkarni@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "fac-12",
    name: "Dr. Meenakshi Joshi",
    designation: "Assistant Professor",
    department: "Mathematics & Data Science",
    qualification: "Ph.D. (IISc Bangalore), M.Sc (Applied Statistics)",
    experience: "8 Years",
    research: "Bayesian Statistics, Stochastic Optimization, Financial Modeling",
    email: "meenakshi.joshi@alshifa-university.edu",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400"
  }
];

export const facilitiesData = [
  {
    id: "library",
    name: "Sir C.V. Raman Central Digital Library",
    category: "Academic",
    capacity: "1,200 Reading Desks",
    hours: "Open 24/7 during Exams (Regular: 7:30 AM - 11:00 PM)",
    specs: "80,000+ Physical Volumes • 150,000+ E-Books • IEEE, Springer & ACM Subscriptions",
    description: "A state-of-the-art multi-level intellectual haven featuring silent reading cubes, collaborative group pods, high-speed discovery terminals, and automated RFID book checkout.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    features: ["RFID Self-Service Checkout", "Individual Study Pods", "Digital Archive Lab", "Café on 1st Floor"]
  },
  {
    id: "computer-labs",
    name: "Supercomputing & Advanced Computer Labs",
    category: "Technical",
    capacity: "1,400 High-End Workstations",
    hours: "8:00 AM - 10:00 PM (Daily)",
    specs: "Nvidia RTX A6000 GPU Clusters • Intel Xeon Processors • Dual 4K Monitors",
    description: "Equipped with state-of-the-art hardware for AI training, parallel algorithms, 3D rendering, and cybersecurity simulations, running Linux and Windows enterprise environments.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    features: ["Dedicated AI/ML Cluster", "Gigabit LAN Switching", "Virtual Machine Sandbox", "24/7 Power Backup"]
  },
  {
    id: "science-labs",
    name: "Advanced Science & Research Laboratories",
    category: "Research",
    capacity: "24 Specialized Research Suites",
    hours: "8:30 AM - 8:00 PM",
    specs: "NMR Spectrometer • HPLC • Atomic Force Microscope • Clean Room Class 1000",
    description: "World-class physical, chemical, and biological labs certified for precision instrumentation, nanotech characterization, and pharmaceutical synthesis.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    features: ["Clean Room Facility", "Automated Fume Hoods", "Hazardous Waste Neutralizer", "Cold Storage Units"]
  },
  {
    id: "smart-classrooms",
    name: "Interactive Smart Classrooms",
    category: "Academic",
    capacity: "60 to 120 Seats per Hall",
    hours: "8:00 AM - 6:00 PM",
    specs: "86-inch 4K Interactive Touchscreens • HD Lecture Capture • Acoustic Wall Paneling",
    description: "Designed for immersive, hybrid pedagogy with automated ceiling-mounted tracking cameras, studio microphones, and wireless student presentation streaming.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    features: ["Automatic Cloud Lecture Archiving", "Wireless BYOD Projection", "Ergonomic Seating", "Climate Controlled"]
  },
  {
    id: "auditorium",
    name: "Alshifa Grand University Auditorium",
    category: "Cultural",
    capacity: "1,500 Seating Capacity",
    hours: "Event-Based Access",
    specs: "Dolby Atmos Surround System • Motorized Stage Rigging • 45-foot LED Backdrop Screen",
    description: "An architectural marvel hosting national conferences, convocations, international cultural summits, TEDx chapters, and theatrical performances.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    features: ["Green Rooms & VIP Lounges", "Simultaneous Translation Booths", "Full Acoustic Treatment", "Broadcast Media Gallery"]
  },
  {
    id: "sports",
    name: "Olympic Sports Complex & Aquatic Center",
    category: "Sports",
    capacity: "Olympic-Standard Stadium & Indoor Courts",
    hours: "6:00 AM - 9:00 PM",
    specs: "50m Olympic Heated Pool • 400m Synthetic Track • 4 Indoor Badminton Courts • FIFA-Grade Turf",
    description: "Fostering physical wellness and competitive athletics with professional coaching for cricket, football, basketball, tennis, swimming, and martial arts.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    features: ["Olympic 8-Lane Swimming Pool", "Modern Strength Gym", "Floodlit Football Arena", "Physiotherapy Clinic"]
  },
  {
    id: "hostel",
    name: "Modern Residential Hostels",
    category: "Residential",
    capacity: "3,800 Resident Students (Separate Boys & Girls Wings)",
    hours: "24/7 Security & Resident Care",
    specs: "AC & Non-AC Rooms • High-Speed Wi-Fi • Solar Hot Water • Common Lounges",
    description: "A home away from home with comfortable single, double, and triple-sharing rooms, 24/7 biometric security, recreation halls, laundromat, and study lounges.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
    features: ["Biometric Access Control", "Nutritious Multi-Cuisine Mess", "Doctor On-Call 24/7", "Indoor Game Lounges"]
  },
  {
    id: "cafeteria",
    name: "Imperial Multi-Cuisine Food Court",
    category: "Dining",
    capacity: "850 Seats Simultaneously",
    hours: "7:00 AM - 10:30 PM",
    specs: "Hygienic Commercial Kitchen • FSSAI 5-Star Hygiene Certified • 8 Cuisine Outlets",
    description: "A vibrant social hub serving fresh, wholesome, balanced meals, specialty coffees, international snacks, juices, and continental cuisines.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    features: ["Cashless Smart-Card Payment", "Specialty Coffee Barista", "Daily Nutritious Thali Options", "Open-Air Garden Patio"]
  },
  {
    id: "transport",
    name: "Campus Fleet Transportation",
    category: "Logistics",
    capacity: "45 Air-Conditioned Deluxe Buses",
    hours: "Operating Across 32 Metro Routes (6:30 AM - 8:30 PM)",
    specs: "GPS Live Tracking • Speed Governors • Panic Buttons • Emergency First-Aid",
    description: "Ensuring seamless, safe, and punctual daily transit for over 3,000 day scholars and faculty across all major city hubs and transit stations.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
    features: ["Mobile App Bus Tracking", "Dedicated First-Aid Kits", "Experienced Professional Drivers", "Faculty Shuttle Express"]
  },
  {
    id: "wifi",
    name: "Gigabit Wi-Fi 6 Campus Network",
    category: "Technology",
    capacity: "50,000+ Simultaneous Devices",
    hours: "24/7/365 Uninterrupted Uptime",
    specs: "10 Gbps Redundant Optical Fiber • Enterprise Cisco & Aruba Access Points",
    description: "Complete wireless coverage across academic blocks, laboratories, hostels, libraries, sports grounds, and garden amphitheaters with enterprise firewall protection.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    features: ["10 Gbps High-Speed Bandwidth", "Eduroam Global Roaming Access", "Next-Gen DDoS Protection", "Seamless Mesh Coverage"]
  }
];

export const placementsData = {
  stats: {
    placementPercentage: "96.4%",
    highestPackage: "48.5 LPA",
    averagePackage: "9.4 LPA",
    medianPackage: "8.2 LPA",
    totalCompanies: "340+",
    offersCount: "1,520+",
    internshipStipendHighest: "$2,200 / Month"
  },
  topRecruiters: [
    { name: "Google", category: "Tech", logoText: "Google" },
    { name: "Microsoft", category: "Tech", logoText: "Microsoft" },
    { name: "Amazon", category: "E-Commerce/Cloud", logoText: "Amazon" },
    { name: "Cisco Systems", category: "Networking", logoText: "Cisco" },
    { name: "Adobe", category: "Software", logoText: "Adobe" },
    { name: "Deloitte", category: "Consulting", logoText: "Deloitte" },
    { name: "Morgan Stanley", category: "Fintech", logoText: "Morgan Stanley" },
    { name: "Goldman Sachs", category: "Finance", logoText: "Goldman Sachs" },
    { name: "TCS Innovator", category: "IT Services", logoText: "TCS" },
    { name: "Infosys Wings", category: "IT Services", logoText: "Infosys" },
    { name: "Cognizant", category: "Enterprise", logoText: "Cognizant" },
    { name: "Larsen & Toubro", category: "Engineering", logoText: "L&T" },
    { name: "HDFC Bank", category: "Banking", logoText: "HDFC Bank" },
    { name: "Accenture", category: "Strategy", logoText: "Accenture" },
    { name: "KPMG", category: "Auditing", logoText: "KPMG" },
    { name: "Wipro Digital", category: "Cloud", logoText: "Wipro" }
  ],
  processSteps: [
    {
      step: "01",
      title: "Registration & Profile Verification",
      desc: "Final and pre-final year students register with verified transcripts, resumes, GitHub portfolios, and aptitude certifications."
    },
    {
      step: "02",
      title: "Pre-Placement Talks (PPT)",
      desc: "Visiting corporate HR teams present organizational culture, compensation structures, growth roadmaps, and role descriptions."
    },
    {
      step: "03",
      title: "Aptitude & Technical Assessments",
      desc: "Structured computerized coding, algorithmic problem solving, domain knowledge tests, and cognitive evaluations."
    },
    {
      step: "04",
      title: "Group Discussions & Technical Interviews",
      desc: "Deep technical interrogation covering DSA, system design, architectural choices, capstone code review, and domain mastery."
    },
    {
      step: "05",
      title: "HR Interview & Offer Letters",
      desc: "Cultural fitment evaluation, salary discussion, and instant generation of signed provisional offer letters on campus."
    }
  ],
  trainingHighlights: [
    "Over 200+ hours of dedicated algorithmic problem solving and data structures bootcamp.",
    "1-on-1 mock interviews with alumni leaders from Google, Amazon, and McKinsey.",
    "Full-stack industry certification in AWS Cloud, Cisco CCNA, and Agile Scrum.",
    "Corporate soft skills: boardroom presentation, professional etiquette, and executive negotiation.",
    "Mandatory 8-week paid summer internship program with university mentorship."
  ],
  yearlyGrowth: [
    { year: "2023", placementRate: "93.8%", highest: "42 LPA", avg: "8.1 LPA" },
    { year: "2024", placementRate: "95.1%", highest: "44.5 LPA", avg: "8.8 LPA" },
    { year: "2025", placementRate: "95.8%", highest: "46 LPA", avg: "9.1 LPA" },
    { year: "2026", placementRate: "96.4%", highest: "48.5 LPA", avg: "9.4 LPA" }
  ]
};

export const eventsAndNewsData = {
  news: [
    {
      id: "news-1",
      title: "Admissions Open for Academic Year 2026-27 (Undergraduate & Postgraduate)",
      category: "Admissions",
      date: "September 08, 2026",
      urgent: true,
      excerpt: "Online application portal is now active for all 18 degree programs. Early merit scholarship applications close on October 15, 2026.",
      readTime: "3 min read"
    },
    {
      id: "news-2",
      title: "Alshifa University Bags NAAC 'A++' Accreditation with Historic 3.84 CGPA",
      category: "Achievement",
      date: "August 28, 2026",
      urgent: false,
      excerpt: "The National Assessment and Accreditation Council committee lauded the college's research output, high-tech labs, and exceptional placement statistics.",
      readTime: "4 min read"
    },
    {
      id: "news-3",
      title: "Faculty Research Team Secures $1.2M Clean Energy Grant from Dept of Science",
      category: "Research",
      date: "August 14, 2026",
      urgent: false,
      excerpt: "Dr. Margaret Chen and Dr. Sanjeev Khurana lead a groundbreaking consortium on next-generation perovskite solar cells and nanomaterial batteries.",
      readTime: "5 min read"
    },
    {
      id: "news-4",
      title: "Campus Placement Season 2026 Kicks Off with 450+ Day-1 Offers",
      category: "Placements",
      date: "July 30, 2026",
      urgent: false,
      excerpt: "Microsoft, Amazon, and Google roll out highest offers peaking at 48.5 LPA in the opening weekend of recruitment drives.",
      readTime: "3 min read"
    }
  ],
  events: [
    {
      id: "event-1",
      title: "Innovate 2026: 36-Hour National Collegiate Hackathon",
      category: "Workshops",
      date: "October 18 - 20, 2026",
      time: "09:00 AM onwards",
      venue: "Central Supercomputing Hub & Auditorium",
      description: "Compete against 120 premier teams in Web3, Generative AI, MedTech, and Autonomous Robotics for prize pools over $15,000.",
      status: "Registration Open",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "event-2",
      title: "Aura 2026: Annual Pan-University Cultural & Arts Extravaganza",
      category: "Cultural programs",
      date: "November 12 - 15, 2026",
      time: "04:00 PM - 10:00 PM",
      venue: "University Open-Air Amphitheatre",
      description: "Four days of battle of the bands, classical choreography, celebrity concerts, fashion displays, and street play drama.",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "event-3",
      title: "International Symposium on Quantum Information & AI Ethics",
      category: "Seminars",
      date: "October 28, 2026",
      time: "10:00 AM - 05:00 PM",
      venue: "Sir C.V. Raman Convention Hall",
      description: "Keynote talks by distinguished professors from MIT, Oxford, and scientists from IBM Quantum Systems.",
      status: "Registration Open",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "event-4",
      title: "Spardha 2026: Inter-Collegiate Annual Sports Championship",
      category: "Sports events",
      date: "December 02 - 06, 2026",
      time: "07:00 AM - 07:00 PM",
      venue: "Olympic Sports Complex & Floodlit Turf",
      description: "Over 40 colleges battle across Football, Athletics, Basketball, Badminton, Swimming, and Table Tennis trophies.",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "event-5",
      title: "Executive Workshop on FinTech, Algorithmic Trading & DeFi",
      category: "Workshops",
      date: "November 25, 2026",
      time: "11:00 AM - 04:00 PM",
      venue: "Live Bloomberg Finance Suite",
      description: "Hands-on algorithmic backtesting, quantitative portfolio hedging, and smart contract audit techniques with Wall Street veterans.",
      status: "Filling Fast",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600"
    }
  ]
};

export const galleryData = [
  {
    id: "gal-1",
    title: "Main Administrative & Academic Quadrangle",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    caption: "The majestic heritage clock tower and fountain courtyard of the 85-acre central campus."
  },
  {
    id: "gal-2",
    title: "High-Performance GPU Computing Lab",
    category: "Laboratory",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000",
    caption: "Engineering students training neural models on dedicated Nvidia RTX workstation clusters."
  },
  {
    id: "gal-3",
    title: "Interactive Smart Tiered Lecture Hall",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
    caption: "Executive style tiered auditorium equipped with dual interactive displays and studio audio."
  },
  {
    id: "gal-4",
    title: "Annual Cultural Music & Light Festival",
    category: "Events",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000",
    caption: "Over 5,000 students enjoying the star night musical concert at the open-air amphitheater."
  },
  {
    id: "gal-5",
    title: "Olympic 8-Lane Aquatic Center",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1000",
    caption: "University swim team training during the Inter-Collegiate State Water Polo Championships."
  },
  {
    id: "gal-6",
    title: "Central Digital Library Reading Gallery",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000",
    caption: "Three-tiered architectural reading hall holding over 80,000 academic titles and rare manuscripts."
  },
  {
    id: "gal-7",
    title: "Nanotechnology & Chemical Synthesis Suite",
    category: "Laboratory",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
    caption: "Clean-room environment for material synthesis and analytical spectrophotometry."
  },
  {
    id: "gal-8",
    title: "Collegiate Football Championship Match",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
    caption: "Floodlit championship finals held at the FIFA-standard natural turf arena."
  },
  {
    id: "gal-9",
    title: "Hackathon Coding Marathon Session",
    category: "Events",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
    caption: "Developers working non-stop through the night during the 36-hour Innovate 2026 hackathon."
  },
  {
    id: "gal-10",
    title: "Design Thinking & Collaboration Workshop",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
    caption: "Management students presenting live business case solutions to visiting corporate mentors."
  },
  {
    id: "gal-11",
    title: "Spring Blossoms in Botanical Botanical Gardens",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    caption: "Serene walking pathways connecting residential hostels and central research complexes."
  },
  {
    id: "gal-12",
    title: "Robotics & Autonomous Vehicle Testing Track",
    category: "Laboratory",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    caption: "Student drone and robotic rover navigation trials in the autonomous systems testbed."
  }
];

export const admissionsData = {
  procedureSteps: [
    {
      step: 1,
      title: "Online Registration & Profile Submission",
      desc: "Fill the digital application form, specify desired programs, and upload scanned transcripts along with national entrance test scorecards (JEE/SAT/CAT/Direct)."
    },
    {
      step: 2,
      title: "Merit Evaluation & Counseling Allotment",
      desc: "The admissions committee publishes cutoff ranks and merit lists. Shortlisted applicants attend an online or on-campus counseling session with academic deans."
    },
    {
      step: 3,
      title: "Document Verification & Provisional Acceptance",
      desc: "Original certificates, migration clearances, identity proofs, and letters of recommendation are verified by the Registrar's Office."
    },
    {
      step: 4,
      title: "Fee Payment & Orientation Kit",
      desc: "Secure your allotted seat via the payment gateway. Receive university student ID, digital portal credentials, and campus orientation schedule."
    }
  ],
  importantDates: [
    { event: "Online Applications Open", date: "September 01, 2026" },
    { event: "Phase-1 Early Decision Deadline", date: "October 15, 2026" },
    { event: "Merit List - Round 1 Announcement", date: "October 30, 2026" },
    { event: "Counselling & Seat Confirmation", date: "November 05 - 12, 2026" },
    { event: "Phase-2 General Admissions Deadline", date: "December 05, 2026" },
    { event: "Orientation Week & Classes Commence", date: "January 11, 2027" }
  ],
  requiredDocuments: [
    "High School Certificate (10th Grade) for Date of Birth Verification",
    "Pre-University / Intermediate / 12th Grade Official Marksheet",
    "National/State Level Entrance Exam Scorecard (if applicable: JEE, CAT, etc.)",
    "Transfer Certificate (TC) and Conduct Certificate from last attended institution",
    "Migration Certificate (for students coming from other boards/universities)",
    "Recent Passport Size Color Photographs (4 copies with white background)",
    "Government Photo Identity Proof (Aadhaar / Passport / National ID)",
    "Category / Caste / Disability Certificate (if applying for quota/concession)"
  ],
  faqs: [
    {
      q: "What are the minimum eligibility criteria for B.Tech programs?",
      a: "Candidates must have passed 10+2 with Physics, Mathematics, and Chemistry (or Computer Science) with a minimum aggregate score of 60% (55% for reserved categories). Valid scores in national entrance exams (JEE Main or Alshifa CET) are evaluated for merit scholarships."
    },
    {
      q: "Is there any financial aid or merit scholarship available?",
      a: "Yes! Alshifa University offers up to 100% tuition waivers for top rankers in national tests, sports medalists, and economically underprivileged meritorious students through the University Chancellor Fellowship."
    },
    {
      q: "Can I apply for more than one course with a single application?",
      a: "Yes. You can select up to three program preferences in order of priority on the online application form. Merit allocation will automatically evaluate your higher choices first."
    },
    {
      q: "Are hostel accommodations guaranteed for outstation students?",
      a: "Yes, our on-campus residential facilities accommodate over 3,800 students. First-year outstation applicants are given priority hostel allotment upon completion of admission confirmation."
    },
    {
      q: "What is the fee refund policy in case I withdraw my admission?",
      a: "We adhere strictly to statutory UGC & AICTE refund guidelines. 100% fees (minus processing charge of $20) is refunded if withdrawal is submitted before the formal orientation date."
    },
    {
      q: "How does the campus placement training support work?",
      a: "Every student undergoes 200+ hours of dedicated aptitude training, technical bootcamps, and mock interviews beginning in the 5th semester, resulting in our 96.4% placement record."
    }
  ]
};

export const studentPortalMock = {
  profile: {
    name: "Aarav Sharma",
    rollNo: "AU/2023/CS-108",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    program: "B.Tech in Computer Science & Engineering",
    semester: "Semester 6 (Year 3)",
    section: "CS-Section A",
    batch: "2023 - 2027",
    cgpa: "9.14",
    overallAttendance: "89.2%",
    advisor: "Dr. Rajeshwar Iyer",
    email: "aarav.sharma23@student.alshifa-university.edu",
    bloodGroup: "O+",
    dob: "August 14, 2005"
  },
  attendance: [
    { code: "CS-601", subject: "Distributed Cloud Architecture", total: 42, attended: 39, pct: 92.8, status: "Excellent" },
    { code: "CS-602", subject: "Machine Learning & Neural Nets", total: 45, attended: 41, pct: 91.1, status: "Excellent" },
    { code: "CS-603", subject: "Compiler Engineering & Theory", total: 40, attended: 34, pct: 85.0, status: "Good" },
    { code: "CS-604", subject: "Cybersecurity & Cryptography", total: 38, attended: 33, pct: 86.8, status: "Good" },
    { code: "CS-605", subject: "Full Stack DevOps Lab", total: 36, attended: 34, pct: 94.4, status: "Excellent" },
    { code: "HS-601", subject: "Engineering Ethics & Governance", total: 24, attended: 20, pct: 83.3, status: "Good" }
  ],
  grades: [
    { sem: "Semester 5", sgpa: "9.28", credits: 24, status: "Passed (Distinction)" },
    { sem: "Semester 4", sgpa: "9.12", credits: 24, status: "Passed (Distinction)" },
    { sem: "Semester 3", sgpa: "9.05", credits: 23, status: "Passed (Distinction)" },
    { sem: "Semester 2", sgpa: "8.95", credits: 22, status: "Passed (First Class)" },
    { sem: "Semester 1", sgpa: "9.30", credits: 22, status: "Passed (Distinction)" }
  ],
  currentMarks: [
    { subject: "Distributed Cloud Architecture", internal: "28/30", midTerm: "38/40", practical: "29/30", total: "95/100", grade: "A+" },
    { subject: "Machine Learning & Neural Nets", internal: "29/30", midTerm: "37/40", practical: "28/30", total: "94/100", grade: "A+" },
    { subject: "Compiler Engineering & Theory", internal: "26/30", midTerm: "34/40", practical: "27/30", total: "87/100", grade: "A" },
    { subject: "Cybersecurity & Cryptography", internal: "27/30", midTerm: "35/40", practical: "28/30", total: "90/100", grade: "A+" },
    { subject: "Full Stack DevOps Lab", internal: "30/30", midTerm: "39/40", practical: "30/30", total: "99/100", grade: "O" }
  ],
  timetable: [
    { day: "Monday", slots: [
      { time: "09:00 - 10:00", subject: "Distributed Cloud", room: "LT-302", faculty: "Dr. Rajeshwar Iyer" },
      { time: "10:00 - 11:00", subject: "Machine Learning", room: "LT-302", faculty: "Dr. Arvind S." },
      { time: "11:15 - 01:15", subject: "DevOps & Cloud Lab", room: "CS-Lab 4", faculty: "Prof. Ananya Rao" },
      { time: "02:00 - 03:00", subject: "Cybersecurity", room: "LT-302", faculty: "Dr. Priya S." }
    ]},
    { day: "Tuesday", slots: [
      { time: "09:00 - 10:00", subject: "Compiler Design", room: "LT-304", faculty: "Dr. Alok Verma" },
      { time: "10:00 - 11:00", subject: "Distributed Cloud", room: "LT-302", faculty: "Dr. Rajeshwar Iyer" },
      { time: "11:15 - 12:15", subject: "Engineering Ethics", room: "LT-101", faculty: "Dr. Beatrice M." },
      { time: "02:00 - 04:00", subject: "ML Research Seminar", room: "Seminar Hall 2", faculty: "Dr. Arvind S." }
    ]},
    { day: "Wednesday", slots: [
      { time: "09:00 - 11:00", subject: "Cybersecurity Lab", room: "Cyber Forensics Suite", faculty: "Dr. Priya S." },
      { time: "11:15 - 12:15", subject: "Machine Learning", room: "LT-302", faculty: "Dr. Arvind S." },
      { time: "01:30 - 02:30", subject: "Compiler Design", room: "LT-304", faculty: "Dr. Alok Verma" },
      { time: "03:00 - 04:30", subject: "Campus Placement Aptitude", room: "Auditorium", faculty: "Career Cell" }
    ]},
    { day: "Thursday", slots: [
      { time: "09:00 - 10:00", subject: "Engineering Ethics", room: "LT-101", faculty: "Dr. Beatrice M." },
      { time: "10:00 - 11:00", subject: "Distributed Cloud", room: "LT-302", faculty: "Dr. Rajeshwar Iyer" },
      { time: "11:15 - 01:15", subject: "Capstone Project Mentorship", room: "Incubator Hub", faculty: "Dr. Rajeshwar Iyer" },
      { time: "02:00 - 03:00", subject: "Cybersecurity", room: "LT-302", faculty: "Dr. Priya S." }
    ]},
    { day: "Friday", slots: [
      { time: "09:00 - 10:00", subject: "Compiler Design", room: "LT-304", faculty: "Dr. Alok Verma" },
      { time: "10:00 - 11:00", subject: "Machine Learning", room: "LT-302", faculty: "Dr. Arvind S." },
      { time: "11:15 - 01:00", subject: "Sports / Technical Guilds", room: "Campus Arena", faculty: "Coaches" }
    ]}
  ],
  assignments: [
    {
      id: "asg-1",
      title: "Kubernetes Cluster Multi-Node Deployment & Helm Charts",
      subject: "CS-605 DevOps Lab",
      dueDate: "September 25, 2026",
      status: "Submitted",
      grade: "Pending Evaluation",
      maxMarks: 50
    },
    {
      id: "asg-2",
      title: "Convolutional Neural Network for Medical Image Classification",
      subject: "CS-602 Machine Learning",
      dueDate: "October 02, 2026",
      status: "In Progress",
      grade: "Not Submitted",
      maxMarks: 100
    },
    {
      id: "asg-3",
      title: "LR(1) Parser Implementation in Python",
      subject: "CS-603 Compiler Design",
      dueDate: "October 10, 2026",
      status: "In Progress",
      grade: "Not Submitted",
      maxMarks: 50
    },
    {
      id: "asg-4",
      title: "Zero-Knowledge Proofs & AES-256 Analysis",
      subject: "CS-604 Cybersecurity",
      dueDate: "September 15, 2026",
      status: "Graded",
      grade: "48 / 50 (A+)",
      maxMarks: 50
    }
  ],
  announcements: [
    { id: 1, date: "Sep 09, 2026", title: "Mid-Term Examination Hall Tickets will be accessible for download on Sep 18." },
    { id: 2, date: "Sep 05, 2026", title: "Google Cloud Career Certification voucher codes distributed to registered CS students." },
    { id: 3, date: "Aug 29, 2026", title: "Hostel Room Cleaning & AC Maintenance schedule for Block B announced." }
  ],
  exams: {
    upcoming: "End Semester Examinations - Autumn 2026",
    center: "Alshifa University Main Examination Block (Hall A & B)",
    hallTicketStatus: "Generated & Verified",
    schedule: [
      { date: "Oct 24, 2026", time: "09:30 AM - 12:30 PM", code: "CS-601", subject: "Distributed Cloud Architecture" },
      { date: "Oct 27, 2026", time: "09:30 AM - 12:30 PM", code: "CS-602", subject: "Machine Learning & Neural Nets" },
      { date: "Oct 30, 2026", time: "09:30 AM - 12:30 PM", code: "CS-603", subject: "Compiler Engineering & Theory" },
      { date: "Nov 03, 2026", time: "09:30 AM - 12:30 PM", code: "CS-604", subject: "Cybersecurity & Cryptography" },
      { date: "Nov 06, 2026", time: "09:30 AM - 12:30 PM", code: "HS-601", subject: "Engineering Ethics & Governance" }
    ]
  },
  fees: {
    academicYear: "2026 - 2027 (Year 3)",
    tuitionFee: "$4,200",
    labFee: "$400",
    libraryFee: "$150",
    hostelFee: "$1,800",
    totalAnnual: "$6,550",
    amountPaid: "$6,550",
    balanceDue: "$0.00",
    paymentStatus: "Paid in Full",
    transactions: [
      { id: "TXN-984210", date: "July 12, 2026", desc: "Annual Tuition & Lab Fees (Sem 5 & 6)", amount: "$4,600", mode: "Wire Transfer", status: "Success" },
      { id: "TXN-984211", date: "July 12, 2026", desc: "Hostel & Dining Annual Charges", amount: "$1,800", mode: "Online Gateway", status: "Success" },
      { id: "TXN-984212", date: "July 12, 2026", desc: "Digital Library Consortium Fee", amount: "$150", mode: "Credit Card", status: "Success" }
    ]
  }
};

export const testimonialsData = [
  {
    id: "test-1",
    name: "Devika Krishnan",
    batch: "B.Tech CSE, Class of 2024",
    role: "Software Engineer at Google Cloud",
    quote: "Alshifa University provided me with world-class faculty, state-of-the-art supercomputing labs, and continuous mentorship. The hackathons and coding culture directly enabled me to crack my dream offer at Google.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "test-2",
    name: "Rohan Singhal",
    batch: "MBA, Class of 2023",
    role: "Senior Consultant at Deloitte Strategy",
    quote: "The case-study pedagogy, corporate leadership conclaves, and Bloomberg financial lab created an executive mindset. Alshifa University’s career cell supported me at every step of my campus recruitment journey.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "test-3",
    name: "Sneha Mukherjee",
    batch: "B.Sc (Hons) Physics, Class of 2025",
    role: "Research Fellow at Max Planck Institute",
    quote: "Working in the clean room with Dr. Margaret Chen on laser spectroscopy gave me publishing opportunities while still an undergraduate. The academic rigor here is on par with the world's best institutions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
  }
];
