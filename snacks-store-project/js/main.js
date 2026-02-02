// Main Application
let currentFilter = 'all';

// Initialize Application
function init() {
    displayProducts();
    updateCartCount();
}

// Display Products
function displayProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    const categories = currentFilter === 'all' ? ['chips', 'biscuits', 'namkeen'] : [currentFilter];

    categories.forEach(category => {
        const categoryProducts = products[category];
        
        const section = document.createElement('div');
        section.className = 'category-section';
        section.innerHTML = `
            <h2 class="category-title">${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div class="products-grid" id="${category}-grid"></div>
        `;
        container.appendChild(section);

        const grid = document.getElementById(`${category}-grid`);
        categoryProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-icon">${product.icon}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-weight">${product.weight}</div>
                <div class="product-price">₹${product.price}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            grid.appendChild(card);
        });
    });
}

// Filter Category
function filterCategory(category) {
    currentFilter = category;
    displayProducts();

    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);
