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

const Featured = () => {
    return (
        <div className="features">
        <div className="card-container">
            <div className="cards-inner">
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
        </div>
        <div className="arrow-con">
            <div><img src={arrow1} alt="" /></div>
            <div><img src={arrow} alt="" /></div>
        </div>
        </div>
    );
}

export default Featured;