export interface Product {
  id: string;
  name: string;
  category: "knits" | "woven" | "home";
  subcategory: string;
  image: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  slug: "knits" | "woven" | "home";
  description: string;
  image: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Knits",
    slug: "knits",
    description: "Premium knitted apparel crafted with precision and comfort in mind.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    subcategories: ["T-Shirts", "Polo Shirts", "Sweatshirts", "Hoodies", "Cardigans"],
  },
  {
    id: "2",
    name: "Woven & Garments",
    slug: "woven",
    description: "Sophisticated woven garments for modern fashion requirements.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    subcategories: ["Shirts", "Trousers", "Jackets", "Dresses", "Shorts"],
  },
  {
    id: "3",
    name: "Home Textiles",
    slug: "home",
    description: "Luxurious home textiles that bring comfort and elegance to living spaces.",
    image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=800&q=80",
    subcategories: ["Bedding", "Towels", "Curtains", "Table Linens", "Cushion Covers"],
  },
];

export const products: Product[] = [
  // Knits
  {
    id: "k1",
    name: "Premium Cotton T-Shirt",
    category: "knits",
    subcategory: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    description: "100% combed cotton t-shirt with superior softness and durability.",
  },
  {
    id: "k2",
    name: "Classic Polo Shirt",
    category: "knits",
    subcategory: "Polo Shirts",
    image: "https://images.unsplash.com/photo-1625910513413-5fc45e6637d0?w=600&q=80",
    description: "Elegant polo shirt with reinforced collar and premium piqué fabric.",
  },
  {
    id: "k3",
    name: "Fleece Sweatshirt",
    category: "knits",
    subcategory: "Sweatshirts",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    description: "Cozy fleece-lined sweatshirt perfect for all seasons.",
  },
  {
    id: "k4",
    name: "Pullover Hoodie",
    category: "knits",
    subcategory: "Hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    description: "Comfortable hoodie with kangaroo pocket and adjustable drawstring.",
  },
  {
    id: "k5",
    name: "Knit Cardigan",
    category: "knits",
    subcategory: "Cardigans",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    description: "Classic button-front cardigan with fine knit construction.",
  },
  // Woven & Garments
  {
    id: "w1",
    name: "Oxford Dress Shirt",
    category: "woven",
    subcategory: "Shirts",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    description: "Premium oxford cotton shirt with mother-of-pearl buttons.",
  },
  {
    id: "w2",
    name: "Chino Trousers",
    category: "woven",
    subcategory: "Trousers",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    description: "Tailored chino trousers with stretch comfort technology.",
  },
  {
    id: "w3",
    name: "Bomber Jacket",
    category: "woven",
    subcategory: "Jackets",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    description: "Contemporary bomber jacket with premium lining and finish.",
  },
  {
    id: "w4",
    name: "Linen Summer Dress",
    category: "woven",
    subcategory: "Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    description: "Breathable linen dress perfect for warm weather occasions.",
  },
  {
    id: "w5",
    name: "Casual Bermuda Shorts",
    category: "woven",
    subcategory: "Shorts",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    description: "Comfortable bermuda shorts with premium cotton twill fabric.",
  },
  // Home Textiles
  {
    id: "h1",
    name: "Egyptian Cotton Bedding Set",
    category: "home",
    subcategory: "Bedding",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    description: "Luxurious 400 thread count Egyptian cotton bedding collection.",
  },
  {
    id: "h2",
    name: "Turkish Bath Towel Set",
    category: "home",
    subcategory: "Towels",
    image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=600&q=80",
    description: "Ultra-absorbent Turkish cotton towels with superior softness.",
  },
  {
    id: "h3",
    name: "Blackout Curtain Panels",
    category: "home",
    subcategory: "Curtains",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
    description: "Elegant blackout curtains with thermal insulation properties.",
  },
  {
    id: "h4",
    name: "Jacquard Table Linen Set",
    category: "home",
    subcategory: "Table Linens",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80",
    description: "Sophisticated jacquard woven table linens for elegant dining.",
  },
  {
    id: "h5",
    name: "Decorative Cushion Covers",
    category: "home",
    subcategory: "Cushion Covers",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80",
    description: "Handcrafted cushion covers with intricate embroidery details.",
  },
];
