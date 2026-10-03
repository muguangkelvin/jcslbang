import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.string().or(z.date()),
  updatedDate: z.string().or(z.date()).optional(),
  category: z.string(),
  tags: z.array(z.string()),
  keywords: z.array(z.string()).optional(),
  search_synonyms: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  author: z.string().default('机场实力榜测评组')
});

export const collections = {
  ranks: defineCollection({ loader: glob({ pattern: '*.md', base: 'src/content/ranks' }), schema: blogSchema }),
  guides: defineCollection({ loader: glob({ pattern: '*.md', base: 'src/content/guides' }), schema: blogSchema }),
  clients: defineCollection({ loader: glob({ pattern: '*.md', base: 'src/content/clients' }), schema: blogSchema }),
  lines: defineCollection({ loader: glob({ pattern: '*.md', base: 'src/content/lines' }), schema: blogSchema }),
  faq: defineCollection({ loader: glob({ pattern: '*.md', base: 'src/content/faq' }), schema: blogSchema }),
  providers: defineCollection({ loader: glob({ pattern: '*.md', base: 'src/content/providers' }), schema: blogSchema })
};
