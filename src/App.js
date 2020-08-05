import React, { Component } from 'react';
import db from './firebase'
import Login from './Login';
import Home from './Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    this.authListner()
  }
  authListner(){
    db.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({user})
      }else{
        this.setState({user:null})
      }
    })
  }
  render() {
    return (
      <div>
          {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    )
  }
}

export default App

