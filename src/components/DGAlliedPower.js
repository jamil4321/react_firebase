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



