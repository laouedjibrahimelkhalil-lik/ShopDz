// قاموس النصوص الديناميكية للوحة التحكم باللغات الثلاث
const dashLangTexts = {
    ar: {
        mustLogin: 'يجب تسجيل الدخول كمسؤول أولاً للوصول إلى لوحة التحكم!',
        prodAdded: 'تمت إضافة المنتج بنجاح مع سعر الشراء والبيع إلى المتجر السحابي!',
        noPermAddAdmin: 'عذراً، لا تمتلك الصلاحية لإضافة مسؤولين جدد!',
        emailExists: 'هذا البريد مستخدم مسبقاً!',
        adminAdded: 'تمت إضافة المسؤول الجديد بنجاح!',
        wilayaUpdated: 'تم تحديث بيانات الولاية وأسعار البلديات سحابياً بنجاح!',
        wilayaCodeExists: 'رقم الولاية (الكود) موجود مسبقاً!',
        wilayaAdded: 'تمت إضافة الولاية الجديدة سحابياً بنجاح!',
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
        wilayaUpdated: 'Wilaya and Baladiya shipping rates updated in Cloud!',
        wilayaCodeExists: 'Wilaya code already exists!',
        wilayaAdded: 'New Wilaya added to Cloud successfully!',
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

const DEFAULT_HERO_IMAGE = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop';

function getDefaultAlgeriaWilayas() {
    const rawWilayas = [
        { code: "01", name: "01. أدرار", desk: 600, home: 900, cities: ["أدرار", "رقان", "تيميمون", "أولف", "زاوية كنتة", "فنوغيل"] },
        { code: "02", name: "02. الشلف", desk: 400, home: 600, cities: ["الشلف", "تنس", "بوقادير", "أولاد فارس", "وادي الفضة", "شطية", "تاوقريت"] },
        { code: "03", name: "03. الأغواط", desk: 500, home: 750, cities: ["الأغواط", "أفلو", "قصر الحيران", "حاسي الرمل", "عين ماضي"] },
        { code: "04", name: "04. أم البواقي", desk: 450, home: 650, cities: ["أم البواقي", "عين البيضاء", "عين مليلة", "عين كرشة", "مسكيانة"] },
        { code: "05", name: "05. باتنة", desk: 450, home: 650, cities: ["باتنة", "بريكة", "عين التوتة", "أريس", "مروانة", "تازولت", "نقاوس"] },
        { code: "06", name: "06. بجاية", desk: 400, home: 600, cities: ["بجاية", "أقبو", "خراطة", "أميزور", "سيدي عيش", "تازملت", "أوقاس"] },
        { code: "07", name: "07. بسكرة", desk: 500, home: 700, cities: ["بسكرة", "طولقة", "سيدي عقبة", "أورلال", "زريبة الوادي", "القنطرة"] },
        { code: "08", name: "08. بشار", desk: 600, home: 850, cities: ["بشار", "القنادسة", "عبادلة", "تاغيت", "بني ونيف"] },
        { code: "09", name: "09. البليدة", desk: 350, home: 500, cities: ["البليدة", "بوفاريك", "بوقرة", "أولاد سلامة", "الأربعاء", "مفتاح", "العفرون", "موزاية", "أولاد يعيش"] },
        { code: "10", name: "10. البويرة", desk: 400, home: 600, cities: ["البويرة", "الأخضرية", "سور الغزلان", "عين بسام", "امشدالة", "حيزر"] },
        { code: "11", name: "11. تمنراست", desk: 800, home: 1100, cities: ["تمنراست", "عين أمقل", "أبلسة", "تاظروك"] },
        { code: "12", name: "12. تبسة", desk: 500, home: 700, cities: ["تبسة", "بئر العاتر", "الشريعة", "الونزة", "العوينات", "مرسط"] },
        { code: "13", name: "13. تلمسان", desk: 450, home: 650, cities: ["تلمسان", "مغنية", "غزوات", "الرمشي", "سبدو", "ندرومة", "شتوان", "منصورة"] },
        { code: "14", name: "14. تيارت", desk: 450, home: 650, cities: ["تيارت", "فرندة", "السوقر", "قصر الشلالة", "مهدية", "رحوية"] },
        { code: "15", name: "15. تيزي وزو", desk: 400, home: 600, cities: ["تيزي وزو", "ذراع بن خدة", "عزازقة", "ذراع الميزان", "بوغني", "تيقزيرت", "عين الحمام"] },
        { code: "16", name: "16. الجزائر", desk: 300, home: 450, cities: ["الجزائر الوسطى", "باب الزوار", "بئر مراد رايس", "الشراقة", "الدار البيضاء", "درارية", "الحراش", "حسين داي", "رويبة", "زرالدة", "بوزريعة", "برج الكيفان", "عين البنيان"] },
        { code: "17", name: "17. الجلفة", desk: 500, home: 700, cities: ["الجلفة", "عين وسارة", "مسعد", "حاسي بحبح", "الشارف", "دار الشيوخ"] },
        { code: "18", name: "18. جيجل", desk: 450, home: 650, cities: ["جيجل", "الطاهير", "الميلية", "العوانة", "زيامة منصورية", "الشقفة"] },
        { code: "19", name: "19. سطيف", desk: 400, home: 600, cities: ["سطيف", "العلمة", "عين ولمان", "بوقاعة", "عين أزال", "عين الكبيرة", "حمام السخنة"] },
        { code: "20", name: "20. سعيدة", desk: 450, home: 650, cities: ["سعيدة", "عين الحجر", "يوب", "أولاد ابراهيم", "الحساسنة"] },
        { code: "21", name: "21. سكيكدة", desk: 450, home: 650, cities: ["سكيكدة", "عزابة", "القل", "الحروش", "تمالوس", "رمضان جمال"] },
        { code: "22", name: "22. سيدي بلعباس", desk: 450, home: 650, cities: ["سيدي بلعباس", "تلاغ", "سفيزف", "بن باديس", "رأس الماء"] },
        { code: "23", name: "23. عنابة", desk: 450, home: 650, cities: ["عنابة", "البوني", "الحجار", "برحال", "سرايدي", "عين الباردة"] },
        { code: "24", name: "24. قالمة", desk: 450, home: 650, cities: ["قالمة", "وادي الزناتي", "بوشقوف", "حمام دباغ", "هيليوبوليس"] },
        { code: "25", name: "25. قسنطينة", desk: 400, home: 600, cities: ["قسنطينة", "الخروب", "عين عبيد", "حامة بوزيان", "ديدوش مراد", "زيغود يوسف"] },
        { code: "26", name: "26. المدية", desk: 400, home: 600, cities: ["المدية", "البرواقية", "قصر البخاري", "وزرة", "بني سليمان", "تابلاط"] },
        { code: "27", name: "27. مستغانم", desk: 450, home: 650, cities: ["مستغانم", "عين تادلس", "سيدي علي", "بوقيراط", "حاسي ماماش", "مزغران"] },
        { code: "28", name: "28. المسيلة", desk: 450, home: 650, cities: ["المسيلة", "بوسعادة", "سيدي عيسى", "عين الحجل", "مقرة", "برهوم", "حمام الضلعة", "أولاد دراج"] },
        { code: "29", name: "29. معسكر", desk: 450, home: 650, cities: ["معسكر", "سيق", "غريس", "المحمدية", "تيغنيف", "وادي الأبطال"] },
        { code: "30", name: "30. ورقلة", desk: 550, home: 800, cities: ["ورقلة", "حاسي مسعود", "سيدي خويلد", "عين البيضاء", "انقوسة"] },
        { code: "31", name: "31. وهران", desk: 400, home: 600, cities: ["وهران", "بئر الجير", "السانية", "أرزيو", "عين الترك", "قديل", "بطيوة", "وادي تليلات"] },
        { code: "32", name: "32. البيض", desk: 550, home: 800, cities: ["البيض", "بوقطب", "الأبيض سيدي الشيخ", "بريزينة", "رقاصة"] },
        { code: "33", name: "33. إليزي", desk: 800, home: 1100, cities: ["إليزي", "إن أميناس", "دبداب", "برج عمر إدريس"] },
        { code: "34", name: "34. برج بوعريريج", desk: 400, home: 600, cities: ["برج بوعريريج", "رأس الوادي", "برج الغدير", "المنصورة", "مجانة", "بئر قاصد علي"] },
        { code: "35", name: "35. بومرداس", desk: 350, home: 550, cities: ["بومرداس", "برج منايل", "بودواو", "خميس الخشنة", "دلس", "يسر", "الثنية", "قورصو"] },
        { code: "36", name: "36. الطارف", desk: 450, home: 650, cities: ["الطارف", "القالة", "بن مهيدي", "بوحجار", "الذرعان", "البسباس"] },
        { code: "37", name: "37. تندوف", desk: 800, home: 1100, cities: ["تندوف", "أم العسل"] },
        { code: "38", name: "38. تيسمسيلت", desk: 450, home: 650, cities: ["تيسمسيلت", "ثنية الحد", "برج بونعامة", "لرجام", "خميستي"] },
        { code: "39", name: "39. الوادي", desk: 550, home: 800, cities: ["الوادي", "قمار", "الرباح", "جامعة", "الدبيلة", "حاسي خليفة", "الرقيبة"] },
        { code: "40", name: "40. خنشلة", desk: 450, home: 650, cities: ["خنشلة", "قايس", "ششار", "أولاد رشاش", "الحامة", "بوحمامة"] },
        { code: "41", name: "41. سوق أهراس", desk: 450, home: 650, cities: ["سوق أهراس", "سدراتة", "مداوروش", "تاورة", "الحدادة"] },
        { code: "42", name: "42. تيبازة", desk: 350, home: 550, cities: ["تيبازة", "شرشال", "القليعة", "حجوط", "فوكة", "بوسماعيل", "الداموس", "قوراية"] },
        { code: "43", name: "43. ميلة", desk: 450, home: 650, cities: ["ميلة", "فرجيوة", "شلغوم العيد", "التلاغمة", "تاجنانت", "وادي العثمانية", "قرارم قوقة"] },
        { code: "44", name: "44. عين الدفلى", desk: 400, home: 600, cities: ["عين الدفلى", "خميس مليانة", "مليانة", "العطاف", "جندل", "حمام ريغة", "العبادية"] },
        { code: "45", name: "45. النعامة", desk: 550, home: 800, cities: ["النعامة", "المشرية", "عين الصفراء", "عسلة", "مكمن بن عمار"] },
        { code: "46", name: "46. عين تموشنت", desk: 450, home: 650, cities: ["عين تموشنت", "بني صاف", "حمام بوحجر", "المالح", "العامرية"] },
        { code: "47", name: "47. غرداية", desk: 550, home: 800, cities: ["غرداية", "متليلي", "القرارة", "بريان", "ضاية بن ضحوة", "بونورة"] },
        { code: "48", name: "48. غليزان", desk: 450, home: 650, cities: ["غليزان", "وادي رهيو", "مازونة", "يلل", "عمي موسى", "زمورة"] },
        { code: "49", name: "49. تيميمون", desk: 650, home: 900, cities: ["تيميمون", "أولاد سعيد", "شروين", "تينركوك"] },
        { code: "50", name: "50. برج باجي مختار", desk: 850, home: 1200, cities: ["برج باجي مختار", "تيمياوين"] },
        { code: "51", name: "51. أولاد جلال", desk: 500, home: 750, cities: ["أولاد جلال", "سيدي خالد", "الدوسن", "الشعيبة"] },
        { code: "52", name: "52. بني عباس", desk: 650, home: 900, cities: ["بني عباس", "إيقلي", "تبلبالة", "الواتة", "كرزاز"] },
        { code: "53", name: "53. عين صالح", desk: 750, home: 1050, cities: ["عين صالح", "إينغر", "فقارة الزوى"] },
        { code: "54", name: "54. عين قزام", desk: 850, home: 1200, cities: ["عين قزام", "تين زواتين"] },
        { code: "55", name: "55. تقرت", desk: 550, home: 800, cities: ["تقرت", "تماسين", "المقارين", "الطيبات", "بلدة عمر", "النزلة"] },
        { code: "56", name: "56. جانت", desk: 850, home: 1150, cities: ["جانت", "برج الحواس"] },
        { code: "57", name: "57. المغير", desk: 550, home: 800, cities: ["المغير", "جامعة", "سيدي عمران", "أم الطيور"] },
        { code: "58", name: "58. المنيعة", desk: 600, home: 850, cities: ["المنيعة", "حاسي القارة", "حاسي الفحل"] }
    ];

    return rawWilayas.map(function (w) {
        return {
            code: w.code,
            name: w.name,
            deskPrice: w.desk,
            homePrice: w.home,
            baladiyas: w.cities.map(function (cName) {
                return { name: cName, deskPrice: w.desk, homePrice: w.home };
            })
        };
    });
}

function getDashLang() {
    const lang = localStorage.getItem('shopLang') || 'ar';
    return dashLangTexts[lang] || dashLangTexts['ar'];
}

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
    await ensureDefaultShippingData();
    await loadHeroImagePreview();
    await renderDashboardCategories();
    await renderDashboardProducts();
    await renderDashboardOrders();
    await renderDashboardStats();
    await renderDashboardAdmins();
    await renderDashboardShipping();

    const heroFileInput = document.getElementById('heroImageFile');
    const heroPreview = document.getElementById('currentHeroPreview');

    if (heroFileInput) {
        heroFileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file) return;
            resizeAndConvertImage(file, 900, 675, function (compressedDataUrl) {
                if (heroPreview) heroPreview.src = compressedDataUrl;
                heroFileInput.dataset.compressed = compressedDataUrl;
            });
        });
    }

    const heroForm = document.getElementById('heroImageForm');
    if (heroForm) {
        heroForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const urlInput = document.getElementById('heroImageUrl');
            let finalImage = '';

            if (heroFileInput && heroFileInput.dataset.compressed) {
                finalImage = heroFileInput.dataset.compressed;
            } else if (urlInput && urlInput.value.trim() !== '') {
                finalImage = urlInput.value.trim();
            } else {
                alert('يرجى اختيار ملف صورة من جهازك أو إدخال رابط صورة أولاً!');
                return;
            }

            await saveHeroImageToCloud(finalImage);
        });
    }

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
                alert('حدث خطأ أثناء حفظ المنتج في السحابة: ' + error.message);
                return;
            }

            addProductForm.reset();
            if (showOnHomeCheckbox) showOnHomeCheckbox.checked = true;
            await renderDashboardProducts();
            await renderDashboardStats();
            alert(t.prodAdded);
        });
    }

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
                alert('حدث خطأ أثناء إضافة الفئة إلى قاعدة البيانات: ' + error.message);
                return;
            }

            addCategoryForm.reset();
            await renderDashboardCategories();
            alert(t.catAdded);
        });
    }

    const addAdminForm = document.getElementById('addAdminForm');
    if (addAdminForm) {
        addAdminForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const t = getDashLang();

            const name = document.getElementById('newAdminName').value.trim();
            const email = document.getElementById('newAdminEmail').value.trim();
            const password = document.getElementById('newAdminPassword').value.trim();

            const { data: admins, error: fetchErr } = await supabaseClient.from('admins').select('*');
            if (fetchErr) {
                alert('خطأ في قراءة جدول admins: ' + fetchErr.message);
                return;
            }

            const adminList = admins || [];

            if (adminList.some(function (a) { return a.email && a.email.toLowerCase() === email.toLowerCase(); })) {
                alert(t.emailExists);
                return;
            }

            const newAdminRecord = {
                id: 'adm_' + Date.now(),
                name: name,
                email: email,
                password: password,
                is_main: adminList.length === 0,
                can_add_admins: false
            };

            const { error: insertErr } = await supabaseClient.from('admins').insert([newAdminRecord]);
            if (insertErr) {
                console.error('Supabase Admin Insert Error:', insertErr);
                alert('حدث خطأ أثناء إضافة المسؤول: ' + insertErr.message);
                return;
            }

            addAdminForm.reset();
            await renderDashboardAdmins();
            alert(t.adminAdded);
        });
    }

    const addWilayaForm = document.getElementById('addWilayaForm');
    if (addWilayaForm) {
        addWilayaForm.addEventListener('submit', async function (e) {
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

            let shippingData = await getShippingDataList();
            const newWilayaObj = {
                code: code,
                name: name,
                deskPrice: deskPrice,
                homePrice: homePrice,
                baladiyas: baladiyasList
            };

            if (!isEditing && shippingData.some(function (w) { return w.code === code; })) {
                alert(t.wilayaCodeExists);
                return;
            }

            await supabaseClient.from('shipping_rates').upsert([{
                code: code,
                name: name,
                desk_price: deskPrice,
                home_price: homePrice,
                baladiyas: baladiyasList
            }]);

            const index = shippingData.findIndex(function (w) { return w.code === code; });
            if (index !== -1) {
                shippingData[index] = newWilayaObj;
            } else {
                shippingData.push(newWilayaObj);
            }
            shippingData.sort(function (a, b) { return a.code.localeCompare(b.code); });
            localStorage.setItem('algeriaShippingData', JSON.stringify(shippingData));

            alert(isEditing ? t.wilayaUpdated : t.wilayaAdded);
            resetWilayaForm();
            await renderDashboardShipping();
        });
    }
});

