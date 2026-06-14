'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useToast, ToastVariant } from '@/lib/useToast';

const STYLES: Record<ToastVariant, { bar: string; iconColor: string; icon: React.ReactNode }> = {
  success: { bar: 'bg-[#C9A03D]', iconColor: 'text-[#C9A03D]', icon: <CheckCircle size={18} /> },
  error:   { bar: 'bg-[#B85C38]', iconColor: 'text-[#B85C38]', icon: <AlertCircle size={18} /> },
  info:    { bar: 'bg-[#625E56]', iconColor: 'text-[#625E56]', icon: <Info size={18} /> },
};

export default function ToastStack() {
  const { toasts, dismiss } = useToast();
  return (
    <div
      aria-live="polite"
      className="fixed inset-x-0 z-[200] flex flex-col items-center gap-2 px-4 pointer-events-none"
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
    >
      <AnimatePresence mode="sync">
        {toasts.map(t => {
          const s = STYLES[t.variant];
          return (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto relative flex items-start gap-3 w-full max-w-sm rounded-lg border border-[rgba(201,160,61,0.2)] bg-[#FEF7ED] px-4 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden"
              style={{ fontFamily: 'var(--font-hanken, sans-serif)' }}
            >
              <div className={`absolute start-0 top-0 bottom-0 w-[3px] ${s.bar} rounded-s-lg`} />
              <div className={`shrink-0 mt-0.5 ${s.iconColor}`}>{s.icon}</div>
              <p className="flex-1 text-sm font-medium text-[#1F1B15] leading-snug">{t.message}</p>
              <button onClick={() => dismiss(t.id)} aria-label="Dismiss"
                className="shrink-0 text-[#7B776E] hover:text-[#1F1B15] transition-colors touch-manipulation w-7 h-7 flex items-center justify-center">
                <X size={14} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
