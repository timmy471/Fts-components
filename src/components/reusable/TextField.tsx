import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import clsx from 'classnames';

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  ref?: string;
  labelClassName?: string;
  state?: 'success' | 'warning' | 'error';
  rows?: string | number;
  hasError?: Boolean;
  endIcon?: React.ReactNode;
}

export const TextField: ForwardRefRenderFunction<HTMLInputElement, TextfieldProps> = ({
  type = 'text',
  name,
  id,
  label,
  placeholder,
  value,
  labelClassName,
  state,
  className,
  style,
  disabled,
  hasError,
  required = true,
  onChange,
  endIcon,
  ...rest
}) => {
  const textFieldBaseClass = 'fa_textfield';

  const labelBaseClass = 'fa_textfield__label';
  const labelClasses = clsx(labelBaseClass, labelClassName);

  const textFieldClasses = clsx(
    textFieldBaseClass,
    `${textFieldBaseClass}__${state}`,
    `${hasError ? `${textFieldBaseClass}__error` : ''}`,
    className
  );

  return (
    <div className='fa_textfield_container'>
      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        style={style}
        className={textFieldClasses}
        id={id || name}
        autoComplete='off'
        required
        onChange={onChange}
        {...rest}
      />
      <label htmlFor={id || name} className={labelClasses}>
        {label} {required && <span className='font-danger'>*</span>}
      </label>
      {endIcon && (
        <div className='fa_textfield__endicon'>
          <span>{endIcon}</span>
        </div>
      )}
    </div>
  );
};
