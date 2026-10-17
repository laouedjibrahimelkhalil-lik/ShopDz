// قاعدة بيانات الولايات والبلديات الافتراضية وأسعار الشحن
const defaultWilayasData = [
    { code: "01", name: "01. أدرار", deskPrice: 900, homePrice: 1200, baladiyas: [{name:"أدرار", deskPrice:900, homePrice:1200}, {name:"تمتقت", deskPrice:900, homePrice:1200}] },
    { code: "02", name: "02. الشلف", deskPrice: 500, homePrice: 750, baladiyas: [{name:"الشلف", deskPrice:500, homePrice:750}, {name:"تنس", deskPrice:500, homePrice:750}] },
    { code: "03", name: "03. الأغواط", deskPrice: 600, homePrice: 850, baladiyas: [{name:"الأغواط", deskPrice:600, homePrice:850}, {name:"آفلو", deskPrice:600, homePrice:850}] },
    { code: "04", name: "04. أم البواقي", deskPrice: 500, homePrice: 750, baladiyas: [{name:"أم البواقي", deskPrice:500, homePrice:750}, {name:"عين البيضاء", deskPrice:500, homePrice:750}] },
    { code: "05", name: "05. باتنة", deskPrice: 500, homePrice: 750, baladiyas: [{name:"باتنة", deskPrice:500, homePrice:750}, {name:"بريكة", deskPrice:500, homePrice:750}] },
    { code: "06", name: "06. بجاية", deskPrice: 500, homePrice: 750, baladiyas: [{name:"بجاية", deskPrice:500, homePrice:750}, {name:"أقبو", deskPrice:500, homePrice:750}] },
    { code: "07", name: "07. بسكرة", deskPrice: 600, homePrice: 850, baladiyas: [{name:"بسكرة", deskPrice:600, homePrice:850}, {name:"طولقة", deskPrice:600, homePrice:850}] },
    { code: "08", name: "08. بشار", deskPrice: 800, homePrice: 1100, baladiyas: [{name:"بشار", deskPrice:800, homePrice:1100}] },
    { code: "09", name: "09. البليدة", deskPrice: 400, homePrice: 600, baladiyas: [{name:"البليدة", deskPrice:400, homePrice:600}, {name:"بوفاريك", deskPrice:400, homePrice:600}] },
    { code: "10", name: "10. البويرة", deskPrice: 450, homePrice: 700, baladiyas: [{name:"البويرة", deskPrice:450, homePrice:700}] },
    { code: "11", name: "11. تمنراست", deskPrice: 1000, homePrice: 1400, baladiyas: [{name:"تمنراست", deskPrice:1000, homePrice:1400}] },
    { code: "12", name: "12. تبسة", deskPrice: 600, homePrice: 850, baladiyas: [{name:"تبسة", deskPrice:600, homePrice:850}] },
    { code: "13", name: "13. تلمسان", deskPrice: 550, homePrice: 800, baladiyas: [{name:"تلمسان", deskPrice:550, homePrice:800}] },
    { code: "14", name: "14. تيارت", deskPrice: 550, homePrice: 800, baladiyas: [{name:"تيارت", deskPrice:550, homePrice:800}] },
    { code: "15", name: "15. تيزي وزو", deskPrice: 450, homePrice: 700, baladiyas: [{name:"تيزي وزو", deskPrice:450, homePrice:700}] },
    { code: "16", name: "16. الجزائر", deskPrice: 400, homePrice: 600, baladiyas: [{name:"الجزائر الوسطى", deskPrice:400, homePrice:600}, {name:"سيدي أمحمد", deskPrice:400, homePrice:600}, {name:"باب الوادي", deskPrice:400, homePrice:600}, {name:"حسين داي", deskPrice:400, homePrice:600}] },
    { code: "17", name: "17. الجلفة", deskPrice: 600, homePrice: 850, baladiyas: [{name:"الجلفة", deskPrice:600, homePrice:850}] },
    { code: "18", name: "18. جيجل", deskPrice: 500, homePrice: 750, baladiyas: [{name:"جيجل", deskPrice:500, homePrice:750}] },
    { code: "19", name: "19. سطيف", deskPrice: 450, homePrice: 700, baladiyas: [{name:"سطيف", deskPrice:450, homePrice:700}, {name:"العلمة", deskPrice:450, homePrice:700}] },
    { code: "20", name: "20. سعيدة", deskPrice: 550, homePrice: 800, baladiyas: [{name:"سعيدة", deskPrice:550, homePrice:800}] },
    { code: "21", name: "21. سكيكدة", deskPrice: 500, homePrice: 750, baladiyas: [{name:"سكيكدة", deskPrice:500, homePrice:750}] },
    { code: "22", name: "22. سيدي بلعباس", deskPrice: 550, homePrice: 800, baladiyas: [{name:"سيدي بلعباس", deskPrice:550, homePrice:800}] },
    { code: "23", name: "23. عنابة", deskPrice: 450, homePrice: 700, baladiyas: [{name:"عنابة", deskPrice:450, homePrice:700}, {name:"البوني", deskPrice:450, homePrice:700}] },
    { code: "24", name: "24. قالمة", deskPrice: 500, homePrice: 750, baladiyas: [{name:"قالمة", deskPrice:500, homePrice:750}] },
    { code: "25", name: "25. قسنطينة", deskPrice: 450, homePrice: 700, baladiyas: [{name:"قسنطينة", deskPrice:450, homePrice:700}, {name:"الخروب", deskPrice:450, homePrice:700}] },
    { code: "26", name: "26. المدية", deskPrice: 500, homePrice: 750, baladiyas: [{name:"المدية", deskPrice:500, homePrice:750}] },
    { code: "27", name: "27. مستغانم", deskPrice: 500, homePrice: 750, baladiyas: [{name:"مستغانم", deskPrice:500, homePrice:750}] },
    { code: "28", name: "28. المسيلة", deskPrice: 500, homePrice: 750, baladiyas: [{name:"المسيلة", deskPrice:500, homePrice:750}, {name:"بوسعادة", deskPrice:500, homePrice:750}] },
    { code: "29", name: "29. معسكر", deskPrice: 550, homePrice: 800, baladiyas: [{name:"معسكر", deskPrice:550, homePrice:800}] },
    { code: "30", name: "30. ورقلة", deskPrice: 700, homePrice: 1000, baladiyas: [{name:"ورقلة", deskPrice:700, homePrice:1000}, {name:"تقرت", deskPrice:700, homePrice:1000}] },
    { code: "31", name: "31. وهران", deskPrice: 450, homePrice: 700, baladiyas: [{name:"وهران", deskPrice:450, homePrice:700}, {name:"بئر الجير", deskPrice:450, homePrice:700}] },
    { code: "32", name: "32. البيض", deskPrice: 700, homePrice: 1000, baladiyas: [{name:"البيض", deskPrice:700, homePrice:1000}] },
    { code: "33", name: "33. إليزي", deskPrice: 1000, homePrice: 1400, baladiyas: [{name:"إليزي", deskPrice:1000, homePrice:1400}] },
    { code: "34", name: "34. برج بوعريريج", deskPrice: 450, homePrice: 700, baladiyas: [{name:"برج بوعريريج", deskPrice:450, homePrice:700}] },
    { code: "35", name: "35. بومرداس", deskPrice: 400, homePrice: 650, baladiyas: [{name:"بومرداس", deskPrice:400, homePrice:650}, {name:"دلس", deskPrice:400, homePrice:650}] },
    { code: "36", name: "36. الطارف", deskPrice: 550, homePrice: 800, baladiyas: [{name:"الطارف", deskPrice:550, homePrice:800}] },
    { code: "37", name: "37. تندوف", deskPrice: 1000, homePrice: 1400, baladiyas: [{name:"تندوف", deskPrice:1000, homePrice:1400}] },
    { code: "38", name: "38. تيسمسيلت", deskPrice: 550, homePrice: 800, baladiyas: [{name:"تيسمسيلت", deskPrice:550, homePrice:800}] },
    { code: "39", name: "39. الوادي", deskPrice: 650, homePrice: 950, baladiyas: [{name:"الوادي", deskPrice:650, homePrice:950}] },
    { code: "40", name: "40. خنشلة", deskPrice: 550, homePrice: 800, baladiyas: [{name:"خنشلة", deskPrice:550, homePrice:800}] },
    { code: "41", name: "41. سوق أهراس", deskPrice: 550, homePrice: 800, baladiyas: [{name:"سوق أهراس", deskPrice:550, homePrice:800}] },
    { code: "42", name: "42. تيبازة", deskPrice: 450, homePrice: 700, baladiyas: [{name:"تيبازة", deskPrice:450, homePrice:700}, {name:"شرشال", deskPrice:450, homePrice:700}] },
    { code: "43", name: "43. ميلة", deskPrice: 500, homePrice: 750, baladiyas: [{name:"ميلة", deskPrice:500, homePrice:750}] },
    { code: "44", name: "44. عين الدفلى", deskPrice: 450, homePrice: 700, baladiyas: [{name:"عين الدفلى", deskPrice:450, homePrice:700}] },
    { code: "45", name: "45. النعامة", deskPrice: 700, homePrice: 1000, baladiyas: [{name:"النعامة", deskPrice:700, homePrice:1000}] },
    { code: "46", name: "46. عين تموشنت", deskPrice: 550, homePrice: 800, baladiyas: [{name:"عين تموشنت", deskPrice:550, homePrice:800}] },
    { code: "47", name: "47. غرداية", deskPrice: 650, homePrice: 950, baladiyas: [{name:"غرداية", deskPrice:650, homePrice:950}] },
    { code: "48", name: "48. غليزان", deskPrice: 500, homePrice: 750, baladiyas: [{name:"غليزان", deskPrice:500, homePrice:750}] },
    { code: "49", name: "49. المغير", deskPrice: 650, homePrice: 950, baladiyas: [{name:"المغير", deskPrice:650, homePrice:950}] },
    { code: "50", name: "50. المنيعة", deskPrice: 750, homePrice: 1100, baladiyas: [{name:"المنيعة", deskPrice:750, homePrice:1100}] },
    { code: "51", name: "51. أولاد جلال", deskPrice: 600, homePrice: 850, baladiyas: [{name:"أولاد جلال", deskPrice:600, homePrice:850}] },
    { code: "52", name: "52. برج باجي مختار", deskPrice: 1100, homePrice: 1500, baladiyas: [{name:"برج باجي مختار", deskPrice:1100, homePrice:1500}] },
    { code: "53", name: "53. بني عباس", deskPrice: 800, homePrice: 1100, baladiyas: [{name:"بني عباس", deskPrice:800, homePrice:1100}] },
    { code: "54", name: "54. تيميمون", deskPrice: 850, homePrice: 1200, baladiyas: [{name:"تيميمون", deskPrice:850, homePrice:1200}] },
    { code: "55", name: "55. تقرت", deskPrice: 700, homePrice: 1000, baladiyas: [{name:"تقرت", deskPrice:700, homePrice:1000}] },
    { code: "56", name: "56. جانت", deskPrice: 1100, homePrice: 1500, baladiyas: [{name:"جانت", deskPrice:1100, homePrice:1500}] },
    { code: "57", name: "57. إن صالح", deskPrice: 1000, homePrice: 1400, baladiyas: [{name:"إن صالح", deskPrice:1000, homePrice:1400}] },
    { code: "58", name: "58. إن قزام", deskPrice: 1200, homePrice: 1600, baladiyas: [{name:"إن قزام", deskPrice:1200, homePrice:1600}] }
];

