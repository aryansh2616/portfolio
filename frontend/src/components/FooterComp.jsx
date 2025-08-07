import { FaLinkedin, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // ✅ Updated import

function FooterComp() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Aryansh Chauhan. All rights reserved.</p>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/chauhanaryansh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/_aryansh_chauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>

          {/* <a
            href="https://t.me/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
            aria-label="Telegram"
          >
            <FaTelegramPlane className="w-5 h-5" />
          </a> */}

          <a
            href="https://x.com/Aryansh19086055"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="w-5 h-5" /> {/* ✅ Updated icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComp;
