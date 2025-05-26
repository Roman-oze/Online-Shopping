// components/ProductList.jsx
import image1 from "../assets/image/image 1.png"
import image2 from "../assets/image/image 10-1.png"
import image3 from "../assets/image/image 10-2.png"
import image4 from "../assets/image/image 7-1.png"
import image5 from "../assets/image/image 8-2.png"
import image6 from "../assets/image/image 8.png"
import image7 from "../assets/image/image 9-1.png"
import image8 from "../assets/image/image 9-2.png"
import image9 from "../assets/image/image 9.png"
import ProductCard from "./ProductCard";
import OrderSummary from "./OrderSummary";
import CardSidebar from "./CardSideBar";

export default function ProductList() {
    const products = [
    {
      id: 1,
      title: "Gradient Graphic T-shirt",
      image: image1,
      rating: 4,
      total: 5,
      stock: 212,
      price: 145,
      discountedPrice: null,
      buttonText: "Remove from Cart",
      buttonStyle: "bg-red-800",
      disabled: false,
    },
    {
      id: 2,
      title: "Polo with Tipping Details",
      image: image2,
      rating: 1,
      total: 5,
      stock: 320,
      price: 180,
      discountedPrice: null,
      buttonText: "Add to Cart",
      buttonStyle: "bg-gray-800",
      disabled: false,
    },
    {
      id: 3,
      title: "Black Striped T-shirt",
      image: image3,
      rating: 3,
      total: 5,
      stock: 420,
      price: 120,
      discountedPrice: 160,
      buttonText: "Add to Cart",
      buttonStyle: "bg-gray-800",
      disabled: true,
    },
    {
      id: 4,
      title: "Skinny Fit Jeans",
      image: image4,
      rating: 4,
      total: 5,
      stock: 20,
      price: 240,
      discountedPrice: 260,
      buttonText: "Add to Cart",
      buttonStyle: "bg-gray-800",
      disabled: false,
    },
    {
      id: 5,
      title: "Checkered Shirt",
      image: image5,
      rating: 4,
      total: 5,
      stock: 20,
      price: 180,
      discountedPrice: null,
      buttonText: "Add to Cart",
      buttonStyle: "bg-gray-800",
      disabled: false,
    },
    {
      id: 6,
      title: "Sleeve Striped T-shirt",
      image: image6,
      rating: 4,
      total: 5,
      stock: 150,
      price: 130,
      discountedPrice: 150,
      buttonText: "Add to Cart",
      buttonStyle: "bg-gray-800",
      disabled: false,
    },
    {
      id: 7,
      title: "Vertical Striped Shirt",
      image: image7,
      rating: 4,
      total: 5,
      stock: 20,
      price: 212,
      discountedPrice: 232,
      buttonText: "Add to Cart",
      buttonStyle: "bg-gray-800",
      disabled: false,
    },
    {
      id: 8,
      title: "Courage Graphic T-shirt",
      image: image8,
      rating: 4/5,
      total: 5,
      stock: 20,
      price: 145,
      discountedPrice:null,
      buttonText: "Add to Cart",
      buttonStyle: "bg-gray-800",
      disabled: false,
    },
    {
      id: 9,
      title: "Loose Fit Bermuda Shorts",
      image: image9,
      rating: 4.5/5,
      total: 5,
      stock: 10,
      price: 80,
      discountedPrice: null,
      buttonText: "Add to Cart",
      buttonStyle: "bg-gray-800",
      disabled: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Products</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Sort by:</span>
            <select className="border rounded-md px-2 py-1 text-sm">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}


        </div>
      </div>

      <div>
        <CardSidebar />
      </div>
    </div>
  );
}
