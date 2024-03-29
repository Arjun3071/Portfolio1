import React,{useState} from 'react' 

import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,

 
    FaWhatsapp,
} from 'react-icons/fa'
  import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Arjun_Reactjs from '../assests/Arjun_Reactjs.pdf'




const Navbar = () => { 
    const [nav,setNav] = useState(false)
    const handleclick = () => setNav(!nav)
  return (
    <div  className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
   

    {/* menu */}
   
        <ul className='hidden md:flex'>
            <li>  <Link to="home" s smooth={true}  duration={500} >
          Home
        </Link></li>
            <li><Link to="about" s smooth={true}  duration={500} >
          About
        </Link></li>
            <li><Link to="skills" s smooth={true}  duration={500} >
          Skills
        </Link></li>
        
            <li><Link to="contact" s smooth={true}  duration={500} >
          Contact
        </Link></li>
        </ul>


    <div onClick={handleclick} className='md:hidden z-10 '>
      {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/* Mobile menu */}
    <ul className={!nav ? 'hidden' : 'absolute  w-full top-0 left-0 h-screen  bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'> <Link onClick={handleclick} to='home'  smooth={true}  duration={500} >
          Home
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleclick} to="about" smooth={true}  duration={500} >
          About
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleclick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
          
            <li className='py-6 text-4xl'><Link onClick={handleclick} to="contact" s smooth={true}  duration={500} >
          Contact
        </Link></li>
    </ul>

    {/* Social icons*/}
    <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
               <a className='flex justify-between items-center w-full text-gray-300'
               href="https://linkedin.com/in/arjun-p3071" >Linkedin <FaLinkedin size={30} />
               </a> 
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
               <a className='flex justify-between items-center w-full text-gray-300'
               href="https://github.com/Arjun3071" >Github <FaGithub size={30} />
               </a> 
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
               <a className='flex justify-between items-center w-full text-gray-300'
               href="mailto:arjunbenn97@gmail.com" >Email <HiOutlineMail size={30} />
               </a> 
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
               <a className='flex justify-between items-center w-full text-gray-300'
               href={Arjun_Reactjs} download >Resume <BsFillPersonLinesFill size={30} />
               </a> 
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
               <a className='flex justify-between items-center w-full text-white-600'
               href="https://api.whatsapp.com/send?phone+919744851517" >Whatsapp <FaWhatsapp size={30} />
               </a> 
            </li>
        </ul>

    </div>




    </div>
  );
};

export default Navbar