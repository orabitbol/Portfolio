import React from 'react';
import './aboutMe.css'
import MYSELF from '../../images/MYSELF.jpg'

const AboutMe = () => {
    return (
        <div className='about_container' id = 'about-me'>
            <div>

            <img src = {MYSELF} alt="person icon"/>
            </div>
            <div className='about_text'>
                <h1>ABOUT ME</h1>
                <p> Junior Software Engineer <br/>
                    I have great passion for computer science and solving complex problems. I'm ambitious and highly motivated, a team player and I can quickly learn new things.
                    I'm Interested in exploring and developing in fields which fascinate me.<br/>
                    My professional objective is to use my skills in the best possible way and to find a job with an opportunity for challenges in the profession.
                </p>
            </div>

        </div>
    )
}
export default AboutMe;