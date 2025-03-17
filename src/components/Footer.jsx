import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/about-me" className="hover:text-primary">
              About
            </Link>
            <Link to="/upcoming-events" className="hover:text-primary">
              Events
            </Link>
            <Link to="/read-blog" className="hover:text-primary">
              Blog
            </Link>
            <Link to="/contact-me" className="hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-primary">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-primary">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-primary">
              <FaYoutube size={20} />
            </a>
          </div>  

          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} Joel Ademola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
