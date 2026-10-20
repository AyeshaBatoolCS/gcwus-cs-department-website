/**
 * Verified Department & University Information
 * Government College Women University Sialkot (GCWUS), Pakistan
 * 
 * Verified against official university sources:
 * - Department Overview: https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/
 * - Faculty Members: https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/faculty-members/
 */

export const officialDepartmentInfo = {
  universityFullName: 'Government College Women University Sialkot',
  universityShortName: 'GCWUS',
  departmentFullName: 'Department of Computer Science',
  parentFaculty: 'Faculty of Natural Sciences',
  establishedYear: 2013,
  collegeFoundedYear: 1951, // Inaugurated by Mohtarma Fatima Jinnah on Dec 1, 1951
  universityCharterYear: 2012, // Upgraded to first Women University in Sialkot
  motto: 'Service, Knowledge, Discipline',
  status: 'Public Chartered Women University',
  
  // Leadership & Chairperson
  chairperson: {
    name: 'Dr. M. Usman Ashraf',
    designation: 'Associate Professor & Chairperson',
    qualification: 'Ph.D. in Computer Science (King Abdulaziz University) · M.S. in CS (University of Lahore)',
    email: 'usman.ashraf@gcwus.edu.pk',
    hecApprovedSupervisor: true,
    formerAffiliation: 'Former High-Performance Computing (HPC) Scientist at King Abdulaziz University HPC Centre, Saudi Arabia',
    welcomeMessage: `Welcome to the Department of Computer Science at Government College Women University Sialkot. Established in 2013, our department is dedicated to producing highly skilled women professionals in computer science and information technology through quality higher education. We promote innovation, scientific research, ethical practices, and lifelong learning. Our curricula are meticulously designed in accordance with HEC and NCEAC guidelines, supported by state-of-the-art computing laboratories and experienced doctoral faculty. We empower female scholars to compete academically, technically, and professionally on global standards.`
  },

  // Verified Department Mission & Vision directly from official GCWUS source
  mission: `To produce highly skilled women professionals in computer science and information technology through quality higher education, promoting innovation, research, ethical practice, and lifelong learning. The department maintains quality education in all aspects including student intake, modern curriculum development, faculty selection, teaching methodology, examination system, and co-curricular technical activities.`,
  
  vision: `To prepare graduates who can compete academically, technically, and professionally on global and national standards, serving as innovative problem solvers and ethical leaders in technology.`,

  coreObjectives: [
    'Empower female scholars with rigorous computational fundamentals and algorithmic thinking.',
    'Cultivate research excellence in High-Performance Computing, Artificial Intelligence, and Software Engineering.',
    'Equip students with modern hands-on skills in cutting-edge computer laboratories.',
    'Foster strong industrial linkage with Sialkot Chamber of Commerce & Industry (SCCI) and software exporters.',
    'Instill professional ethics, leadership qualities, and lifelong intellectual curiosity.'
  ],

  // Official Contact Details
  contact: {
    university: 'Government College Women University Sialkot (GCWUS)',
    department: 'Department of Computer Science, Faculty of Natural Sciences',
    campusName: 'Imam Bibi Campus',
    campusAddress: 'Imam Bibi Campus, Amanabad Road, Sialkot, Punjab, Pakistan',
    phonePrimary: '+92 52 9250137',
    phoneAdmissions: '+92 52 9250170',
    emailDepartment: 'cs@gcwus.edu.pk',
    emailChairperson: 'usman.ashraf@gcwus.edu.pk',
    emailAdmissions: 'admissions@gcwus.edu.pk',
    officeHours: 'Monday – Friday: 08:30 AM to 04:00 PM PST',
    officialWebsiteUrl: 'https://gcwus.edu.pk',
    officialDepartmentUrl: 'https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/',
    officialFacultyUrl: 'https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/faculty-members/',
    hecStatus: 'Chartered by Govt of Punjab & Recognized by Higher Education Commission (HEC)',
    accreditationBody: 'National Computing Education Accreditation Council (NCEAC)',
    mapCoordinates: {
      lat: 32.4812,
      lng: 74.5510
    }
  },

  // Supported Local Assets
  supportedLocalAssets: [
    {
      fileName: 'university-logo.png',
      path: '/images/university-logo.png',
      purpose: 'Official GCWUS University Logo / Emblem',
      recommendedSize: '512 x 512 px',
      required: true
    },
    {
      fileName: 'campus.jpg',
      path: '/images/campus.jpg',
      purpose: 'Real photograph of GCWUS Historical / Modern Academic Campus',
      recommendedSize: '1920 x 1080 px',
      required: false
    },
    {
      fileName: 'computer-lab.jpg',
      path: '/images/computer-lab.jpg',
      purpose: 'Real photograph of GCWUS Computer Science Laboratories',
      recommendedSize: '1920 x 1080 px',
      required: false
    },
    {
      fileName: 'teacher-1.jpg',
      path: '/images/teacher-1.jpg',
      purpose: 'Dr. M. Usman Ashraf (Chairperson & Associate Professor)',
      recommendedSize: '600 x 600 px (Portrait)',
      required: false
    },
    {
      fileName: 'teacher-2.jpg',
      path: '/images/teacher-2.jpg',
      purpose: 'Dr. Muhammad Hamid (Assistant Professor & Incharge-IT)',
      recommendedSize: '600 x 600 px (Portrait)',
      required: false
    },
    {
      fileName: 'teacher-3.jpg',
      path: '/images/teacher-3.jpg',
      purpose: 'Dr. Iqra Ilyas (Assistant Professor)',
      recommendedSize: '600 x 600 px (Portrait)',
      required: false
    },
    {
      fileName: 'teacher-4.jpg to teacher-10.jpg',
      path: '/images/teacher-[4-10].jpg',
      purpose: 'Lecturers & Program Team members (Mr. Usama Ashraf, Ms. Ayesha Raana, Ms. Arfa Skandar, Ms. Farzana Younas, Ms. Qurat-ul-ain, Mr. Shahid Anwar, Ms. Faiza Nazeer)',
      recommendedSize: '600 x 600 px (Portrait)',
      required: false
    }
  ]
};
