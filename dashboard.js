// قاموس النصوص الديناميكية للوحة التحكم باللغات الثلاث
const dashLangTexts = {
    ar: {
        mustLogin: 'يجب تسجيل الدخول كمسؤول أولاً للوصول إلى لوحة التحكم!',
        prodAdded: 'تمت إضافة المنتج بنجاح مع الصور والوصف إلى المتجر!',
        noPermAddAdmin: 'عذراً، لا تمتلك الصلاحية لإضافة مسؤولين جدد!',
        emailExists: 'هذا البريد مستخدم مسبقاً!',
        adminAdded: 'تمت إضافة المسؤول الجديد بنجاح!',
        wilayaUpdated: 'تم تحديث بيانات الولاية وأسعار البلديات بنجاح!',
        wilayaCodeExists: 'رقم الولاية (الكود) موجود مسبقاً!',
        wilayaAdded: 'تمت إضافة الولاية الجديدة بنجاح!',
        countPrefix: 'العدد: ',
        noProds: 'لا توجد منتجات مضافة بعد.',
        noOrders: 'لا توجد طلبات أرسلت بعد.',
        currency: ' د.ج',
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
        confirmOrderPrompt: 'هل أنت متأكد من تأكيد الطلب؟ سيتم خصم الكميات المطلوبة من المخزون العام للمنتجات.',
        orderConfirmedAlert: 'تم تأكيد الطلب بنجاح وخصم الكميات من المخزون! ✅',
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
        confirmDeleteOrder: 'هل أنت متأكد من حذف هذا الطلب؟',
        confirmClearAllOrders: 'هل أنت متأكد من تفريغ وحذف جميع الطلبات بالكامل؟',
        cannotDeleteMainAdmin: 'لا يمكن حذف المدير الرئيسي!',
        confirmDeleteAdmin: 'هل أنت متأكد من حذف هذا المسؤول؟'
    },
    en: {
        mustLogin: 'You must login as an admin first to access the Dashboard!',
        prodAdded: 'Product added successfully with images and description!',
        noPermAddAdmin: 'Sorry, you do not have permission to add new admins!',
        emailExists: 'This email is already in use!',
        adminAdded: 'New admin added successfully!',
        wilayaUpdated: 'Wilaya and Baladiya shipping rates updated successfully!',
        wilayaCodeExists: 'Wilaya code already exists!',
        wilayaAdded: 'New Wilaya added successfully!',
        countPrefix: 'Count: ',
        noProds: 'No products added yet.',
        noOrders: 'No orders received yet.',
        currency: ' DZD',
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
        confirmOrderPrompt: 'Are you sure you want to confirm this order? Purchased quantities will be deducted from total stock.',
        orderConfirmedAlert: 'Order confirmed and stock quantities deducted successfully! ✅',
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
        confirmDeleteOrder: 'Are you sure you want to delete this order?',
        confirmClearAllOrders: 'Are you sure you want to clear all orders?',
        cannotDeleteMainAdmin: 'Cannot delete the Main Admin!',
        confirmDeleteAdmin: 'Are you sure you want to delete this admin?'
    },
    fr: {
        mustLogin: 'Vous devez vous connecter en tant qu\'administrateur pour accéder au tableau de bord !',
        prodAdded: 'Produit ajouté avec succès avec images et description !',
        noPermAddAdmin: 'Désolé, vous n\'avez pas la permission d\'ajouter des administrateurs !',
        emailExists: 'Cet e-mail est déjà utilisé !',
        adminAdded: 'Nouvel administrateur ajouté avec succès !',
        wilayaUpdated: 'Données de la wilaya et tarifs des communes mis à jour !',
        wilayaCodeExists: 'Le code de cette wilaya existe déjà !',
        wilayaAdded: 'Nouvelle wilaya ajoutée avec succès !',
        countPrefix: 'Total : ',
        noProds: 'Aucun produit ajouté pour le moment.',
        noOrders: 'Aucune commande reçue pour le moment.',
        currency: ' DA',
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
        confirmOrderPrompt: 'Confirmer cette commande ? Les quantités seront déduites du stock global.',
        orderConfirmedAlert: 'Commande confirmée et quantités déduites du stock avec succès ! ✅',
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
        confirmDeleteOrder: 'Supprimer cette commande ?',
        confirmClearAllOrders: 'Êtes-vous sûr de vouloir vider toutes les commandes ?',
        cannotDeleteMainAdmin: 'Impossible de supprimer l\'administrateur principal !',
        confirmDeleteAdmin: 'Supprimer cet administrateur ?'
    }
};

