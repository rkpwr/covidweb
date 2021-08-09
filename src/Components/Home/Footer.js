import React, { Component } from 'react';
import '../../Styles/CssStyles/Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_Content">
                    <div className="footer_info">
                        <h3>Designed & developed By Rk Power [UI_Developer]</h3>
                        <h4>All copy rights Reserved @ Rk Power [Titan_Spndle]</h4>
                        <p>Follow Me!...</p>
                        <div className="icons">
                        <img src="https://img.icons8.com/ios-glyphs/90/ffffff/facebook-new.png" alt="rk"/>
                        <img src="https://img.icons8.com/ios-glyphs/90/ffffff/instagram-new.png" alt="rk"/>
                        <img src="https://img.icons8.com/ios-glyphs/90/ffffff/twitter-squared.png" alt="rk"/>
                        <img src="https://img.icons8.com/ios-glyphs/90/ffffff/linkedin-circled--v1.png" alt="rk"/>
                        <img src="https://img.icons8.com/ios-glyphs/90/ffffff/whatsapp.png" alt="rk"/>
                        <img src="https://img.icons8.com/ios-glyphs/90/ffffff/youtube-squared.png" alt="rk"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;