const checkoutDynamicTexts = {
    ar: {
        currency: ' د.ج',
        selectWilaya: 'اختر الولاية...',
        selectBaladiya: 'اختر البلدية...',
        selectWilayaFirst: 'اختر الولاية أولاً',
        homeDelivery: 'توصيل للمنزل',
        deskDelivery: 'توصيل للمكتب',
        emptyCartAlert: 'سلة التسوق فارغة!',
        defaultOrderTitle: 'طلبية إلكترونية',
        thankYouPrefix: 'شكراً لك يا ',
        thankYouMid: '! تم تسجيل طلبك ("',
        thankYouId: '") بنجاح برقم (',
        thankYouSuffix: '). سنتصل بك قريباً.'
    },
    en: {
        currency: ' DZD',
        selectWilaya: 'Select Wilaya...',
        selectBaladiya: 'Select Baladiya...',
        selectWilayaFirst: 'Select Wilaya first',
        homeDelivery: 'Home Delivery',
        deskDelivery: 'Stop-Desk Delivery',
        emptyCartAlert: 'Your shopping cart is empty!',
        defaultOrderTitle: 'Online Order',
        thankYouPrefix: 'Thank you ',
        thankYouMid: '! Your order ("',
        thankYouId: '") has been placed successfully with ID (',
        thankYouSuffix: '). We will contact you soon.'
    },
    fr: {
        currency: ' DA',
        selectWilaya: 'Choisissez la wilaya...',
        selectBaladiya: 'Choisissez la commune...',
        selectWilayaFirst: 'Choisissez d\'abord la wilaya',
        homeDelivery: 'Livraison à domicile',
        deskDelivery: 'Livraison au bureau',
        emptyCartAlert: 'Votre panier est vide !',
        defaultOrderTitle: 'Commande en ligne',
        thankYouPrefix: 'Merci ',
        thankYouMid: ' ! Votre commande ("',
        thankYouId: '") a été enregistrée avec succès sous le numéro (',
        thankYouSuffix: '). Nous vous contacterons bientôt.'
    }
};

