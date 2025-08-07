import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import img3 from '../images/ss.png'; 
import pic3 from '../images/pic3.jpg'

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <section
      id="about"
      ref={ref}
      className={`relative px-6 py-20 md:py-28 max-w-7xl mx-auto transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${img3})` }}
      />

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image or Illustration */}
        <div className="w-full">
          <img
            src={pic3}
            alt="Developer working"
            className="w-70 mx-auto rounded-2xl shadow-xl backdrop-blur-sm bg-white/10"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="bg-white/30 backdrop-blur-lg p-8 md:p-10 rounded-xl border border-white/20 shadow-md transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
            👋 About Me
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Passionate about building full-stack solutions using the{' '}
            <strong>MERN stack</strong>, I actively contribute to open-source
            projects and take on freelance opportunities that challenge and
            inspire me.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Currently honing my skills as a{' '}
            <strong>Software Developer Intern</strong> at{' '}
            <a
              href="https://buildrightstudios.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Build Right Studios
            </a>
            , I'm focused on delivering real-world web applications that solve
            meaningful problems.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Always eager to explore new technologies and create impactful
            digital experiences — I'm on a mission to keep learning and growing
            as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
