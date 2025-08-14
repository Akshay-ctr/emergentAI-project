// Mock data for luxury skincare website - LUMINA Skincare

// Main brand information
export const brandInfo = {
  name: "LUMINA",
  tagline: "Illuminate Your Natural Beauty",
  description: "Premium Swiss-formulated skincare solutions that transform your skin with scientifically-proven ingredients and luxurious textures."
};

// Product catalog
export const products = [
  {
    id: "lumina_vitamin_c_001",
    name: "Radiance Vitamin C Serum",
    category: "Serum",
    price: 145,
    originalPrice: 165,
    currency: "USD",
    volume: "30ml",
    rating: 4.9,
    reviewCount: 2847,
    description: "A potent 20% Vitamin C serum that brightens skin, reduces dark spots, and provides powerful antioxidant protection.",
    keyIngredients: [
      {
        name: "L-Ascorbic Acid (20%)",
        description: "Pure vitamin C for maximum brightening and collagen synthesis"
      },
      {
        name: "Vitamin E & Ferulic Acid",
        description: "Stabilizing antioxidants that enhance vitamin C effectiveness"
      },
      {
        name: "Hyaluronic Acid",
        description: "Deep hydration to prevent vitamin C irritation"
      }
    ],
    benefits: [
      "Brightens skin tone in 2 weeks",
      "Reduces dark spots by 85%",
      "Boosts collagen production",
      "Provides antioxidant protection",
      "Improves skin texture and radiance"
    ],
    usage: "Apply 3-4 drops to clean face in the morning before moisturizer",
    skinType: ["All skin types", "Especially dull skin"],
    image: "https://images.unsplash.com/photo-1723951174326-2a97221d3b7f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHx2aXRhbWluJTIwYyUyMHNlcnVtfGVufDB8fHx8MTc1NTE0MDM4Nnww&ixlib=rb-4.1.0&q=85",
    badge: "Bestseller",
    certification: ["Dermatologist Tested", "Cruelty-Free", "Vegan"]
  },
  {
    id: "lumina_niacinamide_002", 
    name: "Clarity Niacinamide 10% Serum",
    category: "Serum",
    price: 89,
    originalPrice: 109,
    currency: "USD", 
    volume: "30ml",
    rating: 4.8,
    reviewCount: 1923,
    description: "A high-strength niacinamide serum that minimizes pores, controls oil production, and improves skin clarity.",
    keyIngredients: [
      {
        name: "Niacinamide (10%)",
        description: "Minimizes pores and regulates sebum production"
      },
      {
        name: "Zinc PCA",
        description: "Reduces inflammation and controls acne-causing bacteria"
      },
      {
        name: "Azelaic Acid",
        description: "Gently exfoliates and brightens post-acne marks"
      }
    ],
    benefits: [
      "Minimizes enlarged pores",
      "Controls excess oil production", 
      "Reduces acne and breakouts",
      "Evens skin tone",
      "Strengthens skin barrier"
    ],
    usage: "Apply 2-3 drops to clean face morning and evening",
    skinType: ["Oily skin", "Acne-prone skin", "Combination skin"],
    image: "https://images.unsplash.com/photo-1619166855062-f63c187def3d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHx2aXRhbWluJTIwYyUyMHNlcnVtfGVufDB8fHx8MTc1NTE0MDM4Nnww&ixlib=rb-4.1.0&q=85",
    badge: "Oil Control",
    certification: ["Dermatologist Tested", "Non-comedogenic", "Fragrance-Free"]
  },
  {
    id: "lumina_retinol_003",
    name: "Youth Renewal Retinol Cream",
    category: "Night Cream",
    price: 195,
    originalPrice: 225,
    currency: "USD",
    volume: "50ml", 
    rating: 4.9,
    reviewCount: 1654,
    description: "An advanced retinol cream that reduces fine lines, improves skin texture, and promotes cellular renewal.",
    keyIngredients: [
      {
        name: "Encapsulated Retinol (0.5%)",
        description: "Time-released retinol for maximum efficacy with minimal irritation"
      },
      {
        name: "Peptide Complex",
        description: "Stimulates collagen production and reduces wrinkles"
      },
      {
        name: "Ceramides",
        description: "Restores skin barrier and prevents moisture loss"
      }
    ],
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves skin texture and smoothness",
      "Accelerates cell turnover",
      "Firms and tightens skin",
      "Minimizes age spots"
    ],
    usage: "Apply thin layer to clean face at night, start 2-3 times per week",
    skinType: ["Mature skin", "Normal to dry skin"],
    image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZXxlbnwwfHx8fDE3NTUxNDAzOTJ8MA&ixlib=rb-4.1.0&q=85",
    badge: "Anti-Aging",
    certification: ["Dermatologist Tested", "Clinical Grade", "Cruelty-Free"]
  },
  {
    id: "lumina_hyaluronic_004",
    name: "Hydra Boost Hyaluronic Serum",
    category: "Serum",
    price: 125,
    originalPrice: 145,
    currency: "USD",
    volume: "30ml",
    rating: 4.7,
    reviewCount: 2156,
    description: "A multi-molecular weight hyaluronic acid serum that provides intense hydration and plumps skin.",
    keyIngredients: [
      {
        name: "Multi-Weight Hyaluronic Acid",
        description: "Three molecular weights for surface and deep hydration"
      },
      {
        name: "Marine Collagen",
        description: "Boosts skin elasticity and firmness"
      },
      {
        name: "Aloe Vera Extract",
        description: "Soothes and calms irritated skin"
      }
    ],
    benefits: [
      "Provides 72-hour hydration",
      "Plumps and firms skin",
      "Reduces appearance of fine lines",
      "Improves skin elasticity",
      "Suitable for sensitive skin"
    ],
    usage: "Apply 2-3 drops to damp skin morning and evening",
    skinType: ["All skin types", "Especially dry skin"],
    image: "https://images.unsplash.com/photo-1622618991227-412b19e4fef9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBza2luY2FyZXxlbnwwfHx8fDE3NTUxNDAzOTJ8MA&ixlib=rb-4.1.0&q=85",
    badge: "Hydrating",
    certification: ["Dermatologist Tested", "Hypoallergenic", "Fragrance-Free"]
  },
  {
    id: "lumina_exfoliant_005",
    name: "Glow AHA/BHA Exfoliant",
    category: "Treatment",
    price: 98,
    originalPrice: 118,
    currency: "USD",
    volume: "30ml",
    rating: 4.6,
    reviewCount: 1432,
    description: "A gentle yet effective exfoliating treatment that combines AHA and BHA to reveal smoother, brighter skin.",
    keyIngredients: [
      {
        name: "Glycolic Acid (8%)",
        description: "Alpha hydroxy acid that removes dead skin cells"
      },
      {
        name: "Salicylic Acid (2%)",
        description: "Beta hydroxy acid that unclogs pores"
      },
      {
        name: "Willow Bark Extract",
        description: "Natural BHA alternative that's gentle on skin"
      }
    ],
    benefits: [
      "Removes dead skin cells",
      "Unclogs and minimizes pores",
      "Improves skin texture",
      "Reduces blackheads",
      "Reveals brighter complexion"
    ],
    usage: "Apply thin layer 2-3 times per week in the evening",
    skinType: ["Normal to oily skin", "Avoid sensitive skin"],
    image: "https://images.unsplash.com/photo-1598460880248-71ec6d2d582b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHx2aXRhbWluJTIwYyUyMHNlcnVtfGVufDB8fHx8MTc1NTE0MDM4Nnww&ixlib=rb-4.1.0&q=85",
    badge: "Weekly Treatment",
    certification: ["Dermatologist Tested", "Cruelty-Free", "pH Balanced"]
  },
  {
    id: "lumina_eye_cream_006",
    name: "Revive Eye Renewal Complex",
    category: "Eye Care",
    price: 165,
    originalPrice: 189,
    currency: "USD",
    volume: "15ml",
    rating: 4.8,
    reviewCount: 987,
    description: "An intensive eye cream that targets fine lines, dark circles, and puffiness around the delicate eye area.",
    keyIngredients: [
      {
        name: "Caffeine Complex",
        description: "Reduces puffiness and dark circles"
      },
      {
        name: "Bakuchiol",
        description: "Gentle retinol alternative safe for eye area"
      },
      {
        name: "Vitamin K",
        description: "Improves circulation and reduces dark circles"
      }
    ],
    benefits: [
      "Reduces fine lines around eyes",
      "Diminishes dark circles",
      "Decreases puffiness",
      "Improves skin firmness",
      "Gentle for sensitive eye area"
    ],
    usage: "Gently pat small amount around eye area morning and evening",
    skinType: ["All skin types", "Sensitive eye area"],
    image: "https://images.unsplash.com/photo-1731599974315-91a82bb816a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHx2aXRhbWluJTIwYyUyMHNlcnVtfGVufDB8fHx8MTc1NTE0MDM4Nnww&ixlib=rb-4.1.0&q=85",
    badge: "Eye Specialist",
    certification: ["Ophthalmologist Tested", "Fragrance-Free", "Hypoallergenic"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Beauty Editor",
    company: "Vogue",
    rating: 5,
    text: "LUMINA's Vitamin C serum is a game-changer! My skin has never looked brighter or more radiant. The formula is incredibly elegant and absorbs beautifully.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b1?w=150&h=150&fit=crop&crop=face",
    productUsed: "Radiance Vitamin C Serum"
  },
  {
    id: 2,
    name: "Dr. Maria Rodriguez",
    role: "Dermatologist",
    company: "Skin Institute",
    rating: 5,
    text: "As a dermatologist, I'm impressed by LUMINA's scientific approach. The Niacinamide serum is particularly effective for my patients with oily, acne-prone skin.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    productUsed: "Clarity Niacinamide 10% Serum"
  },
  {
    id: 3,
    name: "Jennifer Park",
    role: "Skincare Enthusiast",
    company: "",
    rating: 5,
    text: "I've tried countless retinol products, but LUMINA's Youth Renewal Cream is by far the most effective. My fine lines have visibly diminished!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    productUsed: "Youth Renewal Retinol Cream"
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Beauty Blogger",
    company: "Glow Guide",
    rating: 5,
    text: "The Hyaluronic Serum is pure hydration heaven! My skin feels plump and dewy all day long. Perfect for my dry skin concerns.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    productUsed: "Hydra Boost Hyaluronic Serum"
  }
];

