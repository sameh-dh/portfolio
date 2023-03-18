import React from 'react'
import '../../css/Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Sameh</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>


                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/butterfly_devo_o/" className="footer__social-link" target="_blank">
                        <i className="uil uil-instagram home__social-link"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/sameh-dhamer-5322b6195/" className="footer__social-link" target="_blank">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/sameh-dh" className="footer__social-link" target="_blank">
                        <uil className="uil-github-alt"></uil>
                    </a>
                </div>
                <span className="footer__copy">&#169; Crypticalcoder. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer