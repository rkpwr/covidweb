import React, { Component } from 'react';
import '../../Styles/CssStyles/Covidpints.css';
class CovidPints1 extends Component {
    render() {
        return (
            <div className="cardPoints">
                <h2>Actions taken by WHO and Member States</h2>
                <h3>COVID_19 - Variants of Interest (VOI)</h3>
                <div className="subbox">
                <div className="crdgroup">
                    <h1>Primary actions by WHO On VOI</h1>
                    <ul>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Inform WHO through established WHO Country or Regional Office reporting channels with supporting information about VOI-associated cases (person, place, time, clinical and other relevant characteristics)
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Submit complete genome sequences and associated metadata to a publicly available database, such as GISAID. 
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Perform field investigations to improve understanding of the potential impacts of the VOI on COVID-19 epidemiology, severity, effectiveness of public health and social measures, or other relevant characteristics.   
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Perform laboratory assessments according to capacity or contact WHO for support to conduct laboratory assessments on the impact of the VOI on relevant topics.  
                            </b>
                        </li>
                    </ul>
                </div>
                <div className="crdgroup">
                    <h1 style={{position:'relative',bottom:'15px'}}>Primary actions by a Member State On VOI</h1>
                    <ul style={{position:'relative',bottom:'15px'}}>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Comparative assessment of variant characteristics and public health risks by WHO. 
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            If determined necessary, coordinated laboratory investigations with Member States and partners. 
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Review global epidemiology of VOI. 
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Monitor and track global spread of VOI 
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            with genetic changes that are predicted or known to affect virus characteristics such as transmissibility, disease severity, immune escape, diagnostic or therapeutic escape
                            </b>
                        </li>
                    </ul>
                </div>
                </div>
          </div>
        );
    }
}

export default CovidPints1;