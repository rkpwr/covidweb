import React from 'react';
import '../../Styles/Resource/SrcContainer.css';
import Resourcecard from './Resourcecard';
const SrcContainer = (props) => {
   
    let info = [];
    for(var k in props.cardinfo){
        info.push(props.cardinfo[k])
    }
    let link = [];
    for(var l in props.link){
        link.push(props.link[l])
    }
  
    return (
        
        <div className="source_container">
        <h2>{props.heading}</h2>
        <div className="srccard">
          
            <Resourcecard info={info[0]} link={link[0]}/>
            <Resourcecard info={info[1]} link={link[1]}/>
            <Resourcecard info={info[2]} link={link[2]}/>
        {/* <h2>{props.head2}</h2> */}
            <Resourcecard info={info[3]} link={link[3]} stl={props.st}/>
            <Resourcecard info={info[4]} link={link[4]} stl={props.st} />
            <Resourcecard info={info[5]} link={link[5]} stl={props.st}/>
        </div>
        </div>
       
    );
};

export default SrcContainer;