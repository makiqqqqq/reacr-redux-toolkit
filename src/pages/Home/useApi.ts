import { useGetUsersQuery, useLazyGetUserRepositoryQuery } from "@/store/github/github.api.ts";

export const useApi = (debounce: string) => {
  const usersQuery = useGetUsersQuery(
    {
      search: debounce,
    },
    {
      skip: debounce.length < 3,
    },
  );

  const userReposQuery = useLazyGetUserRepositoryQuery();
  const [fetchRepos, { isLoading, data }] = userReposQuery;
  return {
    usersQuery,
    userReposQuery: {
      fetchRepos,
      reposData: data,
      areReposLoading: isLoading,
    },
  };
};
