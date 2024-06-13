import dayjs, { Dayjs } from 'dayjs';
import { z } from 'zod';

export const EventType = z.object({
  id: z.number(),
  name: z.string(),
});

export const EventEntity = z.object({
  id: z.number(),
  name: z.string(),
  subtitle: z.string().or(z.null()),
  eventsType: EventType,
  description: z.string(),
  dateStart: z.string(),
  dateEnd: z.string(),
});

export const EventsList = z.array(EventEntity);

export type EventEntity = z.infer<typeof EventEntity>;
export type EventsList = z.infer<typeof EventsList>;

export const EventCreateEntity = z.object({
  name: z.string(),
  subtitle: z.string(),
  eventsType: z.number(),
  description: z.string(),
  dateStart: z.instanceof(dayjs as unknown as typeof Dayjs).or(z.undefined()),
  dateEnd: z.instanceof(dayjs as unknown as typeof Dayjs).or(z.undefined()),
});

export const EventParams = z.object({
  userCreateId: z.number(),
  name: z.string(),
  subtitle: z.string(),
  eventsType: z.number(),
  description: z.string(),
  dateStart: z.string(),
  dateEnd: z.string(),
});

export type EventCreateEntity = z.infer<typeof EventCreateEntity>;
export type EventParams = z.infer<typeof EventParams>;
