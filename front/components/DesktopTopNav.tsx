'use client'

import { User, Bell, Grid3x3, Book, Share2, LogIn } from "lucide-react";
import Image from "next/image";

interface DesktopTopNavProps {
  onNotificationClick: () => void;
}

export function DesktopTopNav({ onNotificationClick }: DesktopTopNavProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-2.5">
        <div className="flex items-center justify-between">
          {/* Right - Vision 2030 */}
          <div className="flex items-center">
            <Image 
              src="/assets/fda363a41951d8f8db100b0d2dc87beb2ca66465.png"
              alt="رؤية 2030" 
              width={100}
              height={48}
              className="h-12 object-contain"
              unoptimized
            />
          </div>

          {/* Center - Navigation Icons */}
          <nav className="flex items-center gap-3">
            <button className="flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors">
              <LogIn className="w-5 h-5 text-[#1E7C6F]" />
              <span className="text-[11px] text-gray-700">تسجيل الدخول</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-[14px] text-[#1E7C6F]">English</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors">
              <Book className="w-5 h-5 text-[#1E7C6F]" />
              <span className="text-[11px] text-gray-700">دليل الخدمات</span>
            </button>

            <button 
              onClick={onNotificationClick}
              className="flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors relative"
            >
              <Bell className="w-5 h-5 text-[#1E7C6F]" />
              <span className="text-[11px] text-gray-700">الاشعارات</span>
              <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <button className="flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors">
              <Share2 className="w-5 h-5 text-[#1E7C6F]" />
              <span className="text-[11px] text-gray-700">تفعيل معلومات</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors">
              <Grid3x3 className="w-5 h-5 text-[#1E7C6F]" />
              <span className="text-[11px] text-gray-700">لوحة المعلومات</span>
            </button>
          </nav>

          {/* Left - Ministry Logo */}
          <div className="flex items-center gap-4">
            <Image src="/assets/59146a0de59733b1b8e18bea395729bf235530c3.png" alt="وزارة الداخلية" width={56} height={56} className="h-14 w-14 object-contain" unoptimized />
          </div>
        </div>
      </div>
    </header>
  );
}