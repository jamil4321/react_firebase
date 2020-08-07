import React, { Component } from 'react';
import db from './firebase';
import PropTypes from 'prop-types';
// Theam Import

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles =theme => ({
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '95%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#9CB83C;',
      borderRadius:'71px',
      minWidth:'180px',
      color:'white',
        '&:hover': {
            backgroundColor: '#617e04',
          },
    },
  });
  



class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.hanleChange = this.hanleChange.bind(this);
        this.state = {
            email: "",
            password: "",
        }
    }
    login(e) {
        e.preventDefault();
        db.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u.user.email, u.user.uid)
            localStorage.setItem("email", u.user.email)
            localStorage.setItem("uid", u.user.uid)
        }).catch(err => {
            console.log(err)
        })

    }
    hanleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="App-header">
                <div className="App">
                <Container component="main" maxWidth="xs" className="loginBG">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h3">
                            Sing In
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Eamil Address"
                                name="email"
                                onChange={this.hanleChange}
                                value={this.state.email}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="password"
                                name="password"
                                type="password"
                                onChange={this.hanleChange}
                                value={this.state.password}
                            />
                            <Button
                                variant="contained"
                                // fullWidth
                                className={classes.submit}
                                onClick={this.login}
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                </Container>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(useStyles)(Login);

