"use client"

import Image from 'next/image';
import { useState } from 'react';
import foodItems from '../../public/data/foodItems.json'; // Adjusted path

const images = [
  'https://picsum.photos/800/400?random=1',
  'https://picsum.photos/800/400?random=2',
  'https://picsum.photos/800/400?random=3',
];

export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative min-h-screen p-4 pt-20">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Our Menu</h1>

      {/* Note about images */}
      <p className="text-center text-gray-500 mb-4">Please note that menu images are currently being updated and may not be available yet.</p>
      
      {/* Slideshow Section */}
      <div className="relative mb-8">
        <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
          Prev
        </button>
        <Image 
          src={images[currentIndex]} 
          alt="Menu Item" 
          width={800} 
          height={400} 
          className="rounded-md mx-auto"
        />
        <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
          Next
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map(item => (
          <div key={item.id} className="bg-gray-900 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col items-center">
            <Image 
              src={item.image} // Using the new image field
              alt={item.name} 
              width={400} 
              height={300} 
              className="rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2 text-white text-center">{item.name}</h3>
            <p className="text-gray-300 text-center">{item.description}</p>
            <p className="text-red-500 font-bold mt-2">${item.price.toFixed(2)}</p> {/* Displaying price */}
          </div>
        ))}
      </div>
    </div>
  );
}