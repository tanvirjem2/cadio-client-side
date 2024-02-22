import { useEffect, useState } from "react";
import Review from "./Review";

// React icon
import { FaPhoneAlt } from "react-icons/fa";

// Use Aos -------- for Animation
import Aos from "aos"
import 'aos/dist/aos.css'

import customer_1 from '../../../assets/Home/customer 1.jpg'
import customer_2 from '../../../assets/Home/customer 2.jpg'
import customer_3 from '../../../assets/Home/customer 3.jpg'
import { VscCommentUnresolved } from "react-icons/vsc";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch(`/reviews.json`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

    return (
        <div className="bg-[#062759] mt-[100px] py-[100px]">
            <div data-aos="fade-up"
                className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-[90%] mx-auto">
                <div className="">
                    {
                        visibleReviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                    {reviews.length > 2 && (
                        <button className="btn uppercase text-sm barlow-extrabold border-none bg-[#0094ED] text-white"
                            onClick={() => setShowAll(!showAll)}>
                            {showAll ? "See Less" : "view all"}
                        </button>
                    )}
                </div>
                <div className="text-white">
                    <p className="text-[#FFFFFFB2] barlow-extrabold uppercase tracking-[2px] mb-[10px]">
                        Testimonials
                    </p>
                    <p className="barlow-bold text-[64px] leading-[65px] mb-[30px]">What Our
                        <br />
                        Customers Say
                    </p>
                    <div className="space-y-[30px]">
                        <div className="flex items-center space-x-3">
                            <p className="barlow-bold text-[19px]">Auto Repair in Houston </p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                            <p className="text-[#0094ED] lg:leading-[27px]">
                                ({reviews.length} Reviews)
                            </p>
                        </div>
                        <p className="text-[#FFFFFFB2] leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img
                                    className="rounded-full w-20"
                                    src={customer_1} alt="" />
                                <img
                                    className="rounded-full w-20 relative -right-[-20px]"
                                    src={customer_2} alt="" />
                                <img
                                    className="rounded-full w-20 relative -right-[-40px]"
                                    src={customer_3} alt="" />
                            </div>
                            <VscCommentUnresolved className='text-[#FC6C40] text-6xl' />
                        </div>
                        <p className="text-2xl barlow-bold">Call For Instant Quote!</p>
                        <div
                            className="flex items-center gap-5 text-[#F2C94C] text-[44px] barlow-bold leading-[45px]">
                            <FaPhoneAlt />
                            <p>021-345-6789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
