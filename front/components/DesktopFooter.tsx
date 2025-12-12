import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export function DesktopFooter() {
  return (
    <footer className="bg-[#1E7C6F] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-5 gap-8 mb-8">
          {/* Column 1 - Logo */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl p-4 mb-3">
              <div className="text-[#1E7C6F] text-center">
                <div className="text-[32px] leading-none mb-1">|||||||</div>
                <div className="text-[11px]">920020405</div>
              </div>
            </div>
          </div>

          {/* Column 2 - روابط مهمة */}
          <div>
            <h3 className="text-[14px] mb-4 border-b border-white/20 pb-2">روابط مهمة</h3>
            <ul className="space-y-2 text-[12px] text-white/90">
              <li><a href="#" className="hover:text-white transition-colors">بوابة وزارة الداخلية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">البوابة الوطنية الموحدة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الخدمة المدنية والتأمينات الاجتماعية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">البيانات المفتوحة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">بوابة المشاركة الإلكترونية</a></li>
            </ul>
          </div>

          {/* Column 3 - المساعدة والدعم */}
          <div>
            <h3 className="text-[14px] mb-4 border-b border-white/20 pb-2">المساعدة والدعم</h3>
            <ul className="space-y-2 text-[12px] text-white/90">
              <li><a href="#" className="hover:text-white transition-colors">تعمل بنا</a></li>
              <li><a href="#" className="hover:text-white transition-colors">بلاغ عن مشكلة (باراء)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">خريطة الموقع</a></li>
              <li><a href="#" className="hover:text-white transition-colors">قنوات تعزيز القيم الوطنية الرقمية</a></li>
            </ul>
          </div>

          {/* Column 4 - عن منصة أبشر */}
          <div>
            <h3 className="text-[14px] mb-4 border-b border-white/20 pb-2">عن منصة أبشر</h3>
            <ul className="space-y-2 text-[12px] text-white/90">
              <li><a href="#" className="hover:text-white transition-colors">عن أبشر</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الاتجاه</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الشاملة لمستوى الخدمة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">أدوات سهولة الوصول</a></li>
              <li><a href="#" className="hover:text-white transition-colors">بطاقات إحصائية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">أمن المعلومات</a></li>
            </ul>
          </div>

          {/* Column 5 - وسائل التواصل الاجتماعي */}
          <div>
            <h3 className="text-[14px] mb-4 border-b border-white/20 pb-2">وسائل التواصل الاجتماعي</h3>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <h3 className="text-[14px] mb-3">أدوات المساعدة</h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-[12px]">
                أ
              </button>
              <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-[14px]">
                أ
              </button>
              <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-[16px]">
                أ
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-4 flex items-center justify-between text-[11px] text-white/80">
          <div className="flex items-center gap-6">
            <span>خريطة الموقع</span>
            <span>التقويم</span>
          </div>
          <div>
            <span>جميع الحقوق محفوظة لمنصة أبشر. المملكة العربية السعودية © 2025م - 1447هـ</span>
          </div>
          <div>
            <span>تطوير و تشغيل مركز المعلومات الوطني</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
