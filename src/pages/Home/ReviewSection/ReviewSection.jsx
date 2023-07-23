import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SectionTitle from "../../../components/SectionTitle";
import { AuthContext } from "../../../providers/AuthProvider";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';




const ReviewSection = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
   

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    }, [])

    



    return (
        <div className="bg-[#2B3440] text-white my-10">

        <SectionTitle heading="Reviews"></SectionTitle>

        
 
           <>
            
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            reviews.map(slider =>  <div >
                <SwiperSlide className="  p-5 md:pb-20 md:px-60">
                
                <div className="w-24 rounded-full mx-auto ">
                 <img src="https://cdni.iconscout.com/illustration/premium/thumb/reviews-concept-for-landing-page-vector-5621922-4680779.png" />
                 </div>
                 <p className="text-center font-bold text-xl"> {user.displayName} </p>
                  {slider.review} 
                 <p className="text-center font-bold text-xl">ratings: {slider.ratings} </p>
                
                 </SwiperSlide>
            </div>  )
        }
       
        
      </Swiper>
    </>
 
        </div>
    );
};

export default ReviewSection;