function getCheckoutLang() {
    const lang = localStorage.getItem('shopLang') || 'ar';
    return checkoutDynamicTexts[lang] || checkoutDynamicTexts['ar'];
}

document.addEventListener('DOMContentLoaded', async function () {
    initShippingStorage();
    populateWilayas();
    await loadCheckoutSummary();

    const clientStateSelect = document.getElementById('clientState');
    const clientBaladiyaSelect = document.getElementById('clientBaladiya');
    const checkoutForm = document.getElementById('checkoutForm');
    const deliveryRadioInputs = document.querySelectorAll('input[name="deliveryType"]');

    if (clientStateSelect) {
        clientStateSelect.addEventListener('change', function () {
            updateBaladiyasList();
            calculateCheckoutTotal();
        });
    }

    if (clientBaladiyaSelect) {
        clientBaladiyaSelect.addEventListener('change', function () {
            calculateCheckoutTotal();
        });
    }

    deliveryRadioInputs.forEach(function (radio) {
        radio.addEventListener('change', function () {
            const t = getCheckoutLang();
            document.querySelectorAll('.delivery-card').forEach(function (card) {
                card.classList.remove('active');
            });
            if (this.closest('.delivery-card')) {
                this.closest('.delivery-card').classList.add('active');
            }

            const deliveryTypeText = this.value === 'home' ? t.homeDelivery : t.deskDelivery;
            const summaryDeliveryType = document.getElementById('summaryDeliveryType');
            if (summaryDeliveryType) summaryDeliveryType.textContent = deliveryTypeText;

            calculateCheckoutTotal();
        });
    });

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const t = getCheckoutLang();
            const cart = getDetailedCart();
            if (cart.length === 0) {
                alert(t.emptyCartAlert);
                return;
            }

            // جلب المنتجات من Supabase
            const { data: products } = await supabaseClient.from('products').select('*');
            const allProducts = products || [];

            let orderTitles = [];
            cart.forEach(function (item) {
                let p = allProducts.find(function (prod) { return prod.id === item.id; });
                if (p) orderTitles.push(p.title);
            });
            const orderTitleName = orderTitles.length > 0 ? orderTitles.join(' + ') : t.defaultOrderTitle;

            const now = new Date();
            const formattedDate = now.toLocaleDateString('ar-DZ', { year: 'numeric', month: 'long', day: 'numeric' });
            const formattedTime = now.toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit', hour12: true });
            const fullDateTimeStr = formattedDate + ' - ' + formattedTime;

            const name = document.getElementById('clientName').value.trim();
            const phone = document.getElementById('clientPhone').value.trim();
            const stateCode = clientStateSelect.value;
            const shippingData = getShippingData();
            const stateObj = shippingData.find(function (w) { return w.code === stateCode; });
            const stateName = stateObj ? stateObj.name : '';
            const baladiya = clientBaladiyaSelect.value;
            const address = document.getElementById('clientAddress').value.trim();
            const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
            const deliveryTypeStr = deliveryType === 'home' ? 'توصيل للمنزل' : 'توصيل للمكتب';

            const shippingCost = calculateShippingCost();
            const subtotal = await calculateSubtotalFromSupabase();
            const grandTotal = subtotal + shippingCost;
            const totalItemsCount = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);

            const orderIdVal = 'ORD_' + Date.now();

            // كائن معلومات الزبون (يُحفظ داخل عمود client_data)
            const clientInfoObj = {
                name: name,
                phone: phone,
                state: stateName,
                baladiya: baladiya,
                address: address,
                deliveryType: deliveryTypeStr
            };

            // تجهيز كائن الطلب مطابقاً 100% لأعمدة جدول orders في Supabase لديك
            const newOrderRecord = {
                order_id: orderIdVal,
                order_title: orderTitleName,
                full_date_time: fullDateTimeStr,
                client_data: clientInfoObj,
                items: cart,
                items_count: totalItemsCount,
                total_amount: grandTotal.toLocaleString(),
                status: 'قيد التجهيز'
            };

            // إرسال الطلب إلى جدول orders في Supabase
            const { error: insertError } = await supabaseClient
                .from('orders')
                .insert([newOrderRecord]);

            if (insertError) {
                console.error('Error saving order to Supabase:', insertError);
                alert('حدث خطأ أثناء حفظ الطلب في السحابة: ' + insertError.message);
                return;
            }

            // حفظ نسخة محلياً أيضاً
            saveOrder({
                orderId: orderIdVal,
                orderTitle: orderTitleName,
                date: formattedDate,
                time: formattedTime,
                fullDateTime: fullDateTimeStr,
                client: clientInfoObj,
                items: cart,
                itemsCount: totalItemsCount,
                totalAmount: grandTotal.toLocaleString(),
                status: 'قيد التجهيز'
            });

            localStorage.removeItem('cartItems');
            alert(t.thankYouPrefix + name + t.thankYouMid + orderTitleName + t.thankYouId + orderIdVal + t.thankYouSuffix);
            window.location.href = 'index.html';
        });
    }
});

