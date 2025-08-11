import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const UserRegister = () => {
    const { handleRegister } = useContext(authContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.userName.trim()) {
            newErrors.userName = "User name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        handleRegister(formData.email, formData.password)
            .then(() => {
                alert("Registration successful! Please login.");
                navigate("/login");
            })
            .catch((error) => {
                alert("Registration failed: " + error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen mt-10">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset space-y-4">
                            <div>
                                <label className="label">Full Name</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    className="input"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                {errors.fullName && (
                                    <p className="text-red-600 text-sm">{errors.fullName}</p>
                                )}
                            </div>

                            <div>
                                <label className="label">User Name</label>
                                <input
                                    name="userName"
                                    type="text"
                                    className="input"
                                    placeholder="User Name"
                                    value={formData.userName}
                                    onChange={handleChange}
                                />
                                {errors.userName && (
                                    <p className="text-red-600 text-sm">{errors.userName}</p>
                                )}
                            </div>

                            <div>
                                <label className="label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <p className="text-red-600 text-sm">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="label">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && (
                                    <p className="text-red-600 text-sm">{errors.password}</p>
                                )}
                            </div>

                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>

                            <button type="submit" className="btn btn-neutral mt-4">
                                Register
                            </button>

                            <p className="text-center font-semibold mt-4">
                                Already have an account?{" "}
                                <NavLink to="/login">
                                    <span className="font-bold text-cyan-600">Login</span>
                                </NavLink>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
