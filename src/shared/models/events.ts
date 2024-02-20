import { z } from 'zod';

//TODO типизировать сущность
export const EventEntity = z.any();

export const EventsList = z.array(EventEntity);

export type EventEntity = z.infer<typeof EventEntity>;
export type EventsList = z.infer<typeof EventsList>;
