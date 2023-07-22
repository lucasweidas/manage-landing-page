'use client';
import Link from 'next/link';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import {
  AnimatePresence,
  Variants,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { Device, useDevice } from './device';
import { MobileGuideWrapperProps } from '@/interfaces';

const OVERLAY_VARIANTS: Variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
};
const WRAPPER_VARIANTS: Variants = {
  initial: {
    opacity: 0,
    y: '-15%',
  },
  visible: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
    y: '-15%',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export function Header() {
  return (
    <header>
      <div className="mx-auto lg:w-min-lg">
        <Device>
          <Nav />
        </Device>
      </div>
    </header>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { device } = useDevice();

  const toggleMobileGuide = useCallback(() => {
    setIsOpen(isOpen => !isOpen);
    document.body.classList.toggle('overflow-hidden');
  }, []);

  useEffect(() => {
    if (device === 'desktop' && isOpen) {
      toggleMobileGuide();
    }
  }, [device, isOpen, toggleMobileGuide]);

  return (
    <nav
      className="px-6 pt-10 pb-12 md:px-8 flex justify-between items-center lg:pt-14 lg:pb-28 lg:px-0"
      aria-label="primary"
    >
      <Link href="/" className="text-blue-900" aria-label="Manage Homepage">
        <svg className="w-28 h-4.5 lg:w-36.2 lg:h-6" aria-hidden="true">
          <use xlinkHref="#manage-logo" />
        </svg>
      </Link>
      {!isOpen && (
        <button
          className="text-blue-900 hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none lg:hidden"
          aria-label="open guide"
          aria-pressed={isOpen}
          onClick={toggleMobileGuide}
        >
          <svg className="w-6.1 h-4.5" aria-hidden="true">
            <use xlinkHref="#hamburger-icon" />
          </svg>
        </button>
      )}
      {device === 'mobile' && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <MobileGuideWrapper isOpen={isOpen} onToggle={toggleMobileGuide}>
              <Guide className="flex-col" />
            </MobileGuideWrapper>
          )}
        </AnimatePresence>
      )}
      <Guide className="max-lg:hidden text-sm" />
      <Link
        href="#"
        className="bg-red-500 w-36 h-12 font-bold text-white text-sm rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 hover:brightness-125 hover:grayscale-20 focus-visible:brightness-125 focus-visible:grayscale-20 focus-visible:ring-2 focus-visible:ring-blue-1000 transition-filter outline-none motion-reduce:transition-non max-lg:hidden"
      >
        Get Started
      </Link>
    </nav>
  );
}

function Guide({ className }: { className?: string }) {
  return (
    <ul
      className={`flex gap-7 items-center text-blue-900 font-bold ${className}`}
    >
      <li>
        <Link
          href="#"
          className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors motion-reduce:transition-none"
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors motion-reduce:transition-none"
        >
          Product
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors motion-reduce:transition-none"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors motion-reduce:transition-none"
        >
          Careers
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors motion-reduce:transition-none"
        >
          Community
        </Link>
      </li>
    </ul>
  );
}

function MobileGuideWrapper({
  children,
  isOpen,
  onToggle,
}: MobileGuideWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  function handleOverlayClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onToggle();
    }
  }

  return (
    <motion.div
      className="fixed bg-overlay inset-0 px-6 pt-10 gap-10 flex flex-col z-50 md:px-8"
      onClick={handleOverlayClick}
      variants={shouldReduceMotion ? undefined : OVERLAY_VARIANTS}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <button
        className="text-blue-900 self-end hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none"
        aria-label="close guide"
        aria-pressed={isOpen}
        onClick={onToggle}
      >
        <svg className="w-5.1 h-5.5" aria-hidden="true">
          <use xlinkHref="#close-icon" />
        </svg>
      </button>
      <motion.div
        className="bg-white p-10 rounded-md"
        variants={shouldReduceMotion ? undefined : WRAPPER_VARIANTS}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
