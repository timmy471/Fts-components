import { Dispatch, SetStateAction } from 'react';

export interface IOnboardingDetailForm {
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

export interface IOnboarding {
  currentStep: number;
  initialValues: IOnboardingDetailForm;
  shouldValidateEvent: boolean;
  setShouldValidateEvent: Dispatch<SetStateAction<boolean>>;
  getValidationSchema: () => void;
  onDetailSubmit: (values: object) => void;
  onPinSubmit: (values: object) => void;
  validatePin: () => object;
  handlePrevious: () => void;
}
