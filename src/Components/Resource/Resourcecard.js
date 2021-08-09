import React from 'react';
import '../../Styles/Resource/Resourcecard.css';
const Resourcecard = (props) => {
    return (
        <div className="source_card" style={{display: props.stl}}>
           <li>
               <h3>{}</h3>
               <p>{props.info}</p>
               <a href={props.link}  rel="noreferrer" target="_blank">More</a>
           </li>
        </div>
    );
};

export default Resourcecard;