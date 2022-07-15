import React, { useEffect } from 'react';

const Modal = ({closeModal, modalContent}) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  }, []);
  
  return <div className='modal'>{modalContent}</div>;
};

export default Modal;
