import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from '../../src/components/Select/Select';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

describe('Select Component', () => {
  it('renders select with options', () => {
    render(<Select options={options} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(2);
  });

  it('shows error state', () => {
    render(<Select options={options} error helperText="Error" />);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('displays label when provided', () => {
    render(<Select options={options} label="Test" />);
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
  });
});
