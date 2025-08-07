import { motion } from "framer-motion";
import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import c1 from "../images/certificates/c1.png";
import c2 from "../images/certificates/c2.png";
import c3 from "../images/certificates/c3.png";
import c4 from "../images/certificates/c4.png";
import c5 from "../images/certificates/c5.jpg";
import c6 from "../images/certificates/c6.jpg";
import c7 from "../images/certificates/c7.jpg";
import c8 from "../images/certificates/c8.jpg";
import c9 from "../images/certificates/c9.jpg";
import c10 from "../images/certificates/c10.jpg";

export default function Certification() {
  const sampleCertificates = [
    c1,c2,c3,c4,c5,c7,c8,c9,c10,c6
  ];

  const [certificates, setCertificates] = useState(sampleCertificates);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type.includes("pdf") ? "pdf" : "image",
    }));
    setCertificates((prev) => [...prev, ...newFiles.map((f) => f.url)]);
  };

  const isPDF = (url) => {
    return url.endsWith(".pdf") || url.includes("application/pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-400 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Certifications 🏆
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {certificates.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-white flex items-center justify-center h-64"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {isPDF(src) ? (
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-blue-700 hover:underline"
              >
                <FaFilePdf className="text-6xl mb-2 text-red-500" />
                <span>View PDF</span>
              </a>
            ) : (
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className=" md:w-full md:h-full object-cover"
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      {certificates.length === 0 && (
        <motion.p
          className="text-center text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No certificates uploaded yet.
        </motion.p>
      )}
    </div>
  );
}
