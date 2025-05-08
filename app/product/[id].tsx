"use client";

import React from "react";
import Image from "next/image";

// Data for the chains
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

// Type for params
interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  // Convert the string id to an integer
  const id = parseInt(params.id, 10);

  // Find the product by ID
  const product = chains.find((chain) => chain.id === id);

  // If the product is not found, return an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      {/* Ensure the Image component is used correctly with Next.js */}
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-md mb-4"
      />
      <p className="mb-4">{product.description}</p>
      <div className="bg-gray-100 p-4 rounded-md text-lg font-semibold">
        Price: TZS {product.price.toLocaleString()}
      </div>
      <div className="mt-6 p-4 border-t border-gray-300">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p>Phone: 0788427479</p>
        <p>Email: mwaniyondepriska@gmail.com</p>
      </div>
    </div>
  );
}
