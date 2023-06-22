import data from "../../database/db";
import React, { useState } from 'react';
import Featured from "../components/Featured";

const Home = () => {

    const [isOpen, setIsOpen] = useState({});
    const toggleDropdown = (itemId) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId]
        }));
    };

    const [cardPosition, setCardPosition] = useState(0);
const handleNextClick = () => {
  setCardPosition((prevPosition) => prevPosition + 1);
};

const handlePrevClick = () => {
  setCardPosition((prevPosition) => prevPosition - 1);
};

    
    return (
        <>
            {data.home && data.home.map((item) => {
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
                                    <div className="content">
                                        {item.case && item.case.map(item => {
                                            return (
                                                <div key={item.id} className="infor">
                                                    <div className="image"><img src={item.image} alt="" /></div>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.ptext}</p>
                                                    <button className="btn"> {item.btn}</button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="arrow-container">
                                        <div><img src={item.img} alt="" /></div>
                                        <div><img src={item.image} alt="" /></div>


                                    </div>
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
                                            <div className="arrow-con">
                                                <div><img src={item.img} alt="" /></div>
                                                <div><img src={item.image} alt="" /></div>
                                            </div>
                                        </div>

                                        <div className="content">
                                            {item.case && item.case.map(item => {
                                                return (
                                                    <div key={item.id} className="card">
                                                        <div className="image"><img src={item.image} alt="" /></div>
                                                        <div className="quotes"><img src={item.img} alt="" /></div>
                                                        <div className="card-heading">
                                                            <h3>{item.title}</h3>
                                                            <h4>{item.title_inner}</h4>
                                                            <p>{item.ptext}</p>
                                                        </div>

                                                    </div>
                                                )
                                            })}
                                        </div>
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
                                            {item.question && item.question.map((item) => {
                                                const itemId = item.id;
                                                const isDropdownOpen = isOpen[itemId] || false;

                                                return (
                                                    <div key={itemId} className="dropdown-container">
                                                        <button className="btn" onClick={() => toggleDropdown(itemId)}>
                                                            {item.title} <img src={item.image} alt="" />
                                                        </button>
                                                        {isDropdownOpen && (
                                                            <p>{item.ptext}</p>
                                                        )}
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