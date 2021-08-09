import React, { Component } from 'react';
import '../../Styles/CssStyles/CovidCard.css';
class CovidCard extends Component {

  render() {
    return (
        <div className="cardData">
            <div className="mainCard">
                <div>
                  <img src={this.props.vocimg} alt="rk"/>
                </div>
                <div>NewStrain Covid<br /><b>{this.props.vocname}</b></div>
                <div>Earliest samples<br /><b>{this.props.voccon}</b></div>
                <div>Identified Date : {this.props.vocdata}</div>
            </div>
      </div>
    )
  }
}

export default CovidCard;
