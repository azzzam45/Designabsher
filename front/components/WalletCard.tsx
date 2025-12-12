'use client'

import { useState } from "react";
import Image from "next/image";
import { PaymentSheet } from "./PaymentSheet";
import { WithdrawalSheet } from "./WithdrawalSheet";

export function WalletCard({ balance }: { balance: number }) {
  const [isPaymentSheetOpen, setIsPaymentSheetOpen] = useState(false);
  const [isWithdrawalSheetOpen, setIsWithdrawalSheetOpen] = useState(false);

  return (
    <>
      <div className="mx-5 bg-white rounded-[24px] shadow-sm p-5 mb-5">
        {/* Wallet Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {/* Wallet Icon */}
            <div className="w-11 h-11 rounded-[14px] bg-[#E8F5F1] flex items-center justify-center">
              <svg className="w-6 h-6 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-[16px] text-gray-900">المحفظة الإلكترونية</h3>
        </div>

        {/* Balance Display */}
        <div className="bg-gradient-to-br from-[#E8F5F1] to-[#D1EDE6] rounded-[20px] p-4 mb-4">
          <p className="text-[12px] text-gray-600 mb-1 text-right">الرصيد المتاح</p>
          <div className="flex items-center justify-end gap-2">
            {/* Saudi Riyal Symbol */}
            <Image src="/assets/c1791bbb598133efcf5af7c631286ebd88fbce63.png" alt="﷼" width={20} height={24} className="w-5 h-6 object-contain mix-blend-multiply opacity-70" unoptimized />
            <span className="text-[28px] text-[#1E7C6F]" suppressHydrationWarning>{balance.toFixed(2)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          {/* Deposit Button */}
          <button 
            onClick={() => setIsPaymentSheetOpen(true)}
            className="bg-[#1E7C6F] hover:bg-[#175F54] rounded-[16px] py-3.5 px-4 flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-white text-[14px]">إيداع</span>
          </button>

          {/* Withdraw Button */}
          <button 
            onClick={() => setIsWithdrawalSheetOpen(true)}
            className="bg-white hover:bg-gray-50 border-2 border-[#1E7C6F] rounded-[16px] py-3.5 px-4 flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
            <span className="text-[#1E7C6F] text-[14px]">سحب</span>
          </button>
        </div>
      </div>

      <PaymentSheet 
        isOpen={isPaymentSheetOpen}
        onClose={() => setIsPaymentSheetOpen(false)}
      />

      <WithdrawalSheet 
        isOpen={isWithdrawalSheetOpen}
        onClose={() => setIsWithdrawalSheetOpen(false)}
      />
    </>
  );
}