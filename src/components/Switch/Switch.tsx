import React, { forwardRef } from 'react';
import './Switch.scss';

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  label?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      checked = false,
      onChange,
      disabled = false,
      label,
      className = '',
      ...props
    },
    ref,
  ) => {
    const switchClasses = [
      'switchContainer',
      disabled ? 'switchContainer--disabled' : '',
      className,
    ].join(' ');

    return (
      <label className={switchClasses}>
        <input
          type="checkbox"
          ref={ref}
          className={'input'}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          role="switch"
          aria-checked={checked}
          {...props}
        />
        <span className={'slider'}></span>
        {label && <span className={'label'}>{label}</span>}
      </label>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;
