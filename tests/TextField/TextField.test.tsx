import React from 'react';
import { render, screen } from '@testing-library/react';
import TextField from '../../src/components/TextField/TextField';

describe('TextField Component', () => {
  it('renders outlined variant by default', () => {
    render(<TextField variant="outlined" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('textField--outlined');
  });

  it('shows error state', () => {
    render(<TextField error helperText="Error message" />);
    expect(screen.getByRole('textbox')).toHaveClass('textField--error');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('displays label when provided', () => {
    render(<TextField label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<TextField className="custom-class" />);
    expect(screen.getByRole('textbox').parentElement).toHaveClass(
      'custom-class',
    );
  });
});
