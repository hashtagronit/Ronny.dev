import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link} from "react-scroll"
import Skills from './Skills';

const HomePage = () => {
  return (
    <div id='home' className="h-screen w-full bg-gradient-to-b from-black to-gray-800 flex flex-col"> {/* Entire content area */}
      <main className="flex flex-col justify-center items-center h-full"> {/* 80% height, centered content */}
        <h3 className="text-1xl sm:text-2xl text-center font-bold text-emerald-400 mt-20">HELLO, WORLD</h3>
        <h1 className="text-6xl sm:text-8xl text-center font-bold text-white">I'm Ronit Raj</h1>
        <span className="flex text-xs sm:text-2xl text-center text-white justify-center">
          <p className="text-sm md:text-xl mb-8 mt-2 mr-3">JAVA DEVELOPER</p>
          <p className="text-sm md:text-xl mb-8 mt-2 ml-3">REACT DEVELOPER</p>
        </span>
        <div className="flex justify-center">
          <Link to='About' smooth duration={500} className="hover:border-emerald-400 text-xs text-white flex w-fit items-center px-8 py-5 mb-15 font-bold border-2 border-gray-500 p-8 cursor-pointer">
            MORE ABOUT ME
            <span className="ml-2">
              <IoIosArrowDown size={15} />
            </span>
          </Link>
        </div>
      </main>
      <div className=" mb-20 w-full h-20 flex justify-center items-center "> {/* Social links container, fixed at bottom, 20% height */}
        <ul className="flex items-center text-white  "> {/* Centered social links */}
          <li className="mr-10"> {/* Add margin to separate icons */}
            <a href="https://www.linkedin.com/in/hashtagronit/" target="blank">
              <FaLinkedin className='sm:text-4xl text-2xl hover:text-emerald-400' />
            </a>
          </li>
          <li className="mr-10">
            <a href="https://github.com/hashtagronit" target="blank">
              <FaGithub className='sm:text-4xl text-2xl hover:text-emerald-400' />
            </a>
          </li>
          <li className="mr-10">
            <a href="mailto:ronit9450@gmail.com" target="blank">
              <HiOutlineMail className='sm:text-4xl text-2xl hover:text-emerald-400' />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hashtagronit/" target="blank">
              <FaInstagram className='sm:text-4xl text-2xl hover:text-emerald-400' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
