import React from "react";

const HotelServiceCard = ({ service }) => {
    const {
        serviceName,
        description,
        available,
        price,
        hours,
        additionalInfo,
    } = service;

    return (
        <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-auto">
            <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{serviceName}</h2>

                <p className="text-gray-700 mb-3">{description}</p>

                <div className="flex flex-wrap gap-3 mb-3 text-sm">
                    <span
                        className={`inline-block px-3 py-1 rounded-full font-semibold ${available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                    >
                        {available ? "Available" : "Not Available"}
                    </span>

                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                        Price: {price === 0 ? "Free" : price}
                    </span>

                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                        Hours: {hours}
                    </span>
                </div>

                {additionalInfo && (
                    <p className="text-gray-500 italic text-sm border-t pt-2">{additionalInfo}</p>
                )}
            </div>
        </div>
    );
};

export default HotelServiceCard;
