'use client';
import { MouseEvent, useState } from 'react';
import { Device, useDevice } from './device';

export function Header() {
  return (
    <header>
      <div className="mx-auto">
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
  }

  function handleOverlayClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      toggleNav();
    }
  }

  return (
    <nav className="px-6 pt-10 pb-12">
      <div className="flex justify-between items-center">
        <a href="/" className="text-blue-900" aria-label="Manage Homepage">
          <svg className="w-28 h-4.5 lg:w-36.2 lg:h-6" aria-hidden="true">
            <use xlinkHref="#manage-logo" />
          </svg>
        </a>
        {device === 'mobile' && !isOpen && (
          <button
            className="text-blue-900 hover:text-red-500 focus-visible:text-red-500 transition-colors"
            aria-label="Open navigation menu"
            onClick={toggleNav}
          >
            <svg className="w-6.1 h-4.5" aria-hidden="true">
              <use xlinkHref="#hamburger-icon" />
            </svg>
          </button>
        )}
      </div>
      {(isOpen || device === 'desktop') && (
        <div className="fixed bg-overlay w-full top-0 left-0 min-h-screen px-6 pt-10 gap-10 flex flex-col z-50" onClick={handleOverlayClick}>
          {device === 'mobile' && (
            <button
              className="text-blue-900 self-end hover:text-red-500 focus-visible:text-red-500 transition-colors"
              aria-label="Close navigation menu"
              onClick={toggleNav}
            >
              <svg className="w-5.1 h-5.5" aria-hidden="true">
                <use xlinkHref="#close-icon" />
              </svg>
            </button>
          )}
          <ul className="bg-white flex flex-col gap-7 p-10 items-center rounded-md text-blue-900 font-bold">
            <li>
              <a href="#" className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 focus-visible:text-gray-400 transition-colors">
                Community
              </a>
            </li>
          </ul>
          {device === 'desktop' && <a href="#">Get Started</a>}
        </div>
      )}
    </nav>
  );
}
