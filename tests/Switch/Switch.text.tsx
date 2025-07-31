import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from '../../src/components/Switch/Switch';

describe('Switch Component', () => {
  it('renders switch without label', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('displays label when provided', () => {
    render(<Switch label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('toggles state when clicked', () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);
    const switchElement = screen.getByRole('switch');

    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('shows disabled state', () => {
    render(<Switch disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });
});
