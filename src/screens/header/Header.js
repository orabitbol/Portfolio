import React from 'react';
import Typed from 'react-typed';
import './header.css'

const Header = () => {
    return (
        <div className = 'main-info'>
            <h1> What am i ?</h1>
            <Typed
                strings={[
                    " ",
                    "A Software Engineer",
                    "Also known as an",
                    "Front-end developer",
                    "Back-end developer",
                    "Full stack developer",
                    " ",
                    " "]}
                typeSpeed={40}
                backSpeed={50}

                loop >

            </Typed>

        </div>
    )
}
export default Header;