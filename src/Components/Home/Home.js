import React, { Component } from 'react';
import Homeinfo from './HomeInfo';
import CovidIntro from './CovidIntro';
import CovidVarient from './CovidVarient';
import Footer from './Footer';
class Home extends Component {
 
  render() {
    return (
      <div>
        <Homeinfo/>
        <CovidIntro/>
        <CovidVarient/>
        <Footer/>
      </div>
    )
  }
}

export default Home
