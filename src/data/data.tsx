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
  title: 'Przemyslaw Raczka | Agile Coach',
  description: "Website and resume of Przemyslaw Raczka, Agile Coach & SAFe Program Consultant",
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
        Certified <strong className="text-stone-100">Agile Coach (SPC)</strong> with 20+ years of experience in IT and financial services, including 18 years at Nordea.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I specialize in enterprise-scale Agile transformations, coaching executives and teams to enable organizations to achieve business agility.
      </p>
    </>
  ),
  actions: [
    {
      href: '/CV_agile.pdf',
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
  description: `Certified Agile Coach (SPC) with a strong track record in building high-performing teams, aligning leadership around Lean-Agile principles, and embedding sustainable change across international environments.`,
  aboutItems: [
    {label: 'Location', text: 'Copenhagen, Denmark', Icon: MapIcon},
    {label: 'Languages', text: 'Polish, English, Danish', Icon: FlagIcon},
    {label: 'Interests', text: 'Scuba diving, skiing, go-karts, chess', Icon: SparklesIcon},
    {label: 'Study', text: 'Warsaw University of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Nordea', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      {name: 'Polish', level: 10},
      {name: 'English', level: 9},
      {name: 'Danish', level: 5},
    ],
  },
  {
    name: 'Agile & Transformation',
    skills: [
      {name: 'Agile Coaching & Facilitation', level: 10},
      {name: 'SAFe, Scrum, Kanban', level: 9},
      {name: 'Lean Portfolio Management', level: 8},
      {name: 'BizDevOps', level: 8},
    ],
  },
  {
    name: 'Management & Strategy',
    skills: [
      {name: 'Change Management', level: 9},
      {name: 'Stakeholder Engagement', level: 9},
      {name: 'Process Improvement', level: 8},
    ],
  },
  {
    name: 'Tools',
    skills: [
      {name: 'Jira & Confluence', level: 9},
      {name: 'Power Platform (Apps, Automate)', level: 7},
      {name: 'Power BI', level: 7},
      {name: 'Trello', level: 8},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Agile Transformation at Nordea',
    description: 'Led the enterprise Agile transformation for 2,700+ IT employees, restructuring departments into Agile Release Trains (ARTs) and cross-functional teams.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Internal Agile Academy',
    description: 'Designed and scaled an internal academy that trained 1,600+ colleagues across the Nordics and Poland, achieving a 4.7/5 satisfaction score.',
    url: '#',
    image: porfolioImage2,
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
    content: <p>Completed Master of Engineering studies at the Faculty of Power and Aeronautical Engineering.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2018 – Present',
    location: 'Nordea, Copenhagen',
    title: 'Agile Coach',
    content: (
      <p>
        Led enterprise Agile transformation, coached leaders and teams, and designed/scaled an internal Agile Academy. Introduced digital tools (Power Platform) to optimize training administration.
      </p>
    ),
  },
  {
    date: '2017 – 2018',
    location: 'Nordea, Copenhagen',
    title: 'Senior Project Methods Expert',
    content: (
      <p>
        Acted as a Scrum Master for a Group Technology support team. Led a compliance initiative, coaching teams to meet Nordea Software Process standards.
      </p>
    ),
  },
  // Add other experiences if you want
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Senior Manager, Nordea',
      text: "Przemyslaw's coaching was instrumental in our transition to Agile. His expertise in SAFe and his ability to engage with leadership were key to our success.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Participant, Agile Academy',
      text: 'The Agile Academy he developed has become a cornerstone of our internal training program, significantly accelerating our adoption of Agile practices.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for collaboration opportunities or any questions.',
  items: [
    {
      type: ContactType.Email,
      text: 'pr@raczka.eu',
      href: 'mailto:pr@raczka.eu',
    },
    {
      type: ContactType.Location,
      text: 'Copenhagen, Denmark',
      href: 'https://www.google.ca/maps/place/Copenhagen/',
    },
    {
      type: ContactType.Github,
      text: 'LinkedIn',
      href: 'https://linkedin.com/in/praczka',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/praczka'},
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/YourUsername'},
];