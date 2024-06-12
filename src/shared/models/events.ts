import { z } from 'zod';

export const EventType = z.object({
  id: z.number(),
  name: z.string(),
});

export const EventEntity = z.object({
  id: z.number(),
  name: z.string(),
  subtitle: z.string().or(z.null()),
  dateStart: z.string(),
  dateEnd: z.string(),
  //TODO типизировать newsId
  newsId: z.any(),
});

export const EventsList = z.array(EventEntity);

export type EventEntity = z.infer<typeof EventEntity>;
export type EventsList = z.infer<typeof EventsList>;
