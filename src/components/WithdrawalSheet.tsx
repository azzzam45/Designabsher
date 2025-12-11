import { X, AlertCircle, Building2, CheckCircle2, Shield, Clock, ArrowDownToLine } from "lucide-react";
import { useState } from "react";
import riyalSymbol from "figma:asset/c1791bbb598133efcf5af7c631286ebd88fbce63.png";

interface WithdrawalSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "amount" | "confirm" | "success";

export function WithdrawalSheet({ isOpen, onClose }: WithdrawalSheetProps) {
  const [step, setStep] = useState<Step>("amount");
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  const availableBalance = 2450.0;
  const minWithdrawal = 100;
  const maxWithdrawal = 5000;

  // Pre-linked bank account information
  const linkedAccount = {
    accountName: "علي صالح محمد",
    iban: "SA44 2000 0001 2345 6789 1234",
    bankName: "مصرف الراجحي"
  };

  const isAmountValid = amount && parseFloat(amount) >= minWithdrawal && parseFloat(amount) <= maxWithdrawal && parseFloat(amount) <= availableBalance;

  const quickAmounts = [100, 200, 500, 1000];

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString());
  };

  const handleContinue = () => {
    if (step === "amount" && isAmountValid) {
      setStep("confirm");
    }
  };

  const handleConfirm = () => {
    setStep("success");
    setTimeout(() => {
      // Reset and close after showing success
      setTimeout(() => {
        setStep("amount");
        setAmount("");
        onClose();
      }, 2500);
    }, 100);
  };

  const generateRefNumber = () => {
    return `WD${Date.now().toString().slice(-8)}`;
  };

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
          <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 rounded-t-[32px] z-10">
            <div className="flex items-center justify-between">
              <button 
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={22} className="text-gray-600" />
              </button>
              <div className="flex items-center gap-2">
                <ArrowDownToLine size={20} className="text-[#1E7C6F]" />
                <h2 className="text-[18px] text-gray-900">سحب رصيد</h2>
              </div>
              <div className="w-9" /> {/* Spacer for centering */}
            </div>
            
            {/* Progress Steps */}
            {step !== "success" && (
              <div className="flex items-center justify-center gap-2 mt-4" dir="rtl">
                <div className={`flex items-center gap-1.5 transition-all ${step === "amount" ? "opacity-100 scale-105" : "opacity-40 scale-100"}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] transition-all ${
                    step === "amount" ? "bg-[#D1EDE6] text-[#1E7C6F] shadow-md" : "bg-[#D1EDE6] text-[#1E7C6F]"
                  }`}>
                    {step === "confirm" ? "✓" : "1"}
                  </div>
                  <span className="text-[12px] text-gray-700">المبلغ</span>
                </div>
              
                <div className={`h-[2px] w-16 transition-all ${step === "confirm" ? "bg-[#D1EDE6]" : "bg-gray-200"}`} />
              
                <div className={`flex items-center gap-1.5 transition-all ${step === "confirm" ? "opacity-100 scale-105" : "opacity-40 scale-100"}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] transition-all ${
                    step === "confirm" ? "bg-[#D1EDE6] text-[#1E7C6F] shadow-md" : "bg-gray-200 text-gray-600"
                  }`}>
                    2
                  </div>
                  <span className="text-[12px] text-gray-700">التأكيد</span>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="px-5 py-6" dir="rtl">
            {/* Step 1: Amount */}
            {step === "amount" && (
              <div className="animate-fade-in">
                {/* Available Balance */}
                <div className="relative bg-[#D1EDE6] rounded-[24px] p-5 mb-5 overflow-hidden">
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-[12px] text-[#1E7C6F]/70">الرصيد المتاح للسحب</p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <img src={riyalSymbol} alt="﷼" className="w-6 h-7 object-contain mix-blend-multiply opacity-60" />
                      <span className="text-[32px] text-[#1E7C6F]">{availableBalance.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Linked Account Info */}
                <div className="bg-[#F5F5F5] rounded-[20px] p-4 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 size={16} className="text-[#1E7C6F]" />
                    <span className="text-[12px] text-gray-600">الحساب المربوط</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-gray-900">{linkedAccount.accountName}</span>
                      <span className="text-[11px] text-gray-500">الاسم</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-gray-900 font-mono" dir="ltr">{linkedAccount.iban}</span>
                      <span className="text-[11px] text-gray-500">الآيبان</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-gray-900">{linkedAccount.bankName}</span>
                      <span className="text-[11px] text-gray-500">البنك</span>
                    </div>
                  </div>
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                  <label className="block text-[14px] text-gray-700 mb-3 text-right flex items-center justify-end gap-2">
                    <span>المبلغ المراد سحبه</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1E7C6F]" />
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-gradient-to-br from-[#F5F5F5] to-[#FAFAFA] rounded-[20px] px-5 py-5 text-right text-[24px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E7C6F]/30 focus:shadow-lg transition-all"
                    />
                    <div className="absolute left-5 top-1/2 -translate-y-1/2">
                      <img src={riyalSymbol} alt="﷼" className="w-5 h-6 object-contain mix-blend-multiply opacity-50" />
                    </div>
                  </div>
                  
                  {/* Quick Amount Buttons */}
                  <div className="grid grid-cols-4 gap-2 mt-3">
                    {quickAmounts.map((quickAmount) => (
                      <button
                        key={quickAmount}
                        onClick={() => handleQuickAmount(quickAmount)}
                        className={`rounded-[12px] py-2.5 text-[13px] transition-all ${
                          amount === quickAmount.toString()
                            ? "bg-[#1E7C6F] text-white shadow-md"
                            : "bg-white border border-gray-200 text-gray-700 hover:border-[#1E7C6F] hover:text-[#1E7C6F]"
                        }`}
                      >
                        {quickAmount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notice */}
                <div className="bg-gradient-to-br from-[#FFF9E6] to-[#FFFBF0] border border-[#F5C842]/30 rounded-[20px] p-4 mb-6 flex gap-3 shadow-sm">
                  <AlertCircle size={20} className="text-[#D4A017] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[12px] text-gray-700 leading-relaxed text-right">
                      سيتم تحويل المبلغ إلى حسابك البنكي المرتبط فورًا.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleContinue}
                  disabled={!isAmountValid}
                  className={`w-full rounded-[18px] py-4 text-[16px] transition-all ${
                    isAmountValid
                      ? "bg-[#1E7C6F] hover:bg-[#175F54] text-white shadow-md"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                  }`}
                >
                  التالي
                </button>
              </div>
            )}

            {/* Step 2: Confirmation */}
            {step === "confirm" && (
              <div className="animate-fade-in">
                <div className="mb-6">
                  {/* Success Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E8F5F1] to-[#D1EDE6] flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full bg-[#1E7C6F]/10 animate-ping" />
                      <CheckCircle2 size={40} className="text-[#1E7C6F] relative z-10" />
                    </div>
                  </div>

                  <h3 className="text-[18px] text-gray-900 mb-2 text-center">
                    مراجعة تفاصيل طلب السحب
                  </h3>
                  <p className="text-[12px] text-gray-500 mb-6 text-center">
                    تأكد من صحة البيانات قبل إتمام العملية
                  </p>

                  {/* Transaction Details */}
                  <div className="bg-gradient-to-br from-[#F5F5F5] to-[#FAFAFA] rounded-[24px] p-5 mb-4 space-y-4 shadow-sm">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <img src={riyalSymbol} alt="﷼" className="w-4 h-5 object-contain mix-blend-multiply opacity-70" />
                        <span className="text-[16px] text-gray-900">{parseFloat(amount).toFixed(2)}</span>
                      </div>
                      <span className="text-[13px] text-gray-600">المبلغ</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-[14px] text-gray-900">{linkedAccount.accountName}</span>
                      <span className="text-[13px] text-gray-600">اسم المستفيد</span>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-[13px] text-gray-900 text-left font-mono" dir="ltr">{linkedAccount.iban}</span>
                      <span className="text-[13px] text-gray-600">رقم الآيبان</span>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-[14px] text-gray-900">{linkedAccount.bankName}</span>
                      <span className="text-[13px] text-gray-600">البنك</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] text-[#1E7C6F]">مجاني</span>
                      <span className="text-[13px] text-gray-600">رسوم التحويل</span>
                    </div>
                  </div>

                  {/* Final Notice */}
                  <div className="bg-[#F5F5F5] rounded-[16px] p-4 mb-6">
                    <p className="text-[12px] text-gray-600 leading-relaxed text-right">
                      سيتم تحويل المبلغ إلى حسابك البنكي المرتبط
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep("amount")}
                    className="flex-1 rounded-[16px] py-4 text-[16px] bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    رجوع
                  </button>
                  <button
                    onClick={handleConfirm}
                    className="flex-1 rounded-[16px] py-4 text-[16px] bg-[#1E7C6F] hover:bg-[#175F54] text-white transition-all"
                  >
                    تأكيد الطلب
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success */}
            {step === "success" && (
              <div className="animate-fade-in py-8">
                {/* Success Animation */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1E7C6F] to-[#2A9D8F] flex items-center justify-center animate-scale-in shadow-2xl shadow-[#1E7C6F]/40">
                      <CheckCircle2 size={50} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-[#1E7C6F]/30 animate-ping" />
                  </div>
                </div>

                <h3 className="text-[22px] text-gray-900 mb-2 text-center">
                  تم تقديم الطلب بنجاح
                </h3>
                <p className="text-[13px] text-gray-500 mb-8 text-center px-6">
                  سيتم تحويل المبلغ إلى حسابك البنكي المرتبط.
                </p>

                {/* Reference Number */}
                <div className="bg-gradient-to-br from-[#E8F5F1] to-[#D1EDE6] rounded-[20px] p-5 mb-6 text-center">
                  <p className="text-[11px] text-gray-600 mb-2">رقم المرجع</p>
                  <p className="text-[20px] text-[#1E7C6F] font-mono tracking-wider">{generateRefNumber()}</p>
                </div>

                {/* Amount Summary */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <img src={riyalSymbol} alt="﷼" className="w-6 h-7 object-contain mix-blend-multiply opacity-70" />
                  <span className="text-[32px] text-gray-900">{parseFloat(amount).toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-[12px] text-gray-500">
                  <Clock size={14} className="text-gray-400" />
                  <span>سيتم إشعارك عند إتمام التحويل</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
}