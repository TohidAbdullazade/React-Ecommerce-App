import React from "react";
import {  Link } from "react-router-dom";
import Header from "./Header";



const Product = ({ card }) => {
  return (
    <>

      <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <div className="image flex justify-center">
          <img src={card.image} className="w-40" />
        </div>
        <div className="px-4 my-6">
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="mt-2 text-sm text-gray-400">{card.description}</p>
          <Link to={`/product-detail/${card.id}`}>
            <button
              type="button"
              className="px-6 py-2 mt-4 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              View
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
