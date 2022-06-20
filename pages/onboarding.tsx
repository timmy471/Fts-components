import { Col, Row } from 'antd';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';

import { OnboardingSidebar, Typography, FormStepper, OnboardingForm } from '../src/components';

interface IDetailFormValues {
  nationality: string;
  country: string;
  city: string;
  address: string;
  zip: string;
  phoneNumber: string;
  linkedin: string;
  profession: string;
  firm: string;
  industry: string;
  income: string;
  investmentMethod: string | null;
  pastInvestment: boolean;
  syndicateMember: boolean;
  pastEvent: boolean;
  event: string;
}

const Onboarding: NextPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [mounted, setMounted] = useState<boolean>(false);
  const [shouldValidateEvent, setShouldValidateEvent] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  const validateProfileInfo = () =>
    Yup.object().shape({
      nationality: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      country: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      city: defaultValidation('City'),
      address: defaultValidation('Address'),
      zip: defaultValidation('Zip/Postal Code'),
      phoneNumber: defaultValidation('Phone Number'),
    });

  const validateWorkInfo = () =>
    Yup.object().shape({
      linkedin: urlValidation('Linkedin URL'),
      profession: defaultValidation('Profession'),
      firm: defaultValidation('Firm / Company'),
      industry: defaultValidation('Industry'),
      income: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
    });

  const validateOtherInfo = () =>
    Yup.object().shape({
      investmentMethod: Yup.string().required('Select a Method').nullable(),
      event: shouldValidateEvent ? Yup.string().required('Event is required') : Yup.string(),
    });

  const validatePin = () =>
    Yup.object({
      pin: defaultValidation('PIN'),
      confirmPin: Yup.string()
        .required('Re-enter PIN')
        .oneOf([Yup.ref('pin'), null], 'Pins do not match'),
    });

  const getValidationSchema = () => {
    switch (currentStep) {
      case 1:
        return validateProfileInfo();

      case 2:
        return validateWorkInfo();

      case 3:
        return validateOtherInfo();

      default:
        return Yup.object().shape({});
    }
  };

  const onDetailSubmit = (values: object) => {
    return handleNext();
  };

  const onPinSubmit = (values: object) => {
    return router.push('/onboarding-congratulations');
  };

  const handleNext = () => setCurrentStep(currentStep + 1);

  const handlePrevious = () => setCurrentStep(currentStep - 1);

  const options = [
    { value: 'nigerian', label: 'Nigerian' },
    { value: 'american', label: 'American' },
  ];

  const incomeOptions = [
    { value: '< 10000', label: 'Below $10,000' },
    { value: '$10000 - $49000', label: '$10,000 - $49,000' },
    { value: '$50000 - $99000', label: '$50,000 - $99,000' },
    { value: '$100000 - $149000', label: '$100,000 - $149,000' },
    { value: '$150000 - $199000', label: '$150,000 - $199,000' },
    { value: '$200000 - $499000', label: '$200,000 - $499,000' },
    { value: '$500000 - $999000', label: '$500,000 - $990,000' },
    { value: '> $1Million', label: 'Above $1Million' },
  ];

  const selectStates = { nationality: false, country: false, income: false };

  const getCountries = countries.map((value) => ({ label: value, value }));

  const onBoardingSteps = [
    'Complete Profile',
    'Work Information',
    'Other Details',
    'PIN Setup',
  ];

  const initialValues: DetailFormValues = {
    nationality: '',
    country: '',
    city: '',
    address: '',
    zip: '',
    phoneNumber: '',
    linkedin: '',
    profession: '',
    firm: '',
    industry: '',
    income: '',
    investmentMethod: null,
    pastInvestment: false,
    syndicateMember: false,
    pastEvent: false,
    event: '',
  };

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
              <Typography component='h5'>Awesome! Lets get you onboarded</Typography>
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
              <OnboardingForm
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                initialValues={initialValues}
                getValidationSchema={getValidationSchema}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Onboarding;
