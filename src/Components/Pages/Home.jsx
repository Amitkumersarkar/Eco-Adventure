import { useLoaderData } from "react-router-dom";
import AdventureCard from "./AdventureCard";

const Home = () => {
    const cardData = useLoaderData();
    console.log(cardData);

    return (

        <div>

            {/* Carousel */}
            <div className="carousel w-full h-[400px] md:h-[500px] overflow-hidden mb-10 mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/Kj9wQvph/leandra-rieger-GMD5-Wu7n-v4-unsplash.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/Gf2WbwsN/catalin-dragu-VOHg6-WZe-SJ8-unsplash.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/Q7WGk90w/dharmendra-sahu-Ia2-Kjtrx8y4-unsplash.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/ksRQ5ctx/aman-shrestha-vi5tkym8r64-unsplash.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <h1 className="font-bold text-4xl mb-5 pb-2 border-accent animate-pulse text-center">Let's travel and explore the world</h1>
            {/* Cards below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto w-10/12 mx-auto">
                {cardData.map((cardInfo) => (
                    <AdventureCard key={cardInfo.id} cardInfo={cardInfo} />
                ))}
            </div>
        </div>
    );
};

export default Home;
