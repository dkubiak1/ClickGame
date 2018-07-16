import React from 'react'
import {Button, Modal} from 'react-bootstrap';
class ModalComp extends React.Component {   
  
    render() {
  
      return (
        <div>          
          <Modal show={this.props.view} onHide={this.props.onClick}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.message}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{this.props.text}</h4>             
  
              <hr />              
             
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onClick}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  export default ModalComp;