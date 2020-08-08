import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

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

class AirConditioners extends Component {
    render() {
        const { handleChange, AirConditionersProps, nextStep, classes, prevStep } = this.props;
        return (
            <div>
                <Container component="main" maxWidth="md" className="siteBG">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h4">
                            AirConditioners
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>AirConditioners</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                    AC_Test_Run
                                                    <Tooltip title="Starting and test run of Air Conditioners." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip>
                                                </FormLabel>
                                                <RadioGroup aria-label="AC_Test_Run" name="AC_Test_Run"
                                                    value={AirConditionersProps.AC_Test_Run} onChange={handleChange('AC_Test_Run')} row>
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />

                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="AC_Test_Run_Remarks"
                                                label="AC_Test_Run_Remarks"
                                                name="AC_Test_Run_Remarks"
                                                onChange={handleChange('AC_Test_Run_Remarks')}
                                                value={AirConditionersProps.AC_Test_Run_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">IDU Working
                                                <Tooltip title="Check the both IDU are working properly and producing chilled air with appropriate throw." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip>
                                                </FormLabel>
                                                <RadioGroup aria-label="IDU_Working" name="IDU_Working"
                                                    value={AirConditionersProps.IDU_Working} onChange={handleChange('IDU_Working')} row>
                                                    <FormControlLabel value="Both" control={<Radio />} label="Both" />
                                                    <FormControlLabel value="One" control={<Radio />} label="One" />
                                                    <FormControlLabel value="None" control={<Radio />} label="None" />

                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="IDU_Working_Remarks"
                                                label="IDU_Working_Remarks"
                                                name="IDU_Working_Remarks"
                                                onChange={handleChange('IDU_Working_Remarks')}
                                                value={AirConditionersProps.IDU_Working_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">ODU_Condensing_Unit_Working
                                                <Tooltip title="Check the ODU condensing unit is working properly." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip>
                                                </FormLabel>
                                                <RadioGroup aria-label="ODU_Condensing_Unit_Working" name="ODU_Condensing_Unit_Working"
                                                    value={AirConditionersProps.ODU_Condensing_Unit_Working} onChange={handleChange('ODU_Condensing_Unit_Working')} row>
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />

                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="ODU_Condensing_Unit_Working_Remarks"
                                                label="ODU_Condensing_Unit_Working_Remarks"
                                                name="ODU_Condensing_Unit_Working_Remarks"
                                                onChange={handleChange('ODU_Condensing_Unit_Working_Remarks')}
                                                value={AirConditionersProps.ODU_Condensing_Unit_Working_Remarks}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">PCB_Functioning
                                                <Tooltip title="Check the PCB is functioning properly." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
                                                <RadioGroup aria-label="PCB_Functioning" name="PCB_Functioning"
                                                    value={AirConditionersProps.PCB_Functioning} onChange={handleChange('PCB_Functioning')} row>
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />

                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="PCB_Functioning_Remarks"
                                                label="PCB_Functioning_Remarks"
                                                name="PCB_Functioning_Remarks"
                                                onChange={handleChange('PCB_Functioning_Remarks')}
                                                value={AirConditionersProps.PCB_Functioning_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Thermostat_Working
                                                <Tooltip title="Check the thermostat of Air Conditioner is functioning properly. Replace/Calibrate/Adjust thermostat if required." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip>
                                                </FormLabel>
                                                <RadioGroup aria-label="Thermostat_Working" name="Thermostat_Working"
                                                    value={AirConditionersProps.Thermostat_Working} onChange={handleChange('Thermostat_Working')} row>
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />


                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="Thermostat_Working_Remarks"
                                                label="Thermostat_Working_Remarks"
                                                name="Thermostat_Working_Remarks"
                                                onChange={handleChange('Thermostat_Working_Remarks')}
                                                value={AirConditionersProps.Thermostat_Working_Remarks}
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
                                onClick={nextStep}
                            >
                                Next
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>
        )
    }
}
AirConditioners.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(AirConditioners)
