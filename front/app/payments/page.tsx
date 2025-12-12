'use client'

import { GovernmentPayments } from "@/components/GovernmentPayments";
import { BottomNavigation } from "@/components/BottomNavigation";
import { DesktopTopNav } from "@/components/DesktopTopNav";
import { DesktopSidebar } from "@/components/DesktopSidebar";
import { DesktopFooter } from "@/components/DesktopFooter";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentsPage() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('payments');

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block bg-[#F5F5F5]" dir="rtl">
        <DesktopTopNav onNotificationClick={() => setShowNotification(true)} />
        <div className="flex">
          <DesktopSidebar 
            activeMenuItem={activeMenuItem} 
            onMenuItemClick={(item) => {
              if (item === 'payments') {
                // Already on payments page
                setActiveMenuItem(item);
              } else if (item === 'driver-license') {
                router.push('/driver-license');
              } else {
                setActiveMenuItem(item);
                if (item === 'electronic-services') {
                  router.push('/');
                }
              }
            }} 
          />
          <div className="flex-1">
            <GovernmentPayments />
          </div>
        </div>
        <DesktopFooter />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen bg-[#E8F5F1]" dir="rtl">
        <div className="max-w-[430px] mx-auto min-h-screen bg-white relative pb-24">
          <GovernmentPayments onBack={() => router.push('/')} />
          <BottomNavigation />
        </div>
      </div>
    </>
  );
}

