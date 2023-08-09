import { ReactNode } from "react";

export type RouteType = {
  path: string;
  element: ReactNode;
};

export type RouteLink = {
  to: string;
  label: string;
  className: string;
};
