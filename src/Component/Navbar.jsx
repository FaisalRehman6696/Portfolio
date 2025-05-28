import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="relative bg-no-repeat bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: "url('/herobg.png')" }}
      >
        <header className="absolute top-0  w-full p-4 flex justify-between px-52 items-cente text-white">
          <h1 className="text-lg font-bold">MERN Stack Developer</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#work" className="hover:underline">
              Work
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </header>

        <div className="flex flex-col items-center justify-center h-full text-center text-white">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">
              Hi, I'm <span className="text-purple-500">Faisal Rehman</span>
            </h2>
            <p className="mt-4 text-lg">
              I develop Full Stack Web Applications, using{" "}
              <span className="text-yellow-600 font-semibold">MERN Stack</span>
            </p>
          </div>
          <div className="mt-8">
            <img
              src="/faisal.jp"
              alt="F"
              className="w-40 h-40 rounded-full shadow-lg"
            />
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-center space-x-2 text-white">
              <div className="h-12 w-1 bg-purple-500"></div>
              <p className="text-lg">Scroll</p>
              <div className="h-12 w-1 bg-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-900 text-white py-16">
        <div class="container mx-auto px-8 md:px-16 lg:px-24">
          <div class="text-start">
            <h2 class="text-4xl md:text-5xl font-bold">Overview.</h2>
            <p class="mt-6 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              I'm a skilled software developer with experience in JavaScript,
              and expertise in frameworks like
              <span class="font-semibold text-purple-400">React</span>,
              <span class="font-semibold text-purple-400">Node.js</span>,
              <span class="font-semibold text-purple-400">Express.js</span>, and
              <span class="font-semibold text-purple-400">MongoDB</span>. I’m a
              quick learner and collaborate closely with clients to create
              <span class="font-semibold">efficient</span>,
              <span class="font-semibold">scalable</span>, and
              <span class="font-semibold">user-friendly</span> solutions that
              solve real-world problems. Let’s work together to bring your ideas
              to life!
            </p>
          </div>

          <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-gray-800 border border-purple-500 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <img
                src="/path-to-icon1.png"
                alt="Web Developer"
                class="mx-auto w-16 h-16 mb-6"
              />
              <h3 class="text-xl font-bold">Web Developer</h3>
            </div>

            <div class="bg-gray-800 border border-purple-500 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <img
                src="/path-to-icon2.png"
                alt="React Developer"
                class="mx-auto w-16 h-16 mb-6"
              />
              <h3 class="text-xl font-bold">React Developer</h3>
            </div>

            <div class="bg-gray-800 border border-purple-500 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <img
                src="/path-to-icon3.png"
                alt="Backend Developer"
                class="mx-auto w-16 h-16 mb-6"
              />
              <h3 class="text-xl font-bold">Backend Developer</h3>
            </div>

            <div class="bg-gray-800 border border-purple-500 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <img
                src="/herobg.png"
                alt="Full Stack Developer"
                class="mx-auto w-16 h-16 mb-6"
              />
              <h3 class="text-xl font-bold">Full Stack Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
