"use client";
import React, { ReactNode } from "react";
import Navbar from "../Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
    </>
  );
};

export default MainLayout;
