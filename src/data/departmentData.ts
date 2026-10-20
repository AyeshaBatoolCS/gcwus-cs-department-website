import { FacultyMember, GalleryItem, NewsEvent, Program, ResearchArea, StatItem } from '../types';

import heroLabImg from '../assets/images/hero_cs_lab_1791616111741.jpg';
import campusBuildingImg from '../assets/images/campus_gcwus_building_1791616126372.jpg';
import researchAiImg from '../assets/images/research_ai_lab_1791616139662.jpg';
import fypExhibitionImg from '../assets/images/fyp_exhibition_tech_1791616150803.jpg';

// Re-export verified faculty, programs, and department metadata from dedicated data modules
export { facultyMembers } from './facultyData';
export { academicPrograms } from './programsData';
export { officialDepartmentInfo } from './departmentInfo';

import { officialDepartmentInfo } from './departmentInfo';

export const departmentImages = {
  heroLab: heroLabImg,
  campusBuilding: campusBuildingImg,
  researchAi: researchAiImg,
  fypExhibition: fypExhibitionImg,
  // Local paths mapped in public/images
  localLogo: '/images/university-logo.png',
  localCampus: '/images/campus.jpg',
  localLab: '/images/computer-lab.jpg',
  localResearch: '/images/research-lab.jpg',
  localFyp: '/images/fyp-expo.jpg',
};

export const departmentStats: StatItem[] = [
  {
    id: 'students',
    label: 'Enrolled Female Scholars',
    targetNumber: 1500,
    suffix: '+',
    description: 'Active students pursuing BS, MS, and PhD computing degrees',
  },
  {
    id: 'faculty',
    label: 'Verified Faculty Members',
    targetNumber: 10,
    suffix: '',
    description: 'Chairperson, PhD professors, and lecturers listed in official directory',
  },
  {
    id: 'programs',
    label: 'Academic Degree Programs',
    targetNumber: 5,
    suffix: '',
    description: 'BS CS (140 Cr. Hrs), BS IT (138 Cr. Hrs), BS SE, MS CS, and PhD CS',
  },
  {
    id: 'placement',
    label: 'Graduate Success Rate',
    targetNumber: 94,
    suffix: '%',
    description: 'Graduates securing tech industry roles or pursuing elite doctoral research',
  },
];

export const researchAreas: ResearchArea[] = [
  {
    id: 'res-hpc',
    title: 'High-Performance Computing & Exascale Systems',
    category: 'Artificial Intelligence',
    description: 'Investigating parallel computing architectures, exascale supercomputing pipelines, and high-performance GPU clustering for deep neural network training.',
    activeProjects: [
      'High-Performance Deep Neural Network Training for Complex Vision Systems',
      'Exascale Computing Parallel Task Scheduling Optimization',
      'Edge-HPC Hybrid Architectures for Industrial Sensing in Sialkot'
    ],
    leadFaculty: 'Dr. M. Usman Ashraf (Chairperson & Associate Professor)',
    toolsUsed: ['MPI', 'OpenMP', 'CUDA', 'PyTorch', 'C++ HPC Libraries'],
  },
  {
    id: 'res-ai',
    title: 'Artificial Intelligence & Neural Systems',
    category: 'Artificial Intelligence',
    description: 'Investigating deep neural representations, transformer architectures for natural language processing, and computer vision algorithms.',
    activeProjects: [
      'Automated Quality Inspection for Regional Surgical & Sports Manufacturing',
      'Urdu Speech Recognition & Neural Synthesis for Assistive Technologies',
      'Explainable AI Frameworks for Biomedical Diagnostic Systems'
    ],
    leadFaculty: 'Dr. M. Usman Ashraf & Dr. Muhammad Hamid',
    toolsUsed: ['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenCV', 'Python'],
  },
  {
    id: 'res-cyber',
    title: 'Cybersecurity & Network Defense',
    category: 'Cybersecurity',
    description: 'Advancing intrusion detection models, zero-trust network perimeter defense, cryptographic key exchange, and security protocols for distributed enclaves.',
    activeProjects: [
      'Zero-Trust Security Architecture for Campus Cloud Systems',
      'AI-Powered Automated Threat Intelligence & Malware Classification',
      'Lightweight Cryptography for Smart Edge Computing Nodes'
    ],
    leadFaculty: 'Dr. Muhammad Hamid (Incharge-IT & Assistant Professor)',
    toolsUsed: ['Wireshark', 'Kali Linux', 'Metasploit', 'Snort', 'OpenSSL'],
  },
  {
    id: 'res-se',
    title: 'Software Quality Engineering & Architectures',
    category: 'Web Development',
    description: 'Architecting enterprise software solutions, microservices, continuous delivery pipelines, and rigorous empirical testing methodologies.',
    activeProjects: [
      'Automated Quality Assurance Pipeline for Cloud-Native Applications',
      'Empirical Analysis of Agile Software Engineering in Women-Led Startups',
      'Scalable Microservices Framework for University Enterprise Information'
    ],
    leadFaculty: 'Ms. Faiza Nazeer & Ms. Farzana Younas',
    toolsUsed: ['React', 'Node.js', 'Docker', 'Kubernetes', 'SonarQube'],
  },
  {
    id: 'res-data',
    title: 'Data Science & Applied Analytics',
    category: 'Data Science',
    description: 'Extracting actionable knowledge from structured and unstructured data, time-series forecasting, and algorithmic decision support.',
    activeProjects: [
      'Longitudinal Academic Analytics & Student Performance Retention Modeling',
      'Regional Supply Chain Flow Optimization in Manufacturing Districts',
      'Social Informatics & Public Sentiment Analytics'
    ],
    leadFaculty: 'Dr. Iqra Ilyas & Ms. Ayesha Raana',
    toolsUsed: ['Apache Spark', 'PostgreSQL', 'Scikit-learn', 'Pandas', 'FastAPI'],
  },
];

