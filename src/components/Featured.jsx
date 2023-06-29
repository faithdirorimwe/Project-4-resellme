import one from "../assets/images/tech-zim-icon.png";
import two from "../assets/images/techno-mag-icon.png";
import three from "../assets/images/econet-logo.png";
import four from "../assets/images/netOne-logo.png";
import five from "../assets/images/cassava-logo.png";
import six from "../assets/images/red-blue-yellow-green-logo.png";
import seven from "../assets/images/eight2five-logo.png";
import eight from "../assets/images/263chat-logo.png";
import arrow1 from "../assets/images/Arrow 1.svg";
import arrow from "../assets/images/Arrow .svg";
import { useState } from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";

const Featured = () => {

    const [cardPosition, setCardPosition] = useState(0);
    const [isNextActive, setIsNextActive] = useState(true);


    const handleNextClick = () => {
        setIsNextActive(true);
    };

    const handlePrevClick = () => {
        setIsNextActive(false);
    };

    return (
        <div className="features">
            <div className="card-container">
                {isNextActive ? (
                    <div className="cards-inner" style={{ transform: `translateX(${cardPosition * -320}px)` }}>
                        <div className="card">
                            <img src={one} alt="" />
                        </div>
                        <div className="card">
                            <img src={two} alt="" />
                        </div>
                        <div className="card">
                            <img src={three} alt="" />
                        </div>
                        <div className="card">
                            <img src={four} alt="" />
                        </div>
                    </div>
                ) : (
                    <div className="cards-inner">
                        <div className="card">
                            <img src={five} alt="" />
                        </div>
                        <div className="card">
                            <img src={six} alt="" />
                        </div>
                        <div className="card">
                            <img src={seven} alt="" />
                        </div>
                        <div className="card">
                            <img src={eight} alt="" />
                        </div>
                    </div>
                )}
            </div>
            <div className="arrow-con">
                <div onClick={handleNextClick}><img src={arrow1} alt="next" /></div>
                <div onClick={handlePrevClick}><img src={arrow} alt="previous" /></div>
            </div>

             <div className="card-inner2">
                <div className="inner">
                    <div className="cards-inner">
                        <div className="card">
                            <img src={one} alt="" />
                        </div>
                        <div className="card">
                            <img src={two} alt="" />
                        </div>
                    </div>

                    <div className="cards-inner">
                        <div className="card">
                            <img src={three} alt="" />
                        </div>
                        <div className="card">
                            <img src={four} alt="" />
                        </div>
                    </div>

                    <div className="cards-inner">
                        <div className="card">
                            <img src={five} alt="" />
                        </div>
                        <div className="card">
                            <img src={six} alt="" />
                        </div>
                    </div>

                    <div className="cards-inner">
                        <div className="card">
                            <img src={seven} alt="" />
                        </div>
                        <div className="card">
                            <img src={eight} alt="" />
                        </div>
                    </div>

                </div>
                <div className="arrow-con2">
                <div onClick={handleNextClick}><img src={arrow} alt="next" /></div>
                <div onClick={handlePrevClick}><img src={arrow1} alt="previous" /></div>
            </div>
            </div> 


        </div>
    );
}

export default Featured;