import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    open: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithHooks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 style={{ marginTop: 0 }}>Modal Title</h2>
        <TextField
          label="Email"
          placeholder="Enter your email"
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter password"
          fullWidth
          style={{ marginBottom: '24px' }}
        />
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}
        >
          <Button variant="text" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained">Submit</Button>
        </div>
      </Modal>
    </>
  );
};

export const Basic: Story = {
  render: () => <ModalWithHooks />,
};
