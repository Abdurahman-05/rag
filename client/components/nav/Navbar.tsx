'use client';

import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-7xl flex justify-between items-center py-4 px-4 md:px-0 relative">
      <div className="flex items-center space-x-2">
        <LogIn className="h-6 w-6 text-blue-600" />
        <span className="text-xl font-bold">SupportAI</span>
      </div>
      <div className="md:hidden">
        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 text-gray-600" />
        </Button>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="#" className="text-gray-600 hover:text-blue-600">Home</Link>
        <Link href="#" className="text-gray-600 hover:text-blue-600">Features</Link>
        <Link href="#" className="text-gray-600 hover:text-blue-600">Pricing</Link>
        <Link href="#" className="text-gray-600 hover:text-blue-600">Contact</Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
          <LogIn className="h-4 w-4 mr-2" /> Login
        </Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          <UserPlus className="h-4 w-4 mr-2" /> Sign Up
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 transform transition-transform duration-300 ease-in-out md:hidden">
          <div className="flex justify-end">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              <Menu className="h-6 w-6 text-gray-600 rotate-180" />
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-4 mt-4">
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-lg" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-lg" onClick={() => setIsOpen(false)}>Features</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-lg" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-lg" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600 w-full" onClick={() => setIsOpen(false)}>
              <LogIn className="h-4 w-4 mr-2" /> Login
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full" onClick={() => setIsOpen(false)}>
              <UserPlus className="h-4 w-4 mr-2" /> Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}