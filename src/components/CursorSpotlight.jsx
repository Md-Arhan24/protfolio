import React, { useEffect, useState } from 'react';

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover/cursor
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updateDeviceType = () => {
      setIsTouchDevice(!mediaQuery.matches);
    };

    updateDeviceType();
    mediaQuery.addEventListener('change', updateDeviceType);

    if (!mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', updateDeviceType);
    }

    let rafId;
    const handlePointerMove = (e) => {
      // Use requestAnimationFrame for 60-120fps fluid cursor spotlight
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      });
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      cancelAnimationFrame(rafId);
      mediaQuery.removeEventListener('change', updateDeviceType);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [isVisible]);

  // Don't render spotlight on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.12), rgba(243, 229, 171, 0.05) 40%, transparent 80%)`,
      }}
    />
  );
}
