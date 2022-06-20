import type { NextPage } from 'next';
import Link from 'next/link';

import { Button, Typography, OnboardingLayout } from '../src/components';

const OnboardingCongratulations: NextPage = () => {
  return (
    <OnboardingLayout>
      <div className='onboarding-congratulations-container '>
        <div className='text-center'>
          <Typography component='h4'>Congratulations!</Typography>
          <Typography className='mt-2 mb-4' variant='body6'>
            You have successfully completed your onboarding. You are ready to start investing
          </Typography>
          <Link href='/dashboard'>
            <Button label='Get Started' />
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingCongratulations;
