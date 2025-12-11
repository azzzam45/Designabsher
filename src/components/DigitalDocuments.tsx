export function DigitalDocuments() {
  return (
    <div className="px-5">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-3.5">
        <button className="text-[#1E7C6F] text-[13px]">عرض الكل</button>
        <h2 className="text-[16px] text-gray-900">وثائقي الرقمية</h2>
      </div>

      {/* Document Cards */}
      <div className="flex gap-2.5 overflow-x-auto pb-2 -mx-5 px-5" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* National ID - Green (Rightmost in RTL) */}
        <div className="min-w-[135px] h-[165px] rounded-[24px] bg-gradient-to-br from-[#C8F5E0] to-[#80E8B8] p-3.5 flex flex-col items-center justify-between relative overflow-hidden shadow-sm flex-shrink-0">
          {/* Saudi Emblem Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12]">
            <svg className="w-32 h-32 text-[#059669]" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="48"/>
              <circle cx="50" cy="35" r="12" fill="white"/>
              <path d="M35 50 L35 75 L50 72 L65 75 L65 50 Z" fill="white"/>
              <rect x="28" y="77" width="44" height="6" rx="1" fill="white"/>
            </svg>
          </div>
          
          <div className="w-full flex justify-center mt-1 relative z-10">
            <div className="w-[68px] h-[68px] rounded-[18px] bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-10 h-10 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-center relative z-10 text-[#059669] text-[14px] pb-1">هوية مواطن</h3>
        </div>

        {/* Passport - Purple (Center) */}
        <div className="min-w-[135px] h-[165px] rounded-[24px] bg-gradient-to-br from-[#E0D4FF] to-[#B8A0F5] p-3.5 flex flex-col items-center justify-between relative overflow-hidden shadow-sm flex-shrink-0">
          {/* Saudi Emblem Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12]">
            <svg className="w-32 h-32 text-[#7C3AED]" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="48"/>
              <circle cx="50" cy="35" r="12" fill="white"/>
              <path d="M35 50 L35 75 L50 72 L65 75 L65 50 Z" fill="white"/>
              <rect x="28" y="77" width="44" height="6" rx="1" fill="white"/>
            </svg>
          </div>
          
          <div className="w-full flex justify-center mt-1 relative z-10">
            <div className="w-[68px] h-[68px] rounded-[18px] bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-10 h-10 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-center relative z-10 text-[#7C3AED] text-[14px] pb-1">جواز السفر</h3>
        </div>

        {/* Driver's License - Cyan (Leftmost in RTL) */}
        <div className="min-w-[135px] h-[165px] rounded-[24px] bg-gradient-to-br from-[#B8F0F0] to-[#70D6E8] p-3.5 flex flex-col items-center justify-between relative overflow-hidden shadow-sm flex-shrink-0">
          {/* Saudi Emblem Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12]">
            <svg className="w-32 h-32 text-[#0891B2]" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="48"/>
              <circle cx="50" cy="35" r="12" fill="white"/>
              <path d="M35 50 L35 75 L50 72 L65 75 L65 50 Z" fill="white"/>
              <rect x="28" y="77" width="44" height="6" rx="1" fill="white"/>
            </svg>
          </div>
          
          <div className="w-full flex justify-center mt-1 relative z-10">
            <div className="w-[68px] h-[68px] rounded-[18px] bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-10 h-10 text-[#0891B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-center relative z-10 text-[#0891B2] text-[14px] pb-1">رخصة سياقة</h3>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mt-3.5 bg-[#E0F2FE] rounded-[20px] p-3 flex items-start gap-2">
        <div className="w-4 h-4 rounded-full bg-[#0EA5E9] flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-[10px]">!</span>
        </div>
        <p className="text-[11px] text-gray-700 leading-[1.4]">
          اضغط على "عرض الكل" لرؤية باقي وثائقك و وثائق أفراد عائلتك
        </p>
      </div>
    </div>
  );
}