import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, ThumbsUp, User, Filter, Search } from 'lucide-react';
import { testimonials, products } from './mockData';

const ReviewsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Extended reviews data
  const allReviews = [
    ...testimonials.map(testimonial => ({
      ...testimonial,
      date: '2024-01-15',
      verified: true,
      helpful: 24
    })),
    {
      id: 5,
      name: "Alex Chen",
      role: "Verified Customer",
      company: "",
      rating: 5,
      text: "The Niacinamide serum has completely transformed my oily skin. My pores look smaller and breakouts are rare now. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      productUsed: "Clarity Niacinamide 10% Serum",
      date: "2024-01-10",
      verified: true,
      helpful: 18
    },
    {
      id: 6,
      name: "Sophie Williams",
      role: "Verified Customer", 
      company: "",
      rating: 4,
      text: "Love the Hyaluronic serum! My skin feels so plump and hydrated. The only reason it's not 5 stars is the price point, but the quality justifies it.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      productUsed: "Hydra Boost Hyaluronic Serum",
      date: "2024-01-08",
      verified: true,
      helpful: 15
    },
    {
      id: 7,
      name: "Michael Rodriguez",
      role: "Verified Customer",
      company: "",
      rating: 5,
      text: "As someone with sensitive skin, I was hesitant to try retinol. But this Youth Renewal cream is so gentle yet effective. No irritation at all!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      productUsed: "Youth Renewal Retinol Cream",
      date: "2024-01-05",
      verified: true,
      helpful: 22
    },
    {
      id: 8,
      name: "Lisa Thompson",
      role: "Verified Customer",
      company: "",
      rating: 5,
      text: "The AHA/BHA exfoliant is amazing! Weekly use has made my skin so smooth and radiant. Perfect for my combination skin.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      productUsed: "Glow AHA/BHA Exfoliant",
      date: "2024-01-03",
      verified: true,
      helpful: 12
    }
  ];

  const filteredReviews = allReviews.filter(review => {
    const matchesProduct = selectedProduct === 'all' || review.productUsed.toLowerCase().includes(selectedProduct.toLowerCase());
    const matchesRating = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const matchesSearch = review.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         review.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesProduct && matchesRating && matchesSearch;
  });

  const averageRating = allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: allReviews.filter(r => r.rating === rating).length,
    percentage: (allReviews.filter(r => r.rating === rating).length / allReviews.length) * 100
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 border-amber-200 mb-4">
            Customer Reviews
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from real customers who have transformed their skin with LUMINA
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Overall Rating */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Overall Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    Based on {allReviews.length} reviews
                  </div>
                </div>
                
                {/* Rating Distribution */}
                <div className="space-y-2">
                  {ratingDistribution.map((item) => (
                    <div key={item.rating} className="flex items-center space-x-2">
                      <span className="text-sm w-2">{item.rating}</span>
                      <Star className="w-3 h-3 text-amber-400 fill-current" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-amber-400 to-rose-400 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-8">{item.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Search Reviews</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search reviews..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Product Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Product</label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="all">All Products</option>
                    <option value="vitamin c">Vitamin C Serum</option>
                    <option value="niacinamide">Niacinamide Serum</option>
                    <option value="retinol">Retinol Cream</option>
                    <option value="hyaluronic">Hyaluronic Serum</option>
                    <option value="exfoliant">AHA/BHA Exfoliant</option>
                    <option value="eye">Eye Cream</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Rating</label>
                  <select
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span>{review.role}</span>
                            {review.verified && (
                              <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <div className="text-xs text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      
                      <Badge variant="outline" className="text-amber-700 border-amber-300 mb-3">
                        {review.productUsed}
                      </Badge>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        "{review.text}"
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-amber-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                        <div className="text-xs text-gray-500">
                          Reviewed on {review.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredReviews.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No reviews found</h3>
                  <p className="text-gray-600">Try adjusting your filters to see more reviews.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;