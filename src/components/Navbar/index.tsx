// filepath: /Users/rapidzz/Desktop/reactapp/appliance/my-nextjs-app/src/components/Navbar/index.tsx
"use client";
import Link  from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4  ">
      <ul className="flex space-x-4 text-black  justify-between px-4">
        <div>
          <span>Appliance Repair</span>
        </div>
        <div className="flex space-x-4 text-black  justify-end">
          <li className="px-8">
            <Link href="#about" scroll={true} className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li className="px-8">
            <Link href="#service" scroll={true} className="hover:text-gray-400">
              Service
            </Link>
          </li>
          <li className="px-8">
            <Link
              href="#testimonials"
              scroll={true}
              className="hover:text-gray-400"
            >
              Testimonials
            </Link>
          </li>
          <li className="px-8">
            <Link href="#faqs" scroll={true} className="hover:text-gray-400">
              Faqs
            </Link>
          </li>
          <li className="px-8">
            <Link href="#contact" scroll={true} className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
