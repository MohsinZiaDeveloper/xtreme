import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "./Store/projects/ProjectSlice";
import { getallProjects } from "./Store/projects/ProjectSlice";

const ListImages = () => {
  const loading = useSelector(getallProjects);
  const [data, setdata] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoader(true));
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
        .then((response) => response.json())
        .then((data) => setdata(data));
      dispatch(setLoader(false));
    }, 1000);
  }, [dispatch]);

  console.log("data", data);
  return (
    <div>
      {loading.loader && (
        <div className="loaderOverlay top-0 left-0 fixed w-full h-full flex justify-center items-center z-50">
          <div className="loader absolute"></div>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-2 lg:px-20 mt-5 lg:mt-10">
        {data?.map((value) => {
          return (
            <div className="card flex rounded-xl flex-col shadow-2xl p-4">
              <img
                src={value.thumbnailUrl}
                className="h-40 w-full rounded-xl"
                alt=""
              ></img>
              <h3 className="mt-3 text-sm"> new Test Seller prod</h3>
              <h3 className="mt-6 text-xl font-bold">$2131</h3>
              <div className="flex  mt-2 flex-col gap-2 text-xs font-light text-gray-300">
                <h4>retail value $4500</h4>
                <h4>retail value $4500</h4>
                <h4>retail value $4500</h4>
                <h4>retail value $4500</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListImages;
