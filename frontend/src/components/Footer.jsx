import { motion } from "framer-motion";

const text = "DEVELOPER".split("");
export default function Footer() {
  return (
    <footer className="w-screen bg-gray-950 flex items-center justify-center relative overflow-hidden p-0 m-0">
      <div className="flex z-10 leading-none" style={{ gap: '1vw' }}>
        {text.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.08 }}
            whileHover={{
              opacity: 0.2,
              textShadow: "0px 0px 0px",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-50 text-[10vw] md:text-[15.7vw] font-extrabold uppercase cursor-default leading-none align-middle"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </footer>
  );
}