import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { companyDetails } from "../../data/constant";

const Footer = () => {
  return (
    <footer className="bg-[#E85D24] text-white py-16 mt-[5rem]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 justify-items-start md:justify-items-center">
          <div className="max-w-sm">
            <div className="text-2xl font-bold text-white mb-5">
              <Link href="/">Logo</Link>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              We proudly present authentic dishes from various regions of the
              archipelago, bringing authentic flavors and Indonesian traditions
              to every dish we serve.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaYoutube />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <AiFillInstagram />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          {/* <div>
            <h3 className="text-xl font-bold mb-6 border-b pb-4">
              Help Center
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div> */}

          <div className="w-fit">
            <h3 className="text-xl font-bold mb-6 border-b pb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                {companyDetails.address}
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <div>{companyDetails.phone}</div>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                {companyDetails.email}
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xl font-bold mb-6 border-b pb-4">
              Opening Hours
            </h3>
            <ul className="space-y-4">
              <li>Mon - Tue : 08.00 Am - 09.00 Pm</li>
              <li>Wed - Thu : 09.00 Am - 10.00 Pm</li>
              <li>Fri - Sat : 08.00 Am - 12.00 Pm</li>
              <li>Sunday : CLOSED</li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
