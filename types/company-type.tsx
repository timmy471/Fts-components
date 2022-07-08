type companyFounder = {
  name: string;
  position: string;
  picture: string;
};
export interface ISPVCompany {
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

export interface IFundCompany {
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