function resizeAndConvertImage(file, maxWidth, maxHeight, callback) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            let width = img.width;
            let height = img.height;

            if (width > maxWidth || height > maxHeight) {
                const ratio = Math.min(maxWidth / width, maxHeight / height);
                width = Math.round(width * ratio);
                height = Math.round(height * ratio);
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
            callback(dataUrl);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

async function loadHeroImagePreview() {
    const previewImg = document.getElementById('currentHeroPreview');
    const urlInput = document.getElementById('heroImageUrl');
    if (!previewImg) return;

    let savedImg = localStorage.getItem('shopHeroImage') || DEFAULT_HERO_IMAGE;

    const { data, error } = await supabaseClient
        .from('store_settings')
        .select('*')
        .eq('key', 'hero_image');

    if (!error && data && data.length > 0 && data[0].value) {
        savedImg = data[0].value;
        localStorage.setItem('shopHeroImage', savedImg);
    }

    previewImg.src = savedImg;
    if (urlInput && savedImg.indexOf('http') === 0) {
        urlInput.value = savedImg;
    }
}

async function saveHeroImageToCloud(imageData) {
    localStorage.setItem('shopHeroImage', imageData);

    const { error } = await supabaseClient
        .from('store_settings')
        .upsert([{ key: 'hero_image', value: imageData }]);

    if (error) {
        console.warn('Saved locally:', error);
    }

    const previewImg = document.getElementById('currentHeroPreview');
    if (previewImg) previewImg.src = imageData;

    const heroFileInput = document.getElementById('heroImageFile');
    if (heroFileInput) {
        heroFileInput.value = '';
        delete heroFileInput.dataset.compressed;
    }

    alert('تم تحديث الصورة الرئيسية لواجهة المتجر بنجاح! 🖼️✅');
}

async function resetDefaultHeroImage() {
    if (confirm('هل تريد استعادة الصورة الافتراضية للمتجر؟')) {
        const urlInput = document.getElementById('heroImageUrl');
        if (urlInput) urlInput.value = '';
        await saveHeroImageToCloud(DEFAULT_HERO_IMAGE);
    }
}

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

async function ensureDefaultShippingData() {
    const defaults = getDefaultAlgeriaWilayas();

    const { data: cloudShipping, error } = await supabaseClient.from('shipping_rates').select('*');
    if (!error && cloudShipping) {
        if (cloudShipping.length === 0) {
            const rowsToInsert = defaults.map(function (w) {
                return {
                    code: w.code,
                    name: w.name,
                    desk_price: w.deskPrice,
                    home_price: w.homePrice,
                    baladiyas: w.baladiyas
                };
            });
            await supabaseClient.from('shipping_rates').insert(rowsToInsert);
            localStorage.setItem('algeriaShippingData', JSON.stringify(defaults));
            return;
        } else {
            const formatted = cloudShipping.map(function (r) {
                return {
                    code: r.code,
                    name: r.name,
                    deskPrice: Number(r.desk_price),
                    homePrice: Number(r.home_price),
                    baladiyas: r.baladiyas || []
                };
            }).sort(function (a, b) { return a.code.localeCompare(b.code); });
            localStorage.setItem('algeriaShippingData', JSON.stringify(formatted));
            return;
        }
    }

    let localData = JSON.parse(localStorage.getItem('algeriaShippingData')) || [];
    if (localData.length === 0) {
        localStorage.setItem('algeriaShippingData', JSON.stringify(defaults));
    }
}

async function getShippingDataList() {
    const { data: cloudShipping, error } = await supabaseClient.from('shipping_rates').select('*');
    if (!error && cloudShipping && cloudShipping.length > 0) {
        const list = cloudShipping.map(function (r) {
            return {
                code: r.code,
                name: r.name,
                deskPrice: Number(r.desk_price),
                homePrice: Number(r.home_price),
                baladiyas: r.baladiyas || []
            };
        }).sort(function (a, b) { return a.code.localeCompare(b.code); });
        localStorage.setItem('algeriaShippingData', JSON.stringify(list));
        return list;
    }

    let localData = JSON.parse(localStorage.getItem('algeriaShippingData')) || [];
    if (localData.length === 0) {
        localData = getDefaultAlgeriaWilayas();
        localStorage.setItem('algeriaShippingData', JSON.stringify(localData));
    }
    return migrateShippingData(localData);
}

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
        loadHeroImagePreview();
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

async function renderDashboardCategories() {
    const tableBody = document.getElementById('dashCategoriesTable');
    const categoriesCount = document.getElementById('categoriesCount');
    const productCatSelect = document.getElementById('productCategory');
    const t = getDashLang();

    const { data: categories, error } = await supabaseClient.from('categories').select('*');
    if (error) return;

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

async function renderDashboardProducts() {
    const tableBody = document.getElementById('dashProductsTable');
    const productsCount = document.getElementById('productsCount');
    if (!tableBody) return;

    const t = getDashLang();
    const { data: products, error } = await supabaseClient.from('products').select('*');
    if (error) return;

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

async function editProductCost(productId, currentCost) {
    const newCostStr = prompt('أدخل سعر الشراء (التكلفة) الجديد لهذا المنتج (د.ج):', currentCost);
    if (newCostStr === null || newCostStr.trim() === '') return;

    const newCost = parsePriceNum(newCostStr);
    const { error } = await supabaseClient
        .from('products')
        .update({ cost_price: newCost })
        .eq('id', productId);

    if (error) {
        alert('حدث خطأ أثناء تحديث سعر الشراء.');
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

    if (error) return;
    await renderDashboardProducts();
}

async function renderDashboardOrders() {
    const tableBody = document.getElementById('dashOrdersTable');
    const ordersBadge = document.getElementById('ordersBadge');
    if (!tableBody) return;

    const t = getDashLang();
    const { data: orders, error: ordErr } = await supabaseClient.from('orders').select('*');
    const { data: products } = await supabaseClient.from('products').select('*');

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
    const { data: admins } = await supabaseClient.clear().from('admins').select('*').catch(() => supabaseClient.from('admins').select('*'));
    const adminList = admins || [];
    
    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin')) || {};
    let freshCurrentAdmin = adminList.find(function (a) { return a.email && a.email.toLowerCase() === (currentAdmin.email || '').toLowerCase(); }) || currentAdmin;
    
    const isFirstAdmin = adminList.length === 0;
    const canAdd = isFirstAdmin || freshCurrentAdmin.is_main === true || freshCurrentAdmin.can_add_admins === true;

    if (addCardContainer) {
        addCardContainer.style.display = canAdd ? 'block' : 'none';
    }

    tableBody.innerHTML = '';

    adminList.forEach(function (admin) {
        const rowId = admin.id || admin.email;
        let permissionsText = admin.is_main ? t.mainAdminRole : (admin.can_add_admins ? t.canAddRole : t.viewOnlyRole);
        let actionButtons = '';
        
        if (freshCurrentAdmin.is_main === true) {
            if (!admin.is_main) {
                let toggleBtnText = admin.can_add_admins ? t.revokePermBtn : t.grantPermBtn;
                let toggleBtnClass = admin.can_add_admins ? 'btn-cancel' : 'btn-primary';
                actionButtons += '<button class="btn ' + toggleBtnClass + ' btn-sm" onclick="toggleAdminPermission(\'' + rowId + '\')" style="margin: 0 5px; font-size: 0.75rem; padding: 4px 8px;">' + toggleBtnText + '</button>';
                actionButtons += '<button class="btn-delete" onclick="deleteAdmin(\'' + rowId + '\')">' + t.deleteBtn + '</button>';
            } else {
                actionButtons = '<span style="color: var(--primary-color); font-weight: bold;">' + t.primaryAccountText + '</span>';
            }
        } else {
            actionButtons = '<span style="color: var(--text-muted);">' + t.mainAdminOnlyText + '</span>';
        }

        tableBody.innerHTML += 
            '<tr>' +
                '<td><strong>' + (admin.name || '-') + '</strong></td>' +
                '<td>' + (admin.email || '-') + '</td>' +
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

async function renderDashboardShipping() {
    const tableBody = document.getElementById('dashShippingTable');
    if (!tableBody) return;

    const t = getDashLang();
    const shippingData = await getShippingDataList();

    tableBody.innerHTML = '';
    shippingData.forEach(function (item) {
        const bList = item.baladiyas || [];
        const bNamesPreview = bList.slice(0, 4).map(function (b) { return b.name; }).join('، ') + (bList.length > 4 ? ' ...' : '');

        tableBody.innerHTML += 
            '<tr>' +
                '<td><strong>' + item.code + '</strong></td>' +
                '<td><strong>' + item.name + '</strong></td>' +
                '<td style="color: #2563eb; font-weight: 700;">' + Number(item.deskPrice).toLocaleString() + t.currency + '</td>' +
                '<td style="color: #16a34a; font-weight: 700;">' + Number(item.homePrice).toLocaleString() + t.currency + '</td>' +
                '<td>' +
                    '<span class="badge badge-new">' + bList.length + t.baladiyaUnit + '</span>' +
                    '<div style="font-size: 0.78rem; color: #64748b; margin-top: 4px;">' + bNamesPreview + '</div>' +
                '</td>' +
                '<td>' +
                    '<button class="btn btn-primary btn-sm" onclick="editWilayaShipping(\'' + item.code + '\')" style="padding:5px 10px; font-size:0.78rem; margin: 0 4px;">' + t.editBtn + '</button>' +
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

async function editWilayaShipping(code) {
    const t = getDashLang();
    const shippingData = await getShippingDataList();
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
            addBaladiyaRow(b.name, b.deskPrice, b.homePrice);
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

async function deleteWilayaShipping(code) {
    const t = getDashLang();
    if (confirm(t.confirmDeleteWilaya)) {
        await supabaseClient.from('shipping_rates').delete().eq('code', code);

        let shippingData = JSON.parse(localStorage.getItem('algeriaShippingData')) || [];
        shippingData = shippingData.filter(function (w) { return w.code !== code; });
        localStorage.setItem('algeriaShippingData', JSON.stringify(shippingData));

        await renderDashboardShipping();
    }
}

async function toggleAdminPermission(adminIdOrEmail) {
    const { data: admins } = await supabaseClient.from('admins').select('*');
    if (!admins) return;

    let targetAdmin = admins.find(function (a) { return a.id === adminIdOrEmail || a.email === adminIdOrEmail; });
    if (targetAdmin) {
        let newStatus = !targetAdmin.can_add_admins;
        if (targetAdmin.id) {
            await supabaseClient.from('admins').update({ can_add_admins: newStatus }).eq('id', targetAdmin.id);
        } else {
            await supabaseClient.from('admins').update({ can_add_admins: newStatus }).eq('email', targetAdmin.email);
        }
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

async function deleteAdmin(adminIdOrEmail) {
    const t = getDashLang();
    const { data: admins } = await supabaseClient.from('admins').select('*');
    if (!admins) return;

    let targetAdmin = admins.find(function (a) { return a.id === adminIdOrEmail || a.email === adminIdOrEmail; });
    if (targetAdmin && targetAdmin.is_main) {
        alert(t.cannotDeleteMainAdmin);
        return;
    }
    if (confirm(t.confirmDeleteAdmin)) {
        if (targetAdmin && targetAdmin.id) {
            await supabaseClient.from('admins').delete().eq('id', targetAdmin.id);
        } else {
            await supabaseClient.from('admins').delete().eq('email', adminIdOrEmail);
        }
        await renderDashboardAdmins();
    }
}

function logoutAdmin() {
    localStorage.removeItem('currentAdmin');
    window.location.href = 'login.html';
}