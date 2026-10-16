// قاموس النصوص الديناميكية للوحة التحكم باللغات الثلاث
const dashLangTexts = {
    ar: {
        mustLogin: 'يجب تسجيل الدخول كمسؤول أولاً للوصول إلى لوحة التحكم!',
        prodAdded: 'تمت إضافة المنتج بنجاح مع سعر الشراء والبيع إلى المتجر السحابي!',
        noPermAddAdmin: 'عذراً، لا تمتلك الصلاحية لإضافة مسؤولين جدد!',
        emailExists: 'هذا البريد مستخدم مسبقاً!',
        adminAdded: 'تمت إضافة المسؤول الجديد بنجاح!',
        wilayaUpdated: 'تم تحديث بيانات الولاية وأسعار البلديات بنجاح!',
        wilayaCodeExists: 'رقم الولاية (الكود) موجود مسبقاً!',
        wilayaAdded: 'تمت إضافة الولاية الجديدة بنجاح!',
        countPrefix: 'العدد: ',
        noProds: 'لا توجد منتجات مضافة بعد.',
        noCats: 'لا توجد فئات مضافة بعد.',
        noOrders: 'لا توجد طلبات أرسلت بعد.',
        currency: ' د.ج',
        pieceUnit: ' قطعة',
        deleteBtn: 'حذف 🗑️',
        editBtn: 'تعديل ✏️',
        confirmBtn: 'تأكيد ✅',
        confirmedText: 'مؤكد ✓',
        statusConfirmed: 'مؤكد',
        statusPending: 'قيد التجهيز',
        deletedProd: 'منتج محذوف أو غير معروف',
        qtyWord: 'الكمية: ',
        itemsCountWord: 'عدد القطع: ',
        newOrderWord: 'طلب جديد',
        alreadyConfirmed: 'هذا الطلب تم تأكيده مسبقاً!',
        confirmOrderPrompt: 'هل أنت متأكد من تأكيد الطلب؟ سيتم خصم الكميات من المخزون وإضافة صافي الربح إلى الإحصائيات.',
        orderConfirmedAlert: 'تم تأكيد الطلب بنجاح، خصم الكميات، واحتساب الربح الصافي! ✅',
        mainAdminRole: 'المدير الرئيسي',
        canAddRole: 'مسؤول (يستطيع الإضافة)',
        viewOnlyRole: 'مسؤول (عرض فقط)',
        revokePermBtn: 'سحب الإضافة 🚫',
        grantPermBtn: 'منح الإضافة ✅',
        primaryAccountText: 'الحساب الأساسي',
        mainAdminOnlyText: 'للمدير الرئيسي فقط',
        baladiyaUnit: ' بلدية',
        bNamePlaceholder: 'اسم البلدية',
        bDeskPlaceholder: 'سعر المكتب',
        bHomePlaceholder: 'سعر المنزل',
        editWilayaPrefix: 'تعديل ولاية: ',
        addWilayaTitle: 'إضافة ولاية جديدة',
        confirmDeleteWilaya: 'هل أنت متأكد من حذف هذه الولاية من نظام التوصيل؟',
        confirmDeleteProd: 'هل أنت متأكد من حذف هذا المنتج؟',
        confirmDeleteCat: 'هل أنت متأكد من حذف هذه الفئة؟',
        confirmDeleteOrder: 'هل أنت متأكد من حذف هذا الطلب؟',
        confirmClearAllOrders: 'هل أنت متأكد من تفريغ وحذف جميع الطلبات بالكامل؟',
        cannotDeleteMainAdmin: 'لا يمكن حذف المدير الرئيسي!',
        confirmDeleteAdmin: 'هل أنت متأكد من حذف هذا المسؤول؟',
        catAdded: 'تمت إضافة الفئة الجديدة بنجاح!',
        catUpdated: 'تم تحديث الفئة وربط المنتجات بها بنجاح!',
        selectCatOption: 'اختر القسم...',
        shownOnHome: 'معروض بالرئيسية ✅',
        hiddenFromHome: 'في الفئة فقط 🚫'
    },
    en: {
        mustLogin: 'You must login as an admin first to access the Dashboard!',
        prodAdded: 'Product added successfully with cost and selling price!',
        noPermAddAdmin: 'Sorry, you do not have permission to add new admins!',
        emailExists: 'This email is already in use!',
        adminAdded: 'New admin added successfully!',
        wilayaUpdated: 'Wilaya and Baladiya shipping rates updated successfully!',
        wilayaCodeExists: 'Wilaya code already exists!',
        wilayaAdded: 'New Wilaya added successfully!',
        countPrefix: 'Count: ',
        noProds: 'No products added yet.',
        noCats: 'No categories added yet.',
        noOrders: 'No orders received yet.',
        currency: ' DZD',
        pieceUnit: ' pcs',
        deleteBtn: 'Delete 🗑️',
        editBtn: 'Edit ✏️',
        confirmBtn: 'Confirm ✅',
        confirmedText: 'Confirmed ✓',
        statusConfirmed: 'Confirmed',
        statusPending: 'Pending',
        deletedProd: 'Deleted or unknown product',
        qtyWord: 'Qty: ',
        itemsCountWord: 'Items count: ',
        newOrderWord: 'New Order',
        alreadyConfirmed: 'This order is already confirmed!',
        confirmOrderPrompt: 'Are you sure you want to confirm this order? Stock will be deducted and net profit recorded.',
        orderConfirmedAlert: 'Order confirmed, stock deducted, and net profit calculated! ✅',
        mainAdminRole: 'Main Admin',
        canAddRole: 'Admin (Can Add)',
        viewOnlyRole: 'Admin (View Only)',
        revokePermBtn: 'Revoke Add 🚫',
        grantPermBtn: 'Grant Add ✅',
        primaryAccountText: 'Primary Account',
        mainAdminOnlyText: 'Main Admin Only',
        baladiyaUnit: ' city(s)',
        bNamePlaceholder: 'City (Baladiya) Name',
        bDeskPlaceholder: 'Desk Price',
        bHomePlaceholder: 'Home Price',
        editWilayaPrefix: 'Edit Wilaya: ',
        addWilayaTitle: 'Add New Wilaya',
        confirmDeleteWilaya: 'Are you sure you want to delete this Wilaya from shipping?',
        confirmDeleteProd: 'Are you sure you want to delete this product?',
        confirmDeleteCat: 'Are you sure you want to delete this category?',
        confirmDeleteOrder: 'Are you sure you want to delete this order?',
        confirmClearAllOrders: 'Are you sure you want to clear all orders?',
        cannotDeleteMainAdmin: 'Cannot delete the Main Admin!',
        confirmDeleteAdmin: 'Are you sure you want to delete this admin?',
        catAdded: 'New category added successfully!',
        catUpdated: 'Category updated successfully!',
        selectCatOption: 'Select Category...',
        shownOnHome: 'Shown on Home ✅',
        hiddenFromHome: 'Category Only 🚫'
    },
    fr: {
        mustLogin: 'Vous devez vous connecter en tant qu\'administrateur pour accéder au tableau de bord !',
        prodAdded: 'Produit ajouté avec succès avec prix d\'achat et de vente !',
        noPermAddAdmin: 'Désolé, vous n\'avez pas la permission d\'ajouter des administrateurs !',
        emailExists: 'Cet e-mail est déjà utilisé !',
        adminAdded: 'Nouvel administrateur ajouté avec succès !',
        wilayaUpdated: 'Données de la wilaya et tarifs des communes mis à jour !',
        wilayaCodeExists: 'Le code de cette wilaya existe déjà !',
        wilayaAdded: 'Nouvelle wilaya ajoutée avec succès !',
        countPrefix: 'Total : ',
        noProds: 'Aucun produit ajouté pour le moment.',
        noCats: 'Aucune catégorie ajoutée pour le moment.',
        noOrders: 'Aucune commande reçue pour le moment.',
        currency: ' DA',
        pieceUnit: ' pcs',
        deleteBtn: 'Supprimer 🗑️',
        editBtn: 'Modifier ✏️',
        confirmBtn: 'Confirmer ✅',
        confirmedText: 'Confirmée ✓',
        statusConfirmed: 'Confirmée',
        statusPending: 'En préparation',
        deletedProd: 'Produit supprimé ou inconnu',
        qtyWord: 'Qté : ',
        itemsCountWord: 'Nombre d\'articles : ',
        newOrderWord: 'Nouvelle commande',
        alreadyConfirmed: 'Cette commande est déjà confirmée !',
        confirmOrderPrompt: 'Confirmer cette commande ? Les quantités seront déduites et le bénéfice net calculé.',
        orderConfirmedAlert: 'Commande confirmée, stock déduit et bénéfice calculé ! ✅',
        mainAdminRole: 'Administrateur Principal',
        canAddRole: 'Admin (Peut ajouter)',
        viewOnlyRole: 'Admin (Lecture seule)',
        revokePermBtn: 'Retirer droit 🚫',
        grantPermBtn: 'Donner droit ✅',
        primaryAccountText: 'Compte Principal',
        mainAdminOnlyText: 'Admin Principal uniquement',
        baladiyaUnit: ' commune(s)',
        bNamePlaceholder: 'Nom de la commune',
        bDeskPlaceholder: 'Prix Bureau',
        bHomePlaceholder: 'Prix Domicile',
        editWilayaPrefix: 'Modifier Wilaya : ',
        addWilayaTitle: 'Ajouter une nouvelle Wilaya',
        confirmDeleteWilaya: 'Êtes-vous sûr de vouloir supprimer cette wilaya ?',
        confirmDeleteProd: 'Supprimer ce produit ?',
        confirmDeleteCat: 'Supprimer cette catégorie ?',
        confirmDeleteOrder: 'Supprimer cette commande ?',
        confirmClearAllOrders: 'Êtes-vous sûr de vouloir vider toutes les commandes ?',
        cannotDeleteMainAdmin: 'Impossible de supprimer l\'administrateur principal !',
        confirmDeleteAdmin: 'Supprimer cet administrateur ?',
        catAdded: 'Nouvelle catégorie ajoutée avec succès !',
        catUpdated: 'Catégorie mise à jour avec succès !',
        selectCatOption: 'Choisir une catégorie...',
        shownOnHome: 'Sur l\'accueil ✅',
        hiddenFromHome: 'Catégorie seule 🚫'
    }
};

