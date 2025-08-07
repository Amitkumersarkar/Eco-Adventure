import { NavLink } from "react-router-dom";

const UserRegister = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Full Name</label>
                            <input name="full name" type="text" className="input" placeholder="Full Name" />
                            <label className="label">User Name</label>
                            <input name="user name" type="text" className="input" placeholder="User Name" />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className="text-center font-semibold mt-4">All ready have an accounts ! <NavLink to="/login"><span className="font-bold text-cyan-600">LogIn</span></NavLink></p>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;