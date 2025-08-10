import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinkStyles = ({ isActive }) =>
        isActive ? "text-white font-semibold" : "text-gray-400 hover:text-cyan-400";
    return (

        <div className="flex justify-between navbar rounded-xl shadow-sm bg-gradient-to-br from-cyan-400 via-purple-600 to-blue-500 text-white p-2 animate-fade-in-up">
            <div className="flex justify-between items-center w-[200px] gap-2">
                <div>
                    <img src="https://i.ibb.co.com/v6n37YHX/travelling-2746298.png" alt="" />
                </div>
                <NavLink to='/'>
                    <p className="text-3xl font-bold bg-transparent font-mono">TRAVELIA</p>
                </NavLink>
            </div>
            <div >
                <ul className="flex gap-5 font-semibold">
                    <li><NavLink to='/' className={navLinkStyles}>Home</NavLink></li>
                    <li><NavLink to='/about' className={navLinkStyles}>About</NavLink></li>
                    <li><NavLink to='/explore' className={navLinkStyles}>Explore</NavLink></li>
                    <li><NavLink to='/hotelService' className={navLinkStyles}>Hotel Service</NavLink></li>
                    <li><NavLink to='/contact' className={navLinkStyles}>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered text-black bg-white w-24 md:w-auto" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                <NavLink to='/'>
                                    Profile
                                    <span className="badge">New</span>
                                </NavLink>
                            </a>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;