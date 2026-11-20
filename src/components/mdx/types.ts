import type { ImageMetadata } from 'astro';

export interface ShotProps {
  src?: ImageMetadata;
  /** Required with `src`. */
  alt?: string;
  /** Placeholder title: what the shot is. */
  label?: string;
  /** Placeholder description: what the shot should show. */
  note?: string;
  /** CSS aspect ratio, e.g. "16 / 9". Images are cropped to fill it. */
  ratio?: string;
  /** Which part of the image to keep when it is cropped. `top` suits full-page screenshots and wireframes. */
  position?: 'center' | 'top';
  /** A small tag on the image, e.g. "Before". */
  tag?: string;
  /** Outline the image in the accent color (e.g. the chosen direction). */
  highlight?: boolean;
  /** Square corners, for full-bleed photos. */
  square?: boolean;
  sizes?: string;
}
