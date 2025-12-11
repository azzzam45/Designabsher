import { Search, Calendar, Users, User, Car, UserCircle, ChevronLeft as ChevronLeftIcon, ChevronRight, Plane, FileCheck, CreditCard, ShieldCheck } from "lucide-react";
import { useState } from "react";
import profilePic from "figma:asset/0642d415cbb71d7b958ef3c986259478afe852ca.png";
import riyalSymbol from "figma:asset/c1791bbb598133efcf5af7c631286ebd88fbce63.png";
import { PaymentSheet } from "./PaymentSheet";
import { WithdrawalSheet } from "./WithdrawalSheet";

interface DesktopMainContentProps {
  onServiceClick?: (service: string) => void;
  walletBalance?: number;
}

export function DesktopMainContent({ onServiceClick, walletBalance = 2450.00 }: DesktopMainContentProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaymentSheetOpen, setIsPaymentSheetOpen] = useState(false);
  const [isWithdrawalSheetOpen, setIsWithdrawalSheetOpen] = useState(false);

  const quickAccessServices = [
    { id: 1, label: 'تجديد رخصة القيادة', icon: CreditCard, action: 'driver-license' },
    { id: 2, label: 'مواعيد', icon: Calendar, action: null },
    { id: 3, label: 'العمالة', icon: Users, action: null },
    { id: 4, label: 'المركبات', icon: Car, action: null },
    { id: 5, label: 'شخصاتي', icon: UserCircle, action: null },
  ];

  const otherServices = [
    [
      { id: 1, label: 'إصدار شهادة ذوي سوابق', icon: FileCheck, badge: true },
      { id: 2, label: 'تقرير أثير', icon: FileCheck, badge: false },
      { id: 3, label: 'متابعة المركبات', icon: Car, badge: false },
      { id: 4, label: 'مزاد اللوحات الإلكتروني', icon: CreditCard, badge: false },
      { id: 5, label: 'إيقاف الخدمات وقيود السفر', icon: ShieldCheck, badge: false },
    ],
    [
      { id: 6, label: 'خدمة السفر', icon: Plane, badge: false },
      { id: 7, label: 'الخدمات الإلكترونية', icon: FileCheck, badge: false },
      { id: 8, label: 'الاستعلامات', icon: FileCheck, badge: false },
      { id: 9, label: 'التفاويض', icon: Users, badge: false },
      { id: 10, label: 'المدفوعات', icon: CreditCard, badge: false },
    ],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % otherServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + otherServices.length) % otherServices.length);
  };

  return (
    <>
      <main className="flex-1 bg-[#F5F5F5] p-6">
        <div className="max-w-[1100px] mx-auto">
          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-sm mb-6 p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="اكتب هنا للبحث"
                className="w-full bg-[#F5F5F5] rounded-lg px-12 py-3 text-right text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1E7C6F]/30"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1E7C6F] text-white px-4 py-1.5 rounded-md text-[13px] hover:bg-[#175F54] transition-colors">
                بحث
              </button>
            </div>
          </div>

          {/* Profile Card & Wallet - Two Columns */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Wallet Card */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              {/* Wallet Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[16px] text-gray-900">المحفظة الإلكترونية</h3>
                
                <div className="flex items-center gap-2">
                  {/* Wallet Icon */}
                  <div className="w-11 h-11 rounded-[14px] bg-[#E8F5F1] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Balance Display */}
              <div className="bg-gradient-to-br from-[#E8F5F1] to-[#D1EDE6] rounded-[20px] p-4 mb-4">
                <p className="text-[12px] text-gray-600 mb-1 text-right">الرصيد المتاح</p>
                <div className="flex items-center justify-end gap-2">
                  {/* Saudi Riyal Symbol */}
                  <img src={riyalSymbol} alt="﷼" className="w-5 h-6 object-contain mix-blend-multiply opacity-70" />
                  <span className="text-[28px] text-[#1E7C6F]">{walletBalance.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {/* Deposit Button */}
                <button 
                  onClick={() => setIsPaymentSheetOpen(true)}
                  className="bg-[#1E7C6F] hover:bg-[#175F54] rounded-[16px] py-3 px-4 flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-white text-[14px]">إيداع</span>
                </button>

                {/* Withdraw Button */}
                <button 
                  onClick={() => setIsWithdrawalSheetOpen(true)}
                  className="bg-white hover:bg-gray-50 border-2 border-[#1E7C6F] rounded-[16px] py-3 px-4 flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="w-5 h-5 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  <span className="text-[#1E7C6F] text-[14px]">سحب</span>
                </button>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between">
              <button className="w-8 h-8 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              
              <div className="flex-1 text-right mr-3">
                <h1 className="text-[16px] text-gray-900 mb-0.5">علي صالح</h1>
                <p className="text-[13px] text-gray-500">رقم الهوية: 1120167843</p>
              </div>

              <div className="w-[58px] h-[58px] rounded-[18px] overflow-hidden bg-gray-100 flex-shrink-0">
                <img 
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quick Access Services */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
            <div className="grid grid-cols-5 gap-6">
              {quickAccessServices.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-20 h-20 rounded-full bg-[#E8F5F1] flex items-center justify-center hover:bg-[#D1EDE6] transition-colors cursor-pointer">
                    <service.icon className="w-10 h-10 text-[#1E7C6F]" />
                  </div>
                  <button 
                    onClick={() => onServiceClick?.(service.action || service.label)}
                    className="bg-[#1E7C6F] text-white px-8 py-2.5 rounded-xl text-[13px] hover:bg-[#175F54] transition-colors w-full"
                  >
                    {service.label}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Other Services Carousel */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] flex-1 bg-gray-200" />
              <h2 className="text-[16px] text-gray-700">خدمات أخرى</h2>
              <div className="h-[1px] flex-1 bg-gray-200" />
            </div>

            {/* Carousel */}
            <div className="relative">
              <button
                onClick={prevSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
              </button>

              <div className="overflow-hidden px-1">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(${currentSlide * 100}%)` }}
                >
                  {otherServices.map((slideServices, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-5 gap-5">
                      {slideServices.map((service) => (
                        <button
                          key={service.id}
                          className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-200 hover:border-[#1E7C6F] hover:bg-[#F9F9F9] transition-all group relative"
                        >
                          {service.badge && (
                            <span className="absolute top-3 left-3 w-2.5 h-2.5">
                              <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
                              <span className="absolute inset-0 bg-red-500 rounded-full" />
                            </span>
                          )}
                          <div className="w-16 h-16 rounded-full bg-[#E8F5F1] flex items-center justify-center group-hover:bg-[#D1EDE6] transition-colors">
                            <service.icon className="w-8 h-8 text-[#1E7C6F]" />
                          </div>
                          <span className="text-[13px] text-gray-700 text-center leading-snug min-h-[36px] flex items-center">
                            {service.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {otherServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-[#1E7C6F] w-6' : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Payment Sheet */}
      <PaymentSheet isOpen={isPaymentSheetOpen} onClose={() => setIsPaymentSheetOpen(false)} isDesktop={true} />

      {/* Withdrawal Sheet */}
      <WithdrawalSheet isOpen={isWithdrawalSheetOpen} onClose={() => setIsWithdrawalSheetOpen(false)} />
    </>
  );
}