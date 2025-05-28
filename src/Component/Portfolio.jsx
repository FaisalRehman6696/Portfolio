import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaReact,
  FaNode,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaGithub,
  FaBars,
  FaTimes,
  FaArrowUp,
  FaEnvelope,
  FaCloud,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-sky-400" },
  { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-600" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <FaNode />, name: "Node.js", color: "text-green-500" },
  { icon: <SiExpress />, name: "Express.js", color: "text-gray-300" },
  { icon: <FaDatabase />, name: "MongoDB", color: "text-emerald-400" },
  { icon: <SiMysql />, name: "MySQL", color: "text-blue-600" },
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowTopBtn(window.scrollY > 300);
    });
  }, []);
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qt6dqri",
        "template_uo27dir",
        e.target,
        "2tGYEQKWoM4KnGaDG" // (or Public Key)
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("✅ Your message has been sent successfully!");
          formRef.current.reset(); // Clear form after sending
        },
        (error) => {
          console.error("Error:", error.text);
        }
      );
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } font-sans scroll-smooth transition-all`}
    >
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/923128077934"
          target="_blank"
          className="bg-green-500 p-3 rounded-full shadow-md"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/faisalrehman-mern/"
          target="_blank"
          className="bg-blue-600 p-3 rounded-full shadow-md"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/FaisalRehman6696"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 p-3 rounded-full shadow-md"
        >
          <FaGithub size={24} />
        </a>
      </div>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 bg-yellow-400 text-black p-3 rounded-full shadow-md z-50"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md shadow-md z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          <h1 className="text-yellow-400 font-bold text-2xl tracking-wide">
            Faisal
          </h1>

          {/* Mobile Menu Button */}
          <button
            className="text-yellow-400 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Nav Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex gap-6 items-center`}
          >
            {["home", "about", "projects", "skills", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-yellow-400 capitalize transition block md:inline-block"
              >
                {id}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-yellow-400 ml-4"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/herobg.png')" }}
      >
        <div className="absolute inset-0 bg-bla bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-5xl font-extrabold text-white mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-purple-500">Faisal Rehman</span>
          </motion.h1>

          {/* Animated Typewriter Subtitle */}
          <motion.h2
            className="text-2xl md:text-3xl text-indigo-300 font-medium mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Full Stack Engineer",
                "Passionate Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>
          <p className="text-gray-200 max-w-xl mx-auto">
            I build scalable and efficient full-stack web applications using
            <span className="text-yellow-400">
              {" "}
              MongoDB, Express, React, Node.js
            </span>{" "}
            and MySQL.
          </p>
          <div className="mt-28">
            <div className="flex items-center justify-center space-x-2 text-white">
              <div className="h-12 w-1 bg-purple-500"></div>
              <p className="text-lg">Scroll</p>
              <div className="h-12 w-1 bg-purple-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-900">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          About Me
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-0 gap-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/faisal2.png"
              alt="Faisal"
              className="w-80 h-80 md:w-[350px] md:h-[350px] rounded-2xl object-cover shadow-2xl border-4 border-indigo-500 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-left text-gray-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Hi, I'm Faisal Rehman
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              A passionate{" "}
              <span className="text-yellow-400 font-semibold">
                MERN Stack Developer
              </span>{" "}
              with experience in building robust, scalable full-stack
              applications. I specialize in React, Node.js, and MongoDB with a
              strong eye for design and performance.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I enjoy turning complex problems into simple, beautiful
              interfaces. From backend APIs to frontend UIs, I believe in clean
              code and meaningful user experiences.
            </p>
            <div className="mt-10">
              <a
                href="/Faisal rehman cv.pdf"
                download
                className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10">
          My Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4">
          {[
            {
              title: "Full-Stack Web Development",
              description:
                "I build complete MERN stack applications with responsive UI, RESTful APIs, and robust database design.",
              icon: <FaReact size={40} className="text-cyan-400" />,
            },

            {
              title: "Backend & APIs",
              description:
                "Scalable Node.js & Express APIs with MongoDB/MySQL integration, secure authentication, and deployment.",
              icon: <FaNode size={40} className="text-green-500" />,
            },
            {
              title: "Cloud Development Skills",
              description:
                "Skilled in version control with GitHub, deploying apps on Microsoft Azure, and with AWS.",
              icon: (
                <div className="flex gap-2">
                  <FaCloud size={32} className="text-blue-600" />
                </div>
              ),
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl  hover:shadow-[0_4px_25px_rgba(255,215,0,0.6)] transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 mx-auto max-w-6xl ">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
          {[
            {
              title: "E-commerce Store",
              description: "MERN-based shopping site with payments.",
              video: "/Ecommerce.mp4", // put in public/projects/
              repo: "https://github.com/FaisalRehman6696/Ecommerce-website",
            },
            {
              title: "Ehsas hub",
              description:
                "React, Node.js & Mysql User can Donate and Req book.",
              video: "/ehsashub.mp4",
              repo: "https://github.com/FaisalRehman6696/Ehsas-hub",
            },
            {
              title: "Blog website",
              description: "MERN-based User can read and Admin Can everything.",
              video: "/blog.mp4",
              repo: "https://github.com/FaisalRehman6696/Blog-website",
            },
          ].map(({ title, description, video, repo }, idx) => (
            <a
              key={idx}
              href={repo}
              class="bg-gray-800 border border-purple-500 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <video
                src={video}
                className="w-full  object-cover "
                muted
                loop
                preload="metadata"
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => e.target.pause()}
              />
              <h3 class="text-xl font-bold">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map(({ icon, name, color }) => (
            <div
              key={name}
              className="flex flex-col items-center p-4 rounded-lg"
            >
              <div className={`text-8xl mb-2 ${color} animate-spin-slow`}>
                {icon}
              </div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      {/* Contact + Footer in one axis */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
          {/* Left - Contact Info & Socials */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              Contact Me
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              I'm open to freelance projects, collaborations, or full-time
              roles. Feel free to reach out!
            </p>

            {/* Contact Details */}
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:faisalrehman6696@gmail.com"
                  className="text-yellow-400 hover:underline"
                >
                  faisalrehman6696@gmail.com
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/923128077934"
                  target="_blank"
                  className="text-yellow-400 hover:underline"
                >
                  +92 3128077934
                </a>
              </li>
              <li>
                <strong>Location:</strong> Lahore, Pakistan
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-6 text-white text-xl">
              <a
                href="https://github.com/FaisalRehman6696"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition duration-300"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/faisalrehman-mern/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="https://wa.me/923128077934"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition duration-300"
              >
                <FaWhatsapp size={26} />
              </a>
              <a
                href="faisalrehman6696@gmail.com"
                className="hover:text-red-400 transition duration-300"
              >
                <FaEnvelope size={26} />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="md:w-1/2 w-full space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              name="from_name"
              className="w-full p-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              name="to_email"
              className="w-full p-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              required
              name="message"
              className="w-full p-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Bottom Footer Info */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-3xl bg-gray-900 text-gray-300 text-sm px-6 py-4 rounded-lg shadow-lg text-center">
            &copy; {new Date().getFullYear()} Faisal Rehman. Built with ❤️ using{" "}
            <span className="text-yellow-400 font-semibold">React</span> &{" "}
            <span className="text-sky-400 font-semibold">TailwindCSS</span>.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
