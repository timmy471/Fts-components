import React from 'react';
import clsx from 'classnames';

interface IButton {
  label: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  rest?: String[];
}

export const Button: React.FC<IButton> = ({
  label,
  disabled,
  variant,
  size,
  fullWidth,
  loading,
  type,
  className,
  style,
  onClick,
  ...rest
}) => {
  const baseClass = 'fa_btn';

  const fullContainerWidth = fullWidth ? 'full-width' : '';

  const btnDisabled = disabled ? '--btn-disabled' : '';

  const btnLoading = loading ? '--btn-loading' : '';

  const buttonClasses = clsx(
    className,
    `${baseClass}`,
    `${baseClass}__${size}`,
    `${baseClass}__${variant}${btnDisabled}${btnLoading}`,
    `${baseClass}__${fullContainerWidth}`
  );

  return (
    <button
      type={loading ? 'button' : type}
      className={buttonClasses}
      disabled={disabled}
      style={style}
      {...rest}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: 'Button',
  variant: 'primary',
  size: 'sm',
  type: 'button',
  disabled: false,
};
