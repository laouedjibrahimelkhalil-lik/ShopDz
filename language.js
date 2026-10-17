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
// ميزة إظهار وإخفاء كلمة المرور (عين واحدة آمنة وسريعة)
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

        // ترك مساحة في الجهة اليسرى أو اليمنى حسب اتجاه الحقل
        input.style.paddingLeft = '42px';

        const eyeIcon = document.createElement('span');
        eyeIcon.innerHTML = '👁️';
        eyeIcon.title = 'إظهار / إخفاء كلمة المرور';
        // وضع أيقونة العين في الجانب الأيسر داخل الحقل (لأن الحقول ltr)
        eyeIcon.style.cssText = 'position: absolute; left: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; font-size: 1.1rem; user-select: none; z-index: 20; line-height: 1;';

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

        parent.appendChild(eyeIcon);
    });
}

// دالة مساعدة في حال تم استدعاؤها يوماً من الـ HTML مباشرة
function togglePasswordVisibility(fieldId, btnElement) {
    const passwordInput = document.getElementById(fieldId);
    if (!passwordInput) return;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        btnElement.innerHTML = '🙈';
    } else {
        passwordInput.type = 'password';
        btnElement.innerHTML = '👁️';
    }
}