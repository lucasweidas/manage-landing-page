'use client';
import { MouseEvent, useState } from 'react';
import { Device, useDevice } from './device';

export function Header() {
  return (
    <header>
      <Device>
        <Nav />
      </Device>
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
        {device === 'mobile' && (
          <button className="text-blue-900" aria-label="Open navigation menu" onClick={toggleNav}>
            <svg className="w-6.1 h-4.5" aria-hidden="true">
              <use xlinkHref="#hamburger-icon" />
            </svg>
          </button>
        )}
      </div>
      {(isOpen || device === 'desktop') && (
        <div className="fixed bg-overlay w-full top-0 left-0 min-h-screen px-6 pt-10 gap-10 flex flex-col" onClick={handleOverlayClick}>
          {device === 'mobile' && (
            <button className="text-blue-900 self-end" aria-label="Close navigation menu" onClick={toggleNav}>
              <svg className="w-5.1 h-5.5" aria-hidden="true">
                <use xlinkHref="#close-icon" />
              </svg>
            </button>
          )}
          <ul className="bg-white flex flex-col gap-7 p-10 items-center rounded-md text-blue-900 font-bold">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
          {device === 'desktop' && <a href="#">Get Started</a>}
        </div>
      )}
    </nav>
  );
}
