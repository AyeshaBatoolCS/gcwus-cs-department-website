export interface Program {
  id: string;
  title: string;
  degreeType: 'Undergraduate' | 'Postgraduate' | 'Doctoral';
  duration: string;
  creditHours: number;
  eligibility: string;
  overview: string;
  careerProspects: string[];
  keyCourses: string[];
  intakeSeason: string;
  accreditation: string;
  isVerifiedOfficial?: boolean;
  specialNotes?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  specialization: string[];
  email: string;
  publicationsCount?: number;
  experienceYears?: number;
  officeHours: string;
  bio: string;
  taughtCourses: string[];
  avatarInitial?: string;
  photoPath?: string;
  profileUrl?: string;
  isVerifiedOfficial: boolean;
  verificationSource?: string;
  hecApprovedSupervisor?: boolean;
  role?: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  category: 'Artificial Intelligence' | 'Machine Learning' | 'Web Development' | 'Data Science' | 'Cybersecurity';
  description: string;
  activeProjects: string[];
  leadFaculty: string;
  toolsUsed: string[];
}

export interface NewsEvent {
  id: string;
  title: string;
  category: 'News' | 'Event' | 'Symposium' | 'Admission';
  date: string;
  location?: string;
  summary: string;
  content: string;
  registrationOpen?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Computing Labs' | 'Campus Life' | 'Seminars & Workshops' | 'FYP Exhibition';
  image: string;
  caption: string;
  date: string;
  isVerifiedAsset?: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  targetNumber: number;
  suffix: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  suggestions?: string[];
}
