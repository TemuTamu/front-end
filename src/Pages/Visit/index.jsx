import React from 'react';
import { Icon, Grid, Step, } from 'semantic-ui-react';
import './style.css';
import Stepone from './Stepone';
import Steptwo from './Steptwo';
import Stepthree from './Stepthree'


class Visit extends React.Component {

  state = {
    PersonInChargeProfileVisible: false,
    ConfirmationPersonInChargeVisible: true,
    NextStepVisible: false,
    step: "one",
  }

  handlePersonInChargeProfleVisible = () => this.setState({ PersonInChargeProfileVisible: !this.state.PersonInChargeProfileVisible })
  handleConfirmationPersonInChargeVisible = () => this.setState({ 
    ConfirmationPersonInChargeVisible: !this.state.ConfirmationPersonInChargeVisible,
    NextStepVisible: !this.state.NextStepVisible, 
  })
  handleNextButtonStepOne= () => this.setState({ step: 'two'});
  handleNextButtonStepTwo= () => this.setState({ step: 'three'});
  handlePrevButtonStepTwo= () => this.setState({ step: 'one'})

  renderStepGroup = () => {
    const three = [
      {
        title: 'Person In Charge',
        desc: 'Siapa yang ingin anda temui ?',
        icon: 'address card outline',
        step: "one",
      },
      {
        title: 'Self Information',
        desc: 'Masukan data diri anda',
        icon: 'smile outline',
        step: "two",
      },
      {
        title: 'Confirmation',
        desc: 'harap tunggu sebentar',
        icon: 'thumbs up outline',
        step: "three",
      },
    ]

    const { step } = this.state;
  
        return (
          <Grid.Column tablet={6}>
          <Step.Group vertical size="big" className="VisitStepGroup">

            {
              three.map(item => {
              return (
                <Step active={step === item.step} disabled={step !== item.step}>
                <Icon name={item.icon} />
                <Step.Content>
                  <Step.Title>{item.title}</Step.Title>
                  <Step.Description>{item.desc}</Step.Description>
                </Step.Content>
              </Step>
              )
            })}
          </Step.Group> 
          </Grid.Column>
        )
    
  }

  renderContentGroup = () => {
    const {
      handlePersonInChargeProfleVisible, 
      handleConfirmationPersonInChargeVisible, handleNextButtonStepOne, handleNextButtonStepTwo,
      handlePrevButtonStepTwo
    } = this;

    const {
      PersonInChargeProfileVisible, ConfirmationPersonInChargeVisible, NextStepVisible,
      step
    } = this.state

    return (
      <Grid.Column tablet={10} className="VisitRightSideContainer">
       {step === 'one' ? (
          <Stepone
          handleConfirmationPersonInChargeVisible={handleConfirmationPersonInChargeVisible}
          handlePersonInChargeProfleVisible={handlePersonInChargeProfleVisible} 
          PersonInChargeProfileVisible={PersonInChargeProfileVisible}
          ConfirmationPersonInChargeVisible={ConfirmationPersonInChargeVisible}
          NextStepVisible={NextStepVisible}
          handleNextButton={handleNextButtonStepOne}
          />
       ) : (
         null
       )}

       {step ==='two' ? (
          <Steptwo 
          handleNextButton={handleNextButtonStepTwo}
          handlePrevButton={handlePrevButtonStepTwo}
          />
       ) : ( null )}

        {step ==='three' ? (
                  <Stepthree />
              ) : ( null )}
          
      </Grid.Column>
    )
  }

  

  render(){
    const { renderStepGroup, renderContentGroup } = this;
    return(
      <Grid>
        {renderStepGroup()}
        {renderContentGroup()}
      </Grid>
    )
  }
} 


export default Visit
