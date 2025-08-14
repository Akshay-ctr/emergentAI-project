import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingBag, Menu, X, Search, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { brandInfo } from './mockData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { toggleCart, getCartItemsCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const cartItemsCount = getCartItemsCount();
  const wishlistCount = getWishlistCount();

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchTerm);
    setShowSearch(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
              {brandInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/skin-quiz"
              className="text-indigo-600 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Skin Quiz
            </Link>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-4 md:relative md:top-0 md:border-0 md:p-0 md:max-w-xs">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 rounded-r-lg rounded-l-none"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </form>
            </div>
          )}

          {/* Action Items */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors duration-200"
            >
              <Search className="w-5 h-5 text-slate-600" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors duration-200"
            >
              <Heart className="w-5 h-5 text-slate-600" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs flex items-center justify-center p-0">
                  {wishlistCount}
                </Badge>
              )}
            </Link>

            {/* Account */}
            <Link
              to="/profile"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors duration-200"
            >
              <User className="w-5 h-5 text-slate-600" />
            </Link>

            {/* Cart */}
            <button 
              onClick={toggleCart}
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors duration-200"
            >
              <ShoppingBag className="w-5 h-5 text-slate-600" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs flex items-center justify-center p-0">
                  {cartItemsCount}
                </Badge>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-slate-600" />
              ) : (
                <Menu className="w-5 h-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-700 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/skin-quiz"
                onClick={() => setIsMenuOpen(false)}
                className="text-indigo-600 hover:text-purple-600 font-medium transition-colors duration-200 px-2 py-1"
              >
                Skin Quiz
              </Link>
              
              {/* Mobile Search */}
              <div className="flex items-center space-x-4 px-2 pt-4 border-t border-slate-200">
                <button 
                  onClick={() => setShowSearch(true)}
                  className="flex items-center space-x-2 text-slate-600"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
                <Link to="/wishlist" className="flex items-center space-x-2 text-slate-600">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist ({wishlistCount})</span>
                </Link>
                <Link to="/profile" className="flex items-center space-x-2 text-slate-600">
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;