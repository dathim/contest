import { ConfigType } from "@utility/config"
import { api } from "./api"

export const configApi = api.injectEndpoints({
  endpoints: builder => ({
    getConfig: builder.query({
      query: () => 'config',
      transformResponse: (response: ConfigType) => response,
      providesTags: () => [{ type: "config" }]
    }),
  })
})

export const { useGetConfigQuery } = configApi