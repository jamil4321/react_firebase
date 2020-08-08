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

class KVSwitchgearTransformerCP extends Component {
    render() {
        const { handleChange, KVSwitchgearTransformerCPProps, nextStep, classes, prevStep } = this.props;
        return (
            <div>
                <Container component="main" maxWidth="md" className="siteBG">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h4">
                            KV Switch gear Transformer
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>KV Switch gear Transformer</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Detail_Inspection</FormLabel>
                                                <RadioGroup aria-label="Detail_Inspection" name="Detail_Inspection"
                                                    value={KVSwitchgearTransformerCPProps.Detail_Inspection} onChange={handleChange('Detail_Inspection')} row>
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
                                                id="Detail_Inspection_Remarks"
                                                label="Detail_Inspection_Remarks"
                                                name="Detail_Inspection_Remarks"
                                                onChange={handleChange('Detail_Inspection_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.Detail_Inspection_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">HT_Panel_Sealed</FormLabel>
                                                <RadioGroup aria-label="HT_Panel_Sealed" name="HT_Panel_Sealed"
                                                    value={KVSwitchgearTransformerCPProps.HT_Panel_Sealed} onChange={handleChange('HT_Panel_Sealed')} row>
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
                                                id="HT_Panel_Sealed_Remarks"
                                                label="HT_Panel_Sealed_Remarks"
                                                name="HT_Panel_Sealed_Remarks"
                                                onChange={handleChange('HT_Panel_Sealed_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.HT_Panel_Sealed_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">CC_Connection</FormLabel>
                                                <RadioGroup aria-label="CC_Connection" name="CC_Connection"
                                                    value={KVSwitchgearTransformerCPProps.CC_Connection} onChange={handleChange('CC_Connection')} row>
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
                                                id="CC_Connection_Remarks"
                                                label="CC_Connection_Remarks"
                                                name="CC_Connection_Remarks"
                                                onChange={handleChange('CC_Connection_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.CC_Connection_Remarks}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Nut_Bolts_Bus_Bar</FormLabel>
                                                <RadioGroup aria-label="Nut_Bolts_Bus_Bar" name="Nut_Bolts_Bus_Bar"
                                                    value={KVSwitchgearTransformerCPProps.Nut_Bolts_Bus_Bar} onChange={handleChange('Nut_Bolts_Bus_Bar')} row>
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
                                                id="Nut_Bolts_Bus_Bar_Remarks"
                                                label="Nut_Bolts_Bus_Bar_Remarks"
                                                name="Nut_Bolts_Bus_Bar_Remarks"
                                                onChange={handleChange('Nut_Bolts_Bus_Bar_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.Nut_Bolts_Bus_Bar_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Relay_Checking</FormLabel>
                                                <RadioGroup aria-label="Relay_Checking" name="Relay_Checking"
                                                    value={KVSwitchgearTransformerCPProps.Relay_Checking} onChange={handleChange('Relay_Checking')} row>
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
                                                id="Relay_Checking_Remarks"
                                                label="Relay_Checking_Remarks"
                                                name="Relay_Checking_Remarks"
                                                onChange={handleChange('Relay_Checking_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.Relay_Checking_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">HT_Panel_Body_Grounded</FormLabel>
                                                <RadioGroup aria-label="HT_Panel_Body_Grounded" name="HT_Panel_Body_Grounded"
                                                    value={KVSwitchgearTransformerCPProps.HT_Panel_Body_Grounded} onChange={handleChange('HT_Panel_Body_Grounded')} row>
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
                                                id="HT_Panel_Body_Grounded_Remarks"
                                                label="HT_Panel_Body_Grounded_Remarks"
                                                name="HT_Panel_Body_Grounded_Remarks"
                                                onChange={handleChange('HT_Panel_Body_Grounded_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.HT_Panel_Body_Grounded_Remarks}
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
KVSwitchgearTransformerCP.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(KVSwitchgearTransformerCP)