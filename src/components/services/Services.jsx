import React, { useState } from 'react'
import "../../css/Services.css"
const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }


    return (
        <section className="services section" id="services">
            <h2 className="section__title">  Services </h2>
            <span className="section__subtitle"> What i offer</span>
            <div className="services__container container grid">


                <div className="services__content">
                    <i className="uil uil services__icon"></i>
                    <h3 className="services__title"> Frontend Dveloper
                    </h3>
                    <span className="services__button" onClick={() => {
                        toggleTab(1)
                    }}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() =>
                                setToggleState(0)
                            }></i>
                            <h3 className="services__modal-tilte">FrontEnd Developer</h3>
                            <p className="services__modal-description">Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop a full stack project</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop user Interface</p>
                                </li>


                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developement</p>
                                </li>


                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I write clean code </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="services__content">
                    <i className="uil uil services__icon"></i>
                    <h3 className="services__title"> UI/UX Developer
                    </h3>
                    <span className="services__button" onClick={() => {
                        toggleTab(2)
                    }}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() =>
                                setToggleState(0)
                            }></i>
                            <h3 className="services__modal-tilte">FullStack Developer</h3>
                            <p className="services__modal-description">Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop a full stack project</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop user Interface</p>
                                </li>


                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developement</p>
                                </li>


                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I write clean code </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <i className="uil uil services__icon"></i>
                    <h3 className="services__title">
                        Backend Developer
                    </h3>


                    <span className="services__button" onClick={() => {
                        toggleTab(3)
                    }}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() =>
                                setToggleState(0)
                            }></i>
                            <h3 className="services__modal-tilte">FullStack Developer</h3>
                            <p className="services__modal-description">Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop a full stack project</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop user Interface</p>
                                </li>


                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developement</p>
                                </li>


                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I write clean code </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>






            </div>
        </section>
    )
}

export default Services