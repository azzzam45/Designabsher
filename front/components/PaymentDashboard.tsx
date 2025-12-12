'use client'

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PaymentBalance {
  category: string;
  amount: number;
}

export function PaymentDashboard() {
  const [isExpanded, setIsExpanded] = useState(true);

  // Example payment balances by category
  const paymentBalances: PaymentBalance[] = [
    { category: 'رصيد المرور', amount: 150.00 },
    { category: 'رصيد الجوازات', amount: 100.00 },
    { category: 'رصيد الأحوال المدنية', amount: 50.00 },
  ];

  const totalBalance = paymentBalances.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="mx-5 bg-white rounded-[24px] shadow-sm p-5 mb-5" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[16px] text-gray-900">رصيد المدفوعات</h3>
      </div>

      {/* Total Balance Card */}
      <div className="bg-gradient-to-br from-[#E8F5F1] to-[#D1EDE6] rounded-[20px] p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[12px] bg-white/50 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] text-[#1E7C6F] mb-0.5">الرصيد الاجمالي</p>
              <div className="flex items-center gap-1.5">
                <Image src="/assets/c1791bbb598133efcf5af7c631286ebd88fbce63.png" alt="﷼" width={14} height={16} className="w-3.5 h-4 object-contain mix-blend-multiply opacity-70" unoptimized />
                <span className="text-[20px] text-[#1E7C6F] font-semibold">{totalBalance.toFixed(0)}</span>
                <span className="text-[14px] text-[#1E7C6F]">ر.س</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Balance Section */}
      <div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between mb-3"
        >
          <h4 className="text-[14px] text-[#1E7C6F] font-medium">الرصيد التفصيلي</h4>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-[#1E7C6F]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#1E7C6F]" />
          )}
        </button>

        {isExpanded && (
          <div className="space-y-0">
            {paymentBalances.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between py-3 ${
                  index !== paymentBalances.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className="text-[14px] text-gray-700">{item.category}</span>
                <div className="flex items-center gap-1.5">
                  <Image src="/assets/c1791bbb598133efcf5af7c631286ebd88fbce63.png" alt="﷼" width={12} height={14} className="w-3 h-3.5 object-contain mix-blend-multiply opacity-70" unoptimized />
                  <span className="text-[14px] text-gray-700">{item.amount.toFixed(0)}</span>
                  <span className="text-[12px] text-gray-500">ر.س</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Transactions Section */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <h4 className="text-[14px] text-gray-700 mb-3">آخر المعاملات</h4>
        <div className="space-y-2">
          {/* Example Transaction 1 */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] text-gray-900">إيداع</p>
                <p className="text-[11px] text-gray-500">من المرور</p>
              </div>
            </div>
            <div className="text-left">
              <p className="text-[13px] text-green-600 font-medium">+150.00 ر.س</p>
              <p className="text-[11px] text-gray-400">منذ ساعتين</p>
            </div>
          </div>

          {/* Example Transaction 2 */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] text-gray-900">دفع</p>
                <p className="text-[11px] text-gray-500">تجديد رخصة القيادة</p>
              </div>
            </div>
            <div className="text-left">
              <p className="text-[13px] text-red-600 font-medium">-400.00 ر.س</p>
              <p className="text-[11px] text-gray-400">منذ 3 أيام</p>
            </div>
          </div>

          {/* Example Transaction 3 */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] text-gray-900">دفع</p>
                <p className="text-[11px] text-gray-500">جواز سفر</p>
              </div>
            </div>
            <div className="text-left">
              <p className="text-[13px] text-red-600 font-medium">-200.00 ر.س</p>
              <p className="text-[11px] text-gray-400">منذ أسبوع</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

