import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="" style={{backgroundColor:"#2c3e50"}}>
                <div className='footer  container mx-auto py-12 text-white'>
                    <div class="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-4">
                        <div class=" p-4 text-center">
                            <h3 className='text-3xl font-semibold pb-4'>LOCATION</h3>
                            <p className='pb-3'>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>

                        <div class="  p-4 text-center">
                            <h3 className='text-3xl font-semibold pb-4'>AROUND THE WEB</h3>
                            <div className='flex gap-3 justify-center '>
                                <i className='fa-brands fa-facebook text-white border border-1 border-white  p-3 rounded-full'></i>
                                <i className='fa-brands fa-twitter text-white border border-1 border-white  p-3 rounded-full'></i>
                                <i className='fa-brands fa-linkedin-in text-white border border-1 border-white  p-3 rounded-full'></i>
                                <i className='fa-solid fa-globe text-white border border-1 border-white  p-3 rounded-full'></i>

                                
                            </div>
                        </div>
                        <div class="  p-4 text-center">
                            <h3 className='text-3xl font-semibold pb-4'>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
                <div className='bg-black text-center text-white py-9' style={{backgroundColor:"#1a252f"}}>
                    <p>Copyright © Your Website 2021</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
