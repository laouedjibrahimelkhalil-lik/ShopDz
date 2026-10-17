document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        window.location.href = 'index.html';
        return;
    }

    await loadProductDetailsDirect(productId);
});

// قاموس الترجمات الخاص بصفحة التفاصيل
const detailLangTexts = {
    ar: {
        notFound: 'عذراً، المنتج غير موجود أو تم حذفه!',
        backHome: 'العودة للرئيسية',
        defaultCat: 'عام',
        defaultDesc: 'لا يوجد وصف تفصيلي إضافي لهذا المنتج.',
        currency: ' د.ج',
        inStock: 'متوفر بالمخزون',
        outOfStock: 'نفذ المخزون',
        alertMaxStock: 'عذراً، الكمية المتوفرة في المخزون هي ',
        alertMaxStockSuffix: ' قطعة فقط!',
        alertAddedSuccess: 'تمت إضافة المنتج إلى السلة بنجاح! 🛒'
    },
    en: {
        notFound: 'Sorry, this product does not exist or has been removed!',
        backHome: 'Back to Home',
        defaultCat: 'General',
        defaultDesc: 'No additional detailed description available for this product.',
        currency: ' DZD',
        inStock: 'In Stock',
        outOfStock: 'Out of Stock',
        alertMaxStock: 'Sorry, only ',
        alertMaxStockSuffix: ' pieces are available in stock!',
        alertAddedSuccess: 'Product added to cart successfully! 🛒'
    },
    fr: {
        notFound: 'Désolé, ce produit n\'existe pas ou a été supprimé !',
        backHome: 'Retour à l\'accueil',
        defaultCat: 'Général',
        defaultDesc: 'Aucune description détaillée supplémentaire pour ce produit.',
        currency: ' DA',
        inStock: 'En stock',
        outOfStock: 'Rupture de stock',
        alertMaxStock: 'Désolé, seulement ',
        alertMaxStockSuffix: ' pièce(s) disponible(s) en stock !',
        alertAddedSuccess: 'Produit ajouté au panier avec succès ! 🛒'
    }
};

function getDetailLang() {
    const lang = localStorage.getItem('shopLang') || 'ar';
    return detailLangTexts[lang] || detailLangTexts['ar'];
}

