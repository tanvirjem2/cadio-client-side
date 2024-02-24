import { Link } from 'react-router-dom';
import banner from '../../../assets/Home/Banner.jpg'
import { FaPhoneAlt } from "react-icons/fa";

// Use Aos -------- for Animation
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

// React Icons
import { RiShieldStarFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdSell } from "react-icons/md";

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content w-[90%]">
                    <div data-aos="fade-up" className="w-[90%] lg:mt-0 mt-10">
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

            {/* ------------ What we do section done ------------------ */}

            <div data-aos="fade-up" className='flex gap-6 lg:gap-0 flex-wrap items-center justify-evenly bg-white drop-shadow-lg p-5 w-3/4 mx-auto rounded-lg relative -top-[10px] lg:-top-[60px]'>

                <div className='flex gap-[10px] lg:border-r-2  pr-[30px] border-[#E7E7E7]'>
                    <div className='text-[#FC6C40] text-4xl'>
                        <RiShieldStarFill />
                    </div>
                    <div className='space-y-1'>
                        <p className='text-2xl barlow-bold'>Over 25 Years</p>
                        <p className='uppercase text-[11px] barlow-extrabold'>Experience</p>
                        <p className='text-sm leading-6 font-normal text-[#737373]'>
                            Lorem ipsum dolor amet.
                        </p>
                    </div>
                </div>

                <div className='flex gap-[10px] lg:border-r-2  pr-[30px] border-[#E7E7E7]'>
                    <div className='text-[#FC6C40] text-4xl'>
                        <TfiHeadphoneAlt />
                    </div>
                    <div className='space-y-1'>
                        <p className='text-2xl barlow-bold'>Expert Advice</p>
                        <p className='uppercase text-[11px] barlow-extrabold'>Availables</p>
                        <p className='text-sm leading-6 font-normal text-[#737373]'>
                            Lorem ipsum dolor amet.
                        </p>
                    </div>
                </div>

                <div className='flex gap-[10px] lg:border-r-2  pr-[30px] border-[#E7E7E7]'>
                    <div className='text-[#FC6C40] text-4xl'>
                        <RiVerifiedBadgeFill />
                    </div>
                    <div className='space-y-1'>
                        <p className='text-2xl barlow-bold'>Full Guarantee</p>
                        <p className='uppercase text-[11px] barlow-extrabold'>All car audio</p>
                        <p className='text-sm leading-6 font-normal text-[#737373]'>
                            Lorem ipsum dolor amet.
                        </p>
                    </div>
                </div>

                <div className='flex gap-[10px] pr-[30px]'>
                    <div className='text-[#FC6C40] text-4xl'>
                        <MdSell />
                    </div>
                    <div className='space-y-1'>
                        <p className='text-2xl barlow-bold'>Official Dealer</p>
                        <p className='uppercase text-[11px] barlow-extrabold'>All major brands</p>
                        <p className='text-sm leading-6 font-normal text-[#737373]'>
                            Lorem ipsum dolor amet.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;