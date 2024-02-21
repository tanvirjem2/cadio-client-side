import aboutImage from '../../../assets/Home/hand-press-on-button-on-the-car-radio-close-up-2023-11-27-05-00-35-utc.jpg'

// Use Aos -------- for Animation
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div data-aos="fade-up" className='grid grid-cols-2 gap-[30px] w-[90%] mx-auto mt-11'>

            <div>
                <p className='text-base text-[#737373] barlow-extrabold mb-[10px]'>ABOUT US</p>
                <div className='space-y-[30px]'>
                    <p className='text-[64px] barlow-bold leading-[65px]'>
                        Cadio - Car Audio Installations
                    </p>
                    <p className='leading-6 text-[#737373]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='leading-6 text-[#737373]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div>
                        <Link to={`/`}>
                            <button
                                className="btn uppercase text-sm 
                                barlow-extrabold border-none bg-[#0094ED] text-white">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <img className='rounded-lg' src={aboutImage} alt="" />
            </div>
        </div>
    );
};

export default About;