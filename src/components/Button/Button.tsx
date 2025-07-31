import React from 'react';
import './Button.scss';
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  size = 'medium',
  children,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    className,
  ].join(' ');
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
