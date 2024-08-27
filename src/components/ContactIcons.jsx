import { FaWhatsapp, FaSkype } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md"; // Sharper mail icon
import { FiPhone } from "react-icons/fi";

const ContactIcons = ({ className = "" }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919888334677"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-700"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Email */}
      <a
        href="mailto:contact@theluxuryhotelconcierge.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-700"
        aria-label="Email"
      >
        <MdOutlineMail size={30} />
      </a>

      {/* Skype */}
      <a
        href="skype:iampranavdhingra@gmail.com?chat"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-700"
        aria-label="Skype"
      >
        <FaSkype size={30} />
      </a>

      {/* Phone */}
      <a
        href="tel:18889285558"
        className="text-black hover:text-gray-700"
        aria-label="Phone"
      >
        <FiPhone size={28} />
      </a>
    </div>
  );
};

export default ContactIcons;
