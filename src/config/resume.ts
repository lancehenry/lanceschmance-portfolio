// Based on Lance's LinkedIn experience (November 2026).
export const resume = {
  eyebrow: 'Resume',
  title: '15+ years leading brand, digital, motion, and',
  highlight: 'campaign work.',
  text: 'Brand, digital, and campaign work across agency, AEC, SaaS, and national certification organizations, from art direction and UX/UI strategy to motion and front-end builds.',
  /** Four short facts across the top of the resume. Keep each value to a few words. */
  snapshot: [
    { label: 'Currently', value: 'Senior Digital Designer, Henderson Engineers' },
    { label: 'Experience', value: '15+ years, promoted twice' },
    { label: 'Education', value: 'MFA & BA, Graphic Design' },
    { label: 'Open to', value: 'Creative & Art Director, Brand Manager, Senior Designer' },
  ],
  experience: [
    {
      role: 'Senior Digital Designer',
      company: 'Henderson Engineers',
      period: '2022 - Present',
      text: 'Lead creative execution for the digital brand across web, email, and social, building scalable visual systems and cohesive campaigns. Drive UX/UI work through research, prototyping, and iteration, and use performance data to grow email engagement, social interaction, and reach.',
    },
    {
      role: 'Digital Designer',
      company: 'Henderson Engineers',
      period: '2019 - 2022',
      text: 'Designed web, email, and social campaigns across multiple business units, contributed wireframes and prototypes to UX/UI projects, and produced motion graphics for marketing campaigns.',
    },
    {
      role: 'Web Designer',
      company: 'Storable',
      period: '2018 - 2019',
      text: 'Designed and built conversion-focused landing pages and email campaigns for SaaS customer acquisition, translating UX/UI concepts into HTML, CSS, and JavaScript.',
    },
    {
      role: 'Senior Designer',
      company: 'National Center for Competency Testing (NCCT)',
      period: '2013 - 2018',
      text: 'Led design and art direction for web, print, and multimedia, evolved brand standards, and produced video and campaign assets supporting student acquisition and partner schools.',
    },
    {
      role: 'Designer',
      company: 'National Center for Competency Testing (NCCT)',
      period: '2010 - 2013',
      text: 'Designed print, digital, and web assets for certification programs, and contributed to video and multimedia production.',
    },
    {
      role: 'Graduate Teaching Assistant',
      company: 'Fort Hays State University',
      period: '2007 - 2010',
      text: 'Taught two weekly graphic design studios in concept, typography, and digital production, led formal critiques, and designed exhibition materials for the Moss-Thorns Gallery of Art.',
    },
    {
      role: 'Associate Designer',
      company: 'Design Resources, Inc.',
      period: '2004 - 2007',
      text: 'Supported creative development and art direction across about 20 client accounts, including apparel graphics and catalog photo shoots.',
    },
  ],
  /** Skill groups, from LinkedIn. `skills` show as chips under each group. */
  capabilities: [
    {
      title: 'Creative leadership',
      text: 'Setting the direction and guiding the team from concept to launch.',
      skills: [
        'Creative direction',
        'Art direction',
        'Creative concept development',
        'Photo shoot direction',
        'Creative mentorship',
        'Cross-functional collaboration',
      ],
    },
    {
      title: 'Brand',
      text: 'Identity systems that stay consistent as a brand grows.',
      skills: [
        'Brand strategy',
        'Brand identity & visual systems',
        'Visual design',
        'Typography',
        'Print design',
        'Exhibition design',
      ],
    },
    {
      title: 'Digital & UX',
      text: 'Research-led sites and interfaces, designed and built.',
      skills: [
        'UX/UI design',
        'UX research',
        'Information architecture',
        'Wireframing & prototyping',
        'Design systems',
        'Web & landing page design',
        'Front-end development',
      ],
    },
    {
      title: 'Marketing & motion',
      text: 'Campaigns and stories that perform across every channel.',
      skills: [
        'Integrated marketing',
        'Campaign development',
        'Digital strategy',
        'Email marketing',
        'Performance marketing',
        'Conversion optimization',
        'Analytics',
        'Motion design',
        'Multimedia production',
      ],
    },
  ],
  education: [
    // TODO: add years (or leave `period` empty to hide them).
    {
      title: 'MFA, Graphic Design',
      place: 'Fort Hays State University',
      period: '',
      text: 'Advanced conceptual design and visual systems, while teaching undergraduate design studios.',
    },
    {
      title: 'BA, Graphic Design',
      place: 'Avila University',
      period: '',
      text: 'Conceptual design, typography, and interactive media.',
    },
    {
      title: 'Full Stack Web Development',
      place: 'The University of Kansas',
      period: '',
      text: 'An immersive program in front-end and back-end development.',
    },
  ],
  /** Shown as the last row of Capabilities. */
  tools: ['Adobe Creative Suite', 'After Effects', 'Figma', 'HTML & CSS', 'JavaScript'],
};
