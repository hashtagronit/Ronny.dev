import React from 'react'
import  java  from "../assets/java.png";
import  html5  from "../assets/html5.png";
import  css3  from "../assets/css3.png";
import  mongodb  from "../assets/mongodb.png";
import  nodejs  from "../assets/nodejs.png";
import  github  from "../assets/github.png";
import  javascript  from "../assets/javascript.png";
import  tailwind  from "../assets/tailwind.png";
import  reactlogo  from "../assets/reactlogo.png";
import { FaGithub } from "react-icons/fa";


const Skills = () => {
const techstack=[
    {
        id:1,
        src:html5,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id:2,
        src:css3,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id:3,
        
        src: java,
        title: 'JAVA',
        style: 'shadow-blue-500'
    },
    {
        id:4,
        src:reactlogo,
        title: 'REACT',
        style: 'shadow-blue-300'
        
    },
    {
        id:5,
        src:javascript,
        title: 'JAVASCRIPT',
        style: 'shadow-yellow-500'
    },
    {
        id:6,
        src:tailwind,
        title: 'Tailwind',
        style: 'shadow-blue-300'
    },
    {
        id:7,
        src:nodejs,
        title: 'NodeJS',
        style: 'shadow-green-700'
    },
    
   
    {
        id:8,
        src:mongodb,
        title: 'MongoDB',
        style: 'shadow-lime-600'
    },
    
    
]

  return (
    <div id="Skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  text-white '>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-400 p-2 inline'>Skills</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8  text-center py-8 px-12 sm:px-0 '>

            {
                techstack.map(({id,src,title,style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt='' className='w-20 mx-auto'></img>
                <p className='mt-4'>{title}</p>
                </div>

                ))
            }
        
                
            </div>
        </div>
      
    </div>
  )
}

export default Skills
