// Cart Management
let cart = [];

// Add to Cart
function addToCart(productId) {
    const product = getProductById(productId);
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    updateCartDisplay();
    
    // Visual feedback
    event.target.textContent = 'Added!';
    event.target.style.background = '#4CAF50';
    setTimeout(() => {
        event.target.textContent = 'Add to Cart';
        event.target.style.background = '';
    }, 1000);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Update Cart Display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Your cart is empty</p>
            </div>
        `;
        cartTotal.textContent = '₹0';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.icon} ${item.name}</div>
                <div class="cart-item-weight">${item.weight}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="cart-item-qty">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <span class="cart-item-price">₹${itemTotal}</span>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `₹${total}`;
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        updateCartCount();
        updateCartDisplay();
    }
}

// Toggle Cart
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
    updateCartDisplay();
}

// Get Cart Total
function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Clear Cart
function clearCart() {
    cart = [];
    updateCartCount();
    updateCartDisplay();
}
