// Mock product data for the e-commerce store
export const products = [
    // Men's Collection
    {
        id: 1,
        name: "Classic Oxford Shirt",
        price: 89.99,
        category: "Men",
        type: "Shirts",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
        description: "Premium cotton oxford shirt with button-down collar. Perfect for both casual and formal occasions.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        inStock: true
    },
    {
        id: 2,
        name: "Slim Fit Chinos",
        price: 79.99,
        category: "Men",
        type: "Pants",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
        description: "Comfortable stretch chinos with a modern slim fit. Available in versatile neutral colors.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 3,
        name: "Leather Bomber Jacket",
        price: 299.99,
        category: "Men",
        type: "Jackets",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
        description: "Genuine leather bomber jacket with ribbed cuffs and hem. A timeless wardrobe essential.",
        sizes: ["M", "L", "XL"],
        inStock: true
    },
    {
        id: 4,
        name: "Merino Wool Sweater",
        price: 129.99,
        category: "Men",
        type: "Knitwear",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
        description: "Soft merino wool crew neck sweater. Lightweight and breathable for year-round comfort.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 5,
        name: "Tailored Blazer",
        price: 249.99,
        category: "Men",
        type: "Jackets",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop",
        description: "Modern tailored blazer with notch lapels. Versatile piece for professional and smart casual looks.",
        sizes: ["M", "L", "XL", "XXL"],
        inStock: true
    },
    {
        id: 6,
        name: "Denim Jeans - Dark Wash",
        price: 99.99,
        category: "Men",
        type: "Pants",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
        description: "Premium selvedge denim with a classic dark wash. Comfortable fit with slight stretch.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 7,
        name: "Cashmere Scarf",
        price: 89.99,
        category: "Men",
        type: "Accessories",
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop",
        description: "Luxurious 100% cashmere scarf. Incredibly soft and warm for cold weather.",
        sizes: ["One Size"],
        inStock: true
    },
    {
        id: 8,
        name: "Athletic Joggers",
        price: 69.99,
        category: "Men",
        type: "Pants",
        image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&h=800&fit=crop",
        description: "Comfortable cotton blend joggers with tapered fit. Perfect for casual wear and workouts.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 9,
        name: "Polo Shirt",
        price: 59.99,
        category: "Men",
        type: "Shirts",
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop",
        description: "Classic pique polo shirt with ribbed collar and cuffs. Essential summer staple.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        inStock: true
    },
    {
        id: 10,
        name: "Dress Shoes",
        price: 179.99,
        category: "Men",
        type: "Shoes",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&h=800&fit=crop",
        description: "Handcrafted leather dress shoes with Goodyear welt construction. Timeless elegance.",
        sizes: ["7", "8", "9", "10", "11", "12"],
        inStock: true
    },

    // Women's Collection
    {
        id: 11,
        name: "Silk Blouse",
        price: 119.99,
        category: "Women",
        type: "Shirts",
        image: "https://images.unsplash.com/photo-1564257577-7fd84a62b7c1?w=600&h=800&fit=crop",
        description: "Elegant silk blouse with delicate draping. Perfect for office or evening wear.",
        sizes: ["XS", "S", "M", "L"],
        inStock: true
    },
    {
        id: 12,
        name: "High-Waisted Trousers",
        price: 89.99,
        category: "Women",
        type: "Pants",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
        description: "Tailored high-waisted trousers with wide leg. Sophisticated and comfortable.",
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 13,
        name: "Cashmere Cardigan",
        price: 189.99,
        category: "Women",
        type: "Knitwear",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
        description: "Luxurious cashmere cardigan with button closure. Incredibly soft and warm.",
        sizes: ["XS", "S", "M", "L"],
        inStock: true
    },
    {
        id: 14,
        name: "Midi Wrap Dress",
        price: 149.99,
        category: "Women",
        type: "Dresses",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
        description: "Flattering wrap dress in flowing fabric. Versatile piece for any occasion.",
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 15,
        name: "Leather Handbag",
        price: 279.99,
        category: "Women",
        type: "Accessories",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop",
        description: "Structured leather handbag with gold hardware. Timeless design with multiple compartments.",
        sizes: ["One Size"],
        inStock: true
    },
    {
        id: 16,
        name: "Ankle Boots",
        price: 199.99,
        category: "Women",
        type: "Shoes",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop",
        description: "Classic leather ankle boots with block heel. Comfortable and stylish for all-day wear.",
        sizes: ["6", "7", "8", "9", "10"],
        inStock: true
    },
    {
        id: 17,
        name: "Pleated Midi Skirt",
        price: 79.99,
        category: "Women",
        type: "Skirts",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop",
        description: "Elegant pleated midi skirt with elastic waistband. Flows beautifully with movement.",
        sizes: ["XS", "S", "M", "L"],
        inStock: true
    },
    {
        id: 18,
        name: "Wool Coat",
        price: 329.99,
        category: "Women",
        type: "Jackets",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
        description: "Classic wool coat with belt tie. Sophisticated outerwear for cold weather.",
        sizes: ["XS", "S", "M", "L"],
        inStock: true
    },
    {
        id: 19,
        name: "Knit Turtleneck",
        price: 69.99,
        category: "Women",
        type: "Knitwear",
        image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600&h=800&fit=crop",
        description: "Soft knit turtleneck sweater. Cozy and chic for layering or wearing alone.",
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 20,
        name: "Wide Brim Hat",
        price: 49.99,
        category: "Women",
        type: "Accessories",
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=800&fit=crop",
        description: "Elegant wide brim felt hat. Perfect accessory for any season.",
        sizes: ["One Size"],
        inStock: true
    },

    // Kids' Collection
    {
        id: 21,
        name: "Kids' Denim Jacket",
        price: 49.99,
        category: "Kids",
        type: "Jackets",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop",
        description: "Classic denim jacket for kids. Durable and stylish for everyday wear.",
        sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
        inStock: true
    },
    {
        id: 22,
        name: "Kids' Graphic T-Shirt",
        price: 24.99,
        category: "Kids",
        type: "Shirts",
        image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=800&fit=crop",
        description: "Soft cotton t-shirt with fun graphic print. Comfortable for active kids.",
        sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
        inStock: true
    },
    {
        id: 23,
        name: "Kids' Sneakers",
        price: 59.99,
        category: "Kids",
        type: "Shoes",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&h=800&fit=crop",
        description: "Comfortable sneakers with velcro straps. Perfect for running and playing.",
        sizes: ["10", "11", "12", "13", "1", "2", "3"],
        inStock: true
    },
    {
        id: 24,
        name: "Kids' Hoodie",
        price: 39.99,
        category: "Kids",
        type: "Jackets",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
        description: "Cozy fleece hoodie with kangaroo pocket. Warm and comfortable.",
        sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
        inStock: true
    },
    {
        id: 25,
        name: "Kids' Leggings",
        price: 19.99,
        category: "Kids",
        type: "Pants",
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&h=800&fit=crop",
        description: "Stretchy cotton leggings. Comfortable for all-day wear and play.",
        sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
        inStock: true
    },
    {
        id: 26,
        name: "Kids' Rain Jacket",
        price: 54.99,
        category: "Kids",
        type: "Jackets",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=800&fit=crop",
        description: "Waterproof rain jacket with hood. Keeps kids dry in wet weather.",
        sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
        inStock: true
    },
    {
        id: 27,
        name: "Kids' Dress",
        price: 44.99,
        category: "Kids",
        type: "Dresses",
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop",
        description: "Adorable dress with twirl-worthy skirt. Perfect for special occasions.",
        sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
        inStock: true
    },
    {
        id: 28,
        name: "Kids' Cargo Shorts",
        price: 29.99,
        category: "Kids",
        type: "Pants",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
        description: "Durable cargo shorts with multiple pockets. Great for outdoor adventures.",
        sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
        inStock: true
    },
    {
        id: 29,
        name: "Kids' Winter Coat",
        price: 89.99,
        category: "Kids",
        type: "Jackets",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
        description: "Warm puffer coat with faux fur trim. Keeps kids cozy in cold weather.",
        sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
        inStock: true
    },
    {
        id: 30,
        name: "Kids' Backpack",
        price: 34.99,
        category: "Kids",
        type: "Accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
        description: "Durable backpack with adjustable straps. Perfect for school or day trips.",
        sizes: ["One Size"],
        inStock: true
    }
];

// Helper functions
export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
    if (category === 'All') return products;
    return products.filter(product => product.category === category);
};

export const searchProducts = (query) => {
    const lowerQuery = query.toLowerCase();
    return products.filter(product =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
};
