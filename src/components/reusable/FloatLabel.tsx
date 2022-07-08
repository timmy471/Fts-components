import React, { useState } from 'react';
import { IFloatLabel } from 'types';

export const FloatLabel = (props: IFloatLabel) => {
  const [focus, setFocus] = useState(false);
  const { children, label, value, className } = props;

  const labelClass =
    focus || (value && value.length !== 0) ? 'fa-label fa-label-float' : 'fa-label';

  return (
    <div
      className='fa-float-label'
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}>
      {children}
      <label className={`${labelClass} ${className}`}>{label}</label>
    </div>
  );
};
