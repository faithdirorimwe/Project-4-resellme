import data from "../../database/db";
import React, { useState } from 'react';
import Featured from "../components/Featured";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavButton from "../components/SwiperNavButton";



const Home = () => {

    const [openItemId, setOpenItemId] = useState(null);
    const toggleDropdown = (itemId) => {
        setOpenItemId((prevOpenItemId) => (prevOpenItemId === itemId ? null : itemId));
        setImgRotateDown((prevOpenItemId) => (prevOpenItemId === itemId ? null : itemId));
    };
    const [imgRotateDown, setImgRotateDown] = useState(false);
   


    return (
        <>
            {data.Home && data.Home.map((item) => {
                return (
                    <main key={item.id}>
                        {item.hero && item.hero.map(item => {
                            return (
                                <section key={item.id} id="hero">
                                    <div className="heading">
                                        <h1>{item.title} <br /> {item.title1}</h1>
                                        <p>{item.ptext}</p>
                                    </div>
                                    <div className="btn-container">
                                        <button className="btn">{item.bn1}</button>
                                        <button className="btn">{item.bn2}</button>
                                    </div>
                                    <div className="image">
                                        <img src={item.image} alt="laptop" />
                                    </div>
                                </section>
                            )
                        })}

                        {item.about && item.about.map(item => {
                            return (
                                <section key={item.id} id="about">
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="about-content">
                                        <h2>{item.title}</h2>
                                        <p>{item.ptext} <br /> <br /> {item.ptext1} <span>SUPER CHEAP</span></p>
                                        <button className="btn">{item.btn}</button>
                                    </div>
                                </section>
                            )
                        })}

                        {item.service && item.service.map(item => {
                            return (
                                <section key={item.id} id="service">
                                    <h2>{item.title}</h2>
                                    <div className="content">
                                        {item.cards && item.cards.map(item => {
                                            return (
                                                <div key={item.id} className="cards">
                                                    <div className="circle">{item.number}</div>
                                                    <div className="image"><img src={item.image} alt="" /></div>
                                                    <div className="content">
                                                        <h3>{item.title}</h3>
                                                        <p>{item.ptext} <br /> <br /> {item.ptext1}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <button className="btn">GET STARTED</button>
                                </section>
                            )
                        })}

                        {item.features && item.features.map(item => {
                            return (
                                <section key={item.id} id="features">
                                    <div className="feature-inner">
                                        <div className="heading">
                                            <h2>{item.title}</h2>
                                            <p>{item.ptext}</p>
                                        </div>
                                        <div className="content">
                                            {item.infor && item.infor.map(item => {
                                                return (
                                                    <div key={item.id} className="infor">
                                                        <div className="image"><img src={item.image} alt="" /></div>
                                                        <h3>{item.title}</h3>
                                                        <p>{item.ptext} <span>{item.ptext1}</span> {item.ptxt}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                </section>
                            )
                        })}

                        {item.cases && item.cases.map(item => {
                            return (
                                <section key={item.id} id="cases">
                                    <h2>{item.title}</h2>
                                    <Swiper className="content"
                                    spaceBetween={30}
                                    slidesPerView="auto"
                                    >
                                        {item.case && item.case.map(item => {
                                            return (
                                                <SwiperSlide key={item.id} className="  infor">
                                                    <div className="image"><img src={item.image} alt="" /></div>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.ptext}</p>
                                                    <button className="btn"> {item.btn}</button>
                                                </SwiperSlide>
                                            )
                                        })}
                                        <SwiperNavButton/>
                                    </Swiper>
                                </section>
                            )
                        })}


                        {item.testimonials && item.testimonials.map(item => {
                            return (
                                <section key={item.id} id="testimonials">
                                    <div className="test-inner">
                                        <div className="headings">
                                            <h2>{item.title}</h2>
                                            <p>{item.ptext}</p>
                                        </div>

                                        <Swiper className="content"
                                        spaceBetween={30}
                                        slidesPerView="auto">
                                            {item.case && item.case.map(item => {
                                                return (
                                                    <SwiperSlide key={item.id} className="card">
                                                        <div className="image"><img src={item.image} alt="" /></div>
                                                        <div className="quotes"><img src={item.img} alt="" /></div>
                                                        <div className="card-heading">
                                                            <h3>{item.title}</h3>
                                                            <h4>{item.title_inner}</h4>
                                                            <p>{item.ptext}</p>
                                                        </div>

                                                    </SwiperSlide>
                                                )
                                            })}
                                             <SwiperNavButton/>
                                        </Swiper>
                                    </div>
                                </section>
                            )
                        })}

                        {item.questions && item.questions.map(item => {
                            return (
                                <section key={item.id} id="questions">
                                    <div className="que-inner">
                                        <div className="headings">
                                            <h2>{item.title}</h2>
                                            <p>{item.ptext}
                                                <br /> <br />
                                                {item.ptext1}</p>
                                        </div>

                                        <div className="content">
                                            {item.question &&
                                                item.question.map((item) => {
                                                    const itemId = item.id;
                                                    const isDropdownOpen = openItemId === itemId;
                                                    const imgRotateDown = openItemId === itemId;

                                                    return (
                                                        <div key={itemId} className="dropdown-container">
                                                            <button
                                                                className="btn"
                                                                onClick={() => {
                                                                    toggleDropdown(itemId);
                                                                    setImgRotateDown(!imgRotateDown);
                                                                }}
                                                            >
                                                                {item.title} <img
                                                                    src={item.image}
                                                                    alt=""
                                                                    style={{
                                                                        transform: imgRotateDown
                                                                            ? 'rotate(180deg)'
                                                                            : '',
                                                                    }}
                                                                />

                                                            </button>

                                                            {isDropdownOpen && <p>{item.ptext}</p>}
                                                        </div>
                                                    );
                                                })}

                                        </div>
                                    </div>
                                </section>
                            )
                        })}

                        {item.partners && item.partners.map(item => {
                            return (
                                <section key={item.id} id="partners">
                                    <div className="heading">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className="content">
                                        <Featured />
                                    </div>
                                </section>
                            )
                        })}

                        {item.signup && item.signup.map(item => {
                            return (
                                <section key={item.id} id="signup">
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                        <div className="overlay"></div>
                                    </div>
                                    <div className="content">
                                        <h2>{item.title}</h2>
                                        <p>{item.ptext}</p>
                                        <button className="btn">{item.btn}</button>
                                    </div>
                                </section>
                            )
                        })}

                        {item.partners && item.partners.map(item => {
                            return (
                                <section key={item.id} id="partners">
                                    <div className="heading">
                                        <h2>{item.title1}</h2>
                                    </div>
                                    <div className="content">
                                        <Featured />
                                    </div>
                                </section>
                            )
                        })}
                    </main>
                )
            })}
        </>
    );
}

export default Home;