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
    subcategories: ["Bedding Sets", "Comfort Covers", "Fitted Sheets", "Kitchen Towels", "Hand Towels", "Bath Towels", "Curtains", "Table Linens", "Cushion Covers", "Rugs"],
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
    image: "/knits/poloshirts.jpg",
    description: "Elegant polo shirt with reinforced collar and premium piqué fabric.",
  },
  {
    id: "k3",
    name: "Fleece Sweatshirt",
    category: "knits",
    subcategory: "Sweatshirts",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
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
    name: "Beddings",
    category: "home",
    subcategory: "Bedding Sets",
    image: "/hometextiles/beddings.jpg",
    description: "Premium quality luxury bedding sets for a comfortable sleep.",
  },
  {
    id: "h2",
    name: "Cushion covers",
    category: "home",
    subcategory: "Cushion Covers",
    image: "/hometextiles/cushioncovers.jpg",
    description: "Elegant and durable cushion covers to enhance your living space.",
  },
  {
    id: "h3",
    name: "Kitchen towels",
    category: "home",
    subcategory: "Kitchen Towels",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    description: "Highly absorbent and stylish cotton towels for your kitchen.",
  },
  {
    id: "h4",
    name: "Hand towels",
    category: "home",
    subcategory: "Hand Towels",
    image: "/hometextiles/handtowels.jpg",
    description: "Soft and gentle hand towels made from premium long-staple cotton.",
  },
  {
    id: "h5",
    name: "Bigtowels",
    category: "home",
    subcategory: "Bath Towels",
    image: "/hometextiles/bigtowels.jpeg",
    description: "Extra-large, luxurious bath towels with high GSM for maximum absorption.",
  },
  {
    id: "h6",
    name: "Rugs",
    category: "home",
    subcategory: "Rugs",
    image: "/hometextiles/rugs.jpg",
    description: "Exquisite hand-woven rugs to add warmth and style to any room.",
  },
  {
    id: "h7",
    name: "Comfort covers",
    category: "home",
    subcategory: "Comfort Covers",
    image: "/hometextiles/comfortcovers.jpg",
    description: "Ultra-soft comfort covers designed for all-season coziness.",
  },
  {
    id: "h8",
    name: "Fitted bedsheets",
    category: "home",
    subcategory: "Fitted Sheets",
    image: "/hometextiles/fitted.jpeg",
    description: "Premium elasticated fitted sheets that stay perfectly in place.",
  },
  {
    id: "h9",
    name: "Curtains",
    category: "home",
    subcategory: "Curtains",
    image: "/hometextiles/curtainpanels.jpg",
    description: "Elegant blackout curtains with thermal insulation properties.",
  },
  {
    id: "h10",
    name: "Table Linens",
    category: "home",
    subcategory: "Table Linens",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80",
    description: "Sophisticated jacquard woven table linens for elegant dining.",
  },
];
