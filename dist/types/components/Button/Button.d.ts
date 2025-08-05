import React from 'react';
import './Button.scss';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'text' | 'contained' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
