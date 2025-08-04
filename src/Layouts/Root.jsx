import { Outlet } from "react-router-dom";
import Navbar from "../Components/Pages/Header/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;