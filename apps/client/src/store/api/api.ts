import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['test'],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000"
  }),
  endpoints: builder => ({
    getTest: builder.query({
      query: () => 'test/',
      providesTags: () => [{ type: "test" }]
    }),
    setTest: builder.mutation({
      query: (data: any) => ({
        url: '/',
        method: "POST",
        body: data
      })
    })
  })
})


//export const anyApi.injectEndpoints()
export const { useGetTestQuery, useSetTestMutation } = api