import React from 'react';
import './TextField.scss';

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variant?: 'outlined';
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  error = false,
  variant = 'outlined',
  label,
  helperText,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const textFieldClasses = [
    'textField',
    `textField--${variant}`,
    error ? 'textField--error' : '',
    fullWidth ? 'textField--fullWidth' : '',
    className,
  ].join(' ');

  return (
    <div className={textFieldClasses}>
      {label && <label className="textField__label">{label}</label>}
      <input className="textField__input" {...props} />
      {helperText && <p className="textField__helperText">{helperText}</p>}
    </div>
  );
};

export default TextField;
