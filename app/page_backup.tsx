"use client";

import React from "react";
import Image from "next/image";

const chains = [
  {
    id: 1,
    name: "Classic Gold Chain",
    description: "Elegant and timeless gold chain perfect for any occasion.",
    image: "/images/gold.jpg",
  },
  {
    id: 2,
    name: "Silver Rope Chain",
    description: "Durable and stylish silver rope chain for everyday wear.",
    image: "/images/silver.jpg",
  },
  {
    id: 3,
    name: "Diamond Cut Chain",
    description: "Sparkling diamond cut chain that shines brilliantly.",
    image: "/images/diamond.jpg",
  },
  {
    id: 4,
    name: "Modern Stainless Steel Chain",
    description: "Sleek and modern stainless steel chain with a polished finish.",
    image: "/images/diamond steel.jpg",
  },
];

export default function Home() {
  const handleImageClick = (imageUrl: string) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 text-white py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="overflow-hidden whitespace-nowrap">
            <h1 className="inline-block text-4xl font-extrabold mb-4 drop-shadow-lg animate-marquee">
              Discover Our Exclusive Chains Collection
            </h1>
          </div>
          <p className="text-lg mb-8 drop-shadow-md">Find the perfect chain to match your style and personality.</p>
          <a href="/images" className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-pink-600 hover:text-white transition-colors duration-300">
            Shop Now
          </a>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        `}</style>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {chains.map((chain) => (
            <div key={chain.id} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 text-center text-gray-900 cursor-pointer" onClick={() => handleImageClick(chain.image)}>
              <Image src={chain.image} alt={chain.name} width={200} height={200} className="mx-auto mb-4 rounded-md" />
              <h2 className="text-xl font-semibold mb-2">{chain.name}</h2>
              <p className="text-gray-600">{chain.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
