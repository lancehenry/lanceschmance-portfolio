/**
 * The disciplines a project can be tagged with. The work page filters by these,
 * and the focus pages (src/config/focus.ts) pick projects by them.
 * Add a key here before using it in a case study's `disciplines` list.
 */
export const disciplines = {
  'creative-direction': 'Creative & art direction',
  brand: 'Brand identity',
  web: 'Web & UX/UI',
  motion: 'Motion',
  video: 'Video',
  campaign: 'Campaigns',
  print: 'Print',
  development: 'Front-end development',
} as const;

export type Discipline = keyof typeof disciplines;

export const disciplineKeys = Object.keys(disciplines) as [Discipline, ...Discipline[]];

export const disciplineLabel = (key: Discipline) => disciplines[key];