function getDetailedCart() {
    let rawCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (rawCart.length > 0 && typeof rawCart[0] === 'string') {
        let counts = {};
        rawCart.forEach(function (id) { counts[id] = (counts[id] || 0) + 1; });
        let detailed = Object.keys(counts).map(function (id) { return { id: id, qty: counts[id] }; });
        localStorage.setItem('cartItems', JSON.stringify(detailed));
        return detailed;
    }
    return rawCart || [];
}

function initShippingStorage() {
    let stored = localStorage.getItem('algeriaShippingData');
    if (!stored) {
        localStorage.setItem('algeriaShippingData', JSON.stringify(defaultWilayasData));
    }
}

function getShippingData() {
    return JSON.parse(localStorage.getItem('algeriaShippingData')) || defaultWilayasData;
}

function populateWilayas() {
    const stateSelect = document.getElementById('clientState');
    if (!stateSelect) return;

    const t = getCheckoutLang();
    const shippingData = getShippingData();
    stateSelect.innerHTML = '<option value="">' + t.selectWilaya + '</option>';

    shippingData.forEach(function (wilaya) {
        const option = document.createElement('option');
        option.value = wilaya.code;
        option.textContent = wilaya.name;
        stateSelect.appendChild(option);
    });
}

function updateBaladiyasList() {
    const stateSelect = document.getElementById('clientState');
    const baladiyaSelect = document.getElementById('clientBaladiya');
    if (!stateSelect || !baladiyaSelect) return;

    const t = getCheckoutLang();
    const selectedCode = stateSelect.value;
    baladiyaSelect.innerHTML = '<option value="">' + t.selectBaladiya + '</option>';

    if (!selectedCode) return;

    const shippingData = getShippingData();
    const wilayaObj = shippingData.find(function (w) { return w.code === selectedCode; });
    
    if (wilayaObj && wilayaObj.baladiyas) {
        wilayaObj.baladiyas.forEach(function (baladiya) {
            const bName = typeof baladiya === 'string' ? baladiya : baladiya.name;
            const opt = document.createElement('option');
            opt.value = bName;
            opt.textContent = bName;
            baladiyaSelect.appendChild(opt);
        });
    }
}

