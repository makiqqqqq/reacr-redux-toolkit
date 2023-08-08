import { Suspense } from "react";
import { Route } from "react-router-dom";
import { RouteType } from "@/utils/types.ts";

export const createRouter = ({ path, element }: RouteType) => (
  <Route key={path} path={path} element={<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>} />
);
