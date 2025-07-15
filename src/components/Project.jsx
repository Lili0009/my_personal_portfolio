import '../index.css';
import react from '../assets/react.png'
import github from '../assets/github.png'
import php from '../assets/php.png'
import python from '../assets/python.png'
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import wordpress from '../assets/wordpress.png'


function Project() {
    useEffect(() => {
        const swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        simulateTouch: true,
        allowTouchMove: true,
        centeredSlides: true,
        loop: false,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 3,
            slideShadows: true,
        },
        spaceBetween: 80,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        initialSlide:1,
        });
    }, []);

  return (
    <div className='bg-customBlue2 p-[20px] lg:p-[100px]'>
        <h1 className='main-title text-center'>My Projects</h1>
        <div className='swiper mt-[59px]'>
            <div className="swiper-wrapper">
                <div className='swiper-slide'>
                    <div className=" flex items-center justify-center text-center p-3 py-[90px] px-1 sm:py-[100px] sm:px-2 lg:py-[150px] lg:px-2 ">
                        <h2 className="card-lg-title mt-2">MY PROJECTS</h2>
                    </div>
                </div>

                <div className="swiper-slide">
                        <div className='flex items-center justify-between'>
                            <div>
                                <h2 className='card-lg-title mt-2'>Personal Portfolio</h2>
                                <h3 className='card-lg-year font-jetbrains'>2025 | Designer & Developer</h3>
                            </div>
                            <img src={react} className='icon-logo' />
                        </div>
                        <div className='mb-[20px] md:h-[100px] lg:h-[150px]'>
                            <p className='card-lg-subtitle mt-5 leading-[1.590]'>
                                A fully responsive personal portfolio website built to showcase my projects, skills, and resume. Designed and developed from scratch, with a focus on clean UI, mobile responsiveness, and accessibility.
                            </p>
                        </div>
                        <div className='mt-auto'>
                            <h1 className='font-inter font-semibold mb-1 text-[10px] lg:text-[15px]'>Tech Stack</h1>
                            <div className='flex gap-2'>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>React.js</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>Tailwindcss</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>Node.js</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>Figma</h3>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='flex gap-3'>
                                <img src={github} className='icon-logo inline-block'/>
                                <a href="https://github.com/Lili0009/my_personal_portfolio" target="_blank" rel="noopener noreferrer" className='text-[10px] sm:mt-[1px] lg:text-[15px] lg:mt-1 inline-block text-customGray font-inter font-semibold hover:text-customPink'>Source Code</a>
                            </div>
                        </div>
                    </div>

                    <div className='swiper-slide'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h2 className='card-lg-title mt-2'>Hydrocision</h2>
                                <h3 className='card-lg-year font-jetbrains'>Feb 2024 - Dec 2024  |  Fullstack</h3>
                            </div>
                            <img src={python} className='icon-logo' />
                        </div>
                        <div className='mb-[20px] md:h-[100px] lg:h-[150px]'>
                            <p className='card-lg-subtitle mt-5 leading-[1.590]'>
                                Hydrocision is a data-driven Decision Support System (DSS) powered by a Long Short-Term Memory (LSTM) neural network. Designed to support Manila Water, the system analyzes historical and real-time data to generate forecasts. Its core objective is to optimize the management and allocation of available water resources, enabling more efficient and informed decision-making during critical water supply conditions.
                            </p>
                        </div>
                        <div className='mt-auto'>
                            <h1 className='font-inter font-semibold mb-1 text-[10px] lg:text-[15px]'>Tech Stack</h1>
                            <div className='flex gap-2'>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>Python</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>Django</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>HTML5</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>CSS3</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>JavaScript</h3>
                                </div>                        
                            </div>
                            <div className='line'></div>
                            <div className='flex gap-3'>
                                <img src={github} className='icon-logo inline-block'/>
                                <a href="https://github.com/Lili0009/Hydrocision" target="_blank" rel="noopener noreferrer" className='text-[10px] sm:mt-[1px] lg:text-[15px] lg:mt-1 inline-block text-customGray font-inter font-semibold hover:text-customPink'>Source Code</a>
                            </div>
                        </div>
                    </div>

                    <div className='swiper-slide'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h2 className='card-lg-title mt-2'>Ordering System</h2>
                                <h3 className='card-lg-year font-jetbrains'>Sept 2023 - May 2024  |  Project Manager & Programmer</h3>
                            </div>
                            <img src={php} className='icon-logo' />
                        </div>
                        <div className='mb-[20px] md:h-[100px] lg:h-[150px]'>
                            <p className='card-lg-subtitle mt-5 leading-[1.590]'>
                                The system aims to enhance customer satisfaction by streamlining the ordering process, making it as simple and efficient as possible. It organizes all online transactions in a way that is convenient for both the buyers and the business, ensuring a smooth and user-friendly experience for all parties involved. The system is designed to boost performance and client satisfaction.                
                            </p>
                        </div>
                        <div className='mt-auto'>
                            <h1 className='font-inter font-semibold mb-1 text-[10px] lg:text-[15px]'>Tech Stack</h1>
                            <div className='flex gap-2'>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>PHP</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>HTML5</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>CSS3</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>MySQL</h3>
                                </div>
                                <div className='round-container inline-block rounded-full'>
                                    <h3 className='round-container-content'>JavaScript</h3>
                                </div>                        
                            </div>
                            <div className='line'></div>
                            <div className='flex gap-3'>
                                <img src={github} className='icon-logo inline-block'/>
                                <a href="https://github.com/Lili0009/Ordering-System" target="_blank" rel="noopener noreferrer" className='text-[10px] sm:mt-[1px] lg:text-[15px] lg:mt-1 inline-block text-customGray font-inter font-semibold hover:text-customPink'>Source Code</a>
                            </div>
                        </div>
                    </div>

              

                    <div className='swiper-slide'>
                        <div className="flex flex-col items-center justify-center text-center p-3 py-[30px] lg:p-5 lg:py-[90px]">
                            <h2 className="card-lg-title mt-2">UPCOMING PROJECT...</h2>
                            <h3 className="card-lg-year font-jetbrains">WORDPRESS</h3>
                            <img src={wordpress} className="w-9 h-9 my-4" />
                            <p className="card-lg-subtitle mt-5 leading-[1.590]">
                            A planned web application focused on CMS-based deployment using
                            WordPress with custom plugins and themes.
                            </p>
                        </div>
                    </div>

                   
            </div>
            <div className='mt-[40px] sm:mt-[40px] md:mt-[60px]'>
                <div class="swiper-pagination"></div>      
            </div>          
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    </div>
  );
}

export default Project;
