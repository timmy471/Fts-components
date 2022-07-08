export interface IWallet {
  validationSchema: () => object;
  onWalletFundSubmit: (values: object) => void;
}

export interface IWalletTable {
  date: string;
  id: string;
  narration: string;
  via: string;
  paymentProvider: string;
  amount: string;
  status: string;
}
