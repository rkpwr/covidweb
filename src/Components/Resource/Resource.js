import React, { Component } from 'react'
import '../../Styles/JsStyles/commonstyles.css';
import '../../Styles/Resource/Resource.css';
import SrcContainer from './SrcContainer';
import Footer from '../Home/Footer';
class Resource extends Component {
  
  cardgroup1 = {
   
    head1:"Last_Updates",
    informations:{
      card1info:'COVID-19 Vaccination of Pregnant Women PosterEnglish',
      card2info:'Counseling booklet for Frontline workers and VaccinatorsEnglish',
      card3info:'Operational Guidance for COVID-19 Vaccination of Pregnant Women',
      card4info:'Toolkit for Youth Campaign on COVID Appropriate Behaviour',
      card5info:'Guidelines for Management of COVID-19 in Children',
      card6info:'Guidelines on Operationalisation of COVID care services for children and adolescents',
    },
    links:{
      link1:'https://www.mohfw.gov.in/pdf/PostersonvaccinationofpregnantwomenEnglish.pdf',
      link2:'https://www.mohfw.gov.in/pdf/CounsellingbookletforFLWsEnglish.pdf',
      link3:'https://www.mohfw.gov.in/pdf/OperationalGuidanceforCOVID19vaccinationofPregnantWoman.pdf',
      link4:'https://www.mohfw.gov.in/pdf/YouthGuidebookonCAB&VaccinationEnglish.pdf',
      link5:'https://www.mohfw.gov.in/pdf/GuidelinesforManagementofCOVID19inCHILDREN18June2021final.pdf',
      link6:'https://www.mohfw.gov.in/pdf/GuidelinesonOperationalizationofCoVIDCareServicesforChildrenandAdolescents14062021.pdf',
     }
  }

  cardgroup2 = {
    head1:"Travel Advisories",
    informations:{
      card1info:'Algorithm for international arrivals',
      card2info:'Guidelines for International Arrivals',
      card3info:'Extension of validity of Standard Operating Procedure',
      card4info:'SOP for Surveillance and response for the new SARS Cov-2 variant',
      card5info:'Revised guidelines for International Arrivals',
      card6info:'Standard Operating Procedure for Passenger Movement post Disembarkation',
    },
    links:{
      link1:'https://www.mohfw.gov.in/pdf/Algorithmforinternationalarrivals.pdf',
      link2:'https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals17022021.pdf',
      link3:'https://www.mohfw.gov.in/pdf/AdministrationofSecondDoseofCovishieldVaccinePriortoPrescribedTimeInterval.pdf',
      link4:'https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf',
      link5:'https://www.mohfw.gov.in/pdf/GuidelinesforManagementofCOVID19inCHILDREN18June2021final.pdf',
      link6:'https://www.mohfw.gov.in/pdf/SOPQuarantineofPassengers.pdf',
     }
  }

  cardgroup3 = {
    display:'none',
    head1:"Health Advisories",
    informations:{
      card1info:'Poster for Felicitating our Nurses and Midwives on International Nurses day 2020',
      card2info:'Felicitating our Nurses and Midwives on International Nurses day 2020 (Video)',
      card3info:'Musical tribute to Healthcare Service Personnel',
      card4info:'',
      card5info:'',
      card6info:'',
    },
    links:{
      link1:'https://www.mohfw.gov.in/pdf/PosterInternationalNurseDay2020.pdf',
      link2:'https://www.youtube.com/watch?v=HmPneP8XeLs',
      link3:'https://www.youtube.com/watch?v=yJZ06JsREW4',
      link4:'',
      link5:'',
      link6:'',
     }
  }
  cardgroup4 = {
    display:'none',
    head1:"Citizens",
    informations:{
      card1info:'Protocol for Management of Covid - 19 in the Paediatric Age Group',
      card2info:'Clinical Guidance for Management of Adult Covid-19 Patients',
      card3info:'COVID 19 Proning for Self care',
      card4info:'',
      card5info:'',
      card6info:'',
    },
    links:{
      link1:'https://www.mohfw.gov.in/pdf/RevisedguidelinesforHomeIsolationofmildasymptomaticCOVID19cases.pdf',
      link2:'https://www.mohfw.gov.in/pdf/COVID19ProningforSelfcare3.pdf',
      link3:'https://www.mohfw.gov.in/pdf/FAQCoWINforcitizens.pdf',
      link4:'',
      link5:'',
      link6:'',
     }
  }
  cardgroup5 = {
    display:'none',
    head1:"Hospitals",
    informations:{
      card1info:'Guidelines for Management of COVID-19 in Children',
      card2info:'Advisory for Rational use of Remdesivir for COVID-19 Treatment',
      card3info:'Updated Detailed Clinical Management Protocol for adult cases of COVID19',
      card4info:'',
      card5info:'',
      card6info:'',
    },
    links:{
      link1:'https://www.mohfw.gov.in/pdf/GuidelinesforManagementofCOVID19inCHILDREN18June2021final.pdf',
      link2:'https://www.mohfw.gov.in/pdf/UpdatedDetailedClinicalManagementProtocolforCOVID19adultsdated24052021.pdf',
      link3:'https://www.mohfw.gov.in/pdf/FAQCoWINforcitizens.pdf',
      link4:'',
      link5:'',
      link6:'',
     }
  }
  
  render() {
    return (
      <div className="Container adjust">
        <div className="Content ad2">
          <div className="info">
            <div className="Resource_Header">
            <h1>Resources</h1>
            </div>
            <SrcContainer
             count={this.cardgroup1.cardcount}
             heading={this.cardgroup1.head1}
             cardinfo={this.cardgroup1.informations}
             link={this.cardgroup1.links}
            />
             <SrcContainer
             heading={this.cardgroup2.head1}
             cardinfo={this.cardgroup2.informations}
             link={this.cardgroup2.links}
            />
             <SrcContainer
             heading={this.cardgroup3.head1}
             cardinfo={this.cardgroup3.informations}
             link={this.cardgroup3.links}
             st={this.cardgroup3.display}
            />
             <SrcContainer
             heading={this.cardgroup4.head1}
             cardinfo={this.cardgroup4.informations}
             link={this.cardgroup4.links}
             st={this.cardgroup4.display}
            />
             <SrcContainer
             heading={this.cardgroup5.head1}
             cardinfo={this.cardgroup5.informations}
             link={this.cardgroup5.links}
             st={this.cardgroup5.display}
            />
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}

export default Resource