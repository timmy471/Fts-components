import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Button, Typography, OnboardingLayout } from '../src/components';

const OnboardingCongratulations: NextPage = () => {
  const router = useRouter();

  return (
    <OnboardingLayout>
      <div className='onboarding-congratulations-container '>
        <div className='text-center'>
          <Typography component='h4'>Congratulations!</Typography>
          <Typography className='mt-2 mb-4' variant='body6'>
            You have successfully completed your onboarding. You are ready to start investing
          </Typography>
          <Button label='Get Started' onClick={() => router.push('/dashboard')} />
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingCongratulations;
