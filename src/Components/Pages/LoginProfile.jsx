import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const LoginProfile = () => {
    const {
        user,
        handleLogin,
        handleLoginWithGoogle,
        handleLogOut,
    } = useContext(authContext);

    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        handleLogin(email, password)
            .then((result) => {
                // console.log("Logged in user:", result.user);
                setError("");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                // console.error(err);
                setError(err.message);
            });
    };

    const handleGoogleSignIn = () => {
        handleLoginWithGoogle()
            .then((result) => {
                // console.log("Google user:", result.user);
                setError("");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                // console.error(err);
                setError(err.message);
            });
    };

    const handleLogoutClick = () => {
        handleLogOut()
            .then(() => {
                navigate("/login");
            })
            .catch((err) => {
                // console.error(err);
                setError(err.message);
            });
    };

    // Helper to get display name fallback
    const getDisplayName = () => {
        if (!user) return "";
        if (user.displayName && user.displayName.trim() !== "") {
            return user.displayName;
        }
        if (user.email) {
            return user.email.split("@")[0];
        }
        return "User";
    };

    if (user) {
        return (
            <div className="bg-base-200 min-h-screen flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl text-cyan-700 font-bold mb-4">
                    Welcome, {getDisplayName()}!
                </h1>
                <button
                    onClick={handleLogoutClick}
                    className="btn btn-error text-white text-xl font-semibold"
                >
                    Logout
                </button>
            </div>
        );
    }

    // Login form UI remains unchanged
    return (
        <div className="bg-base-200 min-h-screen flex items-start mt-10 pt-10 px-4">
            <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-5">
                {/* Top Text Section */}
                <div className="text-center">
                    <h1 className="text-5xl text-cyan-700 font-bold">Login Now!</h1>
                    <p className="py-4 text-gray-600">
                        Access your personalized dashboard, track your orders, and manage your gadget preferences all in one place.
                    </p>
                </div>

                {/* Login Form */}
                <div className="card bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <fieldset className="fieldset space-y-4">
                                <div>
                                    <label className="label text-xl text-cyan-700 p-2">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="input input-bordered w-full"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label text-cyan-700 text-xl p-2">Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        className="input input-bordered w-full"
                                        placeholder="Password"
                                        required
                                    />
                                </div>

                                {error && (
                                    <p className="text-red-500 text-center text-sm">{error}</p>
                                )}

                                <div className="text-center">
                                    <a className="link link-hover text-sm">Forgot password?</a>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-ghost text-white text-xl font-semibold bg-cyan-700 w-full"
                                >
                                    Login
                                </button>

                                <button
                                    type="button"
                                    onClick={handleGoogleSignIn}
                                    className="btn border-cyan-700 text-cyan-700 w-full hover:bg-cyan-50"
                                >
                                    Continue with Google
                                </button>

                                <p className="text-center font-semibold">
                                    Don't have an account?{" "}
                                    <NavLink to="/register">
                                        <span className="font-bold text-cyan-600">Register</span>
                                    </NavLink>
                                </p>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginProfile;
