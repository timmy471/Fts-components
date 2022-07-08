import { InputHTMLAttributes } from 'react';

export interface ITextfield extends InputHTMLAttributes<HTMLInputElement> {
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

export interface IFormStepper {
  currentStep?: number;
  steps: string[];
}

export interface ISelectFieldOptions {
  value: string;
  label: string;
}

export interface IButton {
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

export interface ISelectField {
  placeholder?: React.ReactNode;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  isSearchable?: boolean;
  options: { value: string; label: string }[];
  className?: string;
  hasError?: boolean | string;
  defaultValue?: string;
  style?: object;
  onSelect?: (value: string | number) => void;
  onChange: (value: string) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
}

export interface ITextArea {
  label?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  maxLength?: number;
  value: string;
  id?: string;
  placeholder?: string;
  variant?: string;
  rows?: number;
}

export interface IBackCTA {
  className?: string;
}

export interface IFloatLabel {
  children: JSX.Element[] | JSX.Element;
  label: string;
  value: string | [];
  className?: string;
}

export interface IFormError {
  children?: any;
  msg?: string;
}

export interface IDrawer {
  visible: boolean;
  height?: string | number;
  children: JSX.Element[] | JSX.Element;
  handleClose: () => void;
}

export interface IPill {
  value?: boolean;
  trueText?: string;
  falseText?: string;
  label?: string;
  selected?: boolean;
  className?: string;
  isTag?: boolean;
  onClick?: () => void;
}

type elements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

type bodyVariants =
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6'
  | 'body7'
  | 'body8'
  | 'body9'
  | 'body10';

type typographyStates = 'default' | 'primary' | 'secondary' | 'tetiary' | 'error';

export interface ITypography {
  component?: elements;
  variant?: bodyVariants;
  style?: React.CSSProperties;
  className?: string;
  state?: typographyStates;
  children: React.ReactNode;
  props?: String[];
}
