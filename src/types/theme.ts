import { z } from 'astro:content';

export const theme = z.object({
    colorBody: z.string(),
    color: z.string()
});

export type ThemeType = z.infer<typeof theme>;
