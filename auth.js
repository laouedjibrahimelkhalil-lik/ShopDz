document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const emailInput = document.getElementById('loginEmail');
            const passwordInput = document.getElementById('loginPassword');

            if (!emailInput || !passwordInput) return;

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            // جلب المسؤول من Supabase بناءً على البريد الإلكتروني فقط أولاً
            const { data: admins, error } = await supabaseClient
                .from('admins')
                .select('*')
                .eq('email', email);

            if (error) {
                console.error('Login database error:', error);
                alert('حدث خطأ أثناء الاتصال بقاعدة البيانات.');
                return;
            }

            if (admins && admins.length > 0) {
                const matchedAdmin = admins[0];

                // التحقق من مطابقة كلمة المرور (مع دعم مقارنة النصوص والأرقام)
                if (String(matchedAdmin.password).trim() === String(password)) {
                    localStorage.setItem('currentAdmin', JSON.stringify(matchedAdmin));
                    alert('مرحباً بك مجدداً يا ' + (matchedAdmin.name || 'مسؤول'));
                    window.location.href = 'dashboard.html';
                } else {
                    alert('كلمة المرور غير صحيحة!');
                }
            } else {
                alert('البريد الإلكتروني غير مسجل في النظام!');
            }
        });
    }
});