
const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-blue-900 via-purple-800 to-blue-700 text-white p-10 mt-10 animate-fade-in-up">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {/* Services */}
                <nav>
                    <h6 className="footer-title text-lg font-semibold mb-4">Services</h6>
                    <ul className="space-y-2 text-sm">
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">Branding</a></li>
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">Design</a></li>
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">Marketing</a></li>
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">Advertisement</a></li>
                    </ul>
                </nav>

                {/* Company */}
                <nav>
                    <h6 className="footer-title text-lg font-semibold mb-4">Company</h6>
                    <ul className="space-y-2 text-sm">
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">About us</a></li>
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">Contact</a></li>
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">Jobs</a></li>
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">Press kit</a></li>
                    </ul>
                </nav>

                {/* Legal */}
                <nav>
                    <h6 className="footer-title text-lg font-semibold mb-4">Legal</h6>
                    <ul className="space-y-2 text-sm">
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">Terms of use</a></li>
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">Privacy policy</a></li>
                        <li><a className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">Cookie policy</a></li>
                    </ul>
                </nav>

                {/* Newsletter */}
                <form>
                    <h6 className="footer-title text-lg font-semibold mb-4">Newsletter</h6>
                    <label className="block text-sm mb-2">Enter your email address</label>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="input input-bordered rounded-l-md focus:outline-none bg-white text-black w-full"
                        />
                        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-r-md px-4">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-blue-400 pt-4 text-center text-sm text-blue-200">
                © {new Date().getFullYear()} Travelia. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;