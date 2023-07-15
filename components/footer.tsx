import { NewsletterForm } from './newsletterForm';

export function Footer() {
  return (
    <footer className="bg-blue-1000">
      <div className="px-6 pt-12 pb-7 grid gap-14 mx-auto max-w-xl">
        <NewsletterForm />
        <nav className="grid xsm:grid-cols-2 justify-items-center gap-4">
          <ul className="flex flex-col gap-4 text-sm text-center xsm:text-start">
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors">
                About Us
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 text-sm text-center xsm:text-start">
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="flex gap-6 xsm:gap-8 items-center justify-center">
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6 xsm:w-8 xsm:h-8" aria-hidden="true">
                  <use xlinkHref="#social-facebook" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors" aria-label="YouTube">
                <svg className="w-6 h-6 xsm:w-8 xsm:h-8" aria-hidden="true">
                  <use xlinkHref="#social-youtube" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors" aria-label="Twitter">
                <svg className="w-6 h-5 xsm:w-8 xsm:h-7" aria-hidden="true">
                  <use xlinkHref="#social-twitter" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors" aria-label="Pinterest">
                <svg className="w-6 h-6 xsm:w-8 xsm:h-8" aria-hidden="true">
                  <use xlinkHref="#social-pinterest" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6 xsm:w-8 xsm:h-8" aria-hidden="true">
                  <use xlinkHref="#social-instagram" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <a href="/" className="text-white block mx-auto w-fit" aria-label="Manage Homepage">
          <svg className="w-36.2 h-6" aria-hidden="true">
            <use xlinkHref="#manage-logo" />
          </svg>
        </a>
        <p className="text-gray-400 text-sm text-center">Copyright 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
}
