import { NewsletterForm } from './newsletterForm';

export function Footer() {
  return (
    <footer className="bg-blue-1000">
      <div className="px-6 pt-12 pb-7 grid gap-14 mx-auto max-w-xl md:px-8 md:max-w-3xl md:grid-cols-2 lg:max-w-none lg:w-min-lg lg:px-0 lg:py-14 lg:grid-cols-[repeat(3,1fr)_1.1fr] lg:gap-0">
        <NewsletterForm />
        <nav
          aria-label="Secundary"
          className="grid xsm:grid-cols-2 justify-items-center gap-4 md:row-start-2 md:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:justify-items-start"
        >
          <ul className="flex flex-col gap-4 text-sm text-center xsm:text-start">
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none">
                About Us
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 text-sm text-center xsm:text-start">
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-14 items-center md:flex-col-reverse md:justify-between md:row-start-2 md:col-start-1 md:items-start lg:row-start-1 lg:row-span-2">
          <ul className="flex gap-6 xsm:gap-8 items-center justify-center lg:gap-3">
            <li>
              <a
                href="#"
                className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 xsm:w-8 xsm:h-8 lg:w-5 lg:h-5" aria-hidden="true">
                  <use xlinkHref="#social-facebook" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6 xsm:w-8 xsm:h-8 lg:w-5 lg:h-5" aria-hidden="true">
                  <use xlinkHref="#social-youtube" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none"
                aria-label="Twitter"
              >
                <svg className="w-6 h-5 xsm:w-8 xsm:h-7 lg:w-5 lg:h-4.5" aria-hidden="true">
                  <use xlinkHref="#social-twitter" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none"
                aria-label="Pinterest"
              >
                <svg className="w-6 h-6 xsm:w-8 xsm:h-8 lg:w-5 lg:h-5" aria-hidden="true">
                  <use xlinkHref="#social-pinterest" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-500 focus-visible:text-red-500 transition-colors motion-reduce:transition-none"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 xsm:w-8 xsm:h-8 lg:w-5 lg:h-5" aria-hidden="true">
                  <use xlinkHref="#social-instagram" />
                </svg>
              </a>
            </li>
          </ul>
          <a href="/" className="text-white" aria-label="Manage Homepage">
            <svg className="w-36.2 h-6" aria-hidden="true">
              <use xlinkHref="#manage-logo" />
            </svg>
          </a>
        </div>
        <p className="text-gray-400 text-sm text-center md:max-lg:col-span-2 lg:row-start-2 lg:col-start-4 lg:self-end lg:text-start lg:justify-self-end">
          Copyright 2023. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
