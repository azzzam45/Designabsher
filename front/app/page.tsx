'use client'

import { ProfileHeader } from "@/components/ProfileHeader";
import { WalletCard } from "@/components/WalletCard";
import { DigitalDocuments } from "@/components/DigitalDocuments";
import { QuickAccess } from "@/components/QuickAccess";
import { BottomNavigation } from "@/components/BottomNavigation";
import { FloatingChat } from "@/components/FloatingChat";
import { NotificationBanner } from "@/components/NotificationBanner";
import { DesktopTopNav } from "@/components/DesktopTopNav";
import { DesktopSidebar } from "@/components/DesktopSidebar";
import { DesktopMainContent } from "@/components/DesktopMainContent";
import { DesktopFooter } from "@/components/DesktopFooter";
import { GovernmentPayments } from "@/components/GovernmentPayments";
import { DriverLicenseRenewal } from "@/components/DriverLicenseRenewal";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('electronic-services');
  const [walletBalance, setWalletBalance] = useState(2450.00);

  // Initialize balance from localStorage after mount to avoid hydration mismatch
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('walletBalance');
      if (saved) {
        setWalletBalance(parseFloat(saved));
      }
    }

    const syncBalance = () => {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('walletBalance');
        if (saved) {
          setWalletBalance(parseFloat(saved));
        }
      }
    };
    
    // Listen for wallet balance updates
    window.addEventListener('walletBalanceUpdated', syncBalance);
    // Sync when page becomes visible (user navigates back)
    document.addEventListener('visibilitychange', syncBalance);
    window.addEventListener('focus', syncBalance);
    
    return () => {
      window.removeEventListener('walletBalanceUpdated', syncBalance);
      document.removeEventListener('visibilitychange', syncBalance);
      window.removeEventListener('focus', syncBalance);
    };
  }, []);

  const handlePaymentComplete = (amount: number) => {
    setWalletBalance(prev => {
      const newBalance = prev - amount;
      if (typeof window !== 'undefined') {
        localStorage.setItem('walletBalance', newBalance.toFixed(2));
        // Dispatch custom event to notify other pages
        window.dispatchEvent(new CustomEvent('walletBalanceUpdated', { detail: newBalance }));
      }
      return newBalance;
    });
  };

  const handleServiceClick = (service: string) => {
    if (service === 'payments') {
      router.push('/payments');
    } else if (service === 'driver-license') {
      router.push('/driver-license');
    }
  };

  return (
    <>
      {/* Notification Banner */}
      <NotificationBanner
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        message="تم إيداع مبلغ من المرور في محفظتك الإلكترونية"
        source="المرور"
        amount={150.00}
      />

      {/* Desktop Layout */}
      <div className="hidden lg:block bg-[#F5F5F5]" dir="rtl">
        <DesktopTopNav onNotificationClick={() => setShowNotification(true)} />
        <div className="flex">
          <DesktopSidebar 
            activeMenuItem={activeMenuItem} 
            onMenuItemClick={(item) => {
              if (item === 'payments') {
                router.push('/payments');
              } else if (item === 'driver-license') {
                router.push('/driver-license');
              } else {
                setActiveMenuItem(item);
              }
            }} 
          />
          {activeMenuItem === 'payments' ? (
            <div className="flex-1">
              <GovernmentPayments />
            </div>
          ) : activeMenuItem === 'driver-license' ? (
            <div className="flex-1">
              <DriverLicenseRenewal 
                onBack={() => {
                  setActiveMenuItem('electronic-services');
                }} 
                walletBalance={walletBalance}
                onPaymentComplete={handlePaymentComplete}
              />
            </div>
          ) : (
            <DesktopMainContent 
              onServiceClick={handleServiceClick}
              walletBalance={walletBalance}
            />
          )}
        </div>
        <DesktopFooter />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen bg-[#E8F5F1]" dir="rtl">
        {/* Mobile Container */}
        <div className="max-w-[430px] mx-auto min-h-screen bg-[#E8F5F1] relative pb-24">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-5 pt-3 pb-2">
            <div className="text-[15px] text-black">8:25</div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black">
                <rect x="2" y="4" width="4" height="4"/>
                <rect x="10" y="4" width="4" height="4"/>
                <rect x="18" y="4" width="4" height="4"/>
                <rect x="2" y="10" width="4" height="4"/>
                <rect x="10" y="10" width="4" height="4"/>
                <rect x="18" y="10" width="4" height="4"/>
                <rect x="2" y="16" width="4" height="4"/>
                <rect x="10" y="16" width="4" height="4"/>
                <rect x="18" y="16" width="4" height="4"/>
              </svg>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
              </svg>
              <svg className="w-6 h-3" viewBox="0 0 24 12" fill="none">
                <rect x="1" y="1" width="18" height="10" rx="2" stroke="black" strokeWidth="1"/>
                <rect x="20" y="3.5" width="3" height="5" rx="1" fill="black"/>
                <rect x="2" y="2" width="16" height="8" rx="1" fill="black"/>
              </svg>
            </div>
          </div>

          {/* Profile Header */}
          <ProfileHeader onNotificationClick={() => setShowNotification(true)} />

          {/* Wallet Card */}
          <WalletCard balance={walletBalance} />

          {/* Digital Documents Section */}
          <DigitalDocuments />

          {/* Quick Access Section */}
          <QuickAccess onServiceClick={handleServiceClick} />

          {/* Floating Chat Button */}
          <FloatingChat />
        </div>

        {/* Bottom Navigation - Always visible */}
        <BottomNavigation />
      </div>
    </>
  );
}

