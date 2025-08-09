import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between navbar bg-cyan-600 rounded-xl shadow-sm text-white">
            <div className="flex justify-between items-center w-[200px] gap-2">
                <div>
                    <img src="https://i.ibb.co.com/v6n37YHX/travelling-2746298.png" alt="" />
                </div>
                <NavLink to='/'>
                    <p className="text-2xl font-bold btn btn-ghost bg-transparent font-mono">TRAVELIA</p>
                </NavLink>
            </div>
            <div >
                <ul className="flex gap-5 font-semibold">
                    <li className="link link-hover"><NavLink to='/'>Home</NavLink></li>
                    <li className="link link-hover"><NavLink to='/explore'>Explore</NavLink></li>
                    <li className="link link-hover"><NavLink to='/hotelService'>Hotel Service</NavLink></li>
                    <li className="link link-hover"><NavLink to='/'>FeedBack</NavLink></li>
                    <li className="link link-hover"><NavLink>Blogs</NavLink></li>
                </ul>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
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