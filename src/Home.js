import React, { Component } from 'react';
import firebase from 'firebase'; 
import Form from './components/form';



class Home extends Component {
    constructor(props){
        super(props)
        this.hanleChange = this.hanleChange.bind(this)
        this.submit = this.submit.bind(this);
        this.state={
            siteID:"",
            siteObj:{},
            isValid :false
        }
    }
    hanleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submit(e){
        e.preventDefault();
        firebase.database().ref('user').once('value',snpashot => {
            let emailID = snpashot.val().filter(user => localStorage.email === user.email)
            let siteAssinged = emailID[0].siteAssinged

            firebase.database().ref(`SiteDetails/${this.state.siteID}`).once('value',snapshot=>{
                let siteID = snapshot.val()
                if(siteID){
                 for(var i =0; i < siteAssinged.length;i++){
                     if (siteID.siteID === siteAssinged[i]){
                            this.setState({isValid:true})
                            this.setState({siteObj:siteID})
                     }      
                     else{
                         console.log("No Such Id Here!!!")
                     }
                 }
                }else{
                    console.log("No Such Id Here!!")
                }
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Hello From Home</h1>
                 <form>
                 <input name="siteID" type="Text" id="siteID" placeholder="Enter siteID" onChange={this.hanleChange} value={this.state.siteID}/>
                 <button onClick={this.submit}>submit</button>
                 </form>
                 {this.state.isValid ? (<Form siteData={this.state.siteObj}/>) : null}
            </div>
        )
    }
}

export default Home
