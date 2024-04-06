import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import CardData from "../components/CardData";
import top from "../assets/Result/top.png";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { gem_prediction, shape_prediction, image } = location.state || {};

  return (
    <>
      <div>
        <Topnav />
      </div>

      <div className=" sm:flex flex-col">
        <div className="relative flex m-0 w-full flex-col justify-center items-center ">
          <div className="bg-black w-10/12 rounded-lg overflow-hidden">
            <img
              src={top}
              alt="img"
              className="h-56 w-full rounded-lg object-cover"
            />
          </div>
          <div className="rounded-full  w-32 absolute z-10 flex justify-center mt-16 ">
            <img
              src="https://images.creativefabrica.com/products/previews/2023/10/26/g6RHnIITX/2XJ5BolLdTPTqZg9S3wp5qZhoUW-mobile.jpg"
              alt="immage"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <p className="text-3xl font-bold pt-20 mb-8 text-center items-center ">
            Gem Analysis Results
          </p>
        </div>
        <div className="grid grid-raw-2">
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 w-40 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 h-10 "
            >
              Share Result
            </button>
            <button
              type="submit"
              className="py-2 w-40 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 h-10 "
            >
              Download Result
            </button>
          </div>
          <div className="flex flex-col justify-center items-center py-12 ">
            <Card
              title={gem_prediction}
              description={shape_prediction}
              imageUrl={URL.createObjectURL(image)}
            />
            <button
              type="submit"
              className="py-2.5 w-40 px-5 mt-4 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 h-10 "
              onClick={() => navigate("/imageuploader")}
            >
              Re-Analyze
            </button>
          </div>
        </div>

        <div className=" sm:ps-32 sm:pe-32">
          <CardData />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Result;
