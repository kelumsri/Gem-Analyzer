import React from "react";

const Card = ({ title, description, imageUrl, onClick }) => {
    return (
        <button onClick={onClick} className="focus:outline-none ">
            <div className="max-w-xs rounded overflow-hidden shadow-lg ">
                {imageUrl && (
                    <img className="w-full" src={imageUrl} alt="Card" />
                )}
                <div className="py-4 ">
                    <div className="font-bold text-xl mb-2 text-left">
                        {title}
                    </div>
                    <p className="text-gray-700 text-base text-left">
                        {description}
                    </p>
                </div>
            </div>
        </button>
    );
};

export default Card;
