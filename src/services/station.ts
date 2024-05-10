import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Station } from "./types";

export const stationApi = createApi({
  reducerPath: "stationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/",
  }),
  endpoints: (builder) => ({
    getStations: builder.query<Station[], void>({
      query: () => "stations.json",
      transformResponse: ({ data }: { data: Station[] }) =>
        data.filter(({ reliability }) => reliability > 10),
    }),
  }),
});

export const { useGetStationsQuery } = stationApi;
