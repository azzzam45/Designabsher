'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#E8F5F1] flex items-center justify-center p-5" dir="rtl">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl text-gray-900 mb-2">حدث خطأ</h2>
        <p className="text-gray-600 mb-6">{error.message || 'حدث خطأ غير متوقع'}</p>
        <button
          onClick={reset}
          className="bg-[#1E7C6F] hover:bg-[#175F54] text-white rounded-lg px-6 py-3 transition-colors"
        >
          المحاولة مرة أخرى
        </button>
      </div>
    </div>
  );
}

