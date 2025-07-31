import React from 'react';
import { render, screen } from '@testing-library/react';
import TextField from '../../src/components/TextField/TextField';

describe('TextField Component', () => {
  it('renders with outlined variant by default', () => {
    render(<TextField />);
    const input = screen.getByRole('textbox');
    const wrapper = input.closest('.textField');
    expect(wrapper).toHaveClass('textField--outlined');
  });

  it('shows error state', () => {
    render(<TextField error helperText="Error message" />);
    const input = screen.getByRole('textbox');
    const wrapper = input.closest('.textField');
    expect(wrapper).toHaveClass('textField--error');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('displays label when provided', () => {
    render(<TextField label="Test Label" />);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label.tagName.toLowerCase()).toBe('label');
  });

  it('applies custom className to wrapper', () => {
    render(<TextField className="custom-class" />);
    const input = screen.getByRole('textbox');
    const wrapper = input.closest('.textField');
    expect(wrapper).toHaveClass('custom-class');
  });
});
