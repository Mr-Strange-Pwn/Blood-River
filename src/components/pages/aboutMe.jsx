import React from 'react';
import PWN from "../assets/images/pwn.png"
import { Link } from 'react-router-dom';

const About = () => {
    return ( 
      <div>  
      
      <div className="card" style={{width: "18rem", marginLeft:'50%', background:'yellowgreen'}}>
  <img className="card-img-top" src={PWN} alt="Card" style={{width:"100%" , height:"100%"}} />
  <div className="card-body">
    <h5 className="card-title">Pawan Tiwari</h5>
    <p className="card-text">Iam MCA final year student and working to heard to compleate this project</p>
    <Link to="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>

<div className="card" style={{width: "18rem", marginLeft:'50%', background:'yellowgreen'}}>
        <h1 className="card-title">Idea behind project</h1>
        <p className="card-text" >still thinking </p>
        </div>
        
</div>

     );
}
 
export default About;