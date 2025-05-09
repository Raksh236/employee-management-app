import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class EmployeeRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleDeleteConfirmed = this.handleDeleteConfirmed.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({
      modalVisible: !prevState.modalVisible,
    }));
  }

  handleDeleteConfirmed() {
    this.props.onDelete(this.props.employee.id);
    this.toggleModal();
  }

  render() {
    const { employee } = this.props;

    return (
      <tr>
        <td>{employee.name}</td>
        <td>{employee.role}</td>
        <td>{employee.department}</td>
        <td>
          <Button variant="danger" onClick={this.toggleModal}>
            Delete
          </Button>

          <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete {employee.name}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.toggleModal}>
                Cancel
              </Button>
              <Button variant="danger" onClick={this.handleDeleteConfirmed}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    );
  }
}

export default EmployeeRow;
