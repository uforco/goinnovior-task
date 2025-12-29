// store/cart/cart.thunk.ts
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartQty = createAsyncThunk<{ quantity: number }>(
  "cart/fetchCartQty",
  async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/add-to-card/qty`,
      {
        credentials: "include",
      }
    );

    console.log('call the thunk');
    
    if (!res.ok) {
      throw new Error("Failed to fetch cart");
    }

    return res.json();
  }
);