// حساب المجموع الفرعي للمنتجات بدقة من سحابة Supabase
async function calculateSubtotalFromSupabase() {
    const cart = getDetailedCart();
    if (cart.length === 0) return 0;

    const { data: products, error } = await supabaseClient.from('products').select('*');
    if (error || !products) return 0;

    let subtotal = 0;
    cart.forEach(function (item) {
        let product = products.find(function (p) { return p.id === item.id; });
        if (product && product.price) {
            let priceNum = parseInt(product.price.toString().replace(/[^0-9]/g, '')) || 0;
            subtotal += priceNum * item.qty;
        }
    });

    return subtotal;
}

function calculateShippingCost() {
    const stateSelect = document.getElementById('clientState');
    const baladiyaSelect = document.getElementById('clientBaladiya');
    if (!stateSelect || !stateSelect.value) return 0;

    const selectedCode = stateSelect.value;
    const selectedBaladiyaName = baladiyaSelect ? baladiyaSelect.value : '';
    
    const shippingData = getShippingData();
    const wilayaObj = shippingData.find(function (w) { return w.code === selectedCode; });
    if (!wilayaObj) return 0;

    const deliveryTypeRadio = document.querySelector('input[name="deliveryType"]:checked');
    const deliveryType = deliveryTypeRadio ? deliveryTypeRadio.value : 'home';

    if (selectedBaladiyaName && wilayaObj.baladiyas) {
        const balObj = wilayaObj.baladiyas.find(function (b) {
            return (typeof b === 'object' ? b.name : b) === selectedBaladiyaName;
        });
        if (balObj && typeof balObj === 'object') {
            return deliveryType === 'home' ? Number(balObj.homePrice) : Number(balObj.deskPrice);
        }
    }

    return deliveryType === 'home' ? Number(wilayaObj.homePrice) : Number(wilayaObj.deskPrice);
}

