import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { initialProducts } from "../Data/Product";
import { Link } from "react-router-dom";
import { ChevronLeft,Tag,Zap,ShoppingCart } from "lucide-react";
import Loading from "../components/Loading";
const ProductDetails = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState(null);
  useEffect(() => {
    setProduct(initialProducts.find((data) => data.id == id));
  }, [id]);
  if (!Product) {
    return <Loading />;
  }
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen cursor-pointer rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
        <Link to={"/"}>
          <button className="flex justify-center items-center text-gray-400 hover:text-orange-400 transition duration-150  mb-12 font-semibold text-lg">
            <ChevronLeft className="w-6 h-6 mr-1"></ChevronLeft>
            <span> Back to All Products</span>
          </button>
        </Link>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-1">
          <div>
            <img
              src={Product.image}
              alt={Product.name}
              className="w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight tracking-tighter">{Product.name}</h1>
            </div>
            <p className="text-3xl font-extrabold text-orange-400 mb-4">₹{Product.price.toFixed(2)}</p>
            <h2 className="flex text-xl text-gray-200 mb-2 border-b border-orange-900/50 pb-2 items-center space-x-2 font-bold">
              <Tag className="h-5 w-5 text-orange-500"></Tag>
              <span className="">Product Overview</span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-3 ">{Product.description}</p>
            <ul className="space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <li className="space-x-3 flex items-center text-lg">
                <Zap className="w-5 h-5 text-orange-500"></Zap>
                <span>High-Quality,Professional Grade Materials</span>
              </li>
               <li className="space-x-3 flex items-center text-lg">
                <Zap className="w-5 h-5 text-orange-500"></Zap>
                <span>Comprehensive 1-Year Manufacturer Warranty</span>
              </li>
               <li className="space-x-3 flex items-center text-lg">
                <Zap className="w-5 h-5 text-orange-500"></Zap>
                <span>Immediate Shipping for In Stock Items</span>
              </li>
             
            </ul>
          <div className="mt-5 space-y-4 flex justify-center items-center flex-col">
          <button className="flex py-3 font-bold w-full  rounded-full shadow-lg shadow-orange-800/50 hover:bg-orange-700 transition duration-300 items-center space-x-2 justify-center transform hover:ring-4 hover:ring-pink-600/40 uppercase tracking-wider bg-orange-600 cursor-pointer">
          <ShoppingCart className="w-5 h-5 font-extrabold"></ShoppingCart>
          <span>Add to Cart</span>
        </button>
        <Link to={'/'} className="flex py-3  font-bold w-full border-2 border-orange-600 text-orange-400 rounded-full  hover:bg-orange-700 hover:text-white transition duration-300 items-center space-x-2 justify-center transform hover:ring-4 hover:ring-pink-600/40 uppercase tracking-wider cursor-pointer">
        Keep Shopping
        </Link>
          </div>

          </div>
          
        </div>

      </div>
    </>
  );
};

export default ProductDetails;
