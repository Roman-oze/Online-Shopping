import React from "react";

const ProductCard = ({
  image,
  title,
  rating,
  total,
  stock,
  price,
  discountedPrice,
  buttonText,
  buttonStyle,
  disabled,
}) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-auto object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              {Array.from({ length: rating }, (_, i) => (
                <span key={i}>★</span>
              ))}
              {Array.from({ length: total - rating }, (_, i) => (
                <span key={i} className="text-gray-300">
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              {rating}/{total}
            </span>
          </div>
          <span className="text-xs text-gray-700">({stock} pcs left)</span>
        </div>
        <div className="flex items-center">
          <p className="font-bold">${price}</p>
          {discountedPrice && (
            <p className="text-gray-400 line-through ml-2">${discountedPrice}</p>
          )}
        </div>
        <button
          disabled={disabled}
          className={`w-full mt-2 py-1 text-gray-100 rounded flex items-center justify-center ${buttonStyle} ${
            disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
