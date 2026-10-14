document.addEventListener('DOMContentLoaded', function () {
    initializeDefaultAdmin();

    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            let admins = JSON.parse(localStorage.getItem('shopAdmins')) || [];
            let validAdmin = admins.find(a => a.email === email && a.password === password);

            if (validAdmin) {
                // تحديث بيانات المدير الحالي في الجلسة لضمان بقاء صلاحياته محدثة
                localStorage.setItem('currentAdmin', JSON.stringify(validAdmin));
                alert(`مرحباً بك مجدداً يا ${validAdmin.name}`);
                window.location.href = 'dashboard.html';
            } else {
                alert('البريد الإلكتروني أو كلمة المرور غير صحيحة!');
            }
        });
    }
});

function initializeDefaultAdmin() {
    let admins = JSON.parse(localStorage.getItem('shopAdmins')) || [];
    if (admins.length === 0) {
        admins.push({
            id: 'adm_default',
            name: 'المدير الرئيسي',
            email: 'admin@shopdz.com',
            password: '123456',
            isMain: true,        // المدير الأساسي للمتجر
            canAddAdmins: true   // يمتلك صلاحية إضافة مسؤولين
        });
        localStorage.setItem('shopAdmins', JSON.stringify(admins));
    } else {
        // للتأكد من أن المدير القديم يمتلك الخصائص الجديدة
        if (admins[0] && !admins[0].hasOwnProperty('isMain')) {
            admins[0].isMain = true;
            admins[0].canAddAdmins = true;
            localStorage.setItem('shopAdmins', JSON.stringify(admins));
        }
    }
}