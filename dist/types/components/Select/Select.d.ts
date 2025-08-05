import React from 'react';
import './Select.scss';
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: boolean;
    helperText?: string;
    options: {
        value: string;
        label: string;
    }[];
}
declare const Select: React.FC<SelectProps>;
export default Select;
