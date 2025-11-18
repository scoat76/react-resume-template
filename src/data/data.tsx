// src/data/data.tsx

import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Przemyslaw Raczka | Enterprise Transformation Lead',
  description: "Professional portfolio of Przemyslaw Raczka, Enterprise Transformation Lead and SAFe Program Consultant.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Przemyslaw Raczka`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Enterprise Transformation Lead</strong> & Head of Value Stream Management.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Known as <strong className="text-stone-100">"The Value Accelerator"</strong>. I bridge strategic vision with practical execution, utilizing data-driven insights and Nordic management style to deliver measurable business value.
      </p>
    </>
  ),
  actions: [
    {
      href: '/CV_Enterprise_Transformation_Lead.pdf', // Pamiętaj, aby zmienić nazwę pliku w folderze public, jeśli wgrasz nowy
      text: 'Download CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Senior leader with over 20 years in IT and financial services, certified SAFe Program Consultant (SPC). My strength lies in bridging strategic vision with practical, hands-on execution. Originally from Poland and a long-term resident of Denmark, I am culturally fluent and utilize this perspective to foster collaboration in international teams. I excel at translating complex theory into practice using structured working methods and data-driven analysis.`,
  aboutItems: [
    {label: 'Location', text: 'Copenhagen, Denmark / Warsaw, Poland', Icon: MapIcon},
    {label: 'Languages', text: 'Polish (Native), English (Full), Danish (PD4)', Icon: FlagIcon},
    {label: 'Interests', text: 'Chess, Scuba Diving, Skiing, AI & Automation', Icon: SparklesIcon},
    {label: 'Education', text: 'M.Eng., Warsaw University of Technology', Icon: AcademicCapIcon},
    {label: 'Core Focus', text: 'Value Stream Management', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Enterprise Transformation',
    skills: [
      {name: 'SAFe & Lean Portfolio Mgmt', level: 10, max: 10},
      {name: 'Organizational Design', level: 9, max: 10},
      {name: 'Change Management', level: 9, max: 10},
    ],
  },
  {
    name: 'Value Stream Mgmt',
    skills: [
      {name: 'Process Optimization', level: 10, max: 10},
      {name: 'Business-IT Alignment', level: 9, max: 10},
      {name: 'Flow Metrics Analysis', level: 9, max: 10},
    ],
  },
  {
    name: 'Data & Technology',
    skills: [
      {name: 'Power BI & SQL', level: 8, max: 10},
      {name: 'Python & Automation', level: 7, max: 10},
      {name: 'CI/CD & DevOps', level: 7, max: 10},
    ],
  },
  {
    name: 'Leadership',
    skills: [
      {name: 'Executive Coaching', level: 9, max: 10},
      {name: 'Stakeholder Engagement', level: 10, max: 10},
      {name: 'Large-Scale Training', level: 10, max: 10},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Serverless AI Assistant',
    description: 'Architected and deployed a serverless AI assistant via an automated CI/CD pipeline (Netlify), demonstrating full-stack, end-to-end delivery capability.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Internal Agile Academy',
    description: 'Designed and scaled an internal Agile Academy, training over 1,600 colleagues across Nordics and Poland, achieving a 4.7/5 satisfaction score.',
    url: '#',
    image: porfolioImage2,
  },
  {
      title: 'AI & Home Automation System',
      description: 'Built a functional home automation system using Raspberry Pi, Python, and YAML, integrating multiple APIs to automate routines and reduce energy consumption.',
      url: '#',
      image: porfolioImage3,
    },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '1996 – 2002',
    location: 'Warsaw University of Technology',
    title: 'M.Eng., Computer-Aided Design (CAD)',
    content: <p>Master of Engineering degree.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2018 – Present',
    location: 'Nordea, Copenhagen',
    title: 'Agile Coach / Enterprise Transformation Lead',
    content: (
      <ul className="list-disc pl-5">
        <li>Managed multiple Agile Release Trains (ARTs) across 2,700+ IT employees.</li>
        <li>Improved delivery predictability from 65% to 90% and reduced feature cycle time by 20%.</li>
        <li>Partnered with leadership to map end-to-end financial processes and identify bottlenecks.</li>
        <li>Introduced Power Platform tools reducing training administration by 60%.</li>
      </ul>
    ),
  },
  {
    date: '2017 – 2018',
    location: 'Nordea, Copenhagen',
    title: 'Senior Project Methods Expert',
    content: (
      <p>
        Acted as Scrum Master and process lead. Facilitated process improvements that increased team velocity by 25% and reduced critical bug-fix turnaround time by 40%.
      </p>
    ),
  },
  {
    date: '2008 – 2016',
    location: 'Nordea, Copenhagen',
    title: 'IT Senior Test Manager',
    content: (
      <p>
        Directed testing for large-scale programs and projects across multiple countries. Implemented risk-based QA strategies increasing defect detection efficiency by 30%.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Stakeholder, Nordea',
      text: "Przemyslaw is a direct and frank communicator who excels at translating complex theory into practice. His structured methods deliver tangible business value.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Academy Participant',
      text: 'The Agile Academy designed by Przemyslaw was a game changer for our department, significantly upskilling our workforce across the Nordics.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for collaboration opportunities, consulting, or questions regarding Enterprise Transformation.',
  items: [
    {
      type: ContactType.Phone,
      text: '+45 61226883 | +48 451 530 126',
      href: 'tel:+4561226883',
    },
    {
      type: ContactType.Location,
      text: 'Copenhagen, Denmark',
      href: 'https://www.google.ca/maps/place/Copenhagen/',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/praczka',
      href: 'https://linkedin.com/in/praczka',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/praczka'},
];