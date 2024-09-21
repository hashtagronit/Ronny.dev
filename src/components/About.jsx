import React from 'react';
import myimage from '../assets/myimage.jpg'; // Import your image here

const About = () => {
  return (
    <div id="About" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen flex flex-col items-start">
      <div className="max-w-screen-lg mx-auto px-8 py-16"> {/* Responsive layout */}
        <h3 className="text-4xl font-bold mb-20 text-left md:text-left underline underline-offset-4 text-white  ">About Me</h3> {/* Maintained heading position, left on mobile */}
        <div className="flex flex-col md:flex-row md:items-center "> {/* Responsive layout for image and description */}
          <div className="flex justify-center md:justify-start w-full md:w-1/3"> {/* Image on left side */}
            <img src={myimage} alt="Ronit" className="object-cover w-2/3 md:w-full rounded-lg shadow-lg" />
          </div>
          <div className="flex-grow mt-12 ml-0 md:ml-12 md:w-2/3"> {/* Description on right side */}
            <p className="md:text-lg mb-6 text-justify text-white">
              Hi, I'm Ronit, a Computer Science enthusiast passionate about JAVA, React, and SQL. Experienced in web development, with strong leadership and communication skills for innovative projects.
            </p>
            <div className="flex justify-center mt-10 md:justify-start"> {/* Buttons on mobile, bottom center */}
              <button onClick={() => window.location.href='#Contact'} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mr-4 focus:outline-none">
                Hire Me
              </button>
              <button
  onClick={() => {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=18H97NWFju9hCkPKe2Kk-4we4Y3r2PXTl'; // Google Drive direct download link
    const link = document.createElement('a');
    link.href = resumeUrl;
    
    link.click();
  }}
  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none"
>
  Resume
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
