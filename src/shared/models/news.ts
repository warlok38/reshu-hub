import { z } from 'zod';

export const NewsCategoryEntity = z.object({
  id: z.number(),
  category: z.string(),
  stateArchive: z.boolean(),
});

export const NewsImagesEntity = z.object({
  id: z.number(),
  imageName: z.string(),
  description: z.string(),
  fileHash: z.string(),
});

export const NewsEntity = z.object({
  title: z.string(),
  subTitle: z.string(),
  newsText: z.string(),
  createDate: z.string(),
  views: z.number(),
  category: NewsCategoryEntity,
  images: NewsImagesEntity.or(z.null()),
});

export const NewsList = z.array(NewsEntity);

export type NewsEntity = z.infer<typeof NewsEntity>;
export type NewsList = z.infer<typeof NewsList>;

export const CreateNewsEntity = z.object({
  title: z.string(),
  subTitle: z.string(),
  newsText: z.string(),
  images: NewsImagesEntity.or(z.null()),
});

export type CreateNewsEntity = z.infer<typeof CreateNewsEntity>;
