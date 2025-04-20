
import React from "react";
import { HexagonLogo } from "./ui/hexagon-logo";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bookmie-space-cadet text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <HexagonLogo size="sm" />
              <span className="font-bold text-xl text-white">
                Bookmie <span className="text-bookmie-orange">Devs</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming ideas into powerful software solutions. Building the digital future, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-bookmie-orange transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bookmie-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bookmie-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bookmie-orange transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bookmie-orange">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors animated-border">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors animated-border">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors animated-border">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors animated-border">AI Integration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors animated-border">DevOps & CI/CD</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bookmie-orange">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors animated-border">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors animated-border">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors animated-border">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors animated-border">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors animated-border">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bookmie-orange">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Tech Boulevard</li>
              <li className="text-gray-300">San Francisco, CA 94105</li>
              <li><a href="mailto:info@bookmie.com" className="text-gray-300 hover:text-white transition-colors animated-border">info@bookmie.com</a></li>
              <li><a href="tel:+14155552671" className="text-gray-300 hover:text-white transition-colors animated-border">+1 (415) 555-2671</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Bookmie Devs. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
