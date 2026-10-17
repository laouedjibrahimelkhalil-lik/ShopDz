document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        window.location.href = 'index.html';
        return;
    }

    await loadProductDetailsFromCloud(productId);
});

// قاموس النصوص الديناميكية لصفحة تفاصيل المنتج
const detailLangTexts = {
    ar: {
        notFound: 'عذراً، المنتج غير موجود أو تم حذفه!',
        backHome: 'العودة للرئيسية',
        defaultCat: 'عام',
        defaultDesc: 'لا يوجد وصف تفصيلي إضافي لهذا المنتج.',
        currency: ' د.ج',
        stockLabel: 'المخزون المتوفر: ',
        stockUnit: ' قطعة',
        specsTitle: 'المواصفات والتفاصيل:',
        qtyLabel: 'الكمية:',
        addToCartBtn: 'إضافة إلى سلة التسوق 🛒',
        buyNowBtn: 'شراء الآن ⚡',
        imageAlt: 'صورة ',
        alertMaxStock: 'عذراً، الكمية المتوفرة في المخزون هي ',
        alertMaxStockSuffix: ' قطعة فقط!',
        alertCannotOrderMore: 'لا يمكنك طلب أكثر من ',
        alertCartExceeded: 'عذراً، إجمالي الكمية في السلة تجاوز المخزون المتوفر (',
        alertCartExceededSuffix: ' قطعة)!',
        alertAddedSuccess: 'تمت إضافة ',
        alertAddedSuccessSuffix: ' قطعة من المنتج إلى السلة بنجاح! 🛒'
    },
    en: {
        notFound: 'Sorry, this product does not exist or has been removed!',
        backHome: 'Back to Home',
        defaultCat: 'General',
        defaultDesc: 'No additional detailed description available for this product.',
        currency: ' DZD',
        stockLabel: 'Available Stock: ',
        stockUnit: ' pcs',
        specsTitle: 'Specifications & Details:',
        qtyLabel: 'Quantity:',
        addToCartBtn: 'Add to Cart 🛒',
        buyNowBtn: 'Buy Now ⚡',
        imageAlt: 'Image ',
        alertMaxStock: 'Sorry, only ',
        alertMaxStockSuffix: ' pieces are available in stock!',
        alertCannotOrderMore: 'You cannot order more than ',
        alertCartExceeded: 'Sorry, total quantity in cart exceeds available stock (',
        alertCartExceededSuffix: ' pcs)!',
        alertAddedSuccess: 'Successfully added ',
        alertAddedSuccessSuffix: ' piece(s) to your cart! 🛒'
    },
    fr: {
        notFound: 'Désolé, ce produit n\'existe pas ou a été supprimé !',
        backHome: 'Retour à l\'accueil',
        defaultCat: 'Général',
        defaultDesc: 'Aucune description détaillée supplémentaire pour ce produit.',
        currency: ' DA',
        stockLabel: 'Stock disponible : ',
        stockUnit: ' pièce(s)',
        specsTitle: 'Spécifications et détails :',
        qtyLabel: 'Quantité :',
        addToCartBtn: 'Ajouter au panier 🛒',
        buyNowBtn: 'Acheter maintenant ⚡',
        imageAlt: 'Image ',
        alertMaxStock: 'Désolé, seulement ',
        alertMaxStockSuffix: ' pièce(s) disponible(s) en stock !',
        alertCannotOrderMore: 'Vous ne pouvez pas commander plus de ',
        alertCartExceeded: 'Désolé, la quantité totale dans le panier dépasse le stock disponible (',
        alertCartExceededSuffix: ' pièce(s)) !',
        alertAddedSuccess: 'Ajout de ',
        alertAddedSuccessSuffix: ' pièce(s) au panier avec succès ! 🛒'
    }
};

function getCurrentLangObj() {
    const lang = localStorage.getItem('shopLang') || 'ar';
    return detailLangTexts[lang] || detailLangTexts['ar'];
}

