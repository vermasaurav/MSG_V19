import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {/* Free WhatsApp Tools & IT Services */}
        <div>
          <h2 className="text-lg font-bold mb-3">Free WhatsApp Tools</h2>
          <ul className="space-y-2">
            <li>WhatsApp ChatLink Generator</li>
            <li>WhatsApp ChatButton Generator</li>
            <li>WhatsApp QR Code Generator</li>
          </ul>
          <h2 className="text-lg font-bold mt-5 mb-3">IT Services</h2>
          <ul className="space-y-2">
            <li>Cloud Telephony and IVR</li>
            <li>Bulk SMS Software</li>
            <li>DLT Priority Support</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-3">Reach Us</h2>
          <p>2nd Floor, G.R Tower, opp. Railway Hospital, Gaya, Bihar 823001</p>
          <p className="mt-2">Phone No.: (+91) 9031011559</p>
          <p>Email: support@msg24x7.com</p>
          <p>Website: msg24x7.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-3">Follow Us on Social Media</h2>
          <div className="flex space-x-4">
            <FaFacebook className="text-blue-500 text-2xl" />
            <FaWhatsapp className="text-green-500 text-2xl" />
            <FaInstagram className="text-pink-500 text-2xl" />
            <FaYoutube className="text-red-500 text-2xl" />
          </div>
          <div className="mt-5">
            <img src="/iso9001.png" alt="ISO 9001 Certified" className="w-20 mb-2" />
            <img src="/iso27001.png" alt="ISO 27001 Certified" className="w-20" />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-10 text-center border-t border-gray-700 pt-5">
        <ul className="flex justify-center space-x-6 text-sm">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>No Spam Policy</li>
          <li>Refund Policy</li>
        </ul>
        <p className="mt-5 text-xs">Copyright &copy; 2025 - MSG24x7 Communications powered by <span className="text-blue-400">DIGINTRA INC</span> – All rights reserved</p>
      </div>
    </footer>
  );
}
