// Payment Processing
let selectedPaymentMethod = 'card';

// Show Payment Modal
function showPayment() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = getCartTotal();
    document.getElementById('paymentTotal').textContent = `₹${total}`;
    document.getElementById('paymentModal').classList.add('active');
    toggleCart();
}

// Select Payment Method
function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    
    // Update UI
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    
    // Show/hide relevant fields
    document.querySelectorAll('.card-details').forEach(el => el.classList.remove('active'));
    document.getElementById(`${method}Details`).classList.add('active');
}

// Close Payment Modal
function closePayment() {
    document.getElementById('paymentModal').classList.remove('active');
}

// Process Payment
function processPayment() {
    // Basic validation
    if (selectedPaymentMethod === 'card') {
        const cardName = document.getElementById('cardName').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCvv = document.getElementById('cardCvv').value;
        
        if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
            alert('Please fill all card details');
            return;
        }
        
        if (cardNumber.replace(/\s/g, '').length !== 16) {
            alert('Please enter a valid 16-digit card number');
            return;
        }
        
        if (cardCvv.length !== 3) {
            alert('Please enter a valid 3-digit CVV');
            return;
        }
    } else if (selectedPaymentMethod === 'upi') {
        const upiId = document.getElementById('upiId').value;
        if (!upiId) {
            alert('Please enter UPI ID');
            return;
        }
        
        if (!upiId.includes('@')) {
            alert('Please enter a valid UPI ID (e.g., name@upi)');
            return;
        }
    } else if (selectedPaymentMethod === 'netbanking') {
        const bankName = document.getElementById('bankName').value;
        if (!bankName) {
            alert('Please enter bank name');
            return;
        }
    } else if (selectedPaymentMethod === 'cod') {
        const phone = document.getElementById('phoneNumber').value;
        const address = document.getElementById('deliveryAddress').value;
        
        if (!phone || !address) {
            alert('Please fill phone number and delivery address');
            return;
        }
        
        if (phone.length !== 10) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }
    }
    
    // Simulate payment processing
    closePayment();
    showSuccessModal();
    
    // Clear cart
    clearCart();
    
    // Clear form
    clearPaymentForm();
}

// Clear Payment Form
function clearPaymentForm() {
    document.querySelectorAll('input').forEach(input => input.value = '');
}

// Show Success Modal
function showSuccessModal() {
    document.getElementById('successModal').classList.add('active');
}

// Close Success Modal
function closeSuccess() {
    document.getElementById('successModal').classList.remove('active');
}

// Card number formatting
document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    // Expiry date formatting
    const expiryInput = document.getElementById('cardExpiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
    
    // CVV - only numbers
    const cvvInput = document.getElementById('cardCvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }
    
    // Phone - only numbers
    const phoneInput = document.getElementById('phoneNumber');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }
});
