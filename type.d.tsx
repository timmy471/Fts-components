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

export interface IOnboardingDetailFormValues {
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
  required?: boolean;
  disabled?: boolean;
  isSearchable?: boolean;
  options: { value: string; label: string }[];
  className?: string;
  hasError?: boolean | string;
  defaultValue?: string;
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

type companyFounder = {
  name: string;
  position: string;
  picture: string;
};
export interface ISPVCompanyDetail {
  id: string;
  name: string;
  logo: string;
  investmentType: string;
  category: string;
  headquater: string;
  size: string;
  valuation: string;
  yearFounded: string;
  type: string;
  website: string;
  totalInvestment: string;
  livePositions: string;
  investedValuation: string;
  currentValuation: string;
  about: string;
  founders: companyFounder[];
}

export interface IFundCompanyDetail {
  id: string;
  name: string;
  logo: string;
  investmentType: string;
  fundManager: string;
  subscription: string;
  type: string;
  links: string;
  totalSubscriptio: string;
  totalInvestment: string;
}
