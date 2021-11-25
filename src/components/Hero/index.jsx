import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper/core';
import { Inners } from '../../styles/Common';
import { Heros } from './Style';
import img_uservp1 from '../../assets/images/img_uservp1.png';

SwiperCore.use([Autoplay]);

function Hero () {
    return (
        <Heros>
            <Inners>
                <article className="hero-con">
                    <div className="hero-txt">
                        <div className="hero-tit">
                            <div className="hero-tit-top">
                                <h1>내가 궁금한</h1>
                                <div className="hero-tit-list">
                                    <Swiper 
                                        direction={'vertical'}
                                        loop={true}
                                        autoplay={{
                                            'delay': 2000,
                                            'disableOnInteraction': false
                                        }}
                                        className="hero-tit-list-con">
                                        <SwiperSlide className="hero-tit-list-txt"><h1>회사</h1></SwiperSlide>
                                        <SwiperSlide className="hero-tit-list-txt"><h1>업계</h1></SwiperSlide>
                                        <SwiperSlide className="hero-tit-list-txt"><h1>직무</h1></SwiperSlide>
                                        <SwiperSlide className="hero-tit-list-txt"><h1>학교</h1></SwiperSlide>
                                    </Swiper>
                                </div>
                                <h1>사람과</h1>
                            </div>
                            <h1>자유로운 익명기반 1:1 음성 대화</h1>
                        </div>
                        <p>꼭 필요한 순간, 먼저 경험해본 사람에게</p>
                        <p>커리어 고민과 궁금함을 풀어놓고 진짜 정보와 기회를 탐색하는 당신만을 위한 1:1 음성 대화</p>
                        <a href="https://www.coffeechat.kr" title="커피챗 시작하기" className="hero-btn"><b>커피챗 시작하기</b></a>
                    </div>
                    <figure className="hero-img">
                        <img src={img_uservp1} alt="" />
                    </figure>
                </article>
            </Inners>
        </Heros>
    );
}

export default Hero;