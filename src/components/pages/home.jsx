import React ,{Component} from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    state = { 
        style : {
            width:"50rem",
            background:"yellowgreen",
            margin:"5px"
                 }
     }
    render() { 
        return ( <div>
            <div className="card" style={this.state.style }>
                <h1>Blood River <p> a online blood donation camp for volentiars</p><br/><p>alshow a real-time store for blood </p></h1>
                <Link to="/form"><button className="btn btn-success">Donate Blood</button></Link>   <Link to="/bloodStore"><button className="btn btn-warning">find Blood</button></Link>
                   </div>

            <div className="card" style={this.state.style }>
                <p>my concept is simpal you can find a blood doner in your area and contect them .</p>
           </div>            
            
        </div> );
    }
}
 
export default Home;