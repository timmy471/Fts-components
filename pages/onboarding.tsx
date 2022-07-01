import AOS from 'aos';
import * as Yup from 'yup';
import { Col, Row } from 'antd';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { IOnboardingDetailFormValues } from 'type.d';
import { useState, useEffect } from 'react';
import { countries } from '@src/helpers/constants';
import { defaultValidation, urlValidation } from '@src/helpers';
import { OnboardingSidebar, Typography, FormStepper, OnboardingForm } from '@src/components';

const Onboarding: NextPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [mounted, setMounted] = useState<boolean>(false);
  const [shouldValidateEvent, setShouldValidateEvent] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  const validateProfileInfo = () =>
    Yup.object().shape({
      nationality: defaultValidation('Nationality'),
      country: defaultValidation('Country'),
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
      income: defaultValidation('Income'),
    });

  const validateOtherInfo = () =>
    Yup.object().shape({
      investmentMethod: Yup.string().required('Select a Method').nullable(),
      event: shouldValidateEvent ? Yup.string().required('Event is required') : Yup.string(),
    });

  const validatePin = () =>
    Yup.object({
      pin: Yup.string().required('Error: PIN is required'),
      confirmPin: Yup.string()
        .required('Error: Re-enter PIN')
        .oneOf([Yup.ref('pin'), null], 'Error: Entered PINs do not match'),
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

  const router = useRouter();

  const onDetailSubmit = (values: object) => {
    return handleNext();
  };

  const onPinSubmit = (values: object) => {
    return router.push('/onboarding-congratulations');
  };

  const handleNext = () => setCurrentStep(currentStep + 1);

  const handlePrevious = () => {
    return setCurrentStep(currentStep - 1);
  };

  const getNationalities = () =>
    countries.map((country) => ({ label: country.nationality, value: country.nationality }));

  const incomeOptions = [
    { value: '< $10000', label: 'Below $10,000' },
    { value: '$10000 - $49000', label: '$10,000 - $49,000' },
    { value: '$50000 - $99000', label: '$50,000 - $99,000' },
    { value: '$100000 - $149000', label: '$100,000 - $149,000' },
    { value: '$150000 - $199000', label: '$150,000 - $199,000' },
    { value: '$200000 - $499000', label: '$200,000 - $499,000' },
    { value: '$500000 - $999000', label: '$500,000 - $990,000' },
    { value: '> $1Million', label: 'Above $1Million' },
  ];

  const getCountries = () =>
    countries.map((country) => ({ label: country.name, value: country.name }));

  const onBoardingSteps = [
    'Complete Profile',
    'Work Information',
    'Other Details',
    'PIN Setup',
  ];
  const initialValues: IOnboardingDetailFormValues = {
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
  if (!mounted) return null;
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
                initialValues={initialValues}
                incomeOptions={incomeOptions}
                shouldValidateEvent={shouldValidateEvent}
                getCountries={getCountries}
                nationalityOptions={getNationalities}
                setShouldValidateEvent={setShouldValidateEvent}
                getValidationSchema={getValidationSchema}
                onDetailSubmit={onDetailSubmit}
                onPinSubmit={onPinSubmit}
                validatePin={validatePin}
                handlePrevious={handlePrevious}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Onboarding;
