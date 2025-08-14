import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { products } from './mockData';

const SkinQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'skinType',
      title: 'What is your skin type?',
      options: [
        { value: 'oily', label: 'Oily', description: 'Shiny, enlarged pores, frequent breakouts' },
        { value: 'dry', label: 'Dry', description: 'Tight, flaky, rough texture' },
        { value: 'combination', label: 'Combination', description: 'Oily T-zone, dry cheeks' },
        { value: 'sensitive', label: 'Sensitive', description: 'Easily irritated, reactive' },
        { value: 'normal', label: 'Normal', description: 'Balanced, few concerns' }
      ]
    },
    {
      id: 'skinConcerns',
      title: 'What are your main skin concerns?',
      multiple: true,
      options: [
        { value: 'acne', label: 'Acne & Breakouts' },
        { value: 'aging', label: 'Fine Lines & Wrinkles' },
        { value: 'dark-spots', label: 'Dark Spots & Hyperpigmentation' },
        { value: 'dullness', label: 'Dullness & Uneven Tone' },
        { value: 'pores', label: 'Large Pores' },
        { value: 'dryness', label: 'Dryness & Dehydration' }
      ]
    },
    {
      id: 'experience',
      title: 'How experienced are you with skincare?',
      options: [
        { value: 'beginner', label: 'Beginner', description: 'New to skincare routines' },
        { value: 'intermediate', label: 'Intermediate', description: 'Some experience with products' },
        { value: 'advanced', label: 'Advanced', description: 'Very knowledgeable about ingredients' }
      ]
    },
    {
      id: 'budget',
      title: 'What is your preferred budget range?',
      options: [
        { value: 'under-100', label: 'Under $100', description: 'Essential products only' },
        { value: '100-200', label: '$100 - $200', description: 'Moderate investment' },
        { value: '200-300', label: '$200 - $300', description: 'Premium routine' },
        { value: 'over-300', label: 'Over $300', description: 'Luxury complete system' }
      ]
    }
  ];

  const handleAnswer = (questionId, value, isMultiple = false) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(v => v !== value)
        : [...currentAnswers, value];
      setAnswers({ ...answers, [questionId]: newAnswers });
    } else {
      setAnswers({ ...answers, [questionId]: value });
    }
  };

  const getRecommendations = () => {
    const skinType = answers.skinType;
    const concerns = answers.skinConcerns || [];
    const experience = answers.experience;
    
    let recommended = [];
    
    // Always recommend based on skin type
    if (skinType === 'oily' || concerns.includes('acne')) {
      recommended.push(products.find(p => p.id === 'lumina_niacinamide_002'));
      recommended.push(products.find(p => p.id === 'lumina_exfoliant_005'));
    }
    
    if (concerns.includes('aging')) {
      recommended.push(products.find(p => p.id === 'lumina_retinol_003'));
      recommended.push(products.find(p => p.id === 'lumina_eye_cream_006'));
    }
    
    if (concerns.includes('dark-spots') || concerns.includes('dullness')) {
      recommended.push(products.find(p => p.id === 'lumina_vitamin_c_001'));
    }
    
    if (skinType === 'dry' || concerns.includes('dryness')) {
      recommended.push(products.find(p => p.id === 'lumina_hyaluronic_004'));
    }
    
    // Remove duplicates and ensure we have at least 2 recommendations
    recommended = [...new Set(recommended)].filter(Boolean);
    
    if (recommended.length < 2) {
      recommended.push(products.find(p => p.id === 'lumina_vitamin_c_001'));
      recommended.push(products.find(p => p.id === 'lumina_hyaluronic_004'));
    }
    
    return recommended.slice(0, 3);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendations = getRecommendations();
    const totalValue = recommendations.reduce((sum, product) => sum + product.price, 0);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 pt-20">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-rose-100 rounded-full border border-amber-200 mb-4">
                <Sparkles className="w-4 h-4 text-amber-600 mr-2" />
                <span className="text-sm font-medium text-amber-800">Your Personalized Results</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Perfect Products for You
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Based on your skin profile, here are our expert recommendations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recommendations.map((product, index) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white">
                      #{index + 1} Pick
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      <Button size="sm" className="bg-gradient-to-r from-amber-600 to-rose-500 hover:from-amber-700 hover:to-rose-600 text-white">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-amber-50 to-rose-50 border-amber-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Routine Bundle
                </h3>
                <p className="text-gray-600 mb-6">
                  Get all your recommended products together and save!
                </p>
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-gray-900">${(totalValue * 0.85).toFixed(0)}</span>
                  <span className="text-xl text-gray-500 line-through">${totalValue}</span>
                  <Badge className="bg-green-500 text-white">Save 15%</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-amber-600 to-rose-500 hover:from-amber-700 hover:to-rose-600 text-white">
                    Add Bundle to Cart
                  </Button>
                  <Button variant="outline" onClick={resetQuiz}>
                    Retake Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-amber-500 to-rose-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">
                {currentQuestion.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                {currentQuestion.options.map((option) => {
                  const isSelected = currentQuestion.multiple 
                    ? (answers[currentQuestion.id] || []).includes(option.value)
                    : answers[currentQuestion.id] === option.value;
                  
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(currentQuestion.id, option.value, currentQuestion.multiple)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        isSelected
                          ? 'border-amber-500 bg-gradient-to-r from-amber-50 to-rose-50'
                          : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            {option.label}
                          </div>
                          {option.description && (
                            <div className="text-sm text-gray-600">
                              {option.description}
                            </div>
                          )}
                        </div>
                        {isSelected && (
                          <Check className="w-5 h-5 text-amber-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
                
                <Button
                  onClick={nextStep}
                  disabled={!answers[currentQuestion.id] || (currentQuestion.multiple && (!answers[currentQuestion.id] || answers[currentQuestion.id].length === 0))}
                  className="bg-gradient-to-r from-amber-600 to-rose-500 hover:from-amber-700 hover:to-rose-600 text-white flex items-center space-x-2"
                >
                  <span>{currentStep === questions.length - 1 ? 'Get Results' : 'Next'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkinQuiz;