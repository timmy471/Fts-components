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

export interface IWalletTableData {
  date: string;
  id: string;
  narration: string;
  via: string;
  paymentProvider: string;
  amount: string;
  status: string;
}

export interface ISubscriptionHistoryData {
  quater: string;
  amount: string;
  description: string;
  date: string;
  certification: string;
}

export interface IInvestmentData {
  fund: string;
  amountDeployed: string;
  amountValue: string;
  date: string;
}

export interface IProfilePasswordVisibility {
  currentPassword: boolean;
  newPassword: boolean;
  confirmPassword: boolean;
}

export interface IProfileProps {
  initialValues: IProfileFormValues;
  passwordVisibility: IProfilePasswordVisibility;
  validationSchema: () => object;
  submitProfileInfo: (values: object) => void;
  onPasswordToggle: (key: string, value: boolean) => void;
}

interface INexOfKinInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string | undefined;
  city: string;
  address: string;
}

interface IEmploymentInfo {
  linkedin: string;
  profession: string;
  firm: string;
  industry: string;
  income: string;
}

interface ISecurityValues {
  currentPassword: '';
  newPassword: '';
  confirmPassword: '';
}
export interface IProfileFormValues {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  dateOfBirth: string;
  nationality: string;
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  profileComplete: number;
  employment: IEmploymentInfo;
  security: ISecurityValues;
  nextOfKin: INexOfKinInfo;
}
