import { useState } from 'react';
import type { NextPage } from 'next';
import { Col, Row } from 'antd';
import { OnboardingSidebar, Typography, FormStepper, OnboardingForm } from '../src/components';

const Onboarding: NextPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const onBoardingSteps = [
    'Complete Profile',
    'Work Information',
    'Other Details',
    'PIN Setup',
  ];

  return (
    <div className='onboarding'>
      <Row>
        <Col xs={0} lg={7}>
          <OnboardingSidebar />
        </Col>
        <Col xs={24} lg={17}>
          <Col xs={24} lg={0}>
            <OnboardingSidebar />
          </Col>
          <div className='onboarding-form-container'>
            <Col xs={0} lg={24}>
              <Typography component='h5'>Awesome! Let's get you onboarded</Typography>
            </Col>

            <FormStepper steps={onBoardingSteps} currentStep={currentStep} />
            <div>
              <div className='onboarding-form-main'>
                <Typography component='h6'>{onBoardingSteps[currentStep - 1]}</Typography>
                <Typography variant='body8' state='secondary' className='subtitle'>
                  {currentStep === 4 ? (
                    <span>
                      To setup your PIN, create a{' '}
                      <span className='font-weight-bold'>5 digit code</span>. Your PIN will be
                      used to authenticate transactions on your account
                    </span>
                  ) : (
                    'Kindly help us with few more of your details for our record.'
                  )}
                </Typography>
              </div>
              <OnboardingForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Onboarding;
