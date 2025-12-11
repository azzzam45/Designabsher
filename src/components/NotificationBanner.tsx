import { CheckCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import riyalSymbol from "figma:asset/c1791bbb598133efcf5af7c631286ebd88fbce63.png";

interface NotificationBannerProps {
  isVisible: boolean;
  onClose: () => void;
  message: string;
  source: string;
  amount?: number;
}

export function NotificationBanner({ isVisible, onClose, message, source, amount }: NotificationBannerProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Trigger animation
      setTimeout(() => setShow(true), 100);
      
      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [isVisible]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {/* Notification Content */}
      <div className="max-w-[430px] mx-auto px-4 pt-12 pb-4">
        <div 
          className="bg-white rounded-[20px] shadow-xl border-2 border-[#1E7C6F]/20 overflow-hidden"
          onClick={handleClose}
        >
          <div className="relative">
            {/* Green accent bar at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E7C6F] via-[#2A9D8F] to-[#1E7C6F]" />
            
            {/* Main content */}
            <div className="flex items-start gap-3 p-4 pt-5" dir="rtl">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E8F5F1] to-[#D1EDE6] flex items-center justify-center">
                  <CheckCircle size={22} className="text-[#1E7C6F]" />
                </div>
              </div>

              {/* Message */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <h4 className="text-[13px] text-[#1E7C6F]">إشعار جديد</h4>
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-[11px] text-gray-500">الآن</span>
                </div>
                <p className="text-[14px] text-gray-900 leading-relaxed">
                  {message}
                </p>
                
                {/* Amount if provided */}
                {amount && (
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E8F5F1] rounded-full">
                      <img src={riyalSymbol} alt="﷼" className="w-3.5 h-4 object-contain mix-blend-multiply opacity-60" />
                      <span className="text-[13px] text-[#1E7C6F]">{amount.toFixed(2)}</span>
                    </div>
                    <span className="text-[11px] text-gray-500">تم الإضافة</span>
                  </div>
                )}
              </div>

              {/* Close button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={16} className="text-gray-500" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-gray-100 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#1E7C6F] to-[#2A9D8F] animate-progress"
                style={{ animationDuration: '5s' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        
        .animate-progress {
          animation: progress linear;
        }
      `}</style>
    </div>
  );
}
