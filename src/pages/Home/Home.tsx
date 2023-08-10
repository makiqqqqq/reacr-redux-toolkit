import { useState, ChangeEvent, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce.ts";
import { useApi } from "@/pages/Home/useApi.ts";
import RepoCard from "@/Components/RepoCard/RepoCard.tsx";

const Home = () => {
  const [search, setSearch] = useState("makiqqqqq");
  const [dropdown, setDropdown] = useState(false);
  const { debounce } = useDebounce(search);
  const {
    usersQuery,
    userReposQuery: { reposData, fetchRepos, areReposLoading },
  } = useApi(debounce);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getRepos = (userName: string) => () => {
    fetchRepos({
      userName,
    });
    setDropdown(false);
  };

  useEffect(() => {
    setDropdown(debounce.length > 3 && usersQuery?.data?.length! > 0);
  }, [debounce, usersQuery?.data, reposData]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {usersQuery.isError && <p className="text-center text-red-600">Something went wrong...</p>}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github username..."
          value={search}
          onChange={handleChangeSearch}
        />

        {dropdown && (
          <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
            {usersQuery.isLoading && <p className="text-center">Loading...</p>}
            {usersQuery?.data?.map((user) => (
              <li
                key={user.id}
                onClick={getRepos(user.login)}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}

        <div className="container">
          {areReposLoading && <p className="text-center">Repos are loading...</p>}
          {reposData?.map((repo) => (
            <RepoCard repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
