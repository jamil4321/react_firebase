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

class GroundingLightningArrestor extends Component {
    render() {
        const { handleChange, GroundingLightningArrestorProps, nextStep, classes, prevStep } = this.props;
        return (
            <div>
                <Container component="main" maxWidth="md" className="siteBG">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h4">
                            GroundingLightningArrestor
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>GroundingLightningArrestor</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                    Grounding_Pit_Clean
                                                    </FormLabel>
                                                <RadioGroup aria-label="Grounding_Pit_Clean" name="Grounding_Pit_Clean"
                                                    value={GroundingLightningArrestorProps.Grounding_Pit_Clean} onChange={handleChange('Grounding_Pit_Clean')} row>
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
                                                id="Grounding_Pit_Clean_Remarks"
                                                label="Grounding_Pit_Clean_Remarks"
                                                name="Grounding_Pit_Clean_Remarks"
                                                onChange={handleChange('Grounding_Pit_Clean_Remarks')}
                                                value={GroundingLightningArrestorProps.Grounding_Pit_Clean_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Grounding_Pit_Treatment</FormLabel>
                                                <RadioGroup aria-label="Grounding_Pit_Treatment" name="Grounding_Pit_Treatment"
                                                    value={GroundingLightningArrestorProps.Grounding_Pit_Treatment} onChange={handleChange('Grounding_Pit_Treatment')} row>
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
                                                id="Grounding_Pit_Treatment_Remarks"
                                                label="Grounding_Pit_Treatment_Remarks"
                                                name="Grounding_Pit_Treatment_Remarks"
                                                onChange={handleChange('Grounding_Pit_Treatment_Remarks')}
                                                value={GroundingLightningArrestorProps.Grounding_Pit_Treatment_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Resistenace_Value_Measurement</FormLabel>
                                                <RadioGroup aria-label="Resistenace_Value_Measurement" name="Resistenace_Value_Measurement"
                                                    value={GroundingLightningArrestorProps.Resistenace_Value_Measurement} onChange={handleChange('Resistenace_Value_Measurement')} row>
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
                                                id="Resistenace_Value_Measurement_Remarks"
                                                label="Resistenace_Value_Measurement_Remarks"
                                                name="Resistenace_Value_Measurement_Remarks"
                                                onChange={handleChange('Resistenace_Value_Measurement_Remarks')}
                                                value={GroundingLightningArrestorProps.Resistenace_Value_Measurement_Remarks}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend"> Grounding_Cable_Connectivity_Check</FormLabel>
                                                <RadioGroup aria-label="Grounding_Cable_Connectivity_Check" name="Grounding_Cable_Connectivity_Check"
                                                    value={GroundingLightningArrestorProps.Grounding_Cable_Connectivity_Check} onChange={handleChange('Grounding_Cable_Connectivity_Check')} row>
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
                                                id="Grounding_Cable_Connectivity_Check_Remarks"
                                                label="Grounding_Cable_Connectivity_Check_Remarks"
                                                name="Grounding_Cable_Connectivity_Check_Remarks"
                                                onChange={handleChange('Grounding_Cable_Connectivity_Check_Remarks')}
                                                value={GroundingLightningArrestorProps.Grounding_Cable_Connectivity_Check_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Cable_Termination_Check</FormLabel>
                                                <RadioGroup aria-label="Cable_Termination_Check" name="Cable_Termination_Check"
                                                    value={GroundingLightningArrestorProps.Cable_Termination_Check} onChange={handleChange('Cable_Termination_Check')} row>
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
                                                id="Cable_Termination_Check_Remarks"
                                                label="Cable_Termination_Check_Remarks"
                                                name="Cable_Termination_Check_Remarks"
                                                onChange={handleChange('Cable_Termination_Check_Remarks')}
                                                value={GroundingLightningArrestorProps.Cable_Termination_Check_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                        <FormControl component="fieldset">
                                                <FormLabel component="legend">Busbars_Greasing</FormLabel>
                                                <RadioGroup aria-label="Busbars_Greasing" name="Busbars_Greasing"
                                                    value={GroundingLightningArrestorProps.Busbars_Greasing} onChange={handleChange('Busbars_Greasing')} row>
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
                                                id="Busbars_Greasing_Remarks"
                                                label="Busbars_Greasing_Remarks"
                                                name="Busbars_Greasing_Remarks"
                                                onChange={handleChange('Busbars_Greasing_Remarks')}
                                                value={GroundingLightningArrestorProps.Busbars_Greasing_Remarks}
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
GroundingLightningArrestor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(GroundingLightningArrestor)
