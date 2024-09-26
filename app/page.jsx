"use client"; // This must be the first line in the file

import { useState, useEffect } from 'react'; // Ensure useState and useEffect are imported
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYelp } from 'react-icons/fa'; // Importing icons

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // State to control popup visibility

  useEffect(() => {
    const fetchFoodItems = async () => {
      const response = await fetch('/data/foodItems.json'); // Fetching from public directory
      const data = await response.json();
      setFoodItems(data);
    };

    fetchFoodItems();
  }, []);

  const closePopup = () => {
    setIsOpen(false); // Close the popup
  };

  return (
    <div className="relative min-h-screen bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/pexels-thirdman-5675781.jpg')" }}>
      {/* Popup for sensitive data notice */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Update</h2>
            <p className="mb-4 text-gray-600">
              We wanted to inform you that certain features previously available on this site have been removed. This decision was made due to non-payment from a client, which affected our ability to maintain those features.
            </p>
            <p className="mb-6 text-gray-600">
              The removed features included communication tools for potential clients and automated notifications. Despite these changes, we are committed to providing a seamless experience and appreciate your understanding.
            </p>
            <button 
              className="bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition duration-300"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Full-width hero image */}
      <div className="relative h-[calc(100vh-4rem)] bg-cover bg-center" style={{ backgroundImage: "url('/images/pexels-thirdman-5675781.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <Image 
          src="/images/pexels-thirdman-5675781.jpg" 
          alt="MamaKabob Food Truck" 
          layout="fill" 
          objectFit="cover" 
          priority 
          className="absolute inset-0"
        />
        {/* Overlay for text card */}
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-lg mx-4 sm:mx-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-red-600">Welcome to MamaKabob</h1>
            <p className="text-lg mb-6 text-gray-800">
              The best food truck in town! Let us cater your next event.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 sm:justify-center">
              <a href="/events" className="px-6 py-3 bg-red-500 text-white rounded-md text-center hover:bg-red-600 transition duration-300">
                Book Us for Your Event
              </a>
              <a href="/contact" className="px-6 py-3 bg-red-500 text-white rounded-md text-center hover:bg-red-600 transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* New white card containing all the content */}
      <div className="container mx-auto px-4 py-8 mt-16 bg-white rounded-lg shadow-lg">
        {/* Menu Preview */}
        <section className="py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Featured Dishes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map(item => (
              <div key={item.id} className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"> 
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  width={400} 
                  height={300} 
                  className="rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2 text-white text-center">{item.name}</h3>
                <p className="text-gray-300 text-center">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/menu" className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">View Full Menu</a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-red-600">What Our Customers Say</h2>
          </div>
          <blockquote className="bg-gray-800 p-6 rounded-lg shadow-md text-center max-w-3xl mx-auto"> 
            <p className="text-lg italic text-white">&quot;Best food truck experience ever! The kebabs are out of this world.&quot;</p>
            <footer className="mt-4 text-gray-300">— Jimmy John</footer>
          </blockquote>
        </section>

        {/* Social Media Links */}
        <section className="py-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Follow Us</h2>
          <div className="flex justify-center gap-6">
            <a href="https://facebook.com/mamakabob" className="text-red-500 hover:text-red-600 transition duration-300">
              <FaFacebookF className="text-4xl" />  
            </a>
            <a href="https://instagram.com/mamakabob" className="text-red-500 hover:text-red-600 transition duration-300">
              <FaInstagram className="text-4xl" />  
            </a>
            <a href="https://yelp.com/mamakabob" className="text-red-500 hover:text-red-600 transition duration-300">
              <FaYelp className="text-4xl" />  
            </a>
          </div>
        </section>

        {/* Operating Hours and Location */}
        <section className="py-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Operating Hours & Location</h2>
          <p className="text-lg text-gray-800 mb-2">Monday - Friday: 11 AM - 9 PM</p>
          <p className="text-lg text-gray-800 mb-2">Saturday - Sunday: 12 PM - 8 PM</p>
          <p className="text-lg text-gray-800">123 Food Truck Lane, Flavor Town, USA</p>
        </section>
      </div>
    </div>
  );
}