async function loadCheckoutSummary() {
    const listContainer = document.getElementById('checkoutItemsList');
    const cart = getDetailedCart();
    const t = getCheckoutLang();

    if (!listContainer) return;

    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    const { data: products, error } = await supabaseClient.from('products').select('*');
    const allProducts = products || [];

    listContainer.innerHTML = '';
    cart.forEach(function (item) {
        let product = allProducts.find(function (p) { return p.id === item.id; }) || { title: 'منتج محدد', price: '0' };
        let unitPrice = parseInt(product.price.toString().replace(/[^0-9]/g, '')) || 0;
        let totalItemPrice = unitPrice * item.qty;

        const itemRow = document.createElement('div');
        itemRow.className = 'checkout-preview-item';
        itemRow.style.cssText = 'display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #e2e8f0; font-size: 0.95rem;';
        itemRow.innerHTML = 
            '<span>' + product.title + ' (x' + item.qty + ')</span>' +
            '<strong>' + totalItemPrice.toLocaleString() + t.currency + '</strong>';
        listContainer.appendChild(itemRow);
    });

    await calculateCheckoutTotal();
}

async function calculateCheckoutTotal() {
    const t = getCheckoutLang();
    const subtotal = await calculateSubtotalFromSupabase();
    const stateSelect = document.getElementById('clientState');
    
    let shippingCost = 0;
    const shippingElem = document.getElementById('checkoutShipping');
    if (stateSelect && stateSelect.value !== '') {
        shippingCost = calculateShippingCost();
        if (shippingElem) shippingElem.textContent = shippingCost.toLocaleString() + t.currency;
    } else {
        if (shippingElem) shippingElem.textContent = t.selectWilayaFirst;
    }

    const grandTotal = subtotal + shippingCost;

    const subtotalElem = document.getElementById('checkoutSubtotal');
    const grandTotalElem = document.getElementById('checkoutGrandTotal');

    if (subtotalElem) subtotalElem.textContent = subtotal.toLocaleString() + t.currency;
    if (grandTotalElem) grandTotalElem.textContent = grandTotal.toLocaleString() + t.currency;
}

function saveOrder(order) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.unshift(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}