import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        color: 'white',
        alignItems: 'center',
        textAlign: 'center'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    navBar: {
        backgroundColor: '#F3821E',
        marginBottom: '40px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    submit: {
        margin: theme.spacing(3, 2, 2),
        backgroundColor: '#9CB83C;',
        color: 'white',
        '&:hover': {
            backgroundColor: '#617e04',
        },
    },
});

class CivilWorksElectrification extends Component {
    render() {
        const { handleChange, CivilWorksElectrificationProps, submit, classes, prevStep } = this.props;
        return (
            <div>
                <Container component="main" maxWidth="md" className="siteBG">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h4">
                        Civil Works & Electrification
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Civil Works & Electrification</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                Site_Cleanliness
                                                    </FormLabel>
                                                <RadioGroup aria-label="Site_Cleanliness" name="Site_Cleanliness"
                                                    value={CivilWorksElectrificationProps.Site_Cleanliness} onChange={handleChange('Site_Cleanliness')} row>
                                                    <FormControlLabel value="Ok" control={<Radio />} label="Ok" />
                                                    <FormControlLabel value="NoK" control={<Radio />} label="NoK" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="Site_Cleanliness_Remarks"
                                                label="Site_Cleanliness_Remarks"
                                                name="Site_Cleanliness_Remarks"
                                                onChange={handleChange('Site_Cleanliness_Remarks')}
                                                value={CivilWorksElectrificationProps.AC_Test_Run_Remarks}
                                            />
                                        </Grid>   
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                Site_Locks
                                                    </FormLabel>
                                                <RadioGroup aria-label="Site_Locks" name="Site_Locks"
                                                    value={CivilWorksElectrificationProps.Site_Locks} onChange={handleChange('Site_Locks')} row>
                                                    <FormControlLabel value="Ok" control={<Radio />} label="Ok" />
                                                    <FormControlLabel value="NoK" control={<Radio />} label="NoK" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="Site_Locks_Remarks"
                                                label="Site_Locks_Remarks"
                                                name="Site_Locks_Remarks"
                                                onChange={handleChange('Site_Locks_Remarks')}
                                                value={CivilWorksElectrificationProps.Site_Locks_Remarks}
                                            />
                                        </Grid> 

                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                Cable_Routing_Conduits_Ducts
                                                    </FormLabel>
                                                <RadioGroup aria-label="Cable_Routing_Conduits_Ducts" name="Cable_Routing_Conduits_Ducts"
                                                    value={CivilWorksElectrificationProps.Cable_Routing_Conduits_Ducts} onChange={handleChange('Cable_Routing_Conduits_Ducts')} row>
                                                    <FormControlLabel value="Ok" control={<Radio />} label="Ok" />
                                                    <FormControlLabel value="NoK" control={<Radio />} label="NoK" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="Cable_Routing_Conduits_Ducts_Remarks"
                                                label="Cable_Routing_Conduits_Ducts_Remarks"
                                                name="Cable_Routing_Conduits_Ducts_Remarks"
                                                onChange={handleChange('Cable_Routing_Conduits_Ducts_Remarks')}
                                                value={CivilWorksElectrificationProps.Cable_Routing_Conduits_Ducts_Remarks}
                                            />
                                        </Grid>                            
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

                            <Button
                                variant="contained"
                                className={classes.submit}
                                onClick={prevStep}

                            >
                                Previous
                            </Button>
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
            </div>
        )
    }
}
CivilWorksElectrification.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(CivilWorksElectrification)
