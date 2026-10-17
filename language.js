document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
});

function initLanguage() {
    // جلب اللغة المحفوظة أو الاعتماد على العربية كافتراضي
    const savedLang = localStorage.getItem('shopLang') || 'ar';
    setLanguage(savedLang);

    // ربط قائمة اختيار اللغة في الهيدر
    const langSelector = document.getElementById('languageSelector');
    if (langSelector) {
        langSelector.value = savedLang;
        langSelector.addEventListener('change', function () {
            setLanguage(this.value);
            // إعادة تحميل الصفحة لتطبيق التغييرات بشكل كامل ومتناسق
            window.location.reload();
        });
    }
}

function setLanguage(lang) {
    localStorage.setItem('shopLang', lang);
    
    // ضبط اتجاه الصفحة واللغة في وسم <html>
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('lang', lang);
    
    if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl'); // من اليمين لليسار
    } else {
        htmlTag.setAttribute('dir', 'ltr'); // انعكاس الاتجاه تماماً (من اليسار لليمين مثل الإنجليزية والفرنسية)
    }

    updatePageTexts(lang);
}

function updatePageTexts(lang) {
    const t = translations[lang] || translations['ar'];
    
    // تحديث كل عنصر يحتوي على سمة data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
}
// =========================================================
// ميزة إظهار وإخفاء كلمة المرور (تعمل تلقائياً في كل الصفحات)
// =========================================================
function initGlobalPasswordToggle() {
    const passInputs = document.querySelectorAll('input[type="password"]');
    
    passInputs.forEach(function (input) {
        // إذا تم إضافة الزر مسبقاً لهذا الحقل، نتخطاه
        if (input.dataset.hasEyeToggle === 'true') return;
        input.dataset.hasEyeToggle = 'true';

        // إنشاء حاوية تحيط بحقل كلمة المرور
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'position: relative; display: flex; align-items: center; width: 100%;';

        // وضع الحاوية مكان الحقل، ثم نقل الحقل بداخلها
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);

        // ضبط مساحة داخل الحقل لكي لا يغطي النص على رمز العين
        input.style.paddingRight = '40px';
        input.style.paddingLeft = '40px';
        input.style.width = '100%';
        input.style.boxSizing = 'border-box';

        // إنشاء زر العين
        const eyeBtn = document.createElement('button');
        eyeBtn.type = 'button';
        eyeBtn.innerHTML = '👁️';
        eyeBtn.title = 'إظهار / إخفاء كلمة المرور';
        eyeBtn.style.cssText = 'position: absolute; right: 10px; background: transparent; border: none; cursor: pointer; font-size: 1.15rem; padding: 0; line-height: 1; z-index: 99; display: flex; align-items: center; justify-content: center; user-select: none;';

        // عند الضغط على العين يتم تبديل النوع بين password و text
        eyeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (input.type === 'password') {
                input.type = 'text';
                eyeBtn.innerHTML = '🙈'; // رمز إخفاء كلمة المرور
            } else {
                input.type = 'password';
                eyeBtn.innerHTML = '👁️'; // رمز إظهار كلمة المرور
            }
        });

        wrapper.appendChild(eyeBtn);
    });
}

// تشغيل الدالة فور فتح أي صفحة + فحص مستمر لأي حقل يظهر لاحقاً
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalPasswordToggle);
} else {
    initGlobalPasswordToggle();
}
setInterval(initGlobalPasswordToggle, 500);