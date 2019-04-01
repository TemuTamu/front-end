import React from 'react';
import { Button, Modal, Grid } from 'semantic-ui-react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import { StyledInputRow } from '../style'

class CameraComponent extends React.Component {

    state = {
      photoTaken: false,
      photo: null,
      modal: false,
    }

  onTakePhoto = (dataUri) => {

    this.setState({
      photo: dataUri,
      photoTaken: !this.state.photoTaken,
    })
  }
  onCameraError = (error) => console.error('onCameraError', error);
  onCameraStart = (stream) => console.log('onCameraStart');
  onCameraStop = () => console.log('onCameraStop');

  onRetakePhoto = () => this.setState({
    photoTaken: false,
    photo: null
  })

  OpenCloseModal = () => this.setState({modal: !this.state.modal})

  renderCamera = () => {
      const { photoTaken, photo } = this.state;
      const { onRetakePhoto, OpenCloseModal } = this;
     return photoTaken ? (
      <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
        <img
        alt="imgCamera"
        src={photo}
      />
        </Grid.Column>
        <Grid.Column width={8}>
        <StyledInputRow>
            <Button onClick={() => onRetakePhoto()} basic color="red" content='Re Take photo' fluid/>
          </StyledInputRow>
        <StyledInputRow>
        <Button onClick={() => OpenCloseModal()} basic color="green" content='Done' fluid/>
        </StyledInputRow>
        </Grid.Column>
      </Grid.Row>
      </Grid>
              
      ) : (
        <Camera
        onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        onCameraError = { (error) => { this.onCameraError(error); } }
        idealResolution = {{ width: 500, height: 500}}
        idealFacingMode = {FACING_MODES.ENVIRONMENT}
        imageType = {IMAGE_TYPES.JPG}
        imageCompression = {0.97}
        isMaxResolution = {false}
        isImageMirror = {false}
        isDisplayStartCameraError = {true}
        sizeFactor = {1}
        onCameraStart = { (stream) => { this.onCameraStart(stream); } }
        onCameraStop = { () => { this.onCameraStop(); } }
      />
      )
  }
  render() {
    const { renderCamera, OpenCloseModal } = this;
    const{ modal } = this.state
    return (
      <Modal 
        trigger={ <Button onClick={() => OpenCloseModal()} basic color="black" content='Take a Photo' fluid/>} 
        centered={false}
        open={modal}
        onClose={() => OpenCloseModal()}
      >
            <Modal.Content>
                {renderCamera()}
            </Modal.Content>
        </Modal>
    
    )
  }

}

export default CameraComponent;