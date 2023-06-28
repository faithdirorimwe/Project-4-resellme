import React from "react";
import {useSwiper} from 'swiper/react';
import arrow from '../assets/images/Arrow .svg';
import arrow1 from '../assets/images/Arrow 1.svg';

const SwiperNavButton = () => {
    const swiper = useSwiper();

    return ( 
        <div className="swiper-nav-btns">
            <button onClick={() => swiper.slidePrev()}><img src={arrow1} alt="" /></button>
            <button onClick={() => swiper.slideNext()}><img src={arrow} alt="" /></button>
        </div>
     );
}
 
export default SwiperNavButton;