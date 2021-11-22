import React from 'react'
import './contactMe.css'
import { navigationLinks } from '../../helpers/navigationLinks';

const createLinks = () => {
    return navigationLinks.map((e, idx) => (
        <p key={idx}> <a href={e.ref} >{e.name} </a></p>
    ))
} 

const ContactMe = () => {
    return (
        <div className = 'contactMe_container' id="contact">
            <div className='contactMe_data_links'>
                <div>
                    <p> Beer Sheva , IS</p>
                    <p> Or Abitbol </p>
                    <p> orabitbol@gmail.com </p>
                    <p> 050-4222664</p>
                </div>
                <div>
                    {createLinks()}
                </div>
            </div>
            <div style= {{textAlign:'center'}}>copyright&copy; {new Date().getFullYear()} All rights reserved</div>
        </div>
    )
}
export default ContactMe