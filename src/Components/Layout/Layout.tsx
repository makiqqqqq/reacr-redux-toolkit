import { FC } from "react";
import { LayoutProps } from "./types";

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="max-w-[1400px] px-[100px]">{children}</div>;
};

export default Layout;
