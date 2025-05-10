// src/components/Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <p className="text-sm text-gray-600 mb-2">
              Your go-to online marketplace for everything you need. Quality products, great prices.
            </p>
            <Link href="/about" className="text-sm text-red-500 hover:text-red-600 transition-colors">
              Learn More &rarr;
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-gray-900 transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-gray-900 transition-colors">Return Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact & Follow</h3>
            <p className="text-sm text-gray-600 mb-1">Email: support@examplemall.com</p>
            <p className="text-sm text-gray-600 mb-3">Phone: +1 234 567 8900</p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-900 transition-colors">
                {/* Placeholder for Facebook Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-900 transition-colors">
                {/* Placeholder for Twitter Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.613.823 3.043 2.074 3.863-.766-.024-1.483-.233-2.11-.583v.06c0 2.254 1.605 4.135 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.307 3.198 4.342 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602.91-.658 1.7-1.475 2.323-2.41z" /></svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900 transition-colors">
                {/* Placeholder for Instagram Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.053 1.803.248 2.228.434.44.192.756.45.982.84.232.392.402.784.586 1.32.06.24.096.472.126.728.054 1.266.066 1.646.066 4.845s-.012 3.584-.066 4.845c-.03.256-.066.488-.126.728-.184.536-.354.928-.586 1.32-.226.39-.542.648-.982.84-.425.186-1.056.38-2.228.434-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.053-1.803-.248-2.228-.434-.44-.192-.756-.45-.982-.84-.232-.392-.402-.784-.586-1.32-.06-.24-.096-.472-.126-.728-.054-1.266-.066-1.646-.066-4.845s.012-3.584.066-4.845c.03-.256.066-.488.126-.728.184-.536.354-.928.586-1.32.226-.39.542-.648.982.84.425-.186 1.056-.38 2.228-.434 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.27.058-2.163.248-2.943.577-.78.33-1.416.75-2.008 1.343s-1.013 1.228-1.343 2.008c-.33.78-.52 1.673-.577 2.943-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.27.248 2.163.577 2.943.33.78.75 1.416 1.343 2.008s1.228 1.013 2.008 1.343c.78.33 1.673.52 2.943.577 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.27-.058 2.163-.248 2.943-.577.78-.33 1.416-.75 2.008-1.343s1.013-1.228 1.343-2.008c.33-.78.52-1.673.577-2.943.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.27-.248-2.163-.577-2.943-.33-.78-.75-1.416-1.343-2.008s-1.228-1.013-2.008-1.343c-.78-.33-1.673-.52-2.943-.577-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} ExampleMall. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
