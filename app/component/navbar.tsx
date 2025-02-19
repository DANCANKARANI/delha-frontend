"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-600">
            <Link href="/">DELHA DESTINY</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/listings" className="text-gray-700 hover:text-blue-600">Listings</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link href="/" className="block py-2 text-gray-700">Home</Link>
          <Link href="/listings" className="block py-2 text-gray-700">Listings</Link>
          <Link href="/about" className="block py-2 text-gray-700">About</Link>
          <Link href="/contact" className="block py-2 text-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
}
