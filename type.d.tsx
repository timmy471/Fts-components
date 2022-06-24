export interface ILogin {
  email: string;
  password: string;
}

export interface IFormStepper {
  currentStep?: number;
  steps: string[];
}

export interface IUser {
  firstName: string;
  lastName: string;
  role: string;
  lastLogin: string;
}

export interface IDetailFormValues {
  nationality: string;
  country: string;
  city: string;
  address: string;
  zip: string;
  phoneNumber: string;
  linkedin: string;
  profession: string;
  firm: string;
  industry: string;
  income: string;
  investmentMethod: string | null;
  pastInvestment: boolean;
  syndicateMember: boolean;
  pastEvent: boolean;
  event: string;
}

export interface ISelectStates {
  nationality: boolean;
  country: boolean;
  income: boolean;
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

export interface ISelect {
  placeholder?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  isSearchable?: boolean;
  options: { value: string; label: string }[];
  hasError?: boolean | string;
  onSelect: (value: string | number) => void;
  onChange: (value: string) => void;
  onBlur: (e: React.FocusEvent<any, Element>) => void;
}


