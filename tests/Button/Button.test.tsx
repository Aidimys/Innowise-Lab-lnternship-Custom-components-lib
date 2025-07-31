import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/Button/Button';

describe('Button Component', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies contained variant by default', () => {
    render(<Button>Contained</Button>);
    const button = screen.getByText('Contained');
    expect(button).toHaveClass('button--contained');
  });

  it('applies text variant when specified', () => {
    render(<Button variant="text">Text</Button>);
    const button = screen.getByText('Text');
    expect(button).toHaveClass('button--text');
  });

  it('applies outlined variant when specified', () => {
    render(<Button variant="outlined">Outlined</Button>);
    const button = screen.getByText('Outlined');
    expect(button).toHaveClass('button--outlined');
  });

  it('applies small size when specified', () => {
    render(<Button size="small">Small</Button>);
    const button = screen.getByText('Small');
    expect(button).toHaveClass('button--small');
  });

  it('applies medium size by default', () => {
    render(<Button>Medium</Button>);
    const button = screen.getByText('Medium');
    expect(button).toHaveClass('button--medium');
  });

  it('applies large size when specified', () => {
    render(<Button size="large">Large</Button>);
    const button = screen.getByText('Large');
    expect(button).toHaveClass('button--large');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('disabled');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByText('Custom');
    expect(button).toHaveClass('custom-class');
  });
});
