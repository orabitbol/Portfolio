import React from 'react';
import './technologies.css'
import DevIcon from "devicon-react-svg";
import { techs } from '../../helpers/techs'


const Technologies = () => {
    return (


        <div className='technologies_container' id='technologies'>
            <div>
                <h1 style={{ textAlign: 'center', color: 'white' }}>Technologies that I use</h1>
            </div>
            <div className='tech_cards_container' >
                {techs.map((e, idx) => {
                    return (
                        <div key={idx} className='tech_card'>
                            <DevIcon className='tech_icons' icon={e.iconName} />
                            <span style={{ margin: '5px', fontSize: '1.5rem', color: 'black' }} > {e.name}</span>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}
export default Technologies;