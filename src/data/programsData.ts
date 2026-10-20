import { Program } from '../types';

/**
 * Verified Academic Programs for Department of Computer Science
 * Government College Women University Sialkot (GCWUS)
 * 
 * Verified against official university source:
 * https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/
 */
export const academicPrograms: Program[] = [
  {
    id: 'bs-cs',
    title: 'BS Computer Science (BS-CS Hons)',
    degreeType: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    creditHours: 140, // Verified from GCWUS official program specifications
    eligibility: 'Intermediate (HSSC) / FSc Pre-Engineering / ICS / General Science with Mathematics (at least 200 marks total) with minimum 50% marks. Note: Pre-Medical students are eligible by passing 6 credit hours of deficiency Mathematics courses within the first year.',
    overview: 'The 4-year BS Computer Science program at GCWUS provides foundational and advanced mastery in computational theory, algorithms, intelligent systems, and software architectures. Awarded with 140 credit hours in accordance with HEC and NCEAC curricula.',
    careerProspects: [
      'Software Development Engineer (SWE)',
      'AI & Machine Learning Engineer',
      'Database Architect & Administrator',
      'High-Performance Systems Analyst',
      'Computational Research Scientist'
    ],
    keyCourses: [
      'Programming Fundamentals (C++ / Python)',
      'Object Oriented Programming',
      'Data Structures & Algorithms',
      'Database Systems & Implementation',
      'Operating Systems & Kernel Architecture',
      'Theory of Automata & Formal Languages',
      'Artificial Intelligence & Intelligent Systems',
      'Computer Communications & Networks',
      'Analysis of Algorithms',
      'Final Year Capstone Project (6 Credit Hours)'
    ],
    intakeSeason: 'Fall & Spring Admissions',
    accreditation: 'HEC Recognized & NCEAC Accredited',
    isVerifiedOfficial: true,
    specialNotes: 'Pre-Medical students eligible subject to completing 6 credit hours deficiency Mathematics within 1 year.'
  },
  {
    id: 'bs-it',
    title: 'BS Information Technology (BS-IT)',
    degreeType: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    creditHours: 138, // Verified from GCWUS official program specifications
    eligibility: 'Intermediate with at least 50% marks with Mathematics. Pre-Medical students also eligible with 6 credit hours deficiency Mathematics within one year.',
    overview: 'The 4-year BS Information Technology degree (138 credit hours) trains female professionals in enterprise IT systems, network infrastructure, database administration, web and mobile systems, and cyber defense.',
    careerProspects: [
      'Enterprise IT Infrastructure Specialist',
      'Network Administrator & Security Engineer',
      'Cloud Solutions & DevOps Specialist',
      'Database Administrator',
      'Web & Enterprise Applications Developer'
    ],
    keyCourses: [
      'Information Technology Infrastructure',
      'Database Administration & Management',
      'Network Security & Administration',
      'Web Technologies & Cloud Platforms',
      'System Integration & Architecture',
      'IT Project Management',
      'Human-Computer Interaction',
      'Capstone IT Implementation Project'
    ],
    intakeSeason: 'Fall Admissions',
    accreditation: 'HEC Recognized & NCEAC Aligned',
    isVerifiedOfficial: true,
    specialNotes: 'Degree awarded upon completion of 138 credit hours.'
  },
  {
    id: 'bs-se',
    title: 'BS Software Engineering (BS-SE)',
    degreeType: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    creditHours: 136,
    eligibility: 'Intermediate (Pre-Engineering, ICS with Math/Physics/CS) or equivalent examination with minimum 50% aggregate score as per HEC / GCWUS guidelines.',
    overview: 'A focused software engineering curriculum covering complete software lifecycles, rigorous quality assurance, scalable architecture design patterns, and enterprise system construction for industrial solutions.',
    careerProspects: [
      'Full-Stack Software Engineer',
      'Software Quality Assurance Lead',
      'Software Solutions Architect',
      'Agile Scrum & Technical Product Lead',
      'DevOps & Continuous Delivery Engineer'
    ],
    keyCourses: [
      'Software Requirements Engineering',
      'Software Architecture & Design Patterns',
      'Software Quality Engineering & Testing',
      'Enterprise Application Development',
      'Software Project Management',
      'Cloud Computing Infrastructure',
      'Human-Computer Interaction (HCI)',
      'Industrial Capstone Project'
    ],
    intakeSeason: 'Fall Admissions',
    accreditation: 'HEC Recognized & NCEAC Curriculum Aligned',
    isVerifiedOfficial: true
  },
  {
    id: 'ms-cs',
    title: 'MS Computer Science (MS-CS)',
    degreeType: 'Postgraduate',
    duration: '2 Years (4 Semesters)',
    creditHours: 30,
    eligibility: 'BS in Computer Science / Software Engineering / IT or 16-year equivalent degree with minimum 2.50/4.00 CGPA (or 60% in annual system) along with GCWUS Departmental Entry Test or GAT General.',
    overview: 'Research-intensive postgraduate program advancing frontier disciplines in high-performance computing, artificial intelligence, deep learning, computer vision, and cybersecurity under experienced doctoral supervisors.',
    careerProspects: [
      'Senior AI Research Scientist',
      'University Lecturer & Academician',
      'Principal Data Science Consultant',
      'Cybersecurity Research Specialist',
      'Doctoral Scholar / PhD Candidate'
    ],
    keyCourses: [
      'Advanced Analysis of Algorithms',
      'Advanced Operating Systems',
      'Advanced Computer Architecture',
      'High-Performance Computing Paradigms',
      'Machine Learning & Deep Neural Nets',
      'Research Methodologies & Scientific Publishing',
      'MS Master Thesis (6 Credit Hours)'
    ],
    intakeSeason: 'Fall Admissions',
    accreditation: 'HEC Recognized Postgraduate Degree',
    isVerifiedOfficial: true
  },
  {
    id: 'phd-cs',
    title: 'PhD Computer Science',
    degreeType: 'Doctoral',
    duration: '3 - 5 Years',
    creditHours: 48,
    eligibility: 'MS / MPhil in Computer Science / Software Engineering with minimum 3.0/4.0 CGPA, GAT Subject pass score, statement of research purpose, and departmental interview. Supervised by HEC Approved PhD Supervisors.',
    overview: 'The highest research degree designed for scholars creating foundational breakthroughs in high-performance computing, exascale systems, intelligent autonomous systems, and cryptographic protocols.',
    careerProspects: [
      'University Professor / Head of Department',
      'Director of Research & Development',
      'Principal Research Scientist',
      'Government Scientific Advisor',
      'Postdoctoral Fellow at International Laboratories'
    ],
    keyCourses: [
      'Doctoral Research Seminars in Computing',
      'Advanced Optimization & Heuristic Algorithms',
      'Deep Learning Paradigms & Explainability',
      'Comprehensive Doctoral Examination',
      'Original Doctoral Dissertation Defense'
    ],
    intakeSeason: 'Fall Admissions',
    accreditation: 'HEC Quality Assurance Agency Approved',
    isVerifiedOfficial: true
  }
];
