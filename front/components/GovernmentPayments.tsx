'use client'

import { CreditCard, FileText, RotateCcw, ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

export function GovernmentPayments({ onBack }: { onBack?: () => void }) {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState("علي صالح");
  const [showDetailedBalance, setShowDetailedBalance] = useState(false);

  return (
    <div className="bg-[#F5F5F5] min-h-screen w-full pb-20">
      {/* Mobile Header - only show on mobile */}
      {onBack && (
        <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
            <h1 className="text-[15px] text-gray-900">المدفوعات الحكومية</h1>
            <div className="w-9"></div>
          </div>
        </div>
      )}

      {/* Tabs - hidden on mobile when onBack exists */}
      <div className={`bg-white border-b border-gray-200 ${onBack ? 'hidden' : 'block'} lg:block`}>
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex gap-4 sm:gap-8 overflow-x-auto">
            <button className="py-3 sm:py-4 px-2 border-b-2 border-[#1E7C6F] text-[#1E7C6F] text-[13px] sm:text-[14px] whitespace-nowrap">
              المدفوعات الحكومية
            </button>
            <button className="py-3 sm:py-4 px-2 text-gray-600 text-[13px] sm:text-[14px] hover:text-gray-900 whitespace-nowrap">
              المدفوعات الإلكترونية
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 py-4 sm:max-w-[1100px] sm:mx-auto sm:p-6">
        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mb-4">
          <h2 className="text-[15px] sm:text-[18px] text-gray-900 mb-2 text-right">مرحبا بك في خدمة المدفوعات الحكومية</h2>
          <p className="text-[12px] sm:text-[14px] text-gray-600 leading-relaxed mb-3 text-right">
            تتيح لك هذه الخدمة إمكانية سداد رسوم الخدمات الحكومية للمواطنين والمقيمين عن أنفسهم أو عن أفراد العائلة
          </p>
          <a href="#" className="text-[#1E7C6F] text-[12px] sm:text-[14px] hover:underline inline-block text-right">
            الأسئلة الشائعة لخدمة المدفوعات
          </a>

          {/* Beneficiary Selector */}
          <div className="mt-4">
            <label className="block text-[12px] sm:text-[13px] text-gray-700 mb-2 text-right">
              اختر المستفيد <span className="text-red-500">*</span> <span className="text-gray-500">(اختيار الرصيد)</span>
            </label>
            <div className="relative">
              <select
                value={selectedBeneficiary}
                onChange={(e) => setSelectedBeneficiary(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-[13px] sm:text-[14px] text-gray-900 text-right appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1E7C6F]/30"
                dir="rtl"
              >
                <option value="علي صالح">علي صالح</option>
              </select>
              <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Balance Section */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mb-4">
          <h3 className="text-[14px] sm:text-[16px] text-gray-900 mb-3 text-right">رصيد المدفوعات</h3>

          {/* Total Balance */}
          <div className="bg-[#E8F5F1] rounded-lg p-3 sm:p-4 mb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[22px] sm:text-[24px] text-[#1E7C6F]">300</span>
                <span className="text-[14px] sm:text-[16px] text-gray-600">ر.س</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] sm:text-[14px] text-gray-700">الرصيد الاجمالي</span>
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#1E7C6F]" />
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Balance Toggle */}
          <button
            onClick={() => setShowDetailedBalance(!showDetailedBalance)}
            className="w-full flex items-center justify-between py-2.5 px-3 sm:px-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <ChevronDown className={`w-4 h-4 text-[#1E7C6F] transition-transform ${showDetailedBalance ? 'rotate-180' : ''}`} />
            <span className="text-[13px] sm:text-[14px] text-[#1E7C6F]">الرصيد التفصيلي</span>
          </button>

          {showDetailedBalance && (
            <div className="mt-3 space-y-2 px-3 sm:px-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-[13px] sm:text-[14px] text-gray-900">150 ر.س</span>
                <span className="text-[12px] sm:text-[13px] text-gray-600">رصيد المرور</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-[13px] sm:text-[14px] text-gray-900">100 ر.س</span>
                <span className="text-[12px] sm:text-[13px] text-gray-600">رصيد الجوازات</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-[13px] sm:text-[14px] text-gray-900">50 ر.س</span>
                <span className="text-[12px] sm:text-[13px] text-gray-600">رصيد الأحوال المدنية</span>
              </div>
            </div>
          )}
        </div>

        {/* Service Cards */}
        <div className="mb-4">
          <h3 className="text-[14px] sm:text-[16px] text-gray-900 mb-3 text-right">خدمة المدفوعات الحكومية</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Pay New Fees */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-[#1E7C6F] hover:shadow-md transition-shadow">
              <div className="flex flex-col items-end">
                <div className="w-12 h-12 rounded-xl bg-[#E8F5F1] flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-[#1E7C6F]" />
                </div>
                <h4 className="text-[15px] text-gray-900 mb-2">دفع رسوم جديدة</h4>
                <p className="text-[13px] text-gray-600 text-right mb-4 leading-relaxed">
                  دفع رسوم جديدة لخدمة داخل منصة أبشر أو سداد مخالفات مرورية
                </p>
                <button className="flex items-center gap-2 text-[#1E7C6F] text-[13px] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" />
                  <span>بدء الخدمة</span>
                </button>
              </div>
            </div>

            {/* Transactions Record */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-end">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                <h4 className="text-[15px] text-gray-900 mb-2">سجل العمليات</h4>
                <p className="text-[13px] text-gray-600 text-right mb-4 leading-relaxed">
                  عرض سجل عمليات الدفع والاسترداد للمدفوعات الحكومية
                </p>
                <button className="flex items-center gap-2 text-[#1E7C6F] text-[13px] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" />
                  <span>بدء الخدمة</span>
                </button>
              </div>
            </div>

            {/* Request Refund */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-end">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <RotateCcw className="w-6 h-6 text-gray-600" />
                </div>
                <h4 className="text-[15px] text-gray-900 mb-2">طلب استرداد</h4>
                <p className="text-[13px] text-gray-600 text-right mb-4 leading-relaxed">
                  يتم طلب استرداد المبلغ المدفوع بشكل خاطئ
                </p>
                <button className="flex items-center gap-2 text-[#1E7C6F] text-[13px] hover:gap-3 transition-all">
                  <ArrowRight className="w-4 h-4" />
                  <span>بدء الخدمة</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}