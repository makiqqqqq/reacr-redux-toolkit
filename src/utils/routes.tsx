import { lazy } from "react";
import { RouteType } from "@/utils/types.ts";

export enum ROUTES {
  MAIN = "/",
  ABOUT = "/about",
}

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));

export const routes: RouteType = [
  {
    path: ROUTES.MAIN,
    element: <Home />,
  },
  {
    path: ROUTES.ABOUT,
    element: <About />,
  },
];
