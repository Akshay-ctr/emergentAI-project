import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Users, Globe, Heart, Sparkles, Shield } from 'lucide-react';
import { brandInfo } from './mockData';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Swiss Excellence',
      description: 'Crafted in Switzerland with the highest quality standards and premium ingredients sourced globally.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every formula is developed based on real customer feedback and dermatologist recommendations.'
    },
    {
      icon: Globe,
      title: 'Sustainable Beauty',
      description: 'Committed to eco-friendly packaging and ethically sourced ingredients for a better future.'
    },
    {
      icon: Heart,
      title: 'Cruelty-Free',
      description: 'We never test on animals and are proud to be certified cruelty-free and vegan.'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Founded in Geneva', description: 'Started with a vision to create luxury skincare accessible to everyone' },
    { year: '2019', title: 'First Formula Launch', description: 'Introduced our signature Vitamin C serum after 18 months of development' },
    { year: '2021', title: 'Global Expansion', description: 'Reached 25 countries and served over 10,000 satisfied customers' },
    { year: '2023', title: 'Innovation Award', description: 'Won Swiss Beauty Innovation Award for breakthrough peptide technology' },
    { year: '2024', title: 'Sustainability Initiative', description: 'Launched zero-waste packaging program and carbon-neutral shipping' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 border-amber-200 mb-4">
            Our Story
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
              {brandInfo.name}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born in the pristine mountains of Switzerland, LUMINA represents a new era of luxury skincare 
            where cutting-edge science meets timeless beauty traditions.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-gradient-to-r from-amber-50 to-rose-50 border-amber-200">
          <CardContent className="p-12 text-center">
            <Sparkles className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              "To illuminate every person's natural beauty through scientifically-proven, luxuriously-crafted 
              skincare solutions that deliver transformative results while honoring our commitment to sustainability 
              and ethical practices."
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our commitment to beautiful skin
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-rose-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <Card className="inline-block shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge className="bg-gradient-to-r from-amber-500 to-rose-500 text-white mb-3">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
          <CardContent className="p-12 text-center">
            <Shield className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Promise</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Every LUMINA product undergoes rigorous testing and quality control. We stand behind our formulations 
              with a 30-day money-back guarantee because we believe in the transformative power of our skincare solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-600">50,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">25</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">6</div>
                <div className="text-sm text-gray-600">Premium Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;