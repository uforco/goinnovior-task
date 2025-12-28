import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CardList = () => {
    return (
        <div className="relative flex items-center gap-1 cursor-pointer text-gray-700 hover:text-orange-500">
              <FaShoppingCart />
              <span>Cart</span>
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs rounded-full px-1">
                0
              </span>
            </div>
    );
};

export default CardList;