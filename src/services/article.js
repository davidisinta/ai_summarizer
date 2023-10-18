import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const rapidApiKey = 'e2262991e2mshd620a6a0d79a320p19181djsn46bab34a1096';


export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      const newHeaders = new Headers(headers);
      newHeaders.set('X-RapidAPI-Key', rapidApiKey);
      newHeaders.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
      return newHeaders;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