export const skinCareSteps = [
  {
    step: 1,
    title: "Cleanse",
    description: "Start with a gentle cleanser to prepare your skin",
    time: "Morning & Evening"
  },
  {
    step: 2,
    title: "Treat", 
    description: "Apply your chosen LUMINA serum (Vitamin C AM, Niacinamide AM/PM, Retinol PM only)",
    time: "As directed"
  },
  {
    step: 3,
    title: "Moisturize",
    description: "Follow with moisturizer to lock in active ingredients",
    time: "Morning & Evening"
  },
  {
    step: 4,
    title: "Protect",
    description: "Apply broad-spectrum SPF 30+ during morning routine",
    time: "Morning Only"
  }
];

export const faqData = [
  {
    question: "How do I choose the right LUMINA product for my skin?",
    answer: "Start with our Vitamin C serum for brightening, Niacinamide for oil control and pore minimizing, or Hyaluronic Acid for hydration. For anti-aging concerns, try our Retinol cream. Consult our skin quiz for personalized recommendations."
  },
  {
    question: "Can I use multiple LUMINA products together?",
    answer: "Yes! Our products are designed to work synergistically. Use Vitamin C in the morning and Retinol at night. Niacinamide can be used with most products. Always introduce new products gradually."
  },
  {
    question: "How soon will I see results?",
    answer: "Most users notice improved skin texture within 1-2 weeks. Vitamin C shows brightening effects in 2-3 weeks, while Retinol results appear after 4-6 weeks of consistent use."
  },
  {
    question: "Are LUMINA products suitable for sensitive skin?",
    answer: "Our Hyaluronic Serum and Eye Cream are formulated for sensitive skin. Start with lower concentrations and patch test before full application. Avoid AHA/BHA treatment if you have very sensitive skin."
  },
  {
    question: "What makes LUMINA different from other skincare brands?",
    answer: "We use clinically-proven concentrations, Swiss-quality manufacturing, and combine multiple complementary ingredients in each formula for maximum efficacy and luxury experience."
  }
];

