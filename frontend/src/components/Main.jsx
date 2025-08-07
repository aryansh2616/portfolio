import img from '../images/pic.png';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaWhatsapp } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import Skills from './Skills';

function Main() {
  return (
    <>
      <header className="pb-4 max-w-6xl mx-auto mb-10 px-4 relative overflow-hidden">
        {/* Background Icons */}
        <div className="absolute inset-0 pointer-events-none -z-10 text-blue-200">
          <FaReact className="absolute top-1 left-1 w-16 h-16 opacity-100" />
          <FaCss3Alt className="absolute bottom-0 left-20 w-10 h-10 opacity-100" />
          <SiMongodb className="absolute bottom-10 right-35 w-20 h-20 opacity-100" />
          <FaNodeJs className="absolute top-16 right-0 w-20 h-20 opacity-100" />
          <SiExpress className="absolute bottom-30 left-145 w-20 h-20 opacity-100" />
        </div>

        <div className="flex mx-auto flex-col md:flex-row mt-10 items-center justify-between gap-8">
          <div className="w-full md:w-[30%] flex justify-center items-center mb-8 md:mb-0">
            <img
              src={img}
              alt="Aryansh Chauhan"
              className="w-60 h-auto max-w-sm rounded-xl"
            />
          </div>

          <div className="w-full md:w-[70%] flex flex-col items-center text-center md:text-left md:items-start">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-2 slide-in-left">
              Aryansh Chauhan
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-[#38b6ff] mb-4 slide-in-left delay-100">
              Full Stack Developer
            </h2>
            <p className="text-base md:text-lg bg-white rounded-2xl text-gray-600 max-w-full md:max-w-xl mt-8 leading-relaxed px-4 py-6">
              I'm a MERN Stack Developer with expertise in building fast, scalable, and responsive web applications. I help businesses bring their ideas to life using modern technologies like React, Node.js, Express, and MongoDB. <br className="hidden md:block" />
              <br className="hidden md:block" />
              <b>Open to freelance opportunities — let's work together to create something great!</b>
            </p>
          </div>
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917017776317?text=Hi%20Aryansh,%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <Skills />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">🎓 My Journey</h2>

        <div className="relative border-l-4 border-blue-500 pl-8 space-y-12">
          {/* Journey Step */}
          {[
            {
              title: 'School',
              emoji: '🏫',
              description: (
                <>
                  Completed primary education at{' '}
                  <a
                    href="https://www.stmarysamroha.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    St. Mary’s Convent Sr. Sec. School
                  </a>{' '}
                  where I developed a strong foundation in academics and curiosity for computers.
                </>
              ),
            },
            {
              title: 'High School',
              emoji: '📘',
              description:
                <>
                  Studied Science with Computer at{' '}
                  <a
                    href="https://www.stmarysamroha.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    St. Mary’s Convent Sr. Sec. School
                  </a>{' '}, discovering my passion for programming and technology.',
                </>
            },
            {
              title: 'College',
              emoji: '🎓',
              description: (
                <>
                  Currently pursuing BCA at{' '}
                  <a
                    href="https://www.jiit.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    JIIT Noida
                  </a>
                  , where I’m mastering full-stack web development and working on real-world projects.
                </>
              ),
            },
            {
              title: 'Developer Journey',
              emoji: '💻',
              description: (
                <>
                  Passionate about building full-stack solutions using the MERN stack, actively contributing to open-source projects, and taking on freelance opportunities.<br></br>
                  Currently honing my skills as a Software Developer Intern at{'  '}
                  <a
                    href="https://buildrightstudios.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Build Right Studios
                  </a><br></br>
                  Always driven to create impactful digital experiences and continuously grow as a developer.
                </>

              )
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Dot */}
              <span className="absolute -left-[1.3rem] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></span>

              {/* Content */}
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="text-2xl">{item.emoji}</span> {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>



    </>
  );
}

export default Main;
