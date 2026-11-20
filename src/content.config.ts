import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { disciplineKeys } from './lib/disciplines';

const work = defineCollection({
  loader: glob({ pattern: '*/index.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      summary: z.string(),
      year: z.number().int(),
      role: z.string(),
      /** What kind of work this is. Drives the work filters and the focus pages. */
      disciplines: z.array(z.enum(disciplineKeys)).min(1),
      services: z.array(z.string()).default([]),
      duration: z.string().optional(),
      team: z.string().optional(),
      cover: image(),
      coverAlt: z.string(),
      /**
       * `framed` (default): a flat screenshot, shown inset with a shadow on the tint.
       * `bleed`: a finished image or device mockup with its own background, shown edge to edge.
       */
      coverStyle: z.enum(['framed', 'bleed']).default('framed'),
      /** A short muted MP4 in `public/`, played when a card is hovered. */
      preview: z.string().optional(),
      tint: z
        .string()
        .regex(/^#[0-9a-fA-F]{6}$/)
        .default('#e9e9e3'),
      order: z.number().default(100),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      url: z.url().optional(),
    }),
});

export const collections = { work };
