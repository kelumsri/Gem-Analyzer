// import React, { useState } from "react";
// import Topnav from "../components/Topnav";
// import Footer from "../components/Footer";
// import background from '../assets/background.png'

// const Form = () => {
//     const [email, setEmail] = useState("");
//     const [image, setImage] = useState(null);
//     const [option, setOption] = useState("");
//     const [imageUrl, setImageUrl] = useState(""); // State to store image URL

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission
//         console.log("Submitted:", { email, image, option });
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setImage(file);
//         setImageUrl(URL.createObjectURL(file)); // Set image URL
//     };

//     return (
//         <>
//             <div>
//                 <Topnav />
//             </div>
//             <div className=" ">
//             <div className=" bg-cover bg-center sm:m-auto" style={{backgroundImage: `url(${background})`}}>
//                 <p className=" py-10 text-4xl font-bold max-w-5xl mx-auto mt-8">
//                     Gem Analysis
//                 </p>
//                 <form
//                     onSubmit={handleSubmit}
//                     className="max-w-5xl mx-auto mt-8"
//                 >
//                     <div className="mb-4">
//                         <label
//                             htmlFor="name"
//                             className="block mb-2 font-medium"
//                         >
//                             Email Address
//                         </label>
//                         <p>
//                             Provide us your email address,if you want to recive
//                             your gem analysis report to your email
//                         </p>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full border rounded px-3 py-2 my-4"
//                             placeholder="Enter your email"
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label
//                             htmlFor="image"
//                             className="block mb-2 font-medium"
//                         >
//                             Upload your image here
//                         </label>
//                         <label
//                             htmlFor="image"
//                             className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 relative"
//                         >
//                             {imageUrl && (
//                                 <img
//                                     src={imageUrl}
//                                     alt="Uploaded"
//                                     className="max-w-full max-h-full"
//                                 />
//                             )}
//                             {!imageUrl && (
//                                 <>
//                                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                                         <svg
//                                             className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//                                             aria-hidden="true"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 20 16"
//                                         >
//                                             <path
//                                                 stroke="currentColor"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//                                             />
//                                         </svg>
//                                         <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                                             <span className="font-semibold">
//                                                 Click to upload
//                                             </span>{" "}
//                                             or drag and drop
//                                         </p>
//                                         <p className="text-xs text-gray-500 dark:text-gray-400">
//                                             SVG, PNG, JPG or GIF (MAX.
//                                             800x400px)
//                                         </p>
//                                     </div>
//                                     <input
//                                         type="file"
//                                         id="image"
//                                         onChange={handleImageChange}
//                                         accept="image/*"
//                                         className="hidden"
//                                     />
//                                 </>
//                             )}
//                         </label>
//                     </div>

//                     <div className="mb-4">
//                         <label className="block mb-2 font-medium">
//                             Do you want to identify the cut of the Gem?
//                         </label>
//                         <div>
//                             <label htmlFor="yes" className="mr-4">
//                                 <input
//                                     type="radio"
//                                     id="yes"
//                                     value="yes"
//                                     checked={option === "yes"}
//                                     onChange={() => setOption("yes")}
//                                     className="mr-1"
//                                 />
//                                 Yes
//                             </label>
//                             <label htmlFor="no">
//                                 <input
//                                     type="radio"
//                                     id="no"
//                                     value="no"
//                                     checked={option === "no"}
//                                     onChange={() => setOption("no")}
//                                     className="mr-1"
//                                 />
//                                 No
//                             </label>
//                         </div>
//                     </div>
//                     <div className="flex justify-end">
//                         <button
//                             type="submit"
//                             class=" ms-28 py-2.5 px-5 me-2 mb-10 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
//                         >
//                             Continue
//                         </button>
//                     </div>
                    
//                 </form>
//             </div>
//             <div>
//                         <Footer/>
//                     </div>
//                     </div>
//         </>
//     );
// };

// export default Form;


import React, { useState } from "react";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import background from '../assets/background.png'

const Form = () => {
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);
    const [option, setOption] = useState("");
    const [imageUrl, setImageUrl] = useState(""); // State to store image URL

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Submitted:", { email, image, option });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImageUrl(URL.createObjectURL(file)); // Set image URL
    };

    return (
        <>
            <div>
                <Topnav />
            </div>
            <div className="bg-gray-100 min-h-screen">
                <div className="bg-cover bg-center sm:m-auto" style={{backgroundImage: `url(${background})`}}>
                <p className="py-10 text-4xl font-bold max-w-5xl mx-auto mt-8 ml-20 sm:ml-auto">
                     Gem Analysis
                </p>

                    <form
                        onSubmit={handleSubmit}
                        className=" max-sm:w-80 max-w-5xl mx-auto mt-8 px-4 sm:px-0"
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block mb-2 font-medium"
                            >
                                Email Address
                            </label>
                            <p>
                                Provide us your email address, if you want to receive
                                your gem analysis report to your email
                            </p>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border rounded px-3 py-2 my-4"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="image"
                                className="block mb-2 font-medium"
                            >
                                Upload your image here
                            </label>
                            <label
                                htmlFor="image"
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 relative"
                            >
                                {imageUrl && (
                                    <img
                                        src={imageUrl}
                                        alt="Uploaded"
                                        className="max-w-full max-h-full"
                                    />
                                )}
                                {!imageUrl && (
                                    <>
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">
                                                    Click to upload
                                                </span>{" "}
                                                or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF (MAX.
                                                800x400px)
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            id="image"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </>
                                )}
                            </label>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-medium">
                                Do you want to identify the cut of the Gem?
                            </label>
                            <div>
                                <label htmlFor="yes" className="mr-4">
                                    <input
                                        type="radio"
                                        id="yes"
                                        value="yes"
                                        checked={option === "yes"}
                                        onChange={() => setOption("yes")}
                                        className="mr-1"
                                    />
                                    Yes
                                </label>
                                <label htmlFor="no">
                                    <input
                                        type="radio"
                                        id="no"
                                        value="no"
                                        checked={option === "no"}
                                        onChange={() => setOption("no")}
                                        className="mr-1"
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="ms-4 sm:my-12 my-10 sm:ms-0 py-2.5 px-5 mt-6 sm:mt-0 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default Form;
