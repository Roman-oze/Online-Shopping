import React from "react";
import image1 from "../assets/image/image 1.png"

const CartItem = ({ item, onRemove, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img
          src={image1}
          alt={item.title}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.title}</h3>
          <button
            className="text-red-500 text-sm"
            onClick={() => onRemove(item.id)}
          >
            ×
          </button>
        </div>
        <p className="text-sm text-gray-500">Size: {item.size}</p>
        <p className="text-sm text-gray-500">Color: {item.color}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">${item.price}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onDecrement(item.id)}
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
            >
              −
            </button>
            <span className="text-sm">{item.quantity}</span>
            <button
              onClick={() => onIncrement(item.id)}
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
