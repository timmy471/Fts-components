import React from 'react';
import { Typography } from './Typography';

interface IProps {
  children?: any;
  msg?: string;
}

export const FormError: React.FC<IProps> = ({ children, msg }) => (
  <Typography className='form-error' state='error'>
    {children || msg}
  </Typography>
);
