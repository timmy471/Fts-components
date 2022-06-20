export interface ILogin {
  email: string;
  password: string;
}

export interface IFormStepper {
  currentStep?: number;
  steps: string[];
}
