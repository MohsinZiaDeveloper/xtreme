import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./projects/ProductsSlice";
import ProjectReducer from "./projects/ProjectSlice";

const store = configureStore({
  reducer: {
    projects: ProjectReducer,
    product: productReducer,
  },
});
export default store;
