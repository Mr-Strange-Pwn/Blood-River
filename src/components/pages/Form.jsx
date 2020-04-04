import React,{Component} from 'react';


class Form extends Component {
    state = { 
        Name : "",
        Blood_Type : "",
        Age : "",
        Address : "",
        Phone_No : "",
        Display : false,
    
     }

     submitHandler=(e)=>{
        e.preventDefault()
        this.setState({ Display : true})
     }


    render() { 
        return (
            <div> <div className="form-group" style={{width:"30rem", border:"soled red"}} >
            <form onSubmit={this.submitHandler}>
                <h1>donate to save lifes</h1><br/>
            NAME :<input className="form-control" type="text" value={this.state.Name} onChange={(e)=> {this.setState({Name : e.target.value})}} /><br/>
            ADDRESS :<input className="form-control" type="text" value={this.state.Address} onChange={(e)=> {this.setState({Address : e.target.value})}} /><br/>
            AGE :<input className="form-control" type="text" value={this.state.Age} onChange={e => this.setState({Age : e.target.value})} /><br/>
            Blood Type :<select className="form-control" name="Blood_Type" onChange={e => this.setState({Blood_Type : e.target.value})}>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                </select><br/>
            Contact No :<input className="form-control" type="number" value={this.state.Phone_No} onChange={e=> this.setState({Phone_No : e.target.value})} /><br/>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>

            { this.state.Display ? <div><p>thanks {this.state.Name} your blood of type {this.state.Blood_Type} will save some life <br/>
             One day we will contact you in {this.state.Phone_No} </p></div> : null}
        </div> 
        
        
     
        </div>
        );
    }
}
 
export default Form;