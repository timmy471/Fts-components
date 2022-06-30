import { useRouter } from 'next/router';
import { CaretLeftOutlined } from '@ant-design/icons';
import { companiesData } from '@src/helpers/constants';
import { InvestorsDashboardLayout, Fund, SPV, Typography } from '@src/components';

const Company = () => {
  const { query, back } = useRouter();

  const currentCompany: any = companiesData.find((company) => company.id === query.companyId);

  const isSPVCompany = currentCompany?.investmentType === 'spv';

  return (
    <InvestorsDashboardLayout classN='portfolio' contentClassName='company-layout'>
      <div className='company'>
        <Typography component='h4' className='beadcrumb'>
          Company / Fund Details
        </Typography>
        <div className='cursor-pointer back-cta' onClick={() => back()}>
          <CaretLeftOutlined />{' '}
          <Typography variant='body6' className='font-inline'>
            Back
          </Typography>
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