function getDashLang() {
    const lang = localStorage.getItem('shopLang') || 'ar';
    return dashLangTexts[lang] || dashLangTexts['ar'];
}

// دالة مساعدة لتحويل أي سعر نصي (مثل "45,000") إلى رقم حسابي صحيح (45000)
function parsePriceNum(val) {
    if (val === null || val === undefined) return 0;
    if (typeof val === 'number') return val;
    const cleaned = String(val).replace(/[^0-9.-]+/g, '');
    return parseFloat(cleaned) || 0;
}

document.addEventListener('DOMContentLoaded', async function () {
    const t = getDashLang();
    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin'));
    if (!currentAdmin) {
        alert(t.mustLogin);
        window.location.href = 'login.html';
        return;
    }

    await ensureDefaultCategories();
    await renderDashboardCategories();
    await renderDashboardProducts();
    await renderDashboardOrders();
    await renderDashboardStats();
    await renderDashboardAdmins();
    renderDashboardShipping();

    // 1. معالجة إضافة منتج جديد إلى Supabase (مع سعر الشراء)
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const t = getDashLang();

            const title = document.getElementById('productTitle').value.trim();
            const category = document.getElementById('productCategory').value;
            const badgeValue = document.getElementById('productBadge').value;
            const costPriceInput = document.getElementById('productCostPrice');
            const costPrice = costPriceInput ? Number(costPriceInput.value) : 0;
            const price = document.getElementById('productPrice').value;
            const oldPrice = document.getElementById('productOldPrice').value;
            const quantity = document.getElementById('productQuantity').value;
            const showOnHomeCheckbox = document.getElementById('productShowOnHome');
            const showOnHome = showOnHomeCheckbox ? showOnHomeCheckbox.checked : true;
            const imagesRaw = document.getElementById('productImage').value.trim();
            const description = document.getElementById('productDescription').value.trim();

            const imagesList = imagesRaw.split('\n').map(function (url) { return url.trim(); }).filter(function (url) { return url.length > 0; });

            const newProduct = {
                id: 'prod_' + Date.now(),
                title: title,
                category: category,
                badge: badgeValue || null,
                cost_price: costPrice,
                price: Number(price).toLocaleString(),
                old_price: oldPrice ? Number(oldPrice).toLocaleString() : null,
                quantity: Number(quantity),
                image: imagesList[0] || 'https://via.placeholder.com/300',
                description: description,
                show_on_home: showOnHome
            };

            const { error } = await supabaseClient
                .from('products')
                .insert([newProduct]);

            if (error) {
                console.error('Error inserting product:', error);
                alert('حدث خطأ أثناء حفظ المنتج في السحابة. تأكد من تشغيل أمر SQL لإضافة عمود cost_price في جدول products.');
                return;
            }

            addProductForm.reset();
            if (showOnHomeCheckbox) showOnHomeCheckbox.checked = true;
            await renderDashboardProducts();
            await renderDashboardStats();
            alert(t.prodAdded);
        });
    }

    // 2. معالجة إضافة فئة جديدة (Category) إلى Supabase
    const addCategoryForm = document.getElementById('addCategoryForm');
    if (addCategoryForm) {
        addCategoryForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const t = getDashLang();

            const nameAr = document.getElementById('catNameAr').value.trim();
            const nameEnInput = document.getElementById('catNameEn');
            const nameFrInput = document.getElementById('catNameFr');
            const slug = document.getElementById('catSlug').value.trim().toLowerCase();

            const nameEn = (nameEnInput && nameEnInput.value.trim()) ? nameEnInput.value.trim() : nameAr;
            const nameFr = (nameFrInput && nameFrInput.value.trim()) ? nameFrInput.value.trim() : nameAr;

            const newCat = {
                id: 'cat_' + Date.now(),
                name_ar: nameAr,
                name_en: nameEn,
                name_fr: nameFr,
                slug: slug
            };

            const { error } = await supabaseClient
                .from('categories')
                .insert([newCat]);

            if (error) {
                console.error('Error inserting category:', error);
                alert('حدث خطأ أثناء إضافة الفئة إلى قاعدة البيانات.');
                return;
            }

            addCategoryForm.reset();
            await renderDashboardCategories();
            alert(t.catAdded);
        });
    }

    // 3. معالجة إضافة مسؤول جديد إلى Supabase
    const addAdminForm = document.getElementById('addAdminForm');
    if (addAdminForm) {
        addAdminForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const t = getDashLang();

            const { data: admins, error: fetchErr } = await supabaseClient.from('admins').select('*');
            if (fetchErr) return;

            let freshCurrentAdmin = admins.find(function (a) { return a.email === currentAdmin.email; }) || currentAdmin;

            if (!freshCurrentAdmin.is_main && !freshCurrentAdmin.can_add_admins) {
                alert(t.noPermAddAdmin);
                return;
            }

            const name = document.getElementById('newAdminName').value.trim();
            const email = document.getElementById('newAdminEmail').value.trim();
            const password = document.getElementById('newAdminPassword').value.trim();

            if (admins.some(function (a) { return a.email === email; })) {
                alert(t.emailExists);
                return;
            }

            const newAdminRecord = {
                id: 'adm_' + Date.now(),
                name: name,
                email: email,
                password: password,
                is_main: false,
                can_add_admins: false
            };

            const { error: insertErr } = await supabaseClient.from('admins').insert([newAdminRecord]);
            if (insertErr) {
                alert('حدث خطأ أثناء إضافة المسؤول.');
                return;
            }

            addAdminForm.reset();
            await renderDashboardAdmins();
            alert(t.adminAdded);
        });
    }

    // 4. معالجة حفظ أو تعديل ولاية وتوصيل البلديات
    const addWilayaForm = document.getElementById('addWilayaForm');
    if (addWilayaForm) {
        addWilayaForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const t = getDashLang();

            const isEditing = document.getElementById('isEditingWilaya').value === 'true';
            const code = document.getElementById('wilayaCode').value.trim();
            const name = document.getElementById('wilayaName').value.trim();
            const deskPrice = Number(document.getElementById('deskPrice').value);
            const homePrice = Number(document.getElementById('homePrice').value);

            const rowDivs = document.querySelectorAll('.baladiya-edit-row');
            let baladiyasList = [];

            rowDivs.forEach(function (row) {
                const bName = row.querySelector('.b-name').value.trim();
                const bDesk = row.querySelector('.b-desk').value;
                const bHome = row.querySelector('.b-home').value;

                if (bName) {
                    baladiyasList.push({
                        name: bName,
                        deskPrice: bDesk !== '' ? Number(bDesk) : deskPrice,
                        homePrice: bHome !== '' ? Number(bHome) : homePrice
                    });
                }
            });

            let shippingData = JSON.parse(localStorage.getItem('algeriaShippingData')) || [];
            const newWilayaObj = { code: code, name: name, deskPrice: deskPrice, homePrice: homePrice, baladiyas: baladiyasList };

            if (isEditing) {
                const index = shippingData.findIndex(function (w) { return w.code === code; });
                if (index !== -1) {
                    shippingData[index] = newWilayaObj;
                } else {
                    shippingData.push(newWilayaObj);
                }
                alert(t.wilayaUpdated);
            } else {
                if (shippingData.some(function (w) { return w.code === code; })) {
                    alert(t.wilayaCodeExists);
                    return;
                }
                shippingData.push(newWilayaObj);
                alert(t.wilayaAdded);
            }

            localStorage.setItem('algeriaShippingData', JSON.stringify(shippingData));
            resetWilayaForm();
            renderDashboardShipping();
        });
    }
});

