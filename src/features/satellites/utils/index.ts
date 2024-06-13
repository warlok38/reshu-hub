import { SatelliteIndicatorDataEntity } from 'shared/models/satellites';

const VALUE_GAP = 0.5;

export const isAllEquals = (data: SatelliteIndicatorDataEntity[]) => {
  return data
    .map(({ value }) => Number(value))
    .every((value) => value === data[0].value);
};

export const maxValueInicator = (data: SatelliteIndicatorDataEntity[]) => {
  return Math.max(...data.map(({ value }) => Number(value))) + VALUE_GAP;
};

export const minValueInicator = (data: SatelliteIndicatorDataEntity[]) => {
  return Math.min(...data.map(({ value }) => Number(value))) - VALUE_GAP;
};