async function loadProductDetailsFromCloud(id) {
    const container = document.getElementById('productDetailContainer');
    const breadcrumb = document.getElementById('detailBreadcrumb') || document.getElementById('breadcrumbTitle');
    const breadcrumbCat = document.getElementById('breadcrumbCategory');
    const t = getCurrentLangObj();

    const { data: products, error } = await supabaseClient
        .from('products')
        .select('*')
        .eq('id', id);

    if (error || !products || products.length === 0 || !container) {
        if (container) {
            container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 50px;"><h2>' + t.notFound + '</h2><a href="index.html" class="btn btn-primary" style="margin-top: 15px; display: inline-block;">' + t.backHome + '</a></div>';
        }
        return;
    }

    const product = products[0];

    if (breadcrumb) breadcrumb.textContent = product.title;
    if (breadcrumbCat) breadcrumbCat.textContent = product.category || t.defaultCat;

    // معالجة الصور المتعددة (سواء كانت مخزنة كنص يحتوي على روابط مفصولة بأسطر أو رابط منفرد)
    let images = [];
    if (product.image) {
        images = product.image.split('\n').map(function (url) { return url.trim(); }).filter(function (url) { return url.length > 0; });
    }
    if (images.length === 0) {
        images = ['https://via.placeholder.com/400'];
    }

    const mainImg = images[0];
    const maxStock = product.quantity !== undefined ? parseInt(product.quantity) : 1;

    let thumbnailsHTML = '';
    if (images.length > 1) {
        images.forEach(function (imgUrl, index) {
            const activeClass = index === 0 ? ' active' : '';
            thumbnailsHTML += '<img src="' + imgUrl + '" alt="' + t.imageAlt + (index + 1) + '" class="thumb-img' + activeClass + '" onclick="changeMainImage(\'' + imgUrl + '\', this)" onerror="this.src=\'https://via.placeholder.com/80\'" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 2px solid ' + (index === 0 ? 'var(--primary-color, #2563eb)' : '#e2e8f0') + '; transition: 0.2s;">';
        });
    }

    const badgeHTML = product.badge ? '<span class="badge badge-new">' + product.badge + '</span>' : '';
    const oldPriceHTML = product.old_price ? '<span class="old-price">' + product.old_price + t.currency + '</span>' : '';
    const category = product.category || t.defaultCat;
    const description = product.description || t.defaultDesc;
    const galleryThumbnailsBox = images.length > 1 ? '<div class="thumbnails-grid" style="display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap;">' + thumbnailsHTML + '</div>' : '';

    container.innerHTML = 
        '<div class="product-gallery">' +
            '<div class="main-image-box" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #fff; padding: 10px; display: flex; justify-content: center; align-items: center;">' +
                '<img id="mainProductImg" src="' + mainImg + '" alt="' + product.title + '" onerror="this.src=\'https://via.placeholder.com/400\'" style="max-height: 400px; width: 100%; object-fit: contain;">' +
            '</div>' +
            galleryThumbnailsBox +
        '</div>' +
        '<div class="product-detail-info">' +
            badgeHTML +
            '<span class="product-cat">' + category + '</span>' +
            '<h1 class="detail-title">' + product.title + '</h1>' +
            '<div class="product-price detail-price">' +
                '<span class="current-price">' + product.price + t.currency + '</span>' +
                oldPriceHTML +
            '</div>' +
            '<div class="stock-status" style="margin: 10px 0; color: #16a34a; font-weight: 500;">' +
                '<span>' + t.stockLabel + '<strong id="availableStock">' + maxStock + '</strong>' + t.stockUnit + '</span>' +
            '</div>' +
            '<div class="detail-description">' +
                '<h3>' + t.specsTitle + '</h3>' +
                '<p>' + description + '</p>' +
            '</div>' +
            '<div class="quantity-selector" style="display: flex; align-items: center; gap: 12px; margin: 20px 0;">' +
                '<label for="productQty" style="font-weight: bold;">' + t.qtyLabel + '</label>' +
                '<div style="display: flex; align-items: center; gap: 6px;">' +
                    '<button type="button" class="btn btn-outline btn-sm" onclick="stepQuantity(-1, ' + maxStock + ')" style="padding: 6px 12px; font-weight: bold;">-</button>' +
                    '<input type="number" id="productQty" value="1" min="1" max="' + maxStock + '" style="width: 70px; padding: 8px; border: 1px solid var(--gray-border); border-radius: 6px; text-align: center; font-size: 1rem;" oninput="validateQuantity(this, ' + maxStock + ')">' +
                    '<button type="button" class="btn btn-outline btn-sm" onclick="stepQuantity(1, ' + maxStock + ')" style="padding: 6px 12px; font-weight: bold;">+</button>' +
                '</div>' +
            '</div>' +
            '<div class="detail-actions" style="display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap;">' +
                '<button class="btn btn-primary btn-lg" onclick="addQuantityToCart(\'' + product.id + '\', ' + maxStock + ', false)" style="flex: 1;">' + t.addToCartBtn + '</button>' +
                '<button class="btn btn-outline btn-lg" onclick="addQuantityToCart(\'' + product.id + '\', ' + maxStock + ', true)" style="flex: 1;">' + t.buyNowBtn + '</button>' +
            '</div>' +
        '</div>';
}

