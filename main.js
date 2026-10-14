document.addEventListener('DOMContentLoaded', async function () {
    initMobileMenu();
    updateCartBadge();
    await loadAndRenderCategories();
    await renderHomeProducts();
    initSearchFilter();
});

let dynamicCategoriesList = [];

// قاموس الترجمة الخاص بملف main.js
const mainLangTexts = {
    ar: {
        currency: ' د.ج',
        addToCart: 'إضافة للسلة 🛒',
        viewProduct: 'رؤية المنتوج 👁️',
        outOfStock: 'نفذ المخزون',
        emptyProducts: 'لا توجد منتجات محددة للعرض في الرئيسية حالياً. يمكنك تصفح الفئات أعلاه أو تحديد منتجات من لوحة التحكم.',
        emptyCategoryProducts: 'لا توجد منتجات مضافة في هذه الفئة حالياً.',
        noSearchMatch: 'لا توجد منتجات مطابقة لبحثك.',
        alertOutOfStock: 'عذراً، هذا المنتج غير متوفر في المخزون حالياً!',
        alertMaxStock: 'عذراً، لا يمكنك إضافة المزيد. الكمية المتوفرة في المخزون هي ',
        alertMaxStockSuffix: ' قطعة فقط!',
        alertAdded: 'تمت إضافة المنتج إلى سلة التسوق بنجاح! 🛒',
        browseCategoriesTitle: '📂 تصفح حسب الفئات',
        allHomeLink: 'الرئيسية',
        viewAllInCat: 'عرض كل المنتجات ←',
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
        emptyProducts: 'No featured products selected for the home page yet.',
        emptyCategoryProducts: 'No products available in this category at the moment.',
        noSearchMatch: 'No products match your search.',
        alertOutOfStock: 'Sorry, this product is currently out of stock!',
        alertMaxStock: 'Sorry, you cannot add more. Only ',
        alertMaxStockSuffix: ' piece(s) available in stock!',
        alertAdded: 'Product added to cart successfully! 🛒',
        browseCategoriesTitle: '📂 Browse by Category',
        allHomeLink: 'Home',
        viewAllInCat: 'View Products →',
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
        emptyProducts: 'Aucun produit sélectionné pour la page d\'accueil.',
        emptyCategoryProducts: 'Aucun produit dans cette catégorie pour le moment.',
        noSearchMatch: 'Aucun produit ne correspond à votre recherche.',
        alertOutOfStock: 'Désolé, ce produit est actuellement en rupture de stock !',
        alertMaxStock: 'Désolé, vous ne pouvez pas ajouter plus. Seulement ',
        alertMaxStockSuffix: ' pièce(s) disponible(s) en stock !',
        alertAdded: 'Produit ajouté au panier avec succès ! 🛒',
        browseCategoriesTitle: '📂 Parcourir par catégorie',
        allHomeLink: 'Accueil',
        viewAllInCat: 'Voir les produits →',
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

// دالة مساعدة لتوحيد النص العربي (تتجاهل الفرق بين "إلكترونيات العامة" و "إلكترونيات عامة" والهمزات)
function normalizeArabicCat(str) {
    if (!str) return '';
    return str.trim()
        .replace(/[أإآ]/g, 'ا')
        .replace(/ال/g, '')
        .replace(/ة/g, 'ه')
        .replace(/\s+/g, '');
}

function getTranslatedCategoryName(rawCatAr) {
    const lang = localStorage.getItem('shopLang') || 'ar';
    const t = getMainLang();
    const normRaw = normalizeArabicCat(rawCatAr);
    const found = dynamicCategoriesList.find(function (c) {
        return c.name_ar === rawCatAr || normalizeArabicCat(c.name_ar) === normRaw;
    });
    if (found) {
        if (lang === 'en' && found.name_en) return found.name_en;
        if (lang === 'fr' && found.name_fr) return found.name_fr;
        return found.name_ar;
    }
    return t.categories[rawCatAr] || rawCatAr;
}

// جلب الفئات من Supabase وعرضها في شريط التنقل وفي أعلى الصفحة الرئيسية
async function loadAndRenderCategories() {
    const t = getMainLang();
    const lang = localStorage.getItem('shopLang') || 'ar';

    const { data: cats, error } = await supabaseClient.from('categories').select('*');
    if (!error && cats && cats.length > 0) {
        dynamicCategoriesList = cats;
    } else {
        dynamicCategoriesList = [
            { name_ar: 'الهواتف الذكية', name_en: 'Smartphones', name_fr: 'Smartphones', slug: 'smartphones' },
            { name_ar: 'الحواسيب والملحقات', name_en: 'Laptops & Accessories', name_fr: 'Ordinateurs & Accessoires', slug: 'laptops' },
            { name_ar: 'إلكترونيات عامة', name_en: 'General Electronics', name_fr: 'Électronique générale', slug: 'electronics' },
            { name_ar: 'العروض الخاصة', name_en: 'Special Offers', name_fr: 'Offres spéciales', slug: 'offers' }
        ];
    }

    // 1. تحديث شريط التنقل العلوي (navBar) بروابط الفئات الديناميكية
    const navList = document.querySelector('#navBar .nav-list') || document.querySelector('.nav-links') || document.querySelector('.cat-nav-list');
    const urlParams = new URLSearchParams(window.location.search);
    const activeCatParam = urlParams.get('cat');

    if (navList) {
        let navHTML = '<li><a href="index.html" class="' + (!activeCatParam ? 'active' : '') + '">' + t.allHomeLink + '</a></li>';
        dynamicCategoriesList.forEach(function (cat) {
            let displayName = cat.name_ar;
            if (lang === 'en' && cat.name_en) displayName = cat.name_en;
            if (lang === 'fr' && cat.name_fr) displayName = cat.name_fr;
            const isActive = (activeCatParam && normalizeArabicCat(activeCatParam) === normalizeArabicCat(cat.name_ar)) ? 'active' : '';
            navHTML += '<li><a href="category.html?cat=' + encodeURIComponent(cat.name_ar) + '" class="' + isActive + '">' + displayName + '</a></li>';
        });
        navList.innerHTML = navHTML;
    }

    // 2. إظهار بطاقات الفئات في أعلى الصفحة الرئيسية (فقط إذا كنا في index.html وليس في صفحة فئة فرعية)
    const isCategoryPage = window.location.pathname.indexOf('category.html') !== -1 || activeCatParam;
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid || isCategoryPage) return;

    let homeCatSection = document.getElementById('homeCategoriesWrapper');
    if (!homeCatSection) {
        homeCatSection = document.createElement('div');
        homeCatSection.id = 'homeCategoriesWrapper';
        homeCatSection.style.marginBottom = '40px';
        const parentSection = productsGrid.parentElement;
        parentSection.insertBefore(homeCatSection, productsGrid.previousElementSibling || productsGrid);
    }

    let cardsHTML = '<h2 class="section-title" style="margin-bottom: 18px; font-size: 1.4rem;">' + t.browseCategoriesTitle + '</h2>';
    cardsHTML += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">';

    dynamicCategoriesList.forEach(function (cat) {
        let displayName = cat.name_ar;
        if (lang === 'en' && cat.name_en) displayName = cat.name_en;
        if (lang === 'fr' && cat.name_fr) displayName = cat.name_fr;

        cardsHTML += 
            '<a href="category.html?cat=' + encodeURIComponent(cat.name_ar) + '" style="display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px 15px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; text-decoration: none; color: #1e293b; box-shadow: 0 2px 6px rgba(0,0,0,0.04); transition: 0.2s;">' +
                '<strong style="font-size: 1.1rem; margin-bottom: 6px; color: #0f172a;">' + displayName + '</strong>' +
                '<span style="font-size: 0.82rem; color: #2563eb; font-weight: 600;">' + t.viewAllInCat + '</span>' +
            '</a>';
    });

    cardsHTML += '</div><hr style="margin: 35px 0 10px; border: 0; border-top: 1px solid #e2e8f0;">';
    homeCatSection.innerHTML = cardsHTML;
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

// عرض المنتجات (يعرض فقط المحددة للرئيسية في index.html، أو يعرض كل منتجات الفئة في category.html)
async function renderHomeProducts(filterText) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    const t = getMainLang();
    const urlParams = new URLSearchParams(window.location.search);
    const activeCatParam = urlParams.get('cat');

    // تحديث عنوان القسم إذا كنا داخل صفحة فئة معينة
    const categoryHeading = document.getElementById('categoryPageTitle');
    if (categoryHeading && activeCatParam) {
        categoryHeading.textContent = getTranslatedCategoryName(activeCatParam);
    }

    const { data: productsFromDb, error } = await supabaseClient
        .from('products')
        .select('*');

    if (error) {
        console.error('Error loading products from Supabase:', error);
        productsGrid.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 40px;"><p>خطأ في الاتصال بقاعدة البيانات السحابية.</p></div>';
        return;
    }

    let products = productsFromDb || [];

    // إذا كنا في صفحة فئة معينة (category.html?cat=...) نعرض جميع منتجات هذه الفئة بمرونة
    if (activeCatParam) {
        const targetNorm = normalizeArabicCat(activeCatParam);
        products = products.filter(function (p) {
            return p.category === activeCatParam || normalizeArabicCat(p.category) === targetNorm;
        });
    } else if (!filterText || filterText.trim() === '') {
        // إذا كنا في الصفحة الرئيسية ولا يوجد بحث، نعرض فقط المنتجات التي حددها الأدمن للظهور في الرئيسية
        products = products.filter(function (p) {
            return p.show_on_home !== false;
        });
    }

    // تصفية البحث إن وجد
    if (filterText && filterText.trim() !== '') {
        const q = filterText.trim().toLowerCase();
        products = products.filter(function (p) {
            return (p.title && p.title.toLowerCase().indexOf(q) !== -1) ||
                   (p.category && p.category.toLowerCase().indexOf(q) !== -1);
        });
    }

    if (products.length === 0) {
        let emptyMsg = t.emptyProducts;
        if (filterText) emptyMsg = t.noSearchMatch;
        else if (activeCatParam) emptyMsg = t.emptyCategoryProducts;

        productsGrid.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 40px;"><p>' + emptyMsg + '</p></div>';
        return;
    }

    productsGrid.innerHTML = '';

    products.forEach(function (product) {
        const mainImg = product.image || 'https://via.placeholder.com/300';
        const rawCat = product.category || 'عام';
        const translatedCat = getTranslatedCategoryName(rawCat);

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