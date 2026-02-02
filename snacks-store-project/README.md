# Snack Haven - Online Snacks Store

A beautiful, fully-functional e-commerce website for selling chips, biscuits, and namkeen from popular Indian brands.

## 🎯 Features

- **Beautiful Modern Design** - Eye-catching interface with smooth animations
- **Product Catalog** - Organized display of chips, biscuits, and namkeen
- **Shopping Cart** - Add items, adjust quantities, view totals
- **Payment Gateway** - Multiple payment options (Card, UPI, Net Banking, Cash on Delivery)
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Category Filtering** - Easy navigation through product categories

## 📦 Products Included

### Chips
- Haldiram's Classic Salted (200g) - ₹40
- Haldiram's Aloo Bhujia Chips (150g) - ₹35
- Balaji Masala Masti (180g) - ₹30
- Balaji Simply Salted (200g) - ₹35
- Haldiram's Tomato Twist (175g) - ₹38
- Balaji Wafers Cream & Onion (160g) - ₹32

### Biscuits
- Good Day Butter (150g) - ₹25
- 20-20 Classic Cookies (200g) - ₹20
- KrackJack Sweet & Salt (180g) - ₹22
- Monaco Salted (200g) - ₹20
- Tiger Glucose (250g) - ₹28
- Coconut Cookies (150g) - ₹30
- JimJam Cream Biscuits (175g) - ₹35
- Bourbon Chocolate (150g) - ₹32
- Walnut Cookies (120g) - ₹45

### Namkeen
- Morano Mixture (200g) - ₹40
- Parivaar Namkeen Mix (250g) - ₹45
- Haldiram's Bhujiya (200g) - ₹50
- Haldiram's Aloo Bhujia (180g) - ₹48
- Morano Spicy Mix (200g) - ₹42
- Parivaar Chana Dal (150g) - ₹35

## 🚀 How to Use

1. **Extract the ZIP file** to your computer
2. **Open `index.html`** in any modern web browser
3. **Browse products** by category or view all
4. **Add items to cart** by clicking the "Add to Cart" button
5. **View cart** by clicking the cart icon in the header
6. **Adjust quantities** using the +/- buttons in cart
7. **Proceed to checkout** and select your payment method
8. **Complete payment** by filling in the required details

## 📁 Project Structure

```
snacks-store-project/
│
├── index.html          # Main HTML file
│
├── css/
│   └── styles.css      # All CSS styles
│
└── js/
    ├── products.js     # Product database
    ├── cart.js         # Shopping cart functionality
    ├── payment.js      # Payment processing
    └── main.js         # Main application logic
```

## 🎨 Customization

### To Add New Products

Edit `js/products.js` and add new product objects to the appropriate category:

```javascript
{
    id: 22,
    name: "Product Name",
    weight: "200g",
    price: 50,
    icon: "🍪",
    category: "biscuits"
}
```

### To Change Colors

Edit `css/styles.css` and modify the CSS variables:

```css
:root {
    --primary: #FF6B35;      /* Main brand color */
    --secondary: #F7931E;    /* Secondary color */
    --accent: #FFD23F;       /* Accent color */
    --dark: #1A1A2E;         /* Dark text color */
}
```

### To Modify Prices

Edit the `price` value in `js/products.js` for any product.

## 💳 Payment Methods Supported

- **Credit/Debit Card** - With card number, expiry, and CVV validation
- **UPI** - Enter your UPI ID
- **Net Banking** - Select your bank
- **Cash on Delivery** - Provide phone and address

## 🔒 Security Note

**IMPORTANT**: This is a demo website. The payment processing is simulated and does NOT process real transactions. 

For a production website, you need to:
1. Integrate with a real payment gateway (Razorpay, PayU, Paytm, etc.)
2. Add backend server for order processing
3. Implement proper security measures
4. Add SSL certificate (HTTPS)

## 🌐 Browser Compatibility

Works on all modern browsers:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge
- Opera

## 📱 Responsive Design

The website automatically adapts to:
- Desktop computers (1920px and above)
- Laptops (1366px - 1920px)
- Tablets (768px - 1366px)
- Mobile phones (320px - 768px)

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript** - Functionality and interactivity
- **Google Fonts** - Playfair Display & DM Sans

## 📄 License

Free to use for personal and commercial projects.

## 🙋‍♂️ Support

For any questions or customization requests, feel free to modify the code as needed.

---

**Made with ❤️ for Snack Haven**
