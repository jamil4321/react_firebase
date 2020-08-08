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

class DGAlliedPower extends Component {
    render() {
        const { handleChange, DGAlliedPowerProps, nextStep, classes, prevStep } = this.props;
        return (
            <div>
                <Container component="main" maxWidth="md" className="siteBG">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h4">
                            DGAlliedPower
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Diesel Generator</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                Lube_Oil_Changed
                                                    </FormLabel>
                                                <RadioGroup aria-label="Lube_Oil_Changed" name="Lube_Oil_Changed"
                                                    value={DGAlliedPowerProps.Lube_Oil_Changed} onChange={handleChange('Lube_Oil_Changed')} row>
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
                                                id="Lube_Oil_Changed_Remarks"
                                                label="Lube_Oil_Changed_Remarks"
                                                name="Lube_Oil_Changed_Remarks"
                                                onChange={handleChange('Lube_Oil_Changed_Remarks')}
                                                value={DGAlliedPowerProps.Lube_Oil_Changed_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">IDU Working</FormLabel>
                                                <RadioGroup aria-label="Of_Changed" name="Of_Changed"
                                                    value={DGAlliedPowerProps.Of_Changed} onChange={handleChange('Of_Changed')} row>
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
                                                id="Of_Changed_Remarks"
                                                label="Of_Changed_Remarks"
                                                name="Of_Changed_Remarks"
                                                onChange={handleChange('Of_Changed_Remarks')}
                                                value={DGAlliedPowerProps.Of_Changed_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">FF_Changed</FormLabel>
                                                <RadioGroup aria-label="FF_Changed" name="FF_Changed"
                                                    value={DGAlliedPowerProps.FF_Changed} onChange={handleChange('FF_Changed')} row>
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
                                                id="FF_Changed_Remarks"
                                                label="FF_Changed_Remarks"
                                                name="FF_Changed_Remarks"
                                                onChange={handleChange('FF_Changed_Remarks')}
                                                value={DGAlliedPowerProps.FF_Changed_Remarks}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">AF</FormLabel>
                                                <RadioGroup aria-label="AF" name="AF"
                                                    value={DGAlliedPowerProps.AF} onChange={handleChange('AF')} row>
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                                    <FormControlLabel value="Clean Only" control={<Radio />} label="Clean Only" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="AF_Remarks"
                                                label="AF_Remarks"
                                                name="AF_Remarks"
                                                onChange={handleChange('AF_Remarks')}
                                                value={DGAlliedPowerProps.AF_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Genset_Electrical_Check</FormLabel>
                                                <RadioGroup aria-label="Genset_Electrical_Check" name="Genset_Electrical_Check"
                                                    value={DGAlliedPowerProps.Genset_Electrical_Check} onChange={handleChange('Genset_Electrical_Check')} row>
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
                                                id="Genset_Electrical_Check_Remarks"
                                                label="Genset_Electrical_Check_Remarks"
                                                name="Genset_Electrical_Check_Remarks"
                                                onChange={handleChange('Genset_Electrical_Check_Remarks')}
                                                value={DGAlliedPowerProps.Genset_Electrical_Check_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Genset_Test_Run</FormLabel>
                                                <RadioGroup aria-label="Genset_Test_Run" name="Genset_Test_Run"
                                                    value={DGAlliedPowerProps.Genset_Test_Run} onChange={handleChange('Genset_Test_Run')} row>
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
                                                id="Genset_Test_Run_Remarks"
                                                label="Genset_Test_Run_Remarks"
                                                name="Genset_Test_Run_Remarks"
                                                onChange={handleChange('Genset_Test_Run_Remarks')}
                                                value={DGAlliedPowerProps.Genset_Test_Run_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Cylinder_Temp_Check</FormLabel>
                                                <RadioGroup aria-label="Cylinder_Temp_Check" name="Cylinder_Temp_Check"
                                                    value={DGAlliedPowerProps.Cylinder_Temp_Check} onChange={handleChange('Cylinder_Temp_Check')} row>
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
                                                id="Cylinder_Temp_Check_Remarks"
                                                label="Cylinder_Temp_Check_Remarks"
                                                name="Cylinder_Temp_Check_Remarks"
                                                onChange={handleChange('Cylinder_Temp_Check_Remarks')}
                                                value={DGAlliedPowerProps.Cylinder_Temp_Check_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Exhaust_System_Inspect</FormLabel>
                                                <RadioGroup aria-label="Exhaust_System_Inspect" name="Exhaust_System_Inspect"
                                                    value={DGAlliedPowerProps.Exhaust_System_Inspect} onChange={handleChange('Exhaust_System_Inspect')} row>
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
                                                id="Exhaust_System_Inspect_Remarks"
                                                label="Exhaust_System_Inspect_Remarks"
                                                name="Exhaust_System_Inspect_Remarks"
                                                onChange={handleChange('Exhaust_System_Inspect_Remarks')}
                                                value={DGAlliedPowerProps.Exhaust_System_Inspect_Remarks}
                                            />
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Allied Power System</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                Cable_Tightness
                                                    </FormLabel>
                                                <RadioGroup aria-label="Cable_Tightness" name="Cable_Tightness"
                                                    value={DGAlliedPowerProps.Cable_Tightness} onChange={handleChange('Cable_Tightness')} row>
                                                    <FormControlLabel value="OK" control={<Radio />} label="OK" />
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
                                                id="Cable_Tightness_Remarks"
                                                label="Cable_Tightness_Remarks"
                                                name="Cable_Tightness_Remarks"
                                                onChange={handleChange('Cable_Tightness_Remarks')}
                                                value={DGAlliedPowerProps.Cable_Tightness_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Indication_Lights</FormLabel>
                                                <RadioGroup aria-label="Indication_Lights" name="Indication_Lights"
                                                    value={DGAlliedPowerProps.Indication_Lights} onChange={handleChange('Indication_Lights')} row>
                                                    <FormControlLabel value="OK" control={<Radio />} label="Ok" />
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
                                                id="Indication_Lights_Remarks"
                                                label="Indication_Lights_Remarks"
                                                name="Indication_Lights_Remarks"
                                                onChange={handleChange('Indication_Lights_Remarks')}
                                                value={DGAlliedPowerProps.Indication_Lights_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Magnetic_Contactor</FormLabel>
                                                <RadioGroup aria-label="Magnetic_Contactor" name="Magnetic_Contactor"
                                                    value={DGAlliedPowerProps.Magnetic_Contactor} onChange={handleChange('Magnetic_Contactor')} row>
                                                    <FormControlLabel value="OK" control={<Radio />} label="OK" />
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
                                                id="Magnetic_Contactor_Remarks"
                                                label="Magnetic_Contactor_Remarks"
                                                name="Magnetic_Contactor_Remarks"
                                                onChange={handleChange('Magnetic_Contactor_Remarks')}
                                                value={DGAlliedPowerProps.Magnetic_Contactor_Remarks}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">ATS_MOR_Functionality</FormLabel>
                                                <RadioGroup aria-label="ATS_MOR_Functionality" name="ATS_MOR_Functionality"
                                                    value={DGAlliedPowerProps.ATS_MOR_Functionality} onChange={handleChange('ATS_MOR_Functionality')} row>
                                                    <FormControlLabel value="OK" control={<Radio />} label="Ok" />
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
                                                id="ATS_MOR_Functionality_Remarks"
                                                label="ATS_MOR_Functionality_Remarks"
                                                name="ATS_MOR_Functionality_Remarks"
                                                onChange={handleChange('ATS_MOR_Functionality_Remarks')}
                                                value={DGAlliedPowerProps.ATS_MOR_Functionality_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">AC_Breaker_Servicing</FormLabel>
                                                <RadioGroup aria-label="AC_Breaker_Servicing" name="AC_Breaker_Servicing"
                                                    value={DGAlliedPowerProps.AC_Breaker_Servicing} onChange={handleChange('AC_Breaker_Servicing')} row>
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
                                                id="AC_Breaker_Servicing_Remarks"
                                                label="AC_Breaker_Servicing_Remarks"
                                                name="AC_Breaker_Servicing_Remarks"
                                                onChange={handleChange('AC_Breaker_Servicing_Remarks')}
                                                value={DGAlliedPowerProps.AC_Breaker_Servicing_Remarks}
                                            />
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Level II Maintenance/Checks</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                Valve_Intake_Replacement
                                                    </FormLabel>
                                                <RadioGroup aria-label="Valve_Intake_Replacement" name="Valve_Intake_Replacement"
                                                    value={DGAlliedPowerProps.Valve_Intake_Replacement} onChange={handleChange('Valve_Intake_Replacement')} row>
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
                                                id="Valve_Intake_Replacement_Remarks"
                                                label="Valve_Intake_Replacement_Remarks"
                                                name="Valve_Intake_Replacement_Remarks"
                                                onChange={handleChange('Valve_Intake_Replacement_Remarks')}
                                                value={DGAlliedPowerProps.Valve_Intake_Replacement_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Valve_Exhaust_Replacement</FormLabel>
                                                <RadioGroup aria-label="Valve_Exhaust_Replacement" name="Valve_Exhaust_Replacement"
                                                    value={DGAlliedPowerProps.Valve_Exhaust_Replacement} onChange={handleChange('Valve_Exhaust_Replacement')} row>
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
                                                id="Valve_Exhaust_Replacement_Remarks"
                                                label="Valve_Exhaust_Replacement_Remarks"
                                                name="Valve_Exhaust_Replacement_Remarks"
                                                onChange={handleChange('Valve_Exhaust_Replacement_Remarks')}
                                                value={DGAlliedPowerProps.Valve_Exhaust_Replacement_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Magnetic_Contactor</FormLabel>
                                                <RadioGroup aria-label="Magnetic_Contactor" name="Magnetic_Contactor"
                                                    value={DGAlliedPowerProps.Magnetic_Contactor} onChange={handleChange('Magnetic_Contactor')} row>
                                                    <FormControlLabel value="OK" control={<Radio />} label="OK" />
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
                                                id="Magnetic_Contactor_Remarks"
                                                label="Magnetic_Contactor_Remarks"
                                                name="Magnetic_Contactor_Remarks"
                                                onChange={handleChange('Magnetic_Contactor_Remarks')}
                                                value={DGAlliedPowerProps.Magnetic_Contactor_Remarks}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Tapper_Clearance</FormLabel>
                                                <RadioGroup aria-label="Tapper_Clearance" name="Tapper_Clearance"
                                                    value={DGAlliedPowerProps.Tapper_Clearance} onChange={handleChange('Tapper_Clearance')} row>
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
                                                id="Tapper_Clearance_Remarks"
                                                label="Tapper_Clearance_Remarks"
                                                name="Tapper_Clearance_Remarks"
                                                onChange={handleChange('Tapper_Clearance_Remarks')}
                                                value={DGAlliedPowerProps.Tapper_Clearance_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Guides_Intake_Replacement</FormLabel>
                                                <RadioGroup aria-label="Guides_Intake_Replacement" name="Guides_Intake_Replacement"
                                                    value={DGAlliedPowerProps.Guides_Intake_Replacement} onChange={handleChange('Guides_Intake_Replacement')} row>
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
                                                id="Guides_Intake_Replacement_Remarks"
                                                label="Guides_Intake_Replacement_Remarks"
                                                name="Guides_Intake_Replacement_Remarks"
                                                onChange={handleChange('Guides_Intake_Replacement_Remarks')}
                                                value={DGAlliedPowerProps.Guides_Intake_Replacement_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Piston_Ring_Replacement</FormLabel>
                                                <RadioGroup aria-label="Piston_Ring_Replacement" name="Piston_Ring_Replacement"
                                                    value={DGAlliedPowerProps.Piston_Ring_Replacement} onChange={handleChange('Piston_Ring_Replacement')} row>
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
                                                id="Piston_Ring_Replacement_Remarks"
                                                label="Piston_Ring_Replacement_Remarks"
                                                name="Piston_Ring_Replacement_Remarks"
                                                onChange={handleChange('Piston_Ring_Replacement_Remarks')}
                                                value={DGAlliedPowerProps.Piston_Ring_Replacement_Remarks}
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
DGAlliedPower.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(DGAlliedPower)



