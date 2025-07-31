import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../../src/components/Modal/Modal';

describe('Modal Component', () => {
  it('does not render when closed', () => {
    render(
      <Modal open={false} onClose={jest.fn()}>
        Content
      </Modal>,
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(
      <Modal open={true} onClose={jest.fn()}>
        Modal Content
      </Modal>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls onClose when backdrop clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal open={true} onClose={handleClose}>
        Content
      </Modal>,
    );

    const backdrop = screen.getByRole('dialog').firstChild;
    fireEvent.click(backdrop!);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
