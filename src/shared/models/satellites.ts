import { z } from 'zod';

export const SatelliteIndicatorEntity = z.object({
  id: z.number(),
  name: z.string(),
  tag: z.string(),
});

export const SatelliteIndicatorList = z.array(SatelliteIndicatorEntity);

export type SatelliteIndicatorList = z.infer<typeof SatelliteIndicatorList>;
