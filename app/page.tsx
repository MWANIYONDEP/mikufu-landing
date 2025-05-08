"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const chains = [
  {
    id: 1,
    name: "Classic Gold Chain",
    description: "Elegant and timeless gold chain perfect for any occasion.",
    image: "/images/gold.jpg",
    price: 50000,
  },
  {
    id: 2,
    name: "Silver Rope Chain",
    description: "Durable and stylish silver rope chain for everyday wear.",
    image: "/images/silver.jpg",
    price: 40000,
  },
  {
    id: 3,
    name: "Diamond Cut Chain",
    description: "Sparkling diamond cut chain that shines brilliantly.",
    image: "/images/diamond.jpg",
    price: 120000,
  },
  {
    id: 4,
    name: "Modern Stainless Steel Chain",
    description: "Sleek and modern stainless steel chain with a polished finish.",
    image: "/images/diamond steel.jpg",
    price: 35000,
  },
];

export default function Home() {
  const router = useRouter();

  const handleImageClick = (id: number) => {
    router.push(`/product/${id}`);
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
          <a href="/products" className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-pink-600 hover:text-white transition-colors duration-300">
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
            <div key={chain.id} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 text-center text-gray-900 cursor-pointer" onClick={() => handleImageClick(chain.id)}>
              <Image src={chain.image} alt={chain.name} width={200} height={200} className="mx-auto mb-4 rounded-md" />
              <h2 className="text-xl font-semibold mb-2">{chain.name}</h2>
              <p className="text-gray-600">{chain.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About Us</h2>
          <p className="text-gray-700 mb-4">
            We sell elegant and stylish chains including gold, silver, diamond cut, and stainless steel chains.
          </p>
          <p className="text-gray-700 mb-4">
            Our store is located in Mbeya, and we proudly deliver our products and services around Mbeya and throughout Tanzania.
          </p>
        </div>
      </section>
      {/* Contact Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
          <p className="text-gray-700 mb-2">Phone: 0788427479 or 0616692533</p>
          <p className="text-gray-700">Email: <a href="mailto:mwaniyondepriska@gmail.com" className="text-pink-600 hover:underline">mwaniyondepriska@gmail.com</a></p>
        </div>
      </section>
    </div>
  );
}
