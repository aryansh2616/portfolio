import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);
    setErrorMsg('');

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_g0wyemk',       
        'template_a71rm1r',      
        formRef.current,
        'I05GPJd-XcnAV90D6'     
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        formRef.current.reset(); 
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSending(false);
        setErrorMsg('❌ Failed to send message. Please try again.');
      });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 items-start"
      >
        {/* Left side – Contact info */}
        <div className="space-y-6 mt-0 md:mt-20">
          <p className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
            Contact Me
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            How can I help you?
          </h2>
          <p className="text-gray-600">
            Fill in the form or drop an email and I’ll get back to you as soon as I can.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4 text-gray-800">
              <FaPhoneAlt className="text-blue-600" /> +91 7017776317
            </div>
            <div className="flex items-center gap-4 text-gray-800">
              <FaEnvelope className="text-blue-600" />
              <a
                href="mailto:aryanshchauhan77@gmail.com"
                className="hover:underline"
              >
                aryanshchauhan77@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-800">
              <FaInstagram className="text-blue-600" />
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                _aryansh_chauhan
              </a>
            </div>
          </div>
        </div>

        {/* Right side – Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            disabled={sending}
            className={`w-full ${
              sending ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium py-3 rounded-md transition`}
          >
            {sending ? 'Sending...' : 'Submit'}
          </button>

          {success && (
            <p className="text-green-600 font-medium text-sm pt-2">
              ✅ Message sent successfully!
            </p>
          )}

          {errorMsg && (
            <p className="text-red-600 font-medium text-sm pt-2">{errorMsg}</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
