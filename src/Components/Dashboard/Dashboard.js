import React, { Component } from 'react'
import '../../Styles/DashboardStyles/Dashboard.css';
import Select from 'react-select';
import '../../Styles/JsStyles/commonstyles.css'
import { Bar, Line } from 'react-chartjs-2';
import Footer from '../Home/Footer';
class Dashboard extends Component {
  state = {
    data:'',

    tested:'-',
    confirmed:'-',
    recovered:'-',
    deceased:'-',

    D7_tested:'10',
    D7_confirmed:'10',
    D7_recovered:'10',
    D7_deceased:'10',

    D_vaccinated1:'-',
    D_vaccinated2:'-',
    T_vaccinated1:'-',
    T_vaccinated2:'-',

    d14_21:'-',

    stateval:'Telangana',
    date:'-',
    population:'-',
  }
  options = [
    { value: '0', label: 'Andaman and Nicobar Island' },
    { value: '1', label: 'Andhra Pradesh' },
    { value: '2', label: 'Arunachal Pradesh' },
    { value: '3', label: 'Assam' },
    { value: '4', label: 'Bihar' },
    { value: '5', label: 'Chhattisgarh' },
    { value: '6', label: 'Chandigarh' },
    { value: '7', label: 'Delhi' },
    { value: '8', label: 'Dadra and Nagar Haveli and Daman and Diu' },
    { value: '9', label: 'Goa' },
    { value: '10', label: 'Gujarat' },
    { value: '11', label: 'Himachal Pradesh' },
    { value: '12', label: 'Haryana' },
    { value: '13', label: 'Jharkhand' },
    { value: '14', label: 'Jammu&Kashmir' },
    { value: '15', label: 'Karnataka' },
    { value: '16', label: 'Kerala' },
    { value: '17', label: 'Ladakh' },
    { value: '18', label: 'Lakshadweep' },
    { value: '19', label: 'Maharashtra' },
    { value: '20', label: 'Meghalaya' },
    { value: '21', label: 'Manipur' },
    { value: '22', label: 'Madhya Pradesh' },
    { value: '23', label: 'Mizoram' },
    { value: '24', label: 'Nagaland' },
    { value: '25', label: 'Odisha' },
    { value: '26', label: 'Punjab' },
    { value: '27', label: 'Puducherry' },
    { value: '28', label: 'Rajasthan' },
    { value: '29', label: 'Sikkim' },
    { value: '30', label: 'Telangana' },
    { value: '31', label: 'Tamil Nadu' },
    { value: '32', label: 'Tripura' },
    { value: '33', label: 'TT' },
    { value: '34', label: 'Uttar Pradesh' },
    { value: '35', label: 'Uttarakhand' },
    { value: '36', label: 'West Bengal' },

   
  ]
  serverConnection = () =>{
    fetch('https://api.covid19india.org/v4/min/data.min.json')
    .then((response) =>{
      return response.text()
     })
     .then((response) =>{
       this.setState({
         data:JSON.parse(response),
         tested:JSON.parse(response).TG.total.tested,
         confirmed:JSON.parse(response).TG.total.confirmed,
         recovered:JSON.parse(response).TG.total.recovered,
         deceased:JSON.parse(response).TG.total.deceased,

         D7_tested:JSON.parse(response).TG.delta7.tested,
         D7_confirmed:JSON.parse(response).TG.delta7.confirmed,
         D7_recovered:JSON.parse(response).TG.delta7.recovered,
         D7_deceased:JSON.parse(response).TG.delta7.deceased,
        
    
         D_vaccinated1:JSON.parse(response).TG.delta7.vaccinated1,
         D_vaccinated2:JSON.parse(response).TG.delta7.vaccinated2,
         T_vaccinated1:JSON.parse(response).TG.total.vaccinated1,
         T_vaccinated2:JSON.parse(response).TG.total.vaccinated2,

         d14_21:JSON.parse(response).TG.delta21_14.confirmed,

         last_updated:JSON.parse(response).TG.meta.last_updated,
         population:JSON.parse(response).TG.meta.population
       });
     })
  }
  
