import React from 'react';

class Modal extends React.Component {
  closeModal(id) {
    const modal = document.getElementById(this.props.id)
    const overlay = document.querySelector('.overlay')
    modal.style.display = 'none';
    overlay.style.display = 'none';
  };
  render() {
    return (
      <div className="modal" id={this.props.id}>
        <span className="modal-close" data-close-id={this.props.id} onClick={this.closeModal.bind(this)}>&times;</span>
        <p>{this.props.text}</p>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Modal;