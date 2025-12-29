"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import AuthMe from "@/components/auth_components/AuthMe";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthMe>{children}</AuthMe>
    </Provider>
  );
};

export default ReduxProvider;
