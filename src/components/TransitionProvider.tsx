"use client";

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import PageTransition from './PageTransition';

export default function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);
  
  // Skip the initial animation on first page load
  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  return (
    <PageTransition key={pathname}>
      {children}
    </PageTransition>
  );
}