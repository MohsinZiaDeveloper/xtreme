import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./Main";
import { getallProjects, setLoader } from "./Store/projects/ProjectSlice";

function App() {
  const loading = useSelector(getallProjects);
  console.log("loading", loading.loader);
  return (
    <div className="App relative">
      {loading.loader && (
        <div className="loaderOverlay top-0 left-0 fixed w-full h-full flex justify-center items-center z-50">
          <div className="loader absolute"></div>
        </div>
      )}
      <Main />
    </div>
  );
}

export default App;
