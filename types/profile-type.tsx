export interface IProfilePasswordVisibility {
  currentPassword: boolean;
  newPassword: boolean;
  confirmPassword: boolean;
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
  industry: string | undefined;
  income: string | undefined;
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

export interface IProfileProps {
  initialValues: IProfileFormValues;
  passwordVisibility: IProfilePasswordVisibility;
  validationSchema: object;
  submitProfileInfo: (values: object) => void;
  onPasswordToggle: (key: string, value: boolean) => void;
}
