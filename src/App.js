import React, { Component } from 'react';
import db from './firebase'
import Login from './Login';
import Home from './Home';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListner()
  }
  authListner() {
    db.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }
  render() {
    return (
      <div className="App-header">
        <div className="App">
          {this.state.user ? (<Home />) : (<Login />)}
        </div>
      </div>
    )
  }
}

export default App

