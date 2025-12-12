'use client'

import { Bell, Settings, ChevronLeft } from "lucide-react";

interface ProfileHeaderProps {
  onNotificationClick?: () => void;
}

export function ProfileHeader({ onNotificationClick }: ProfileHeaderProps) {
  return (
    <>
      {/* Top Icons Row */}
      <div className="flex justify-between items-start px-5 pt-2 pb-4">
        {/* Left: Notification & Settings */}
        <div className="flex gap-3">
          <button 
            className="w-10 h-10 flex items-center justify-center relative"
            onClick={onNotificationClick}
          >
            <Bell size={26} className="text-[#1E7C6F]" strokeWidth={1.5} />
            {/* Notification Badge */}
            <div className="absolute top-0 right-0 w-[18px] h-[18px] bg-[#1E7C6F] rounded-full flex items-center justify-center border-2 border-[#E8F5F1]">
              <span className="text-[10px] text-white">1</span>
            </div>
          </button>
          <button className="w-10 h-10 flex items-center justify-center">
            <Settings size={26} className="text-[#1E7C6F]" strokeWidth={1.5} />
          </button>
        </div>

        {/* Right: Ministry Logo & Saudi Emblem */}
        <div className="flex items-center gap-2.5">
          {/* Ministry of Interior Logo - Green Bars */}
          <div className="w-11 h-11 flex items-center justify-center">
            <svg viewBox="0 0 44 44" className="w-11 h-11">
              <rect x="4" y="8" width="4" height="28" fill="#1E7C6F" rx="1"/>
              <rect x="10" y="4" width="4" height="36" fill="#1E7C6F" rx="1"/>
              <rect x="16" y="10" width="4" height="24" fill="#1E7C6F" rx="1"/>
              <rect x="22" y="6" width="4" height="32" fill="#1E7C6F" rx="1"/>
              <rect x="28" y="12" width="4" height="20" fill="#1E7C6F" rx="1"/>
              <rect x="34" y="8" width="4" height="28" fill="#1E7C6F" rx="1"/>
            </svg>
          </div>
          
          {/* Saudi Emblem */}
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 44 44" className="w-9 h-9">
              <circle cx="22" cy="22" r="20" fill="#1E7C6F"/>
              <path d="M22 10 L16 17 L19 17 L19 24 L25 24 L25 17 L28 17 Z" fill="#D4AF37"/>
              <rect x="14" y="26" width="16" height="2.5" rx="0.5" fill="#D4AF37"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="mx-5 bg-white rounded-[24px] shadow-sm p-4 flex items-center justify-between mb-5">
        <div className="w-[58px] h-[58px] rounded-[18px] overflow-hidden bg-gray-100 flex-shrink-0">
          <img 
            src="/assets/0642d415cbb71d7b958ef3c986259478afe852ca.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 text-left ml-3">
          <h1 className="text-[16px] text-gray-900 mb-0.5">علي صالح</h1>
          <p className="text-[13px] text-gray-500">رقم الهوية: 1120167843</p>
        </div>
        
        <button className="w-8 h-8 flex items-center justify-center">
          <ChevronLeft size={20} className="text-gray-400" />
        </button>
      </div>
    </>
  );
}