import { NavLink, useLoaderData } from "react-router-dom";
import AdventureCard from "./AdventureCard";
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const notify = () => toast("Thanks For Checking Out");
    const cardData = useLoaderData();

    return (
        <div className="px-4 md:px-8 lg:px-16">
            {/* Carousel */}
            <div className="carousel w-full overflow-hidden mb-10 mt-10 rounded-xl">
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
                            className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover"
                        />
                        <div className="absolute left-3 right-3 sm:left-5 sm:right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href={`#slide${index === 0 ? 4 : index}`} className="btn btn-circle btn-sm sm:btn-md">❮</a>
                            <a href={`#slide${index === 3 ? 1 : index + 2}`} className="btn btn-circle btn-sm sm:btn-md">❯</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Heading */}
            <h1 className="font-bold text-2xl sm:text-4xl mb-5 pb-2 border-accent animate-pulse text-center">
                Let's travel and explore the world!
            </h1>

            {/* Adventure Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
                {cardData.map((cardInfo) => (
                    <AdventureCard key={cardInfo.id} cardInfo={cardInfo} />
                ))}
            </div>

            {/* Section Heading */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl sm:text-4xl font-bold pb-3">Choose Tour Types</h1>
                    <p className="text-gray-500 font-semibold">Live, love, and explore.</p>
                </div>
                <NavLink to='/explore'>
                    <button className="btn btn-primary w-full sm:w-auto">Explore More</button>
                </NavLink>
            </div>

            {/* Static Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[
                    {
                        img: "https://i.ibb.co.com/rGjfqPNT/deer-2009290.png",
                        title: "WildLife Tour",
                        desc: "Experience the majesty of the wilderness without compromising on comfort..."
                    },
                    {
                        img: "https://i.ibb.co.com/WhtkGPZ/indonesia-14055411.png",
                        title: "Museum Tour",
                        desc: "Get ready for a unique tour that blends cultural immersion with adventure..."
                    },
                    {
                        img: "https://i.ibb.co.com/MDHMxxs1/hiking-901850.png",
                        title: "Adventure Tour",
                        desc: "Your adventure begins with a deep dive into the past with expert historians..."
                    }
                ].map((item, index) => (
                    <div key={index} className="card bg-base-100 shadow-sm w-full">
                        <figure className="px-6 pt-6">
                            <img src={item.img} alt={item.title} className="rounded-xl w-32 h-32 object-contain" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{item.title}</h2>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                            <div className="card-actions mt-4">
                                <NavLink to='/explore'>
                                    <button onClick={notify} className="btn btn-primary w-full">CheckOut Now</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ToastContainer />
        </div>
    );
};

export default Home;