export const newsAndEvents: NewsEvent[] = [
  {
    id: 'news-1',
    title: 'Admissions Open: BS CS, BS IT, BS SE & MS CS Fall 2026',
    category: 'Admission',
    date: 'October 15, 2026',
    location: 'GCWUS Admission Office & Online Portal',
    summary: 'Online registration is now open for prospective scholars. Minimum 50% in Intermediate with Math required. Pre-medical eligibility with deficiency courses.',
    content: 'The Department of Computer Science invites applications for BS Computer Science (140 Credit Hours), BS Information Technology (138 Credit Hours), BS Software Engineering, and MS CS. Pre-medical students may apply and clear 6 credit hours of deficiency Mathematics courses within one year. Visit https://gcwus.edu.pk for registration.',
    registrationOpen: true,
  },
  {
    id: 'news-2',
    title: 'Annual Women in Tech Coding Gala & Hackathon 2026',
    category: 'Event',
    date: 'November 08, 2026',
    location: 'Auditorium & Computing Lab 3, GCWUS',
    summary: 'A 24-hour coding challenge bringing together female university coders to develop AI and sustainability tech solutions for regional challenges.',
    content: 'Sponsored by local tech firms and industrial partners in Sialkot, this annual hackathon tests algorithmic problem solving, rapid prototyping, and teamwork. Cash prizes and internship placements awarded to top teams.',
    registrationOpen: true,
  },
  {
    id: 'news-3',
    title: 'National Symposium on AI & High-Performance Computing',
    category: 'Symposium',
    date: 'December 02, 2026',
    location: 'Main University Conference Hall',
    summary: 'Keynote addresses from leading national researchers, paper presentations, and demonstrations of industrial AI and HPC applications.',
    content: 'The symposium provides an academic platform for researchers, postgraduate students, and faculty to present their findings in parallel algorithms, machine learning, and cybersecurity.',
    registrationOpen: false,
  },
  {
    id: 'news-4',
    title: 'Final Year Project (FYP) Industrial Exhibition',
    category: 'News',
    date: 'September 28, 2026',
    location: 'Department Exhibition Gallery',
    summary: 'Over 40 graduating batch software projects showcased before Sialkot Chamber of Commerce & Industry (SCCI) delegates.',
    content: 'Industry delegates from SCCI and software export firms commended our graduating scholars for innovative projects in health tech, smart manufacturing, and cloud software.',
    registrationOpen: false,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Advanced Computing & Programming Laboratory',
    category: 'Computing Labs',
    image: departmentImages.heroLab,
    caption: 'Scholars working collaboratively in the state-of-the-art dual-screen computing laboratory.',
    date: 'Academic Session 2026',
    isVerifiedAsset: false,
  },
  {
    id: 'gal-2',
    title: 'GCWUS Historic & Modern Academic Complex',
    category: 'Campus Life',
    image: departmentImages.campusBuilding,
    caption: 'Serene campus grounds and grand academic colonnade at GCWUS, Sialkot.',
    date: 'Academic Year 2026',
    isVerifiedAsset: false,
  },
  {
    id: 'gal-3',
    title: 'Artificial Intelligence & Data Science Research Lab',
    category: 'Computing Labs',
    image: departmentImages.researchAi,
    caption: 'Faculty and research scholars evaluating deep neural network training pipelines.',
    date: 'Research Session 2026',
    isVerifiedAsset: false,
  },
  {
    id: 'gal-4',
    title: 'Annual Final Year Project (FYP) Exhibition',
    category: 'FYP Exhibition',
    image: departmentImages.fypExhibition,
    caption: 'Graduating scholars demonstrating working software prototypes to industrial evaluators.',
    date: 'Symposium 2026',
    isVerifiedAsset: false,
  },
];

export const officialContactInfo = {
  university: officialDepartmentInfo.universityFullName,
  department: officialDepartmentInfo.departmentFullName,
  address: officialDepartmentInfo.contact.campusAddress,
  phonePrimary: officialDepartmentInfo.contact.phonePrimary,
  phoneAdmissions: officialDepartmentInfo.contact.phoneAdmissions,
  email: officialDepartmentInfo.contact.emailDepartment,
  chairpersonEmail: officialDepartmentInfo.contact.emailChairperson,
  admissionsEmail: officialDepartmentInfo.contact.emailAdmissions,
  officeHours: officialDepartmentInfo.contact.officeHours,
  officialWebsiteUrl: officialDepartmentInfo.contact.officialWebsiteUrl,
  officialDepartmentUrl: officialDepartmentInfo.contact.officialDepartmentUrl,
  officialFacultyUrl: officialDepartmentInfo.contact.officialFacultyUrl,
  hecStatus: officialDepartmentInfo.contact.hecStatus,
  mapCoordinates: officialDepartmentInfo.contact.mapCoordinates,
};
