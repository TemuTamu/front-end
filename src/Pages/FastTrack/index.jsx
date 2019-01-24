import React from 'react'
import { Grid, Button, Card, Image, Transition, Segment, Header, Icon } from 'semantic-ui-react';
import { StyledInput, StyledContainer, StyledLink } from './style';
import Daniel from './daniel.jpeg';
import yasmin from './yasmin.png';

class FastTrack extends React.Component {

  state = {
    visible: false,
    confirm: false,
  }

  handleConfirmation = () => this.setState({ visible: !this.state.visible});

  handleSubmit = () => this.setState({ confirm: !this.state.confirm})
  
  renderConfirmButton = () => {
    const { visible } = this.state;
    const { handleConfirmation, handleSubmit } = this;
    return visible ? (
    <React.Fragment>
      <Grid.Row>
        <Button onClick={() => handleSubmit()} basic color="green" content='Benar !' fluid/>
      </Grid.Row>
      <Grid.Row>
        <Button onClick={() => handleConfirmation()} basic color="red" content='Tidak benar' fluid/>
      </Grid.Row>
    </React.Fragment> 
    ) : (
      <React.Fragment>
          <Grid.Row>
            <Button onClick={() => handleConfirmation()} basic color="black" content='Cari' fluid/>
          </Grid.Row>
          <Grid.Row>
            <StyledLink to="/">
              <Button onClick={() => handleConfirmation()} basic color="red" content='Kembali ke halaman utama' fluid/>
            </StyledLink>
        </Grid.Row>
     </React.Fragment>
    )
  }

  renderMainContent = () => {
    const { visible  } = this.state;
    return (
      <Grid.Row>
      <Transition visible={visible} animation='slide right' duration={500} unmountOnHide>
        <Grid.Column width="8">
          <Card fluid>           
            <Image src={yasmin} 
             label={{ as: 'a', color: 'blue', content: 'Employee', icon: 'user', ribbon: true }}
            />
            <Card.Content>
              <Card.Header>Yasmin</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Yasmin is a comedian living in Nashville.</Card.Description>
            </Card.Content>

          </Card>
        </Grid.Column>
      </Transition>
      <Transition visible={visible} animation='slide left' duration={500} unmountOnHide>
      <Grid.Column width="8">
          <Card fluid>           
            <Image src={Daniel} 
             label={{ as: 'a', color: 'red', content: 'visitor', icon: 'user', ribbon: true }}
            />
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Meta>PT. BIZZY TEKNO MANTUL</Card.Meta>
              <Card.Description>Daniel has an appoinment With Yasmin</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Transition>
    </Grid.Row>
    )
  }

  renderFastTrackInput = () => {
    return (
      <Grid.Row>
      <StyledInput placeholder="Masukan kode Fast Track" />
      </Grid.Row>
    )
  }

  renderPreConfirmationPage = () => {
    const { renderConfirmButton, renderMainContent, renderFastTrackInput } = this;
  
    return (
      <Grid>
        {renderFastTrackInput()}
        {renderMainContent()}
        {renderConfirmButton()}
     </Grid>
    )
  }
  renderConfirmationPage = () => {
    const { confirm } = this.state;
    return (
      <Transition.Group visible={confirm} animation="scale" duration={500} >  
        <Segment placeholder size="big">
        <Header icon>
          <Icon name='checkmark' color="green"/>
          Confirmed
        </Header>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
        </p>
        <h1>9081203</h1>
      </Segment>
        <StyledLink to="/">
            <Button basic color="black" content='Kembali ke halaman utama' fluid/>
        </StyledLink>
        </Transition.Group>
    )
  }

  render(){
    const { confirm } = this.state;
    const { renderConfirmationPage, renderPreConfirmationPage } = this;
  
    return (
      <StyledContainer>
    {confirm ? renderConfirmationPage() : renderPreConfirmationPage()}
      </StyledContainer>
     
    )
  }
} 


export default FastTrack;
