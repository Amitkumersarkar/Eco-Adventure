
const ExploreCard = ({ exploreData }) => {
    const { title,
        image,
        category,
        shortDescription,
        cost,
        bookingAvailability,
        location,
        duration,
        adventureLevel,
        includedItems,
        ecoFriendlyFeatures,
        maxGroupSize,
        specialInstructions, } = exploreData;

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {category}
                </span>
                <span
                    className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-semibold ${bookingAvailability ? "bg-green-500" : "bg-red-500"
                        } text-white`}
                >
                    {bookingAvailability ? "Available" : "Fully Booked"}
                </span>
            </div>
            <div className="p-5">
                <h2 className="text-xl font-bold mb-1 text-gray-900">{title}</h2>
                <p className="text-sm text-gray-700 mb-3">{shortDescription}</p>

                <div className="flex flex-wrap gap-2 text-sm mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Location: {location}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Duration: {duration}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Level: {adventureLevel}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
                        Cost: {cost}
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        Max Group Size: {maxGroupSize}
                    </span>
                </div>

                {/* Included Items */}
                <div className="mb-3">
                    <h3 className="font-semibold text-gray-800 mb-1">Included Items:</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm">
                        {includedItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Eco-Friendly Features */}
                <div className="mb-3">
                    <h3 className="font-semibold text-gray-800 mb-1">Eco-Friendly Features:</h3>
                    <ul className="list-disc list-inside text-green-700 text-sm">
                        {ecoFriendlyFeatures.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Special Instructions */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Special Instructions:</h3>
                    <ul className="list-disc list-inside text-gray-600 text-sm italic">
                        {specialInstructions.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExploreCard;