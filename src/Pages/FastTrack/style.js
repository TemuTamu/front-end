import styled from 'styled-components';
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const StyledInput = styled.input`
      border-bottom: 3px solid #aaa;
      font-size: 2em;
      border-top: 0px;
      border-right: 0px;
      border-left: 0px;
      border-radius: 0px;
      width: 100%;
      height: 3em;
      font-weight: 600;

      &&&:focus{
        outline: none;
      }
`

const StyledLink = styled(Link)`
  width: 100%;
`

const StyledContainer = styled(Container)`
  padding-top: 4em;
  padding-right: 2em;
  padding-left: 2em;
`


export {
  StyledInput,
  StyledContainer,
  StyledLink
};