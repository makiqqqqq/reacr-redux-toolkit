import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "@/store/github/github.api.ts";
import { setupListeners } from "@reduxjs/toolkit/query";
import { githubReducer } from "@/store/github/github.slice.ts";

const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    gitHub: githubReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;
