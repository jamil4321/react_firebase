import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
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
                                                <FormLabel component="legend">Detail_Inspection
                                                <Tooltip title=" Detail Inspection & Checking of 11KV switchgear of different make i.e. Siemens, Alstom, Areva, Medinsha etc. installed at MSC/MGW locations will be done bi-annually." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
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
                                                <FormLabel component="legend">HT_Panel_Sealed
                                                <Tooltip title="Make Sure HT Panel Should be properly Sealed." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
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
                                                <FormLabel component="legend">CC_Connection
                                                <Tooltip title="Cleaning & checking of connection." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
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
                                                <FormLabel component="legend">Nut_Bolts_Bus_Bar
                                                <Tooltip title="Checking of Nuts / Bolts & Bus bar Tightening. " enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
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
                                                <FormLabel component="legend">Relay_Checking
                                                <Tooltip title="Checking of Relays" enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
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
                                                <FormLabel component="legend">HT_Panel_Body_Grounded
                                                <Tooltip title="HT panel Should be Body Grounded" enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
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
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Transformer
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                    Transformer_Oil_Checking
                                                    <Tooltip title="Checking of Transformer Oil." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip>
                                                </FormLabel>
                                                <RadioGroup aria-label="Transformer_Oil_Checking" name="Transformer_Oil_Checking"
                                                    value={KVSwitchgearTransformerCPProps.Transformer_Oil_Checking} onChange={handleChange('Transformer_Oil_Checking')} row>
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
                                                id="D_Fuse_C_R_Remarks"
                                                label="D_Fuse_C_R_Remarks"
                                                name="D_Fuse_C_R_Remarks"
                                                onChange={handleChange('Transformer_Oil_Checking_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.Transformer_Oil_Checking_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">GasKit_Checking
                                                <Tooltip title="Checking of Transformer Gas Kit." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
                                                <RadioGroup aria-label="GasKit_Checking" name="GasKit_Checking"
                                                    value={KVSwitchgearTransformerCPProps.GasKit_Checking} onChange={handleChange('GasKit_Checking')} row>
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
                                                id="GasKit_Checking_Remarks"
                                                label="GasKit_Checking_Remarks"
                                                name="GasKit_Checking_Remarks"
                                                onChange={handleChange('GasKit_Checking_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.D_Fuse_Set_C_R_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Nuts_Bolts_connection_Tightening
                                                <Tooltip title="Checking of Transformer Nuts / Bolts & connection tightening." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
                                                <RadioGroup aria-label="Nuts_Bolts_connection_Tightening" name="Nuts_Bolts_connection_Tightening"
                                                    value={KVSwitchgearTransformerCPProps.Nuts_Bolts_connection_Tightening} onChange={handleChange('Nuts_Bolts_connection_Tightening')} row>
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
                                                id="Nuts_Bolts_connection_Tightening_Remarks"
                                                label="Nuts_Bolts_connection_Tightening_Remarks"
                                                name="Nuts_Bolts_connection_Tightening_Remarks"
                                                onChange={handleChange('Nuts_Bolts_connection_Tightening_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.Nuts_Bolts_connection_Tightening_Remarks}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Oil_Dehderation
                                                <Tooltip title="Transformer oil Dehyderation" enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
                                                <RadioGroup aria-label="Lt_Cable_C_R" name="Lt_Cable_C_R"
                                                    value={KVSwitchgearTransformerCPProps.Oil_Dehderation} onChange={handleChange('Oil_Dehderation')} row>
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
                                                id="Oil_Dehderation_Remarks"
                                                label="Oil_Dehderation_Remarks"
                                                name="Oil_Dehderation_Remarks"
                                                onChange={handleChange('Oil_Dehderation_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.Oil_Dehderation_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Cable_Connetion_Checking
                                                <Tooltip title="Cleaning and checking of Cable connection." enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
                                                <RadioGroup aria-label="Cable_Connetion_Checking" name="Cable_Connetion_Checking"
                                                    value={KVSwitchgearTransformerCPProps.Cable_Connetion_Checking} onChange={handleChange('Cable_Connetion_Checking')} row>
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
                                                id="Cable_Connetion_Checking_Remarks"
                                                label="Cable_Connetion_Checking_Remarks"
                                                name="Cable_Connetion_Checking_Remarks"
                                                onChange={handleChange('Cable_Connetion_Checking_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.Cable_Connetion_Checking_Remarks}
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
                                    <Typography className={classes.heading}>Comnercial Power Repair
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">
                                                    D_Fuse_C_R
                                                    <Tooltip title="Checking & Replacement of D-fuse " enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip>
                                                </FormLabel>
                                                <RadioGroup aria-label="D_Fuse_C_R" name="D_Fuse_C_R"
                                                    value={KVSwitchgearTransformerCPProps.D_Fuse_C_R} onChange={handleChange('D_Fuse_C_R')} row>
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
                                                id="D_Fuse_C_R_Remarks"
                                                label="D_Fuse_C_R_Remarks"
                                                name="D_Fuse_C_R_Remarks"
                                                onChange={handleChange('D_Fuse_C_R_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.D_Fuse_C_R_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">D_Fuse_Set_C_R
                                                <Tooltip title="Checking & Replacement of D-Fuse set" enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
                                                <RadioGroup aria-label="D_Fuse_Set_C_R" name="D_Fuse_Set_C_R"
                                                    value={KVSwitchgearTransformerCPProps.D_Fuse_Set_C_R} onChange={handleChange('D_Fuse_Set_C_R')} row>
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
                                                id="D_Fuse_Set_C_R_Remarks"
                                                label="D_Fuse_Set_C_R_Remarks"
                                                name="D_Fuse_Set_C_R_Remarks"
                                                onChange={handleChange('D_Fuse_Set_C_R_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.D_Fuse_Set_C_R_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">HT_Cable_C_R
                                                <Tooltip title="Checking & Repairing  of HT cable " enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
                                                <RadioGroup aria-label="HT_Cable_C_R" name="HT_Cable_C_R"
                                                    value={KVSwitchgearTransformerCPProps.HT_Cable_C_R} onChange={handleChange('HT_Cable_C_R')} row>
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
                                                id="HT_Cable_C_R_Remarks"
                                                label="HT_Cable_C_R_Remarks"
                                                name="HT_Cable_C_R_Remarks"
                                                onChange={handleChange('HT_Cable_C_R_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.HT_Cable_C_R_Remarks}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Lt_Cable_C_R
                                                <Tooltip title="Checking & Repairing of LT cable " enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
                                                <RadioGroup aria-label="Lt_Cable_C_R" name="Lt_Cable_C_R"
                                                    value={KVSwitchgearTransformerCPProps.Lt_Cable_C_R} onChange={handleChange('Lt_Cable_C_R')} row>
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
                                                id="Lt_Cable_C_R_Remarks"
                                                label="Lt_Cable_C_R_Remarks"
                                                name="Lt_Cable_C_R_Remarks"
                                                onChange={handleChange('Lt_Cable_C_R_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.Lt_Cable_C_R_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Lt_Cable_Joint_C_R
                                                <Tooltip title="Checking & Replacement of  LT cable joint " enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
                                                <RadioGroup aria-label="Lt_Cable_Joint_C_R" name="Lt_Cable_Joint_C_R"
                                                    value={KVSwitchgearTransformerCPProps.Lt_Cable_Joint_C_R} onChange={handleChange('Lt_Cable_Joint_C_R')} row>
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
                                                id="Lt_Cable_Joint_C_R_Remarks"
                                                label="Lt_Cable_Joint_C_R_Remarks"
                                                name="Lt_Cable_Joint_C_R_Remarks"
                                                onChange={handleChange('Lt_Cable_Joint_C_R_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.Lt_Cable_Joint_C_R_Remarks}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Ht_Cable_Joint_C_R
                                                <Tooltip title="Checking & Replacement of HT cable joint " enterTouchDelay="50" aria-label="add">

                                                        <LiveHelpIcon style={{ fontSize: 20 }} />

                                                    </Tooltip></FormLabel>
                                                <RadioGroup aria-label="Ht_Cable_Joint_C_R" name="Ht_Cable_Joint_C_R"
                                                    value={KVSwitchgearTransformerCPProps.Ht_Cable_Joint_C_R} onChange={handleChange('Ht_Cable_Joint_C_R')} row>
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
                                                id="Ht_Cable_Joint_C_R_Remarks"
                                                label="Ht_Cable_Joint_C_R_Remarks"
                                                name="Ht_Cable_Joint_C_R_Remarks"
                                                onChange={handleChange('Ht_Cable_Joint_C_R_Remarks')}
                                                value={KVSwitchgearTransformerCPProps.Ht_Cable_Joint_C_R_Remarks}
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