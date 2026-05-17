import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	// 型定義 (Schema)
	type:"content",
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		revDate: z.date(),
		writer: z.string(),
		tags: z.array(z.string()),
		image: z.string().optional(),
	}),	
});

// コレクションをエクスポート
export const collections = {blog:blogCollection};