// إنشاء الفئات الافتراضية تلقائياً إذا كان الجدول فارغاً
async function ensureDefaultCategories() {
    const { data: categories, error } = await supabaseClient.from('categories').select('*');
    if (!error && categories && categories.length === 0) {
        const defaults = [
            { id: 'cat_1', name_ar: 'الهواتف الذكية', name_en: 'Smartphones', name_fr: 'Smartphones', slug: 'smartphones' },
            { id: 'cat_2', name_ar: 'الحواسيب والملحقات', name_en: 'Laptops & Accessories', name_fr: 'Ordinateurs & Accessoires', slug: 'laptops' },
            { id: 'cat_3', name_ar: 'إلكترونيات عامة', name_en: 'General Electronics', name_fr: 'Électronique générale', slug: 'electronics' },
            { id: 'cat_4', name_ar: 'العروض الخاصة', name_en: 'Special Offers', name_fr: 'Offres spéciales', slug: 'offers' }
        ];
        await supabaseClient.from('categories').insert(defaults);
    }
}

// التبديل بين تبويبات لوحة التحكم الستة
function switchDashTab(tabName) {
    const productsSection = document.getElementById('productsTabSection');
    const statsSection = document.getElementById('statsTabSection');
    const categoriesSection = document.getElementById('categoriesTabSection');
    const ordersSection = document.getElementById('ordersTabSection');
    const adminsSection = document.getElementById('adminsTabSection');
    const shippingSection = document.getElementById('shippingTabSection');
    
    const btnProd = document.getElementById('tabProductsBtn');
    const btnStats = document.getElementById('tabStatsBtn');
    const btnCat = document.getElementById('tabCategoriesBtn');
    const btnOrd = document.getElementById('tabOrdersBtn');
    const btnAdm = document.getElementById('tabAdminsBtn');
    const btnShip = document.getElementById('tabShippingBtn');

    if (productsSection) productsSection.style.display = 'none';
    if (statsSection) statsSection.style.display = 'none';
    if (categoriesSection) categoriesSection.style.display = 'none';
    if (ordersSection) ordersSection.style.display = 'none';
    if (adminsSection) adminsSection.style.display = 'none';
    if (shippingSection) shippingSection.style.display = 'none';

    if (btnProd) btnProd.classList.remove('active');
    if (btnStats) btnStats.classList.remove('active');
    if (btnCat) btnCat.classList.remove('active');
    if (btnOrd) btnOrd.classList.remove('active');
    if (btnAdm) btnAdm.classList.remove('active');
    if (btnShip) btnShip.classList.remove('active');

    if (tabName === 'products') {
        if (productsSection) productsSection.style.display = 'block';
        if (btnProd) btnProd.classList.add('active');
        renderDashboardProducts();
    } else if (tabName === 'stats') {
        if (statsSection) statsSection.style.display = 'block';
        if (btnStats) btnStats.classList.add('active');
        renderDashboardStats();
    } else if (tabName === 'categories') {
        if (categoriesSection) categoriesSection.style.display = 'block';
        if (btnCat) btnCat.classList.add('active');
        renderDashboardCategories();
    } else if (tabName === 'orders') {
        if (ordersSection) ordersSection.style.display = 'block';
        if (btnOrd) btnOrd.classList.add('active');
        renderDashboardOrders();
    } else if (tabName === 'admins') {
        if (adminsSection) adminsSection.style.display = 'block';
        if (btnAdm) btnAdm.classList.add('active');
        renderDashboardAdmins();
    } else if (tabName === 'shipping') {
        if (shippingSection) shippingSection.style.display = 'block';
        if (btnShip) btnShip.classList.add('active');
        renderDashboardShipping();
    }
}

