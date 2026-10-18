document.addEventListener('DOMContentLoaded', async function () {
    await renderCart();

    const clearBtn = document.getElementById('clearCartBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearAllCartItems);
    }

    const couponBtn = document.getElementById('applyCouponBtn');
    if (couponBtn) {
        couponBtn.addEventListener('click', function () {
            const t = getCartLangObj();
            const codeInput = document.getElementById('couponCode');
            if (!codeInput || !codeInput.value.trim()) {
                alert(t.enterCouponAlert);
                return;
            }
            alert(t.invalidCouponAlert);
        });
    }

    const langSelect = document.getElementById('languageSelector');
    if (langSelect) {
        langSelect.addEventListener('change', async function () {
            await renderCart();
        });
    }
});

const cartDynamicLang = {
    ar: {
        currency: ' د.ج',
        maxStockAlert: 'عذراً، الكمية القصوى المتوفرة في المخزون هي ',
        maxStockSuffix: ' قطعة فقط!',
        confirmClear: 'هل أنت متأكد من رغبتك في تفريغ السلة بالكامل؟',
        enterCouponAlert: 'يرجى كتابة كود الخصم أولاً.',
        invalidCouponAlert: 'كود الخصم غير صالح أو منتهي الصلاحية.',
        removeTitle: 'حذف المنتج'
    },
    en: {
        currency: ' DZD',
        maxStockAlert: 'Sorry, the maximum available stock is ',
        maxStockSuffix: ' unit(s) only!',
        confirmClear: 'Are you sure you want to clear the entire cart?',
        enterCouponAlert: 'Please enter a discount code first.',
        invalidCouponAlert: 'Invalid or expired discount code.',
        removeTitle: 'Remove item'
    },
    fr: {
        currency: ' DA',
        maxStockAlert: 'Désolé, la quantité maximale disponible en stock est de ',
        maxStockSuffix: ' pièce(s) seulement !',
        confirmClear: 'Êtes-vous sûr de vouloir vider tout le panier ?',
        enterCouponAlert: 'Veuillez d\'abord saisir un code promo.',
        invalidCouponAlert: 'Code promo invalide ou expiré.',
        removeTitle: 'Supprimer l\'article'
    }
};

function getCartLangObj() {
    const lang = localStorage.getItem('shopLang') || 'ar';
    return cartDynamicLang[lang] || cartDynamicLang['ar'];
}

function getStoredCart() {
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

async function renderCart() {
    const cartLayout = document.getElementById('cartLayout');
    const emptyCartState = document.getElementById('emptyCartState');
    const cartTableBody = document.getElementById('cartTableBody');
    const subtotalEl = document.getElementById('subtotalPrice');
    const totalEl = document.getElementById('totalPrice');

    if (!cartTableBody) return;

    const t = getCartLangObj();
    let cart = getStoredCart();

    if (typeof updateCartBadge === 'function') {
        updateCartBadge();
    }

    if (cart.length === 0) {
        if (cartLayout) cartLayout.style.display = 'none';
        if (emptyCartState) emptyCartState.style.display = 'block';
        return;
    }

    const { data: allProducts, error } = await supabaseClient.from('products').select('*');
    if (error || !allProducts) {
        console.error('Error loading cart products:', error);
        return;
    }

    let validCart = [];
    let subtotal = 0;
    cartTableBody.innerHTML = '';

    cart.forEach(function (item) {
        const product = allProducts.find(function (p) { return String(p.id) === String(item.id); });
        if (!product) return;

        const maxStock = product.quantity !== undefined ? parseInt(product.quantity) : 1;
        let qty = parseInt(item.qty) || 1;
        if (maxStock > 0 && qty > maxStock) qty = maxStock;

        validCart.push({ id: product.id, qty: qty });

        const unitPrice = parseFloat(product.price) || 0;
        const itemTotal = unitPrice * qty;
        subtotal += itemTotal;

        let mainImg = 'https://via.placeholder.com/80';
        if (product.image) {
            let matches = product.image.trim().match(/https?:\/\/[^\s]+/g);
            if (matches && matches.length > 0) mainImg = matches[0];
            else mainImg = product.image.trim().split(/[\n,]+/)[0];
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="cart-product-cell" style="display: flex; align-items: center; gap: 12px;">
                    <img src="${mainImg}" alt="${product.title}" style="width: 55px; height: 55px; object-fit: cover; border-radius: 8px; border: 1px solid #e2e8f0; flex-shrink: 0;" onerror="this.src='https://via.placeholder.com/80'">
                    <a href="product-detail.html?id=${product.id}" style="font-weight: 700; color: #0f172a; text-decoration: none; font-size: 0.92rem;">${product.title}</a>
                </div>
            </td>
            <td style="white-space: nowrap; font-weight: 600;">${unitPrice.toLocaleString()}${t.currency}</td>
            <td>
                <div class="qty-control" style="display: inline-flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; overflow: hidden;">
                    <button type="button" onclick="updateCartItemQty('${product.id}', -1, ${maxStock})" style="border: none; background: none; padding: 5px 10px; font-weight: 800; cursor: pointer; font-size: 1rem;">−</button>
                    <span style="padding: 0 10px; font-weight: 700; font-size: 0.9rem;">${qty}</span>
                    <button type="button" onclick="updateCartItemQty('${product.id}', 1, ${maxStock})" style="border: none; background: none; padding: 5px 10px; font-weight: 800; cursor: pointer; font-size: 1rem;">+</button>
                </div>
            </td>
            <td style="white-space: nowrap; font-weight: 800; color: #2563eb;">${itemTotal.toLocaleString()}${t.currency}</td>
            <td>
                <button type="button" onclick="deleteCartItem('${product.id}')" title="${t.removeTitle}" style="background: #fee2e2; color: #dc2626; border: none; padding: 7px 10px; border-radius: 8px; cursor: pointer;">🗑️</button>
            </td>
        `;
        cartTableBody.appendChild(tr);
    });

    localStorage.setItem('cartItems', JSON.stringify(validCart));
    if (typeof updateCartBadge === 'function') {
        updateCartBadge();
    }

    if (validCart.length === 0) {
        if (cartLayout) cartLayout.style.display = 'none';
        if (emptyCartState) emptyCartState.style.display = 'block';
        return;
    }

    if (cartLayout) cartLayout.style.display = '';
    if (emptyCartState) emptyCartState.style.display = 'none';

    if (subtotalEl) subtotalEl.textContent = subtotal.toLocaleString() + t.currency;
    if (totalEl) totalEl.textContent = subtotal.toLocaleString() + t.currency;
}

async function updateCartItemQty(productId, change, maxStock) {
    const t = getCartLangObj();
    let cart = getStoredCart();
    let target = cart.find(function (i) { return String(i.id) === String(productId); });
    if (!target) return;

    let nextQty = (parseInt(target.qty) || 1) + change;
    if (nextQty < 1) {
        await deleteCartItem(productId);
        return;
    }

    if (maxStock > 0 && nextQty > maxStock) {
        alert(t.maxStockAlert + maxStock + t.maxStockSuffix);
        return;
    }

    target.qty = nextQty;
    localStorage.setItem('cartItems', JSON.stringify(cart));
    await renderCart();
}

async function deleteCartItem(productId) {
    let cart = getStoredCart();
    cart = cart.filter(function (i) { return String(i.id) !== String(productId); });
    localStorage.setItem('cartItems', JSON.stringify(cart));
    await renderCart();
}

async function clearAllCartItems() {
    const t = getCartLangObj();
    if (!confirm(t.confirmClear)) return;
    localStorage.removeItem('cartItems');
    await renderCart();
}