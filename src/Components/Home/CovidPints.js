import React, { Component } from 'react';
import '../../Styles/CssStyles/Covidpints.css';
class CovidPints extends Component {
    render() {
        return (
            <div className="cardPoints">
                <h2>Actions taken by WHO and Member States</h2>
                <h3>COVID_19 - Variants of Concern (VOC)</h3>
                <div className="subbox">
                <div className="crdgroup">
                    <h1>Primary actions by WHO On VOC</h1>
                    <ul>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                                Comparative assessment of variant characteristics and public health risks by WHO and the Technical Advisory Group on Viral Evolution 
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            If determined necessary, coordinate additional laboratory investigations with Member States and partners. 
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Communicate new designations and findings with Member States and public through established mechanisms.  
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Evaluate WHO guidance through established WHO mechanisms and update, if necessary. 
                            </b>
                        </li>
                    </ul>
                </div>
                <div className="crdgroup">
                    <h1 style={{position:'relative',bottom:'5px'}}>Primary actions by a Member State On VOC </h1>
                    <ul style={{position:'relative',bottom:'5px'}}>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Submit complete genome sequences and associated metadata to a publicly available database, such as GISAID. 
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Report initial cases/clusters associated with VOC infection to WHO through the IHR mechanism. 
                            </b>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-check-mark.png" alt="rk"/>
                            <b>
                            Where capacity exists and in coordination with the international community, perform field investigations and laboratory assessments to improve understanding of the potential impacts of the VOC on COVID-19 epidemiology, severity, effectiveness of public health and social measures, diagnostic methods, immune responses, antibody neutralization, or other relevant characteristics. 
                            </b>
                        </li>
                    </ul>
                </div>
                </div>
          </div>
        );
    }
}

export default CovidPints;