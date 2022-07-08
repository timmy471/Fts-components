import Link from 'next/link';
import type { NextPage } from 'next';
import { Row, Col, Button } from 'antd';
import { InvestorsDashboardLayout, FormStepper } from '@src/components';

interface IProps {}

const SelectedInvestment: NextPage<IProps> = () => {
  return (
    <InvestorsDashboardLayout classN='investments' subClassN='investments'>
      <div className='platform'>
        <FormStepper
          currentStep={1}
          steps={['Personal Info', 'Work Information', 'Other Details', 'Supporting Document']}
        />
        <div className='cordros-form'>
          <Col span={12} offset={6} className='m-auto'>
            <h1>
              This is a page to collect the user’s information and KYC necessary to invest with
              Cordros{' '}
            </h1>
            <p>
              After completing the process, an email would be sent to the investor of their
              acceptance into the collective
            </p>
            <Link href={'/investors/dashboard/investments/subscription'} passHref>
              <Button className='btn-continue'>Click to continue</Button>
            </Link>
          </Col>
        </div>
      </div>
    </InvestorsDashboardLayout>
  );
};

export async function getServerSideProps(context: any) {
  try {
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/?redirect=true',
      },
      props: {},
    };
  }
}

export default SelectedInvestment;
