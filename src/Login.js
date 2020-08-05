import React, { Component } from 'react';
import db from './firebase';

class Login extends Component {

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.hanleChange = this.hanleChange.bind(this);
        this.state={
            email : "",
            password:""
        }
    }
    login(e){
        e.preventDefault();
        db.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u.user.email,u.user.uid)
        }).catch(err=>{
            console.log(err)
        })
    }
    hanleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input name="email" type="email" id="email" placeholder="Enter Your Email" onChange={this.hanleChange} value={this.state.email}/>
                    <input name="password" type="password" id="password" placeholder="Enterpassword" onChange={this.hanleChange} value={this.state.password}/>

                    <button onClick={this.login}>Login</button>

                </form>
            </div>
        )
    }
}

export default Login

