import { useState } from "react";
import { companyDetails } from "../data/constant";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-headerColor fixed z-40 w-screen">
      {/* Top Header */}
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4 flex justify-center md:justify-end items-center">
          {/* <div className="text-sm text-gray-600">Welcome to our website</div> */}
          <div className="  flex md:flex-row flex-col items-start md:justify-end   md:space-x-4 text-sm text-white">
            <Link to="#" className="hover:text-primary flex items-center gap-1">
              <MdEmail />
              {companyDetails.email}
            </Link>
            <Link to="#" className="hover:text-primary flex items-center gap-1">
              <MdPhone />
              {companyDetails.phone}
            </Link>
            <Link to="#" className="hover:text-primary flex items-center gap-1">
              <MdLocationOn />
              {companyDetails.address}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Link to="/">Logo</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link to="/about-us" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            {/* <Link to="/services" className="text-gray-600 hover:text-gray-800">
              Services
            </Link> */}
            <Link
              to="/contact-us"
              className="text-gray-600 hover:text-gray-800"
            >
              Contact
            </Link>
            {/* <Link to="/blogs" className="text-gray-600 hover:text-gray-800">
              Blogs
            </Link> */}
          </nav>

          {/* Call Us Button */}
          <a
            to="tel:+1234567890"
            className="md:flex hidden items-center gap-1 bg-primary text-white px-4 py-2 rounded hover:bg-orange-500 transition duration-300"
          >
            <MdPhone />
            Call Us
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <Link
              to="/"
              className="block py-2 text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="block py-2 text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
              About
            </Link>
            {/* <Link
              to="/services"
              className="block py-2 text-gray-600 hover:text-gray-800"
            >
              Services
            </Link> */}
            <Link
              to="/contact-us"
              className="block py-2 text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            {/* <Link
              to="/blogs"
              className="block py-2 text-gray-600 hover:text-gray-800"
            >
              Blogs
            </Link> */}
            <Link to="tel:+1234567890" className="block py-2 primary-btn w-fit">
              Call Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
