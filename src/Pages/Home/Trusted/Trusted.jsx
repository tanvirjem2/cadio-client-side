import trustImage from '../../../assets/Home/car-multimedia-system-2023-11-27-05-09-43-utc.jpg'

import { IoMdCheckboxOutline } from "react-icons/io";

// Use Aos -------- for Animation
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Trusted = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-[90%] mx-auto mt-[100px]'>
            <div>
                <img className='rounded-lg' src={trustImage} alt="" />
            </div>
            <div>
                <p className='text-base text-[#737373] barlow-extrabold mb-[10px]'>TRUSTED</p>
                <div className='space-y-[30px]'>
                    <p className='text-5xl lg:text-[64px] barlow-bold lg:leading-[65px]'>
                        Trusted Car Audio System
                    </p>
                    <p className='leading-6 text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='flex flex-wrap lg:flex-nowrap gap-[30px]'>

                        <div className='space-y-5'>
                            <div className='flex gap-[15px]'>
                                <IoMdCheckboxOutline className='text-[#FC6C40] text-5xl' />
                                <div>
                                    <p className='text-2xl barlow-bold'>High-Tech Tools & Equipments</p>
                                    <p className='leading-6 text-sm text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className='flex gap-[15px]'>
                                <IoMdCheckboxOutline className='text-[#FC6C40] text-5xl' />
                                <div>
                                    <p className='text-2xl barlow-bold'>Sound Specialist</p>
                                    <p className='leading-6 text-sm text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className='flex gap-[15px]'>
                                <IoMdCheckboxOutline className='text-[#FC6C40] text-5xl' />
                                <div>
                                    <p className='text-2xl barlow-bold'>Exclusive & Modern</p>
                                    <p className='leading-6 text-sm text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <div className='flex gap-[15px]'>
                                <IoMdCheckboxOutline className='text-[#FC6C40] text-5xl' />
                                <div>
                                    <p className='text-2xl barlow-bold'>High-Quality Product Warranty</p>
                                    <p className='leading-6 text-sm text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className='flex gap-[15px]'>
                                <IoMdCheckboxOutline className='text-[#FC6C40] text-5xl' />
                                <div>
                                    <p className='text-2xl barlow-bold'>Clean Workspace</p>
                                    <p className='leading-6 text-sm text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <div className='flex gap-[15px]'>
                                <IoMdCheckboxOutline className='text-[#FC6C40] text-5xl' />
                                <div>
                                    <p className='text-2xl barlow-bold'>International Awards</p>
                                    <p className='leading-6 text-sm text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trusted;