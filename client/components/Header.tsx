import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-lg bg-white/95'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-navy-700' : 'text-white'}`}>
              FreelanceHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#features"
              className={`font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-navy-600' : 'text-white/90'
              }`}
            >
              Features
            </Link>
            <Link
              to="#pricing"
              className={`font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-navy-600' : 'text-white/90'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="#testimonials"
              className={`font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-navy-600' : 'text-white/90'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="#contact"
              className={`font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-navy-600' : 'text-white/90'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className={`hidden sm:inline-flex ${
                isScrolled
                  ? 'text-navy-600 hover:text-navy-700 hover:bg-navy-50'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              Login
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
