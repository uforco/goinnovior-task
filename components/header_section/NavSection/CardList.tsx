"use client";
import { fetchCartQty } from "@/redux/asyncThunk/cardQty";
import { selectCard } from "@/redux/features/profile";
import { AppDispatch } from "@/redux/store";
import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const CardList = () => {
  const count = useSelector(selectCard);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCartQty());
  }, [dispatch]);

  return (
    <div className="relative flex items-center gap-1 cursor-pointer text-gray-700 hover:text-orange-500">
      <FaShoppingCart />
      <span>Cart</span>
      <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs rounded-full px-1">
        {count}
      </span>
    </div>
  );
};

export default CardList;
