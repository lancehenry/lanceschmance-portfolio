export const hero = {
  greeting: "Hi, I'm Lance.",
  title: 'I lead creative work across',
  /**
   * The last word of the headline cycles through these (in the accent color).
   * Motion is skipped for visitors who ask for reduced motion: they see the first word.
   */
  rotating: ['brand.', 'websites.', 'motion.', 'video.', 'campaigns.'],
  /** The full sentence read by screen readers and used when motion is off. */
  spoken: "Hi, I'm Lance. I lead creative work across brand, websites, motion, video, and campaigns.",
  text: '15+ years turning business goals into brands, digital experiences, and stories people remember, from strategy and art direction through design, animation, and code.',
  primary: { label: 'See selected work', href: '/#work' },
  secondary: { label: 'About me', href: '/about/' },
  facts: [
    // Keep each label to about 28 characters so all three wrap to two even lines.
    { value: '15+', label: 'years in design and marketing' },
    { value: '7+', label: 'years shaping a digital brand' },
    { value: '3', label: 'years teaching college design' },
  ],
};

/**
 * An optional showreel under the hero. Put a short, muted MP4 loop in `public/reel/`
 * (keep it under ~8 MB) and set `loop`. `full` links to the full reel on Vimeo or YouTube.
 * Leave `loop` empty to hide the section.
 */
export const reel = {
  loop: '',
  poster: '',
  full: '',
  label: 'Watch the full reel',
};

export const work = {
  eyebrow: 'Selected work',
  title: 'Case studies',
  text: 'Brand systems, websites, motion, and campaigns, with the problem, the decisions, and what changed.',
  /** How many featured case studies the homepage shows. */
  limit: 4,
};

export const capabilities = {
  eyebrow: 'What I lead',
  title: 'One person across the whole creative process',
  items: [
    {
      title: 'Creative & art direction',
      text: 'Setting the concept and visual direction, then guiding designers, writers, and partners to deliver it.',
    },
    {
      title: 'Brand strategy & governance',
      text: 'Identity systems and guidelines that stay consistent as a brand grows across teams and channels.',
    },
    {
      title: 'Web & UX/UI',
      text: 'Information architecture, interface design, and prototypes for sites that are easy to use and easy to maintain.',
    },
    {
      title: 'Motion & video',
      text: 'Storyboards, animation, and edits that turn a message into something people actually watch.',
    },
    {
      title: 'Omnichannel campaigns',
      text: 'Email, social, landing pages, and print that work together toward one goal.',
    },
    {
      title: 'Front-end & SEO',
      text: 'Building what I design, with the technical and search groundwork that helps it get found.',
    },
  ],
};

export const closing = {
  eyebrow: "Let's talk",
  title: 'Looking for a creative leader?',
  highlight: "Let's talk.",
  text: "I'm open to creative director, art director, brand, and senior design roles. Send me a note and tell me about your team.",
};