async function loadProductDetailsDirect(id) {
    const t = getDetailLang();

    // جلب المنتج مباشرة من سحابة Supabase
    const { data: products, error } = await supabaseClient
        .from('products')
        .select('*')
        .eq('id', id);

    if (error || !products || products.length === 0) {
        const gridBox = document.getElementById('productDetailContainer');
        if (gridBox) {
            gridBox.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 50px;"><h2>' + t.notFound + '</h2><a href="index.html" class="btn btn-primary" style="margin-top: 15px; display: inline-block;">' + t.backHome + '</a></div>';
        }
        return;
    }

    const product = products[0];

    // تعبئة البيانات في عناصر الـ HTML الثابتة لديك
    const breadcrumbTitle = document.getElementById('breadcrumbTitle');
    const breadcrumbCategory = document.getElementById('breadcrumbCategory');
    const detailCategory = document.getElementById('detailCategory');
    const detailTitle = document.getElementById('detailTitle');
    const detailPrice = document.getElementById('detailPrice');
    const detailOldPrice = document.getElementById('detailOldPrice');
    const detailDescription = document.getElementById('detailDescription');
    const detailStock = document.getElementById('detailStock');
    const detailImage = document.getElementById('detailImage');
    const detailThumbnails = document.getElementById('detailThumbnails');
    const detailBadge = document.getElementById('detailBadge');

    if (breadcrumbTitle) breadcrumbTitle.textContent = product.title;
    if (breadcrumbCategory) breadcrumbCategory.textContent = product.category || t.defaultCat;
    if (detailCategory) detailCategory.textContent = product.category || t.defaultCat;
    if (detailTitle) detailTitle.textContent = product.title;
    if (detailPrice) detailPrice.textContent = product.price + t.currency;
    if (detailDescription) detailDescription.textContent = product.description || t.defaultDesc;

    if (product.old_price && detailOldPrice) {
        detailOldPrice.textContent = product.old_price + t.currency;
        detailOldPrice.style.display = 'inline-block';
    }

    if (product.badge && detailBadge) {
        detailBadge.textContent = product.badge;
        detailBadge.style.display = 'inline-block';
    }

    const maxStock = product.quantity !== undefined ? parseInt(product.quantity) : 1;
    if (detailStock) {
        if (maxStock > 0) {
            detailStock.textContent = t.inStock + ' (' + maxStock + ')';
            detailStock.className = 'stock-status in-stock';
        } else {
            detailStock.textContent = t.outOfStock;
            detailStock.className = 'stock-status out-of-stock';
        }
    }

    // معالجة الصور المتعددة (عبر الأسطر أو الفواصل) بدقة متناهية
    // معالجة الصور المتعددة (تقسيم الروابط بأسطر جديدة، فواصل، أو مسافات فارغة وتنظيفها)
    let images = [];
    if (product.image) {
        images = product.image
            .split(/[\n,]+/) // التقسيم عبر الأسطر والفواصل
            .map(function (url) { return url.trim(); })
            .filter(function (url) { return url.length > 5 && url.startsWith('http'); }); // التأكد من أنه رابط صالح ويبدأ بـ http
    }
    if (images.length === 0) {
        images = ['https://via.placeholder.com/500'];
    }

    // تعبئة الصورة الرئيسية الأولى
    if (detailImage) {
        detailImage.src = images[0];
        detailImage.onerror = function () { this.src = 'https://via.placeholder.com/500'; };
    }

    // بناء وعرض الصور المصغرة المتعددة تحت الصورة الرئيسية
    if (detailThumbnails) {
        detailThumbnails.innerHTML = '';
        if (images.length > 1) {
            images.forEach(function (imgUrl, index) {
                const thumb = document.createElement('img');
                thumb.src = imgUrl;
                thumb.alt = 'صورة مصغرة ' + (index + 1);
                thumb.className = 'thumb-img' + (index === 0 ? ' active' : '');
                thumb.style.cssText = 'width: 70px; height: 70px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 2px solid ' + (index === 0 ? '#2563eb' : '#e2e8f0') + '; transition: 0.2s;';
                
                thumb.onclick = function () {
                    if (detailImage) detailImage.src = imgUrl;
                    document.querySelectorAll('.thumb-img').forEach(function (t) {
                        t.style.borderColor = '#e2e8f0';
                        t.classList.remove('active');
                    });
                    thumb.style.borderColor = '#2563eb';
                    thumb.classList.add('active');
                };

                detailThumbnails.appendChild(thumb);
            });
        }
    }

    // تفعيل أزرار التحكم بالكمية وإضافة للسلة
    setupQuantityAndCart(product.id, maxStock);
}

function setupQuantityAndCart(productId, maxStock) {
    const inputQty = document.getElementById('inputQuantity');
    const btnDecrease = document.getElementById('btnDecrease');
    const btnIncrease = document.getElementById('btnIncrease');
    const addToCartBtn = document.getElementById('addToCartBtn');
    const t = getDetailLang();

    if (inputQty) {
        inputQty.max = maxStock;
    }

    if (btnDecrease && inputQty) {
        btnDecrease.onclick = function () {
            let val = parseInt(inputQty.value) || 1;
            if (val > 1) inputQty.value = val - 1;
        };
    }

    if (btnIncrease && inputQty) {
        btnIncrease.onclick = function () {
            let val = parseInt(inputQty.value) || 1;
            if (val < maxStock) {
                inputQty.value = val + 1;
            } else {
                alert(t.alertMaxStock + maxStock + t.alertMaxStockSuffix);
            }
        };
    }

    if (addToCartBtn && inputQty) {
        addToCartBtn.onclick = function () {
            let qtyToAdd = parseInt(inputQty.value) || 1;
            if (qtyToAdd > maxStock) {
                alert(t.alertMaxStock + maxStock + t.alertMaxStockSuffix);
                return;
            }

            let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
            
            // توحيد نمط تخزين السلة
            if (cart.length > 0 && typeof cart[0] === 'string') {
                let counts = {};
                cart.forEach(function (id) { counts[id] = (counts[id] || 0) + 1; });
                cart = Object.keys(counts).map(function (id) { return { id: id, qty: counts[id] }; });
            }

            let existingItem = cart.find(function (i) { return i.id === productId; });
            let currentQty = existingItem ? existingItem.qty : 0;

            if (currentQty + qtyToAdd > maxStock) {
                alert(t.alertMaxStock + maxStock + t.alertMaxStockSuffix);
                return;
            }

            if (existingItem) {
                existingItem.qty += qtyToAdd;
            } else {
                cart.push({ id: productId, qty: qtyToAdd });
            }

            localStorage.setItem('cartItems', JSON.stringify(cart));
            
            if (typeof updateCartBadge === 'function') {
                updateCartBadge();
            }

            alert(t.alertAddedSuccess);
        };
    }
}