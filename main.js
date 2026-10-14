document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    updateCartBadge();
    renderHomeProducts();
    initSearchFilter();
});

// قاموس الترجمة الخاص بملف main.js (البطاقات، الأقسام، التنبيهات)
const mainLangTexts = {
    ar: {
        currency: ' د.ج',
        addToCart: 'إضافة للسلة 🛒',
        viewProduct: 'رؤية المنتوج 👁️',
        outOfStock: 'نفذ المخزون',
        emptyProducts: 'لا توجد منتجات معروضة حالياً. يمكنك إضافة المنتجات من لوحة التحكم (Dashboard).',
        noSearchMatch: 'لا توجد منتجات مطابقة لبحثك.',
        alertOutOfStock: 'عذراً، هذا المنتج غير متوفر في المخزون حالياً!',
        alertMaxStock: 'عذراً، لا يمكنك إضافة المزيد. الكمية المتوفرة في المخزون هي ',
        alertMaxStockSuffix: ' قطعة فقط!',
        alertAdded: 'تمت إضافة المنتج إلى سلة التسوق بنجاح! 🛒',
        categories: {
            'الهواتف الذكية': 'الهواتف الذكية',
            'الحواسيب والملحقات': 'الحواسيب والملحقات',
            'إلكترونيات العامة': 'إلكترونيات عامة',
            'إلكترونيات عامة': 'إلكترونيات عامة',
            'العروض الخاصة': 'العروض الخاصة',
            'عروض خاصة': 'عروض خاصة',
            'عام': 'عام'
        },
        badges: {
            'جديد': 'جديد',
            'خصم': 'خصم'
        }
    },
    en: {
        currency: ' DZD',
        addToCart: 'Add to Cart 🛒',
        viewProduct: 'View Product 👁️',
        outOfStock: 'Out of Stock',
        emptyProducts: 'No products available at the moment. You can add products from the Dashboard.',
        noSearchMatch: 'No products match your search.',
        alertOutOfStock: 'Sorry, this product is currently out of stock!',
        alertMaxStock: 'Sorry, you cannot add more. Only ',
        alertMaxStockSuffix: ' piece(s) available in stock!',
        alertAdded: 'Product added to cart successfully! 🛒',
        categories: {
            'الهواتف الذكية': 'Smartphones',
            'الحواسيب والملحقات': 'Laptops & Accessories',
            'إلكترونيات العامة': 'General Electronics',
            'إلكترونيات عامة': 'General Electronics',
            'العروض الخاصة': 'Special Offers',
            'عروض خاصة': 'Special Offers',
            'عام': 'General'
        },
        badges: {
            'جديد': 'New',
            'خصم': 'Sale'
        }
    },
    fr: {
        currency: ' DA',
        addToCart: 'Ajouter 🛒',
        viewProduct: 'Voir produit 👁️',
        outOfStock: 'Rupture de stock',
        emptyProducts: 'Aucun produit affiché pour le moment. Ajoutez des produits depuis le tableau de bord.',
        noSearchMatch: 'Aucun produit ne correspond à votre recherche.',
        alertOutOfStock: 'Désolé, ce produit est actuellement en rupture de stock !',
        alertMaxStock: 'Désolé, vous ne pouvez pas ajouter plus. Seulement ',
        alertMaxStockSuffix: ' pièce(s) disponible(s) en stock !',
        alertAdded: 'Produit ajouté au panier avec succès ! 🛒',
        categories: {
            'الهواتف الذكية': 'Smartphones',
            'الحواسيب والملحقات': 'Ordinateurs & Accessoires',
            'إلكترونيات العامة': 'Électronique générale',
            'إلكترونيات عامة': 'Électronique générale',
            'العروض الخاصة': 'Offres spéciales',
            'عروض خاصة': 'Offres spéciales',
            'عام': 'Général'
        },
        badges: {
            'جديد': 'Nouveau',
            'خصم': 'Promo'
        }
    }
};

function getMainLang() {
    const lang = localStorage.getItem('shopLang') || 'ar';
    return mainLangTexts[lang] || mainLangTexts['ar'];
}

// توحيد وقراءة السلة بصيغة الكائنات {id, qty}
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

// تحديث رقم السلة في الهيدر
function updateCartBadge() {
    const cartBadge = document.getElementById('cartBadge');
    if (!cartBadge) return;

    let cart = getDetailedCart();
    let totalCount = 0;
    cart.forEach(function (item) {
        totalCount += (parseInt(item.qty) || 1);
    });
    cartBadge.textContent = totalCount;
}

