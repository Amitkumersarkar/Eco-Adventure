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
            <h1 className="font-bold text-4xl mb-5 pb-2 border-accent animate-pulse text-center">Let's travel and explore the world !</h1>
            {/* Cards below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto w-10/12 mx-auto">
                {cardData.map((cardInfo) => (
                    <AdventureCard key={cardInfo.id} cardInfo={cardInfo} />
                ))}
            </div>
            <div className="flex justify-between items-center">
                <div className="">
                    <div className="text-2xl font-bold mt-5 pb-3 ">
                        <h1>Choose Tour Types</h1>
                    </div>
                    <p className="text-gray-400">Live love and explore around the world</p>
                </div>
                <div>
                    <button className="btn btn-primary">View All</button>
                </div>
            </div>
            {/* card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
