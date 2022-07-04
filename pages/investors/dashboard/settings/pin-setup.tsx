import * as Yup from 'yup';
import type { NextPage } from 'next';
import {
  InvestorsDashboardLayout,
  Typography,
  BackCTA,
  PINSetupForm,
  PINChangeForm,
} from '@src/components';

const Settings: NextPage = () => {
  const validatePinSet = () =>
    Yup.object({
      pin: Yup.string().required('Error: PIN is required'),
      confirmPin: Yup.string()
        .required('Error: Re-enter PIN')
        .oneOf([Yup.ref('pin'), null], 'Error: Entered PINs do not match'),
    });

  const validatePinChange = () =>
    Yup.object({
      oldPin: Yup.string().required('Error: Old PIN is required'),
      pin: Yup.string().required('Error: New PIN is required'),
      confirmPin: Yup.string()
        .required('Error: Re-enter New PIN')
        .oneOf([Yup.ref('pin'), null], 'Error: Entered PINs do not match'),
    });

  return (
    <InvestorsDashboardLayout classN=''>
      <div className='settings'>
        <Typography component='h4'>Settings</Typography>
        <BackCTA className='mt-2' />
        <div className='bg-white pin-setting-container mt-1'>
          <Typography variant='body5' className='mbottom-2'>
            PIN Code Setup
          </Typography>
          <Typography variant='body8' state='secondary' className='mb-0 font-inline'>
            To setup your PIN, create a
          </Typography>{' '}
          <Typography className='font-inline' state='secondary' variant='body7'>
            4 digit code
          </Typography>
          {/* Include Condition to show either if user already has pin setup */}
          {true ? (
            <PINSetupForm onPinSubmit={() => {}} validatePin={validatePinSet} />
          ) : (
            <PINChangeForm validatePin={validatePinChange} onPinSubmit={() => {}} />
          )}
        </div>
      </div>
    </InvestorsDashboardLayout>
  );
};

export default Settings;
