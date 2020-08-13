import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NetworVisitsPMR, Zones, ShowZones } from './components/BarChart'
import {
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Button,
    withStyles,
    Drawer,
    List,
    Divider,
    IconButton,
    Container,
    Grid,
    Paper,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './components/ListItems';


const drawerWidth = 240;

const useStyles = (theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 320,
    },
    navBar: {
        backgroundColor: '#F3821E',
        marginBottom: '40px'
    },
    title: {
        flexGrow: 1,
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
        backgroundColor: '#9CB83C;',
        color: 'white',
        '&:hover': {
            backgroundColor: '#617e04',
        },
    },
});




class Home extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
        this.state = {
            siteID: "",
            siteObj: {},
            isValid: false,
            name: '',
            open: false,
            submited: false,
        }
    }
    handleDrawerOpen() {
        this.setState({ open: true });
    }
    handleDrawerClose() {
        this.setState({ open: false });
    }
    logout() {
        firebase.auth().signOut();
        localStorage.clear()
    }

    render() {
        const { classes } = this.props;
        // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <div className={classes.root}>
<<<<<<< HEAD
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift, classes.navBar)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Dashboard
          </Typography>
                        <Button onClick={this.logout} className={classes.submit} >Logout</Button>
=======
                <AppBar position="sticky" alignitems="center" className={classes.navBar} >
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>

                            Hello {this.state.name}
                        </Typography>
                        <Button className={classes.submit} onClick={this.logout}>Logout</Button>
>>>>>>> parent of b09c865... Update Home.js
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                    <Divider />
                    <List>{secondaryListItems}</List>

                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Paper>
                                    <NetworVisitsPMR />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper>
                                    <Zones />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper >
                                    <ShowZones />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper >
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper >
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div>

        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Home)
