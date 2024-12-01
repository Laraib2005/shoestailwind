import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-[#05447e] text-white p-5 flex justify-between items-center flex-wrap">
      {/* Logo */}
      <h1 className="text-2xl sm:text-3xl font-semibold">FOOT WEAR</h1>

      {/* Navigation */}
      <nav className="flex gap-6 sm:gap-10 items-center mt-3 sm:mt-0">
        <Link href="/" className="font-bold hover:underline">Home</Link>
        <Link href="/about" className="font-bold hover:underline">About</Link>
        <Link href="/shop" className="font-bold hover:underline">ShopNow</Link>
        <Link href="/contact" className="font-bold hover:underline">Contact</Link>
        
        {/* Shopping Cart Icon */}
        <FaShoppingCart />
      </nav>
    </header>
  );
}
export default Header;
