
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HexagonLogo } from "@/components/ui/hexagon-logo";
import { Menu, X, Github, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { title: "Services", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "About", href: "#about" },
    { title: "Blog", href: "#blog" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 dark:bg-bookmie-space-cadet dark:bg-opacity-90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover-scale"
            aria-label="Bookmie Home"
          >
            <HexagonLogo size="sm" />
            <span className="font-bold text-xl text-bookmie-space-cadet dark:text-white">
              Bookmie <span className="text-bookmie-orange">Devs</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-bookmie-space-cadet dark:text-white hover:text-bookmie-orange dark:hover:text-bookmie-orange transition-colors animated-border"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="ml-2"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <Button variant="outline" className="ml-4 hover-scale">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>

          <Button className="ml-2 bg-bookmie-orange hover:bg-bookmie-orange/90 text-white hover-scale hover-glow">
            Start Project
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="mr-2"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-bookmie-space-cadet shadow-lg animate-fade-in">
          <ul className="pt-2 pb-4 space-y-1 px-4">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-bookmie-space-cadet dark:text-white hover:text-bookmie-orange"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button className="w-full bg-bookmie-orange hover:bg-bookmie-orange/90 text-white">
                Start Project
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
