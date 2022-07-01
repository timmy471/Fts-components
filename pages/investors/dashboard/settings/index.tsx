import Link from 'next/link';
import type { NextPage } from 'next';
import { InvestorsDashboardLayout, Typography, Button } from '@src/components';

const Settings: NextPage = () => {
  return (
    <InvestorsDashboardLayout classN=''>
      <div className='settings'>
        <Typography component='h4'>Settings</Typography>
        <div className='setting-container bg-white'>
          <div className='pin-setting'>
            <div className='d-flex justify-content-between align-items-end '>
              <div>
                <Typography variant='body7' className='mbottom-2'>
                  PIN Setup
                </Typography>
                <Typography variant='body8' state='secondary' className='mb-0'>
                  Setup your PIN for all your transactions
                </Typography>
              </div>
              <div>
                <Link href='/investors/dashboard/settings/pin-setup'>
                  <Button label='Setup PIN' />
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-2 two-factor'>
            <div className='d-flex justify-content-between align-items-end'>
              <div>
                <Typography variant='body7' className='mbottom-2'>
                  Two Factor Authentication
                </Typography>
                <Typography variant='body8' state='secondary' className='mb-0'>
                  Require a security key or code in addition to you password
                </Typography>
              </div>
              <div>
                <Button label='Setup Authentication' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </InvestorsDashboardLayout>
  );
};

export default Settings;
