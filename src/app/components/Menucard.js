

import { useState } from 'react';

export default function MenuCard({ item, onAddToCart, onQuantityChange }) {
  const [quantity, setQuantity] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const handleAddToCartClick = () => {
    setQuantity(1);
    onAddToCart(item);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(prev + amount, 0));
    onQuantityChange(item.id, amount);
  };

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className="card w-60 m-4 p-4 relative group transition-all duration-300 hover:shadow-lg hover:shadow-slate-600">
      <img
        src={item.photo}
        alt={item.item_name}
        className="w-full h-40 object-cover"
      />
      <h3 className="text-lg font-semibold mt-2 text-green-500 font-mono">
        {item.item_name}
      </h3>

      {/* Toggle Description Button */}
      <button
        onClick={toggleDescription}
        className="bg-green-500 text-white py-1 px-3 mt-2 rounded-md font-medium"
      >
        {showDescription ? "Hide Details" : "Show Details"}
      </button>

      {/* Conditional Rendering of Description */}
      {showDescription && (
        <h3 className="text-sm font-semibold mt-2 text-green-500 font-mono">
          {item.description}
        </h3>
      )}

      <h3 className="text-sm font-semibold mt-2 text-green-500 font-mono">
        Category: {item.category}
      </h3>

      <div className="flex justify-between items-center pt-4">
        <h2 className="text-md font-bold text-gray-700">₹{item.amount}</h2>
      </div>

      {/* Add to Cart / Quantity Adjustment Section */}
      {quantity === 0 ? (
        <button
          onClick={handleAddToCartClick}
          className="bg-yellow-300 rounded-md px-4 py-2 mt-4 w-full"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="bg-red-500 text-white px-2 rounded-l"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="bg-green-500 text-white px-2 rounded-r"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
