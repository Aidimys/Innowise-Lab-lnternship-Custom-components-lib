import * as React from 'react';
import './Modal.scss';
export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
