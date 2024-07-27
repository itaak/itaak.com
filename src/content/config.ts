import { z, defineCollection } from 'astro:content';
import { project } from '@/types/project';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    projects: z.array(project),
  }),
});

export const collections = {
  'projects': projects,
};