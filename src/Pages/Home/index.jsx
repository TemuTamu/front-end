import React from 'react'
import { Header, Icon, Container, Grid, Segment, Modal, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css';
class Home extends React.Component{

  state = {
    open: false
  }

  handleOpenModal = () => this.setState({ open: !this.state.open})

  render(){
    const { handleOpenModal } = this;
    const { open } = this.state;
    return (
      <Grid>
      <Grid.Row>
      <Grid.Column>
      <Container className="MainLogoContainer">
       <Header as='h2' icon textAlign='center'>
         <Icon name='users' circular />
         <Header.Content>Temu Tamu</Header.Content>
       </Header>
     </Container>
     </Grid.Column>
     </Grid.Row>
  
     <Grid.Row centered columns={1} className="GridRowWrapper">
     <Grid>
     <Grid.Row>
       <Grid.Column width={8}>
       <Link to="/visit">
       <Segment>
       <Header icon>
         <Icon name='hand paper outline' />
           Visit
       </Header>
       </Segment>
       </Link>
       </Grid.Column>
  
       <Grid.Column width={8}>
       <Segment onClick={() => handleOpenModal()}>
       <Header icon>
         <Icon name='shipping fast' />
         Delivery
       </Header>
       </Segment>
       </Grid.Column>
     </Grid.Row>
     <Grid.Row>
       <Grid.Column width={8}>
       <Link to="/fast">
       <Segment>
       <Header icon>
           <Icon name='lightning' />
             Fast Track
         </Header>
       </Segment>
       </Link>
       </Grid.Column>
       <Grid.Column width={8}>
       <Segment>
       <Header icon>
           <Icon name='question' />
           About us
         </Header>
       </Segment>
       </Grid.Column>
     </Grid.Row>
   </Grid>
     </Grid.Row>   

      <Modal
      open={open}
      onClose={() => handleOpenModal()}
      basic
      size='big'
      >
      <Header as="h1" icon='hourglass half' content='COMING SOON' />
      <Modal.Content>
        <h2>we are currently working hard to make this feature delivered to you, please wait ! Thanks :)</h2>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={() => handleOpenModal()} inverted>
          <Icon name='checkmark' /> Got it
        </Button>
      </Modal.Actions>
      </Modal>
   </Grid>
    )
  }
} 
    


export default Home
