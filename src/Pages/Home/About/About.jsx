import { useState } from 'react';
import aboutImage from '../../../assets/Home/hand-press-on-button-on-the-car-radio-close-up-2023-11-27-05-00-35-utc.jpg';

const About = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-[90%] mx-auto mt-11'>
            <div>
                <p className='text-base text-[#737373] barlow-extrabold mb-[10px]'>ABOUT US</p>
                <div className='space-y-[30px]'>
                    <p className='text-5xl lg:text-[64px] barlow-bold lg:leading-[65px]'>
                        Cadio - Car Audio Installations
                    </p>
                    <p className='leading-6 text-[#737373]'>
                        At Cadio, we specialize in elevating your driving experience through top-notch car audio installations. Our passion for sound excellence drives us to deliver cutting-edge audio solutions that transform your vehicle into a mobile concert hall.
                    </p>
                    {/* Display the second part of the paragraph based on the expanded state */}
                    {isExpanded && (
                        <p className='leading-6 text-[#737373]'>
                            Whether you crave heart-thumping bass, crystal-clear highs, or immersive surround sound, our team of skilled professionals is dedicated to bringing your audio dreams to life. From premium speaker systems to advanced head unit installations, we tailor our services to meet your unique preferences.
                        </p>
                    )}
                    <div>
                        {/* Toggle the expanded state on button click */}
                        <button
                            className="btn uppercase text-sm 
                            barlow-extrabold border-none bg-[#0094ED] text-white"
                            onClick={toggleExpand}
                        >
                            {isExpanded ? 'See Less' : 'Learn More'}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <img className='rounded-lg' src={aboutImage} alt="Car Audio Installation" />
            </div>
        </div>
    );
};

export default About;
