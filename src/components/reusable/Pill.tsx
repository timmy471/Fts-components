import { Typography } from '@src/components';
import { useState } from 'react';

interface IProps {
  value?: boolean;
  trueText?: string;
  falseText?: string;
  label?: string;
  selected?: boolean;
  onClick: () => void;
}
export const Pill: React.FC<IProps> = ({
  value,
  trueText = 'Yes',
  falseText = 'No',
  label,
  selected,
  onClick,
}) => {
  const [itemValue, setItemValue] = useState<boolean | undefined>(value);
  const handleClick = () => {
    setItemValue(!itemValue);
    onClick?.();
  };

  return label ? (
    <div
      className={`fa_filter_pill cursor-pointer ${
        selected ? 'fa_filter_pill__selected' : ''
      }`}>
      <Typography>{label}</Typography>
    </div>
  ) : (
    <div className='fa_pill cursor-pointer' onClick={handleClick}>
      <div className={itemValue === true ? 'selected' : ''}>{trueText}</div>
      <div className={!itemValue ? 'selected' : ''}> {falseText}</div>
    </div>
  );
};
