document.addEventListener('DOMContentLoaded', function () {
    loadCartPage();
});

// قاموس النصوص الديناميكية لصفحة السلة باللغات الثلاث
const cartLangTexts = {
    ar: {
        currency: ' د.ج',
        inStock: 'المتوفر في المخزون: ',
        pcs: ' قطعة',
        deleteBtn: 'حذف 🗑️',
        confirmClear: 'هل أنت متأكد من تفريغ سلة التسوق بالكامل؟',
        alertMaxStock: 'عذراً، الكمية المتوفرة في المخزون هي ',
        alertMaxStockSuffix: ' قطعة فقط!'
    },
    en: {
        currency: ' DZD',
        inStock: 'Available in stock: ',
        pcs: ' pcs',
        deleteBtn: 'Remove 🗑️',
        confirmClear: 'Are you sure you want to clear the entire shopping cart?',
        alertMaxStock: 'Sorry, only ',
        alertMaxStockSuffix: ' pieces are available in stock!'
    },
    fr: {
        currency: ' DA',
        inStock: 'Disponible en stock : ',
        pcs: ' pièce(s)',
        deleteBtn: 'Supprimer 🗑️',
        confirmClear: 'Êtes-vous sûr de vouloir vider tout le panier ?',
        alertMaxStock: 'Désolé, seulement ',
        alertMaxStockSuffix: ' pièce(s) disponible(s) en stock !'
    }
};

function getCartLangObj() {
    const lang = localStorage.getItem('shopLang') || 'ar';
    return cartLangTexts[lang] || cartLangTexts['ar'];
}

// دالة جلب السلة وتوحيد بنيتها (تتحول من مصفوفة نصوص إلى كائنات بها id و qty)
function getDetailedCart() {
    let rawCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (rawCart.length > 0 && typeof rawCart[0] === 'string') {
        let counts = {};
        rawCart.forEach(function (id) {
            counts[id] = (counts[id] || 0) + 1;
        });
        let detailed = Object.keys(counts).map(function (id) {
            return { id: id, qty: counts[id] };
        });
        localStorage.setItem('cartItems', JSON.stringify(detailed));
        return detailed;
    }
    return rawCart || [];
}

function saveDetailedCart(cart) {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cartBadge');
    if (!cartBadge) return;

    let cart = getDetailedCart();
    let totalCount = 0;
    cart.forEach(function (item) {
        totalCount += item.qty;
    });
    cartBadge.textContent = totalCount;
}

// دالة تحميل وعرض محتوى السلة داخل الصفحة الحالية
function loadCartPage() {
    const cartLayout = document.getElementById('cartLayout');
    const emptyCartState = document.getElementById('emptyCartState');
    const cartTableBody = document.getElementById('cartTableBody');
    const subtotalPriceElem = document.getElementById('subtotalPrice');
    const totalPriceElem = document.getElementById('totalPrice');
    const clearCartBtn = document.getElementById('clearCartBtn');

    if (!cartTableBody) return;

    const t = getCartLangObj();
    let cart = getDetailedCart();
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // إذا كانت السلة فارغة
    if (cart.length === 0) {
        if (cartLayout) cartLayout.style.display = 'none';
        if (emptyCartState) emptyCartState.style.display = 'block';
        updateCartBadge();
        return;
    }

    // إذا كانت مليئة، نظهر الهيكل ونخفي حالة الفارغ
    if (cartLayout) cartLayout.style.display = 'grid';
    if (emptyCartState) emptyCartState.style.display = 'none';

    cartTableBody.innerHTML = '';
    let subtotal = 0;

    cart.forEach(function (cartItem) {
        let product = products.find(function (p) {
            return p.id === cartItem.id;
        });
        if (!product) return;

        let priceNum = parseInt(product.price.toString().replace(/[^0-9]/g, '')) || 0;
        let maxStock = parseInt(product.quantity) || 1;
        
        // التحقق من عدم تجاوز المخزون
        if (cartItem.qty > maxStock) {
            cartItem.qty = maxStock;
        }

        let itemTotal = priceNum * cartItem.qty;
        subtotal += itemTotal;

        const mainImg = (product.images && product.images.length > 0) ? product.images[0] : (product.image || 'https://via.placeholder.com/60');
        const minusQty = cartItem.qty - 1;
        const plusQty = cartItem.qty + 1;

        cartTableBody.innerHTML += 
            '<tr>' +
                '<td style="display: flex; align-items: center; gap: 12px;">' +
                    '<img src="' + mainImg + '" alt="' + product.title + '" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;" onerror="this.src=\'https://via.placeholder.com/60\'">' +
                    '<div>' +
                        '<strong>' + product.title + '</strong>' +
                        '<div style="font-size: 0.75rem; color: #16a34a;">' + t.inStock + maxStock + t.pcs + '</div>' +
                    '</div>' +
                '</td>' +
                '<td>' + product.price + t.currency + '</td>' +
                '<td>' +
                    '<div style="display: flex; align-items: center; gap: 5px; justify-content: center;">' +
                        '<button type="button" class="btn btn-sm btn-outline-dark" onclick="updateItemQuantity(\'' + product.id + '\', ' + minusQty + ', ' + maxStock + ')" style="padding: 2px 8px;">-</button>' +
                        '<input type="number" value="' + cartItem.qty + '" min="1" max="' + maxStock + '" ' +
                               'style="width: 50px; text-align: center; padding: 4px; border: 1px solid var(--gray-border); border-radius: 4px;" ' +
                               'onchange="updateItemQuantity(\'' + product.id + '\', parseInt(this.value), ' + maxStock + ')">' +
                        '<button type="button" class="btn btn-sm btn-outline-dark" onclick="updateItemQuantity(\'' + product.id + '\', ' + plusQty + ', ' + maxStock + ')" style="padding: 2px 8px;">+</button>' +
                    '</div>' +
                '</td>' +
                '<td><strong>' + itemTotal.toLocaleString() + t.currency + '</strong></td>' +
                '<td>' +
                    '<button type="button" class="btn-delete" onclick="removeFromCart(\'' + product.id + '\')" style="background: #fee2e2; color: #ef4444; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer;">' + t.deleteBtn + '</button>' +
                '</td>' +
            '</tr>';
    });

    // تحديث المجاميع في الملخص
    if (subtotalPriceElem) subtotalPriceElem.textContent = subtotal.toLocaleString() + t.currency;
    if (totalPriceElem) totalPriceElem.textContent = subtotal.toLocaleString() + t.currency;

    // تفعيل زر تفريغ السلة بالكامل
    if (clearCartBtn) {
        clearCartBtn.onclick = function () {
            if (confirm(t.confirmClear)) {
                localStorage.removeItem('cartItems');
                loadCartPage();
            }
        };
    }

    saveDetailedCart(cart);
}

// تحديث كمية منتج معين مع تقييد المخزون
function updateItemQuantity(productId, newQty, maxStock) {
    const t = getCartLangObj();
    let cart = getDetailedCart();
    let item = cart.find(function (i) {
        return i.id === productId;
    });

    if (!item) return;

    if (newQty > maxStock) {
        alert(t.alertMaxStock + maxStock + t.alertMaxStockSuffix);
        newQty = maxStock;
    }

    if (newQty <= 0 || isNaN(newQty)) {
        removeFromCart(productId);
        return;
    }

    item.qty = newQty;
    saveDetailedCart(cart);
    loadCartPage();
}

// حذف منتج مفرد من السلة
function removeFromCart(productId) {
    let cart = getDetailedCart();
    cart = cart.filter(function (i) {
        return i.id !== productId;
    });
    saveDetailedCart(cart);
    loadCartPage();
}