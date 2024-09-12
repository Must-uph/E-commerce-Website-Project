export let products = JSON.parse(localStorage.getItem('products')) || [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel",
      "men"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "men"
    ],
    colors: {
      teal: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      red: "images/products/adults-plain-cotton-tshirt-2-pack-red.jpg",
      black: "images/products/adults-plain-cotton-tshirt-2-pack-black.jpg"
    },
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 2067,
    newPrice: 1000,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel",
      "men",
      "women"
    ],
    colors: {
      yellow: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
      teal: "images/products/plain-hooded-fleece-sweatshirt-teal.jpg"
    }
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "men"
    ],
    colors: {
      gray: "images/products/knit-athletic-sneakers-gray.jpg",
      pink: "images/products/knit-athletic-sneakers-pink.webp"
    }
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel",
      "mwoen"
    ],
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1560,
    newPrice: 1000,
    keywords: [
      "accessories",
      "shades",
      "men",
      "women"
    ],
    colors: {
      black: "images/products/round-sunglasses-black.jpg",
      gold: "images/products/round-sunglasses-gold.jpg"
    }
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "women",
      "beach",
      "summer"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "men"
    ],
    colors: {
      gray: "images/products/men-slim-fit-summer-shorts-gray.jpg",
      beige: "images/products/men-slim-fit-summer-shorts-beige.jpg",
      black: "images/products/men-slim-fit-summer-shorts-black.jpg"
    }
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel",
      "men",
      "women"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "women"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "women",
      "apparel"
    ],
    colors: {
      black: "images/products/women-stretch-popover-hoodie-black.jpg",
      blue: "images/products/women-stretch-popover-hoodie-blue.jpg",
      gray: "images/products/women-stretch-popover-hoodie-gray.jpg"
    },
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    newPrice: 1000,
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "men"
    ],
    colors: {
      blue: "images/products/men-golf-polo-t-shirt-blue.jpg",
      black: "images/products/men-golf-polo-t-shirt-black.jpg",
      red: "images/products/men-golf-polo-t-shirt-red.jpg"
    },
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "women"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "men"
    ],
    colors: {
      beige: "images/products/men-chino-pants-beige.jpg",
      black: "images/products/men-chino-pants-black.jpg",
      green: "images/products/men-chino-pants-green.jpg"
    }
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "men"
    ],
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades",
      "men"
    ],
    colors: {
      brown: "images/products/men-navigator-sunglasses-brown.jpg",
      silver: "images/products/men-navigator-sunglasses-silver.jpg"
    }
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "women"
    ],
    colors: {
      olive: "images/products/women-french-terry-fleece-jogger-camo.jpg",
      gray: "images/products/women-french-terry-fleece-jogger-gray.jpg"
    }
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 2400,
    keywords: [
      "accessories",
      "women"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 10747,
    newPrice: 9000,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "men"
    ],
    colors: {
      red: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
      black: "images/products/men-cozy-fleece-zip-up-hoodie-black.jpg"
    }
  },
  {
    id: "gs56nhp9-951g-gjw9-12nb-ykwdb852jbx8",
    image: "images/products/dc-court-graffik-white-sneakers.jpg",
    name: "DC Court Graffik Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 6000,
    newPrice: 5000,
    keywords: [
      "shoes",
      "snackers",
      "footwear",
      "men",
      "women"
    ],
    colors: {
      white: "images/products/dc-court-graffik-white-sneakers.jpg",
      burlywood: "images/products/dc-court-graffik-burlywood-sneakers.png",
      grey: "images/products/dc-court-graffik-grey-sneakers.jpg",
      blue: "images/products/dc-court-graffik-blue-sneakers.png",
      black: "images/products/dc-court-graffik-black-sneakers.jpg",
    }
  },
  {
    id: "3n8b286d-8g2r-8dh3-lzv8-1n9g4k2h6p0q",
    image: "images/products/crock-footbed-slide-sandale-with-adjustable-buckle-tan.jpg",
    name: "Crock Footbed Slide Sandale With Adjustable Buckle",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 1300,
    keywords: [
      "sandals",
      "crock",
      "footbed",
      "slide",
      "buckle",
      "men",
      "women"
    ],
    colors: {
      tan: "images/products/crock-footbed-slide-sandale-with-adjustable-buckle-tan.jpg",
      blanchedalmond: "images/products/crock-footbed-slide-sandale-with-adjustable-buckle-blanchedalmond.jpg",
      black: "images/products/crock-footbed-slide-sandale-with-adjustable-buckle-black.jpg",
    }
  },
  {
    id: "2f7d3k8s-3d9e-8r4b-6z8l-1n9g4k2h6p0q",
    image: "images/products/men-ties.png",
    name: "4 Piece Men's Ties",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 999,
    keywords: [
      "ties",
      "men"
    ]
  },
  {
    id: "7a4l6p9t-8q2b-3d6r-5f7s-4n0j2k3m8v7n",
    image: "images/products/sony-alpha-a6400-mirrorless-camera.jpg",
    name: "Sony Alpha A6400 Mirrorless Camera",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 99800,
    keywords: [
      "sony",
      "camera"
    ]
  },
  {
    id: "8b2k6r9t-4d7e-1q3s-6f8l-2n0m3k5p7v9z",
    image: "images/products/sony-4k-hd-video-recording-fdrax33-handycam-camcorder.jpg",
    name: "Sony 4K HD Video Recording FDRAX33 Handycam Camcorder",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 60999,
    newPrice: 55000,
    keywords: [
      "recording",
      "handycam",
      "video",
      "sony",
      "camera"
    ]
  },
  {
    id: "9d8l5k7p-3q2r-6f9s-1b4t-7m0n2k3v6p4z",
    image: "images/products/nikon-z6-fx-format-mirrorless-camera.jpg",
    name: "Nikon Z6 FX-Format Mirrorless Camera",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 174999,
    keywords: [
      "camera",
      "nikon"
    ]
  },
  {
    id: "4c8f2k7s-1d9l-6q3b-8r5t-0n2j3m6v4p7n",
    image: "images/products/arzopa-portable-monitor.webp",
    name: "ARZOPA Portable Monitor - 1080P FHD Laptop Monitor",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 12999,
    keywords: [
      "monitor",
      "arzopa",
      "laptop"
    ]
  },
  {
    id: "5b7d3k9t-4q2r-8f1l-6m5p-2n0j6v4c8p7s",
    image: "images/products/asus-tuf-gaming-a16-2024.webp",
    name: "Asus TUF Gaming A16 2024",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 94999,
    keywords: [
      "asus",
      "laptop",
      "gaming"
    ]
  },
  {
    id: "6c9l4k8s-3d7e-2f1r-5m0p-8n2j7v6b4p9z",
    image: "images/products/apple-2023-macbook-pro-laptop-m3-max-chip.webp",
    name: "Macbook Pro 2023 With M3 Max Chip",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 319900,
    keywords: [
      "macbook",
      "laptop",
      "apple"
    ]
  },
  {
    id: "7a5f3k9p-6d2l-1q8r-9c4t-0m7n2k6v3b8p",
    image: "images/products/macbook-air-2024-m3-chip.jpg",
    name: "Macbook Air 2024 With M3 Chip",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 155900,
    keywords: [
      "macbook",
      "laptop",
      "apple"
    ]
  },
  {
    id: "8d2k4r7p-9q3b-6f8l-1n5s-0m7j3v6c2p9z",
    image: "images/products/macbook-air-2020-m2.webp",
    name: "Macbook Air 2020 With M2",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 122999,
    keywords: [
      "macbook",
      "laptop",
      "apple"
    ]
  },
  {
    id: "9e8l6k3p-1d7r-5q2f-9m4t-2n0j3v6b7p5s",
    image: "images/products/acer-predator-helios-neo16-gaming.jpg",
    name: "Acer Predator Helios Neo16 Gaming Laptop",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 113750,
    keywords: [
      "acer",
      "gaming",
      "laptop"
    ]
  },
  {
    id: "2b4k9s7p-3d8l-1f6r-5m0q-9n2j6v3c4p8s",
    image: "images/products/asus-tuf-gaming-a15-2023.webp",
    name: "Asus TUF A15 Gaming Laptop 2023",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 129999,
    keywords: [
      "laptop",
      "asus",
      "gaming"
    ]
  },
  {
    id: "3a5f9k7p-2d8l-6r4q-1m3t-0n7j2v6c5p8b",
    image: "images/products/panasonic-limix-g7-4k-digital-camera.jpg",
    name: "Panasonic LIMIX G7 4K Digital Camera",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 64799,
    keywords: [
      "camera",
      "limix",
      "panasonic"
    ]
  },
  {
    id: "4b6l7k9p-8d3r-2f1t-6m5q-9n0j3v4c2p7s",
    image: "images/products/3-pairs-nike-socks-black-gray-white.jpg",
    name: "3 Pairs Nike Socks Black Gray White",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1790,
    keywords: [
      "socks",
      "nike",
      "men",
      "women"
    ]
  },
  {
    id: "5c8f7k3p-2d9l-1r4q-6m8t-3n0j2v6b7p9s",
    image: "images/products/adidas-essentials-beanie-black.png",
    name: "Adidas Essentials Beanies",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 2200,
    keywords: [
      "beanie",
      "hat",
      "adidas",
      "men",
      "women"
    ],
    colors: {
      black: "images/products/adidas-essentials-beanie-black.png",
      darkblue: "images/products/adidas-essentials-beanie-darkblue.png",
      salmon: "images/products/adidas-essentials-beanie-salmon.png",
    }
  },
  {
    id: "6a9l4k7p-1d8r-3f2q-5m6t-9n0j2v3c8p5b",
    image: "images/products/adidas-black-bucket-hat.jpg",
    name: "Adidas Bucket Hats",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1999,
    keywords: [
      "hat",
      "bucket",
      "adidas",
      "men",
      "women"
    ],
    colors: {
      black: "images/products/adidas-black-bucket-hat.jpg",
      darkolivegreen: "images/products/adidas-darkolivegreen-bucket-hat.jpg",
      cyan: "images/products/adidas-cyan-bucket-hat.jpg",
    }
  },
  {
    id: "3n8b286d-8g2r-8dh3-lzv8-2s6h3hs827jz",
    image: "images/products/adidas-campus-00s-black-white-sneakers.jpg",
    name: "Adidas Campus 00s Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 15999,
    newPrice: 10000,
    keywords: [
      "adidas",
      "sneakers",
      "campus",
      "men",
      "women"
    ],
    colors: {
      black: "images/products/adidas-campus-00s-black-white-sneakers.jpg",
      yellow: "images/products/adidas-campus-00s-yellow-white-sneakers.jpg",
      gray: "images/products/adidas-campus-00s-gray-white-sneakers.jpg",
      green: "images/products/adidas-campus-00s-green-white-sneakers.jpg",
      red: "images/products/adidas-campus-00s-red-white-sneakers.jpg",
      brown: "images/products/adidas-campus-00s-brown-white-sneakers.jpg",
    }
  },
  {
    id: "c9fj29kf-4k8b-92jf-lz0v-3nf93jd7dn0c",
    image: "images/products/adidas-forum-low-blue-sneakers.jpg",
    name: "Adidas Forum Low Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 4800,
    keywords: [
      "adidas",
      "sneakers",
      "forum",
      "men",
      "women"
    ],
    colors: {
      blue: "images/products/adidas-forum-low-blue-sneakers.jpg",
      yellow: "images/products/adidas-forum-low-yellow-sneakers.jpg",
      teal: "images/products/adidas-forum-low-teal-sneakers.jpg",
      seagreen: "images/products/adidas-forum-low-seagreen-sneakers.jpg",
      mediumpurple: "images/products/adidas-forum-low-mediumpurple-sneakers.jpg",
      brown: "images/products/adidas-forum-low-brown-sneakers.jpg",
    }
  },
  {
    id: "f7bg39jd-8d9c-23jf-zx1k-4mf9kfjd02jg",
    image: "images/products/adidas-predator-20+sg-green-football-boots.jpg",
    name: "Adidas Predator 20+ SG Football Boots",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 15750,
    keywords: [
      "adidas",
      "boots",
      "predator",
      "football",
      "sport",
      "men"
    ],
    colors: {
      chartreuse: "images/products/adidas-predator-20+sg-green-football-boots.jpg",
      white: "images/products/adidas-predator-20+sg-white-football-boots.jpg"
    }
  },
  {
    id: "h6mj40ke-2f7g-19jc-yz2m-5pf8kjd03mnk",
    image: "images/products/adidas-predator-freak-low-fg-pink-football-boots.jpg",
    name: "Adidas Predator Freak Low Fg Pink Football Boots",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 13599,
    keywords: [
      "adidas",
      "boots",
      "predator",
      "football",
      "sport",
      "men"
    ]
  },
  {
    id: "b8dj21lf-9h5n-89fh-tk1p-2gf9ldjd04kj",
    image: "images/products/adidas-crazy-fast-green-football-boots.jpg",
    name: "Adidas Crazyfast League Football Boots",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 10600,
    keywords: [
      "adidas",
      "boots",
      "crazyfast",
      "football",
      "sport"
    ],
    colors: {
      chartreuse: "images/products/adidas-crazy-fast-green-football-boots.jpg",
      blue: "images/products/adidas-crazy-fast-blue-football-boots.jpg",
      white: "images/products/adidas-crazy-fast-white-football-boots.jpg",
      red: "images/products/adidas-crazy-fast-red-football-boots.jpg"
    }
  },
  {
    id: "j9hg32mk-4l9f-24hc-nv2q-7nf8mdjd05gh",
    image: "images/products/adidas-samba-og-putty-white-green-sneakers.jpg",
    name: "Adidas Samba OG Putty Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 11999,
    keywords: [
      "adidas",
      "samba",
      "sneakers",
      "men",
      "women"
    ],
    colors: {
      green: "images/products/adidas-samba-og-putty-white-green-sneakers.jpg",
      mediumseagreen: "images/products/adidas-samba-og-putty-mediumseagreen-white-sneakers.jpg",
      white: "images/products/adidas-samba-og-putty-white-sneakers.jpg",
      maroon: "images/products/adidas-samba-og-putty-white-maroon-sneakers.jpg",
      black: "images/products/adidas-samba-og-putty-black-white-sneakers.jpg"
    }
  },
  {
    id: "l8dj19lf-7g5n-72fh-pm4k-9gf8ndjd06jk",
    image: "images/products/apple-watch-se-gps-aluminium-case-sport-band-white.jpg",
    name: "Apple Watch SE GPS Aluminium Case Sport Band",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 15000,
    keywords: [
      "apple",
      "watch"
    ],
    colors: {
      white: "images/products/apple-watch-se-gps-aluminium-case-sport-band-white.jpg",
      black: "images/products/apple-watch-se-gps-aluminium-case-sport-band-black.jpg",
      pink: "images/products/apple-watch-se-gps-aluminium-case-sport-band-pink.jpg",
      purple: "images/products/apple-watch-se-gps-aluminium-case-sport-band-purple.jpg",
      violet: "images/products/apple-watch-se-gps-aluminium-case-sport-band-violet.jpg",
    }
  },
  {
    id: "m3ck12ld-8h2g-35jf-wx5m-6mf7nkmd07ln",
    image: "images/products/asics-court-mz-beige-brown-sneakers.jpg",
    name: "Asics Court MZ Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 8099,
    keywords: [
      "asics",
      "sneakers",
      "men",
      "women"
    ],
    colors: {
      brown: "images/products/asics-court-mz-beige-brown-sneakers.jpg",
      white: "images/products/asics-court-mz-white-black-sneakers.jpg",
      gray: "images/products/asics-court-mz-beige-gray-sneakers.jpg"
    }
  },
  {
    id: "p6lk34lf-5g8d-28hc-ty8l-2hf6mpjd08op",
    image: "images/products/black-warm-knit-gloves.jpg",
    name: "Warm Knit Gloves",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 3500,
    keywords: [
      "gloves",
      "winter",
      "warm",
      "men",
      "women"
    ],
    colors: {
      black: "images/products/black-warm-knit-gloves.jpg",
      pink: "images/products/pink-warm-knit-gloves.jpg"
    }
  },
  {
    id: "q7mj35mf-9k3c-61jd-ux2b-1nf5lqjd09qk",
    image: "images/products/gentle-monster-black-sunglasses.jpg",
    name: "Gentle Monster Black Sunglasses",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 18000,
    keywords: [
      "sunglasses",
      "men"
    ]
  },
  {
    id: "r4nh41kc-6f9e-27jf-vx7q-3gf9lrjd10rq",
    image: "images/products/lacoste-red-cap.jpg",
    name: "Lacoste Caps",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 4299,
    keywords: [
      "lacoste",
      "cap",
      "men",
      "women"
    ],
    colors: {
      red: "images/products/lacoste-red-cap.jpg",
      pink: "images/products/lacoste-pink-cap.jpg",
      white: "images/products/lacoste-white-cap.jpg",
      darkblue: "images/products/lacoste-darkblue-cap.jpg",
      green: "images/products/lacoste-green-cap.jpg",
      cyan: "images/products/lacoste-cyan-cap.jpg",
    }
  },
  {
    id: "s8pj46ld-3f2g-18hc-wy4p-4hf8nsjd11sp",
    image: "images/products/men-black-simple-hoodie.jpg",
    name: "Men Pullover Oversize Hoodies - Plush Cotton",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 5399,
    keywords: [
      "men",
      "hoodie"
    ],
    colors: {
      black: "images/products/men-black-simple-hoodie.jpg",
      red: "images/products/men-red-simple-hoodie.jpg",
      purple: "images/products/men-purple-simple-hoodie.jpg",
      green: "images/products/men-green-simple-hoodie.jpg",
      pink: "images/products/men-pink-simple-hoodie.jpg",
      orange: "images/products/men-orange-simple-hoodie.jpg"
    }
  },
  {
    id: "e7db5d4e-2f1b-4c83-9ff9-df1eecdf8701",
    image: "images/products/men-casual-cargo-dark-brown-pants.jpg",
    name: "Men Casual Cargo Dark Brown Pants",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2000,
    keywords: [
      "men",
      "pants",
      "casual",
      "cargo"
    ]
  },
  {
    id: "d2c0a7f3-14a6-4b2e-bf1e-409d1c4b9f4d",
    image: "images/products/men-nike-black-grey-strick-trainning-t-shirts.jpg",
    name: "Men Nike Black Grey Strick Training T-Shirts",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 1799,
    keywords: [
      "men",
      "nike",
      "tshirts",
      "training",
      "sport",
      "football"
    ]
  },
  {
    id: "c3e13ed9-9394-46a7-a58d-053d8f03eb53",
    image: "images/products/men-nike-dri-fit-basketball-shorts.jpg",
    name: "Men Nike Dri-Fit Basketball Shorts",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2699,
    keywords: [
      "men",
      "basketball",
      "sport",
      "drifit",
      "nike",
      "shorts"
    ]
  },
  {
    id: "cfb9d77b-0f2e-4317-bcfa-5f789c6a34f3",
    image: "images/products/men-nike-dri-fit-strick-venom-3-black-shorts.jpg",
    name: "Men Nike Dri-Fit Strick Venom 3 Black Shorts",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2500,
    keywords: [
      "men",
      "sport",
      "drifit",
      "nike",
      "shorts"
    ]
  },
  {
    id: "f4ad749d-f834-49ab-8b41-c66fbdd68ec3",
    image: "images/products/men-nike-flex-distance-running-black-shorts.jpg",
    name: "Men Nike Flex Distance Running Black Shorts",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2499,
    keywords: [
      "men",
      "sport",
      "running",
      "run",
      "nike",
      "shorts"
    ]
  },
  {
    id: "a29b3e8c-8b60-4b73-b83d-3a5bc3a0a485",
    image: "images/products/polo-black-white-cap.jpg",
    name: "Polo Caps",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 5500,
    keywords: [
      "men",
      "sport",
      "polo",
      "cotton",
      "cap"
    ],
    colors: {
      black: "images/products/polo-black-white-cap.jpg",
      white: "images/products/polo-white-black-cap.jpg",
      yellow: "images/products/polo-yellow-blue-cap.jpg",
      orange: "images/products/polo-orange-blue-cap.jpg",
      pink: "images/products/polo-pink-blue-cap.jpg",
      violet: "images/products/polo-violet-green-cap.jpg"
    }
  },
  {
    id: "7b0e095d-484a-4f03-b089-2e2c0c17e0e1",
    image: "images/products/men-slik-satin-blue-pyjama-set.jpg",
    name: "Silk Satin Pyjama Set",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 4000,
    keywords: [
      "men",
      "pyjama",
      "sleepwear"
    ],
    colors: {
      blue: "images/products/men-slik-satin-blue-pyjama-set.jpg",
      pink: "images/products/women-slik-satin-pink-pyjama-set.jpg"
    }
  },
  {
    id: "82d4fbf0-3bfc-42b7-8c11-e5c07c28b8a2",
    image: "images/products/new-balance-550-cyan-sneakers.jpg",
    name: "New Balance 550 Aime Leon Dore Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 7000,
    keywords: [
      "men",
      "women",
      "sneakers",
      "newbalance",
      "new balance",
      "550"
    ],
    colors: {
      cyan: "images/products/new-balance-550-cyan-sneakers.jpg",
      orange: "images/products/new-balance-550-orange-sneakers.jpg",
      darkred: "images/products/new-balance-550-darkred-sneakers.jpg",
      mediumseagreen: "images/products/new-balance-550-mediumseagreen-sneakers.jpg",
      green: "images/products/new-balance-550-green-sneakers.jpg"
    }
  },
  {
    id: "55396d78-81c0-4d3f-95b7-9ac9e07fb44e",
    image: "images/products/new-york-adjustable-green-cap.jpg",
    name: "New York Caps",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 2000,
    keywords: [
      "men",
      "women",
      "newyork",
      "new york",
      "cap"
    ],
    colors: {
      green: "images/products/new-york-adjustable-green-cap.jpg",
      black: "images/products/new-york-black-cap.jpg",
      yellow: "images/products/new-york-yellow-cap.jpg",
      grey: "images/products/new-york-grey-cap.jpg",
      darkolivegreen: "images/products/new-york-darkolivegreen-cap.jpg",
      red: "images/products/new-york-white-red-cap.jpg"
    }
  },
  {
    id: "1563a1b0-62b0-48ee-90b7-8b6d7a706c38",
    image: "images/products/nike-black-cap.jpg",
    name: "Nike Caps",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1500,
    keywords: [
      "men",
      "women",
      "cap",
      "nike"
    ],
    colors: {
      black: "images/products/nike-black-cap.jpg",
      white: "images/products/nike-white-cap.jpg",
      cyan: "images/products/nike-cyan-cap.jpg",
      darkolivegreen: "images/products/nike-darkolivegreen-cap.jpg",
      grey: "images/products/nike-grey-cap.jpg"
    }
  },
  {
    id: "2efb31d6-5e34-44f6-a2a6-9e02310c2cf1",
    image: "images/products/nike-mercurial-zoom-superfly-elite-fg-atmosphere-grey-football- boots.jpg",
    name: "Nike Mercurial Zoom Superfly Elite Fg Atmosphere Grey Football Boots",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 12500,
    keywords: [
      "men",
      "nike",
      "football",
      "sport",
      "boots",
      "mercurial"
    ]
  },
  {
    id: "ea1d6b5b-2d57-4184-80c7-8e54166c736b",
    image: "images/products/nike-phantom-vision-academy-white-gold-football-boots.jpg",
    name: "Nike Phantom Vision Academy Football Boots",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 10000,
    keywords: [
      "men",
      "nike",
      "football",
      "sport",
      "boots",
      "phantom"
    ],
    colors: {
      darkgoldenrod: "images/products/nike-phantom-vision-academy-white-gold-football-boots.jpg",
      greenyellow: "images/products/nike-phantom-vision-academy-white-luminous-yellow-football-boots.jpg"
    }
  },
  {
    id: "ea7c99a6-1c9c-4dd2-a5e1-2d9d098cfa29",
    image: "images/products/nike-black-bucket-hat.jpeg",
    name: "Nike Bucket Hats",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 2500,
    keywords: [
      "men",
      "women",
      "nike",
      "bucket",
      "hat"
    ],
    colors: {
      black: "images/products/nike-black-bucket-hat.jpeg",
      blue: "images/products/nike-blue-bucket-hat.jpeg",
      pink: "images/products/nike-pink-bucket-hat.jpeg",
      maroon: "images/products/nike-maroon-bucket-hat.jpg"
    }
  },
  {
    id: "5b212bb9-7c49-494f-8f67-7fe86a769d4c",
    image: "images/products/nike-mercurial-superfly-9-fg-voltage-purple.jpg",
    name: "Nike Mercurial Superfly 9 FG Voltage Purple Boots",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 31900,
    keywords: [
      "men",
      "nike",
      "sport",
      "football",
      "boots",
      "mercurial"
    ]
  },
  {
    id: "4e589674-516a-4651-9358-71e4a3f5767b",
    image: "images/products/onitsuka-tiger-tokuten-caramel-cream-sneakers.jpg",
    name: "Onitsuka Tiger Tokuten Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 7550,
    keywords: [
      "men",
      "women",
      "onitsuka",
      "sneakers"
    ],
    colors: {
      chocolate: "images/products/onitsuka-tiger-tokuten-caramel-cream-sneakers.jpg",
      red: "images/products/onitsuka-tiger-tokuten-white-red-gum-sneakers.jpg",
      black: "images/products/onitsuka-tiger-tokuten-white-black-sneakers.jpg",
      darkgray: "images/products/onitsuka-tiger-tokuten-darkgray-orange-white-sneakers.jpg",
      white: "images/products/onitsuka-tiger-tokuten-white-sneakers.jpg",
      lightblue: "images/products/onitsuka-tiger-tokuten-lightblue-darkslategray-sneakers.jpg"
    }
  },
  {
    id: "4cfa6506-4513-4d34-bcb4-76c3d5447dfb",
    image: "images/products/polo-bear-striped-cotton-pajama-set.jpg",
    name: "Polo Bear Striped Cotton Pajama Set",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 9500,
    newPrice: 7500,
    keywords: [
      "men",
      "pyjama",
      "sleepwear",
      "cotton",
      "polo"
    ]
  },
  {
    id: "4d0e7f12-c28f-41e0-bb1f-f43e014d1f5b",
    image: "images/products/polo-navy-blue-long-sleeve-pyjama-set.jpg",
    name: "Polo Navy Blue Long Sleeve Pajama Set",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 8400,
    keywords: [
      "men",
      "polo",
      "sleepwear",
      "pyjama"
    ]
  },
  {
    id: "1dbad146-4422-48cf-875f-7a290b33b2ea",
    image: "images/products/puma-180-green-white-sneakers.jpg",
    name: "Puma 180 Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 5500,
    keywords: [
      "men",
      "180",
      "women",
      "puma",
      "sneakers"
    ],
    colors: {
      green: "images/products/puma-180-green-white-sneakers.jpg",
      white: "images/products/puma-180-white-sneakers.jpg",
      black: "images/products/puma-180-black-sneakers.jpg",
      darkgray: "images/products/puma-180-white-black-sneakers.jpg",
      navy: "images/products/puma-180-navy-red-sneakers.jpg",
      burlywood: "images/products/puma-180-burlywood-bisque-sneakers.jpg"
    }
  },
  {
    id: "007c2a11-b658-4d6c-9bc1-5c6a1cba4a4b",
    image: "images/products/puma-future-match-tt-breakthrough-white-red-football-boots.jpg",
    name: "Puma Future Match TT Breakthrough White Red Football Boots",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 10000,
    keywords: [
      "men",
      "puma",
      "sport",
      "football",
      "boots",
      "future",
      "match"
    ]
  },
  {
    id: "e1fa1c7a-df1a-4072-96a2-832bafc5b632",
    image: "images/products/puma-future-z-2.1-fg-ag-yellow-football-boots.jpg",
    name: "Puma Future Z 2.1 FG Yellow Football Boots",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 9999,
    keywords: [
      "men",
      "puma",
      "sport",
      "football",
      "boots",
      "future"
    ]
  },
  {
    id: "9ae8036a-78a7-4894-8413-85865feab5e2",
    image: "images/products/puma-one-5.4-tt-football-boots.jpg",
    name: "Puma One 5.4 TT Football Boots",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 2500,
    keywords: [
      "men",
      "puma",
      "sport",
      "football",
      "boots",
      "one"
    ]
  },
  {
    id: "ad4c7a85-e2b2-4f07-924f-2722277a7067",
    image: "images/products/retro-rectangle-black-sunglasses.jpg",
    name: "Retro Rectangle Sunglasses",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1400,
    keywords: [
      "men",
      "women",
      "sunglasses",
      "retro",
      "rectangle"
    ],
    colors: {
      black: "images/products/retro-rectangle-black-sunglasses.jpg",
      white: "images/products/retro-rectangle-white-sunglasses.jpg"
    }
  },
  {
    id: "bcb06bc2-3e7a-4938-8077-bc626d6c9a5f",
    image: "images/products/round-neck-adjustable-beige-sweater.jpg",
    name: "Round Neck Sweater",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2400,
    keywords: [
      "men",
      "women",
      "sweater",
      "round",
      "neck"
    ],
    colors: {
      peru: "images/products/round-neck-adjustable-beige-sweater.jpg",
      teal: "images/products/round-neck-teal-sweater.jpg",
      black: "images/products/round-neck-black-sweater.jpg"
    }
  },
  {
    id: "92f8b2c4-6d8e-4b25-a9d0-5b97c60e7e4b",
    image: "images/products/the-north-face-black-box-cuffed-beanie.jpg",
    name: "The North Face Beanie Hats",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1800,
    keywords: [
      "men",
      "women",
      "thenorthface",
      "the north face",
      "beanie",
      "hat"
    ],
    colors: {
      black: "images/products/the-north-face-black-box-cuffed-beanie.jpg",
      brown: "images/products/the-north-face-brown-box-cuffed-beanie.jpg",
      beige: "images/products/the-north-face-beige-box-cuffed-beanie.jpg",
      seagreen: "images/products/the-north-face-seagreen-box-cuffed-beanie.jpg",
      lightsteelblue: "images/products/the-north-face-lightsteelblue-box-cuffed-beanie.jpg",
      deepskyblue: "images/products/the-north-face-deepskyblue-box-cuffed-beanie.jpg",
    }
  },
  {
    id: "cdd6b437-4f69-4f7b-835e-736a7c54e3b4",
    image: "images/products/tommy-hilfiger-darkblue-cap.jpg",
    name: "Tommy Hilfiger Caps",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 999,
    keywords: [
      "men",
      "women",
      "tommy",
      "hilfiger",
      "cap",
      "hat"
    ],
    colors: {
      darkblue: "images/products/tommy-hilfiger-darkblue-cap.jpg",
      tomato: "images/products/tommy-hilfiger-tomato-cap.jpg",
      yellow: "images/products/tommy-hilfiger-yellow-cap.jpg",
      white: "images/products/tommy-hilfiger-white-cap.jpg",
      lightskyblue: "images/products/tommy-hilfiger-lightskyblue-cap.jpg",
      pink: "images/products/tommy-hilfiger-pink-cap.jpg",
    }
  },
  {
    id: "8370d8f1-81ea-4d14-95c4-cfc83f4a35f8",
    image: "images/products/vintage-acid-washed-oversized-t-shirt.jpg",
    name: "Vintage Oversized T-Shirt",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 799,
    keywords: [
      "men",
      "women",
      "vintage",
      "tshirt",
      "oversized",
      "oversize"
    ],
    colors: {
      gray: "images/products/vintage-acid-washed-oversized-t-shirt.jpg",
      yellow: "images/products/beige-oversized-t-shirt.jpg",
      white: "images/products/white-oversized-t-shirt.jpg",
      black: "images/products/simple-black-tshirt-oversize.jpg"
    }
  },
  {
    id: "bd5d3f9b-569b-4e6a-b2dc-13d2d134bc87",
    image: "images/products/women-h&m-white-pyjama-set.jpg",
    name: "Women H&M White Pyjama Set",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2800,
    keywords: [
      "women",
      "h&m",
      "pyjama",
      "sleepwear"
    ]
  },
  {
    id: "fa64a9f4-c007-4e3a-a5b6-8d48c0a54e09",
    image: "images/products/women-hooded-long-puffer-jacket.jpg",
    name: "Women Hooded Long Puffer Jacket",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 3500,
    keywords: [
      "women",
      "jacket",
      "puffer",
      "hooded"
    ]
  },
  {
    id: "2bb01b62-0d2c-4d34-b066-1a1e1bbbd6cf",
    image: "images/products/women-retro-beret-black-hat.jpg",
    name: "Women Retro Beret Frensh Hats",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 800,
    keywords: [
      "women",
      "hat",
      "retro",
      "beret"
    ],
    colors: {
      black: "images/products/women-retro-beret-black-hat.jpg",
      red: "images/products/women-retro-beret-red-hat.jpg",
      orangered: "images/products/women-retro-beret-orangered-hat.jpg",
      white: "images/products/women-retro-beret-white-hat.jpg",
      darkblue: "images/products/women-retro-beret-darkblue-hat.jpg",
      saddlebrown: "images/products/women-retro-beret-saddlebrown-hat.jpg",
    }
  },
  {
    id: "ab5b7c6e-2330-4b2d-8979-6fefac54a273",
    image: "images/products/women-striped-soft-textured-shawl-black-grey.jpg",
    name: "Women Striped Soft Textured Shawl",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 650,
    newPrice: 390,
    keywords: [
      "women",
      "shawl",
      "striped",
      "soft"
    ],
    colors: {
      gray: "images/products/women-striped-soft-textured-shawl-black-grey.jpg",
      grey: "images/products/women-striped-soft-textured-shawl-soft-grey.jpg",
      pink: "images/products/women-striped-soft-textured-shawl-soft-pink-violet.jpg",
      white: "images/products/women-striped-soft-textured-shawl-white-grey.jpg",
      black: "images/products/women-striped-soft-shawl-black.jpg"
    }
  },
  {
    id: "6d8b1347-7c65-493f-a8a3-f2e9ef4c04de",
    image: "images/products/women-toronto-motorcycle-zipper-faux-leather-jacket.jpg",
    name: "Women Toronto Motorcycle Zipper Faux Leather Jacket",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 3999,
    keywords: [
      "women",
      "jacket",
      "faux",
      "zipper",
      "torono"
    ]
  },
  {
    id: "a832af44-08a1-4d3f-9187-c5a3f42e0d83",
    image: "images/products/women-zara-puffer-down-jacket.jpg",
    name: "Women Zara Puffer Down Jacket",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 9950,
    keywords: [
      "women",
      "jacket",
      "zara",
      "puffer"
    ]
  },
  {
    id: "2f61b27b-26ed-4044-94eb-1b7a0a2f234a",
    image: "images/products/canon-powershot-sx70-hs-digital-camera-20.3mp.jpg",
    name: "Canon Powershot SX70 HS - Digital Camera 20.3 MP",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 57490,
    keywords: [
      "canon",
      "powershot",
      "camera",
      "digital"
    ]
  },
  {
    id: "8a8e7a5f-7ed4-40c5-a43e-cd658b1e4d38",
    image: "images/products/kodak-pixpro-astro-zoom-az425-digital-camera.jpg",
    name: "Kodak Pixpro Astro Zoom AZ425 - Digital Camera",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 24570,
    keywords: [
      "camera",
      "kodak",
      "pixpro",
      "digital"
    ]
  },
  {
    id: "6a6077cb-e2e4-48d2-83a3-947dbdce57d0",
    image: "images/products/men-soft-beige-comfortable-pants.png",
    name: "Men Soft Beige Comfortable Pants",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2500,
    keywords: [
      "men",
      "pants",
      "soft",
      "comfortable"
    ]
  },
  {
    id: "09d2c4ae-04ea-41a4-9f54-833c7d835de8",
    image: "images/products/men-black-jeans-jacket.jpg",
    name: "Men Black Jeans Jacket",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 1699,
    keywords: [
      "men",
      "jacket",
      "jeans"
    ]
  },
  {
    id: "2fa54a0e-e0a6-45b1-8f68-4b8d23e73d1b",
    image: "images/products/men-summer-black-bleu-orange-shorts.jpg",
    name: "Men Summer Black Bleu Orange Shorts",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 1500,
    keywords: [
      "men",
      "shorts",
      "summer"
    ]
  },
  {
    id: "e1be3f56-4b90-485e-bd77-b10c0e2fa6f3",
    image: "images/products/iphone-15-pro-max-black.jpg",
    name: "iPhone 15 Pro Max",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 109900,
    keywords: [
      "apple",
      "iphone",
      "15",
      "max"
    ],
    colors: {
      dimgray: "images/products/iphone-15-pro-max-black.jpg",
      white: "images/products/iphone-15-pro-max-white-titanium.jpg",
      darkgray: "images/products/iphone-15-pro-max-titanium.jpg",
    }
  },
  {
    id: "71740b8b-63d3-4a3a-a0d5-2e16a82f1c5b",
    image: "images/products/p9-over-ear-wireless-headphones-white.jpg",
    name: "P9 Over Ear Wireless Headphones",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 45000,
    keywords: [
      "apple",
      "airepods",
      "wireless",
      "max",
      "headphones"
    ],
    colors: {
      white: "images/products/p9-over-ear-wireless-headphones-white.jpg",
      red: "images/products/p9-over-ear-wireless-headphones-red.jpg",
      black: "images/products/p9-over-ear-wireless-headphones-black.jpg",
      blue: "images/products/p9-over-ear-wireless-headphones-blue.jpg",
      darkseagreen: "images/products/p9-over-ear-wireless-headphones-green.jpg"
    }
  },
  {
    id: "2b8a379e-15ec-4c7f-888b-8b5c9cfc56d8",
    image: "images/products/puma-palermo-vintage-sneakers-brown-burlywood.jpg",
    name: "Puma Palermo Vintage Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 3599,
    newPrice: 2000,
    keywords: [
      "men",
      "women",
      "palermo",
      "puma",
      "sneakers"
    ],
    colors: {
      brown: "images/products/puma-palermo-vintage-sneakers-brown-burlywood.jpg",
      red: "images/products/puma-palermo-vintage-sneakers-red-darkblue.jpg",
      black: "images/products/puma-palermo-vintage-sneakers-black-beige.jpg",
      white: "images/products/puma-palermo-vintage-sneakers-white-gray.jpg",
      darkred: "images/products/puma-palermo-vintage-sneakers-white-darkred.jpg",
      navy: "images/products/puma-palermo-vintage-sneakers-navy-white.jpg"
    }
  },
  {
    id: "1a11abfc-518c-4c47-939e-0d32f9c3a678",
    image: "images/products/the-north-face-black-beige-cap.jpg",
    name: "The North Face Caps",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 1800,
    keywords: [
      "men",
      "women",
      "cap",
      "hat",
      "thenorthface",
      "the north face",
    ],
    colors: {
      black: "images/products/the-north-face-black-beige-cap.jpg",
      beige: "images/products/the-north-face-beige-blue-cap.jpg",
      gray: "images/products/the-north-face-gray-orange-cap.jpg",
      white: "images/products/the-north-face-white-orange-beige-cap.jpg",
      brown: "images/products/the-north-face-brown-darkgold-cap.jpg",
      salmon: "images/products/the-north-face-salmon-black-cap.jpg"
    }
  },
  {
    id: "30c9e0e2-2dbd-4a4c-bc59-74e98208a1ff",
    image: "images/products/adidas-predator-pro-hybrid-goalkeeper-gloves-black-deeppink.jpg",
    name: "Adidas Predator Pro Hybrid Goalkeeper Gloves",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 4500,
    keywords: [
      "sport",
      "gloves",
      "goalkeeper",
      "adidas",
      "predator"
    ],
    colors: {
      deeppink: "images/products/adidas-predator-pro-hybrid-goalkeeper-gloves-black-deeppink.jpg",
      yellow: "images/products/adidas-predator-pro-hybrid-goalkeeper-gloves-black-yellow.jpg",
      red: "images/products/adidas-predator-pro-hybrid-goalkeeper-gloves-white-red.jpg",
      blue: "images/products/adidas-predator-pro-hybrid-goalkeeper-gloves-black-blue.jpg"
    }
  },
  {
    id: "0e6a57eb-2ef1-4d68-9e76-7a800beae5ec",
    image: "images/products/everlast-dimgray-green.jpg",
    name: "Everlast Boxing Gloves Elite",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 3999,
    keywords: [
      "sport",
      "gloves",
      "everlast",
      "fight",
      "boxing"
    ],
    colors: {
      dimgray: "images/products/everlast-dimgray-green.jpg",
      navy: "images/products/everlast-navy-grey.jpg",
      blue: "images/products/everlast-blue-gold.jpg",
      black: "images/products/everlast-black-gold.jpg"
    }
  },
  {
    id: "3n8b286d-8g2r-8dh3-lzv8-9s6h3hs827jz",
    image: "images/products/men-contrasting-color-knitted-stitching-shirts-shorts-green.jpg",
    name: "Men Contrasting Color Knitted Stitching Shirts Shorts",
    rating: {
      stars: 0,
      count: 0
    },
    category: "clothing",
    priceCents: 2000,
    keywords: [
      "shirts",
      "shorts",
      "outfit",
      "summer",
      "men"
    ],
    colors: {
      green: "images/products/men-contrasting-color-knitted-stitching-shirts-shorts-green.jpg",
      brown: "images/products/men-contrasting-color-knitted-stitching-shirts-shorts-brown.jpg"
    }
  },
  {
    id: "6r7s8t9u-0v1w-2x3y-4z5a-6b7c8d9e0f1g",
    image: "images/products/adidas-elite-knee-pads-black.jpg",
    name: "Adidas Elite Knee Pads",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 1500,
    keywords: [
      "pads",
      "adidas",
      "knee"
    ],
    colors: {
      black: "images/products/adidas-elite-knee-pads-black.jpg",
      white: "images/products/adidas-elite-knee-pads-white.jpg"
    }
  },
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    image: "images/products/adidas-yeezy-slides-black.jpg",
    name: "Adidas Yeezy Slides",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 899,
    keywords: [
      "slides",
      "adidas",
      "yeezy"
    ],
    colors: {
      black: "images/products/adidas-yeezy-slides-black.jpg",
      mistyrose: "images/products/adidas-yeezy-slides-mistyrose.jpg",
      brown: "images/products/adidas-yeezy-slides-brown.jpg",
      olive: "images/products/adidas-yeezy-slides-olive.jpg",
      blue: "images/products/adidas-yeezy-slides-blue.jpg"
    }
  },
  {
    id: "4w5x6y7z-8a9b-0c1d-2e3f-4g5h6i7j8k9l",
    image: "images/products/dji-osmo-mobile-se-intelligent-gimbal-white.jpg",
    name: "Dji Osmo Mobile SE Intelligent Gimbal",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 5000,
    keywords: [
      "dji",
      "osmo",
      "gimbal",
      "video",
      "photography",
      "recording"
    ]
  },
  {
    id: "5m6n7o8p-9q0r-1s2t-3u4v-5w6x7y8z9a0b",
    image: "images/products/everfit-set-of-5-kettle-bell-set.jpg",
    name: "Everfit Set Of 5 Kettle Bell Set",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 20000,
    keywords: [
      "everfit",
      "bells",
      "bellset",
      "fitness",
      "workout",
      "gym",
      "weights"
    ]
  },
  {
    id: "6c7d8e9f-0g1h-2i3j-4k5l-6m7n8o9p0q1r",
    image: "images/products/crown-sporting-goods-hand-weights-dumbbells-set-with-rack.jpg",
    name: "Crown Sporting Goods Hand Weights Dumbbells Set With Rack",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 5000,
    keywords: [
      "gym",
      "workout",
      "dumbbells",
      "weights",
      "fitness"
    ]
  },
  {
    id: "7s8t9u0v-1w2x-3y4z-5a6b-7c8d9e0f1g2h",
    image: "images/products/feecco-weighted-skipping-rope.jpg",
    name: "Feecco Weighted Skipping Rope",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 1000,
    keywords: [
      "gym",
      "workout",
      "fitness",
      "weighted",
      "skipping",
      "rope",
      "feecco"
    ]
  },
  {
    id: "8u9v0w1x-2y3z-4a5b-6c7d-8e9f0g1h2i3j",
    image: "images/products/push-up-bars.jpg",
    name: "Push Up Bars",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 900,
    keywords: [
      "gym",
      "workout",
      "pushup",
      "fitness",
      "bars"
    ]
  },
  {
    id: "9w0x1y2z-3a4b-5c6d-7e8f-9g0h1i2j3k4l",
    image: "images/products/yoga-mat.jpg",
    name: "Yoga Mat",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 1000,
    keywords: [
      "gym",
      "workout",
      "yoga",
      "fitness",
      "mat"
    ]
  },
  {
    id: "0x1y2z3a-4b5c-6d7e-8f9g-0h1i2j3k4l5m",
    image: "images/products/tone-fitness-abdominal-toning-wheel-orange.jpg",
    name: "Tone Fitness Abdominal Toning Wheels",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 1199,
    keywords: [
      "gym",
      "workout",
      "fitness",
      "abdominal",
      "wheel",
      "tone",
      "toning"
    ],
    colors: {
      orange: "images/products/tone-fitness-abdominal-toning-wheel-orange.jpg",
      yellow: "images/products/tone-fitness-abdominal-toning-wheel-yellow.jpg",
      black: "images/products/tone-fitness-abdominal-toning-wheel-black.jpg",
      white: "images/products/tone-fitness-abdominal-toning-wheel-white.jpg",
      deeppink: "images/products/tone-fitness-abdominal-toning-wheel-deeppink.jpg",
      mediumorchid: "images/products/tone-fitness-abdominal-toning-wheel-mediumorchid.jpg"
    }
  },
  {
    id: "1y2z3a4b-5c6d-7e8f-9g0h-1i2j3k4l5m6n",
    image: "images/products/molten-flistatec-fivb-volleyball-green-red.jpg",
    name: "Molten Flistatec FIVB Volleyballs",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 2199,
    keywords: [
      "volleyball",
      "molten",
      "fivb"
    ],
    colors: {
      green: "images/products/molten-flistatec-fivb-volleyball-green-red.jpg",
      blue: "images/products/molten-flistatec-fivb-volleyball-blue-red.jpg"
    }
  },
  {
    id: "2z3a4b5c-6d7e-8f9g-0h1i-2j3k4l5m6n7o",
    image: "images/products/tide-pums-hollowfour-sided-stretch-mesh-casual-sports-running-sneakers-black-white.jpg",
    name: "Tide Pums Hollowfour Sided Stretch Mesh Casual Sports Running Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 6000,
    keywords: [
      "sneakers",
      "tide",
      "pums",
      "hollowfour",
      "running"
    ],
    colors: {
      white: "images/products/tide-pums-hollowfour-sided-stretch-mesh-casual-sports-running-sneakers-white-yellow.jpg",
      black: "images/products/tide-pums-hollowfour-sided-stretch-mesh-casual-sports-running-sneakers-black-white.jpg"
    }
  },
  {
    id: "3a4b5c6d-7e8f-9g0h-1i2j-3k4l5m6n7o8p",
    image: "images/products/women-athmile-braided-snadals-square-open-toe-fashion-summer-flat-beach-black.jpg",
    name: "Women Athmile Braided Sandals Square Open Toe Fashion Summer Flat Beach",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 1500,
    keywords: [
      "women",
      "sandals",
      "athmile",
      "beach",
      "fashion",
      "summer"
    ],
    colors: {
      black: "images/products/women-athmile-braided-snadals-square-open-toe-fashion-summer-flat-beach-black.jpg",
      beige: "images/products/women-athmile-braided-snadals-square-open-toe-fashion-summer-flat-beach-beige.jpg",
      white: "images/products/women-athmile-braided-snadals-square-open-toe-fashion-summer-flat-beach-white.jpg"
    }
  },
  {
    id: "4b5c6d7e-8f9g-0h1i-2j3k-4l5m6n7o8p9q",
    image: "images/products/sandales-oran-hermes-black.jpg",
    name: "Hermes Oran Sandals",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 59500,
    newPrice: 35000,
    keywords: [
      "women",
      "hermes",
      "oran",
      "sandals"
    ],
    colors: {
      black: "images/products/sandales-oran-hermes-black.jpg",
      white: "images/products/sandales-oran-hermes-white.jpg",
      gold: "images/products/sandales-oran-hermes-gold.jpg",
      deeppink: "images/products/sandales-oran-hermes-deeppink.jpg",
      deepskyblue: "images/products/sandales-oran-hermes-deepskyblue.jpg",
      red: "images/products/sandales-oran-hermes-red.jpg"
    }
  },
  {
    id: "5c6d7e8f-9g0h-1i2j-3k4l-5m6n7o8p9q0r",
    image: "images/products/women-slingback-kitten-heels-buckle-strap-work-pumps-black.jpg",
    name: "Women's Slingback Kitten Heels Buckle Strap Work Pumps",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 5999,
    keywords: [
      "women",
      "pumps",
      "shoes"
    ],
    colors: {
      black: "images/products/women-slingback-kitten-heels-buckle-strap-work-pumps-black.jpg",
      red: "images/products/women-slingback-kitten-heels-buckle-strap-work-pumps-red.jpg",
      silver: "images/products/women-slingback-kitten-heels-buckle-strap-work-pumps-silver.jpg",
      burlywood: "images/products/women-slingback-kitten-heels-buckle-strap-work-pumps-burlywood.jpg",
      maroon: "images/products/women-slingback-kitten-heels-buckle-strap-work-pumps-maroon.jpg",
      beige: "images/products/women-slingback-kitten-heels-buckle-strap-work-pumps-beige.jpg"
    }
  },
  {
    id: "6d7e8f9g-0h1i-2j3k-4l5m-6n7o8p9q0r1s",
    image: "images/products/steve-madden-briona-lug-sole-chelsea-boot-black.jpg",
    name: "Steve Madden Briona Lug Sole Chelsea Boots",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 6000,
    keywords: [
      "boots",
      "women",
      "steve",
      "madden"
    ],
    colors: {
      black: "images/products/steve-madden-briona-lug-sole-chelsea-boot-black.jpg",
      peru: "images/products/steve-madden-briona-lug-sole-chelsea-boot-peru.jpg",
      beige: "images/products/steve-madden-briona-lug-sole-chelsea-boot-beige.jpg"
    }
  },
  {
    id: "7e8f9g0h-1i2j-3k4l-5m6n-7o8p9q0r1s2t",
    image: "images/products/smart-weigh-digital-pro-pocket-scale.jpg",
    name: "Smart Weigh Digital Pro Pocket Scale",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 1000,
    keywords: [
      "smart",
      "weigh",
      "digital",
      "scale"
    ]
  },
  {
    id: "8f9g0h1i-2j3k-4l5m-6n7o-8p9q0r1s2t3u",
    image: "images/products/stainless-steel-electric-automatic-cut-off-jug.jpg",
    name: "Stainless Steel Electric Automatic Cut-Off Jug",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 7000,
    keywords: [
      "stainless",
      "appliances",
      "electric",
      "jug"
    ]
  },
  {
    id: "0h1i2j3k-4l5m-6n7o-8p9q-212ds5dsq6dr",
    image: "images/products/computer-mouse-wired-usb-black.jpg",
    name: "Computer Mouse Wired USB",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 500,
    keywords: [
      "mouse",
      "office",
      "usb"
    ]
  },
  {
    id: "1i2j3k4l-5m6n-7o8p-9q0r-1s2t3u4v5w6x",
    image: "images/products/ugreen-aluminum-stand-for-desk-devices-grey.jpg",
    name: "Ugreen Aluminum Stand For Desk Devices",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 2000,
    newPrice: 1500,
    keywords: [
      "ugreen",
      "stand",
      "desk",
      "office",
      "devices",
      "setup"
    ]
  },
  {
    id: "2j3k4l5m-6n7o-8p9q-0r1s-2t3u4v5w6x7y",
    image: "images/products/bluetooth-compatible-pocket-printer.jpg",
    name: "Bluetooth Compatible Pocket Printer",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 1700,
    keywords: [
      "printer",
      "bluetooth"
    ]
  },
  {
    id: "2a3b4c5d-6e7f-8g9h-0i1j-k2l3m4n5o6p7",
    image: "images/products/samsung-galaxy-s24-ultra-darkgray.jpg",
    name: "Samsung Galaxy S24 Ultra",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 114900,
    keywords: [
      "samsung",
      "galaxy",
      "s24",
      "ultra",
    ],
    colors: {
      darkgray: "images/products/samsung-galaxy-s24-ultra-darkgray.jpg",
      bisque: "images/products/samsung-galaxy-s24-ultra-bisque.jpg",
      rebeccapurple: "images/products/samsung-galaxy-s24-ultra-rebeccapurple.avif",
      dimgray: "images/products/samsung-galaxy-s24-ultra-dimgray.jpg"
    }
  },
  {
    id: "3a4b5c6d-7e8f-9g0h-1i2j-k3l4m5n6o7p8",
    image: "images/products/philips-digital-heathy-large-dual-baskets-air-fryer-gold.jpg",
    name: "Philips Digital Heathy Large Dual Baskets Air Fryers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 17000,
    keywords: [
      "digital",
      "philips",
      "heath",
      "airfryer",
      "air fryer",
      "cooker",
    ],
    colors: {
      gold: "images/products/philips-digital-heathy-large-dual-baskets-air-fryer-gold.jpg",
      silver: "images/products/philips-digital-heathy-large-dual-baskets-air-fryer-silver.jpg",
    }
  },
  {
    id: "4a5b6c7d-8e9f-0g1h-2i3j-k4l5m6n7o8p9",
    image: "images/products/wooden-rolling-pin-for-dough.jpg",
    name: "Wooden Rolling Pin For Dough",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 1000,
    keywords: [
      "dough",
      "wooden",
      "pin",
      "rolling",
    ],
  },
  {
    id: "5a6b7c8d-9e0f-1g2h-3i4j-k5l6m7n8o9p0",
    image: "images/products/oven-mitts-premium-heat-resistant-kitchen-gloves-cotton-black.jpg",
    name: "Oven Mitts Premium Heat Resistant Kitchen Gloves Cotton",
    rating: {
      stars: 0,
      count: 0
    },
    category: "kitchen",
    priceCents: 2000,
    keywords: [
      "gloves",
      "oven",
      "mitts",
      "heath",
      "resistant",
    ],
  },
  {
    id: "6a7b8c9d-0e1f-2g3h-4i5j-k6l7m8n9o0p1",
    image: "images/products/nike-air-force-1-white.jpg",
    name: "Nike Air Force 1",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 7000,
    keywords: [
      "nike",
      "airforce",
      "air force",
    ],
    colors: {
      white: "images/products/nike-air-force-1-white.jpg",
      maroon: "images/products/nike-air-force-1-maroon-white.jpg",
      burlywood: "images/products/nike-air-force-1-burlywood-white.jpg",
      grey: "images/products/nike-air-force-1-grey-white.jpg",
      red: "images/products/nike-air-force-1-white-red.jpg",
      green: "images/products/nike-air-force-1-white-green.jpg",
    }
  },
  {
    id: "7a8b9c0d-1e2f-3g4h-5i6j-k7l8m9n0o1p2",
    image: "images/products/nike-gym-club-duffel-bag-in-light-black.jpg",
    name: "Nike Gym Club Duffel Bags",
    rating: {
      stars: 0,
      count: 0
    },
    category: "sports",
    priceCents: 5900,
    keywords: [
      "gym",
      "nike",
      "club",
      "bag",
      "duffel",
    ],
    colors: {
      black: "images/products/nike-gym-club-duffel-bag-in-light-black.jpg",
      white: "images/products/nike-gym-club-duffel-bag-in-light-white.jpg",
    }
  },
  {
    id: "9a0b1c2d-3e4f-5g6h-7i8j-k9l0m1n2o3p4",
    image: "images/products/nike-dunk-low-retro-black-sneakers.jpg",
    name: "Nike Dunk Low Retro Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 8000,
    newPrice: 4500,
    keywords: [
      "nike",
      "dunk",
      "low",
      "sneakers",
    ],
    colors: {
      black: "images/products/nike-dunk-low-retro-black-sneakers.jpg",
      red: "images/products/nike-dunk-low-retro-red-sneakers.jpg",
      brown: "images/products/nike-dunk-low-retro-brown-sneakers.jpg",
      gray: "images/products/nike-dunk-low-retro-gray-white-sneakers.jpg",
      yellow: "images/products/nike-dunk-low-retro-yellow-sneakers.jpg",
      dodgerblue: "images/products/nike-dunk-low-retro-dodgerblue-sneakers.jpg"
    }
  },
  {
    id: "0a1b2c3d-4e5f-6g7h-8i9j-k0l1m2n3o4p5",
    image: "images/products/nike-dunk-high-pro-sb-sneakers-black.jpg",
    name: "Nike Dunk High Pro Sb Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 10000,
    keywords: [
      "nike",
      "dunk",
      "high",
      "sneakers",
    ],
    colors: {
      black: "images/products/nike-dunk-high-pro-sb-sneakers-black.jpg",
      orange: "images/products/nike-dunk-high-pro-sb-sneakers-orange.jpg",
      green: "images/products/nike-dunk-high-pro-sb-sneakers-green.jpg",
      blue: "images/products/nike-dunk-high-pro-sb-sneakers-blue.jpg",
      darkseagreen: "images/products/nike-dunk-high-pro-sb-sneakers-darkseagreen.jpg",
      burlywood: "images/products/nike-dunk-high-pro-sb-sneakers-burlywood.jpg",
    }
  },
  {
    id: "1b2c3d4e-5f6g-7h8i-9j0k-l1m2n3o4p5q6",
    image: "images/products/reebok-club-c-revenge-green-sneakers.jpg",
    name: "Reebok Club C Revenge Sneakers",
    rating: {
      stars: 0,
      count: 0
    },
    category: "footwear",
    priceCents: 4500,
    keywords: [
      "reebok",
      "clubc",
      "club c",
      "revenge",
      "sneakers",
    ],
    colors: {
      green: "images/products/reebok-club-c-revenge-green-sneakers.jpg",
      black: "images/products/reebok-club-c-revenge-black-sneakers.jpg",
      gold: "images/products/reebok-club-c-revenge-gold-sneakers.jpg",
      blue: "images/products/reebok-club-c-revenge-blue-sneakers.jpg",
      red: "images/products/reebok-club-c-revenge-red-sneakers.jpg",
      olive: "images/products/reebok-club-c-revenge-olive-sneakers.jpg",
    }
  },
  {
    id: "5e6f7g8h-9i0j-1k2l-3m4n-o5p6q7r8s9t0",
    image: "images/products/msi-gf63-fhd-gaming-laptop.jpg",
    name: "MSI GF63 Fhd Gaming Laptop",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 60000,
    keywords: [
      "msi",
      "gf63",
      "gaming",
      "laptop",
    ],
  },
  {
    id: "6f7g8h9i-0j1k-2l3m-4n5o-p6q7r8s9t0u1",
    image: "images/products/asus-rog-strix-g15-2021-gaming-laptop.jpg",
    name: "Asus Rog Strix G15 2021 Gaming Laptop",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 119999,
    keywords: [
      "asus",
      "rog",
      "strix",
      "g15",
      "gaming",
      "laptop",
    ],
  },
  {
    id: "7g8h9i0j-1k2l-3m4n-5o6p-q7r8s9t0u1v2",
    image: "images/products/asus-vivobook-pro-15-lumina-oled-laptop.jpg",
    name: "Asus Vivobook Pro 15 Lumina Oled Laptop",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 155000,
    keywords: [
      "asus",
      "vivobook",
      "pro",
      "oled",
      "laptop",
    ],
  },
  {
    id: "8h9i0j1k-2l3m-4n5o-6p7q-r8s9t0u1v2w3",
    image: "images/products/asus-vivobook-14-laptop.jpg",
    name: "Asus Vivobook 14 Laptop",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 109900,
    keywords: [
      "asus",
      "vivobook",
      "laptop",
    ],
  },
  {
    id: "9i0j1k2l-3m4n-5o6p-7q8r-s9t0u1v2w3x4",
    image: "images/products/asus-zenbook-pro-14-duo-oled-laptop-2023.jpg",
    name: "Asus Zenbook Pro 14 Duo Oled Touchscreen Laptop 2023",
    rating: {
      stars: 0,
      count: 0
    },
    category: "electronics",
    priceCents: 169900,
    keywords: [
      "asus",
      "zenbook",
      "laptop",
      "pro",
      "oled",
    ],
  },
  {
    id: "1k2l3m4n-5o6p-7q8r-9s0t-u1v2w3x4y5z",
    image: "images/products/wool-gangster-tribly-felt-fedora-hat-red-with-wide-brim.jpg",
    name: "Wool Gangster Tribly Felt Fedora Hats With Wide Brim",
    rating: {
      stars: 0,
      count: 0
    },
    category: "accessories",
    priceCents: 3000,
    newPrice: 1500,
    keywords: [
      "hat",
      "wool",
      "gangster",
      "tribly",
      "brim",
    ],
    colors: {
      red: "images/products/wool-gangster-tribly-felt-fedora-hat-red-with-wide-brim.jpg",
      black: "images/products/wool-gangster-tribly-felt-fedora-hat-black-with-wide-brim.jpg",
      white: "images/products/wool-gangster-tribly-felt-fedora-hat-white-with-wide-brim.jpg",
      blue: "images/products/wool-gangster-tribly-felt-fedora-hat-blue-with-wide-brim.jpg",
      gold: "images/products/wool-gangster-tribly-felt-fedora-hat-gold-with-wide-brim.jpg",
      purple: "images/products/wool-gangster-tribly-felt-fedora-hat-purple-with-wide-brim.jpg"
    }
  },
];