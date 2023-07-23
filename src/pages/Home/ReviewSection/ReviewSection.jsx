import { useEffect, useState } from "react";
import SeeReview from "../SeeReview/SeeReview";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SectionTitle from "../../../components/SectionTitle";
 
const ReviewSection = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    }, [])
    return (
        <div>
           {/* {
            reviews.map(review => <SeeReview review={review} key={review._id}></SeeReview> )
           } */}



           <div className="shadow-2xl p-5">
            <SectionTitle heading="Reviews"></SectionTitle>
            
           <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     
       <div className=" ">
        
        {reviews.map(slider =>  <SwiperSlide className=" ">
        <span > Review: {slider.review} <br />  </span>
       <span className="font-bold"> Ratings: {slider.ratings}</span>
        </SwiperSlide>)}
       </div>
 
    </Swiper>
           </div>




        </div>
    );
};

export default ReviewSection;