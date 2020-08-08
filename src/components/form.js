import React, { Component } from 'react';
import firebase from 'firebase';
import Genral from './Genral';
import KVSwitchgearTransformerCP from './11KVSwitchgearTransformerCP';
import AirConditioners from './AirConditioners';
import CivilWorksElectrification from './CivilWorks&Electrification';
import DGAlliedPower from './DGAlliedPower';
import GroundingLightningArrestor from './GroundingLightningArrestor';


class Form extends Component {
    siteData = this.props.siteDATA;
    state = {
        step: 1,
        siteID:this.siteData.siteID,
        Address: this.siteData.Address,
        Category: this.siteData.Category,
        DG_Count: this.siteData.DG_Count,
        DG_Serial: this.siteData.DG_Serial,
        Genset_Status: this.siteData.Genset_Status,
        KVA: this.siteData.KVA,
        Make_Model: this.siteData.Make_Model,
        Module: this.siteData.Module,
        Priority: this.siteData.Priority,
        Site_Type: this.siteData.Site_Type,
        AC_Count: this.siteData.AC_Count.length,
        AC1: this.siteData.AC_Count[0].AC1,
        Serial_Indoor_AC1: this.siteData.AC_Count[0].Serial_Indoor,
        Serial_Outdoor_AC1: this.siteData.AC_Count[0].Serial_Outdoor,
        Ton_AC1: this.siteData.AC_Count[0].Ton,
        AC2: this.siteData.AC_Count[1].AC2,
        Serial_Indoor_AC2: this.siteData.AC_Count[1].Serial_Indoor,
        Serial_Outdoor_AC2: this.siteData.AC_Count[1].Serial_Outdoor,
        Ton_AC2: this.siteData.AC_Count[1].Ton,
        Last_Pmr_Date: this.siteData.Date,
        PMR_By: this.siteData.PMR_By,
        Last_Fuel_Date: this.siteData.Date,
        Fuel_By: this.siteData.PMR_By,
        Filled_Quantity: this.siteData.Filled_Quantity,
        Avail_Quanitity: this.siteData.Avail_Quanitity,
        Curr_GHMR: this.siteData.Curr_GHMR,
        Prev_GHMR: this.siteData.Prev_GHMR,
        Visit_Type: this.siteData.Visit_Type,
        Fuel_Cap: this.siteData.Fuel_Cap,
        Last_Part_Changed_Date: this.siteData.Date,
        Last_Part_Changed_By: this.siteData.PMR_By,
        Oil_Filter: this.siteData.Oil_Filter,
        Fuel_Filter: this.siteData.Fuel_Filter,
        Oil: this.siteData.Oil,
        AC_Test_Run: 'No',
        AC_Test_Run_Remarks: "",
        IDU_Working: 'None',
        IDU_Working_Remarks: "",
        ODU_Condensing_Unit_Working: 'No',
        ODU_Condensing_Unit_Working_Remarks: '',
        PCB_Functioning: 'No',
        PCB_Functioning_Remarks: '',
        Thermostat_Working: 'No',
        Thermostat_Working_Remarks: '',
        Lube_Oil_Changed: 'No',
        Lube_Oil_Changed_Remarks: '',
        Of_Changed: 'No',
        Of_Changed_Remarks: '',
        FF_Changed: 'No',
        FF_Changed_Remarks: '',
        AF: 'No',
        AF_Remarks: '',
        Genset_Electrical_Check: 'No',
        Genset_Electrical_Check_Remarks: '',
        Genset_Test_Run: 'No',
        Genset_Test_Run_Remarks: '',
        Cylinder_Temp_Check: 'No',
        Cylinder_Temp_Check_Remarks: '',
        Exhaust_System_Inspect: 'No',
        Exhaust_System_Inspect_Remarks: '',
        Cable_Tightness: 'NoK',
        Cable_Tightness_Remarks: '',
        Indication_Lights: 'NoK',
        Indication_Lights_Remarks: '',
        Magnetic_Contactor: 'NoK',
        Magnetic_Contactor_Remarks: '',
        ATS_MOR_Functionality: 'NoK',
        ATS_MOR_Functionality_Remarks: '',
        AC_Breaker_Servicing: 'No',
        AC_Breaker_Servicing_Remarks: '',
        Valve_Intake_Replacement: 'No',
        Valve_Intake_Replacement_Remarks: '',
        Valve_Exhaust_Replacement: 'No',
        Valve_Exhaust_Replacement_Remarks: '',
        Tapper_Clearance: 'No',
        Tapper_Clearance_Remarks: '',
        Guides_Intake_Replacement: 'No',
        Guides_Intake_Replacement_Remarks: '',
        Piston_Ring_Replacement: 'No',
        Piston_Ring_Replacement_Remarks: '',
        Detail_Inspection: 'No',
        Detail_Inspection_Remarks: '',
        HT_Panel_Sealed: 'No',
        HT_Panel_Sealed_Remarks: '',
        CC_Connection: 'No',
        CC_Connection_Remarks: '',
        Nut_Bolts_Bus_Bar: 'No',
        Nut_Bolts_Bus_Bar_Remarks: '',
        Relay_Checking: 'No',
        Relay_Checking_Remarks: '',
        HT_Panel_Body_Grounded: 'No',
        HT_Panel_Body_Grounded_Remarks: '',
        Transformer_Oil_Checking: 'No',
        Transformer_Oil_Checking_Remarks: '',
        GasKit_Checking: 'No',
        GasKit_Checking_Remarks: '',
        Nuts_Bolts_connection_Tightening: 'No',
        Nuts_Bolts_connection_Tightening_Remarks: '',
        Oil_Dehderation: 'No',
        Oil_Dehderation_Remarks: '',
        Cable_Connetion_Checking: 'No',
        Cable_Connetion_Checking_Remarks: '',
        D_Fuse_C_R: 'No',
        D_Fuse_C_R_Remarks: '',
        D_Fuse_Set_C_R: 'No',
        D_Fuse_Set_C_R_Remarks: '',
        HT_Cable_C_R: 'No',
        HT_Cable_C_R_Remarks: '',
        Lt_Cable_C_R: 'No',
        Lt_Cable_C_R_Remarks: '',
        Lt_Cable_Joint_C_R: 'No',
        Lt_Cable_Joint_C_R_Remarks: '',
        Ht_Cable_Joint_C_R: 'No',
        Ht_Cable_Joint_C_R_Remarks: '',
        Grounding_Pit_Clean: 'No',
        Grounding_Pit_Clean_Remarks: '',
        Grounding_Pit_Treatment: 'No',
        Grounding_Pit_Treatment_Remarks: '',
        Resistenace_Value_Measurement: 'No',
        Resistenace_Value_Measurement_Remarks: '',
        Grounding_Cable_Connectivity_Check: 'No',
        Grounding_Cable_Connectivity_Check_Remarks: '',
        Cable_Termination_Check: 'No',
        Cable_Termination_Check_Remarks: '',
        Busbars_Greasing: 'No',
        Busbars_Greasing_Remarks: '',
        Site_Cleanliness: 'NoK',
        Site_Cleanliness_Remarks: '',
        Site_Locks: 'NoK',
        Site_Locks_Remarks: '',
        Cable_Routing_Conduits_Ducts: 'NoK',
        Cable_Routing_Conduits_Ducts_Remarks: '',
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
        console.log(step)
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
        console.log(step)
    };
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };
    submit=(e)=>{
        firebase.database().ref(`SiteDetails/${this.state.siteID}`).set(this.state)
        localStorage.removeItem('siteID')
        console.log(this.props.isValid)
        this.setState()
    }

    render() {
        const { step } = this.state;
        switch (step) {
            case 1:
                return (
                    <Genral
                        GenralProps={this.state}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                    />
                );
            case 2:
                return (
                    <DGAlliedPower
                        DGAlliedPowerProps={this.state}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                    />
                )

            case 3:
                return (
                    <AirConditioners
                        AirConditionersProps={this.state}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                    />
                )
            case 4:
                return (
                    <KVSwitchgearTransformerCP
                        KVSwitchgearTransformerCPProps={this.state}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                    />
                )
            case 5:
                return (
                    <GroundingLightningArrestor
                        GroundingLightningArrestorProps={this.state}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                    />
                )
            case 6:
                return (
                    <CivilWorksElectrification
                        CivilWorksElectrificationProps={this.state}
                        submit={this.submit}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                    />
                )
            default:
                return (
                    <h1>Hello</h1>
                );

        }
    }
}


export default Form
