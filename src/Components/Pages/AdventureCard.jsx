const AdventureCard = ({ cardInfo }) => {
    const {
        title,
        image,
        category,
        shortDescription,
        cost,
        location,
        duration,
    } = cardInfo;

    return (
        <div className="card w-full md:w-95 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
            <figure>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-90 object-cover"
                />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 text-sm">{shortDescription}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                    <span className="badge badge-primary">{category}</span>
                    <span className="badge badge-info">{duration}</span>
                    <span className="badge badge-accent">{cost}</span>
                </div>

                <div className="text-right mt-2">
                    <span className="text-xs text-gray-500">📍 {location}</span>
                </div>
            </div>
        </div>
    );
};

export default AdventureCard;
