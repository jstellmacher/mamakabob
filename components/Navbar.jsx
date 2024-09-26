// components/Navbar.jsx
"use client"; // Add this line to make the component a Client Component

export default function Navbar() {
    const handleNavigation = (url) => {
        window.location.href = url; // Redirect to the specified URL
    };

    return (
      <nav className="fixed top-0 left-0 w-full p-4 bg-white/30 backdrop-blur-md border-b border-gray-200 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-900">MamaKabob</a>
          <ul className="flex space-x-4">
            <li>
              <button 
                className="text-gray-900 bg-gray-200 rounded px-4 py-2 transition duration-300 ease-in-out transform hover:bg-red-600 hover:text-white hover:scale-105"
                onClick={() => handleNavigation('/events')}
              >
                Events
              </button>
            </li>
            <li>
              <button 
                className="text-gray-900 bg-gray-200 rounded px-4 py-2 transition duration-300 ease-in-out transform hover:bg-red-600 hover:text-white hover:scale-105"
                onClick={() => handleNavigation('/contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
