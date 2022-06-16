import type { NextPage } from 'next';
import { Col, Row } from 'antd';
import { OnboardingSidebar, Typography, FormStepper, ControlButtons } from '../src/components';

const Onboarding: NextPage = () => {
  const onBoardingSteps = [
    'Complete Profile',
    'Work Information',
    'Other Details',
    'Pin Setup',
  ];

  return (
    <div className='onboarding'>
      <Row>
        <Col xs={0} lg={7}>
          <OnboardingSidebar />
        </Col>
        <Col xs={24} lg={17}>
          <div className='onboarding-form-container'>
            <Typography component='h5'>Awesome! Let's get you onboarded</Typography>
            <FormStepper steps={onBoardingSteps} />
            <div className='control-buttons-container'>
              <ControlButtons />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Onboarding;
