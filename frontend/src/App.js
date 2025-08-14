import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import HeroSection from "./components/HeroSection";
import ProductFeatures from "./components/ProductFeatures";
import ProductShowcase from "./components/ProductShowcase";
import IngredientsSection from "./components/IngredientsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductFeatures />
      <ProductShowcase />
      <IngredientsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Products</h1>
        <ProductShowcase />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <ShoppingCart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<div className="pt-20 p-8"><h1>About Page Coming Soon</h1></div>} />
            <Route path="/reviews" element={<div className="pt-20 p-8"><h1>Reviews Page Coming Soon</h1></div>} />
            <Route path="/contact" element={<div className="pt-20 p-8"><h1>Contact Page Coming Soon</h1></div>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;