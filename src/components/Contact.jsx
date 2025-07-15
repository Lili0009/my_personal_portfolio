import '../index.css';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/email.png'


function Contact() {

  return (
    <div className='bg-customBlue2 pb-[60px] p-[20px] md:pb-[20px] lg:p-[100px]'>
        <h1 className='main-title text-center lg:pt-10'>Let’s Collaborate!</h1>
        <div className='w-[80%] mt-[15px] mx-auto sm:w-[60%] lg:text-[20px] lg:mt-[50px]'>
            <p className='text-center text-[10px] lg:text-[20px]'>
              I'm currently seeking new opportunities to kickstart my career in tech. Whether you have a role in mind, a question, or just want to connect, feel free to reach out — my inbox is always open. I’ll do my best to get back to you as soon as I can!
            </p>
        </div>
        <div className='flex flex-row gap-2 mt-5 lg:mt-10 lg:pl-[50px] justify-center'>
            <a href="https://www.linkedin.com/in/lian-gaile-jaspeo-b85847303" target="_blank" rel="noopener noreferrer"><img src={linkedin} className='icon'/></a>
            <a href="https://github.com/Lili0009" target="_blank" rel="noopener noreferrer"><img src={github} className='icon' /></a>
            <a href="mailto:liancjaspeo@gmail.com" rel="noopener noreferrer"><img src={email} className='icon' /></a>
        </div>
    </div>
  );
}

export default Contact;
