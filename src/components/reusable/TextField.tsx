import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import clsx from 'classnames';

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  ref?: string;
  labelClassName?: string;
  state?: 'success' | 'warning' | 'error';
  rows?: string | number;
  hasError?: boolean | string;
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
    state ? `${textFieldBaseClass}__${state}` : '',
    `${hasError ? `${textFieldBaseClass}__error` : ''}`,
    `${label ? `${textFieldBaseClass}__label_input` : ''}`,
    className
  );

  return (
    <div className={`fa_textfield_container ${label ? 'texfield_container_default' : ''}`}>
      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        style={style}
        className={textFieldClasses}
        placeholder={label ? '' : placeholder}
        id={id || name}
        autoComplete='off'
        required
        onChange={onChange}
        {...rest}
      />
      {label && (
        <label htmlFor={id || name} className={labelClasses}>
          {label} {required && <span className='font-danger'>*</span>}
        </label>
      )}

      {endIcon && (
        <div className='fa_textfield__endicon'>
          <span>{endIcon}</span>
        </div>
      )}
    </div>
  );
};
