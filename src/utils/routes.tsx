import { lazy } from "react";
import { RouteType, RouteLink } from "@/utils/types.ts";

export enum ROUTES {
  MAIN = "/",
  ABOUT = "/favourites",
}

const Home = lazy(() => import("@/pages/Home"));
const Favourites = lazy(() => import("@/pages/Favourites"));

export const routes: RouteType[] = [
  {
    path: ROUTES.MAIN,
    element: <Home />,
  },
  {
    path: ROUTES.ABOUT,
    element: <Favourites />,
  },
];

export const ROUTES_LINKS: RouteLink[] = [
  { to: "/", label: "Home", className: "text-white hover:underline" },
  { to: "about", label: "Favourites", className: "text-white hover:underline" },
];
