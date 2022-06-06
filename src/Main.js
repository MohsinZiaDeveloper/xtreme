import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { fetchProducts } from "./Store/projects/ProductsSlice";
import { setLoader } from "./Store/projects/ProjectSlice";

const Main = () => {
  // const [data, setdata] = useState();
  const dispatch = useDispatch();
  const [imageVal, setimageVal] = useState("Icon1");
  const [imageString, setimageString] = useState("assets/food-delivery.png");
  const navigate = useNavigate();
  const [title, settitle] = useState("Delivery");

  const { data: products, status } = useSelector((state) => state.product);

  console.log("redux data ", products, status);

  const mouseEnter = (name, image, title) => {
    // console.log("image string", name, image);
    // alert("mouse Enter ");

    setimageVal(name);
    setimageString(image);
    settitle(title);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const IconClick = (props) => {
    dispatch(setLoader(true));
    navigate("/imagesList");
  };

  return (
    <>
      <div className="w-full flex  ">
        <div className="w-full flex h-screen justify-center items-center">
          <div className="rounded-[50%] bg-grayColor h-[17rem] w-[17rem]  lg:h-[34rem]  lg:w-[34rem] flex justify-center items-center relative">
            <img
              src="assets/food-delivery.png"
              className="h-6 w-6 lg:h-12 lg:w-12 absolute cursor-pointer  top-4 lg:top-8 "
              alt=""
              onMouseEnter={() =>
                mouseEnter("Icon1", "assets/food-delivery.png", "Delivery")
              }
              onClick={() => IconClick("Icon1")}
            />
            <img
              src="assets/weight-scale1.png"
              className="h-6 w-6 lg:h-12 lg:w-12 absolute cursor-pointer  right-[2rem] top-[4rem]  lg:right-[4rem] lg:top-[9rem] "
              alt=""
              onMouseEnter={() =>
                mouseEnter("Icon2", "assets/weight-scale1.png", "weight")
              }
              onClick={() => IconClick("Icon2")}
            />
            <img
              src="assets/home-security.png"
              className="h-6 w-6 lg:h-12 lg:w-12 absolute cursor-pointer  bottom-[5rem] right-[2rem]  lg:bottom-[10rem] lg:right-[3.2rem]"
              alt=""
              onMouseEnter={() =>
                mouseEnter("Icon3", "assets/home-security.png", "House")
              }
              onClick={() => IconClick("Icon3")}
            />
            <img
              src="assets/candy-machine.png"
              className="h-6 w-6 lg:h-12 lg:w-12 absolute cursor-pointer  bottom-4 lg:bottom-8 right-54"
              alt=""
              onMouseEnter={() =>
                mouseEnter("Icon4", "assets/candy-machine.png", "Weight")
              }
              onClick={() => IconClick("Icon4")}
            />

            <img
              src="assets/road.png"
              className="h-6 w-6 lg:h-12 lg:w-12 absolute cursor-pointer   top-[10rem] left-[1.4rem]  lg:left-[3.8rem] lg:top-[9rem]"
              alt=""
              onMouseEnter={() =>
                mouseEnter("Icon5", "assets/road.png", "Road")
              }
              onClick={() => IconClick("Icon5")}
            />
            <img
              src="assets/tattoo.png"
              className="h-6 w-6 lg:h-12 lg:w-12 absolute cursor-pointer bottom-[11rem] left-[2rem]  lg:bottom-[10rem] lg:left-[3.2rem]"
              alt=""
              onMouseEnter={() =>
                mouseEnter("Icon6", "assets/tattoo.png", "Tatoo Machine")
              }
              onClick={() => IconClick("Icon6")}
            />
            <div className="rounded-[50%] bg-black h-[16rem] w-[16rem] lg:h-[32rem] lg:w-[32rem] flex justify-center items-center">
              <div className="rounded-[50%] bg-white border shadow-sm h-[11rem] w-[11rem] lg:h-[22rem] lg:w-[22rem] flex justify-center items-center">
                <div className="rounded-[50%] relative shadow-lg h-[8rem] w-[8rem] lg:h-[16rem]  lg:w-[16rem] flex justify-center items-center">
                  <div
                    className={`${
                      (imageVal === "Icon1" && "top-0 ") ||
                      (imageVal === "Icon2" &&
                        "top-[4rem] right-[2rem] rotate-[57deg]") ||
                      (imageVal === "Icon3" &&
                        "top-[9rem] right-[2rem] rotate-[118deg]") ||
                      (imageVal === "Icon4" && "bottom-[0.2rem]") ||
                      (imageVal === "Icon6" &&
                        "top-[9rem] left-[2rem] -rotate-[118deg]") ||
                      (imageVal === "Icon5" &&
                        "top-[4rem] left-[2rem] rotate-[-58deg]")
                    } focus:text-mainpurpleColor absolute border border-black h-7 lg:h-10 `}
                  ></div>
                  <div className="rounded-[50%] bg-grayColor bg-gradient-to-b  from-grayColor to-white shadow-lg h-[4rem] w-[4rem]  lg:h-[10rem]  lg:w-[10rem] flex justify-center items-center ">
                    {console.log("image string", imageString)}
                    <div className="flex flex-col">
                      <img
                        src={imageString}
                        alt=""
                        className="h-8 w-8 lg:h-16 lg:w-16"
                      />
                      <h3 className="text-sm font-light">{title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-[-2rem] mb-5">
        <button className="text-sm font-light bg-black text-white px-12 py-4 rounded-full">
          See all departnments
        </button>
      </div>
    </>
  );
};

export default Main;