// عرض المنتجات في الصفحة الرئيسية سحابياً من Supabase
async function renderHomeProducts(filterText) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    const t = getMainLang();

    // جلب المنتجات من جدول products في Supabase
    const { data: productsFromDb, error } = await supabaseClient
        .from('products')
        .select('*');

    if (error) {
        console.error('Error loading products from Supabase:', error);
        productsGrid.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 40px;"><p>خطأ في الاتصال بقاعدة البيانات السحابية.</p></div>';
        return;
    }

    let products = productsFromDb || [];

    if (filterText && filterText.trim() !== '') {
        const q = filterText.trim().toLowerCase();
        products = products.filter(function (p) {
            return (p.title && p.title.toLowerCase().indexOf(q) !== -1) ||
                   (p.category && p.category.toLowerCase().indexOf(q) !== -1);
        });
    }

    if (products.length === 0) {
        const emptyMsg = filterText ? t.noSearchMatch : t.emptyProducts;
        productsGrid.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 40px;"><p>' + emptyMsg + '</p></div>';
        return;
    }

    productsGrid.innerHTML = '';

    products.forEach(function (product) {
        const mainImg = product.image || 'https://via.placeholder.com/300';
        const rawCat = product.category || 'عام';
        const translatedCat = t.categories[rawCat] || rawCat;

        let badgeHTML = '';
        if (product.badge) {
            const translatedBadge = t.badges[product.badge] || product.badge;
            badgeHTML = '<span class="badge badge-new">' + translatedBadge + '</span>';
        }

        const oldPriceHTML = product.old_price ? '<span class="old-price" style="margin: 0 6px;">' + product.old_price + t.currency + '</span>' : '';
        const stockQty = product.quantity !== undefined ? parseInt(product.quantity) : 1;

        let addBtnHTML = '';
        if (stockQty > 0) {
            addBtnHTML = '<button type="button" class="btn btn-primary" onclick="addToCart(\'' + product.id + '\')" style="flex: 1; padding: 10px 8px; font-size: 0.9rem; border-radius: 8px; cursor: pointer;">' + t.addToCart + '</button>';
        } else {
            addBtnHTML = '<button type="button" class="btn" disabled style="flex: 1; padding: 10px 8px; font-size: 0.9rem; border-radius: 8px; background: #cbd5e1; color: #475569; cursor: not-allowed; border: none;">' + t.outOfStock + '</button>';
        }

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = 
            '<div class="product-img-wrapper" style="cursor: pointer;" onclick="window.location.href=\'product-detail.html?id=' + product.id + '\'">' +
                badgeHTML +
                '<img src="' + mainImg + '" alt="' + product.title + '" onerror="this.src=\'https://via.placeholder.com/300\'">' +
            '</div>' +
            '<div class="product-info">' +
                '<span class="product-cat">' + translatedCat + '</span>' +
                '<h3 class="product-title" style="cursor: pointer;" onclick="window.location.href=\'product-detail.html?id=' + product.id + '\'">' + product.title + '</h3>' +
                '<div class="product-price">' +
                    '<span class="current-price">' + product.price + t.currency + '</span>' +
                    oldPriceHTML +
                '</div>' +
                '<div class="product-actions" style="display: flex; gap: 8px; margin-top: 12px;">' +
                    '<a href="product-detail.html?id=' + product.id + '" style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 8px; font-size: 0.9rem; font-weight: 700; color: #1e293b; background-color: #ffffff; border: 1.5px solid #334155; border-radius: 8px; text-decoration: none; transition: 0.2s;">' +
                        t.viewProduct +
                    '</a>' +
                    addBtnHTML +
                '</div>' +
            '</div>';

        productsGrid.appendChild(card);
    });
}

// دالة إضافة منتج للسلة مع التحقق من المخزون السحابي
async function addToCart(productId) {
    const t = getMainLang();

    // جلب المنتج المحدد من Supabase للتحقق من الكمية المتوفرة
    const { data: products, error } = await supabaseClient
        .from('products')
        .select('*')
        .eq('id', productId);

    if (error || !products || products.length === 0) {
        alert('عذراً، حدث خطأ أثناء جلب تفاصيل المنتج.');
        return;
    }

    const product = products[0];
    const maxStock = product.quantity !== undefined ? parseInt(product.quantity) : 1;
    
    if (maxStock <= 0) {
        alert(t.alertOutOfStock);
        return;
    }

    let cart = getDetailedCart();
    let existingItem = cart.find(function (item) { return item.id === productId; });
    let currentQty = existingItem ? existingItem.qty : 0;

    if (currentQty + 1 > maxStock) {
        alert(t.alertMaxStock + maxStock + t.alertMaxStockSuffix);
        return;
    }

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ id: productId, qty: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cart));
    updateCartBadge();
    alert(t.alertAdded);
}

// تفعيل شريط البحث في الهيدر
function initSearchFilter() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            renderHomeProducts(this.value);
        });
    }

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            renderHomeProducts(searchInput.value);
        });
    }
}

// تفعيل قائمة الهاتف المحمول
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navBar = document.getElementById('navBar');

    if (mobileMenuBtn && navBar) {
        mobileMenuBtn.addEventListener('click', function () {
            navBar.classList.toggle('active');
        });
    }
}