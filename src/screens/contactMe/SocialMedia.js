import React, { useState } from 'react'
import './socialMedia.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faGitlab,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {


    return (
        <div className="social-container" >
            <div className="social">
                <a href="https://www.facebook.com/oabotbol"
                    className="Facebook">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/or-abitbol-9a64ba198/"
                    className="Linkedin">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
            <div className="social">
                <a href="https://www.gitlab.com/orabitbol"
                    className="Gitlab">
                    <FontAwesomeIcon icon={faGitlab} size="2x" />
                </a>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/orabitbol/"
                    className="Instagram">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia