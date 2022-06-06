import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
  products: {},
};

const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setLoader: (state, { payload }) => {
      // alert("loader", payload);
      // console.log("loader value ", payload);
      state.loader = payload;
    },
  },
});

export const { setLoader } = ProjectSlice.actions;
//reduc actions
export const getallProjects = (state) => state.projects;

export default ProjectSlice.reducer;
