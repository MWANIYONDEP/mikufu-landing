"use client";

import React from "react";
import Image from "next/image";

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

import Link from "next/link";

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Home Page
      </Link>
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {chains.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 text-center">
            <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto mb-4 rounded-md" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="font-semibold mb-2">Price: TZS {product.price.toLocaleString()}</p>
            <div className="border-t pt-2 mt-2 text-sm text-gray-600">
              <p>Phone: 0788427479</p>
              <p>Email: mwaniyondepriska@gmail.com</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
