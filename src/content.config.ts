import { defineCollection, z } from 'astro:content';

const devLog = defineCollection({
	// 型定義 (Schema)
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		author: z.string(),
		tags: z.array(z.string()),
		image: z.string().optional(),
	}),	
});

// コレクションをエクスポート
export const collections = { devLog };
