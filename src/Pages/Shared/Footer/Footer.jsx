import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

// React icons ---------------
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Footer = () => {
    return (

        <div className="bg-[#201C1DCC]">

            <div className='w-[90%] mx-auto pt-[82px] pb-[37px]'>

                <div className='mb-14 border-b-[1px] border-[#FFFFFF33]'>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-[53px]'>

                        <div>
                            <img src={logo} alt="" />
                            <p className='text-[#FFFFFFB2] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div>
                            <h1 className='text-2xl barlow-bold leading-9 text-white mb-5'>
                                Get latest updates and offers
                            </h1>
                            <div className='flex items-center gap-[20px]'>
                                <input className='h-12 rounded-lg w-3/5 p-5' type="email"
                                    placeholder='Email address' />
                                <button
                                    className='btn uppercase text-sm barlow-extrabold bg-[#0094ED] text-white border-none'>
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='border-b-[1px] border-[#FFFFFF33]'>

                    <div className='grid grid-cols-1 lg:grid-cols-5 mb-14'>

                        <div>
                            <h1 className='text-sm barlow-extrabold text-white'>About Us</h1>
                            <div className='mt-5 space-y-[5px] text-[#FFFFFFB2]'>
                                <p>Our Story</p>
                                <p>Our Brands</p>
                                <p>Our Services</p>
                                <p>Careers</p>
                                <p>Locations</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-sm barlow-extrabold text-white'>Help center</h1>
                            <div className='mt-5 space-y-[5px] text-[#FFFFFFB2]'>
                                <p>My Account</p>
                                <p>Track Orders</p>
                                <p>Order Supports</p>
                                <p>Term of Use</p>
                                <p>Contact Us</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-sm barlow-extrabold text-white'>Our Services</h1>
                            <div className='mt-5 space-y-[5px] text-[#FFFFFFB2]'>
                                <p>In Dash Car Reveivers</p>
                                <p>Audio & Video System</p>
                                <p>Amplifiers & Equalizers</p>
                                <p>Automotive Subwoofers</p>
                                <p>Speakers Enclosures</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-sm barlow-extrabold text-white'>Work times</h1>
                            <div className='mt-5 space-y-[5px] text-[#FFFFFFB2]'>
                                <p>Mon - Sat 7.00 - 18.00</p>
                                <p>Saturday & Sunday: Closed</p>
                                <p>Holidays: Closed</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-sm barlow-extrabold text-white'>Contact Info</h1>

                            <div className='mt-5 text-[#FFFFFFB2] space-y-5'>
                                <div className='flex gap-[10px]'>
                                    <Link className='text-2xl'><FaLocationDot /></Link>
                                    <div>
                                        <h1 className='text-sm barlow-extrabold text-white'>
                                            Contact
                                        </h1>
                                        <p>768 Market Street San Francisco, CA 64015, United States</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <Link className='text-2xl'><MdEmail /></Link>
                                    <div>
                                        <h1 className='text-sm barlow-extrabold text-white'>
                                            email us
                                        </h1>
                                        <p>support@cadio.com</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <Link className='text-2xl'><TfiHeadphoneAlt /></Link>
                                    <div>
                                        <h1 className='text-sm barlow-extrabold text-white'>
                                            Call support
                                        </h1>
                                        <p>021 345 6789</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex items-center justify-between mt-14'>
                    <p className='text-[#FFFFFFB2]'>© 2023 Cadio. Design by Tanvir</p>
                    <div className='flex items-center gap-[30px]'>
                        <Link className='text-white'><FaFacebookF /></Link>
                        <Link className='text-white'><FaTwitter /></Link>
                        <Link className='text-white'><FaInstagram /></Link>
                        <Link to={`https://www.youtube.com/`} className='text-white'><FaYoutube /></Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;