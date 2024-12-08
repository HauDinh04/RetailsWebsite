import React from 'react';
import {AiFillStar} from 'react-icons/ai';

interface StarRatingProps {
    rating: number;
    className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({rating, className = ""}) => {
    const fullStars = Math.floor(rating);
    const decimal = rating - fullStars;
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div className={`flex items-center h-max ${className}`}>
            {Array(fullStars)
                .fill(0)
                .map((_, index) => (
                    <AiFillStar key={`full-${index}`} className="text-[rgba(0,0,0,0.7)] w-[12px] h-[12px]"/>
                ))}

            {decimal > 0 && (
                <div
                    className="relative w-[12px] h-[12px]"
                    style={{
                        background: `linear-gradient(to right, rgba(0,0,0,0.7) ${decimal * 100}%, #D3D3D3 ${decimal * 100}%)`,
                        WebkitMask: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.573 1.548 8.121-7.484-4.021-7.484 4.021 1.548-8.121-6.064-5.573 8.332-1.151z"/></svg>')`,
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskSize: 'cover',
                    }}
                ></div>
            )}

            {Array(emptyStars)
                .fill(0)
                .map((_, index) => (
                    <AiFillStar key={`empty-${index}`} className="text-gray-300 w-[12px] h-[12px]"/>
                ))}
        </div>
    );
};

export default StarRating;
