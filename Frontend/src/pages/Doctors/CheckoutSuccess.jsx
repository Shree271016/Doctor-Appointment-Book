

import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 md:mx-auto shadow-lg rounded-lg max-w-md">
                {/* Success Icon */}
                <div className="flex justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>

                <div className="text-center mt-4">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold">Payment Done!</h3>
                    <p className="text-gray-600 my-2">
                        Thank you for completing your secure online payment.
                    </p>
                    <p>Have a great day!</p>

                    <div className="py-6">
                        <Link
                            to="/"
                            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
                        >
                            Go Back To Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess;
