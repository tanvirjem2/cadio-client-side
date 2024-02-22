import video from '../../../assets/Home/The Breathtaking Beauty of Nature _ HD.mp4'

// Use Aos -------- for Animation
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Choose = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div className="mt-[100px] bg-[#062759]">
            <div data-aos="fade-up" className='py-24'>
                <div className="grid grid-cols-2 gap-[30px] w-[90%] mx-auto">
                    <div>
                        <p className='text-base text-[#FFFFFFB2] barlow-extrabold mb-[10px]'>Why</p>
                        <div className="space-y-[30px]">
                            <h1 className="text-5xl lg:text-[64px] barlow-bold lg:leading-[65px] text-white">
                                Why Choose Us?
                            </h1>
                            <div className="leading-6 text-[#FFFFFFB2] space-y-8">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <p className="barlow-bold text-[32px] text-white lg:leading-[35px]">
                                Customize the look👌
                            </p>
                        </div>
                    </div>
                    <div>
                        <video className='rounded-lg' src={video} controls="controls"></video>
                    </div>
                </div>
                <div className='grid grid-cols-4 w-[90%] mx-auto gap-[30px] mt-8'>
                    <div className='drop-shadow-lg bg-white p-5 rounded-md space-y-[7px]'>
                        <div className='flex items-center justify-between barlow-bold'>
                            <p className='text-2xl'>Best Quote</p>
                            <p className='text-[44px] text-[#0094ED33] leading-[45px]'>01</p>
                        </div>
                        <p className='text-[#737373] leading-6'>
                            Lorem ipsum dolor amet conse tetur adipiscing elit sed.
                        </p>
                    </div>
                    <div className='drop-shadow-lg bg-white p-5 rounded-md space-y-[7px]'>
                        <div className='flex items-center justify-between barlow-bold'>
                            <p className='text-2xl'>Pro Technicians</p>
                            <p className='text-[44px] text-[#0094ED33] leading-[45px]'>02</p>
                        </div>
                        <p className='text-[#737373] leading-6'>
                            Lorem ipsum dolor amet conse tetur adipiscing elit sed.
                        </p>
                    </div>
                    <div className='drop-shadow-lg bg-white p-5 rounded-md space-y-[7px]'>
                        <div className='flex items-center justify-between barlow-bold'>
                            <p className='text-2xl'>Ample Parking</p>
                            <p className='text-[44px] text-[#0094ED33] leading-[45px]'>03</p>
                        </div>
                        <p className='text-[#737373] leading-6'>
                            Lorem ipsum dolor amet conse tetur adipiscing elit sed.
                        </p>
                    </div>
                    <div className='drop-shadow-lg bg-white p-5 rounded-md space-y-[7px]'>
                        <div className='flex items-center justify-between barlow-bold'>
                            <p className='text-2xl'>Prompt Delivery</p>
                            <p className='text-[44px] text-[#0094ED33] leading-[45px]'>04</p>
                        </div>
                        <p className='text-[#737373] leading-6'>
                            Lorem ipsum dolor amet conse tetur adipiscing elit sed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;