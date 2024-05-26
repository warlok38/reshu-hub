import { mainApi } from 'shared/api/http/mainApi';
import { createQueryFn } from 'shared/api/http/queryFnBuilder';
import { RegistrationEntity } from 'shared/models/registration';
import { REGISTRATION_API } from './consts';

export const registrationApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation<void, RegistrationEntity>({
      queryFn: createQueryFn((data) => ({
        url: REGISTRATION_API,
        method: 'POST',
        data,
      })),
    }),
  }),
  overrideExisting: false,
});

export const { useRegistrationMutation } = registrationApi;
