import '../index.css';


function About() {

  return (
    <div className='bg-customBlue2 pt-[40px] pb-[60px] lg:p-[100px]'>
        <h1 className='main-title text-center'>About me</h1>
        <div className='w-[80%] mt-[15px] mx-auto md:w-[60%] lg:w-[80%] lg:text-[20px] lg:mt-[50px]'>
            <p className='text-center text-[10px] lg:text-[20px]'>A motivated and detail-oriented student with a strong passion for the IT industry. Currently pursuing a Bachelor’s degree in Information Technology, with a focus on expanding knowledge in web development, MySQL, and Python through coursework, personal projects, and a capstone (thesis) project. Gained practical programming skills through hands-on experience and successfully contributed to the development of the capstone project.</p>
        </div>
        <div>
            <h2 className='sub-title text-center mt-5 lg:mt-10'>Education</h2>
            <div className='cards flex'>
                {/** EDUCATION1 */}
                <div className='card-sm p-3 lg:p-5 flex flex-col'>
                    <h2 className='card-title mt-2'>OUR LADY OF FATIMA UNIVERSITY</h2>
                    <h3 className='card-subtitle mt-2 mx-auto lg:mt-5 lg:w-[300px]'>Bachelor of Science in Information Technology</h3>
                    <p className='card-year mt-auto'>2021 - Expected July 24, 2025</p>
                </div>

                {/** EDUCATION2 */}
                <div className='card-sm p-3 lg:p-5 flex flex-col'>
                    <h2 className='card-title mt-2'>OUR LADY OF FATIMA UNIVERSITY</h2>
                    <h3 className='card-subtitle mt-2 mx-auto lg:mt-5 lg:w-[350px]'>Science, Technology, Engineering, and Mathematics</h3>
                    <p className='card-year mt-auto'>2019 - 2021</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