// استخراج تاريخ إضافة المنتج من حقل created_at أو من معرف المنتج (prod_172...)
function getProductAddedTimestamp(product) {
    if (product.created_at) {
        const t = new Date(product.created_at).getTime();
        if (!isNaN(t)) return t;
    }
    if (product.id && String(product.id).indexOf('prod_') === 0) {
        const ts = parseInt(String(product.id).replace('prod_', ''));
        if (!isNaN(ts) && ts > 1000000000000) return ts;
    }
    return 0;
}

// حساب وعرض الإحصائيات (تكلفة المشتريات + صافي الأرباح لليوم والأسبوع والشهر والكامل)
async function renderDashboardStats() {
    const t = getDashLang();
    const { data: products } = await supabaseClient.from('products').select('*');
    const { data: orders } = await supabaseClient.from('orders').select('*');

    const prodList = products || [];
    const ordList = orders || [];

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const startOfWeek = now.getTime() - (7 * 24 * 60 * 60 * 1000);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();

    // 1. تجهيز خريطة المنتجات
    let prodMap = {};
    let totalRemainingStock = 0;

    prodList.forEach(function (p) {
        const remQty = parseInt(p.quantity) || 0;
        totalRemainingStock += remQty;
        prodMap[p.id] = {
            product: p,
            costPrice: parsePriceNum(p.cost_price),
            sellPrice: parsePriceNum(p.price),
            remainingQty: remQty,
            soldQty: 0,
            totalProfit: 0,
            addedTime: getProductAddedTimestamp(p)
        };
    });

    // 2. حساب المبيعات وصافي الأرباح من الطلبات المؤكدة
    let totalSoldConfirmed = 0;
    let profitToday = 0;
    let profitWeek = 0;
    let profitMonth = 0;
    let profitTotal = 0;

    ordList.forEach(function (order) {
        const isConfirmed = order.status === 'مؤكد' || order.status === 'Confirmed' || order.status === 'Confirmée';
        if (!isConfirmed) return;

        let orderTime = now.getTime();
        if (order.confirmed_at) {
            orderTime = new Date(order.confirmed_at).getTime();
        } else if (order.created_at) {
            orderTime = new Date(order.created_at).getTime();
        } else if (order.order_id && order.order_id.indexOf('ORD-') === 0) {
            const ts = parseInt(order.order_id.replace('ORD-', ''));
            if (!isNaN(ts) && ts > 1000000000000) orderTime = ts;
        }

        let orderNetProfit = 0;
        const items = order.items || [];

        items.forEach(function (item) {
            const qty = parseInt(item.qty) || 1;
            totalSoldConfirmed += qty;

            if (prodMap[item.id]) {
                const pInfo = prodMap[item.id];
                const unitProfit = pInfo.sellPrice - pInfo.costPrice;
                const itemProfit = unitProfit * qty;

                pInfo.soldQty += qty;
                pInfo.totalProfit += itemProfit;
                orderNetProfit += itemProfit;
            }
        });

        profitTotal += orderNetProfit;
        if (orderTime >= startOfToday) profitToday += orderNetProfit;
        if (orderTime >= startOfWeek) profitWeek += orderNetProfit;
        if (orderTime >= startOfMonth) profitMonth += orderNetProfit;
    });

    // 3. حساب تكلفة شراء المنتجات (لليوم، الأسبوع، الشهر، والكامل)
    // إجمالي الكمية المشتراة لكل منتج = الكمية المتبقية حالياً + الكمية المباعة المؤكدة
    let costToday = 0;
    let costWeek = 0;
    let costMonth = 0;
    let costTotal = 0;

    Object.keys(prodMap).forEach(function (id) {
        const info = prodMap[id];
        const totalPurchasedQtyForProd = info.remainingQty + info.soldQty;
        const totalCostForProd = info.costPrice * totalPurchasedQtyForProd;

        info.totalPurchasedQty = totalPurchasedQtyForProd;
        info.totalPurchaseCost = totalCostForProd;

        costTotal += totalCostForProd;
        if (info.addedTime >= startOfToday) costToday += totalCostForProd;
        if (info.addedTime >= startOfWeek) costWeek += totalCostForProd;
        if (info.addedTime >= startOfMonth) costMonth += totalCostForProd;
    });

    const totalPurchasedAllTime = totalRemainingStock + totalSoldConfirmed;

    // تحديث بطاقات تكلفة المشتريات
    const elPurchased = document.getElementById('statTotalPurchased');
    const elCostToday = document.getElementById('statCostToday');
    const elCostWeek = document.getElementById('statCostWeek');
    const elCostMonth = document.getElementById('statCostMonth');
    const elCostTotal = document.getElementById('statCostTotal');

    if (elPurchased) elPurchased.textContent = totalPurchasedAllTime.toLocaleString() + t.pieceUnit;
    if (elCostToday) elCostToday.textContent = costToday.toLocaleString() + t.currency;
    if (elCostWeek) elCostWeek.textContent = costWeek.toLocaleString() + t.currency;
    if (elCostMonth) elCostMonth.textContent = costMonth.toLocaleString() + t.currency;
    if (elCostTotal) elCostTotal.textContent = costTotal.toLocaleString() + t.currency;

    // تحديث بطاقات المبيعات وصافي الأرباح
    const elSold = document.getElementById('statTotalSold');
    const elToday = document.getElementById('statProfitToday');
    const elWeek = document.getElementById('statProfitWeek');
    const elMonth = document.getElementById('statProfitMonth');
    const elTotal = document.getElementById('statProfitTotal');

    if (elSold) elSold.textContent = totalSoldConfirmed.toLocaleString() + t.pieceUnit;
    if (elToday) elToday.textContent = profitToday.toLocaleString() + t.currency;
    if (elWeek) elWeek.textContent = profitWeek.toLocaleString() + t.currency;
    if (elMonth) elMonth.textContent = profitMonth.toLocaleString() + t.currency;
    if (elTotal) elTotal.textContent = profitTotal.toLocaleString() + t.currency;

    // 4. ملء جدول تفصيل التكلفة والمبيعات والأرباح لكل منتج
    const statsTableBody = document.getElementById('dashStatsProductsTable');
    if (!statsTableBody) return;

    if (prodList.length === 0) {
        statsTableBody.innerHTML = '<tr><td colspan="9" style="text-align: center; padding: 25px; color: #64748b;">' + t.noProds + '</td></tr>';
        return;
    }

    statsTableBody.innerHTML = '';
    Object.keys(prodMap).forEach(function (id) {
        const info = prodMap[id];
        const unitProfit = info.sellPrice - info.costPrice;
        const unitProfitColor = unitProfit >= 0 ? '#16a34a' : '#dc2626';
        const totalProfitColor = info.totalProfit >= 0 ? '#15803d' : '#dc2626';

        statsTableBody.innerHTML +=
            '<tr>' +
                '<td><strong>' + info.product.title + '</strong></td>' +
                '<td style="color: #b45309; font-weight: 600;">' + info.costPrice.toLocaleString() + t.currency + '</td>' +
                '<td style="font-weight: 600;">' + info.sellPrice.toLocaleString() + t.currency + '</td>' +
                '<td style="color: ' + unitProfitColor + '; font-weight: bold;">' + unitProfit.toLocaleString() + t.currency + '</td>' +
                '<td><strong>' + info.totalPurchasedQty + t.pieceUnit + '</strong></td>' +
                '<td style="color: #c2410c; font-weight: 700;">' + info.totalPurchaseCost.toLocaleString() + t.currency + '</td>' +
                '<td><span class="badge badge-new">' + info.remainingQty + '</span></td>' +
                '<td><strong style="color: #9333ea;">' + info.soldQty + t.pieceUnit + '</strong></td>' +
                '<td style="color: ' + totalProfitColor + '; font-weight: 800; font-size: 1rem;">' + info.totalProfit.toLocaleString() + t.currency + '</td>' +
            '</tr>';
    });
}

