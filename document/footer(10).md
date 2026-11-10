```

import { NavLink } from "react-router-dom";
import Logo from "./navbar/Logo";

const Footer = () => {
    
  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-100 rounded">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:px-10">

        {/* Brand Section */}
        <div className="flex flex-col gap-5">
          <Logo />

          <p className="max-w-sm text-sm leading-7 text-gray-500">
            Discover fashion that defines your style. Explore our
            latest collections, premium essentials, and everyday
            wardrobe favorites.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <NavLink
              to="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-700 transition-all hover:border-black hover:bg-black hover:text-white"
            >
              IG
            </NavLink>

            <NavLink
              to="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-700 transition-all hover:border-black hover:bg-black hover:text-white"
            >
              FB
            </NavLink>

            <NavLink
              to="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-700 transition-all hover:border-black hover:bg-black hover:text-white"
            >
              P
            </NavLink>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-900">
            Company
          </h3>

          <ul className="flex flex-col gap-4 text-sm text-gray-500">
            <li>
              <NavLink to="/" className="transition-colors hover:text-black">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="transition-colors hover:text-black">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/collections" className="transition-colors hover:text-black">
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="transition-colors hover:text-black">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-900">
            Customer Care
          </h3>

          <ul className="flex flex-col gap-4 text-sm text-gray-500">
            <li>
              <NavLink to="/delivery" className="transition-colors hover:text-black">
                Delivery Information
              </NavLink>
            </li>
            <li>
              <NavLink to="/returns" className="transition-colors hover:text-black">
                Returns & Exchanges
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="transition-colors hover:text-black">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="transition-colors hover:text-black">
                Terms & Conditions
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-900">
            Get In Touch
          </h3>

          <ul className="flex flex-col gap-4 text-sm text-gray-500">
            <li>
              <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-400">
                Call Us
              </span>
              <a href="tel:+9777777777" className="hover:text-black">
                +9777777777
              </a>
            </li>

            <li>
              <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-400">
                Email Us
              </span>
              <a
                href="mailto:contact@example.com"
                className="hover:text-black"
              >
                contact@example.com
              </a>
            </li>

            <li>
              <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-400">
                Working Hours
              </span>
              Monday - Saturday, 9 AM - 6 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:flex-row sm:px-10">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ebay. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-gray-500">
            <span>Secure Shopping</span>
            <span>•</span>
            <span>Quality Assured</span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;

```

### Mount inside `App.tsx`
```
      </Routes>
      <Footer/>
     </div>
    </>
```