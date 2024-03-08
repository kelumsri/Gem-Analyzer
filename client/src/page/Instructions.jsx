import React from "react";

function Instructions() {
    return (<>
   
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
               <div>

               </div>
               <div>

               </div>
            </div>
        </div>
        </>
    );
}

export default Instructions;