  componentWillMount() {
    this.serverConnection();
  }

 
  show = (e) =>{
    var arr = [];
    for(var key in this.state.data)
    {
      arr.push(this.state.data[key])
    }
  
    this.setState({
      tested:arr[e.value].total.tested,
      confirmed:arr[e.value].total.confirmed,
      recovered:arr[e.value].total.recovered,
      deceased:arr[e.value].total.deceased,

      D7_tested:arr[e.value].delta7.tested,
      D7_confirmed:arr[e.value].delta7.confirmed,
      D7_recovered:arr[e.value].delta7.recovered,
      D7_deceased:arr[e.value].delta7.deceased,

      D_vaccinated1:arr[e.value].delta7.vaccinated1,
      D_vaccinated2:arr[e.value].delta7.vaccinated2,
      T_vaccinated1:arr[e.value].total.vaccinated1,
      T_vaccinated2:arr[e.value].total.vaccinated2,
      d14_21:arr[e.value].delta21_14.confirmed,

      stateval:e.label,
      date:arr[e.value].meta.last_updated,
      population:arr[e.value].meta.population

    })
   
  
  }
  

  render() {
    let data1 = {
      labels:['Tested', 'NewTested' ,'PrevTested'],
      width:'200px',
      height:'200px',
      datasets:[
        {
          label:'Tested Status ',
          data:[this.state.tested,parseInt(this.state.tested/1.5),parseInt(this.state.tested/2)],
          backgroundColor: ['rgb(224, 146, 0,0.4)'],
          borderColor: ['rgb(224, 146, 0)'],
          borderWidth: 1,
          barPercentage: 5,
          maxBarThickness: 40,
        }
      ]
    }
    let data2 = {
        labels:['Con','NewCon', 'PrevCon'],
            datasets:[
                {
                  label:'Confirmed Status',
                  data:[this.state.confirmed,parseInt(this.state.confirmed/5),parseInt(this.state.confirmed/2)],
                  backgroundColor: [ 'rgb(255, 35, 6,0.4)'],
                  borderColor: [ 'rgb(255, 35, 6)'],
                  borderWidth: 1,
                  barPercentage: 5,
                  maxBarThickness: 40,
                }
            ]
    }
        let data3 = {
          labels:['Rec','NewRec','PrevRec'],
              datasets:[
                  {
                    label:'Recovered Status',
                    data:[this.state.recovered,parseInt(this.state.recovered/2),parseInt(this.state.recovered/3)],
                    backgroundColor: [ 'rgb(0, 172, 29,0.4)' ],
                    borderColor: [ 'rgb(0, 172, 29)'],
                    borderWidth: 1,
                    barPercentage: 5,
                    maxBarThickness: 40,
                  }
              ]
          }
          let data4 = {
            labels:['Dec','NewDec', 'PrevDec'],
                datasets:[
                    {
                      label:'Decreased Status',
                      data:[this.state.deceased,parseInt(this.state.deceased/2),parseInt(this.state.deceased/2.4)],
                      backgroundColor: ['rgb(149, 1, 179,0.4)'],
                      borderColor: [ 'rgb(149, 1, 179)'],
                      borderWidth: 1,
                      barPercentage: 5,
                      maxBarThickness: 40,
                     
                    }
                ]
            }

    let d7_1 = {
      labels:['D_Tst','','D7_Tst'],
      width:'200px',
      height:'200px',
      datasets:[
        {
          label:'D7_Tested',
          data:[this.state.D7_tested/5,parseInt(this.state.D7_confirmed/1.2),parseInt(this.state.d14_21*10)],
          backgroundColor: ['rgb(224, 146, 0,0.4)'],
          borderColor: ['rgb(224, 146, 0)'],
          borderWidth: 1,
          barPercentage: 5,
          maxBarThickness: 40,
        }
      ]
    }

    let d7_2 = {
      labels:['D_Cnfmd', '','D7_Cnfmd'],
      width:'200px',
      height:'200px',
      datasets:[
        {
          label:'D7_Conformed',
          data:[this.state.D7_confirmed,parseInt(this.state.D7_confirmed/1.2),parseInt(this.state.d14_21)],
          backgroundColor: ['rgb(255, 35, 6,0.4)'],
          borderColor: ['rgb(255, 35, 6,0.6)'],
          borderWidth: 1,
          barPercentage: 5,
          maxBarThickness: 40,
        }
      ]
    }

    let d7_3 = {
      labels:['D_rcvrd','','D7_Rcvrd'],
      width:'200px',
      height:'200px',
      datasets:[
        {
          label:'D7_Recovered',
          data:[this.state.D7_recovered,parseInt(this.state.D7_recovered/1.2),parseInt(this.state.d14_21/3)],
          backgroundColor: ['rgb(0, 172, 29,0.4)'],
          borderColor: ['rgb(0, 172, 29,0.6)'],
          borderWidth: 1,
          barPercentage: 5,
          maxBarThickness: 40,
        }
      ]
    }

    let d7_4 = {
      labels:['D_dec', '' ,'D7_Dec'],
      width:'200px',
      height:'200px',
      datasets:[
        {
          label:'D7_Decreased',
          data:[this.state.D7_deceased,parseInt(this.state.D7_deceased*2),parseInt(this.state.d14_21/this.state.D7_deceased)],
          backgroundColor: ['rgb(149, 1, 179,0.4)'],
          borderColor: ['rgb(149, 1, 179,0.6)'],
          borderWidth: 1,
          barPercentage: 5,
          maxBarThickness: 40,
        }
      ]
    }
      
    return (
      <div className="Container">
        <div className="Content">
          <div className="info">

            <div className="selectcom">
              <Select options={this.options} id="state" onChange={this.show} />
            </div>
            <div className="update">
              <b>State : {this.state.stateval} || Last_updated : {this.state.last_updated} || Population : {this.state.population}</b>
            </div>
            <div className="dashboard_data">

              <div className="showdata">
                <div className="showdata1 bg1">
                  <p>Tested</p>
                  <p>{this.state.tested}</p>
                </div>
                <div className="showdata2">
                  <div className="delta text_color1">
                    <b>Delta</b>
                    <p>Tested : {this.state.D7_tested} </p>
                  </div>
                  <div className="delta2 text_color1">
                    <p><b>Delta</b></p>
                    <p><b>Vaccinated1</b></p>
                    <p> *****</p>
                    <p>{this.state.D_vaccinated1} </p>
                  </div>
                </div>
              </div>

              <div className="showdata">
                <div className="showdata1 bg2">
                  <p>Confirmed</p>
                  <p>{this.state.confirmed}</p>
                </div>
                <div className="showdata2">
                  <div className="delta text_color2">
                    <b>Delta</b>
                    <p>Confirmed : {this.state.D7_confirmed} </p>
                  </div>
                  <div className="delta2 text_color2">
                    <p><b>Delta</b></p>
                    <p><b>Vaccinated2</b></p>
                    <p> *****</p>
                    <p>{this.state.D_vaccinated2} </p>
                  </div>
                </div>
              </div>

              <div className="showdata">
                <div className="showdata1 bg3">
                  <p>Recovered</p>
                  <p>{this.state.recovered}</p>
                </div>
                <div className="showdata2">
                  <div className="delta text_color3">
                    <b>Delta</b>
                    <p>Recovered : {this.state.D7_recovered} </p>
                  </div>
                  <div className="delta2 text_color3">
                    <p><b>Total</b></p>
                    <p><b>Vaccinated1</b></p>  
                    <p> *****</p>
                    <p>{this.state.T_vaccinated1} </p>
                  </div>
                </div>
              </div>

              <div className="showdata">
                <div className="showdata1 bg4">
                  <p>Decreased</p>
                  <p>{this.state.deceased}</p>
                </div>
                <div className="showdata2">
                  <div className="delta text_color4"> 
                    <b>Delta</b>
                    <p>Decreased : {this.state.D7_deceased} </p>
                  </div>
                  <div className="delta2 text_color4">
                    <p><b>Total</b></p>
                    <p><b>Vaccinated2</b></p>
                    <p> *****</p>
                    <p>{this.state.T_vaccinated2} </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Barchart">
              <div className="bar1">
                <Bar data={data1}/>
              </div>
              <div className="bar1">
                <Bar data={data2}/>
              </div>
              <div className="bar1">
                <Bar data={data3}/>
              </div>
              <div className="bar1">
                <Bar data={data4}/>
              </div>
            </div>

            <div className="Barchart">
              <div className="bar1">
                <Line data={d7_1}/>
              </div>
              <div className="bar1">
                <Line data={d7_2}/>
              </div>
              <div className="bar1">
                <Line data={d7_3}/>
              </div>
              <div className="bar1">
                <Line data={d7_4}/>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
