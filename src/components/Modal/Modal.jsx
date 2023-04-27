import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Styled } from './StyledModal';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  keyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  handleClose = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <Styled.Wrapper onClick={this.handleClose}>
        <Styled.ModalSize>{this.props.children}</Styled.ModalSize>
      </Styled.Wrapper>,
      modalRoot
    );
  }
}
