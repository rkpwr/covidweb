import React, { Component } from 'react';
import '../../Styles/CssStyles/Homeinfo.css';
class Homeinfo extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="content">
            <div className="info_content">
                <h1>Welcome To Covid19 Web</h1>
               
                <p>
                'CO' stands for corona, 'VI' for virus, and 'D' for disease.<br /> Formerly, this disease was referred to as '2019 novel coronavirus'
                </p>
            </div>
        </div>
      </div>
    )
  }
}

export default Homeinfo
