import React from 'react';



export default function Register(){
    return(
        <>
        <div className="container mx-auto" style={{marginTop:"140px"}}>
        <div className='flex flex-col justify-center items-center pb-6'>
                        <h2 style={{color:"#2c3e50"}} className='font-bold text-5xl'>CONATCT SECTION</h2>
                        <div className='flex justify-between pt-6'>
                            <div className='h-1 my-1' style={{ width: "80px", backgroundColor:"#2c3e50" }}></div>
                            <i style={{color:"#2c3e50"}} className='fa-solid fa-star px-6 '></i>
                            <div className='h-1 my-1' style={{ width: "80px" , backgroundColor:"#2c3e50"}}></div>
                        </div>
                    </div>
            <form className='flex flex-col gap-12 w-1/2 mx-auto my-12'>
                <div>
                    <input type="text" className=' border-b-2 shadow-sm w-full rounded-2xl py-3 px-3 outline-none' placeholder='userName'/>
                </div>
                <div>
                    <input type="num" className=' border-b-2 shadow-sm w-full rounded-2xl py-3 px-3 outline-none' placeholder='userAge'/>
                </div>
                <div>
                    <input type="email" className=' border-b-2 shadow-sm w-full rounded-2xl py-3 px-3 outline-none' placeholder='userEmail'/>
                </div>
                <div>
                    <input type="password" className=' border-b-2 shadow-sm w-full rounded-2xl py-3 px-3 outline-none' placeholder='userPassword'/>
                </div>
                <button className='py-3 justify-start font-semibold w-1/6 rounded-lg text-white' style={{backgroundColor:"#1abc9c"}}>send Mesaage</button>
            </form>
        </div>
        </>
    )
}
