import { NewsletterForm } from './newsletterForm';

export function Footer() {
  return (
    <footer className="bg-blue-1000">
      <div className="px-6 pt-12 pb-7 grid gap-14">
        <NewsletterForm />
        <nav className="grid grid-cols-2 justify-items-center gap-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500">
                About Us
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="flex gap-8 items-center justify-center">
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500" aria-label="Facebook">
                <svg className="w-8 h-8" aria-hidden="true">
                  <use xlinkHref="#social-facebook" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500" aria-label="YouTube">
                <svg className="w-8 h-8" aria-hidden="true">
                  <use xlinkHref="#social-youtube" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500" aria-label="Twitter">
                <svg className="w-8 h-7" aria-hidden="true">
                  <use xlinkHref="#social-twitter" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500" aria-label="Pinterest">
                <svg className="w-8 h-8" aria-hidden="true">
                  <use xlinkHref="#social-pinterest" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-500 focus-visible:text-red-500" aria-label="Instagram">
                <svg className="w-8 h-8" aria-hidden="true">
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
