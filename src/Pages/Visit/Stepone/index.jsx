import React from 'react';
import { Image, Grid, Button, Card, Transition } from 'semantic-ui-react';
import InputAutoSuggestion from '../../../Modules/InputAutoSuggestion';
import { StyledLink, StyledGrid } from './style';


class Stepone extends React.Component {

  renderPersonInChargeProfile = () => {
    const { 
            PersonInChargeProfileVisible, 
            ConfirmationPersonInChargeVisible,
            handleConfirmationPersonInChargeVisible, 
            handlePersonInChargeProfleVisible 
          } = this.props;
    return (
      <Transition visible={ PersonInChargeProfileVisible } animation='scale' duration={500}>
      <Grid.Row className="VisitPersonProfile">
      <Grid.Column textAlign="center">
      <Card fluid>
              <Card.Content>
                <Image floated='right' size='small' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                  Molly wants to add you to the group <strong>musicians</strong>
                </Card.Description>
              </Card.Content>
        <Transition visible={ConfirmationPersonInChargeVisible} animation='scale' duration={500}>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button onClick={() => handleConfirmationPersonInChargeVisible()} basic color='green'>
                Benar 
              </Button>
              <Button onClick={() => handlePersonInChargeProfleVisible()} basic color='red'>
                Tidak benar
              </Button>
            </div>
          </Card.Content>
        </Transition>
        </Card>
      </Grid.Column>
    </Grid.Row>
    </Transition>
    )
  }

  renderNextButton = () => {
    const { NextStepVisible, handleNextButton } = this.props;
    return (
      <Transition visible={NextStepVisible} animation='scale' duration={500} unmountOnHide>
          <Grid.Row className="VisitNextButton">
          <Grid.Column >
          <Button onClick={() => handleNextButton()} basic color="black" content='Selanjutnya' fluid/>
          </Grid.Column>
          </Grid.Row>
      </Transition>
    )
  }

  renderInputAutoSuggestion = () => {
    const { handlePersonInChargeProfleVisible } = this.props;
    return (
      <StyledGrid>
        <InputAutoSuggestion handlePersonInChargeProfleVisible={handlePersonInChargeProfleVisible}/>
      </StyledGrid>
    )
  }

  renderbacktoHome = () => {
    return (
      <StyledGrid>
        <StyledLink to="/">
          <Button basic color="red" content='Kembali ke halaman utama' fluid/>
        </StyledLink>
      </StyledGrid>
    )
  }


  render(){
    const { renderNextButton, renderPersonInChargeProfile, renderInputAutoSuggestion, renderbacktoHome  } = this;
    
    return (
      <div>
          {renderInputAutoSuggestion()}
          {renderPersonInChargeProfile()}
          {renderNextButton()}
          {renderbacktoHome()}
      </div>
    )
  }
};


export default Stepone;