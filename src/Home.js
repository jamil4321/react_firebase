import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import Form from './components/form';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        color:'white',
        alignItems:'center',
        textAlign:'center'
    },
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '95%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
    navBar:{
        backgroundColor:'#F3821E',
        marginBottom:'40px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
        backgroundColor: '#9CB83C;',
        color:'white',
        '&:hover': {
            backgroundColor: '#617e04',
          },
      },
});


const SiteIDCheck=({classes,hanleChange,siteID,submit})=>{
return(
    <Container component="main" maxWidth="xs" className="siteBG">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h4">
                            Enter Side ID
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="siteID"
                                label="Site ID"
                                name="siteID"
                                onChange={hanleChange}
                                value={siteID}
                            />
                            <Button
                                variant="contained"
                                className={classes.submit}
                                onClick={submit}
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </Container>  
)
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.hanleChange = this.hanleChange.bind(this)
        this.submit = this.submit.bind(this);
        this.logout = this.logout.bind(this);
        this.handleIsValid = this.handleIsValid.bind(this);
        this.state = {
            siteID: "",
            siteObj: {},
            isValid: false,
        }
    }
    hanleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        firebase.database().ref('user').once('value', snpashot => {
            let emailID = snpashot.val().filter(user => localStorage.email === user.email)
            let siteAssinged = emailID[0].siteAssinged

            firebase.database().ref(`SiteDetails/${this.state.siteID}`).once('value', snapshot => {
                let siteIDVal = snapshot.val()
                if (siteIDVal) {
                    let flag = false;
                    for (var i = 0; i < siteAssinged.length; i++) {
                        if (siteIDVal.siteID === siteAssinged[i]) {
                            flag = true
                          

                            break;
                        }
                    }
                    if(flag === true){
                        this.setState({siteObj:siteIDVal})
                        this.setState({isValid: true })
                        this.setState({siteID:''})
                    }
                    else{
                        window.alert("No Such Id Here!!")
                    }
                } else {
                    window.alert("No Such Id Here!!")
                }
               
            })
        })
    }
    logout() {
        firebase.auth().signOut();
        localStorage.clear()
    }
    handleIsValid(){
        this.setState({isValid:false})
        this.setState({siteID:''})
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="sticky" alignitems="center" className={classes.navBar} >
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Hello
                            {/* Hello {(localStorage.email).split('@')[0]} */}
                        </Typography>
                        <Button className={classes.submit} onClick={this.logout}>Logout</Button>
                    </Toolbar>
                </AppBar>

                {this.state.isValid ? (<Form siteDATA = {this.state.siteObj} isValid= {this.handleIsValid}/>):(<SiteIDCheck classes = {classes} hanleChange = {this.hanleChange} siteID = {this.state.siteID} submit={this.submit}/>)}
                         
            </div>

        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Home)
