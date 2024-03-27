import React, { useState } from 'react';
import Modal from 'react-modal';
import TermsOfUse from '../rules/terms-of-use';
import PrivacyPolicy from '../rules/privacy-policy';

Modal.setAppElement('#root'); // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Added state to control which content is shown in the modal
  const [contentToShow, setContentToShow] = useState('');

  const openModal = (content: any) => {
    setContentToShow(content);
    setModalIsOpen(true);
  };

  return (
    <div>
      <span className="text-sm">
        Concordo com
        <button className="link" onClick={() => openModal('terms')}>
          Termos de Uso
        </button>
        e
        <button className="link" onClick={() => openModal('privacy')}>
          Política de Privacidade
        </button>
      </span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxHeight: '90vh',
            overflow: 'scroll',
          },
        }}
      >
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
        {contentToShow === 'terms' && <TermsOfUse />}
        {contentToShow === 'privacy' && <PrivacyPolicy />}
      </Modal>
    </div>
  );
};

export default ModalComponent;