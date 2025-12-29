"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAccount, setAccount } from "@/redux/features/profile";
const AuthMe: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const me = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        localStorage.removeItem("user");
        dispatch(removeAccount());
        return;
      }
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(setAccount(data));
    };

    me();
  }, [dispatch]); // empty array = run once on mount

  return children;
};

export default AuthMe;
