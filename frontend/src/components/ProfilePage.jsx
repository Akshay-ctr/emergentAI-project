import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit, 
  Save, 
  Package, 
  Heart, 
  Gift,
  Settings,
  LogOut,
  Camera
} from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Beauty Street, New York, NY 10001',
    birthDate: '1992-03-15',
    skinType: 'Combination',
    preferences: ['Cruelty-Free', 'Vegan', 'Fragrance-Free']
  });

  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 320,
      items: 3
    },
    {
      id: 'ORD-002', 
      date: '2024-01-08',
      status: 'Processing',
      total: 145,
      items: 1
    },
    {
      id: 'ORD-003',
      date: '2023-12-20',
      status: 'Delivered',
      total: 275,
      items: 2
    }
  ];

  const recentlyViewed = [
    'Radiance Vitamin C Serum',
    'Youth Renewal Retinol Cream',
    'Hydra Boost Hyaluronic Serum'
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleInputChange = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 border-indigo-200 mb-4">
              Your Account
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Profile
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Manage your account settings and track your skincare journey
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                      <User className="w-12 h-12 text-indigo-600" />
                    </div>
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{userInfo.name}</h3>
                  <p className="text-slate-600 mb-4">{userInfo.email}</p>
                  <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200">
                    VIP Member
                  </Badge>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Quick Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Orders</span>
                      <span className="font-semibold">{orderHistory.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Wishlist</span>
                      <span className="font-semibold">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Reviews</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Points</span>
                      <span className="font-semibold text-indigo-600">2,450</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Personal Information</CardTitle>
                      <Button
                        variant="outline"
                        onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                        className="flex items-center space-x-2"
                      >
                        {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                        <span>{isEditing ? 'Save' : 'Edit'}</span>
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                          {isEditing ? (
                            <input
                              type="text"
                              value={userInfo.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          ) : (
                            <p className="text-slate-900">{userInfo.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                          {isEditing ? (
                            <input
                              type="email"
                              value={userInfo.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          ) : (
                            <p className="text-slate-900">{userInfo.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                          {isEditing ? (
                            <input
                              type="tel"
                              value={userInfo.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          ) : (
                            <p className="text-slate-900">{userInfo.phone}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Birth Date</label>
                          {isEditing ? (
                            <input
                              type="date"
                              value={userInfo.birthDate}
                              onChange={(e) => handleInputChange('birthDate', e.target.value)}
                              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          ) : (
                            <p className="text-slate-900">{new Date(userInfo.birthDate).toLocaleDateString()}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
                        {isEditing ? (
                          <textarea
                            value={userInfo.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            rows={3}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        ) : (
                          <p className="text-slate-900">{userInfo.address}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="orders" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {orderHistory.map((order) => (
                          <div key={order.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div className="flex items-center space-x-4">
                              <Package className="w-8 h-8 text-indigo-600" />
                              <div>
                                <p className="font-semibold text-slate-900">{order.id}</p>
                                <p className="text-sm text-slate-600">{order.date} • {order.items} items</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-slate-900">${order.total}</p>
                              <Badge className={
                                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-slate-100 text-slate-800'
                              }>
                                {order.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="preferences" className="mt-6">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Skin Profile</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Skin Type</label>
                            <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                              <option value="combination">Combination</option>
                              <option value="oily">Oily</option>
                              <option value="dry">Dry</option>
                              <option value="sensitive">Sensitive</option>
                              <option value="normal">Normal</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Product Preferences</label>
                            <div className="flex flex-wrap gap-2">
                              {userInfo.preferences.map((pref, index) => (
                                <Badge key={index} className="bg-indigo-100 text-indigo-800">
                                  {pref}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Recently Viewed</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {recentlyViewed.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 p-2 hover:bg-slate-50 rounded">
                              <Eye className="w-4 h-4 text-slate-400" />
                              <span className="text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="settings" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-slate-900">Email Notifications</h4>
                            <p className="text-sm text-slate-600">Receive updates about orders and promotions</p>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-slate-900">Privacy Settings</h4>
                            <p className="text-sm text-slate-600">Manage your data and privacy preferences</p>
                          </div>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-slate-900">Change Password</h4>
                            <p className="text-sm text-slate-600">Update your account password</p>
                          </div>
                          <Button variant="outline" size="sm">Change</Button>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-slate-200">
                        <Button 
                          variant="outline" 
                          className="w-full text-red-600 border-red-300 hover:bg-red-50"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;