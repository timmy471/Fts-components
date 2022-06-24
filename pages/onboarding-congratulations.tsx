import Link from 'next/link';
import type { NextPage } from 'next';
import { Button, Typography, OnboardingLayout } from '@src/components';

interface Props {}
const OnboardingCongratulations: NextPage<Props> = () => {
  return (
    <OnboardingLayout>
      <div className='onboarding-congratulations-container '>
        <div className='text-center'>
          <Typography component='h4'>Congratulations!</Typography>
          <Typography className='mt-2 mb-4' variant='body6'>
            You have successfully completed your onboarding. You are ready to start investing
          </Typography>
          <Link href='/investors/dashboard/investments'>
            <Button label='Get Started' />
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingCongratulations;
