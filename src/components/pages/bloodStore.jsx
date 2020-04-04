import React, {Component} from 'react';
import {Form , Label , Button} from 'reactstrap'

class BloodStore extends Component {
    state = { 
        Location : "",
        Blood_Type : "",
        display:false,
     }
    render() { 
        return ( <div>
            <Form>
                <Label>your loacaton : <input type="text" value={this.state.location}  onChange={e=>this.setState({Location : e.target.value })} /></Label><br/>
                <Label>Blood Type :<select className="form-control" name="Blood_Type" onChange={e => this.setState({Blood_Type : e.target.value})}>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                </select></Label>
                <Button onClick={()=>this.setState({display: true})}>proceed</Button>
            </Form>
        { this.state.display? <h1>u search for {this.state.Blood_Type} blood in {this.state.Location} </h1>:null}
        </div> );
    }
}
 
export default BloodStore;