import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">KFC Clone</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/menu" className="text-white hover:underline">Menu</Link>
          <Link to="/order" className="text-white hover:underline">Order</Link>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
          <Link to="/about" className="text-white hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;