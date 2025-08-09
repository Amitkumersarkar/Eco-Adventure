
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-md">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <a
                href="/"
                className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
            >
                Back to Home
            </a>
        </div>
    );
};

export default ErrorPage;