// عرض الفئات وتحديث القائمة المنسدلة في نموذج إضافة منتج
async function renderDashboardCategories() {
    const tableBody = document.getElementById('dashCategoriesTable');
    const categoriesCount = document.getElementById('categoriesCount');
    const productCatSelect = document.getElementById('productCategory');
    const t = getDashLang();

    const { data: categories, error } = await supabaseClient.from('categories').select('*');

    if (error) {
        console.error('Error fetching categories:', error);
        return;
    }

    const catList = categories || [];

    if (productCatSelect && catList.length > 0) {
        const currentLang = localStorage.getItem('shopLang') || 'ar';
        productCatSelect.innerHTML = '<option value="">' + t.selectCatOption + '</option>';
        catList.forEach(function (cat) {
            let displayName = cat.name_ar;
            if (currentLang === 'en' && cat.name_en) displayName = cat.name_en;
            if (currentLang === 'fr' && cat.name_fr) displayName = cat.name_fr;
            productCatSelect.innerHTML += '<option value="' + cat.name_ar + '">' + displayName + '</option>';
        });
    }

    if (!tableBody) return;
    if (categoriesCount) categoriesCount.textContent = t.countPrefix + catList.length;

    if (catList.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 30px;">' + t.noCats + '</td></tr>';
        return;
    }

    tableBody.innerHTML = '';
    catList.forEach(function (cat) {
        tableBody.innerHTML += 
            '<tr>' +
                '<td><strong>' + cat.name_ar + '</strong></td>' +
                '<td><small style="color: #64748b;">' + (cat.name_en || '-') + ' / ' + (cat.name_fr || '-') + '</small></td>' +
                '<td><code>' + (cat.slug || '-') + '</code></td>' +
                '<td>' +
                    '<button class="btn btn-primary btn-sm" onclick="editCategory(\'' + cat.id + '\')" style="padding:4px 8px; font-size:0.75rem; margin: 0 4px;">' + t.editBtn + '</button>' +
                    '<button class="btn-delete" onclick="deleteCategory(\'' + cat.id + '\')">' + t.deleteBtn + '</button>' +
                '</td>' +
            '</tr>';
    });
}

