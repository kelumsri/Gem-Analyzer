import React from "react";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import homeImage_1 from "../assets/home_1.png";
import homeImage_2 from "../assets/home_2.png";
import homeImage_3 from "../assets/home_3.png";
import contentData from "../assets/content.json";


function Landingpage() {
    return (
        <>
            <div>
                <Topnav />
            </div>
            <div class=" flex flex-col">
                <div>
                    <p class="text-4xl font-bold p-4 m-8 text-center items-center">
                        How does GemAnaIyzer work?
                    </p>
                </div>
                <div class=" grid grid-cols-2 justify-center items-center">
                    <div>
                        <p class="text-2xl font-bold p-4 ms-24 ">
                        {contentData.section1.title}
                        </p>
                        <p class=" text-base  p-4 ms-24 me-24 ">
                        {contentData.section1.description}
                        </p>
                        <button
                            type="button"
                            class=" ms-28 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                        >
                            Learn More
                        </button>
                    </div >
                    <div className="flex justify-center items-center"> <img src={homeImage_1} alt="Gem" className=" flex w-96 h-80" /></div>
                </div>
                <div class=" grid grid-cols-2 justify-center items-center ">
                <div className="flex justify-center items-center"> <img src={homeImage_2} alt="Gem" className=" flex w-96 h-80" /> </div>
                    <div>
                        <p class="text-2xl font-bold p-4 ms-24 ">
                        {contentData.section2.title}
                        </p>
                        <p class=" text-base  p-4 ms-24 me-24 ">
                        {contentData.section2.description}
                        </p>
                        <button
                            type="button"
                            class=" ms-28 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                <div class=" grid grid-cols-2 justify-center items-center">
                    <div>
                        <p class="text-2xl font-bold p-4 ms-24 ">
                        {contentData.section3.title}
                        </p>
                        <p class=" text-base  p-4 ms-24 me-24">
                        {contentData.section3.description}
                        </p>
                        <button
                            type="button"
                            class=" my-0 ms-28 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                        >
                            Learn More
                        </button>
                    </div>
                    <div className="flex justify-center items-center"> <img src={homeImage_3} alt="Gem" className=" flex w-96 h-96" /></div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Landingpage;
