import React, { Component } from 'react'
import { Link} from "react-router-dom";
import '../Styles/CssStyles/Header.css';
class Header extends Component {
  render() {
    return (
      <div className = "HeaderContainer">
        <img src="https://img.icons8.com/pastel-glyph/100/ffffff/covid-19--v1.png" alt="-.-"/>
        <ul>
          <li><Link to='/' ><img src="https://img.icons8.com/glyph-neue/100/ffffff/home.png" alt="-.-"/></Link></li>
          <li><Link to='/dashboard' ><img src="https://img.icons8.com/material/100/ffffff/token-card-code--v1.png" alt="-.-"/></Link></li>
          <li><Link to='/resource' ><img src="https://img.icons8.com/ios-filled/100/ffffff/counter-strike-source.png" alt="-.-"/></Link></li>
          <li><Link to='/about' ><img src="https://img.icons8.com/material-sharp/100/ffffff/about.png" alt="-.-"/></Link></li>
        </ul>
      </div>
    )
  }
}

export default Header
