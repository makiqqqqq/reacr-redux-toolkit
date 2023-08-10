import { useAppSelector } from "@/hooks/useAppSelector.ts";

const Favourites = () => {
  const { favourites } = useAppSelector((state) => state.gitHub);
  console.log("favourites", favourites);
  return favourites?.length === 0 ? (
    <div>
      <p className="text-center">No items.</p>
    </div>
  ) : (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites?.map((item: string) => (
          <li key={item}>
            <a href={item} target="_blank" rel="noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
