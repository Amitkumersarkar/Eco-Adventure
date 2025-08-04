
const Register = () => {

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-6 px-4">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold text-blue-800">Register Now !</h1>
                    <p className="py-6 text-gray-500">
                        Please register to your account to access your dashboard and continue exploring.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form >
                        <div className="card-body space-y-4">
                            <fieldset className="fieldset">
                                <label className="label font-semibold text-cyan-600">Full Name</label>
                                <input type="text" name="name" className="input" placeholder="Full Name" />
                                <label className="label font-semibold text-cyan-600">User Name</label>
                                <input type="text" name="name" className="input" placeholder="User Name" />
                                <label className="label  font-semibold text-cyan-600">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label  font-semibold text-cyan-600">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover text-red-700">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Sign Up</button>
                                <p className="text-center font-semibold">
                                    All Ready Have An Account ? <span className="text-green-700 font-bold"><Link to='login'>LogIn</Link></span> First
                                </p>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;