export const heroImages = {
  mainProduct: "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBza2luY2FyZXxlbnwwfHx8fDE3NTUxNDAzOTJ8MA&ixlib=rb-4.1.0&q=85",
  lifestyle: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47",
  ingredients: "https://images.unsplash.com/photo-1622618991227-412b19e4fef9",
  luxury: "https://images.unsplash.com/photo-1723847201993-2961ff627f52",
  products: "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d"
};

// Product categories for filtering
export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'serum', name: 'Serums', count: products.filter(p => p.category === 'Serum').length },
  { id: 'treatment', name: 'Treatments', count: products.filter(p => p.category === 'Treatment').length },
  { id: 'moisturizer', name: 'Moisturizers', count: products.filter(p => p.category === 'Night Cream').length },
  { id: 'eye-care', name: 'Eye Care', count: products.filter(p => p.category === 'Eye Care').length }
];

// Skin concerns for product recommendations
export const skinConcerns = [
  { id: 'aging', name: 'Anti-Aging', products: ['lumina_retinol_003', 'lumina_eye_cream_006', 'lumina_vitamin_c_001'] },
  { id: 'acne', name: 'Acne & Oily Skin', products: ['lumina_niacinamide_002', 'lumina_exfoliant_005'] },
  { id: 'dryness', name: 'Dryness & Dehydration', products: ['lumina_hyaluronic_004', 'lumina_retinol_003'] },
  { id: 'dullness', name: 'Dullness & Dark Spots', products: ['lumina_vitamin_c_001', 'lumina_exfoliant_005'] },
  { id: 'pores', name: 'Large Pores', products: ['lumina_niacinamide_002', 'lumina_exfoliant_005'] },
  { id: 'sensitivity', name: 'Sensitive Skin', products: ['lumina_hyaluronic_004', 'lumina_eye_cream_006'] }
];