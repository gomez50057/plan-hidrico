import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from './AgreementSuccessModal.module.css';

const AgreementSuccessModal = ({ isOpen, folio, estado, mensaje, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.styledModal}>
        <IconButton
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <h2>{estado} con éxito!</h2>
        <p>{mensaje}</p>
        <p>
          Este es tu Folio: <strong>{folio}</strong>
        </p>
        <p>Guarda este folio para mantener un seguimiento adecuado.</p>
      </div>
    </div>
  );
};

export default AgreementSuccessModal;
