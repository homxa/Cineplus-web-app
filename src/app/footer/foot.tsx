import { IoLogoInstagram } from "react-icons/io5";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
<FaSquareXTwitter />

function Footer() {
  return (<> 
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Connect With Us</h2>
          <ul>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>Email: hamzasuleiman7xa7@gmail.com</p>
          <p>Phone: +1234567890</p>
          <p>123 Street , Kaduna, Nigeria</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 CinePlus Company. All rights reserved.</p>
      </div>
      <SiFacebook  />
      <IoLogoInstagram />
<FaLinkedin />

    </footer>







</>

  );
}

export default Footer;
