import { useRouter } from 'next/router';
import { companiesData } from '@src/helpers/constants';
import { InvestorsDashboardLayout, Fund, SPV, Typography, BackCTA } from '@src/components';

const Company = () => {
  const { query } = useRouter();

  const currentCompany: any = companiesData.find((company) => company.id === query.companyId);

  const isSPVCompany = currentCompany?.investmentType === 'spv';

  return (
    <InvestorsDashboardLayout classN='portfolio' contentClassName='company-layout'>
      <div className='company'>
        <Typography component='h4' className='beadcrumb'>
          Company / Fund Details
        </Typography>
        <div className='back-cta'>
          <BackCTA />
        </div>
        <div className='mtop-3'>
          {isSPVCompany ? (
            <SPV companyDetail={currentCompany} />
          ) : (
            <Fund companyDetail={currentCompany} />
          )}
        </div>
      </div>
    </InvestorsDashboardLayout>
  );
};

export default Company;
