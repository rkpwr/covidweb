import React, { Component } from 'react';

class CovidVarInfo extends Component {
  
  render() {
    return (
    <div className="covidvarient_info">
        <h1>{this.props.heading}</h1>
        <p>{this.props.information}</p>
    </div>
    )
  }
}

export default CovidVarInfo
