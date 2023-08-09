import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "@/store/github/github.api.ts";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export default store;
