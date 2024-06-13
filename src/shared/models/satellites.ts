import { z } from 'zod';

export const SatelliteParameterEntity = z.object({
  id: z.number(),
  name: z.string(),
  tag: z.string(),
});

export const SatelliteIndicatorDataEntity = z.object({
  date: z.string(),
  value: z.number(),
});

export const SatelliteIndicatorEntity = z.object({
  tag: z.string(),
  data: z.array(SatelliteIndicatorDataEntity),
});

export const SatelliteDataEntity = z.object({
  name: z.string(),
  indicators: z.array(SatelliteIndicatorEntity),
});

export const SatelliteParameterList = z.array(SatelliteParameterEntity);

export type SatelliteParameterList = z.infer<typeof SatelliteParameterList>;
export type SatelliteDataEntity = z.infer<typeof SatelliteDataEntity>;
export type SatelliteIndicatorEntity = z.infer<typeof SatelliteIndicatorEntity>;
export type SatelliteIndicatorDataEntity = z.infer<
  typeof SatelliteIndicatorDataEntity
>;
