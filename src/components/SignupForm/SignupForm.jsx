import React,{Component} from "react";
import "./SignupForm.css"

class SignupForm extends Component{
    state={
        name:"Shovgu",
        email:"reshad.daghli9@gmail.com",
        password:"reshad.dagli",
        check:false
    }

    handleInput=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    deleteInput=()=>{
        this.setState({name:""})
    }
    deleteInput1=()=>{
        this.setState({email:""})
    }
    deleteInput2=()=>{
        this.setState({password:""})
    }
    showPassword=()=>{
        this.setState({check:!this.state.check})
    }

    render(){
        const{name,email,password,type,check}=this.state
        return(
            <div className="main">
            <label>
                Name<br></br>
                <input type="text" value={name} name="name" id="name" placeholder="Enter name" onChange={this.handleInput}></input>
            </label><button onClick={this.deleteInput}>x</button><br></br>
            <label>
                Email<br></br>
                <input type="email" value={email} name="email" id="email" placeholder="Enter email" onChange={this.handleInput}></input>
            </label><button onClick={this.deleteInput1}>x</button><br></br>
            <label>
                Password<br></br>
                <input type={this.state.check?"text":"password"} value={password} name="password" id="password" placeholder="Enter password" onChange={this.handleInput}></input>
            </label><button onClick={this.deleteInput2}>x</button><br></br>
            <label>
                Show password
                <input type="checkbox" checked={check} className="parol" onClick={this.showPassword}></input>
            </label>
            <div className="down">
                {JSON.stringify([name,email,password,check])}
            </div>
        </div>          
        )
    }
}
export default SignupForm