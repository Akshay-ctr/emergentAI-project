import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
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
import SkinQuiz from "./components/SkinQuiz";
import AboutPage from "./components/AboutPage";
import ReviewsPage from "./components/ReviewsPage";
import ContactPage from "./components/ContactPage";
import WishlistPage from "./components/WishlistPage";
import ProfilePage from "./components/ProfilePage";

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
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">All Products</h1>
        <ProductShowcase />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <Navbar />
            <ShoppingCart />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/skin-quiz" element={<SkinQuiz />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </div>
  );
}

export default App;