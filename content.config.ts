import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    library: defineCollection({
      source: 'library/*.yml',
      type: 'data',
      schema: z.object({
        title: z.string(),
        documents: z.array(z.object({
          title: z.string(),
          subtitle: z.string(),
          link: z.string()
        }))
      })
    }),
    committee: defineCollection({
      source: 'committee.yml',
      type: 'data',
      schema: z.object({
        list: z.array(z.object({
          name: z.string(),
          image: z.string(),
          role: z.string()
        }))
      })
    }),
    games: defineCollection({
      source: 'games/*.yml',
      type: 'data',
      schema: z.object({
        name: z.string(),
        date: z.string(),
        image: z.string(),
        link: z.string(),
        description: z.string()
      })
    }),
    news: defineCollection({
      source: 'news/*.md',
      type: 'page',
      schema: z.object({
        date: z.string()
      })
    })
  }
})