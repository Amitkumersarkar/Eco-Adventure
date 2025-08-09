import { useLoaderData } from "react-router-dom";
import AdventureCard from "./AdventureCard";
const Home = () => {
    const cardData = useLoaderData();
    console.log(cardData);

    return (

        <div>

            {/* Carousel */}
            {/* Carousel */}
            <div className="carousel w-full overflow-auto mb-10 mt-10">
                {[
                    "https://i.ibb.co.com/4gWVYrM5/6952269.jpg",
                    "https://i.ibb.co.com/tpwPCRXV/side-view-woman-posing-luggage-while-holding-travel-essentials.jpg",
                    "https://i.ibb.co.com/PGFjgbnr/travel-explore-global-destination-trip-adventure-concept.jpg",
                    "https://i.ibb.co.com/Kj9wQvph/leandra-rieger-GMD5-Wu7n-v4-unsplash.jpg",
                ].map((src, index) => (
                    <div
                        key={index}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full"
                    >
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full max-w-full h-[400px] md:h-[500px] lg:h-[650px] object-cover"
                        />
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a
                                href={`#slide${index === 0 ? 4 : index}`}
                                className="btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${index === 3 ? 1 : index + 2}`}
                                className="btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {/* carousel end*/}
            <h1 className="font-bold text-4xl mb-5 pb-2 border-accent animate-pulse text-center">Let's travel and explore the world !</h1>
            {/* Cards below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto w-10/12 mx-auto">
                {cardData.map((cardInfo) => (
                    <AdventureCard key={cardInfo.id} cardInfo={cardInfo} />
                ))}
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="text-4xl font-bold mt-5 pb-3 text-center">
                        <h1>Choose Tour Types</h1>
                    </div>
                    <p className="text-gray-400 text-center font-semibold">Live love and explore.</p>
                </div>
                {/* <div>
                    <button className="btn btn-primary">View All</button>
                </div> */}
            </div>
            {/* card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/rGjfqPNT/deer-2009290.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">WildLife Tour</h2>
                        <p>Experience the majesty of the wilderness without compromising on comfort and style. Our exclusive wildlife tours offer a sophisticated and intimate way to connect with nature. Stay in hand-picked luxury lodges and tented camps, where five-star service meets breathtaking views of the wild.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">CheckOut Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/WhtkGPZ/indonesia-14055411.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Museum Tour</h2>
                        <p>Get ready for a unique tour that perfectly blends cultural immersion with heart-pounding adventure. Our exclusive Museum and Adventure Tour is designed for those who want to do more than just see the sights—they want to live them. We’ll take you from the hallowed halls of Dhaka National Museum to the exhilarating landscapes that shaped our history.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">CheckOut Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/MDHMxxs1/hiking-901850.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Adventure Tour</h2>
                        <p>
                            Your adventure begins with a deep dive into the past. Our expert historians will guide you through the priceless artifacts and captivating stories of [Era or historical topic, e.g., the Roman Empire, ancient Egypt, indigenous cultures]. You'll gain a profound understanding of the people and events that built this region.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">CheckOut Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
