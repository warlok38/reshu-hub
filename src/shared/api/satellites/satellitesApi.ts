import { mainApi } from '../http/mainApi';
import { SatelliteIndicatorList } from 'shared/models/satellites';
import { createQueryFn } from '../http/queryFnBuilder';
import { SATELLITES_API } from './consts';

export const satellitesApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getSatellitesIndicators: build.query<SatelliteIndicatorList, void>({
      queryFn: createQueryFn(
        () => ({
          url: `${SATELLITES_API}/category`,
          method: 'GET',
        }),
        SatelliteIndicatorList
      ),
    }),
  }),
});

export const { useGetSatellitesIndicatorsQuery } = satellitesApi;
