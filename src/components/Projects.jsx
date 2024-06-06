import React from 'react'
import taskify from '../assets/taskify.png'
import pixel12 from '../assets/pixel12.jpg'
import pixel13 from '../assets/pixel13.jpg'
import pixel14 from '../assets/pixel14.jpg'
import pixel15 from '../assets/pixel15.jpg'
import pixel16 from '../assets/pixel16.jpg'

const Projects = () => {

const project= [
    {
        id: 1,
        src: taskify,
        demo: 'https://react-js-internship-week2-taskify-to-do-list-app.vercel.app/',
        code: 'https://github.com/hashtagronit/ReactJS-Internship-Week2-Taskify-ToDoListApp'
    },
    {
        id: 2,
        src: pixel12,
        demo: 'https://www.instagram.com/hashtagronit/',
        code: 'https://github.com/hashtagronit'
    },
    {
        id: 3,
        src: pixel13,
        demo: 'https://www.instagram.com/hashtagronit/',
        code: 'https://github.com/hashtagronit'
    },
    {
        id: 4,
        src: pixel14,
        demo: 'https://www.instagram.com/hashtagronit/',
        code: 'https://github.com/hashtagronit'
    },
    {
        id: 5,
        src: pixel15,
        demo: 'https://www.instagram.com/hashtagronit/',
        code: 'https://github.com/hashtagronit'
    },
    {
        id: 6,
        src: pixel16,
        demo: 'https://www.instagram.com/hashtagronit/',
        code: 'https://github.com/hashtagronit'
    }
    
];

  return (
    <div id='Projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        {
            project.map(({id,src,demo,code})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    < button  onClick={() => window.open(demo, "_blank")} className='w-1/2 px-6 py-3 m-4 duration:200 hover:scale-105'>Demo</ button>
                    < button  onClick={() => window.open(code, "_blank")} className='w-1/2 px-6 py-3 m-4 duration:200 hover:scale-105'>Code</ button>
                </div>
            </div> 
      
            ))
        }
        
            
        </div>
      </div>
    </div>
  )
}

export default Projects
