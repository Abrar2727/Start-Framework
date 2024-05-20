import React from 'react';


export default function Portfolio() {
    return (
        <>
            <div className='' style={{paddingTop:"130px"}}>
                <div className=" mb-5 container mx-auto" style={{color:"#2c3e50"}}>
                    <div className='flex flex-col justify-center items-center pb-6'>
                        <h2 className='font-bold text-5xl'>PORTFOLIO COMPONENT</h2>
                        <div className='flex justify-between pt-6'>
                            <div className='h-1  my-1' style={{ width: "80px", backgroundColor:"#2c3e50" }}></div>
                            <i className='fa-solid fa-star px-6 '></i>
                            <div className='h-1  my-1' style={{ width: "80px" , backgroundColor:"#2c3e50"}}></div>
                        </div>
                    </div>
                 

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
  <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="Image 1" className="w-full rounded-2xl" />
  <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="Image 2" className="w-full  rounded-2xl" />
  <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="Image 3" className="w-full  rounded-2xl" />
  <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="Image 4" className="w-full  rounded-2xl" />
  <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="Image 5" className="w-full  rounded-2xl" />
  <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="Image 6" className="w-full  rounded-2xl" />
</div>
                </div>
            </div>
        </>
    )
}
