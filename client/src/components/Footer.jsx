import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="corporate-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About</h4>
                    <p>
                        Curating concise React know-how and tasteful UI ideas for builders who want
                        to ship fast without looking generic.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: donatobrando02@gmail.com</p>
                    <p>Phone: 09**-***-****</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/brando-donato-2545441bb" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/badong0" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.facebook.com/brandoallendonato1/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                    <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
