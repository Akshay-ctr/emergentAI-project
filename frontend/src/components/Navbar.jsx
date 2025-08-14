import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingBag, Menu, X, Search, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { brandInfo } from './mockData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-rose-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
              {brandInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Items */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Wishlist */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>

            {/* Account */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <User className="w-5 h-5 text-gray-600" />
            </button>

            {/* Cart */}
            <button 
              onClick={toggleCart}
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white text-xs flex items-center justify-center p-0">
                  {cartItemsCount}
                </Badge>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 px-2 py-1"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Search */}
              <div className="flex items-center space-x-4 px-2 pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-2 text-gray-600">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;