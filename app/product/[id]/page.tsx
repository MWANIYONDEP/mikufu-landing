import Image from "next/image";
import Link from "next/link";

// Product data
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


interface Params {
  id: string;
}

// Must be async in app dir if using route params
export default async function ProductPage({ params }: { params: Params }) {
  const id = parseInt(params.id, 10);
  const product = chains.find((chain) => chain.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Home Page
      </Link>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
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
