# 🛒 ShopDz - Algerian E-Commerce Platform | متجر إلكتروني جزائري متكامل

A full-featured, responsive E-Commerce web application tailored for the Algerian market, featuring a complete **Admin Dashboard**, **58 Wilayas shipping calculator** (Home & Stop-Desk), and **Multi-language support (AR / EN / FR)** with automatic **RTL / LTR** layout switching.

---

## ✨ Key Features | المميزات الرئيسية

### 🛍️ Storefront & Shopping Experience (واجهة المتجر والتسوق)
- **Multi-Language & Direction Support:** Seamless switching between **Arabic (`RTL`)**, **English (`LTR`)**, and **French (`LTR`)**.
- **Dynamic Product Catalog:** Search and filter products by title or category, with support for multiple product images (gallery thumbnails) and stock availability badges.
- **Smart Shopping Cart:** Quantity validation against available stock, real-time subtotal calculation, and persistent storage.
- **58 Wilayas Checkout System:** Supports all 58 Algerian states (Wilayas) and municipalities (Baladiyas) with dynamic shipping cost calculation based on delivery type (**Home Delivery** vs. **Stop-Desk**).

### ⚙️ Admin Dashboard (لوحة التحكم الشاملة)
- **Product & Inventory Management:** Add/delete products with multiple image URLs, descriptions, categories, sale/new badges, and stock quantities.
- **Order Management & Auto Stock Deduction:** View incoming customer orders with order title, exact date & time, customer details, and ordered items. Confirming an order (`تأكيد ✅`) automatically deducts the purchased quantities from the global product inventory.
- **Custom Shipping Rates:** Modify default Home and Stop-Desk delivery prices for any Wilaya, or set custom prices for specific Baladiyas.
- **Role-Based Admin System:** Main Admin can add new administrators and grant or revoke permissions dynamically.

---

## 🛠️ Tech Stack | التقنيات المستخدمة

- **Frontend:** HTML5, CSS3 (Custom Properties, Flexbox, CSS Grid, Responsive Design)
- **Logic & State Management:** Vanilla JavaScript (ES6+), `LocalStorage` API
- **Localization (i18n):** Custom lightweight translation engine (`translations.js` & `language.js`)
- **Typography:** Google Fonts (*Tajawal*)

---

## 📂 Project Structure | هيكل المشروع

```text
├── index.html            # Main storefront page
├── product-detail.html   # Product gallery, specs, and stock-aware add-to-cart
├── cart.html             # Shopping cart management
├── checkout.html         # 58 Wilayas shipping & order submission
├── login.html            # Admin authentication
├── register.html         # Admin registration
├── dashboard.html        # Full Admin Dashboard (Products, Orders, Admins, Shipping)
├── style.css             # Global styles with RTL/LTR support
├── main.js               # Storefront rendering, search filter, and cart badge
├── product-detail.js     # Product details & multi-image gallery logic
├── cart.js               # Cart quantity & stock validation logic
├── checkout.js           # Algeria 58 Wilayas shipping & order creation logic
├── dashboard.js          # Dashboard management & auto stock deduction
├── auth.js               # Admin login & registration logic
├── translations.js       # AR / EN / FR translation dictionaries
└── language.js           # Language switcher & RTL/LTR direction controller