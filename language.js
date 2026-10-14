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