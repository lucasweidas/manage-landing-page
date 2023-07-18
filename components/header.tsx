'use client';
import { MouseEvent, useState } from 'react';
import { AnimatePresence, Variants, motion, useReducedMotion } from 'framer-motion';
import { Device, useDevice } from './device';
import { NavGuideProps } from '@/interfaces';

const fadeInOutOverlay: Variants = {
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
const slideInOutNav: Variants = {
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

  function toggleNav() {
    setIsOpen(!isOpen);
    document.body.classList.toggle('overflow-hidden');
  }

  return (
    <nav id="header-nav" className="px-6 pt-10 pb-12 md:px-8 lg:flex lg:justify-between lg:pt-14 lg:pb-28 lg:px-0">
      <div className="flex justify-between items-center">
        <a href="/" className="text-blue-900" aria-label="Manage Homepage">
          <svg className="w-28 h-4.5 lg:w-36.2 lg:h-6" aria-hidden="true">
            <use xlinkHref="#manage-logo" />
          </svg>
        </a>
        {device === 'mobile' && !isOpen && (
          <button
            className="text-blue-900 hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none"
            aria-label="Open navigation guide"
            aria-controls="header-guide"
            aria-pressed={isOpen}
            onClick={toggleNav}
          >
            <svg className="w-6.1 h-4.5" aria-hidden="true">
              <use xlinkHref="#hamburger-icon" />
            </svg>
          </button>
        )}
      </div>
      {device === 'mobile' ? (
        <AnimatePresence initial={false}>{isOpen && <NavGuide isOpen={isOpen} toggleNav={toggleNav} device={device} />}</AnimatePresence>
      ) : (
        <NavGuide isOpen={isOpen} toggleNav={toggleNav} device={device} />
      )}
      {device === 'desktop' && (
        <a
          href="#"
          className="bg-red-500 w-36 h-12 font-bold text-white text-sm rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 hover:brightness-125 hover:grayscale-20 focus-visible:brightness-125 focus-visible:grayscale-20 focus-visible:ring-2 focus-visible:ring-blue-1000 transition-filter outline-none motion-reduce:transition-non"
        >
          Get Started
        </a>
      )}
    </nav>
  );
}

function NavGuide({ isOpen, toggleNav, device }: NavGuideProps) {
  const shouldReduceMotion = useReducedMotion();

  function handleOverlayClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      toggleNav();
    }
  }

  return (
    <motion.div
      id="header-guide"
      className="max-lg:fixed max-lg:bg-overlay max-lg:w-full max-lg:top-0 max-lg:left-0 max-lg:min-h-screen max-lg:px-6 max-lg:pt-10 max-lg:gap-10 flex max-lg:flex-col max-lg:z-50 md:max-lg:px-8"
      onClick={handleOverlayClick}
      variants={shouldReduceMotion || device === 'desktop' ? undefined : fadeInOutOverlay}
      initial={'initial'}
      animate={'visible'}
      exit={'exit'}
    >
      {device === 'mobile' && (
        <button
          className="text-blue-900 self-end hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none"
          aria-label="Close navigation guide"
          aria-controls="header-guide"
          aria-pressed={isOpen}
          onClick={toggleNav}
        >
          <svg className="w-5.1 h-5.5" aria-hidden="true">
            <use xlinkHref="#close-icon" />
          </svg>
        </button>
      )}
      <motion.ul
        className="max-lg:bg-white flex max-lg:flex-col gap-7 max-lg:p-10 items-center max-lg:rounded-md text-blue-900 font-bold lg:text-sm"
        variants={shouldReduceMotion || device === 'desktop' ? undefined : slideInOutNav}
        initial={'initial'}
        animate={'visible'}
        exit={'exit'}
      >
        <li>
          <a href="#" className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors motion-reduce:transition-none">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors motion-reduce:transition-none">
            Product
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors motion-reduce:transition-none">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors motion-reduce:transition-none">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors motion-reduce:transition-none">
            Community
          </a>
        </li>
      </motion.ul>
    </motion.div>
  );
}
