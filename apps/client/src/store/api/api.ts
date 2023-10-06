import { SERVER_URL } from '@/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['test', 'config', 'profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL
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


export const { useGetTestQuery, useSetTestMutation } = api