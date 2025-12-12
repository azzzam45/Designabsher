export default function Loading() {
  return (
    <div className="min-h-screen bg-[#E8F5F1] flex items-center justify-center" dir="rtl">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#1E7C6F] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#1E7C6F] text-lg">جاري التحميل...</p>
      </div>
    </div>
  );
}

