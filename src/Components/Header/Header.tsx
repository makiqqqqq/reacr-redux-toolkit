import { ROUTES_LINKS } from "@/utils/routes.tsx";
import { createLinks } from "@/Components/Header/utils.tsx";

const Header = () => {
  return (
    <div className="flex gap-2 justify-between px-2 bg-cyan-700 h-12 items-center">
      <div>
        <span className="text-yellow-600">Logo@</span>
      </div>
      <div className="flex gap-3">{ROUTES_LINKS.map(createLinks)}</div>
    </div>
  );
};

export default Header;
