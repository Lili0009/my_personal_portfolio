import { useState, useEffect, useRef } from 'react';
import '../index.css';
function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }


    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

    
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
      {/* Mobile navigation bar */}
      <div className='fixed top-0 left-0 right-0 z-50'>
        <nav className={`flex justify-between items-center md:hidden w-full transition-all duration-300 ${
              scrolled ? 'bg-customBlue2 shadow-lg scale-105 h-[20px] p-8' : 'h-[65px] p-7'
            }`}>
          <h1 className={`text-lg font-bold ${ scrolled ? 'opacity-100' : 'opacity-0'}`}>Lian Gaile</h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          <ul className="space-y-4">
            {['Home', 'About', 'Skills', 'Projects', 'Experiences', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)} 
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Desktop navigation bar */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50">
        <nav
          className={` py-2 px-4 mx-auto rounded-xl flex justify-center items-center transition-all duration-300 ${
            scrolled ? 'bg-customBlue2 shadow-lg scale-105 w-full h-[65px]' : 'bg-gray-700 mt-5 md:w-[500px] md:h-[35px] lg:w-[570px] lg:h-[45px]'
          }`}
        >
          <ul className="flex justify-center space-x-[25px] font-sans-serif md:text-[12px] lg:text-sm">
            <li><a href="#home" className="hover">Home</a></li>
            <li><a href="#about" className="hover">About</a></li>
            <li><a href="#skills" className="hover">Skills</a></li>
            <li><a href="#projects" className="hover">Project</a></li>
            <li><a href="#experiences" className="hover">Experience</a></li>
            <li><a href="#contact" className="hover">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavigationBar;
