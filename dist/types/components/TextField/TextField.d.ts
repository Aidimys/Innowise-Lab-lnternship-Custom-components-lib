import React from 'react';
import './TextField.scss';
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    variant?: 'outlined';
    label?: string;
    helperText?: string;
    fullWidth?: boolean;
}
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
