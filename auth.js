document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            // البحث عن المدير مباشرة في جدول admins في Supabase سحابياً
            const { data: admins, error } = await supabaseClient
                .from('admins')
                .select('*')
                .eq('email', email)
                .eq('password', password);

            if (error) {
                console.error('Login error:', error);
                alert('حدث خطأ أثناء الاتصال بقاعدة البيانات.');
                return;
            }

            if (admins && admins.length > 0) {
                const validAdmin = admins[0];
                // تخزين بيانات المدير الحالي في الجلسة المحلية للمتصفح
                localStorage.setItem('currentAdmin', JSON.stringify(validAdmin));
                alert('مرحباً بك مجدداً يا ' + (validAdmin.name || 'مسؤول'));
                window.location.href = 'dashboard.html';
            } else {
                alert('البريد الإلكتروني أو كلمة المرور غير صحيحة!');
            }
        });
    }
});