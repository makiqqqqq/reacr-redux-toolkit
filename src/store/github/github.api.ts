import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetUsersRequest } from "@/api/models/get-users-request.ts";
import { IUser, ServerResponse } from "@/api/models/get-users-response.ts";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
  }),
  endpoints: (build) => ({
    getUsers: build.query<IUser[], IGetUsersRequest>({
      query: ({ search }: IGetUsersRequest) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
  }),
});

export const { useGetUsersQuery } = githubApi;
