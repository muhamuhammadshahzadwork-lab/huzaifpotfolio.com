import { Project, ProcessStep, SkillItem } from '../types';

import joesCoffeeImg from '../assets/images/joes_coffee_mockup_1788196342082.jpg';
import technovaImg from '../assets/images/technova_mockup_1788196359093.jpg';
import luxoraImg from '../assets/images/luxora_mockup_1788196375194.jpg';
import fitzoneImg from '../assets/images/fitzone_mockup_1788196395653.jpg';
import wanderlustImg from '../assets/images/wanderlust_mockup_1788196415323.jpg';
import laptopImg from '../assets/images/laptop_showcase_mockup_1788196435015.jpg';

export { laptopImg };

export const PROJECTS: Project[] = [
  {
    id: 'joes-coffee',
    number: '01',
    title: "JOE'S COFFEE",
    category: 'ANIMATED COFFEE WEBSITE',
    tagline: 'Host Your Next Event at Joe’s — Artisan Coffee & Community Gathering Experience',
    image: joesCoffeeImg,
    year: '2026',
    role: 'Lead UI/UX Designer & Frontend Developer',
    description: 'An interactive, warm, and highly animated website designed for an artisanal specialty coffee brand. Features smooth scroll-driven steam animations, interactive drink builder, event reservation calendar, and sensory visual storytelling.',
    challenge: 'Transforming a traditional brick-and-mortar cafe identity into a digital sanctuary that captures the aroma, atmosphere, and private event venue booking experience.',
    solution: 'Designed an editorial layout using warm beige palettes paired with fluid micro-interactions, custom GSAP scroll transitions, and an intuitive frictionless table and event booking module.',
    technologies: ['HTML / CSS', 'JavaScript', 'GSAP', 'Responsive Design', 'Figma', 'Framer'],
    features: [
      'Interactive roast menu with flavour wheel selector',
      'Smooth event venue booking and seating planner',
      'Micro-animated steam and coffee brewing visual effects',
      'Fluid mobile-first responsive architecture'
    ],
    deliverables: ['Custom Web Design', 'Interactive Prototype', 'Performance Optimization', 'Animated Menu System'],
    metrics: [
      { label: 'Conversion Boost', value: '+42%' },
      { label: 'Avg Session Duration', value: '3m 40s' },
      { label: 'Event Inquiries', value: '3.5x' }
    ],
    accentColor: '#ef4444'
  },
  {
    id: 'technova',
    number: '02',
    title: 'TECHNOVA',
    category: 'MODERN BUSINESS WEBSITE',
    tagline: 'Innovating The Future Together — High-Tech AI Enterprise Platform',
    image: technovaImg,
    year: '2026',
    role: 'UI/UX Designer & Web Developer',
    description: 'A bold, dark-themed corporate website for a next-generation AI and cloud computing consultancy. Engineered with cybernetic glowing accents, interactive holographic dashboard previews, and high-conversion client onboarding flows.',
    challenge: 'Communicating complex artificial intelligence and enterprise infrastructure services into an approachable, high-converting digital visual identity.',
    solution: 'Built high-contrast dark sections with neon cyber accents, interactive service calculators, dynamic data visualization modules, and seamless interactive demos.',
    technologies: ['JavaScript', 'Modern Website Design', 'UI/UX Design', 'Web Animations', 'SEO Basics'],
    features: [
      'Interactive 3D portal with dynamic lighting',
      'Enterprise solution architecture diagramming',
      'Real-time ROI estimation calculator',
      'B2B contact pipeline and discovery scheduler'
    ],
    deliverables: ['Design System', 'Responsive Web Application', 'SEO Strategy', 'Interactive Demos'],
    metrics: [
      { label: 'Lead Quality Score', value: '94%' },
      { label: 'Page Speed Index', value: '99/100' },
      { label: 'Demo Bookings', value: '+68%' }
    ],
    accentColor: '#3b82f6'
  },
  {
    id: 'luxora',
    number: '03',
    title: 'LUXORA',
    category: 'PREMIUM INTERIOR WEBSITE',
    tagline: 'Designing Spaces That Inspire — Scandinavian Luxury Architectural Interiors',
    image: luxoraImg,
    year: '2025',
    role: 'Digital Designer & Creative Developer',
    description: 'An ultra-luxury architectural portfolio and interior design studio website. Utilizes expansive whitespace, magazine-grade typography, subtle parallax galleries, and immersive project before-and-after interactive comparisons.',
    challenge: 'Evoking the tactile elegance of physical bespoke interiors through digital screens without cluttering the client portfolio.',
    solution: 'Created a minimalist architectural layout emphasizing high-resolution imagery, subtle ambient lighting states, curated material palettes, and smooth horizontal project navigation.',
    technologies: ['Figma', 'Responsive Web Design', 'HTML / CSS', 'GSAP', 'Web Animations'],
    features: [
      'Interactive material & lighting moodboard viewer',
      'Before & After interior transformation sliders',
      'Curated private client portal with consultation scheduler',
      'Seamless horizontal gallery walkthroughs'
    ],
    deliverables: ['Editorial Brand Layout', 'Custom CMS Integration', 'High-Res Image Optimization', 'Consultation Funnel'],
    metrics: [
      { label: 'High-Ticket Inquiries', value: '+55%' },
      { label: 'Bounce Rate Reduction', value: '-34%' },
      { label: 'Portfolio Engagement', value: '4m 12s' }
    ],
    accentColor: '#d97706'
  },
  {
    id: 'fitzone',
    number: '04',
    title: 'FITZONE',
    category: 'FITNESS WEBSITE',
    tagline: 'Push Your Limits, Achieve More — High-Performance Athletic Training Hub',
    image: fitzoneImg,
    year: '2025',
    role: 'Lead Web Designer',
    description: 'A dynamic, high-octane fitness brand website built with dramatic dark mode aesthetics, vivid red accent highlights, dynamic workout program filter, interactive membership tier calculator, and trainer scheduling.',
    challenge: 'Inspiring prospective athletes to join high-intensity training programs while providing seamless schedule navigation across multiple gym locations.',
    solution: 'Engineered high-energy bold typography paired with energetic micro-animations, instant membership enrollment flow, and synchronized live class timetable integration.',
    technologies: ['HTML / CSS', 'JavaScript', 'Responsive Web Design', 'UI/UX Design', 'Framer'],
    features: [
      'Live workout schedule filter by coach & intensity',
      'Interactive body transformation goal selector',
      'One-click trial pass registration with SMS confirmation',
      'Dark athletic visual aesthetic with red neon badges'
    ],
    deliverables: ['Full Brand Redesign', 'Mobile App Companion Webview', 'Membership Checkout UI', 'Speed Optimization'],
    metrics: [
      { label: 'Trial Signups', value: '2.8x' },
      { label: 'Mobile Conversion', value: '+51%' },
      { label: 'Class Booking Rate', value: '88%' }
    ],
    accentColor: '#ef4444'
  },
  {
    id: 'wanderlust',
    number: '05',
    title: 'WANDERLUST',
    category: 'TRAVEL WEBSITE',
    tagline: 'Explore The World With Us — Curated Expedition & Nature Adventure Platform',
    image: wanderlustImg,
    year: '2025',
    role: 'UI/UX & Frontend Specialist',
    description: 'An immersive travel and expedition planning platform designed to showcase untouched nature destinations, alpine journeys, and bespoke eco-tours through breathtaking imagery, itinerary builders, and weather insights.',
    challenge: 'Presenting multi-day adventurous expedition itineraries with complex packing lists, terrain grades, and booking variables in a clean, uncluttered layout.',
    solution: 'Designed an intuitive step-by-step expedition explorer with interactive terrain previews, seasonal weather calendars, and frictionless booking flows.',
    technologies: ['Modern Website Design', 'SEO Basics', 'Responsive Web Design', 'Figma', 'JavaScript'],
    features: [
      'Interactive trail & alpine route map visualizer',
      'Dynamic season & equipment readiness checklist',
      'Eco-lodging reservation and custom itinerary builder',
      'Multi-currency travel booking checkout system'
    ],
    deliverables: ['Expedition Portal', 'Interactive Destination Maps', 'Comprehensive SEO Strategy', 'Mobile Responsive UI'],
    metrics: [
      { label: 'Organic Search Traffic', value: '+120%' },
      { label: 'Booking Completion', value: '78%' },
      { label: 'User Rating', value: '4.9/5' }
    ],
    accentColor: '#10b981'
  }
];