async function editCategory(catId) {
    const t = getDashLang();
    const { data: categories } = await supabaseClient.from('categories').select('*').eq('id', catId);
    if (!categories || categories.length === 0) return;

    const cat = categories[0];
    const oldNameAr = cat.name_ar;

    const newNameAr = prompt('تعديل اسم الفئة (بالعربية):', cat.name_ar);
    if (!newNameAr || newNameAr.trim() === '') return;

    const newNameEn = prompt('تعديل اسم الفئة (بالإنجليزية):', cat.name_en || newNameAr);
    const newNameFr = prompt('تعديل اسم الفئة (بالفرنسية):', cat.name_fr || newNameAr);
    const newSlug = prompt('تعديل معرف الرابط (Slug):', cat.slug || '');

    const trimmedNewNameAr = newNameAr.trim();

    const { error } = await supabaseClient
        .from('categories')
        .update({
            name_ar: trimmedNewNameAr,
            name_en: newNameEn ? newNameEn.trim() : trimmedNewNameAr,
            name_fr: newNameFr ? newNameFr.trim() : trimmedNewNameAr,
            slug: newSlug ? newSlug.trim().toLowerCase() : cat.slug
        })
        .eq('id', catId);

    if (error) {
        alert('حدث خطأ أثناء تحديث الفئة.');
        return;
    }

    if (trimmedNewNameAr !== oldNameAr) {
        await supabaseClient
            .from('products')
            .update({ category: trimmedNewNameAr })
            .eq('category', oldNameAr);
    }

    await renderDashboardCategories();
    await renderDashboardProducts();
    alert(t.catUpdated);
}

async function deleteCategory(catId) {
    const t = getDashLang();
    if (confirm(t.confirmDeleteCat)) {
        await supabaseClient.from('categories').delete().eq('id', catId);
        await renderDashboardCategories();
    }
}

// عرض المنتجات في لوحة التحكم مع سعر الشراء وإمكانية تعديله
async function renderDashboardProducts() {
    const tableBody = document.getElementById('dashProductsTable');
    const productsCount = document.getElementById('productsCount');
    if (!tableBody) return;

    const t = getDashLang();
    const { data: products, error } = await supabaseClient.from('products').select('*');

    if (error) {
        console.error('Error fetching products:', error);
        return;
    }

    if (productsCount) productsCount.textContent = t.countPrefix + products.length;

    if (products.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 30px;">' + t.noProds + '</td></tr>';
        return;
    }

    tableBody.innerHTML = '';
    products.forEach(function (product) {
        const mainImg = product.image || 'https://via.placeholder.com/45';
        const isShownOnHome = product.show_on_home !== false;
        const homeBtnText = isShownOnHome ? t.shownOnHome : t.hiddenFromHome;
        const homeBtnStyle = isShownOnHome 
            ? 'background: #dcfce7; color: #166534; border: 1px solid #86efac;' 
            : 'background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;';
        const costVal = parsePriceNum(product.cost_price);

        tableBody.innerHTML += 
            '<tr>' +
                '<td><img src="' + mainImg + '" alt="' + product.title + '" class="dash-table-img" onerror="this.src=\'https://via.placeholder.com/45\'"></td>' +
                '<td><strong>' + product.title + '</strong></td>' +
                '<td>' + product.category + '</td>' +
                '<td>' +
                    '<span style="color: #b45309; font-weight: bold;">' + costVal.toLocaleString() + t.currency + '</span> ' +
                    '<button onclick="editProductCost(\'' + product.id + '\', ' + costVal + ')" title="تعديل سعر الشراء" style="background:none; border:none; cursor:pointer; font-size:0.85rem;">✏️</button>' +
                '</td>' +
                '<td style="color: #15803d; font-weight: bold;">' + product.price + t.currency + '</td>' +
                '<td><span class="badge badge-new">' + (product.quantity !== undefined ? product.quantity : 1) + '</span></td>' +
                '<td>' +
                    '<button onclick="toggleProductHome(\'' + product.id + '\', ' + isShownOnHome + ')" style="padding: 5px 10px; border-radius: 6px; font-size: 0.78rem; font-weight: bold; cursor: pointer; ' + homeBtnStyle + '">' +
                        homeBtnText +
                    '</button>' +
                '</td>' +
                '<td><button class="btn-delete" onclick="deleteProduct(\'' + product.id + '\')">' + t.deleteBtn + '</button></td>' +
            '</tr>';
    });
}

// إمكانية تعديل سعر الشراء لأي منتج بضغطة زر
async function editProductCost(productId, currentCost) {
    const newCostStr = prompt('أدخل سعر الشراء (التكلفة) الجديد لهذا المنتج (د.ج):', currentCost);
    if (newCostStr === null || newCostStr.trim() === '') return;

    const newCost = parsePriceNum(newCostStr);
    const { error } = await supabaseClient
        .from('products')
        .update({ cost_price: newCost })
        .eq('id', productId);

    if (error) {
        alert('حدث خطأ أثناء تحديث سعر الشراء. تأكد من إضافة عمود cost_price في جدول products.');
        return;
    }

    await renderDashboardProducts();
    await renderDashboardStats();
}

async function toggleProductHome(productId, currentState) {
    const newState = !currentState;
    const { error } = await supabaseClient
        .from('products')
        .update({ show_on_home: newState })
        .eq('id', productId);

    if (error) {
        alert('حدث خطأ أثناء تحديث حالة ظهور المنتج.');
        return;
    }
    await renderDashboardProducts();
}

