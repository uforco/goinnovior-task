"use client";
import React from "react";
import buyicon from "@/public/buyaproducticon.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { incrementCard } from "@/redux/features/profile";
const AddToCardBtn = ({ projectId }: { projectId: string }) => {

    const dispatch = useDispatch()


  const addCard = async () => {
    // Add to cart functionality to be implemented
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/add-to-card/increment`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: projectId,
          quantity: 1,
        }),
      }
    );
    console.log(result);
    if (result.status === 403) {
      alert("Please login to add products to cart");
      window.location.href = "/login";
      return;
    }
    if (!result.ok) {
      alert("Failed to add product to cart");
      return;
    }
    const data = await result.json();
    console.log(data);
    dispatch(incrementCard(data.quantity));
    alert("Product added to cart successfully!");
  };

  return (
    <button
      onClick={addCard}
      className=" w-1/2 px-2 text-sm bg-white border-2 border-teal-500 text-teal-500 font-medium rounded-lg hover:bg-teal-50 transition flex items-center justify-center "
    >
      <Image src={buyicon} alt="Buy Icon" width={20} height={20} />
      <p className=" ml-2 ">Add To Cart</p>
    </button>
  );
};

export default AddToCardBtn;
