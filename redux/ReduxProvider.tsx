"use client";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import AuthMe from "@/components/auth_components/AuthMe";
import { setupListeners } from "@reduxjs/toolkit/query";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const [storeInstance] = useState(() => store());

  useEffect(() => {
    const unsubscribe = setupListeners(storeInstance.dispatch);
    return unsubscribe;
  }, [storeInstance]);

  return (
    <Provider store={storeInstance}>
      <AuthMe>{children}</AuthMe>
    </Provider>
  );
};

export default ReduxProvider;
