import { getCollection, type CollectionEntry } from 'astro:content';
import type { Discipline } from '@/lib/disciplines';

export type Project = CollectionEntry<'work'>;

/** Projects per work page. Large so filters see every project on one page. */
export const workPageSize = 48;

export const projectHref = (project: Project) => `/work/${project.id}/`;

/** Published case studies, in `order`, then newest first. */
export async function getProjects() {
  const projects = await getCollection('work', ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

/** Projects tagged with any of the given disciplines, featured first. */
export async function getProjectsFor(keys: Discipline[]) {
  const projects = await getProjects();
  return projects
    .filter((project) => project.data.disciplines.some((discipline) => keys.includes(discipline)))
    .toSorted((a, b) => Number(b.data.featured) - Number(a.data.featured));
}

/** The disciplines used by at least one project, in the order they are defined. */
export function usedDisciplines(projects: Project[], all: readonly Discipline[]) {
  const used = new Set(projects.flatMap((project) => project.data.disciplines));
  return all.filter((key) => used.has(key));
}

export const workPageHref = (page: number) => (page <= 1 ? '/work/' : `/work/page/${page}/`);
