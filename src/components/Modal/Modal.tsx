import * as React from 'react';
import { useEffect } from 'react';
import './Modal.scss';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  className = '',
  fullWidth = false,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const modalClasses = ['modal', className].join(' ');
  const contentClasses = [
    'content',
    fullWidth ? 'content--fullWidth' : '',
    className,
  ].join(' ');

  return (
    <div className={modalClasses}>
      <div className="backdrop" onClick={onClose} />
      <div
        className={contentClasses}
        role="dialog"
        aria-modal="true"
        aria-label="Modal"
      >
        <button
          className="closeButton"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
