import { IFundCompanyDetail } from 'type.d';

interface IProps {
  companyDetail: IFundCompanyDetail;
}

export const Fund: React.FC<IProps> = ({ companyDetail }) => {
  console.log(companyDetail);
  return <div>PortfolioFund</div>;
};
