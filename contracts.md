# Emergent Skincare Backend Integration Contracts

## Overview
This document outlines the API contracts and integration plan for the Emergent Renewal Serum luxury skincare website.

## Current Mock Data (to be replaced)
Located in `/frontend/src/components/mockData.js`:
- `serumProduct` - Product information and details
- `testimonials` - Customer reviews and ratings  
- `skinCareSteps` - Usage instructions
- `faqData` - Frequently asked questions
- `heroImages` - Image URLs for sections

## API Endpoints to Implement

### 1. Product Management
```
GET /api/products
- Returns main serum product information
- Response: Product object with name, price, description, ingredients, benefits

GET /api/products/:id  
- Returns specific product details
- Response: Detailed product object
```

### 2. Testimonials/Reviews
```
GET /api/testimonials
- Returns customer testimonials and reviews
- Response: Array of testimonial objects with ratings, text, customer info

POST /api/testimonials
- Submit new customer review
- Request: { name, email, rating, review_text }
- Response: Success confirmation
```

### 3. Newsletter Subscription
```
POST /api/newsletter/subscribe
- Subscribe to newsletter
- Request: { email }
- Response: Subscription confirmation
```

### 4. FAQ Management
```
GET /api/faqs
- Returns frequently asked questions
- Response: Array of FAQ objects with questions and answers
```

### 5. Contact/Support
```
POST /api/contact
- Submit contact form
- Request: { name, email, subject, message }
- Response: Success confirmation
```

### 6. Order Management (Optional Enhancement)
```
POST /api/orders
- Create new order
- Request: { product_id, quantity, customer_info, payment_info }
- Response: Order confirmation
```

## Database Models

### Product Model
```python
{
    "_id": ObjectId,
    "name": str,
    "tagline": str,
    "price": float,
    "currency": str,
    "description": str,
    "key_ingredients": [
        {
            "name": str,
            "description": str
        }
    ],
    "benefits": [str],
    "volume": str,
    "usage": str,
    "certification": [str],
    "created_at": datetime,
    "updated_at": datetime
}
```

### Testimonial Model
```python
{
    "_id": ObjectId,
    "name": str,
    "email": str,
    "role": str,
    "company": str,
    "rating": int,
    "text": str,
    "avatar": str,
    "approved": bool,
    "created_at": datetime
}
```

### Newsletter Model
```python
{
    "_id": ObjectId,
    "email": str,
    "subscribed_at": datetime,
    "active": bool
}
```

### FAQ Model
```python
{
    "_id": ObjectId,
    "question": str,
    "answer": str,
    "order": int,
    "active": bool,
    "created_at": datetime
}
```

### Contact Model
```python
{
    "_id": ObjectId,
    "name": str,
    "email": str,
    "subject": str,
    "message": str,
    "status": str,  # "new", "replied", "closed"
    "created_at": datetime
}
```

## Frontend Integration Plan

### 1. Replace Mock Data
- Remove import of mockData.js from components
- Replace with API calls using axios
- Add loading states and error handling

### 2. API Service Layer
Create `/frontend/src/services/api.js`:
- Centralized API configuration
- Error handling and response formatting
- Loading state management

### 3. State Management
- Use React hooks (useState, useEffect) for local state
- Implement proper loading and error states
- Add form validation for user inputs

### 4. Form Integration
- Newsletter signup form
- Contact form with validation
- Testimonial submission form (if needed)

## Error Handling Strategy
- Backend: Proper HTTP status codes and error messages
- Frontend: User-friendly error messages and fallback UI
- Validation: Both client-side and server-side validation

## Security Considerations
- Input validation and sanitization
- Rate limiting for form submissions
- Email validation for newsletter signups
- CORS configuration for production

## Data Seeding
- Populate database with initial product data
- Add sample testimonials 
- Include default FAQ entries
- Set up initial product information

## Testing Strategy
- Backend API endpoint testing
- Frontend component integration testing
- Form submission testing
- Error state handling verification

## Implementation Priority
1. Product endpoints (highest priority)
2. FAQ endpoints 
3. Newsletter subscription
4. Testimonials display
5. Contact form
6. Admin features (future enhancement)

This contract ensures seamless integration between the luxury frontend design and robust backend functionality.