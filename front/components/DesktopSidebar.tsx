'use client'

import { ChevronRight, Flag, TrendingUp, FileText, Landmark } from "lucide-react";

interface DesktopSidebarProps {
  activeMenuItem: string;
  onMenuItemClick: (id: string) => void;
}

export function DesktopSidebar({ activeMenuItem, onMenuItemClick }: DesktopSidebarProps) {
  const menuItems = [
    {
      id: 'electronic-services',
      label: 'الخدمات الإلكترونية',
      icon: Flag,
    },
    {
      id: 'popular',
      label: 'الشائعة',
      icon: TrendingUp,
    },
    {
      id: 'inquiries',
      label: 'استفسارات أبشر',
      icon: FileText,
    },
    {
      id: 'payments',
      label: 'المدفوعات الحكومية',
      icon: Landmark,
    },
  ];

  return (
    <aside className="w-64 bg-white border-l border-gray-200">
      <nav className="py-6">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onMenuItemClick(item.id)}
            className={`w-full flex items-center justify-between px-6 py-4 transition-all border-r-4 ${
              activeMenuItem === item.id
                ? 'bg-[#E8F5F1] border-[#1E7C6F]'
                : 'border-transparent hover:bg-gray-50'
            } ${index !== menuItems.length - 1 ? '' : ''}`}
          >
            <span className={`text-[15px] ${activeMenuItem === item.id ? 'text-[#1E7C6F]' : 'text-gray-700'}`}>
              {item.label}
            </span>
            <item.icon className={`w-5 h-5 ${activeMenuItem === item.id ? 'text-[#1E7C6F]' : 'text-gray-500'}`} />
          </button>
        ))}
      </nav>
    </aside>
  );
}