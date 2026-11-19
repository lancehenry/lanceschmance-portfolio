import type { Discipline } from '@/lib/disciplines';

/**
 * Focus pages: one short landing page per kind of role you apply for, each at
 * `/<slug>/`. Send the matching link with an application. Each page shows the
 * projects tagged with any of its `disciplines` (featured first).
 * Add, remove, or reword these freely. A slug must not clash with an existing
 * page (work, about, resume, privacy).
 */
export interface FocusPage {
  slug: string;
  /** Short name for chips and the footer. */
  label: string;
  /** The page <title> and the target search phrase. */
  seoTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  /** Three short proof points for this kind of role. */
  points: { title: string; text: string }[];
  disciplines: Discipline[];
}

export const focusPages: FocusPage[] = [
  {
    slug: 'creative-direction',
    label: 'Creative & art direction',
    seoTitle: 'Creative Director & Art Director Portfolio',
    description:
      'Creative and art direction by Lance Schmittling: concepts, campaigns, and brand work led from strategy through delivery.',
    eyebrow: 'Creative & art direction',
    title: 'I set the direction, then',
    highlight: 'make it real.',
    text: 'I lead concepts from the first pitch through production, aligning stakeholders and guiding designers, writers, and developers so the idea survives all the way to launch.',
    points: [
      {
        title: 'Concept to launch',
        text: 'Pitching directions, building moodboards and storyboards, and seeing the work through to final delivery.',
      },
      {
        title: 'Leading the team',
        text: 'Directing designers, motion artists, writers, and developers, with clear feedback and high standards.',
      },
      {
        title: 'Partnering with leadership',
        text: 'Translating business goals into creative briefs, and presenting the work to executives.',
      },
    ],
    disciplines: ['creative-direction', 'campaign', 'motion', 'video', 'brand'],
  },
  {
    slug: 'brand',
    label: 'Brand',
    seoTitle: 'Brand Manager & Brand Designer Portfolio',
    description:
      'Brand strategy, identity systems, and brand governance by Lance Schmittling, with case studies from logo design to rollout.',
    eyebrow: 'Brand',
    title: 'Brands that stay consistent as they',
    highlight: 'grow.',
    text: 'I build identity systems and the guidelines around them, then keep them consistent across print, digital, motion, and every team that touches the brand.',
    points: [
      {
        title: 'Identity systems',
        text: 'Wordmarks, palettes, type systems, and the rules that hold them together.',
      },
      {
        title: 'Governance',
        text: 'Guidelines, templates, and reviews that keep a brand on track across departments.',
      },
      {
        title: 'Rollout',
        text: 'Signage, collateral, social, web, and merch that make a brand show up the same everywhere.',
      },
    ],
    disciplines: ['brand', 'print', 'campaign'],
  },
  {
    slug: 'design',
    label: 'Web & digital design',
    seoTitle: 'Senior Designer Portfolio: Web, UX/UI & Digital',
    description:
      'Web, UX/UI, and digital design by Lance Schmittling: information architecture, interface design, prototypes, and front-end builds.',
    eyebrow: 'Web & digital design',
    title: 'Digital experiences that are easy to use and',
    highlight: 'easy to maintain.',
    text: 'From information architecture and wireframes to polished UI and working code, I design sites that serve visitors and the teams who keep them up to date.',
    points: [
      {
        title: 'Structure first',
        text: 'Content audits, site maps, and wireframes that make the site easy to navigate.',
      },
      {
        title: 'Interface craft',
        text: 'Accessible, responsive UI and prototypes that hold up in development.',
      },
      {
        title: 'Built to last',
        text: 'Front-end skills and CMS know-how, so designs ship the way they were meant to.',
      },
    ],
    disciplines: ['web', 'development'],
  },
  {
    slug: 'motion',
    label: 'Motion & video',
    seoTitle: 'Motion Designer & Video Portfolio',
    description: 'Motion graphics, animation, and video by Lance Schmittling, from storyboard to final edit.',
    eyebrow: 'Motion & video',
    title: 'Stories people',
    highlight: 'actually watch.',
    text: 'I take a message from script and storyboard through animation and edit, then deliver it in every format the channel needs.',
    points: [
      {
        title: 'Story first',
        text: 'Concepts, scripts, and storyboards that give the animation a reason to exist.',
      },
      {
        title: 'Animation craft',
        text: 'Kinetic type, illustration, and on-brand transitions with careful pacing.',
      },
      {
        title: 'Every channel',
        text: 'Cuts and exports for email, social, web, and events.',
      },
    ],
    disciplines: ['motion', 'video'],
  },
];
