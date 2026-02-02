// Product Database
const products = {
    chips: [
        { id: 1, name: "Haldiram's Classic Salted", weight: "200g", price: 40, icon: "🥔", category: "chips" },
        { id: 2, name: "Haldiram's Aloo Bhujia Chips", weight: "150g", price: 35, icon: "🥔", category: "chips" },
        { id: 3, name: "Balaji Masala Masti", weight: "180g", price: 30, icon: "🌶️", category: "chips" },
        { id: 4, name: "Balaji Simply Salted", weight: "200g", price: 35, icon: "🥔", category: "chips" },
        { id: 5, name: "Haldiram's Tomato Twist", weight: "175g", price: 38, icon: "🍅", category: "chips" },
        { id: 6, name: "Balaji Wafers Cream & Onion", weight: "160g", price: 32, icon: "🧅", category: "chips" }
    ],
    biscuits: [
        { id: 7, name: "Good Day Butter", weight: "150g", price: 25, icon: "🍪", category: "biscuits" },
        { id: 8, name: "20-20 Classic Cookies", weight: "200g", price: 20, icon: "🍪", category: "biscuits" },
        { id: 9, name: "KrackJack Sweet & Salt", weight: "180g", price: 22, icon: "🍘", category: "biscuits" },
        { id: 10, name: "Monaco Salted", weight: "200g", price: 20, icon: "🍘", category: "biscuits" },
        { id: 11, name: "Tiger Glucose", weight: "250g", price: 28, icon: "🐯", category: "biscuits" },
        { id: 12, name: "Coconut Cookies", weight: "150g", price: 30, icon: "🥥", category: "biscuits" },
        { id: 13, name: "JimJam Cream Biscuits", weight: "175g", price: 35, icon: "🍪", category: "biscuits" },
        { id: 14, name: "Bourbon Chocolate", weight: "150g", price: 32, icon: "🍫", category: "biscuits" },
        { id: 15, name: "Walnut Cookies", weight: "120g", price: 45, icon: "🌰", category: "biscuits" }
    ],
    namkeen: [
        { id: 16, name: "Morano Mixture", weight: "200g", price: 40, icon: "🥜", category: "namkeen" },
        { id: 17, name: "Parivaar Namkeen Mix", weight: "250g", price: 45, icon: "🌾", category: "namkeen" },
        { id: 18, name: "Haldiram's Bhujiya", weight: "200g", price: 50, icon: "🌶️", category: "namkeen" },
        { id: 19, name: "Haldiram's Aloo Bhujia", weight: "180g", price: 48, icon: "🥔", category: "namkeen" },
        { id: 20, name: "Morano Spicy Mix", weight: "200g", price: 42, icon: "🔥", category: "namkeen" },
        { id: 21, name: "Parivaar Chana Dal", weight: "150g", price: 35, icon: "🟡", category: "namkeen" }
    ]
};

// Get all products as a flat array
function getAllProducts() {
    return [...products.chips, ...products.biscuits, ...products.namkeen];
}

// Get product by ID
function getProductById(id) {
    const allProducts = getAllProducts();
    return allProducts.find(p => p.id === id);
}

// Get products by category
function getProductsByCategory(category) {
    if (category === 'all') {
        return products;
    }
    return { [category]: products[category] };
}