function getDashLang() {
    const lang = localStorage.getItem('shopLang') || 'ar';
    return dashLangTexts[lang] || dashLangTexts['ar'];
}

document.addEventListener('DOMContentLoaded', function () {
    const t = getDashLang();
    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin'));
    if (!currentAdmin) {
        alert(t.mustLogin);
        window.location.href = 'login.html';
        return;
    }

    renderDashboardProducts();
    renderDashboardOrders();
    renderDashboardAdmins();
    renderDashboardShipping();

    // 2. معالجة إضافة منتج جديد
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const t = getDashLang();

            const title = document.getElementById('productTitle').value.trim();
            const category = document.getElementById('productCategory').value;
            const badgeValue = document.getElementById('productBadge').value;
            const price = document.getElementById('productPrice').value;
            const oldPrice = document.getElementById('productOldPrice').value;
            const quantity = document.getElementById('productQuantity').value;
            const imagesRaw = document.getElementById('productImage').value.trim();
            const description = document.getElementById('productDescription').value.trim();

            const imagesList = imagesRaw.split('\n').map(function (url) { return url.trim(); }).filter(function (url) { return url.length > 0; });

            let badgeClass = '';
            if (badgeValue === 'خصم') badgeClass = 'badge-sale';
            if (badgeValue === 'جديد') badgeClass = 'badge-new';

            const newProduct = {
                id: 'prod_' + Date.now(),
                title: title,
                category: category,
                badge: badgeValue || null,
                badgeClass: badgeClass,
                price: Number(price).toLocaleString(),
                oldPrice: oldPrice ? Number(oldPrice).toLocaleString() : null,
                quantity: Number(quantity),
                image: imagesList[0] || 'https://via.placeholder.com/300',
                images: imagesList.length > 0 ? imagesList : ['https://via.placeholder.com/300'],
                description: description,
                rating: '5.0'
            };

            saveProductToStorage(newProduct);
            addProductForm.reset();
            renderDashboardProducts();
            alert(t.prodAdded);
        });
    }

    // 3. معالجة إضافة مسؤول جديد
    const addAdminForm = document.getElementById('addAdminForm');
    if (addAdminForm) {
        addAdminForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const t = getDashLang();

            let admins = JSON.parse(localStorage.getItem('shopAdmins')) || [];
            let freshCurrentAdmin = admins.find(function (a) { return a.email === currentAdmin.email; }) || currentAdmin;

            if (!freshCurrentAdmin.isMain && !freshCurrentAdmin.canAddAdmins) {
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

            admins.push({
                id: 'adm_' + Date.now(),
                name: name,
                email: email,
                password: password,
                isMain: false,
                canAddAdmins: false
            });

            localStorage.setItem('shopAdmins', JSON.stringify(admins));
            addAdminForm.reset();
            renderDashboardAdmins();
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

function switchDashTab(tabName) {
    const productsSection = document.getElementById('productsTabSection');
    const ordersSection = document.getElementById('ordersTabSection');
    const adminsSection = document.getElementById('adminsTabSection');
    const shippingSection = document.getElementById('shippingTabSection');
    
    const btnProd = document.getElementById('tabProductsBtn');
    const btnOrd = document.getElementById('tabOrdersBtn');
    const btnAdm = document.getElementById('tabAdminsBtn');
    const btnShip = document.getElementById('tabShippingBtn');

    if (productsSection) productsSection.style.display = 'none';
    if (ordersSection) ordersSection.style.display = 'none';
    if (adminsSection) adminsSection.style.display = 'none';
    if (shippingSection) shippingSection.style.display = 'none';

    if (btnProd) btnProd.classList.remove('active');
    if (btnOrd) btnOrd.classList.remove('active');
    if (btnAdm) btnAdm.classList.remove('active');
    if (btnShip) btnShip.classList.remove('active');

    if (tabName === 'products') {
        if (productsSection) productsSection.style.display = 'block';
        if (btnProd) btnProd.classList.add('active');
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

function saveProductToStorage(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.unshift(product);
    localStorage.setItem('products', JSON.stringify(products));
}

function renderDashboardProducts() {
    const tableBody = document.getElementById('dashProductsTable');
    const productsCount = document.getElementById('productsCount');
    if (!tableBody) return;

    const t = getDashLang();
    let products = JSON.parse(localStorage.getItem('products')) || [];
    if (productsCount) productsCount.textContent = t.countPrefix + products.length;

    if (products.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">' + t.noProds + '</td></tr>';
        return;
    }

    tableBody.innerHTML = '';
    products.forEach(function (product) {
        const mainImg = (product.images && product.images.length > 0) ? product.images[0] : product.image;
        tableBody.innerHTML += 
            '<tr>' +
                '<td><img src="' + mainImg + '" alt="' + product.title + '" class="dash-table-img" onerror="this.src=\'https://via.placeholder.com/45\'"></td>' +
                '<td><strong>' + product.title + '</strong></td>' +
                '<td>' + product.category + '</td>' +
                '<td>' + product.price + t.currency + '</td>' +
                '<td><span class="badge badge-new">' + (product.quantity !== undefined ? product.quantity : 1) + '</span></td>' +
                '<td><button class="btn-delete" onclick="deleteProduct(\'' + product.id + '\')">' + t.deleteBtn + '</button></td>' +
            '</tr>';
    });
}

function renderDashboardOrders() {
    const tableBody = document.getElementById('dashOrdersTable');
    const ordersBadge = document.getElementById('ordersBadge');
    if (!tableBody) return;

    const t = getDashLang();
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    let products = JSON.parse(localStorage.getItem('products')) || [];
    if (ordersBadge) ordersBadge.textContent = orders.length;

    if (orders.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 30px;">' + t.noOrders + '</td></tr>';
        return;
    }

    tableBody.innerHTML = '';
    orders.forEach(function (order) {
        let itemsDetailsHTML = '';
        if (order.items && Array.isArray(order.items)) {
            order.items.forEach(function (orderItem) {
                let product = products.find(function (p) { return p.id === orderItem.id; });
                let productTitle = product ? product.title : t.deletedProd;
                itemsDetailsHTML += '<div style="margin-bottom: 4px; font-size: 0.85rem;">• ' + productTitle + ' (' + t.qtyWord + '<strong style="color: #2563eb;">' + orderItem.qty + '</strong>)</div>';
            });
        } else {
            itemsDetailsHTML = '<span style="color: #64748b;">' + t.itemsCountWord + (order.itemsCount || 1) + '</span>';
        }

        const isConfirmed = order.status === 'مؤكد' || order.status === 'Confirmed' || order.status === 'Confirmée';
        let statusBadgeClass = isConfirmed ? 'status-completed' : 'status-pending';
        let displayStatus = isConfirmed ? t.statusConfirmed : t.statusPending;
        let actionButtons = '';
        
        if (!isConfirmed) {
            actionButtons += '<button class="btn btn-sm" onclick="confirmOrder(\'' + order.orderId + '\')" style="background: #16a34a; color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; margin: 0 4px; font-size: 0.8rem;">' + t.confirmBtn + '</button>';
        } else {
            actionButtons += '<span style="color: #16a34a; font-weight: bold; font-size: 0.85rem; margin: 0 4px;">' + t.confirmedText + '</span>';
        }
        actionButtons += '<button class="btn-delete" onclick="deleteOrder(\'' + order.orderId + '\')">' + t.deleteBtn + '</button>';

        let orderDateTimeStr = order.fullDateTime || ((order.date || '') + (order.time ? ' - ' + order.time : ''));
        let orderTitleDisplay = order.orderTitle || t.newOrderWord;

        tableBody.innerHTML += 
            '<tr>' +
                '<td>' +
                    '<strong style="color: #1e293b;">' + order.orderId + '</strong><br>' +
                    '<span style="font-size: 0.85rem; color: #2563eb; font-weight: 600;">🏷️ ' + orderTitleDisplay + '</span><br>' +
                    '<small style="color: #64748b; font-size: 0.78rem;">🕒 ' + orderDateTimeStr + '</small>' +
                '</td>' +
                '<td>' + order.client.name + '</td>' +
                '<td><a href="tel:' + order.client.phone + '">' + order.client.phone + '</a></td>' +
                '<td>' + order.client.state + ' - ' + (order.client.baladiya || '') + ' (' + order.client.address + ')</td>' +
                '<td>' + itemsDetailsHTML + '</td>' +
                '<td><strong>' + order.totalAmount + t.currency + '</strong></td>' +
                '<td><span class="status-badge ' + statusBadgeClass + '">' + displayStatus + '</span></td>' +
                '<td><div style="display: flex; align-items: center; gap: 4px;">' + actionButtons + '</div></td>' +
            '</tr>';
    });
}

function confirmOrder(orderId) {
    const t = getDashLang();
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    let products = JSON.parse(localStorage.getItem('products')) || [];

    let order = orders.find(function (o) { return o.orderId === orderId; });
    if (!order) return;

    if (order.status === 'مؤكد') {
        alert(t.alreadyConfirmed);
        return;
    }

    if (confirm(t.confirmOrderPrompt)) {
        if (order.items && Array.isArray(order.items)) {
            order.items.forEach(function (orderItem) {
                let product = products.find(function (p) { return p.id === orderItem.id; });
                if (product) {
                    let currentQuantity = parseInt(product.quantity) || 0;
                    product.quantity = Math.max(0, currentQuantity - orderItem.qty);
                }
            });

            localStorage.setItem('products', JSON.stringify(products));
        }

        order.status = 'مؤكد';
        localStorage.setItem('orders', JSON.stringify(orders));

        alert(t.orderConfirmedAlert);
        renderDashboardOrders();
        renderDashboardProducts();
    }
}

function clearAllOrders() {
    const t = getDashLang();
    if (confirm(t.confirmClearAllOrders)) {
        localStorage.removeItem('orders');
        renderDashboardOrders();
    }
}

function renderDashboardAdmins() {
    const tableBody = document.getElementById('dashAdminsTable');
    const addCardContainer = document.getElementById('addAdminCardContainer');
    if (!tableBody) return;

    const t = getDashLang();
    let admins = JSON.parse(localStorage.getItem('shopAdmins')) || [];
    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin')) || {};
    const freshCurrentAdmin = admins.find(function (a) { return a.email === currentAdmin.email; }) || currentAdmin;
    const canAdd = freshCurrentAdmin.isMain || freshCurrentAdmin.canAddAdmins;

    if (addCardContainer) addCardContainer.style.display = canAdd ? 'block' : 'none';

    tableBody.innerHTML = '';
    admins.forEach(function (admin) {
        let permissionsText = admin.isMain ? t.mainAdminRole : (admin.canAddAdmins ? t.canAddRole : t.viewOnlyRole);
        let actionButtons = '';
        
        if (freshCurrentAdmin.isMain) {
            if (!admin.isMain) {
                let toggleBtnText = admin.canAddAdmins ? t.revokePermBtn : t.grantPermBtn;
                let toggleBtnClass = admin.canAddAdmins ? 'btn-cancel' : 'btn-primary';
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
                '<td><span class="status-badge ' + (admin.isMain ? 'status-completed' : 'status-pending') + '">' + permissionsText + '</span></td>' +
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

function toggleAdminPermission(adminId) {
    let admins = JSON.parse(localStorage.getItem('shopAdmins')) || [];
    let targetAdmin = admins.find(function (a) { return a.id === adminId; });
    if (targetAdmin) {
        targetAdmin.canAddAdmins = !targetAdmin.canAddAdmins;
        localStorage.setItem('shopAdmins', JSON.stringify(admins));
        renderDashboardAdmins();
    }
}

function deleteProduct(productId) {
    const t = getDashLang();
    if (confirm(t.confirmDeleteProd)) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products = products.filter(function (item) { return item.id !== productId; });
        localStorage.setItem('products', JSON.stringify(products));
        renderDashboardProducts();
    }
}

function deleteOrder(orderId) {
    const t = getDashLang();
    if (confirm(t.confirmDeleteOrder)) {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders = orders.filter(function (o) { return o.orderId !== orderId; });
        localStorage.setItem('orders', JSON.stringify(orders));
        renderDashboardOrders();
    }
}

function deleteAdmin(adminId) {
    const t = getDashLang();
    let admins = JSON.parse(localStorage.getItem('shopAdmins')) || [];
    let targetAdmin = admins.find(function (a) { return a.id === adminId; });
    if (targetAdmin && targetAdmin.isMain) {
        alert(t.cannotDeleteMainAdmin);
        return;
    }
    if (confirm(t.confirmDeleteAdmin)) {
        admins = admins.filter(function (a) { return a.id !== adminId; });
        localStorage.setItem('shopAdmins', JSON.stringify(admins));
        renderDashboardAdmins();
    }
}

function logoutAdmin() {
    localStorage.removeItem('currentAdmin');
    window.location.href = 'login.html';
}