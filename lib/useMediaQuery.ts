'use client';

import { useState, useEffect } from 'react';

/**
 * SSR-safe media query hook.
 * Uses matchMedia + addEventListener — no polling, no re-renders per scroll frame.
 * Returns false during SSR (server) and corrects on hydration.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    // Set immediately in case value changed between SSR and mount
    setMatches(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
