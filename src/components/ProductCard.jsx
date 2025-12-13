import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
const ProductCard = ({product}) => {
  return (
    <>
      <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition duration-500 transform border-gray-800  group hover:scale-[1.03] hover:shadow-orange-900/40">
        <Link to={`/product/${product.id}`} className="relative cursor-pointer overflow-hidden ">
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:opacity-90" />
        <div className="absolute bottom-0 left-0 bg-orange-600/95 text-white px-5 py-2 text-xl font-extrabold rounded-tr-xl shadow-lg">
        ₹{product.price.toFixed(2)}
        </div>
        </Link>
        <div className="p-5 flex flex-col grow">
        <Link to={`/product/${product.id}`}>
        <h3 className="font-extrabold text-2xl text-white mb-2 cursor-pointer hover:text-orange-400 transition duration-200 line-clamp-1 ">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-400  line-clamp-3 grow">{product.description}</p>
        </div>
        <div className="flex items-center text-gray-500 text-xs mb-4 ml-5">
          <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full font-semibold">{product.category}</span>
        </div>
        <button className="flex mx-auto py-3 font-bold w-full  rounded-full shadow-lg shadow-orange-800/50 hover:bg-orange-700 transition duration-300 items-center space-x-2 justify-center transform hover:ring-4 hover:ring-pink-600/40 uppercase tracking-wider bg-orange-600 cursor-pointer">
          <ShoppingCart className="w-5 h-5 font-extrabold"></ShoppingCart>
          <span>Add to Cart</span>
        </button>
      </div>
    </>
  );
};

export default ProductCard;
