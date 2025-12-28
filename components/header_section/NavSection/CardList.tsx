"use client";
import { selectCard } from "@/redux/features/profile";
import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CardList = () => {
  const count = useSelector(selectCard);

  const cardList = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/add-to-card`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);
  };

  // me();

  return (
    <div
      onClick={cardList}
      className="relative flex items-center gap-1 cursor-pointer text-gray-700 hover:text-orange-500"
    >
      <FaShoppingCart />
      <span>Cart</span>
      <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs rounded-full px-1">
        {count}
      </span>
    </div>
  );
};

export default CardList;
