import { mainApi } from '../http/mainApi';
import {
  SatelliteDataEntity,
  SatelliteParameterList,
} from 'shared/models/satellites';
import { createQueryFn } from '../http/queryFnBuilder';
import { SATELLITES_API } from './consts';

type SatellitesDataParams = {
  DateFrom: string;
  DateTo: string;
  parameters: string;
};

export const satellitesApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getSatellitesParameters: build.query<SatelliteParameterList, void>({
      queryFn: createQueryFn(
        () => ({
          url: `${SATELLITES_API}/category`,
          method: 'GET',
        }),
        SatelliteParameterList
      ),
    }),
    getSatellitesData: build.query<SatelliteDataEntity, SatellitesDataParams>({
      queryFn: createQueryFn(
        ({ DateFrom, DateTo, parameters }) => ({
          url: `${SATELLITES_API}/data?DateFrom=${DateFrom}&DateTo=${DateTo}&parameters=${parameters}`,
          method: 'GET',
        }),
        SatelliteDataEntity
      ),
    }),
  }),
});

export const { useGetSatellitesDataQuery, useGetSatellitesParametersQuery } =
  satellitesApi;
