import { useLoaderData } from "react-router-dom";
import HotelServiceCard from "./HotelServiceCard";

const HotelService = () => {
    const serviceData = useLoaderData();
    // console.log(serviceData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {
                serviceData.map((service) => <HotelServiceCard key={service.id} service={service}></HotelServiceCard>)
            }
        </div>
    );
};

export default HotelService;