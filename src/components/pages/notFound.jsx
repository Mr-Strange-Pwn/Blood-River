import React from 'react';
import {Link} from 'react-router-dom'

const Notfound = () => {
    return (  <div><h1 Style={{color:"red"}}>Page not found</h1><br/>
    <Link to={"/"}><button>Back to Home</button></Link></div>);
}
 
export default Notfound;