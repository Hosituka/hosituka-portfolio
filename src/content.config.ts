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

export const workExplainCategory = {
	game:"game",
	web:"web",
	other:"other"
} 
const workExplainCollection = defineCollection({
	type:"content",
	schema:z.object({
		workTitle:z.string(),
		workMediaURL:z.string(),
		playLink:z.string().optional(),
		detailLink:z.string().optional(),
		category: z.array(z.enum([
			workExplainCategory.game,
			workExplainCategory.web,
			workExplainCategory.other
		])),
		pubDate:z.string(),
		techs:z.array(z.string()),
		period:z.string(),
		members:z.string(),
		displayOrder:z.number(),
	})
})

export const skillCategory={
	language:"language",
	framework:"framework",
	tool:"tool",
	library:"library",
}
const skillCollection = defineCollection({
	type:"content",
	schema:z.object({
		skillName:z.string(),
		skillIconURL:z.string().optional(),
		proficiency:z.number(),
		category:z.array(z.enum([
			skillCategory.language,
			skillCategory.framework,
			skillCategory.tool,
			skillCategory.library,
		])),
	})
})
// コレクションをエクスポート
export const collections = {blog:blogCollection,workExplain:workExplainCollection,skills:skillCollection};
