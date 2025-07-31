import React, { forwardRef } from 'react';
import './Checkbox.scss';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate = false, className = '', ...props }, ref) => {
    const checkboxClasses = [
      'checkboxContainer',
      props.disabled ? 'checkboxContainer--disabled' : '',
      className,
    ].join(' ');

    return (
      <label className={checkboxClasses}>
        <input
          type="checkbox"
          ref={ref}
          className={'input'}
          data-indeterminate={indeterminate}
          {...props}
        />
        <span className={'checkmark'}></span>
        {label && <span className={'label'}>{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
