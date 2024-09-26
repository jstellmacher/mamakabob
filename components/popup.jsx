"use client"; // Ensure this is a Client Component

import { useState } from 'react';

export default function Page() {
    const [isOpen, setIsOpen] = useState(true); // State to control popup visibility

    const closePopup = () => {
        setIsOpen(false); // Close the popup
    };

    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Important Notice</h2>
                        <p className="mb-4">
                            To enhance your privacy, we have removed certain sensitive data from this site. 
                            We appreciate your understanding as we prioritize your security.
                        </p>
                        <button 
                            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300"
                            onClick={closePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}