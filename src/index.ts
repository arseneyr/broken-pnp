import { configureStore } from "@reduxjs/toolkit";

type Dispatch = typeof store["dispatch"];
``;
const store = configureStore({
  reducer: (s) => s,
});

store.dispatch(() => {});