export const SKILLS_LIST: SkillItem[] = [
  { name: 'HTML / CSS', category: 'core', highlight: true },
  { name: 'JavaScript', category: 'core', highlight: true },
  { name: 'Responsive Web Design', category: 'core', highlight: true },
  { name: 'UI/UX Design', category: 'design', highlight: true },
  { name: 'Figma', category: 'design', highlight: true },
  { name: 'Framer', category: 'design', highlight: true },
  { name: 'Web Animations', category: 'animation', highlight: true },
  { name: 'GSAP', category: 'animation', highlight: true },
  { name: 'Modern Website Design', category: 'design', highlight: true },
  { name: 'SEO Basics', category: 'tools', highlight: true }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the goals, audience, and project requirements.',
    details: 'Deep dive into your brand vision, target demographic, competitor landscape, and core project benchmarks to establish a solid roadmap.',
    iconName: 'search'
  },
  {
    number: '02',
    title: 'IDEATE',
    description: 'Plan the structure, user experience, and visual direction.',
    details: 'Draft wireframes, information architecture, creative moodboards, and user journey flows that align business needs with aesthetic excellence.',
    iconName: 'lightbulb'
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Create a modern interface focused on usability and visual impact.',
    details: 'Craft high-fidelity UI screens, bespoke design systems, micro-interactions, and animated component states in Figma and Framer.',
    iconName: 'pen'
  },
  {
    number: '04',
    title: 'DEVELOP',
    description: 'Build a fast, responsive, and animated website.',
    details: 'Transform designs into pixel-perfect, clean, semantic code with smooth 60fps animations, cross-device responsiveness, and high performance.',
    iconName: 'code'
  },
  {
    number: '05',
    title: 'DELIVER',
    description: 'Test, optimize, and launch the finished website.',
    details: 'Conduct comprehensive cross-browser testing, SEO optimization, speed audits, and deployment to deliver a polished, production-ready website.',
    iconName: 'send'
  }
];
