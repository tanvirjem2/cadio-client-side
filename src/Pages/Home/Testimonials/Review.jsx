import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { VscCommentUnresolved } from "react-icons/vsc";

const Review = ({ review }) => {

    const { title, user, rating, comment, image } = review;

    return (
        <div className="border bg-white drop-shadow-lg rounded-md mb-[30px] p-[30px]">
            <h1 className="text-[32px] barlow-bold mb-5">{title}</h1>
            <p className="text-[#737373] leading-6">{comment}</p>
            <div className="flex justify-between mt-[30px]">
                <div className='flex gap-4'>
                    <img className="rounded-full w-[70px]" src={image} alt="" />
                    <div>
                        <p className="barlow-bold text-base">{user}</p>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                </div>
                <VscCommentUnresolved className='text-[#FC6C40] opacity-20 text-6xl' />
            </div>
        </div>
    );
};

export default Review;