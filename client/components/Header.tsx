import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  User,
  Briefcase,
  Search,
  FileText,
  Menu,
  X,
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-lg bg-white/95"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span
              className={`font-bold text-xl ${isScrolled ? "text-navy-700" : "text-white"}`}
            >
              FreelanceHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Find Work Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? "text-navy-600" : "text-white/90"
                }`}
              >
                Find Work
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/browse-jobs" className="flex items-center">
                    <Search className="w-4 h-4 mr-2" />
                    Browse Jobs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Freelancer Dashboard
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hire Talent Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? "text-navy-600" : "text-white/90"
                }`}
              >
                Hire Talent
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/post-job" className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Post a Job
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/employer-dashboard" className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Employer Dashboard
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Direct Links */}
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? "text-navy-600" : "text-white/90"
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? "text-navy-600" : "text-white/90"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hidden sm:inline-flex">
              <Button
                variant="ghost"
                className={
                  isScrolled
                    ? "text-navy-600 hover:text-navy-700 hover:bg-navy-50"
                    : "text-white hover:text-white hover:bg-white/10"
                }
              >
                Login
              </Button>
            </Link>
            <Link to="/signup" className="hidden sm:inline-flex">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className={`lg:hidden ${
                isScrolled ? "text-navy-600" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-3">
                {/* Find Work Section */}
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Find Work
                  </p>
                  <div className="space-y-2 pl-4">
                    <Link
                      to="/browse-jobs"
                      className="flex items-center text-navy-700 hover:text-orange-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Browse Jobs
                    </Link>
                    <Link
                      to="/dashboard"
                      className="flex items-center text-navy-700 hover:text-orange-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Freelancer Dashboard
                    </Link>
                  </div>
                </div>

                {/* Hire Talent Section */}
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Hire Talent
                  </p>
                  <div className="space-y-2 pl-4">
                    <Link
                      to="/post-job"
                      className="flex items-center text-navy-700 hover:text-orange-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Post a Job
                    </Link>
                    <Link
                      to="/employer-dashboard"
                      className="flex items-center text-navy-700 hover:text-orange-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Briefcase className="w-4 h-4 mr-2" />
                      Employer Dashboard
                    </Link>
                  </div>
                </div>

                {/* Other Links */}
                <div className="space-y-2">
                  <Link
                    to="/about"
                    className="block text-navy-700 hover:text-orange-500 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-navy-700 hover:text-orange-500 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-2 pt-4 border-t">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
