export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: Review[];
  features: string[];
  stock: number;
  brand: string;
  discount?: number;
  newArrival?: boolean;
  colors?: string[];
  technicalSpecs?: { [key: string]: string };
  inTheBox?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "OnePlus 9 Pro 5G",
    description:
      "Flagship smartphone with Hasselblad camera for mobile, 120 Hz Fluid Display, and Warp Charge 65T.",
    price: 64999,
    image:
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&q=80",
    category: "Smartphones",
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        userName: "Aarav Patel",
        rating: 5,
        comment: "Excellent camera quality and super fast charging!",
        date: "2023-05-15",
      },
      {
        id: "r2",
        userName: "Diya Sharma",
        rating: 4,
        comment: "Great phone, but a bit pricey.",
        date: "2023-05-10",
      },
    ],
    features: [
      "Snapdragon 888 5G",
      "8GB RAM",
      "256GB Storage",
      "4500 mAh Battery",
    ],
    stock: 50,
    brand: "OnePlus",
    discount: 10,
    colors: ["Pine Green", "Morning Mist", "Stellar Black"],
    technicalSpecs: {
      Display: "6.7 inch Fluid AMOLED with LTPO",
      Processor: "Qualcomm Snapdragon 888",
      RAM: "8GB LPDDR5",
      Storage: "256GB UFS 3.1",
      "Rear Camera":
        "48 MP (Main) + 50 MP (Ultra-wide) + 8 MP (Telephoto) + 2 MP (Monochrome)",
      "Front Camera": "16 MP",
      Battery: "4500 mAh",
      Charging: "Warp Charge 65T (10V/6.5A)",
      OS: "OxygenOS based on Android 11",
    },
    inTheBox: [
      "OnePlus 9 Pro 5G",
      "Warp Charge 65T Power Adapter",
      "Warp Charge Type-C to Type-C Cable",
      "Quick Start Guide",
      "Welcome Letter",
      "Safety Information and Warranty Card",
      "LOGO Sticker",
      "Case",
      "Screen Protector (pre-applied)",
      "SIM Tray Ejector",
    ],
  },
  {
    id: "2",
    name: "boAt Rockerz 550 Wireless Headphone",
    description:
      "Over-Ear Wireless Headphone with upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation.",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Audio",
    rating: 4.2,
    reviews: [
      {
        id: "r3",
        userName: "Arjun Gupta",
        rating: 4,
        comment: "Good sound quality, comfortable for long use.",
        date: "2023-05-08",
      },
      {
        id: "r4",
        userName: "Ishaan Reddy",
        rating: 5,
        comment: "Amazing battery life!",
        date: "2023-05-05",
      },
    ],
    features: [
      "20 Hours Playback",
      "50MM Drivers",
      "Bluetooth v5.0",
      "Voice Assistant Support",
    ],
    stock: 100,
    brand: "boAt",
    newArrival: true,
    colors: ["Black", "Blue", "Red"],
  },
  {
    id: "3",
    name: "Fossil Gen 5 Smartwatch",
    description:
      "Touchscreen smartwatch with built-in GPS, heart rate monitoring, and smartphone notifications.",
    price: 22995,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Wearables",
    rating: 4.3,
    reviews: [
      {
        id: "r5",
        userName: "Anaya Kapoor",
        rating: 4,
        comment: "Stylish and functional, but battery life could be better.",
        date: "2023-05-03",
      },
      {
        id: "r6",
        userName: "Vihaan Singh",
        rating: 5,
        comment: "Love the customizable watch faces!",
        date: "2023-04-30",
      },
    ],
    features: [
      "Wear OS by Google",
      "Heart Rate Tracking",
      "GPS",
      "NFC for Google Pay",
    ],
    stock: 30,
    brand: "Fossil",
    discount: 15,
    colors: ["Black", "Silver", "Rose Gold"],
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description:
      "High-back mesh office chair with lumbar support, adjustable headrest, and 3D armrests.",
    price: 15999,
    image:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80",
    category: "Furniture",
    rating: 4.7,
    reviews: [
      {
        id: "r7",
        userName: "Anika Joshi",
        rating: 5,
        comment: "Very comfortable for long work hours.",
        date: "2023-04-28",
      },
      {
        id: "r8",
        userName: "Reyansh Kumar",
        rating: 4,
        comment: "Good quality, but assembly was a bit tricky.",
        date: "2023-04-25",
      },
    ],
    features: [
      "Ergonomic Design",
      "Breathable Mesh Back",
      "Adjustable Lumbar Support",
      "360° Swivel",
    ],
    stock: 20,
    brand: "Ergolite",
    colors: ["Black", "Gray"],
  },
  {
    id: "5",
    name: "Canon EOS R6 Mirrorless Camera",
    description:
      "Full-frame mirrorless camera with 4K video capability, in-body image stabilization, and dual pixel autofocus.",
    price: 215995,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    category: "Cameras",
    rating: 4.8,
    reviews: [
      {
        id: "r9",
        userName: "Zara Mehta",
        rating: 5,
        comment: "Exceptional image quality and low-light performance.",
        date: "2023-04-22",
      },
      {
        id: "r10",
        userName: "Advait Choudhury",
        rating: 4,
        comment: "Great camera, but quite expensive.",
        date: "2023-04-20",
      },
    ],
    features: [
      "20MP Full-Frame Sensor",
      "4K60p Video",
      "8-Stop Image Stabilization",
      "Dual Card Slots",
    ],
    stock: 15,
    brand: "Canon",
    newArrival: true,
  },
  {
    id: "6",
    name: "MacBook Pro 16-inch",
    description:
      "Powerful laptop with M1 Pro chip, 16-inch Liquid Retina XDR display, and up to 21 hours of battery life.",
    price: 239900,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    category: "Laptops",
    rating: 4.9,
    reviews: [
      {
        id: "r11",
        userName: "Rohan Malhotra",
        rating: 5,
        comment: "Incredible performance and battery life!",
        date: "2023-05-25",
      },
      {
        id: "r12",
        userName: "Priya Desai",
        rating: 5,
        comment: "Perfect for professional video editing.",
        date: "2023-05-23",
      },
    ],
    features: [
      "M1 Pro chip",
      "16GB RAM",
      "512GB SSD",
      "16-inch Liquid Retina XDR display",
    ],
    stock: 10,
    brand: "Apple",
    newArrival: true,
    colors: ["Space Gray", "Silver"],
  },
  {
    id: "7",
    name: "Sony PlayStation 5",
    description:
      "Next-gen gaming console with ultra-high speed SSD, 4K-TV gaming, and ray tracing.",
    price: 49990,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80",
    category: "Gaming",
    rating: 4.8,
    reviews: [
      {
        id: "r13",
        userName: "Arjun Kapoor",
        rating: 5,
        comment: "Amazing graphics and super fast loading times!",
        date: "2023-05-28",
      },
      {
        id: "r14",
        userName: "Riya Sharma",
        rating: 4,
        comment: "Great console, but hard to find in stock.",
        date: "2023-05-26",
      },
    ],
    features: [
      "4K gaming",
      "Ray tracing",
      "Ultra-high speed SSD",
      "Haptic feedback",
    ],
    stock: 5,
    brand: "Sony",
    discount: 5,
  },
  {
    id: "8",
    name: "Samsung 65-inch QLED 4K Smart TV",
    description:
      "65-inch QLED 4K TV with Quantum Processor 4K, 100% Color Volume with Quantum Dot, and Alexa built-in.",
    price: 179990,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
    category: "TVs",
    rating: 4.7,
    reviews: [
      {
        id: "r15",
        userName: "Vikram Singh",
        rating: 5,
        comment: "Stunning picture quality and smart features!",
        date: "2023-05-30",
      },
      {
        id: "r16",
        userName: "Neha Gupta",
        rating: 4,
        comment: "Great TV, but the user interface could be more intuitive.",
        date: "2023-05-29",
      },
    ],
    features: [
      "65-inch QLED 4K",
      "Quantum Processor 4K",
      "100% Color Volume",
      "Alexa built-in",
    ],
    stock: 8,
    brand: "Samsung",
    discount: 10,
  },
  {
    id: "9",
    name: "Apple AirPods Pro",
    description:
      "Active noise cancelling wireless earbuds with transparency mode and adaptive EQ.",
    price: 24900,
    image:
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&q=80",
    category: "Audio",
    rating: 4.8,
    reviews: [
      {
        id: "r17",
        userName: "Aditya Sharma",
        rating: 5,
        comment: "Best earbuds I've ever used!",
        date: "2023-06-02",
      },
      {
        id: "r18",
        userName: "Nisha Patel",
        rating: 4,
        comment: "Great sound quality, but a bit pricey.",
        date: "2023-06-01",
      },
    ],
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Adaptive EQ",
      "Sweat and water resistant",
    ],
    stock: 25,
    brand: "Apple",
    newArrival: true,
  },
  {
    id: "10",
    name: "DJI Mavic Air 2 Drone",
    description:
      "Foldable drone with 4K camera, 3-axis gimbal, and 34-minute flight time.",
    price: 74900,
    image:
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=500&q=80",
    category: "Drones",
    rating: 4.7,
    reviews: [
      {
        id: "r19",
        userName: "Rahul Mehta",
        rating: 5,
        comment: "Amazing drone for aerial photography!",
        date: "2023-06-03",
      },
      {
        id: "r20",
        userName: "Priya Singh",
        rating: 4,
        comment: "Great features, but takes some practice to master.",
        date: "2023-06-02",
      },
    ],
    features: [
      "4K/60fps video",
      "48MP photos",
      "34-minute flight time",
      "10km HD video transmission",
    ],
    stock: 15,
    brand: "DJI",
    discount: 10,
  },
  {
    id: "11",
    name: "Logitech MX Master 3 Mouse",
    description:
      "Advanced wireless mouse with customizable buttons and app-specific profiles.",
    price: 9995,
    image:
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&q=80",
    category: "Accessories",
    rating: 4.6,
    reviews: [
      {
        id: "r21",
        userName: "Vikram Reddy",
        rating: 5,
        comment: "The best mouse for productivity!",
        date: "2023-06-04",
      },
      {
        id: "r22",
        userName: "Anjali Desai",
        rating: 4,
        comment: "Comfortable to use, but software can be buggy at times.",
        date: "2023-06-03",
      },
    ],
    features: [
      "Ergonomic design",
      "Customizable buttons",
      "App-specific profiles",
      "USB-C quick charging",
    ],
    stock: 40,
    brand: "Logitech",
    newArrival: true,
  },
  {
    id: "12",
    name: "Philips Hue Smart Bulb Starter Kit",
    description:
      "Smart LED bulb kit with bridge, compatible with Alexa and Google Home.",
    price: 8999,
    image:
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?w=500&q=80",
    category: "Smart Home",
    rating: 4.5,
    reviews: [
      {
        id: "r23",
        userName: "Sanjay Kumar",
        rating: 5,
        comment: "Transformed my home lighting experience!",
        date: "2023-06-05",
      },
      {
        id: "r24",
        userName: "Meera Iyer",
        rating: 4,
        comment: "Great product, but initial setup can be tricky.",
        date: "2023-06-04",
      },
    ],
    features: [
      "16 million colors",
      "Voice control",
      "Schedule and routines",
      "Energy efficient",
    ],
    stock: 30,
    brand: "Philips",
    discount: 15,
  },
  {
    id: "13",
    name: "Bose QuietComfort 45 Wireless Headphones",
    description:
      "Premium noise cancelling headphones with exceptional sound quality and comfort.",
    price: 29900,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
    category: "Audio",
    rating: 4.7,
    reviews: [
      {
        id: "r25",
        userName: "Rajesh Khanna",
        rating: 5,
        comment: "Unbeatable noise cancellation!",
        date: "2023-06-10",
      },
      {
        id: "r26",
        userName: "Sunita Patel",
        rating: 4,
        comment: "Great sound, but a bit bulky for travel.",
        date: "2023-06-09",
      },
    ],
    features: [
      "World-class noise cancellation",
      "High-fidelity audio",
      "24-hour battery life",
      "Comfortable fit",
    ],
    stock: 35,
    brand: "Bose",
    newArrival: true,
  },
  {
    id: "14",
    name: "LG 34-inch UltraWide Monitor",
    description:
      "34-inch WQHD IPS display with a 21:9 aspect ratio, perfect for multitasking and immersive gaming.",
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    category: "Monitors",
    rating: 4.6,
    reviews: [
      {
        id: "r27",
        userName: "Amit Shah",
        rating: 5,
        comment: "Amazing for productivity and gaming!",
        date: "2023-06-12",
      },
      {
        id: "r28",
        userName: "Priya Reddy",
        rating: 4,
        comment: "Great display, but takes up a lot of desk space.",
        date: "2023-06-11",
      },
    ],
    features: [
      "34-inch WQHD (3440x1440) IPS Display",
      "21:9 Aspect Ratio",
      "AMD FreeSync",
      "sRGB 99% Color Gamut",
    ],
    stock: 20,
    brand: "LG",
    discount: 10,
  },
  {
    id: "15",
    name: "Kindle Paperwhite Signature Edition",
    description:
      'Premium e-reader with a 6.8" display, wireless charging, and auto-adjusting front light.',
    price: 17999,
    image:
      "https://images.unsplash.com/photo-1592894869086-f828b161e90a?w=500&q=80",
    category: "E-readers",
    rating: 4.8,
    reviews: [
      {
        id: "r29",
        userName: "Neha Gupta",
        rating: 5,
        comment: "Best e-reader I've ever used!",
        date: "2023-06-14",
      },
      {
        id: "r30",
        userName: "Karthik Iyer",
        rating: 5,
        comment: "The adjustable warm light is a game-changer.",
        date: "2023-06-13",
      },
    ],
    features: [
      '6.8" display with 300 ppi',
      "24 LED front light",
      "Wireless charging",
      "32 GB storage",
    ],
    stock: 50,
    brand: "Amazon",
    newArrival: true,
  },
  {
    id: "16",
    name: "Dyson V11 Absolute Cordless Vacuum Cleaner",
    description:
      "Powerful cordless vacuum with up to 60 minutes of fade-free suction and intelligent reporting.",
    price: 54900,
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&q=80",
    category: "Home Appliances",
    rating: 4.7,
    reviews: [
      {
        id: "r31",
        userName: "Rahul Sharma",
        rating: 5,
        comment: "Best vacuum cleaner I've ever used!",
        date: "2023-06-16",
      },
      {
        id: "r32",
        userName: "Anita Desai",
        rating: 4,
        comment: "Great suction power, but a bit heavy for long use.",
        date: "2023-06-15",
      },
    ],
    features: [
      "Up to 60 minutes run time",
      "LCD screen",
      "Whole-machine filtration",
      "Dyson Hyperdymium motor",
    ],
    stock: 25,
    brand: "Dyson",
    newArrival: true,
  },
  {
    id: "17",
    name: "Fitbit Sense Advanced Smartwatch",
    description:
      "Advanced health smartwatch with ECG app, EDA Scan app, and skin temperature sensor.",
    price: 22999,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
    category: "Wearables",
    rating: 4.5,
    reviews: [
      {
        id: "r33",
        userName: "Vikram Patel",
        rating: 5,
        comment: "Incredible health tracking features!",
        date: "2023-06-18",
      },
      {
        id: "r34",
        userName: "Priya Reddy",
        rating: 4,
        comment: "Good smartwatch, but battery life could be better.",
        date: "2023-06-17",
      },
    ],
    features: [
      "ECG app",
      "EDA Scan app",
      "Skin temperature sensor",
      "6+ day battery life",
    ],
    stock: 40,
    brand: "Fitbit",
    discount: 15,
  },
  {
    id: "18",
    name: "Nikon Z6 II Mirrorless Camera",
    description:
      "Full-frame mirrorless camera with 24.5MP sensor, 4K UHD video, and dual EXPEED 6 processors.",
    price: 164995,
    image:
      "https://images.unsplash.com/photo-1621985499238-698dfd45b017?w=500&q=80",
    category: "Cameras",
    rating: 4.8,
    reviews: [
      {
        id: "r35",
        userName: "Arun Kumar",
        rating: 5,
        comment: "Exceptional image quality and low-light performance!",
        date: "2023-06-20",
      },
      {
        id: "r36",
        userName: "Sneha Gupta",
        rating: 4,
        comment:
          "Great camera, but the menu system takes some getting used to.",
        date: "2023-06-19",
      },
    ],
    features: [
      "24.5MP full-frame sensor",
      "4K UHD video",
      "Dual EXPEED 6 processors",
      "273-point AF system",
    ],
    stock: 15,
    brand: "Nikon",
    newArrival: true,
  },
  {
    id: "19",
    name: "Breville Barista Express Espresso Machine",
    description:
      "Semi-automatic espresso machine with built-in grinder and pressure gauge for cafe quality coffee at home.",
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1612887726773-e64e20cf08fe?w=500&q=80",
    category: "Home Appliances",
    rating: 4.7,
    reviews: [
      {
        id: "r37",
        userName: "Rajesh Iyer",
        rating: 5,
        comment: "Makes amazing espresso! Worth every penny.",
        date: "2023-06-22",
      },
      {
        id: "r38",
        userName: "Meera Kapoor",
        rating: 4,
        comment: "Great machine, but requires some learning curve.",
        date: "2023-06-21",
      },
    ],
    features: [
      "Integrated conical burr grinder",
      "Precise espresso extraction",
      "Micro-foam milk texturing",
      "Grind size dial",
    ],
    stock: 20,
    brand: "Breville",
    discount: 10,
  },
  {
    id: "20",
    name: "LG CX 65-inch 4K OLED TV",
    description:
      "65-inch 4K OLED TV with AI-powered α9 Gen 3 processor, NVIDIA G-SYNC, and Dolby Vision IQ & Atmos.",
    price: 234990,
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80",
    category: "TVs",
    rating: 4.9,
    reviews: [
      {
        id: "r39",
        userName: "Amit Choudhury",
        rating: 5,
        comment: "Incredible picture quality! Best TV I've ever owned.",
        date: "2023-06-24",
      },
      {
        id: "r40",
        userName: "Pooja Mehta",
        rating: 5,
        comment:
          "Amazing for movies and gaming. The OLED makes a huge difference.",
        date: "2023-06-23",
      },
    ],
    features: [
      "4K OLED display",
      "AI-powered α9 Gen 3 processor",
      "NVIDIA G-SYNC",
      "Dolby Vision IQ & Atmos",
    ],
    stock: 10,
    brand: "LG",
    newArrival: true,
  },
  {
    id: "21",
    name: "Logitech G Pro X Mechanical Gaming Keyboard",
    description:
      "Professional-grade mechanical gaming keyboard with swappable switches and customizable RGB lighting.",
    price: 12995,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    category: "Gaming Peripherals",
    rating: 4.7,
    reviews: [
      {
        id: "r41",
        userName: "Rahul Sharma",
        rating: 5,
        comment: "Amazing build quality and responsiveness!",
        date: "2023-06-25",
      },
      {
        id: "r42",
        userName: "Priya Patel",
        rating: 4,
        comment: "Great keyboard, but a bit pricey.",
        date: "2023-06-24",
      },
    ],
    features: [
      "Swappable switches",
      "Customizable RGB lighting",
      "Detachable cable",
      "Compact tenkeyless design",
    ],
    stock: 30,
    brand: "Logitech",
    newArrival: true,
  },
  {
    id: "22",
    name: "Samsung Galaxy Tab S7+",
    description:
      "12.4-inch Android tablet with S Pen, 120Hz display, and powerful performance for productivity and entertainment.",
    price: 69999,
    image:
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=500&q=80",
    category: "Tablets",
    rating: 4.8,
    reviews: [
      {
        id: "r43",
        userName: "Amit Desai",
        rating: 5,
        comment: "Best Android tablet I've ever used!",
        date: "2023-06-27",
      },
      {
        id: "r44",
        userName: "Neha Gupta",
        rating: 4,
        comment:
          "Great for work and play, but Android app ecosystem could be better.",
        date: "2023-06-26",
      },
    ],
    features: [
      "12.4-inch Super AMOLED display",
      "120Hz refresh rate",
      "S Pen included",
      "DeX mode for PC-like experience",
    ],
    stock: 25,
    brand: "Samsung",
    discount: 10,
  },
  {
    id: "23",
    name: "Anker PowerCore 26800 Portable Charger",
    description:
      "High-capacity 26800mAh portable battery pack with 3 USB ports for charging multiple devices simultaneously.",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    category: "Accessories",
    rating: 4.6,
    reviews: [
      {
        id: "r45",
        userName: "Vikram Singh",
        rating: 5,
        comment: "Incredible battery life, charges my devices multiple times!",
        date: "2023-06-29",
      },
      {
        id: "r46",
        userName: "Anjali Reddy",
        rating: 4,
        comment: "Great capacity, but a bit heavy to carry around.",
        date: "2023-06-28",
      },
    ],
    features: [
      "26800mAh capacity",
      "3 USB output ports",
      "PowerIQ and VoltageBoost technology",
      "Recharges in 6 hours with included charger",
    ],
    stock: 50,
    brand: "Anker",
    discount: 15,
  },
  {
    id: "24",
    name: "Philips Hue White and Color Ambiance Starter Kit",
    description:
      "Smart lighting system with color-changing bulbs, bridge, and dimmer switch for creating the perfect ambiance.",
    price: 15999,
    image:
      "https://images.unsplash.com/photo-1566245024852-6d676d4c58e9?w=500&q=80",
    category: "Smart Home",
    rating: 4.7,
    reviews: [
      {
        id: "r47",
        userName: "Rajesh Khanna",
        rating: 5,
        comment: "Transformed my home lighting experience!",
        date: "2023-07-01",
      },
      {
        id: "r48",
        userName: "Meera Iyer",
        rating: 4,
        comment: "Great product, but initial setup can be tricky.",
        date: "2023-06-30",
      },
    ],
    features: [
      "3 color-changing bulbs",
      "Hue Bridge included",
      "Dimmer switch",
      "16 million colors",
    ],
    stock: 40,
    brand: "Philips",
    newArrival: true,
  },
  {
    id: "25",
    name: "DJI Mini 3 Pro Drone",
    description:
      "Compact and powerful drone with 4K camera, obstacle avoidance, and 34-minute flight time.",
    price: 89999,
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80",
    category: "Drones",
    rating: 4.9,
    reviews: [
      {
        id: "r49",
        userName: "Arjun Kapoor",
        rating: 5,
        comment: "Incredible drone for its size, amazing camera quality!",
        date: "2023-07-03",
      },
      {
        id: "r50",
        userName: "Priya Sharma",
        rating: 5,
        comment:
          "Perfect for travel, easy to fly and captures stunning footage.",
        date: "2023-07-02",
      },
    ],
    features: [
      "4K/60fps video",
      "48MP photos",
      "34-minute flight time",
      "Tri-directional obstacle sensing",
    ],
    stock: 20,
    brand: "DJI",
    newArrival: true,
  },
];
