import React from 'react';


export default function About() {
  return (
    <>
      <div className='text-white ' style={{ backgroundColor: "#1abc9c" }}>
        <div className="h-svh w-3/4 mx-auto inner flex flex-col justify-center items-center ">
          <h2 className=' font-bold text-5xl  pb-10'>ABOUT COMPONENT</h2>
          <div className='flex justify-between'>
            <div className='h-1 bg-white my-1' style={{ width: "80px" }}></div>
            <i className='fa-solid fa-star px-6 '></i>
            <div className='h-1 bg-white my-1' style={{ width: "80px" }}></div>

          </div>

          <div className='flex flex-col sm:flex-row pt-7 gap-9'>
            <div className='w-full sm:w-1/2'>
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className='w-full sm:w-1/2'>
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
