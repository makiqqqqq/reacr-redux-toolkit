import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetUsersRequest } from "@/api/models/get-users-request.ts";
import { IUser, ServerResponse } from "@/api/models/get-users-response.ts";
import { IGetUsersRepositoryRequest } from "@/api/models/get-user-repository-request.ts";
import { IRepo } from "@/api/models/get-user-repository-response.ts";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
  }),
  refetchOnFocus: true,
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
    getUserRepository: build.query<IRepo[], IGetUsersRepositoryRequest>({
      query: ({ userName }: IGetUsersRepositoryRequest) => ({
        url: `users/${userName}/repos`,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUserRepositoryQuery } = githubApi;
