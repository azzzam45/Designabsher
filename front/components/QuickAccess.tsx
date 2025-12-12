'use client'

export function QuickAccess({ onServiceClick }: { onServiceClick?: (service: string) => void }) {
  return (
    <div className="px-5 mt-7">
      {/* Section Title */}
      <h2 className="text-[16px] text-gray-900 mb-3.5 text-right">الوصول السريع</h2>

      {/* Featured Service - My Vehicles */}
      <div className="bg-white rounded-[20px] shadow-sm p-4 flex items-center gap-3 mb-3">
        <div className="w-[60px] h-[60px] rounded-[18px] bg-[#E8F5F1] flex items-center justify-center flex-shrink-0">
          <svg className="w-9 h-9 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM21 18a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </div>
        <div className="flex-1 text-right">
          <h3 className="text-[15px] text-gray-900 mb-1">مركباتي</h3>
          <p className="text-[11.5px] text-gray-500 leading-[1.4]">
            عرض التفاصيل، تجديد الوثائق، الإبلاغ عن الحوادث، والمزيد.
          </p>
        </div>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Driver's License Renewal */}
        <button 
          onClick={() => onServiceClick?.('driver-license')}
          className="bg-white rounded-[20px] shadow-sm p-4 flex flex-col items-center justify-center min-h-[140px] active:scale-95 transition-transform"
        >
          <div className="w-[60px] h-[60px] rounded-[18px] bg-[#E8F5F1] flex items-center justify-center mb-3">
            <svg className="w-9 h-9 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 className="text-[13px] text-gray-900 text-center">تجديد رخصة القيادة</h3>
        </button>

        {/* Government Payments */}
        <button 
          onClick={() => onServiceClick?.('payments')}
          className="bg-white rounded-[20px] shadow-sm p-4 flex flex-col items-center justify-center min-h-[140px] active:scale-95 transition-transform"
        >
          <div className="w-[60px] h-[60px] rounded-[18px] bg-[#E8F5F1] flex items-center justify-center mb-3">
            <svg className="w-9 h-9 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-[13px] text-gray-900 text-center">المدفوعات الحكومية</h3>
        </button>

        {/* Absher Travel */}
        <div className="bg-white rounded-[20px] shadow-sm p-4 flex flex-col items-center justify-center min-h-[140px]">
          <div className="w-[60px] h-[60px] rounded-[18px] bg-[#E8F5F1] flex items-center justify-center mb-3">
            <svg className="w-9 h-9 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 className="text-[13px] text-gray-900 text-center">أبشر سفر</h3>
        </div>

        {/* Authentication Services */}
        <div className="bg-white rounded-[20px] shadow-sm p-4 flex flex-col items-center justify-center min-h-[140px]">
          <div className="w-[60px] h-[60px] rounded-[18px] bg-[#E8F5F1] flex items-center justify-center mb-3">
            <svg className="w-9 h-9 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h3 className="text-[13px] text-gray-900 text-center">خدمات التوثيق</h3>
        </div>

        {/* Minor Accident Report */}
        <div className="bg-white rounded-[20px] shadow-sm p-4 flex flex-col items-center justify-center min-h-[140px]">
          <div className="w-[60px] h-[60px] rounded-[18px] bg-[#E8F5F1] flex items-center justify-center mb-3">
            <svg className="w-9 h-9 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-[13px] text-gray-900 text-center">تسجيل حادث بسيط</h3>
        </div>

        {/* Traffic Violations */}
        <div className="bg-white rounded-[20px] shadow-sm p-4 flex flex-col items-center justify-center min-h-[140px]">
          <div className="w-[60px] h-[60px] rounded-[18px] bg-[#E8F5F1] flex items-center justify-center mb-3">
            <svg className="w-9 h-9 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-[13px] text-gray-900 text-center">المخالفات المرورية</h3>
        </div>
      </div>

      {/* My Weapons Card */}
      <div className="mt-3 bg-white rounded-[20px] shadow-sm p-4 flex items-center gap-3">
        <div className="w-[60px] h-[60px] rounded-[18px] bg-[#E8F5F1] flex items-center justify-center flex-shrink-0">
          <svg className="w-9 h-9 text-[#1E7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="flex-1 text-right">
          <h3 className="text-[15px] text-gray-900 mb-1">اسلحتي</h3>
          <p className="text-[11.5px] text-gray-500 leading-[1.4]">
            عرض تفاصيل الأسلحة وإصدار وعرض تصاريح نقل السلاح
          </p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#1E7C6F] flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}