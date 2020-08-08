import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        color: 'white',
        alignItems: 'center',
        textAlign: 'center'
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
        margin: theme.spacing(1, 0, 2),
        backgroundColor: '#9CB83C;',
        color: 'white',
        '&:hover': {
            backgroundColor: '#617e04',
        },
    },
});

class Genral extends Component {
    render() {
        const { handleChange, GenralProps, nextStep, classes } = this.props;
        return (


            <div>
                <Container component="main" maxWidth="lg" className="siteBG">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h2">
                            Genral
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Typography component="h4" variant="h6" style={{ margin: '20px 0px' }}>
                                General Details
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Address"
                                        label="Address"
                                        name="Address"
                                        onChange={handleChange('Address')}
                                        value={GenralProps.Address}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Priority"
                                        label="Priority"
                                        name="Priority"
                                        onChange={handleChange('Priority')}
                                        value={GenralProps.Priority}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Site_Type"
                                        label="Site_Type"
                                        name="Site_Type"
                                        onChange={handleChange('Site_Type')}
                                        value={GenralProps.Site_Type}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Category"
                                        label="Category"
                                        name="Category"
                                        onChange={handleChange('Category')}
                                        value={GenralProps.Category}
                                    />
                                </Grid>
                            </Grid>
                            <Typography component="h4" variant="h6" style={{ margin: '20px 0px' }}>
                                Genset Details
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="DG_Count"
                                        label="DG_Count"
                                        name="DG_Count"
                                        onChange={handleChange('DG_Count')}
                                        value={GenralProps.DG_Count}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Make_Model"
                                        label="Make_Model"
                                        name="Make_Model"
                                        onChange={handleChange('Make_Model')}
                                        value={GenralProps.Make_Model}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="KVA"
                                        label="KVA"
                                        name="KVA"
                                        onChange={handleChange('KVA')}
                                        value={GenralProps.KVA}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Genset_Status"
                                        label="Genset_Status"
                                        name="Genset_Status"
                                        onChange={handleChange('Genset_Status')}
                                        value={GenralProps.Genset_Status}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="DG_Serial"
                                        label="DG_Serial"
                                        name="DG_Serial"
                                        onChange={handleChange('DG_Serial')}
                                        value={GenralProps.DG_Serial}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Module"
                                        label="Module"
                                        name="Module"
                                        onChange={handleChange('Module')}
                                        value={GenralProps.Module}
                                    />
                                </Grid>
                            </Grid>

                            <Typography component="h4" variant="h6" style={{ margin: '20px 0px' }}>
                                AC Details
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="AC_Count"
                                        label="AC_Count"
                                        name="AC_Count"
                                        onChange={handleChange('AC_Count')}
                                        value={GenralProps.AC_Count}
                                    />
                                </Grid>
                            </Grid>
                            <Typography component="h4" variant="h6" style={{ margin: '20px 0px' }}>
                                AC 1 Details
                                    </Typography>
                            <Grid container spacing={3}>

                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="AC1"
                                        label="AC1"
                                        name="AC1"
                                        onChange={handleChange('AC1')}
                                        value={GenralProps.AC1}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Serial_Indoor_AC1"
                                        label="Serial_Indoor_AC1"
                                        name="Serial_Indoor_AC1"
                                        onChange={handleChange('Serial_Indoor_AC1')}
                                        value={GenralProps.Serial_Indoor_AC1}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Serial_Outdoor_AC1"
                                        label="Serial_Outdoor_AC1"
                                        name="Serial_Outdoor_AC1"
                                        onChange={handleChange('Serial_Outdoor_AC1')}
                                        value={GenralProps.Serial_Outdoor_AC1}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Ton_AC1"
                                        label="Ton_AC1"
                                        name="Ton_AC1"
                                        onChange={handleChange('Ton_AC1')}
                                        value={GenralProps.Category}
                                    />
                                </Grid>
                            </Grid>
                            <Typography component="h4" variant="h6" style={{ margin: '20px 0px' }}>
                                AC 2 Details
                                    </Typography>
                            <Grid container spacing={3}>

                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="AC2"
                                        label="AC2"
                                        name="AC2"
                                        onChange={handleChange('AC2')}
                                        value={GenralProps.AC2}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Serial_Indoor_AC2"
                                        label="Serial_Indoor_AC2"
                                        name="Serial_Indoor_AC2"
                                        onChange={handleChange('Serial_Indoor_AC2')}
                                        value={GenralProps.Serial_Indoor_AC2}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Serial_Outdoor_AC2"
                                        label="Serial_Outdoor_AC2"
                                        name="Serial_Outdoor_AC2"
                                        onChange={handleChange('Serial_Outdoor_AC2')}
                                        value={GenralProps.Serial_Outdoor_AC2}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Ton_AC2"
                                        label="Ton_AC2"
                                        name="Ton_AC2"
                                        onChange={handleChange('Ton_AC2')}
                                        value={GenralProps.Category}
                                    />
                                </Grid>
                            </Grid>
                            <Typography component="h4" variant="h6" style={{ margin: '20px 0px' }}>
                                    Last PMR Details
                                    </Typography>
                            <Grid container spacing={3}>
                                
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Last_Pmr_Date"
                                        label="Last_Pmr_Date"
                                        name="Last_Pmr_Date"
                                        onChange={handleChange('Last_Pmr_Date')}
                                        value={GenralProps.Last_Pmr_Date}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="PMR_By"
                                        label="PMR_By"
                                        name="PMR_By"
                                        onChange={handleChange('PMR_By')}
                                        value={GenralProps.PMR_By}
                                    />
                                </Grid>
                            </Grid>
                            <Typography component="h4" variant="h6" style={{ margin: '20px 0px' }}>
                            Last Fueling Details
                                    </Typography>
                            <Grid container spacing={3}>
                                
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Last_Fuel_Date"
                                        label="Last_Fuel_Date"
                                        name="Last_Fuel_Date"
                                        onChange={handleChange('Last_Fuel_Date')}
                                        value={GenralProps.Last_Fuel_Date}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Fuel_By"
                                        label="Fuel_By"
                                        name="Fuel_By"
                                        onChange={handleChange('Fuel_By')}
                                        value={GenralProps.Fuel_By}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Filled_Quantity"
                                        label="Filled_Quantity"
                                        name="Filled_Quantity"
                                        onChange={handleChange('Filled_Quantity')}
                                        value={GenralProps.Filled_Quantity}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Avail_Quanitity"
                                        label="Avail_Quanitity"
                                        name="Avail_Quanitity"
                                        onChange={handleChange('Avail_Quanitity')}
                                        value={GenralProps.Avail_Quanitity}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Curr_GHMR"
                                        label="Curr_GHMR"
                                        name="Curr_GHMR"
                                        onChange={handleChange('Curr_GHMR')}
                                        value={GenralProps.Curr_GHMR}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Prev_GHMR"
                                        label="Prev_GHMR"
                                        name="Prev_GHMR"
                                        onChange={handleChange('Prev_GHMR')}
                                        value={GenralProps.Prev_GHMR}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Visit_Type"
                                        label="Visit_Type"
                                        name="Visit_Type"
                                        onChange={handleChange('Visit_Type')}
                                        value={GenralProps.Visit_Type}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Fuel_Cap"
                                        label="Fuel_Cap"
                                        name="Fuel_Cap"
                                        onChange={handleChange('Fuel_Cap')}
                                        value={GenralProps.Fuel_Cap}
                                    />
                                </Grid>
                            </Grid>

                            <Typography component="h4" variant="h6" style={{ margin: '20px 0px' }}>
                            Last Parts Changed Details
                                    </Typography>
                            <Grid container spacing={3}>
                                
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Last_Part_Changed_Date"
                                        label="Last_Part_Changed_Date"
                                        name="Last_Part_Changed_Date"
                                        onChange={handleChange('Last_Part_Changed_Date')}
                                        value={GenralProps.Last_Part_Changed_Date}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Last_Part_Changed_By"
                                        label="Last_Part_Changed_By"
                                        name="Last_Part_Changed_By"
                                        onChange={handleChange('Last_Part_Changed_By')}
                                        value={GenralProps.Last_Part_Changed_By}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Oil_Filter"
                                        label="Oil_Filter"
                                        name="Oil_Filter"
                                        onChange={handleChange('Oil_Filter')}
                                        value={GenralProps.Oil_Filter}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Fuel_Filter"
                                        label="Fuel_Filter"
                                        name="Fuel_Filter"
                                        onChange={handleChange('Fuel_Filter')}
                                        value={GenralProps.Fuel_Filter}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="Oil"
                                        label="Oil"
                                        name="Oil"
                                        onChange={handleChange('Oil')}
                                        value={GenralProps.Oil}
                                    />
                                </Grid>
                            </Grid>


                            <Button
                                variant="contained"
                                size="large"
                                className={classes.submit}
                                onClick={nextStep}
                                style={{ margin: '20px 0px' }}
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
Genral.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Genral)
