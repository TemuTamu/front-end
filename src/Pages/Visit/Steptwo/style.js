import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';


const StyledInputContainer = styled.div`
      padding-top: 2em;
`
const StyledInputRow = styled.div`
      margin-bottom: 2em;
`
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
const StyledDropDown = styled(Dropdown)`

    &&&{
        border-bottom: 3px solid #aaa;
        font-size: 2em;
        border-top: 0px;
        border-right: 0px;
        border-left: 0px;
        border-radius: 0px;
        width: 100%;
        height: 3em;
        font-weight: 600;
        padding: .78571429em 2.1em .78571429em 0em;
    }
    .ui.selection.active.dropdown{
      box-shadow: none;
    }
    .ui.dropdown .menu{
      top: 110%
    }
      
`

export {
  StyledInput,
  StyledInputRow,
  StyledInputContainer,
  StyledDropDown
};