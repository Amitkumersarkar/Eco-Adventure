const Contact = () => {
    return (
        <div className="min-h-screen bg-white mt-10 px-6 py-12">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-primary mb-6">📬 Contact Us</h2>
                <p className="text-center text-gray-600 mb-10">
                    We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <div className="bg-base-100 p-8 rounded-xl shadow-md">
                    <form className="space-y-6">
                        <div>
                            <label className="label">Your Name</label>
                            <input type="text" placeholder="John Doe" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">Email Address</label>
                            <input type="email" placeholder="example@email.com" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">Message</label>
                            <textarea className="textarea textarea-bordered w-full" rows="5" placeholder="Type your message here..."></textarea>
                        </div>
                        <button className="btn btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;