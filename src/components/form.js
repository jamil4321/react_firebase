import React, { Component } from 'react';
import firebase from 'firebase';

import Genral from './Genral';
import './11KVSwitchgearTransformerCP';
import AirConditioners from './AirConditioners';
import './CivilWorks&Electrification';
import './DGAlliedPower';
import './GroundingLightningArrestor';


class Form extends Component {
    siteData = this.props.siteDATA;
    state = {
        step:1,
        Address:this.siteData.Address,
        Category: this.siteData.Category,
        DG_Count:this.siteData.DG_Count,
        DG_Serial:this.siteData.DG_Serial,
        Genset_Status:this.siteData.Genset_Status,
        KVA:this.siteData.KVA,
        Make_Model:this.siteData.Make_Model,
        Module:this.siteData.Module,
        Priority:this.siteData.Priority,
        Site_Type:this.siteData.Site_Type,
        AC_Count:this.siteData.AC_Count.length,
        AC1:this.siteData.AC_Count[0].AC1,
        Serial_Indoor_AC1:this.siteData.AC_Count[0].Serial_Indoor,
        Serial_Outdoor_AC1:this.siteData.AC_Count[0].Serial_Outdoor,
        Ton_AC1:this.siteData.AC_Count[0].Ton,
        AC2:this.siteData.AC_Count[1].AC1,
        Serial_Indoor_AC2:this.siteData.AC_Count[1].Serial_Indoor,
        Serial_Outdoor_AC2:this.siteData.AC_Count[1].Serial_Outdoor,
        Ton_AC2:this.siteData.AC_Count[1].Ton,
        AC_Test_Run:'No',
        AC_Test_Run_Remarks:"",
        IDU_Working:'No',
        IDU_Working_Remarks:"",
        ODU_Condensing_Unit_Working:'No',
        ODU_Condensing_Unit_Working_Remarks:'',
        PCB_Functioning:'No',
        PCB_Functioning_Remarks:''

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
    handleChange= input => e => {
        this.setState({
            [input]: e.target.value
        });
    };


    render() {
        const {step} = this.state;
        switch(step){
            case 1:
                return(
                    <Genral
                    GenralProps= {this.state}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    />
                );
            case 2:
                return(
                    <AirConditioners
                    AirConditionersProps= {this.state}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    />
                )
            default:
                return(
                    <h1>Hello</h1>
                );

        }
    }
}


export default Form
