import { mainApi } from 'shared/api/http/mainApi';
import { createQueryFn } from 'shared/api/http/queryFnBuilder';
import { NewsList } from 'shared/models/news';
import { NEWS_API } from './consts';

export const newsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<NewsList, void>({
      queryFn: createQueryFn(
        () => ({
          url: NEWS_API,
          method: 'GET',
        }),
        NewsList
      ),
    }),
  }),
  overrideExisting: false,
});

export const { useGetNewsQuery } = newsApi;
