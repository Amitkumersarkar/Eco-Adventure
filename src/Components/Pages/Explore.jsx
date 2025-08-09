import { useEffect, useState } from "react";
import ExploreCard from "./ExploreCard";

const Explore = () => {
    const [explore, setExplore] = useState([]);
    useEffect(() => {
        fetch('/ExploreData.json')
            .then(res => res.json())
            .then(data => setExplore(data));
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 overflow-auto">
            {
                explore.map((exploreData) => <ExploreCard key={exploreData.id} exploreData={exploreData}></ExploreCard>)
            }
        </div>
    );
};

export default Explore;