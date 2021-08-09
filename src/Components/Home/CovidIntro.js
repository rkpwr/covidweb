import React, { Component } from 'react';
import '../../Styles/CssStyles/CovidInfo.css';
import cov1 from '../../Assets/Imgs/cov1.jpg';
import cov2 from '../../Assets/Imgs/cov2.jpg';
import cov3 from '../../Assets/Imgs/cov3.png';
import cov4 from '../../Assets/Imgs/cov4.png';
import cov5 from '../../Assets/Imgs/cov5.jpg';
class CovidIntro extends Component {
 
  render() {
    return (
      <div className="covid_info">
        <div className="covid_info_content">
            <div className="covid_info_box">
              <h1>What Is Covid</h1>
              <p>
                COVID-19 is a disease caused by a new strain of coronavirus.'CO' stands for corona, 'VI' for virus, and 'D' for disease.Formerly, this disease was referred to as '2019 novel coronavirus' or '2019-nCoV.'
              </p>
              <p>
                Coronaviruses are a group of related RNA viruses that cause diseases in mammals and birds. In humans and birds, they cause respiratory tract infections that can range from mild to lethal. Mild illnesses in humans include some cases of the common cold (which is also caused by other viruses, predominantly rhinoviruses), while more lethal varieties can cause SARS, MERS, and COVID-19. In cows and pigs they cause diarrhea, while in mice they cause hepatitis and encephalomyelitis.
              </p>
              <p>
                Coronaviruses constitute the subfamily Orthocoronavirinae, in the family Coronaviridae, order Nidovirales, and realm Riboviria. They are enveloped viruses with a positive-sense single-stranded RNA genome and a nucleocapsid of helical symmetry. The genome size of coronaviruses ranges from approximately 26 to 32 kilobases, one of the largest among RNA viruses. They have characteristic club-shaped spikes that project from their surface, which in electron micrographs create an image reminiscent of the solar corona, from which their name derives.
              </p>
              <h3>Etymology</h3>
              <p>  
               The name "coronavirus" is derived from Latin corona, meaning "crown" or "wreath", itself a borrowing from Greek κορώνη korṓnē, "garland, wreath". The name was coined by June Almeida and David Tyrrell who first observed and studied human coronaviruses. The word was first used in print in 1968 by an informal group of virologists in the journal Nature to designate the new family of viruses. The name refers to the characteristic appearance of virions (the infective form of the virus) by electron microscopy, which have a fringe of large, bulbous surface projections creating an image reminiscent of the solar corona or halo. This morphology is created by the viral spike peplomers, which are proteins on the surface of the virus.
              </p>
              {/* <h3>Replication cycle</h3>
              <b>Cell entry<br />The life cycle of a coronavirus</b> */}
              <p>
                Infection begins when the viral spike protein attaches to its complementary host cell receptor. After attachment, a protease of the host cell cleaves and activates the receptor-attached spike protein. Depending on the host cell protease available, cleavage and activation allows the virus to enter the host cell by endocytosis or direct fusion of the viral envelope with the host membrane.
              </p>
              <div className="covidinfoimg">
                <img src={cov1} alt="Rk_Error!..."/>
                <img src={cov2} alt="Rk_Error!..."/>
                <img src={cov3} alt="Rk_Error!..."/>
                <img src={cov4} alt="Rk_Error!..."/>
                <img src={cov5} alt="Rk_Error!..."/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default CovidIntro;
