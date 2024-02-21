import { Link } from 'react-router-dom';
import banner from '../../../assets/Home/Banner.jpg'
import { FaPhoneAlt } from "react-icons/fa";

// Use Aos -------- for Animation
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content w-[90%]">
                <div data-aos="zoom-out-right" className="w-[90%] lg:mt-0 mt-10">
                    <h1 className="mb-[30px] text-xl lg:text-[84px] barlow-bold lg:leading-[80px] text-white">
                        Specialists in Car <br /> Audio Upgrades
                    </h1>
                    <p className="mb-5 text-[32px] barlow-bold leading-[35px] text-white">
                        Upgrade Your Vehicle Sound & Video System
                    </p>
                    <p className='lg:text-lg font-normal text-[#FFFFFFB2] mb-[30px]'>
                        Sound Automotive Solutions mainly designed for car <br /> audio stereo repair solutions
                    </p>
                    <div className='flex items-center gap-[30px]'>
                        <button className="btn uppercase text-sm barlow-extrabold border-none bg-[#0094ED] text-white">
                            our services
                        </button>
                        <div className='flex items-center gap-[10px]'>
                            <Link><FaPhoneAlt /></Link>
                            <p className='text-[19px] barlow-bold'>
                                021-345-6789
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;