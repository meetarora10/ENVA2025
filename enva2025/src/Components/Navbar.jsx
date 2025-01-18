import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
    { href: "#sponsors", label: "Sponsors" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const handleClick = async (e, href) => {
    e.preventDefault();
    setActiveLink(href);

    // If we're not on the main page, navigate there first
    if (location.pathname !== '/') {
      await navigate('/');
      // Wait a bit for the navigation to complete
      setTimeout(() => {
        if (href === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    } else {
      // If we're already on the main page, just scroll
      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full bg-black text-white shadow-md transition-transform duration-300 z-50 ${
      scrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={(e) => handleClick(e, "/")}>
            <img
              src="/ENVA-image.png"
              alt="Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="relative group py-2 text-lg"
              >
                <span className="text-white hover:text-gray-300 transition-colors duration-300">
                  {label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-2 space-y-2">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`block px-4 py-2 text-lg transition-colors duration-300 ${
                  activeLink === href ? 'text-orange-500' : 'text-white hover:text-orange-500'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;