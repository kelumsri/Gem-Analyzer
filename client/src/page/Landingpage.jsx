import React from "react";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";

function Landingpage() {
    return (
        <>
            <div>
                <Topnav />
            </div>
            <div class="grid grid-rows-4">
                <div>
                    <p class="text-4xl font-bold p-4 m-8 text-center items-center">
                        How does GemAnaIyzer work?
                    </p>
                </div>
                <div class=" grid grid-cols-2">
                    <div>
                        <p class="text-2xl font-bold p-4 ms-24 ">
                            Getting Started with GemAnalyzer
                        </p>
                        <p class=" text-base  p-4 ms-24 me-24 ">
                            As a new user, you can easily upload images of gems
                            to GemAnalyzer for accurate analysis. Once you've
                            uploaded an image, our advanced image recognition
                            technology will identify the gem type and shape,
                            providing you with detailed information.
                        </p>
                        <button
                            type="button"
                            class=" ms-28 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                        >
                            Learn More
                        </button>
                    </div>
                    <div>grid_2-2</div>
                </div>
                <div class=" grid grid-cols-2">
                    <div>grid_3-1</div>
                    <div>
                        <p class="text-2xl font-bold p-4 ms-24 ">
                            GemAnalyzer and Image
                        </p>
                        <p class=" text-base  p-4 ms-24 me-24 ">
                            GemAnaIyzer utilizes cutting-edge image recognition
                            technology to accurately identify gem types and
                            shapes. Our system is built on a decentralized,
                            open-source platform that ensures reliability and
                            accessibility for all users.
                        </p>
                        <button
                            type="button"
                            class=" ms-28 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                <div class=" grid grid-cols-2">
                    <div>
                        {" "}
                        <p class="text-2xl font-bold p-4 ms-24 ">
                            Explore the Power of GemAnalyzer
                        </p>
                        <p class=" text-base  p-4 ms-24 me-24">
                            GemAnaIyzer Revolutionizes Gem Analysis
                        </p>
                        <button
                            type="button"
                            class=" my-20 ms-28 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                        >
                            Learn More
                        </button>
                    </div>
                    <div>grid_4-2</div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Landingpage;
