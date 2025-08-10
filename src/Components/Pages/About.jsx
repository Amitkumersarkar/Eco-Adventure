import { NavLink } from "react-router-dom";

const About = () => {
    const cards = [
        {
            title: "Innovative Design",
            description: "Our designs are modern, clean, and user-friendly.",
            btnText: "Learn More",
        },
        {
            title: "Fast Performance",
            description: "Optimized for speed and efficiency in every interaction.",
            btnText: "See Details",
        },
        {
            title: "Reliable Support",
            description: "We provide 24/7 customer support to help you anytime.",
            btnText: "Contact Us",
        },
        {
            title: "Secure Solutions",
            description: "Your data and privacy are our top priority.",
            btnText: "Get Started",
        },
    ];

    return (
        <section className="max-w-7xl bg-white mx-auto mt-10 px-6 py-12">
            <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
                Here are the interesting facts <br /> we are proud of.
            </h1>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {cards.map(({ title, description, btnText }, idx) => (
                    <div
                        key={idx}
                        className="card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <div className="card-body p-6">
                            <h2 className="card-title text-xl font-semibold mb-3 text-indigo-600">
                                {title}
                            </h2>
                            <p className="text-gray-700 mb-6">{description}</p>
                            <div className="card-actions">
                                <NavLink to='/error'>
                                    <button className="btn btn-indigo bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors duration-300">
                                        {btnText}
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
