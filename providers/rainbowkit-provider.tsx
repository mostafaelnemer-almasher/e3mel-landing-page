"use client";

import { wagmiConfig } from "@/config/wagmi";
import React from "react";
import { cookieToInitialState, WagmiProvider } from "wagmi";
import QueryProvider from "./query-provider";
import { RainbowKitProvider as NextRainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

interface RainbowKitProviderProps {
  children: React.ReactNode;
  cookie: string;
}

const RainbowKitProvider = ({ children, cookie }: RainbowKitProviderProps) => {
  const initialState = cookieToInitialState(wagmiConfig, cookie);

  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryProvider>
        <NextRainbowKitProvider>{children}</NextRainbowKitProvider>
      </QueryProvider>
    </WagmiProvider>
  );
};

export default RainbowKitProvider;
