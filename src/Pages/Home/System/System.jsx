// Use Aos -------- for Animation
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const System = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div className="hero"
            style={{ backgroundImage: `url(https://i.ibb.co/xYFD4bx/why-choose-us-2.jpg)` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white">
                <div data-aos="fade-up" className="py-20 grid gird-cols-1 lg:grid-cols-2">
                    <div>
                        <h1
                            className="barlow-extrabold leading-[2px] uppercase tracking-[2px] mb-[10px]">
                            system
                        </h1>
                        <p className="barlow-bold text-[64px] leading-[65px]">
                            Bringing Your Car’s Audio To Perfection
                        </p>
                    </div>
                    <div>
                        <p
                            className="barlow-bold text-base mb-4">
                            We just love seeing our clients smile when they hear <br /> their new sound system for the first time.
                        </p>
                        <button
                            className="btn uppercase barlow-extrabold border-none bg-[#0094ED] text-white">
                            build your system
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default System;