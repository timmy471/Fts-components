import { useState } from 'react';

interface IProps {
  value: boolean;
  trueText?: string;
  falseText?: string;
  onClick?: () => void;
}

export const Pill: React.FC<IProps> = ({
  value,
  trueText = 'Yes',
  falseText = 'No',
  onClick,
}) => {
  const [itemValue, setItemValue] = useState<boolean>(value);

  const handleClick = () => {
    setItemValue(!itemValue);

    onClick?.();
  };

  return (
    <div className='fa_pill cursor-pointer' onClick={handleClick}>
      <div className={itemValue === true ? 'selected' : ''}>{trueText}</div>
      <div className={!itemValue ? 'selected' : ''}> {falseText}</div>
    </div>
  );
};
