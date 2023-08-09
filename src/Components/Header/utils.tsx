import { RouteLink } from "@/utils/types.ts";
import { Link } from "react-router-dom";

export const createLinks = (route: RouteLink) => <Link {...route}>{route.label}</Link>;
