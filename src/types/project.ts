import { z } from 'astro:content';

export const project = z.object({
    title: z.string(),
    slug: z.string(),
    customer: z.string(),
    theme: z.array(z.object({ colorBody: z.string(), color: z.string() })),
    tags: z.array(z.string()),
});

export type ProjectType = z.infer<typeof project>;
