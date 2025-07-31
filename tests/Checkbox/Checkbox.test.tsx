import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from '../../src/components/Checkbox/Checkbox';

describe('Checkbox Component', () => {
  it('renders checkbox without label', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('displays label when provided', () => {
    render(<Checkbox label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('shows disabled state', () => {
    render(<Checkbox label="Disabled" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('supports indeterminate state', () => {
    render(<Checkbox indeterminate />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-indeterminate', 'true');
  });
});
