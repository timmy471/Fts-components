import { Input } from 'antd';
import clsx from 'classnames';
import { ITextArea } from 'types';

export const TextAreaField: React.FC<ITextArea> = ({
  label,
  disabled,
  className,
  style,
  maxLength,
  value,
  id,
  placeholder,
  rows = 4,
  variant = 'default',
  ...rest
}) => {
  const { TextArea } = Input;

  const baseClass = `fa-text-area__${variant}`;

  const textAreaClassName = clsx(baseClass, className);

  return (
    <TextArea
      className={textAreaClassName}
      rows={rows}
      //   value={value}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
      bordered={false}
      autoSize={false}
      {...rest}
    />
  );
};
