import '../index.css';
import IconLogo from './IconLogo';
import Label from './Label';
import html5 from '../assets/html5.png'
import css3 from '../assets/css3.png'
import php from '../assets/php.png'
import typescript from '../assets/typescript.png'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import swift from '../assets/swift.png'
import sql from '../assets/sql.png'
import react from '../assets/react.png'
import laravel from '../assets/laravel.png'
import django from '../assets/django.png'
import tailwindcss from '../assets/tailwindcss.png'
import mysql from '../assets/mysql.png'
import oracle from '../assets/oracle.png'
import git from '../assets/git.png'
import github2 from '../assets/github2.png'
import postman from '../assets/postman.png'
import vscode from '../assets/vscode.png'
import android from '../assets/android.png'
import figma from '../assets/figma.png'



function Skills() {

  return (
    <div className='pb-[60px] lg:p-10 lg:pb-[100px]'>
        <h1 className='main-title text-center pt-10 lg:pt-20'>My Skills</h1>
        <div className='ml-[10px] sm:ml-[30px] md:ml-[50px] lg:ml-[70px]'>
            <div className="flex items-center gap-3 mt-[40px] lg:gap-10 lg:mt-[60px] ">
                <h2 className='category text-customGray'>LANGUAGES</h2>

               <div className="flex flex-row items-center space-x-2 group transition-all duration-300 ">
                    <div className="relative flex items-center">
                        <img src={html5} className='icon-logo'/>
                        <Label label={'HTML5'}/>                       
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[65px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

               <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={css3} className='icon-logo'/>
                        <Label label={'CSS3'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[50px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

               <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={typescript} className='icon-logo'/>
                        <Label label={'TYPESCRIPT'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[85px]
                        md:group-hover:w-[90px]
                        lg:group-hover:w-[100px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

               <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={javascript} className='icon-logo'/>
                        <Label label={'JAVASCRIPT'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[85px]
                        lg:group-hover:w-[90px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

               <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={python} className='icon-logo'/>
                        <Label label={'PYTHON'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[70px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

               <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={swift} className='icon-logo'/>
                        <Label label={'SWIFT'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[75px]
                        lg:group-hover:w-[65px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

               <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={sql} className='icon-logo'/>
                        <Label label={'SQL'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[80px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

            </div>

            <div className="flex items-center gap-3 mt-[20px] lg:gap-10 lg:mt-[60px]">
                <h2 className='category text-customGray'>FRAMEWORKS & LIBRARIES</h2>
                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={react} className='icon-logo'/>
                        <Label label={'REACT'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[60px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={laravel} className='icon-logo'/>
                        <Label label={'LARAVEL'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[80px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={django} className='icon-logo'/>
                        <Label label={'DJANGO'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[75px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={tailwindcss} className='icon-logo'/>
                        <Label label={'TAILWIND CSS'}/>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 mt-[20px] lg:gap-10 lg:mt-[60px]">
                <h2 className='category text-customGray '>DATABASE</h2>
                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={mysql} className='icon-logo'/>
                        <Label label={'MYSQL'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[75px]
                        transition-all duration-500
                        "
                    ></div>
                </div>
                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={oracle} className='icon-logo'/>
                        <Label label={'ORACLE'}/>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 mt-[20px] lg:gap-10 lg:mt-[60px]">
                <h2 className='category text-customGray '>TOOLS</h2>
                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={git} className='icon-logo'/>
                        <Label label={'GIT'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[50px]
                        transition-all duration-500
                        "
                    ></div>
                </div>

                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={github2} className='icon-logo'/>
                        <Label label={'GITHUB'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[70px]
                        transition-all duration-500
                        "
                    ></div>
                </div>         

                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={postman} className='icon-logo'/>
                        <Label label={'POSTMAN'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[70px]
                        transition-all duration-500
                        "
                    ></div>
                </div>          

                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={vscode} className='icon-logo'/>
                        <Label label={'VS Code'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[65px]
                        transition-all duration-500
                        "
                    ></div>
                </div>         

                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={android} className='icon-logo'/>
                        <Label label={'ANDROID STUDIO'}/>
                    </div>
                    <div
                        className="
                        w-0 sm:group-hover:w-[75px]
                        transition-all duration-500
                        "
                    ></div>
                </div>       

                <div className="flex flex-row items-center space-x-2 group transition-all duration-300">
                    <div className="relative flex items-center">
                        <img src={figma} className='icon-logo'/>
                        <Label label={'FIGMA'}/>
                    </div>
                </div>      
            </div>

            <div className="flex items-center gap-3 mt-[20px] lg:gap-5 lg:mt-[60px]">
                <h2 className='category text-customGray '>CORE COMPETENCIES</h2>
                <div className="flex core-container">Adaptability</div>
                <div className="flex core-container">Time Management</div>                
                <div className="flex core-container">Leadership</div>
                <div className="flex core-container">Communication</div>
            </div>
        </div>
    </div>
  );
}

export default Skills;
