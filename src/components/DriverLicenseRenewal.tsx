import { useState } from "react";
import { ChevronRight, CreditCard, Wallet, CheckCircle2, Download, ArrowRight, Calendar } from "lucide-react";
import riyalSymbol from "figma:asset/c1791bbb598133efcf5af7c631286ebd88fbce63.png";

interface DriverLicenseRenewalProps {
  onBack: () => void;
  walletBalance: number;
  onPaymentComplete: (amount: number) => void;
}

export function DriverLicenseRenewal({ onBack, walletBalance, onPaymentComplete }: DriverLicenseRenewalProps) {
  const [currentStep, setCurrentStep] = useState<'details' | 'payment-method' | 'confirmation' | 'success'>('details');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'wallet' | 'credit' | 'mada' | null>(null);
  const [transactionNumber, setTransactionNumber] = useState('');

  const serviceAmount = 400.00;
  const serviceName = "تجديد رخصة القيادة";

  const handlePayNow = () => {
    setCurrentStep('payment-method');
  };

  const handleConfirmPaymentMethod = () => {
    if (selectedPaymentMethod) {
      setCurrentStep('confirmation');
    }
  };

  const handleConfirmPayment = () => {
    // Generate transaction number
    const txNumber = `TXN${Date.now().toString().slice(-10)}`;
    setTransactionNumber(txNumber);
    
    // Update wallet balance
    if (selectedPaymentMethod === 'wallet') {
      onPaymentComplete(serviceAmount);
    }
    
    setCurrentStep('success');
  };

  const handleDownloadReceipt = () => {
    // Mock download receipt functionality
    alert('سيتم تحميل الإيصال قريباً');
  };

  const handleBackToHome = () => {
    onBack();
  };

  return (
    <div className="min-h-screen bg-[#E8F5F1]" dir="rtl">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[430px] mx-auto px-5 py-4 flex items-center justify-between">
          <button 
            onClick={currentStep === 'success' ? handleBackToHome : onBack}
            className="p-2 -mr-2 active:opacity-70"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-[18px] text-gray-900">{serviceName}</h1>
          <div className="w-6"></div>
        </div>
      </div>

      <div className="max-w-[430px] mx-auto">
        {/* Step 1: Service Details */}
        {currentStep === 'details' && (
          <div className="px-5 py-6">
            {/* Service Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-[24px] bg-white shadow-md flex items-center justify-center">
                <svg className="w-14 h-14 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
            </div>

            {/* Service Information Card */}
            <div className="bg-white rounded-[24px] shadow-sm p-5 mb-5">
              <h2 className="text-[16px] text-gray-900 mb-4 text-right">تفاصيل الخدمة</h2>
              
              <div className="space-y-3">
                {/* Service Name */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">اسم الخدمة</span>
                  <span className="text-[14px] text-gray-900">تجديد رخصة القيادة</span>
                </div>

                {/* License Type */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">نوع الرخصة</span>
                  <span className="text-[14px] text-gray-900">خاصة</span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">مدة التجديد</span>
                  <span className="text-[14px] text-gray-900">5 سنوات</span>
                </div>

                {/* Expiry Date */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">تاريخ الانتهاء</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] text-gray-900">1450/06/15 هـ</span>
                    <Calendar className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Amount */}
                <div className="flex items-center justify-between py-3">
                  <span className="text-[14px] text-gray-500">المبلغ المطلوب</span>
                  <div className="flex items-center gap-2">
                    <img src={riyalSymbol} alt="﷼" className="w-4 h-5 object-contain mix-blend-multiply opacity-70" />
                    <span className="text-[20px] text-[#1E7C6F]">{serviceAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-blue-50 rounded-[20px] p-4 mb-6">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div className="flex-1 text-right">
                  <p className="text-[12px] text-blue-900 leading-[1.6]">
                    سيتم تجديد رخصة القيادة تلقائياً بعد إتمام الدفع. يمكنك تحميل الرخصة الجديدة من قسم الوثائق الرقمية.
                  </p>
                </div>
              </div>
            </div>

            {/* Pay Now Button */}
            <button
              onClick={handlePayNow}
              className="w-full bg-[#1E7C6F] hover:bg-[#175F54] text-white rounded-[16px] py-4 px-6 flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-[0.98]"
            >
              <span className="text-[16px]">ادفع الآن</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Step 2: Payment Method Selection */}
        {currentStep === 'payment-method' && (
          <div className="px-5 py-6">
            <h2 className="text-[18px] text-gray-900 mb-5 text-right">اختر طريقة الدفع</h2>

            {/* Digital Wallet Option */}
            <button
              onClick={() => setSelectedPaymentMethod('wallet')}
              className={`w-full bg-white rounded-[20px] shadow-sm p-5 mb-3 text-right transition-all ${
                selectedPaymentMethod === 'wallet' 
                  ? 'ring-2 ring-[#1E7C6F] shadow-md' 
                  : 'hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[14px] bg-[#E8F5F1] flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-[#1E7C6F]" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-[15px] text-gray-900 mb-0.5">المحفظة الإلكترونية</h3>
                    <p className="text-[12px] text-gray-500">الدفع الفوري من رصيدك</p>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedPaymentMethod === 'wallet'
                    ? 'border-[#1E7C6F] bg-[#1E7C6F]'
                    : 'border-gray-300'
                }`}>
                  {selectedPaymentMethod === 'wallet' && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  )}
                </div>
              </div>
              
              {/* Available Balance */}
              <div className="bg-gradient-to-br from-[#E8F5F1] to-[#D1EDE6] rounded-[16px] p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={riyalSymbol} alt="﷼" className="w-4 h-5 object-contain mix-blend-multiply opacity-70" />
                    <span className="text-[18px] text-[#1E7C6F]">{walletBalance.toFixed(2)}</span>
                  </div>
                  <span className="text-[12px] text-gray-600">الرصيد المتاح</span>
                </div>
              </div>

              {/* Insufficient Balance Warning */}
              {walletBalance < serviceAmount && (
                <div className="mt-3 bg-red-50 rounded-[12px] p-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[11px] text-red-800">الرصيد غير كافٍ</span>
                </div>
              )}
            </button>

            {/* Credit Card Option */}
            <button
              onClick={() => setSelectedPaymentMethod('credit')}
              className={`w-full bg-white rounded-[20px] shadow-sm p-5 mb-3 text-right transition-all ${
                selectedPaymentMethod === 'credit' 
                  ? 'ring-2 ring-[#1E7C6F] shadow-md' 
                  : 'hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[14px] bg-purple-50 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-[15px] text-gray-900 mb-0.5">بطاقة ائتمان</h3>
                    <p className="text-[12px] text-gray-500">Visa, Mastercard, Amex</p>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedPaymentMethod === 'credit'
                    ? 'border-[#1E7C6F] bg-[#1E7C6F]'
                    : 'border-gray-300'
                }`}>
                  {selectedPaymentMethod === 'credit' && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  )}
                </div>
              </div>
            </button>

            {/* Mada Option */}
            <button
              onClick={() => setSelectedPaymentMethod('mada')}
              className={`w-full bg-white rounded-[20px] shadow-sm p-5 mb-6 text-right transition-all ${
                selectedPaymentMethod === 'mada' 
                  ? 'ring-2 ring-[#1E7C6F] shadow-md' 
                  : 'hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[14px] bg-cyan-50 flex items-center justify-center">
                    <svg className="w-7 h-7 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  <div className="text-right">
                    <h3 className="text-[15px] text-gray-900 mb-0.5">مدى</h3>
                    <p className="text-[12px] text-gray-500">بطاقات الخصم السعودية</p>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedPaymentMethod === 'mada'
                    ? 'border-[#1E7C6F] bg-[#1E7C6F]'
                    : 'border-gray-300'
                }`}>
                  {selectedPaymentMethod === 'mada' && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  )}
                </div>
              </div>
            </button>

            {/* Confirm Button */}
            <button
              onClick={handleConfirmPaymentMethod}
              disabled={!selectedPaymentMethod || (selectedPaymentMethod === 'wallet' && walletBalance < serviceAmount)}
              className={`w-full rounded-[16px] py-4 px-6 flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-[0.98] ${
                selectedPaymentMethod && !(selectedPaymentMethod === 'wallet' && walletBalance < serviceAmount)
                  ? 'bg-[#1E7C6F] hover:bg-[#175F54] text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span className="text-[16px]">المتابعة</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Step 3: Payment Confirmation */}
        {currentStep === 'confirmation' && (
          <div className="px-5 py-6">
            <h2 className="text-[18px] text-gray-900 mb-5 text-right">تأكيد الدفع</h2>

            {/* Transaction Summary Card */}
            <div className="bg-white rounded-[24px] shadow-sm p-5 mb-5">
              <h3 className="text-[16px] text-gray-900 mb-4 text-right">ملخص العملية</h3>
              
              <div className="space-y-3">
                {/* Service */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">الخدمة</span>
                  <span className="text-[14px] text-gray-900">{serviceName}</span>
                </div>

                {/* Payment Method */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">طريقة الدفع</span>
                  <span className="text-[14px] text-gray-900">
                    {selectedPaymentMethod === 'wallet' && 'المحفظة الإلكترونية'}
                    {selectedPaymentMethod === 'credit' && 'بطاقة ائتمان'}
                    {selectedPaymentMethod === 'mada' && 'مدى'}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">التاريخ</span>
                  <span className="text-[14px] text-gray-900" dir="ltr">
                    {new Date().toLocaleDateString('ar-SA', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>

                {/* Time */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">الوقت</span>
                  <span className="text-[14px] text-gray-900" dir="ltr">
                    {new Date().toLocaleTimeString('ar-SA', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>

                {/* Amount to Pay */}
                <div className="flex items-center justify-between py-3">
                  <span className="text-[14px] text-gray-500">المبلغ الإجمالي</span>
                  <div className="flex items-center gap-2">
                    <img src={riyalSymbol} alt="﷼" className="w-4 h-5 object-contain mix-blend-multiply opacity-70" />
                    <span className="text-[20px] text-[#1E7C6F]">{serviceAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wallet Balance After Payment (if using wallet) */}
            {selectedPaymentMethod === 'wallet' && (
              <div className="bg-gradient-to-br from-[#E8F5F1] to-[#D1EDE6] rounded-[20px] p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={riyalSymbol} alt="﷼" className="w-4 h-5 object-contain mix-blend-multiply opacity-70" />
                    <span className="text-[18px] text-[#1E7C6F]">{(walletBalance - serviceAmount).toFixed(2)}</span>
                  </div>
                  <span className="text-[12px] text-gray-600">الرصيد بعد الدفع</span>
                </div>
              </div>
            )}

            {/* Security Notice */}
            <div className="bg-green-50 rounded-[20px] p-4 mb-6">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="flex-1 text-right">
                  <p className="text-[12px] text-green-900 leading-[1.6]">
                    عمليتك محمية ومشفرة بأعلى معايير الأمان. جميع المعلومات سرية وآمنة.
                  </p>
                </div>
              </div>
            </div>

            {/* Confirm Payment Button */}
            <button
              onClick={handleConfirmPayment}
              className="w-full bg-[#1E7C6F] hover:bg-[#175F54] text-white rounded-[16px] py-4 px-6 flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-[0.98]"
            >
              <span className="text-[16px]">تأكيد الدفع</span>
              <CheckCircle2 className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Step 4: Success Screen */}
        {currentStep === 'success' && (
          <div className="px-5 py-6">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-14 h-14 text-green-600" />
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center mb-6">
              <h2 className="text-[20px] text-gray-900 mb-2">تمت العملية بنجاح!</h2>
              <p className="text-[14px] text-gray-600">تم تجديد رخصة القيادة وخصم المبلغ</p>
            </div>

            {/* Transaction Details Card */}
            <div className="bg-white rounded-[24px] shadow-sm p-5 mb-5">
              <div className="space-y-3">
                {/* Transaction Number */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">رقم العملية</span>
                  <span className="text-[14px] text-gray-900 font-mono" dir="ltr">{transactionNumber}</span>
                </div>

                {/* Service */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">الخدمة</span>
                  <span className="text-[14px] text-gray-900">{serviceName}</span>
                </div>

                {/* Amount Paid */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">المبلغ المدفوع</span>
                  <div className="flex items-center gap-2">
                    <img src={riyalSymbol} alt="﷼" className="w-4 h-5 object-contain mix-blend-multiply opacity-70" />
                    <span className="text-[18px] text-[#1E7C6F]">{serviceAmount.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-[14px] text-gray-500">طريقة الدفع</span>
                  <span className="text-[14px] text-gray-900">
                    {selectedPaymentMethod === 'wallet' && 'المحفظة الإلكترونية'}
                    {selectedPaymentMethod === 'credit' && 'بطاقة ائتمان'}
                    {selectedPaymentMethod === 'mada' && 'مدى'}
                  </span>
                </div>

                {/* Date & Time */}
                <div className="flex items-center justify-between py-3">
                  <span className="text-[14px] text-gray-500">التاريخ والوقت</span>
                  <span className="text-[13px] text-gray-900" dir="ltr">
                    {new Date().toLocaleString('ar-SA', { 
                      year: 'numeric', 
                      month: 'numeric', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Updated Wallet Balance (if paid with wallet) */}
            {selectedPaymentMethod === 'wallet' && (
              <div className="bg-gradient-to-br from-[#E8F5F1] to-[#D1EDE6] rounded-[20px] p-4 mb-5">
                <div className="text-center mb-2">
                  <p className="text-[12px] text-gray-600 mb-1">رصيد المحفظة الحالي</p>
                  <div className="flex items-center justify-center gap-2">
                    <img src={riyalSymbol} alt="﷼" className="w-5 h-6 object-contain mix-blend-multiply opacity-70" />
                    <span className="text-[28px] text-[#1E7C6F]">{(walletBalance - serviceAmount).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Download Receipt */}
              <button
                onClick={handleDownloadReceipt}
                className="w-full bg-white border-2 border-[#1E7C6F] text-[#1E7C6F] rounded-[16px] py-4 px-6 flex items-center justify-center gap-2 transition-colors hover:bg-[#E8F5F1] active:scale-[0.98]"
              >
                <span className="text-[16px]">تحميل الإيصال</span>
                <Download className="w-5 h-5" />
              </button>

              {/* Back to Home */}
              <button
                onClick={handleBackToHome}
                className="w-full bg-[#1E7C6F] hover:bg-[#175F54] text-white rounded-[16px] py-4 px-6 flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-[0.98]"
              >
                <span className="text-[16px]">العودة للرئيسية</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Info Notice */}
            <div className="mt-5 bg-blue-50 rounded-[16px] p-4">
              <p className="text-[12px] text-blue-900 text-center leading-[1.6]">
                يمكنك الآن تحميل رخصة القيادة المجددة من قسم الوثائق الرقمية
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
