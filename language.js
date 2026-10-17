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
// ميزة إظهار وإخفاء كلمة المرور (عين واحدة فقط ولا تؤثر على تسجيل الدخول)
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
        input.dataset.eyeAttached = 'true';

        const parent = input.parentElement;
        if (!parent) return;
        parent.style.position = 'relative';

        input.style.paddingRight = '40px';

        const eyeIcon = document.createElement('span');
        eyeIcon.innerHTML = '👁️';
        eyeIcon.title = 'إظهار / إخفاء كلمة المرور';
        eyeIcon.style.cssText = 'position: absolute; right: 12px; bottom: 10px; cursor: pointer; font-size: 1.15rem; user-select: none; z-index: 20; line-height: 1;';

        eyeIcon.addEventListener('click', function () {
            if (input.type === 'password') {
                input.type = 'text';
                eyeIcon.innerHTML = '🙈';
            } else {
                input.type = 'password';
                eyeIcon.innerHTML = '👁️';
            }
        });

        parent.appendChild(eyeIcon);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSafePasswordToggle);
} else {
    initSafePasswordToggle();
}