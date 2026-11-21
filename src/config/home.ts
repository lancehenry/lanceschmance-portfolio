export const hero = {
  greeting: "Hi, I'm Lance.",
  // The non-breaking space keeps "I" on the same line as "lead", so no line ends with "I".
  title: 'I\u00a0lead creative work across',
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
      text: 'Setting the creative vision from concept to execution, and leading cross-functional teams to tell stories that land.',
    },
    {
      title: 'Brand strategy & governance',
      text: 'Evolving brand identity systems end to end, so every touchpoint and campaign stays consistent and on strategy.',
    },
    {
      title: 'UX/UI & digital product strategy',
      text: 'User-centered sites and products shaped by rapid prototyping and data, with accessibility and conversion built in.',
    },
    {
      title: 'Omnichannel marketing',
      text: 'Campaigns that pair strong craft with technical strategy to grow reach across social, email, and web.',
    },
    {
      title: 'Motion design & visual storytelling',
      text: 'Motion graphics and video that bring brand stories to life and keep people watching.',
    },
    {
      title: 'Technical strategy & SEO',
      text: 'Front-end and SEO know-how that make what I design fast, findable, and built to scale.',
    },
  ],
};

export const closing = {
  eyebrow: "Let's talk",
  title: 'Looking for a creative leader?',
  highlight: "Let's talk.",
  text: "I'm open to creative director, art director, brand, and senior design roles. Send me a note and tell me about your team.",
};
