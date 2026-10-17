document.addEventListener('DOMContentLoaded', async function () {
    initMobileMenu();
    updateCartBadge();
    loadStoreHeroBanner();
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
            'العروض الخاصة': 'العروض الخاصة',
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
            'العروض الخاصة': 'Special Offers',
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
            'العروض الخاصة': 'Offres spéciales',
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

// تحميل وعرض الصورة الرئيسية المخصصة للمتجر من السحابة
async function loadStoreHeroBanner() {
    const heroImgEl = document.querySelector('.hero-image img');
    if (!heroImgEl) return;

    const cachedHero = localStorage.getItem('shopHeroImage');
    if (cachedHero) {
        heroImgEl.src = cachedHero;
    }

    const { data, error } = await supabaseClient
        .from('store_settings')
        .select('*')
        .eq('key', 'hero_image');

    if (!error && data && data.length > 0 && data[0].value) {
        heroImgEl.src = data[0].value;
        localStorage.setItem('shopHeroImage', data[0].value);
    }
}

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

async function renderHomeProducts(filterText) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    const t = getMainLang();
    const urlParams = new URLSearchParams(window.location.search);
    const activeCatParam = urlParams.get('cat');

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

    if (activeCatParam) {
        const targetNorm = normalizeArabicCat(activeCatParam);
        products = products.filter(function (p) {
            return p.category === activeCatParam || normalizeArabicCat(p.category) === targetNorm;
        });
    } else if (!filterText || filterText.trim() === '') {
        products = products.filter(function (p) {
            return p.show_on_home !== false;
        });
    }

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
        let mainImg = 'https://via.placeholder.com/300';
        if (product.image) {
            let matches = product.image.trim().match(/https?:\/\/[^\s]+/g);
            if (matches && matches.length > 0) mainImg = matches[0];
            else mainImg = product.image.trim().split(/[\n,]+/)[0];
        }

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

// دالة البحث الفوري (أبرز 5 نتائج كحد أقصى) والبحث الشامل عند Enter
function initSearchFilter() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (!searchInput) return;

    let dropdown = document.getElementById('searchDropdownResults');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'searchDropdownResults';
        dropdown.className = 'search-dropdown-results';
        searchInput.parentElement.appendChild(dropdown);
    }

    searchInput.addEventListener('input', async function () {
        const query = this.value.trim().toLowerCase();
        if (query.length === 0) {
            dropdown.style.display = 'none';
            return;
        }

        const { data: products } = await supabaseClient.from('products').select('*');
        const allProducts = products || [];

        const matched = allProducts.filter(p => 
            (p.title && p.title.toLowerCase().includes(query)) || 
            (p.category && p.category.toLowerCase().includes(query))
        ).slice(0, 5); // عرض أبرز 5 نتائج فقط كحد أقصى

        if (matched.length === 0) {
            dropdown.innerHTML = '<div style="padding: 12px; text-align: center; color: #64748b; font-size: 0.85rem;">لا توجد نتائج مطابقة</div>';
            dropdown.style.display = 'block';
            return;
        }

        dropdown.innerHTML = '';
        matched.forEach(product => {
            let mainImg = 'https://via.placeholder.com/40';
            if (product.image) {
                let matches = product.image.trim().match(/https?:\/\/[^\s]+/g);
                if (matches && matches.length > 0) mainImg = matches[0];
                else mainImg = product.image.trim().split(/[\n,]+/)[0];
            }

            const item = document.createElement('a');
            item.href = 'product-detail.html?id=' + product.id;
            item.className = 'search-dropdown-item';
            item.innerHTML = `
                <img src="${mainImg}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/40'">
                <div class="search-dropdown-item-info">
                    <h4>${product.title}</h4>
                    <span>${product.price} د.ج</span>
                </div>
            `;
            dropdown.appendChild(item);
        });

        dropdown.style.display = 'block';
    });

    function performFullSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = 'search.html?q=' + encodeURIComponent(query);
        }
    }

    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            dropdown.style.display = 'none';
            performFullSearch();
        }
    });

    if (searchBtn) {
        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            dropdown.style.display = 'none';
            performFullSearch();
        });
    }

    document.addEventListener('click', function (e) {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navBar = document.getElementById('navBar');

    if (mobileMenuBtn && navBar) {
        mobileMenuBtn.addEventListener('click', function () {
            navBar.classList.toggle('active');
        });
    }
}