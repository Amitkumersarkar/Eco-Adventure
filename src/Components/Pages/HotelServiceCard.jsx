import { ToastContainer, toast } from 'react-toastify';
const HotelServiceCard = ({ service }) => {
    const {
        serviceName,
        description,
        available,
        price,
        hours,
        additionalInfo,
    } = service;
    const notify = () => toast('Thanks For Booking !');
    return (
        <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-auto flex flex-col">
            <div className="p-5 flex-grow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{serviceName}</h2>

                <p className="text-gray-700 mb-3">{description}</p>

                <div className="flex flex-wrap gap-3 mb-4 text-sm">
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

            <div className="p-5 pt-0">
                <button
                    disabled={!available}
                    className={`w-full py-3 rounded-lg text-white font-semibold transition-colors duration-300
            ${available ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                    onClick={notify}  >
                    Book Now
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default HotelServiceCard;
