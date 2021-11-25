import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import 'swiper/swiper.min.css'
import { Inners } from '../../styles/Common';
import { Reviews } from './Style';
import img_3d_coffeecup from '../../assets/images/img_3d_coffeecup.png';
import reviewData from '../../data/reviewData';
import { IsMobile } from '../../utils/mediaQuery';

SwiperCore.use([Autoplay]);

function Review () {
    const reviewList = reviewData.map((data, index) => {
        return (
            <SwiperSlide key={data.id}>
                <div className="review-list-con">
                    <div className="review-list-txt">
                        <p>{data.review}</p>
                        <div className="review-list-profile">
                            <figure><img src={data.profileImg} alt=""/></figure>
                            <small><b>신청자 {data.name}</b></small>
                        </div>
                    </div>
                </div>
            </SwiperSlide>    
        );
    });

    return (
        <Reviews>
            <Inners>
                <article className="review-con">
                    <div className="review-tit">
                        <figure className="review-tit-img">
                            <img src={img_3d_coffeecup} alt="" />
                        </figure>
                        <h1 className="review-tit-tit">커피챗 고객 리뷰</h1>
                    </div>
                    <Swiper
                        slidesPerView={'auto'}
                        loop={true}
                        speed={'3000'}
                        spaceBetween={IsMobile() ? 8 : 24}
                        autoplay={{
                            'delay': 0,
                            'disableOnInteraction': false
                        }}
                        className='review-list'>
                        {reviewList}
                    </Swiper>
                </article>
            </Inners>
        </Reviews>
    );
}

export default Review;