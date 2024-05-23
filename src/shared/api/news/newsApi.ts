import { mainApi } from 'shared/api/http/mainApi';
import { createQueryFn } from 'shared/api/http/queryFnBuilder';
import { CreateNewsEntity, NewsEntity, NewsList } from 'shared/models/news';
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
    getNewsDetail: build.query<NewsEntity, number>({
      queryFn: createQueryFn(
        (id) => ({
          url: `${NEWS_API}/${id}`,
          method: 'GET',
        }),
        NewsEntity
      ),
    }),
    createNews: build.mutation<void, CreateNewsEntity>({
      queryFn: createQueryFn((data) => ({
        url: NEWS_API,
        method: 'POST',
        data,
      })),
    }),
    deleteNews: build.mutation<void, { id: number }>({
      queryFn: createQueryFn(({ id }) => ({
        url: `${NEWS_API}/${id}`,
        method: 'DELETE',
        data: id,
      })),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetNewsQuery,
  useGetNewsDetailQuery,
  useCreateNewsMutation,
  useDeleteNewsMutation,
} = newsApi;
