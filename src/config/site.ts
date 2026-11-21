export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Lance Schmittling',
  title: 'Lance Schmittling | Creative Director & Design Leader: Brand, Web, Motion',
  description:
    'Lance Schmittling is a design leader with 15+ years across brand, web and UX, motion, video, and marketing campaigns. Case studies, resume, and contact.',
  siteUrl: 'https://www.lanceschmance.com',
  language: 'en',
  locale: 'en_US',
  dateLocale: 'en-US',
  socialImage: '/og-image.png',

  author: {
    name: 'Lance Schmittling',
    role: 'Creative Director & Design Leader',
    /** Shown on the About page and in the footer. Leave empty to hide it. */
    location: '',
    email: 'schmittling@gmail.com',
    /** Topics for search engines (JSON-LD `knowsAbout`). */
    knowsAbout: [
      'Creative direction',
      'Art direction',
      'Brand strategy',
      'Brand identity',
      'Web design',
      'UX/UI design',
      'Motion design',
      'Video production',
      'Marketing campaigns',
      'Front-end development',
      'SEO',
    ],
  },

  /** The short line under your name in the footer, on every page. */
  footerTagline: 'Design leader turning strategy into brand, web, motion, and campaign work people remember.',

  /** The pill above the homepage headline. Set `enabled: true` if you want one. */
  availability: {
    enabled: false,
    label: 'Open to creative leadership roles',
  },

  /** The button at the end of the header and in the mobile menu. */
  action: { label: "Let's talk", href: 'mailto:schmittling@gmail.com' },

  /** A PDF in `public/`, offered on the resume page. Leave empty to hide the button. */
  resumePdf: '',

  /** No analytics are installed, so no cookie banner is needed. */
  cookieConsent: {
    enabled: false,
  },

  socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/lanceschmittling/' }] satisfies NavLink[],
};

export const navigation: NavLink[] = [
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Resume', href: '/resume/' },
];

export const legalLinks: NavLink[] = [{ label: 'Privacy', href: '/privacy/' }];
