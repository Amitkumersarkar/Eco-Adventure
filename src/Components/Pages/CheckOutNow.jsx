import { useLoaderData } from "react-router-dom";

const CheckOutNow = () => {
    const oneData = useLoaderData();
    const {
        title,
        category,
        adventureLevel,
        duration,
        cost,
        location,
        image,
        description,
        id
    } = oneData;

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white max-w-md w-full rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">

                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover object-center"
                    />
                    <span className="absolute top-3 left-3 bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">{title}</h1>
                    <h1 className="text-2xl font-bold text-gray-900 mb-3">{description}</h1>
                    <div className="space-y-2 text-sm text-gray-700">
                        <p>
                            <span className="text-cyan-500 font-semibold">Adventure Level:</span> {adventureLevel}
                        </p>
                        <p>
                            <span className="text-cyan-500 font-semibold">Duration:</span> {duration}
                        </p>
                        <p>
                            <span className="text-cyan-500 font-semibold">Location:</span> {location}
                        </p>
                        <p>
                            <span className="text-cyan-500 font-semibold">Cost:</span> {cost}
                        </p>
                    </div>

                    {/* Button */}
                    {/* <button className="mt-6 w-full py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                        View Details
                    </button> */}

                </div>
            </div>
        </div>
    );
};

export default CheckOutNow;