function changeMainImage(imgUrl, element) {
    const mainImg = document.getElementById('mainProductImg');
    if (mainImg) mainImg.src = imgUrl;

    document.querySelectorAll('.thumb-img').forEach(function (thumb) {
        thumb.classList.remove('active');
        thumb.style.borderColor = '#e2e8f0';
    });
    element.classList.add('active');
    element.style.borderColor = 'var(--primary-color, #2563eb)';
}

function stepQuantity(change, maxStock) {
    const qtyInput = document.getElementById('productQty');
    if (!qtyInput) return;

    const t = getCurrentLangObj();
    let current = parseInt(qtyInput.value) || 1;
    let nextVal = current + change;

    if (nextVal > maxStock) {
        alert(t.alertMaxStock + maxStock + t.alertMaxStockSuffix);
        qtyInput.value = maxStock;
    } else if (nextVal >= 1) {
        qtyInput.value = nextVal;
    }
}

function validateQuantity(input, maxStock) {
    const t = getCurrentLangObj();
    let val = parseInt(input.value);
    if (val > maxStock) {
        alert(t.alertMaxStock + maxStock + t.alertMaxStockSuffix);
        input.value = maxStock;
    } else if (val < 1 || isNaN(val)) {
        input.value = 1;
    }
}

function addQuantityToCart(productId, maxStock, redirectToCart) {
    const t = getCurrentLangObj();
    const qtyInput = document.getElementById('productQty');
    let qty = qtyInput ? parseInt(qtyInput.value) : 1;

    if (qty > maxStock) {
        alert(t.alertCannotOrderMore + maxStock + t.stockUnit);
        return;
    }

    let cart = [];
    let rawCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    if (rawCart.length > 0 && typeof rawCart[0] === 'string') {
        let counts = {};
        rawCart.forEach(function (id) { counts[id] = (counts[id] || 0) + 1; });
        cart = Object.keys(counts).map(function (id) { return { id: id, qty: counts[id] }; });
    } else {
        cart = rawCart;
    }

    let existingItem = cart.find(function (i) { return i.id === productId; });
    let currentQtyInCart = existingItem ? existingItem.qty : 0;

    if (currentQtyInCart + qty > maxStock) {
        alert(t.alertCartExceeded + maxStock + t.alertCartExceededSuffix);
        return;
    }

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ id: productId, qty: qty });
    }

    localStorage.setItem('cartItems', JSON.stringify(cart));
    
    if (typeof updateCartBadge === 'function') {
        updateCartBadge();
    }

    if (redirectToCart) {
        window.location.href = 'cart.html';
    } else {
        alert(t.alertAddedSuccess + qty + t.alertAddedSuccessSuffix);
    }
}