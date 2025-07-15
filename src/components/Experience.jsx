import '../index.css';


function Experience() {

  return (
    <div className='pb-[60px] p-[20px] lg:p-[100px]'>
        <h1 className='main-title text-center'>Experience</h1>
            <div className='flex flex-row justify-center mt-5 gap-5 lg:mt-10 lg:gap-20'>      
                <div className='bg-white w-[1px] h-[130px] lg:w-[0.5px] lg:h-[350px] relative'>
                    <div className='circle'></div>  
                </div>

                
                <div className='card-sm bg-customBlue2 rounded-lg flex flex-col w-[400px] p-2 sm:max-md:overflow-y-auto lg:w-[800px] lg:p-5'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h2 className='card-lg-title mt-0 text-[10px] lg:text-[20px]'>Personal Portfolio</h2>
                        </div>
                        <h4 className='font-inter text-[7px] lg:text-[13px]'>Jan 2025 - May 2025</h4>
                    </div>
                    <h3 className='card-lg-year font-inter'>Solutions Resource</h3>
                    <div className='text-[8px] p-3 pt-2 lg:text-[16px] lg:p-5 lg:pt-3'>
                        <ul className='list-disc leading-relaxed'>
                            <li>Collaborated with a team of experienced developers to build an Android app using React Native. </li>
                            <li>Implemented features and functionality by writing clean, maintainable code in React Native (Typescript) </li>
                            <li>Established basic data-fetching APIs for seamless front-end integration</li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Experience;
