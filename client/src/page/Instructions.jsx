import React from "react";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";

function Instructions() {
    return (<>
        <div>
            <Topnav/>
        </div>
        <div className=" flex flex-col justify-center items-center ">
            <div className="  w-6/12 h-64  flex flex-col items-center rounded-3xl bg-slate-200">
                <p class="text-4xl font-bold pt-10 my-4 text-center items-center">
                    How to upload images
                </p>
                <p>Uploading picture must be in PNG or JPG format</p>
                <p>
                    Uploading picture must be 126 pixels or higher in dimensions    
                </p>
            </div>
            <div className="w-6/12 h-64  flex flex-col items-center rounded-3xl bg-slate-200 my-16 ">
               <div className="flex gap-4 me-4 ms-4">
               <img class=" w-56 rounded-xl mt-4 overflow-hidden shadow-lg"  src="https://media.istockphoto.com/id/1397823124/photo/set-of-natural-colored-gemstones.webp?b=1&s=170667a&w=0&k=20&c=86GQXiJItpfq-s12iF-Ho7BtOnpdWaa3f4jpIUf3uMs=" alt="Sunset in the mountains "></img>
               <img class=" w-56 rounded-xl mt-4 overflow-hidden shadow-lg"  src="https://media.istockphoto.com/id/1397823124/photo/set-of-natural-colored-gemstones.webp?b=1&s=170667a&w=0&k=20&c=86GQXiJItpfq-s12iF-Ho7BtOnpdWaa3f4jpIUf3uMs=" alt="Sunset in the mountains "></img>
               <img class=" w-56 rounded-xl mt-4 overflow-hidden shadow-lg"  src="https://media.istockphoto.com/id/1397823124/photo/set-of-natural-colored-gemstones.webp?b=1&s=170667a&w=0&k=20&c=86GQXiJItpfq-s12iF-Ho7BtOnpdWaa3f4jpIUf3uMs=" alt="Sunset in the mountains "></img>
               <img class=" w-56 rounded-xl mt-4 overflow-hidden shadow-lg"  src="https://media.istockphoto.com/id/1397823124/photo/set-of-natural-colored-gemstones.webp?b=1&s=170667a&w=0&k=20&c=86GQXiJItpfq-s12iF-Ho7BtOnpdWaa3f4jpIUf3uMs=" alt="Sunset in the mountains "></img>
               </div>
               <div>
               <button
                            type="button"
                            class=" mt-4 w-28  py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                        >
                            All
                        </button>
                        <button
                            type="button"
                            class=" mt-4 w-28 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                        >
                            Rounded
                        </button>
               </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Instructions;
