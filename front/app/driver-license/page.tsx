'use client'

import { DriverLicenseRenewal } from "@/components/DriverLicenseRenewal";
import { BottomNavigation } from "@/components/BottomNavigation";
import { DesktopTopNav } from "@/components/DesktopTopNav";
import { DesktopSidebar } from "@/components/DesktopSidebar";
import { DesktopFooter } from "@/components/DesktopFooter";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DriverLicensePage() {
  const router = useRouter();
  const [walletBalance, setWalletBalance] = useState(2450.00);
  const [showNotification, setShowNotification] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('electronic-services');

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
    // Sync when page becomes visible
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
                router.push('/payments');
              } else if (item === 'driver-license') {
                // Already on driver license page
                setActiveMenuItem(item);
              } else {
                setActiveMenuItem(item);
                if (item === 'electronic-services') {
                  router.push('/');
                }
              }
            }} 
          />
          <div className="flex-1">
            <DriverLicenseRenewal 
              onBack={() => router.push('/')} 
              walletBalance={walletBalance}
              onPaymentComplete={handlePaymentComplete}
            />
          </div>
        </div>
        <DesktopFooter />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen bg-[#E8F5F1]" dir="rtl">
        <div className="max-w-[430px] mx-auto min-h-screen relative pb-24">
          <DriverLicenseRenewal 
            onBack={() => router.push('/')} 
            walletBalance={walletBalance}
            onPaymentComplete={handlePaymentComplete}
          />
          <BottomNavigation />
        </div>
      </div>
    </>
  );
}

