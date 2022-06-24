import clsx from 'classnames';
import { SearchOutlined } from '@ant-design/icons';
import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  ref?: string;
  labelClassName?: string;
  state?: 'success' | 'warning' | 'error';
  rows?: string | number;
  hasError?: boolean | string;
  endIcon?: React.ReactNode;
  searchField?: boolean;
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
  onBlur,
  endIcon,
  searchField,
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

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const addedPlaceholder = e.target?.previousElementSibling;
    addedPlaceholder?.classList.add('no-placeholder');
  };

  const handleBlur = (e: any) => {
    onBlur?.(e);
    const addedPlaceholder = e.target.previousElementSibling;

    if (!e.target.value.length) addedPlaceholder?.classList?.remove('no-placeholder');
  };

  return (
    <div className={`fa_textfield_container ${label ? 'texfield_container_default' : ''}`}>
      {!label && placeholder && (
        <div className={`placeholder ${value ? 'no-placeholder' : ''}`}>
          {!value && searchField && <SearchOutlined className={'fa-input-search-icon'} />}{' '}
          <label htmlFor={id || name}>{placeholder}</label> {required && <span>*</span>}
        </div>
      )}

      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        style={style}
        className={textFieldClasses}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id={id || name}
        autoComplete='off'
        required
        onChange={onChange}
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