// عرض الطلبات في لوحة التحكم من Supabase
async function renderDashboardOrders() {
    const tableBody = document.getElementById('dashOrdersTable');
    const ordersBadge = document.getElementById('ordersBadge');
    if (!tableBody) return;

    const t = getDashLang();
    const { data: orders, error: ordErr } = await supabaseClient.from('orders').select('*');
    const { data: products, error: prodErr } = await supabaseClient.from('products').select('*');

    if (ordErr) return;

    if (ordersBadge) ordersBadge.textContent = orders.length;

    if (orders.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 30px;">' + t.noOrders + '</td></tr>';
        return;
    }

    tableBody.innerHTML = '';
    orders.forEach(function (order) {
        let itemsDetailsHTML = '';
        const itemsList = order.items || [];
        
        if (itemsList.length > 0) {
            itemsList.forEach(function (orderItem) {
                let product = products ? products.find(function (p) { return p.id === orderItem.id; }) : null;
                let productTitle = product ? product.title : t.deletedProd;
                itemsDetailsHTML += '<div style="margin-bottom: 4px; font-size: 0.85rem;">• ' + productTitle + ' (' + t.qtyWord + '<strong style="color: #2563eb;">' + orderItem.qty + '</strong>)</div>';
            });
        } else {
            itemsDetailsHTML = '<span style="color: #64748b;">' + t.itemsCountWord + '1</span>';
        }

        const isConfirmed = order.status === 'مؤكد' || order.status === 'Confirmed' || order.status === 'Confirmée';
        let statusBadgeClass = isConfirmed ? 'status-completed' : 'status-pending';
        let displayStatus = isConfirmed ? t.statusConfirmed : t.statusPending;
        let actionButtons = '';
        
        if (!isConfirmed) {
            actionButtons += '<button class="btn btn-sm" onclick="confirmOrder(\'' + order.order_id + '\')" style="background: #16a34a; color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; margin: 0 4px; font-size: 0.8rem;">' + t.confirmBtn + '</button>';
        } else {
            actionButtons += '<span style="color: #16a34a; font-weight: bold; font-size: 0.85rem; margin: 0 4px;">' + t.confirmedText + '</span>';
        }
        actionButtons += '<button class="btn-delete" onclick="deleteOrder(\'' + order.order_id + '\')">' + t.deleteBtn + '</button>';

        let orderDateTimeStr = order.full_date_time || '';
        let orderTitleDisplay = order.order_title || t.newOrderWord;
        let client = order.client_data || {};

        tableBody.innerHTML += 
            '<tr>' +
                '<td>' +
                    '<strong style="color: #1e293b;">' + order.order_id + '</strong><br>' +
                    '<span style="font-size: 0.85rem; color: #2563eb; font-weight: 600;">🏷️ ' + orderTitleDisplay + '</span><br>' +
                    '<small style="color: #64748b; font-size: 0.78rem;">🕒 ' + orderDateTimeStr + '</small>' +
                '</td>' +
                '<td>' + (client.name || '-') + '</td>' +
                '<td><a href="tel:' + (client.phone || '') + '">' + (client.phone || '-') + '</a></td>' +
                '<td>' + (client.state || '') + ' - ' + (client.baladiya || '') + ' (' + (client.address || '') + ')</td>' +
                '<td>' + itemsDetailsHTML + '</td>' +
                '<td><strong>' + order.total_amount + t.currency + '</strong></td>' +
                '<td><span class="status-badge ' + statusBadgeClass + '">' + displayStatus + '</span></td>' +
                '<td><div style="display: flex; align-items: center; gap: 4px;">' + actionButtons + '</div></td>' +
            '</tr>';
    });
}

// تأكيد الطلب، خصم الكمية من المخزون، وتسجيل وقت التأكيد لحساب الأرباح
async function confirmOrder(orderId) {
    const t = getDashLang();
    const { data: orders } = await supabaseClient.from('orders').select('*');
    const { data: products } = await supabaseClient.from('products').select('*');

    let order = orders.find(function (o) { return o.order_id === orderId; });
    if (!order) return;

    if (order.status === 'مؤكد') {
        alert(t.alreadyConfirmed);
        return;
    }

    if (confirm(t.confirmOrderPrompt)) {
        if (order.items && Array.isArray(order.items)) {
            for (let orderItem of order.items) {
                let product = products.find(function (p) { return p.id === orderItem.id; });
                if (product) {
                    let currentQuantity = parseInt(product.quantity) || 0;
                    let newQty = Math.max(0, currentQuantity - orderItem.qty);
                    
                    await supabaseClient
                        .from('products')
                        .update({ quantity: newQty })
                        .eq('id', product.id);
                }
            }
        }

        const { error: confErr } = await supabaseClient
            .from('orders')
            .update({ 
                status: 'مؤكد',
                confirmed_at: new Date().toISOString()
            })
            .eq('order_id', orderId);

        if (confErr) {
            await supabaseClient
                .from('orders')
                .update({ status: 'مؤكد' })
                .eq('order_id', orderId);
        }

        alert(t.orderConfirmedAlert);
        await renderDashboardOrders();
        await renderDashboardProducts();
        await renderDashboardStats();
    }
}

async function clearAllOrders() {
    const t = getDashLang();
    if (confirm(t.confirmClearAllOrders)) {
        await supabaseClient.from('orders').delete().neq('order_id', '');
        await renderDashboardOrders();
        await renderDashboardStats();
    }
}

async function renderDashboardAdmins() {
    const tableBody = document.getElementById('dashAdminsTable');
    const addCardContainer = document.getElementById('addAdminCardContainer');
    if (!tableBody) return;

    const t = getDashLang();
    const { data: admins } = await supabaseClient.from('admins').select('*');
    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin')) || {};
    const freshCurrentAdmin = admins ? (admins.find(function (a) { return a.email === currentAdmin.email; }) || currentAdmin) : currentAdmin;
    const canAdd = freshCurrentAdmin.is_main || freshCurrentAdmin.can_add_admins;

    if (addCardContainer) addCardContainer.style.display = canAdd ? 'block' : 'none';

    tableBody.innerHTML = '';
    if (!admins) return;

    admins.forEach(function (admin) {
        let permissionsText = admin.is_main ? t.mainAdminRole : (admin.can_add_admins ? t.canAddRole : t.viewOnlyRole);
        let actionButtons = '';
        
        if (freshCurrentAdmin.is_main) {
            if (!admin.is_main) {
                let toggleBtnText = admin.can_add_admins ? t.revokePermBtn : t.grantPermBtn;
                let toggleBtnClass = admin.can_add_admins ? 'btn-cancel' : 'btn-primary';
                actionButtons += '<button class="btn ' + toggleBtnClass + ' btn-sm" onclick="toggleAdminPermission(\'' + admin.id + '\')" style="margin: 0 5px; font-size: 0.75rem; padding: 4px 8px;">' + toggleBtnText + '</button>';
                actionButtons += '<button class="btn-delete" onclick="deleteAdmin(\'' + admin.id + '\')">' + t.deleteBtn + '</button>';
            } else {
                actionButtons = '<span style="color: var(--primary-color); font-weight: bold;">' + t.primaryAccountText + '</span>';
            }
        } else {
            actionButtons = '<span style="color: var(--text-muted);">' + t.mainAdminOnlyText + '</span>';
        }

        tableBody.innerHTML += 
            '<tr>' +
                '<td><strong>' + admin.name + '</strong></td>' +
                '<td>' + admin.email + '</td>' +
                '<td><span class="status-badge ' + (admin.is_main ? 'status-completed' : 'status-pending') + '">' + permissionsText + '</span></td>' +
                '<td>' + actionButtons + '</td>' +
            '</tr>';
    });
}

function migrateShippingData(data) {
    return data.map(function (wilaya) {
        if (wilaya.baladiyas && wilaya.baladiyas.length > 0 && typeof wilaya.baladiyas[0] === 'string') {
            wilaya.baladiyas = wilaya.baladiyas.map(function (bName) {
                return {
                    name: bName,
                    deskPrice: wilaya.deskPrice,
                    homePrice: wilaya.homePrice
                };
            });
        }
        return wilaya;
    });
}

