import { useState, useEffect, useRef } from 'react';
import './index.css';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import formal from './assets/formal.JPG'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import email from './assets/email.png'

function App() {
  const phrases = [
    "Front-end Developer",
    "Web Developer",
    "I enjoy coding!",
    "I love to explore."
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); 
  const [charIndex, setCharIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];

    let typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      const updatedCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setCharIndex(updatedCharIndex);
      setText(currentPhrase.substring(0, updatedCharIndex));

      if (!isDeleting && updatedCharIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && updatedCharIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  return (
    <div className="relative overflow-x-hidden">
      <NavigationBar />
      <section id="home">
        <div className="grid grid-cols-[2fr_1fr] mt-[30px] sm:mt-[20px] sm:grid-cols-2 sm:grid-rows-[1fr_1.1fr] md:grid-cols-[1.3fr_1fr] md:grid-rows-[1fr_1.2fr] lg:h-full lg:mt-[30px]">
          <div className='mt-10 p-4 sm:ml-[30px] lg:pl-[50px]'>
            <h3 className='text-customPink font-inter text-[15px] font-extrabold lg:text-[20px]'>
              Hi, my name is <br/> 
            <span className='text-white text-[30px] sm:text-[40px] lg:text-[70px]'>Lian Gaile</span>
            </h3>
            <div className='lg:h-[50px]'>
              <h2 className='text-customGray font-inter font-extrabold sub-title text-[15px] lg:text-[35px]'>{text}<span class="border-r-2 border-customGray animate-pulse ml-1"/></h2>
            </div>
          </div>
        

          <div className='mt-5 sm:mt-1 sm:row-span-2 sm:m-10 md:mt-2'>
            <img src={formal} alt="Lian Gaile" className='rounded-full object-cover transition-transform duration-300 hover:scale-110 lg:center image'/>
          </div>

          <div className='p-4 col-span-2 sm:col-span-1 sm:col-start-1 sm:ml-[30px] lg:p-0'>
            <p className='text-[10px] lg:text-[20px] lg:pl-[50px] text-justify'>I love the ever-evolving challenge of web development. I’m dedicated to writing clean, efficient code and building digital experiences that are both visually appealing and highly functional. With a passion for continuous learning and problem-solving. Let’s build something great together!</p>
            <div className='flex flex-row gap-1 mt-2 sm:gap-2 sm:mt-5 lg:mt-5 lg:pl-[50px]'>
              <a href="https://drive.google.com/file/d/1uVi2eA-HOtCvTF37XNUMdOFV3_fdhiIV/view" target="_blank" rel="noopener noreferrer"><button className="button font-inter text-customPink border-customPink relative overflow-hidden hover:text-white focus:text-white active:scale-90">
                RESUME
              </button></a>
              <a href="https://www.linkedin.com/in/lian-gaile-jaspeo-b85847303" target="_blank" rel="noopener noreferrer"><img src={linkedin} className='icon'/></a>
              <a href="https://github.com/Lili0009" target="_blank" rel="noopener noreferrer"><img src={github} className='icon' /></a>
              <a href="mailto:liancjaspeo@gmail.com" rel="noopener noreferrer"><img src={email} className='icon' /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experiences">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <div className='flex flex-col justify-center items-center font-jetbrains py-[15px] lg:py-[35px]'>
        <div className='text-[9px] lg:text-sm'>Designed & Developed by Lian Gaile</div>
        <div className='text-[7px] lg:text-xs'>© 2025 Lian Gaile. All rights reserved.</div>        
      </div>

    </div>
  );
}

export default App;
