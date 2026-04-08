import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Chatbot from './Chatbot';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'About Us', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-navy text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-gold" />
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                Serima <span className="text-gold">Legal</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    isActive(link.path) ? 'text-gold border-b-2 border-gold pb-1' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link
                to="/contact"
                className="bg-gold hover:bg-yellow-600 text-navy font-semibold py-2 px-6 rounded transition-colors"
              >
                Consult an Expert
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy-light border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-navy text-gold'
                      : 'text-gray-300 hover:bg-navy hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center mt-4 bg-gold hover:bg-yellow-600 text-navy font-semibold py-2 px-4 rounded transition-colors"
              >
                Consult an Expert
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-12 border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6 text-gold" />
                <span className="font-serif text-xl font-bold text-white">
                  Serima <span className="text-gold">Legal Practice</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Precision in Legal Advocacy. Integrity in Service. Providing accessible legal excellence in Gaborone, Botswana.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Practice Areas</Link></li>
                <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                <li><Link to="/resources" className="hover:text-gold transition-colors">Legal Insights</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Contact Us</h3>
              <address className="not-italic text-sm text-gray-400 space-y-2">
                <p>Plot 23891, Sesase Road</p>
                <p>Gaborone, Botswana</p>
                <p className="pt-2">Email: info@serimalegal.co.bw</p>
                <p>Phone: +267 390 0000</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Serima Legal Practice. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/26770000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}
