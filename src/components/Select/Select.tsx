import React, { useState } from 'react';
import './Select.scss';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({
  label,
  error = false,
  helperText,
  options,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const selectClasses = [
    'selectContainer',
    error ? 'selectContainer--error' : '',
    isFocused ? 'selectContainer--focused' : '',
    className,
  ].join(' ');

  return (
    <div className={selectClasses}>
      {label && <label className={'label'}>{label}</label>}
      <div className={'selectWrapper'}>
        <select
          className={'select'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={'arrow'}>▼</span>
      </div>
      {helperText && <p className={'helperText'}>{helperText}</p>}
    </div>
  );
};

export default Select;
