import React from 'react'
import { Segment, Icon, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



import {  StyledContainer, StyledParagraph, StyledWifiCode } from './style';

const Stepthree = () => (
    <StyledContainer className="StepThree_Container">
     <Segment placeholder size="big">
    <Header icon>
      <Icon name='checkmark' color="green"/>
      Confirmed
    </Header>
    <StyledParagraph>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
    </StyledParagraph>
    <StyledWifiCode>9081203</StyledWifiCode>
  </Segment>
  <Link to="/">
      <Button basic color="red" content='Kembali ke halaman utama' fluid/>
  </Link>

    </StyledContainer>
)

export default Stepthree;