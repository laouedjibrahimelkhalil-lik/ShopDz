document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initSafePasswordToggle();
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
// ميزة إظهار وإخفاء كلمة المرور (تتمركز في اليمين بدقة ودون تأثير على الدخول)
// =========================================================
const hideBrowserEyeStyle = document.createElement('style');
hideBrowserEyeStyle.innerHTML = `
    input[type="password"]::-ms-reveal,
    input[type="password"]::-ms-clear {
        display: none !important;
    }
`;
document.head.appendChild(hideBrowserEyeStyle);

function initSafePasswordToggle() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');

    passwordInputs.forEach(function (input) {
        if (input.dataset.eyeAttached === 'true') return;
        if (input.parentElement && input.parentElement.classList.contains('password-input-wrapper')) return;
        
        input.dataset.eyeAttached = 'true';

        // إنشاء حاوية تحيط بحقل الإدخال وحده لضمان تمركز العين داخله تماماً
        const wrapper = document.createElement('div');
        wrapper.className = 'password-input-wrapper';
        wrapper.style.cssText = 'position: relative; display: flex; align-items: center; width: 100%;';

        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);

        // ضبط المساحة الداخلية للأنبوت لكي لا يختفي النص تحت العين
        input.style.paddingRight = '42px';
        input.style.paddingLeft = '12px';
        input.style.width = '100%';
        input.style.boxSizing = 'border-box';

        const eyeIcon = document.createElement('span');
        eyeIcon.innerHTML = '👁️';
        eyeIcon.title = 'إظهار / إخفاء كلمة المرور';
        // وضع العين في الجهة اليمنى (right) لتناسب الواجهة العربية RTL
        eyeIcon.style.cssText = 'position: absolute; right: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; font-size: 1.15rem; user-select: none; z-index: 20; line-height: 1;';

        eyeIcon.addEventListener('click', function (e) {
            e.preventDefault();
            if (input.type === 'password') {
                input.type = 'text';
                eyeIcon.innerHTML = '🙈';
            } else {
                input.type = 'password';
                eyeIcon.innerHTML = '👁️';
            }
        });

        wrapper.appendChild(eyeIcon);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSafePasswordToggle);
} else {
    initSafePasswordToggle();
}