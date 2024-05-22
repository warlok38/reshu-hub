import { z } from 'zod';

export const NewsCategoryEntity = z.object({
  id: z.number(),
  category: z.string(),
  stateArchive: z.boolean(),
});

export const NewsImageEntity = z.object({
  id: z.number(),
  imageName: z.string(),
  description: z.string(),
  fileHash: z.string(),
});

export const NewsEntity = z.object({
  id: z.number(),
  title: z.string(),
  subTitle: z.string().or(z.undefined()),
  newsText: z.string(),
  createDate: z.string(),
  views: z.number(),
  category: NewsCategoryEntity.or(z.null()),
  images: NewsImageEntity.or(z.null()),
});

export const NewsList = z.array(NewsEntity);

export type NewsCategoryEntity = z.infer<typeof NewsCategoryEntity>;
export type NewsImageEntity = z.infer<typeof NewsImageEntity>;
export type NewsEntity = z.infer<typeof NewsEntity>;
export type NewsList = z.infer<typeof NewsList>;

export const CreateNewsEntity = z.object({
  title: z.string(),
  subTitle: z.string(),
  newsText: z.string(),
  images: NewsImageEntity.or(z.null()),
});

export type CreateNewsEntity = z.infer<typeof CreateNewsEntity>;