function renderDashboardShipping() {
    const tableBody = document.getElementById('dashShippingTable');
    if (!tableBody) return;

    const t = getDashLang();
    let shippingData = JSON.parse(localStorage.getItem('algeriaShippingData')) || [];
    shippingData = migrateShippingData(shippingData);
    localStorage.setItem('algeriaShippingData', JSON.stringify(shippingData));

    tableBody.innerHTML = '';
    shippingData.forEach(function (item) {
        tableBody.innerHTML += 
            '<tr>' +
                '<td><strong>' + item.code + '</strong></td>' +
                '<td>' + item.name + '</td>' +
                '<td>' + Number(item.deskPrice).toLocaleString() + t.currency + '</td>' +
                '<td>' + Number(item.homePrice).toLocaleString() + t.currency + '</td>' +
                '<td><span class="badge badge-new">' + (item.baladiyas ? item.baladiyas.length : 0) + t.baladiyaUnit + '</span></td>' +
                '<td>' +
                    '<button class="btn btn-primary btn-sm" onclick="editWilayaShipping(\'' + item.code + '\')" style="padding:4px 8px; font-size:0.75rem; margin: 0 4px;">' + t.editBtn + '</button>' +
                    '<button class="btn-delete" onclick="deleteWilayaShipping(\'' + item.code + '\')">' + t.deleteBtn + '</button>' +
                '</td>' +
            '</tr>';
    });
}

function addBaladiyaRow(name, desk, home) {
    const bNameVal = name || '';
    const bDeskVal = desk !== undefined ? desk : '';
    const bHomeVal = home !== undefined ? home : '';
    const t = getDashLang();

    const container = document.getElementById('baladiyasEditorContainer');
    if (!container) return;

    const rowDiv = document.createElement('div');
    rowDiv.className = 'baladiya-edit-row';
    rowDiv.style.cssText = 'display: flex; gap: 8px; margin-bottom: 8px; align-items: center; background: #f8fafc; padding: 8px; border-radius: 6px;';
    
    rowDiv.innerHTML = 
        '<input type="text" class="b-name" placeholder="' + t.bNamePlaceholder + '" value="' + bNameVal + '" required style="flex: 2; padding: 6px; border: 1px solid var(--gray-border); border-radius: 4px;">' +
        '<input type="number" class="b-desk" placeholder="' + t.bDeskPlaceholder + '" value="' + bDeskVal + '" style="flex: 1; padding: 6px; border: 1px solid var(--gray-border); border-radius: 4px;">' +
        '<input type="number" class="b-home" placeholder="' + t.bHomePlaceholder + '" value="' + bHomeVal + '" style="flex: 1; padding: 6px; border: 1px solid var(--gray-border); border-radius: 4px;">' +
        '<button type="button" class="btn-delete" onclick="this.parentElement.remove()" style="padding: 4px 8px;">✕</button>';
    container.appendChild(rowDiv);
}

function editWilayaShipping(code) {
    const t = getDashLang();
    let shippingData = JSON.parse(localStorage.getItem('algeriaShippingData')) || [];
    const target = shippingData.find(function (w) { return w.code === code; });
    if (!target) return;

    document.getElementById('isEditingWilaya').value = 'true';
    const codeInput = document.getElementById('wilayaCode');
    codeInput.value = target.code;
    codeInput.readOnly = true;

    document.getElementById('wilayaName').value = target.name;
    document.getElementById('deskPrice').value = target.deskPrice;
    document.getElementById('homePrice').value = target.homePrice;
    document.getElementById('wilayaFormTitle').textContent = t.editWilayaPrefix + target.name;
    document.getElementById('cancelEditWilayaBtn').style.display = 'block';

    const container = document.getElementById('baladiyasEditorContainer');
    container.innerHTML = '';
    
    if (target.baladiyas && target.baladiyas.length > 0) {
        target.baladiyas.forEach(function (b) {
            addBaladiyaRow(b.name, b.deskPrice !== target.deskPrice ? b.deskPrice : '', b.homePrice !== target.homePrice ? b.homePrice : '');
        });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetWilayaForm() {
    const t = getDashLang();
    document.getElementById('addWilayaForm').reset();
    document.getElementById('isEditingWilaya').value = 'false';
    document.getElementById('wilayaCode').readOnly = false;
    document.getElementById('wilayaFormTitle').textContent = t.addWilayaTitle;
    document.getElementById('cancelEditWilayaBtn').style.display = 'none';
    document.getElementById('baladiyasEditorContainer').innerHTML = '';
}

function deleteWilayaShipping(code) {
    const t = getDashLang();
    if (confirm(t.confirmDeleteWilaya)) {
        let shippingData = JSON.parse(localStorage.getItem('algeriaShippingData')) || [];
        shippingData = shippingData.filter(function (w) { return w.code !== code; });
        localStorage.setItem('algeriaShippingData', JSON.stringify(shippingData));
        renderDashboardShipping();
    }
}

async function toggleAdminPermission(adminId) {
    const { data: admins } = await supabaseClient.from('admins').select('*');
    let targetAdmin = admins.find(function (a) { return a.id === adminId; });
    if (targetAdmin) {
        let newStatus = !targetAdmin.can_add_admins;
        await supabaseClient
            .from('admins')
            .update({ can_add_admins: newStatus })
            .eq('id', adminId);
        await renderDashboardAdmins();
    }
}

async function deleteProduct(productId) {
    const t = getDashLang();
    if (confirm(t.confirmDeleteProd)) {
        await supabaseClient.from('products').delete().eq('id', productId);
        await renderDashboardProducts();
        await renderDashboardStats();
    }
}

async function deleteOrder(orderId) {
    const t = getDashLang();
    if (confirm(t.confirmDeleteOrder)) {
        await supabaseClient.from('orders').delete().eq('order_id', orderId);
        await renderDashboardOrders();
        await renderDashboardStats();
    }
}

async function deleteAdmin(adminId) {
    const t = getDashLang();
    const { data: admins } = await supabaseClient.from('admins').select('*');
    let targetAdmin = admins.find(function (a) { return a.id === adminId; });
    if (targetAdmin && targetAdmin.is_main) {
        alert(t.cannotDeleteMainAdmin);
        return;
    }
    if (confirm(t.confirmDeleteAdmin)) {
        await supabaseClient.from('admins').delete().eq('id', adminId);
        await renderDashboardAdmins();
    }
}

function logoutAdmin() {
    localStorage.removeItem('currentAdmin');
    window.location.href = 'login.html';
}