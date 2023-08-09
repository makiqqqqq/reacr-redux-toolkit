import { useGetUsersQuery } from "@/store/github/github.api.ts";
import { useState, ChangeEvent } from "react";

const Home = () => {
  const [search, setSearch] = useState({});
  const { data, isError } = useGetUsersQuery({
    search: "makiqqqqq",
  });



  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Something went wrong...</p>}

      <div className="relative w-560px">
        <input
          type="text"
          name="search"
          onChange={handleChangeSearch}
          placeholder="Search for Github username..."
          className="border py-2 px-4 w-full h-10 mb-2"
        />

        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">Some text</div>
      </div>
    </div>
  );
};

export default Home;
