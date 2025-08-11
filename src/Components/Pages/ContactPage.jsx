import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        toast.success("Thanks For Messaging! 📩", { position: "top-center" });

        // Clear form fields
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen font-semibold bg-white mt-10 px-6 py-12">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-primary mb-6">📬 Contact Us</h2>
                <p className="text-center text-gray-600 mb-10">
                    We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <div className="bg-base-100 p-8 rounded-xl shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="label">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="label">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="textarea textarea-bordered w-full"
                                rows="5"
                                placeholder="Type your message here..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">
                            Send Message
                        </button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
