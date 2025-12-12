'use client'

import { X } from "lucide-react";
import { useState } from "react";

interface PaymentSheetProps {
  isOpen: boolean;
  onClose: () => void;
  isDesktop?: boolean;
}

type PaymentMethod = "applepay" | "card" | "mada" | null;

export function PaymentSheet({ isOpen, onClose, isDesktop = false }: PaymentSheetProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);
  const [amount, setAmount] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Card details state
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardName, setCardName] = useState("");

  const handleClose = () => {
    setSelectedMethod(null);
    setAmount("");
    setCardNumber("");
    setCardExpiry("");
    setCardCVV("");
    setCardName("");
    setShowSuccess(false);
    onClose();
  };

  const handleDeposit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  const isFormValid = () => {
    if (!selectedMethod || !amount) return false;
    
    if (selectedMethod === "card" || selectedMethod === "mada") {
      return cardNumber.length >= 16 && cardExpiry.length >= 5 && cardCVV.length >= 3 && cardName.length > 0;
    }
    
    return true;
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(' ') : cleaned;
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-[70] animate-slide-up">
        <div className="bg-white rounded-t-[32px] shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 rounded-t-[32px]">
            <div className="flex items-center justify-between">
              <button 
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={22} className="text-gray-600" />
              </button>
              <h2 className="text-[18px] text-gray-900">إيداع رصيد</h2>
              <div className="w-9" /> {/* Spacer for centering */}
            </div>
          </div>

          {/* Content */}
          <div className="px-5 py-6" dir="rtl">
            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-[14px] text-gray-700 mb-2 text-right">
                المبلغ المراد إيداعه
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-[#F5F5F5] rounded-[16px] px-4 py-4 text-right text-[18px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E7C6F]/20 transition-all"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <img src="/assets/c1791bbb598133efcf5af7c631286ebd88fbce63.png" alt="﷼" className="w-4 h-5 object-contain mix-blend-multiply opacity-70" />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <h3 className="text-[14px] text-gray-700 mb-3 text-right">
                طريقة الدفع
              </h3>
              
              {/* Apple Pay - Only show on mobile */}
              {!isDesktop && (
                <button
                  onClick={() => setSelectedMethod("applepay")}
                  className={`w-full bg-white border-2 rounded-[20px] p-4 mb-3 transition-all ${
                    selectedMethod === "applepay" 
                      ? "border-[#1E7C6F] bg-[#E8F5F1]/30" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Radio Button */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedMethod === "applepay" 
                          ? "border-[#1E7C6F]" 
                          : "border-gray-300"
                      }`}>
                        {selectedMethod === "applepay" && (
                          <div className="w-3 h-3 rounded-full bg-[#1E7C6F]" />
                        )}
                      </div>
                      
                      {/* Apple Pay Logo */}
                      <div className="flex items-center gap-1.5">
                        <svg className="h-7" viewBox="0 0 48 20" fill="currentColor">
                          <path d="M8.9 3.8c.5-.6 1-1.6.8-2.5-.8 0-1.8.5-2.4 1.2-.5.6-1 1.5-.8 2.4.9 0 1.8-.5 2.4-1.1zM11.4 5.9c-1.3-.1-2.4.7-3 .7s-1.5-.7-2.6-.6c-1.3 0-2.5.7-3.2 1.9-1.4 2.4-.4 5.9 1 7.9.7.9 1.5 2 2.6 2 1-.1 1.5-.7 2.6-.7s1.6.7 2.6.6c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-1.4-.5-2.2-2-2.2-3.9.1-1.5.9-2.8 2.2-3.5-.8-1.2-2.1-1.9-3.6-2.1z"/>
                          <path d="M21 15.8v-11h3.5c2.1 0 3.5 1.4 3.5 3.4s-1.4 3.4-3.5 3.4h-2v4.2h-1.5zm1.5-5.5h1.8c1.4 0 2.2-.8 2.2-2.1s-.8-2.1-2.2-2.1h-1.8v4.2z"/>
                          <path d="M28.5 13.4c0-1.5 1.1-2.4 3-2.5l2.2-.1v-.6c0-.9-.6-1.4-1.6-1.4-.9 0-1.5.4-1.6 1.1h-1.4c.1-1.3 1.3-2.3 3.1-2.3 1.9 0 3 1 3 2.6v5.6h-1.4v-1.3h0c-.4.9-1.4 1.5-2.4 1.5-1.5 0-2.9-1-2.9-2.6zm5.2-.8v-.6l-2 .1c-1.1.1-1.7.5-1.7 1.3s.7 1.2 1.5 1.2c1.3 0 2.2-.8 2.2-2z"/>
                          <path d="M36.8 18c-.1-1.2-.1-1.6-.1-2.3v-8.1h1.4v1.3h0c.4-.9 1.3-1.5 2.5-1.5 1.9 0 3.1 1.5 3.1 3.9s-1.2 3.9-3.2 3.9c-1.1 0-2-.6-2.4-1.4h0v4.2h-1.3zm1.3-6.8c0 1.6.8 2.6 2.1 2.6s2.1-1 2.1-2.6-.8-2.6-2.1-2.6-2.1 1-2.1 2.6z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <span className="text-[14px] text-gray-900">Apple Pay</span>
                  </div>
                </button>
              )}

              {/* Credit/Debit Card */}
              <button
                onClick={() => setSelectedMethod("card")}
                className={`w-full bg-white border-2 rounded-[20px] p-4 mb-3 transition-all ${
                  selectedMethod === "card" 
                    ? "border-[#1E7C6F] bg-[#E8F5F1]/30" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Radio Button */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedMethod === "card" 
                        ? "border-[#1E7C6F]" 
                        : "border-gray-300"
                    }`}>
                      {selectedMethod === "card" && (
                        <div className="w-3 h-3 rounded-full bg-[#1E7C6F]" />
                      )}
                    </div>
                    
                    {/* Card Icons */}
                    <div className="flex items-center gap-2">
                      {/* Visa */}
                      <svg className="h-5" viewBox="0 0 48 16" fill="none">
                        <rect width="48" height="16" rx="2" fill="#1434CB"/>
                        <path d="M18.5 11.8l2.2-7.6h2.1l-2.2 7.6h-2.1zM27.8 4.4c-.4-.2-1.1-.3-1.9-.3-2.1 0-3.5 1.1-3.6 2.7 0 1.2 1.1 1.8 1.9 2.2.8.4 1.1.6 1.1 1 0 .5-.7.8-1.3.8-1 0-1.4-.1-2.2-.5l-.3-.1-.3 1.9c.5.2 1.5.4 2.5.4 2.3 0 3.8-1.1 3.8-2.8 0-.9-.5-1.6-1.7-2.2-.7-.4-1.2-.6-1.2-1s.4-.7 1.2-.7c.7 0 1.2.1 1.6.3l.2.1.3-1.8zM32.9 10.8c.2 0 1.9-5.3 1.9-6.6h-1.9c-.2 0-.4.1-.5.4l-2.8 6.2h2.3l.5-1.3h2.8c.1.3.2 1.3.2 1.3h2l-1.7-7.6zm-2.4-3l1.1 2.9h-1.8l.7-2.9zM15.3 4.2l-2 5.2-.2-1.1c-.4-1.2-1.5-2.6-2.8-3.3l1.9 7h2.3l3.4-7.8h-2.6z" fill="white"/>
                        <path d="M12.2 4.2H8.3l0 .2c2.8.7 4.6 2.4 5.4 4.4l-.8-3.8c-.1-.4-.4-.7-.8-.8z" fill="#FAA61A"/>
                      </svg>
                      
                      {/* Mastercard */}
                      <svg className="h-5" viewBox="0 0 32 20" fill="none">
                        <circle cx="12" cy="10" r="8" fill="#EB001B"/>
                        <circle cx="20" cy="10" r="8" fill="#F79E1B"/>
                        <path d="M16 4.6c1.4 1.3 2.3 3.2 2.3 5.4s-.9 4.1-2.3 5.4c-1.4-1.3-2.3-3.2-2.3-5.4s.9-4.1 2.3-5.4z" fill="#FF5F00"/>
                      </svg>
                    </div>
                  </div>
                  
                  <span className="text-[14px] text-gray-900">بطاقة ائتمان / خصم</span>
                </div>
              </button>

              {/* Mada */}
              <button
                onClick={() => setSelectedMethod("mada")}
                className={`w-full bg-white border-2 rounded-[20px] p-4 transition-all ${
                  selectedMethod === "mada" 
                    ? "border-[#1E7C6F] bg-[#E8F5F1]/30" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Radio Button */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedMethod === "mada" 
                        ? "border-[#1E7C6F]" 
                        : "border-gray-300"
                    }`}>
                      {selectedMethod === "mada" && (
                        <div className="w-3 h-3 rounded-full bg-[#1E7C6F]" />
                      )}
                    </div>
                    
                    {/* Mada Logo */}
                    <div className="px-3 py-1 bg-[#00A651] rounded" dir="ltr">
                      <span className="text-white text-[11px] tracking-wider">mada</span>
                    </div>
                  </div>
                  
                  <span className="text-[14px] text-gray-900">بطاقة مدى</span>
                </div>
              </button>
            </div>

            {/* Card Details Form */}
            {(selectedMethod === "card" || selectedMethod === "mada") && (
              <div className="mb-6">
                <div className="mb-3">
                  <label className="block text-[14px] text-gray-700 mb-2 text-right">
                    رقم البطاقة
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    placeholder="1234 5678 9012 3456"
                    className="w-full bg-[#F5F5F5] rounded-[16px] px-4 py-4 text-right text-[18px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E7C6F]/20 transition-all"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-[14px] text-gray-700 mb-2 text-right">
                    تاريخ انتهاء الصلاحية
                  </label>
                  <input
                    type="text"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                    placeholder="MM/YY"
                    className="w-full bg-[#F5F5F5] rounded-[16px] px-4 py-4 text-right text-[18px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E7C6F]/20 transition-all"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-[14px] text-gray-700 mb-2 text-right">
                    رقم التحقق (CVV)
                  </label>
                  <input
                    type="text"
                    value={cardCVV}
                    onChange={(e) => setCardCVV(e.target.value)}
                    placeholder="123"
                    className="w-full bg-[#F5F5F5] rounded-[16px] px-4 py-4 text-right text-[18px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E7C6F]/20 transition-all"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-[14px] text-gray-700 mb-2 text-right">
                    اسم صاحب البطاقة
                  </label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="اسمك الكامل"
                    className="w-full bg-[#F5F5F5] rounded-[16px] px-4 py-4 text-right text-[18px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E7C6F]/20 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Confirm Button */}
            <button
              disabled={!isFormValid()}
              onClick={handleDeposit}
              className={`w-full rounded-[16px] py-4 text-[16px] transition-all ${
                isFormValid()
                  ? "bg-[#1E7C6F] hover:bg-[#175F54] text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              متابعة الدفع
            </button>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-6 bg-green-50 rounded-[16px] p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[18px] text-green-700 mb-1">تم الإيداع بنجاح!</h3>
                <p className="text-[14px] text-green-600">تم إضافة {amount} ريال إلى محفظتك</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}