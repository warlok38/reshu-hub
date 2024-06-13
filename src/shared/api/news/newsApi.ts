import { mainApi } from 'shared/api/http/mainApi';
import { createQueryFn } from 'shared/api/http/queryFnBuilder';
import { NewsEntity, NewsList } from 'shared/models/news';
import { NEWS_API, NEWS_TAG } from './consts';

export const tags = [NEWS_TAG];

export const newsApi = mainApi
  // NOTE: see https://github.com/reduxjs/redux-toolkit/issues/1510
  .enhanceEndpoints({ addTagTypes: tags })
  .injectEndpoints({
    endpoints: (build) => ({
      getNews: build.query<NewsList, void>({
        providesTags: tags,
        queryFn: createQueryFn(
          () => ({
            url: NEWS_API,
            method: 'GET',
          }),
          NewsList
        ),
      }),
      getNewsDetail: build.query<NewsEntity, number>({
        providesTags: tags,
        queryFn: createQueryFn(
          (id) => ({
            url: `${NEWS_API}/${id}`,
            method: 'GET',
          }),
          NewsEntity
        ),
      }),
      createNews: build.mutation<void, FormData>({
        invalidatesTags: tags,
        queryFn: createQueryFn((data) => ({
          url: NEWS_API,
          method: 'POST',
          data,
        })),
      }),
      deleteNews: build.mutation<void, { id: number }>({
        invalidatesTags: tags,
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
