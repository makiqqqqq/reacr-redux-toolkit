import { Suspense } from "react";
import { Routes } from "react-router-dom";
import { routes } from "@/utils/routes.tsx";
import { createRouter } from "@/Components/Router/utils.tsx";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{routes.map(createRouter)}</Routes>
    </Suspense>
  );
};

export default Router;
