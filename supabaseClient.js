// بيانات الاتصال السحابي الخاصة بمشروعك على Supabase
const SUPABASE_URL = 'https://luidpivonlptcwhrvcad.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_2qFxxH1ltLCEVqfYpB2yzQ_mphd-s2H';

// تهيئة عميل Supabase
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);