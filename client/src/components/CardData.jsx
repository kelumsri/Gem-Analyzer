import React from "react";
import Card from "./Card";

const Carddata = () => {
    const handleClick = () => {
        // Handle click action here

        console.log("Card clicked!");
    };

    return (
        <div className=" grid grid-cols-3 justify-items-center">
            <div>
                <Card
                    title="Example Card"
                    description="This is an example card component."
                    imageUrl="https://www.tandfonline.com/cms/asset/dad09d8f-77d1-44b6-9e5a-6cc024141db5/vram_a_2126698_f0012_c.jpg"
                    onClick={handleClick}
                />
            </div>

            <div>
                <Card
                    title="Example Card"
                    description="This is an example card component."
                    imageUrl="https://www.tandfonline.com/cms/asset/dad09d8f-77d1-44b6-9e5a-6cc024141db5/vram_a_2126698_f0012_c.jpg"
                    onClick={handleClick}
                />
            </div>

            <div>
                <Card
                    title="Example Card"
                    description="This is an example card component."
                    imageUrl="https://www.tandfonline.com/cms/asset/dad09d8f-77d1-44b6-9e5a-6cc024141db5/vram_a_2126698_f0012_c.jpg"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};
export default Carddata;
