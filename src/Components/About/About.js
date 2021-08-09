import React, { Component } from 'react'
import '../../Styles/JsStyles/commonstyles.css';
import '../../Styles/AboutStyles/About.css';
import aboutimg from '../../Assets/Imgs/about.png';
import formimg from '../../Assets/Imgs/form.png';
import Footer from '../Home/Footer';
import emailjs from 'emailjs-com';
class About extends Component {
  validateform = false;
  sendEmail = (e) => {
    if(this.validateform === false) {
      alert('Please enter data');
    }
    else{
    e.preventDefault();
    emailjs.sendForm('service_8s4ana7', 'template_ptvq1qm', e.target, 'user_F82PuLbgbfMmSJJ8GwPJS')
      .then((result) => {
          // return result.text;
      }, (error) => {
          // console.log(error.text);
      });
    e.target.reset();
    this.validateform = false;
    }
  }

  valid =(data) =>{
    var name = document.getElementById('nm').value;
    var mail = document.getElementById('ml').value;
    var msg = document.getElementById('msg').value;

      if(name === "" || name.length <= 4 || name.charAt(0) === " "){
        document.getElementById('nm').style.borderColor = "red";
        return false;
      }
      for(var i = 0; i < name.length; i++){
        if(name[i] >= 0 && name[i] <= 9){
          document.getElementById('nm').style.borderColor = "red";
          return false;
        }
      }
      document.getElementById('nm').style.borderColor = "indigo";

      if(mail === "" || mail.length <= 6 || mail.charAt(0) === " " || mail.charAt(0) === "@"){
        document.getElementById('ml').style.borderColor = "red";
        return false;
      }
      if(!mail.endsWith("@gmail.com")){
        document.getElementById('ml').style.borderColor = "red";
        return false;
      }
      document.getElementById('ml').style.borderColor = "indigo";

      if(msg === "" || msg.length <= 10 || msg.charAt(0) === " "){
         document.getElementById('msg').style.borderColor = "red";
         return false;
       }
       document.getElementById('msg').style.borderColor = "indigo";
       this.validateform = true;
  }
  render() {
    return (
      <div className="Container abuotadj">
        <div className="Content">
          <div className="info dis">
            <div className="about_header">
              <h1>About Us</h1>
            </div>

            <div className="aboutcon">
              <div className="about_text">
                <img src={aboutimg} alt="About"/>
              </div>
              <div className="about_img">
                <h1>About Us</h1>
                <p>We Are Online <b>|</b> We are Exports</p>
                <p>Designing Web <b>|</b> Increase Development <b>|</b> Creating Api's <br />
                We Make Level 3 Interface <b>|</b> We have Ultimate Coding Skills</p><br />
                <p>Our Team Exports Have Extream Knowledge on coding</p>
              </div>
            </div>

            <div className="aboutcon rev">
              <div className=" about_img">
              <h1>Send Message</h1>
               <form onSubmit={this.sendEmail}>
                 <label>Name</label><br />
                 <input type="text" name="name" id="nm" placeholder="Enter Name" onKeyUp={this.valid} autoComplete="off"/><br />
                 <label>Email Address</label><br />
                 <input type="text" name="mail" id="ml" placeholder="Enter Email Address" onKeyUp={this.valid} autoComplete="off"/><br />
                 <label>Message</label><br />
                 <textarea cols="22" rows="5" name="message" id="msg" placeholder="Message" onKeyUp={this.valid} autoComplete="off"></textarea><br />
                 <input type="submit"value="Send Message"></input>
               </form>
              </div>
              <div className="about_text">
              <img src={formimg} alt="About"/>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}

export default About
