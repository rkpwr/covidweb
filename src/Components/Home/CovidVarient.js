import React, { Component } from 'react';
import '../../Styles/CssStyles/Covidvarient.css';
import CovidVarInfo from './CovidVarInfo';
import CovidCard from './CovidCard';
import CovidPints from'./CovidPints';
import CovidPints1 from './Covidpints1';
class CovidVarient extends Component {
   CovidVarient = {
    cov:{
      name:"COVID_19 - Variants of Concern (VOC)",
      def:"The established nomenclature systems for naming and tracking SARS-CoV-2 genetic lineages by GISAID, Nextstrain and Pango are currently and will remain in use by scientists and in scientific research. To assist with public discussions of variants, WHO convened a group of scientists from the WHO Virus Evolution Working Group, the WHO COVID-19 reference laboratory network, representatives from GISAID, Nextstrain, Pango and additional experts in virological, microbial nomenclature and communication from several countries and agencies to consider easy-to-pronounce and non-stigmatising labels for VOI and VOC. At the present time, this expert group convened by WHO has recommended using letters of the Greek Alphabet, i.e., Alpha, Beta, Gamma, Delta which will be easier and more practical to discussed by non-scientific audiences."
    },
    coi:{
      name:"COVID_19 - Variants of Interest (VOI)",
      def:"Given the continuous evolution of the virus that leads to SARS-CoV-2 and the constant developments in our understanding of the impacts of variants, these working definitions may be periodically adjusted. When necessary, variants not otherwise meeting all criteria outlined in these definitions may be designated as VOIs/VOCs, and those posing a diminishing risk relative to other circulating variants may be reclassified, in consultation with the WHO Technical Advisory Group on Viral Evolution. "
    }
  }
  CovVarient = {
    Cov_alpha:{
      covimg:'https://img.icons8.com/ios-glyphs/90/000000/coronavirus.png',
      covname:'Alpha[20I (V1)]',
      covcountry:'United Kingdom',
      covDate:'18-Dec-2020'
    },
    Cov_beta:{
      covimg:'https://img.icons8.com/ios-glyphs/30/4a90e2/coronavirus.png',
      covname:'Beta[20H (V2)]',
      covcountry:'South Africa',
      covDate:'18-Dec-2020'
    },
    Cov_gama:{
      covimg:'https://img.icons8.com/color/90/4a90e2/coronavirus--v1.png',
      covname:'Gamma[20J (V3)]',
      covcountry:'Brazil',
      covDate:'11-Jan-2021'
    },
    Cov_delta:{
      covimg:'https://img.icons8.com/windows/32/fa314a/coronavirus.png',
      covname:'Delta[21A]',
      covcountry:'India',
      covDate:'04-Apr-2021'
    }
  }
  CoiVarient = {
    Coi_Eta:{
      covimg:'https://img.icons8.com/glyph-neue/64/26e07f/coronavirus.png',
      covname:'Eta[B.1.525] ',
      covcountry:'Multiple countries',
      covDate:'17-Mar-2021 '
    },
    Coi_Iota:{
      covimg:'https://img.icons8.com/emoji/48/fa314a/microbe.png',
      covname:'Iota[B.1.526]',
      covcountry:'United States of America',
      covDate:'24-Mar-2021'
    },
    Coi_Kappa:{
      covimg:'https://img.icons8.com/fluency-systems-filled/48/fa314a/coronavirus.png',
      covname:'Kappa[B.1.617.1]',
      covcountry:'India',
      covDate:'04-Apr-2021 '
    },
    Coi_Lambda:{
      covimg:'https://img.icons8.com/pastel-glyph/64/000000/coronavirus--v4.png',
      covname:'Lambda[C.37]',
      covcountry:'Peru',
      covDate:'14-Jun-2021'
    }
  }
  render() {
    return (
      <div className="covidvarient_container">
        <div className="covidvarient_content">
          <CovidVarInfo 
          heading={this.CovidVarient.cov.name}
          information={this.CovidVarient.cov.def}
          />
          <div className="cardGroup">
            <CovidCard
            vocimg={this.CovVarient.Cov_alpha.covimg}
            vocname={this.CovVarient.Cov_alpha.covname}
            voccon={this.CovVarient.Cov_alpha.covcountry}
            vocdata={this.CovVarient.Cov_alpha.covDate}
            />
            <CovidCard
            vocimg={this.CovVarient.Cov_beta.covimg}
            vocname={this.CovVarient.Cov_beta.covname}
            voccon={this.CovVarient.Cov_beta.covcountry}
            vocdata={this.CovVarient.Cov_beta.covDate}
            />
            <CovidCard
            vocimg={this.CovVarient.Cov_gama.covimg}
            vocname={this.CovVarient.Cov_gama.covname}
            voccon={this.CovVarient.Cov_gama.covcountry}
            vocdata={this.CovVarient.Cov_gama.covDate}
            />
            <CovidCard
            vocimg={this.CovVarient.Cov_delta.covimg}
            vocname={this.CovVarient.Cov_delta.covname}
            voccon={this.CovVarient.Cov_delta.covcountry}
            vocdata={this.CovVarient.Cov_delta.covDate}
            />
          </div>
          <CovidPints/>
           <CovidVarInfo 
          heading={this.CovidVarient.coi.name}
          information={this.CovidVarient.coi.def}
          />
           <div className="cardGroup">
            <CovidCard
            vocimg={this.CoiVarient.Coi_Eta.covimg}
            vocname={this.CoiVarient.Coi_Eta.covname}
            voccon={this.CoiVarient.Coi_Eta.covcountry}
            vocdata={this.CoiVarient.Coi_Eta.covDate}
            />
            <CovidCard
            vocimg={this.CoiVarient.Coi_Iota.covimg}
            vocname={this.CoiVarient.Coi_Iota.covname}
            voccon={this.CoiVarient.Coi_Iota.covcountry}
            vocdata={this.CoiVarient.Coi_Iota.covDate}
            />
            <CovidCard
            vocimg={this.CoiVarient.Coi_Kappa.covimg}
            vocname={this.CoiVarient.Coi_Kappa.covname}
            voccon={this.CoiVarient.Coi_Kappa.covcountry}
            vocdata={this.CoiVarient.Coi_Kappa.covDate}
            />
            <CovidCard
            vocimg={this.CoiVarient.Coi_Lambda.covimg}
            vocname={this.CoiVarient.Coi_Lambda.covname}
            voccon={this.CoiVarient.Coi_Lambda.covcountry}
            vocdata={this.CoiVarient.Coi_Lambda.covDate}
            />
          </div>
          <CovidPints1/>
        </div>
      </div>
    )
  }
}

export default CovidVarient
