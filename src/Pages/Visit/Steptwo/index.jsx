import React from 'react';
import { Button } from 'semantic-ui-react';
import { StyledInput, StyledInputContainer, StyledInputRow, StyledDropDown } from './style';

class Steptwo extends React.Component {

  state = {
    firstName:'',
    options: [
      { key: 1, text: 'Interview', value: 1 },
      { key: 2, text: 'Meeting ', value: 2 },
      { key: 3, text: 'Others', value: 3 },
    ]
  }



  render(){
    const { handleNextButton, handlePrevButton } = this.props;
    const { options } = this.state;

    return (
      <StyledInputContainer>
          <StyledInputRow >
          <StyledInput placeholder='Nama' />
          </StyledInputRow>   
          <StyledInputRow>
          <StyledInput placeholder='No Telp' />
          </StyledInputRow>
            <StyledInputRow>
            <StyledInput placeholder='Perusahaan' />
          </StyledInputRow>
          <StyledInputRow>
            <StyledInput placeholder='Email' />
          </StyledInputRow>
          <StyledInputRow>
            <StyledDropDown 
              clearable 
              placeholder="Tujuan kedatangan"
              options={options} 
              selection 
              />
          </StyledInputRow>
          <StyledInputRow>
          <Button onClick={() => handleNextButton()} basic color="black" content='Selanjutnya' fluid/>
          </StyledInputRow>
          <StyledInputRow>
          <Button onClick={() => handlePrevButton()} basic color='red' content='Kembali ke Tahap Sebelumnya' fluid/>
          </StyledInputRow>
        </StyledInputContainer>
    )
  }
};


export default Steptwo;




