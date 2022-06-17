import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, ErrorMessage } from 'formik';
import { Col, Row } from 'antd';
import { defaultValidation, urlValidation } from '../../helpers';
import {
  Typography,
  SelectField,
  ControlButtons,
  FormError,
  TextField,
  Button,
} from '../../components';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import OtpInput from 'react-otp-input';
import * as Yup from 'yup';

interface MyFormValues {
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
}

interface IProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export const OnboardingForm: React.FC<IProps> = ({ currentStep, setCurrentStep }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);

  const router = useRouter();

  const initialValues: MyFormValues = {
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
  };

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

  const validateOtherInfo = () => Yup.object().shape({});

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

  const handleNext = () => setCurrentStep(currentStep + 1);

  const handlePrevious = () => setCurrentStep(currentStep - 1);

  const options = [
    { value: 'nigerian', label: 'Nigerian' },
    { value: 'american', label: 'America' },
  ];

  const onDetailSubmit = (values: object) => {
    // if (currentStep < 3)

    return handleNext();

    console.log(values);
  };

  const onPinSubmit = (values: object) => {
    return router.push('/onboarding-congratulations');
  };

  if (!mounted) return null;

  return (
    <div>
      {currentStep !== 4 ? (
        <Formik
          initialValues={initialValues}
          validationSchema={getValidationSchema}
          onSubmit={(values, { setTouched }) => {
            setTouched({});
            onDetailSubmit(values);
          }}>
          {({ errors, touched, setFieldValue, getFieldProps, values }) => (
            <Form noValidate autoComplete='off'>
              {/* PROFILE */}
              {currentStep === 1 && (
                <div>
                  <Typography variant='body5' className='form-parent-label'>
                    Address
                  </Typography>
                  <Row gutter={[22, 12]}>
                    <Col xs={24} md={12}>
                      <SelectField
                        options={options}
                        id='nationality'
                        name='nationality'
                        value={values.nationality}
                        onChange={(val) => setFieldValue('nationality', val)}
                        hasError={errors.nationality && touched.nationality}
                        isSearchable
                        placeholder='Nationality'
                      />
                      {errors.nationality && touched.nationality && (
                        <FormError msg='Nationality is requred' />
                      )}
                    </Col>
                    <Col xs={24} md={12}>
                      <SelectField
                        options={options}
                        id='country'
                        name='country'
                        value={values.country}
                        onChange={(val) => setFieldValue('country', val)}
                        hasError={errors.country && touched.country}
                        isSearchable
                        placeholder='Country of Residence'
                      />
                      {errors.country && touched.country && (
                        <FormError msg='Country is requred' />
                      )}
                    </Col>

                    <Col xs={24} md={12}>
                      <TextField
                        placeholder='City'
                        {...getFieldProps('city')}
                        hasError={errors.city && touched.city}
                      />
                      <ErrorMessage component={FormError} name='city' />
                    </Col>

                    <Col xs={24} md={12}>
                      <TextField
                        placeholder='Address'
                        {...getFieldProps('address')}
                        hasError={errors.address && touched.address}
                      />
                      <ErrorMessage component={FormError} name='address' />
                    </Col>

                    <Col xs={24} md={12}>
                      <TextField
                        placeholder='Zip/Postal Code'
                        {...getFieldProps('zip')}
                        hasError={errors.zip && touched.zip}
                      />
                      <ErrorMessage component={FormError} name='zip' />
                    </Col>
                  </Row>

                  <Typography
                    variant='body5'
                    className='form-parent-label '
                    style={{ marginTop: '1.5rem' }}>
                    Contact
                  </Typography>
                  <Row gutter={[22, 12]}>
                    <Col xs={24} md={12}>
                      <PhoneInput
                        placeholder='Phone Number'
                        className={`fa_textfield ${
                          errors.zip && touched.zip ? 'fa_textfield__error' : ''
                        }`}
                        countryCallingCodeEditable={false}
                        name='phoneNumber'
                        value={values.phoneNumber}
                        onChange={(val) => setFieldValue('phoneNumber', val)}
                        defaultCountry='NG'
                        international
                      />
                      <ErrorMessage component={FormError} name='phoneNumber' />
                    </Col>
                  </Row>
                </div>
              )}
              {/* WORK INFORMATION */}
              {currentStep === 2 && (
                <div>
                  <Row>
                    <Col xs={24} md={15}>
                      <div>
                        <TextField
                          placeholder='Linkedin URL'
                          {...getFieldProps('linkedin')}
                          hasError={errors.linkedin && touched.linkedin}
                        />
                        <ErrorMessage component={FormError} name='linkedin' />
                      </div>

                      <div className='work-info-field'>
                        <TextField
                          placeholder='Profession / Role'
                          {...getFieldProps('profession')}
                          hasError={errors.profession && touched.profession}
                        />
                        <ErrorMessage component={FormError} name='profession' />
                      </div>

                      <div className='work-info-field'>
                        <TextField
                          placeholder='Firm / Company'
                          {...getFieldProps('firm')}
                          hasError={errors.firm && touched.firm}
                        />
                        <ErrorMessage component={FormError} name='firm' />
                      </div>

                      <div className='work-info-field'>
                        <TextField
                          placeholder='Industry'
                          {...getFieldProps('industry')}
                          hasError={errors.industry && touched.industry}
                        />
                        <ErrorMessage component={FormError} name='industry' />
                      </div>
                      <div className='work-info-field'>
                        <SelectField
                          options={[
                            { value: '$5000 - $10000', label: '$5000 - $10000' },
                            { value: '$11000 - $15000', label: '$11000 - $15000' },
                          ]}
                          id='nationality'
                          name='income'
                          value={values.income}
                          onChange={(val) => {
                            setFieldValue('income', val);
                          }}
                          hasError={errors.income && touched.income}
                          placeholder='Annual Income'
                        />
                        {errors.income && touched.income && (
                          <FormError msg='Annual Income is requred' />
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
              <div className='control-buttons-container'>
                <ControlButtons currentStep={currentStep} handlePrevious={handlePrevious} />
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div>
          <Formik
            initialValues={{
              pin: '',
              confirmPin: '',
            }}
            validationSchema={validatePin}
            onSubmit={onPinSubmit}>
            {({ setFieldValue, values }) => (
              <Form noValidate autoComplete='off'>
                <Typography variant='body7'>Pin Code</Typography>
                <OtpInput
                  value={values.pin}
                  inputStyle='otp-input'
                  onChange={(val: string) => setFieldValue('pin', val)}
                  numInputs={5}
                  shouldAutoFocus
                  isInputNum
                />
                <ErrorMessage component={FormError} name='pin' />

                <div className='mt-2'>
                  <Typography variant='body7'> Confrim Pin Code</Typography>
                  <OtpInput
                    value={values.confirmPin}
                    inputStyle='otp-input'
                    onChange={(val: string) => setFieldValue('confirmPin', val)}
                    numInputs={5}
                    isInputNum
                  />
                  <ErrorMessage component={FormError} name='confirmPin' />
                </div>
                <div className='control-buttons-container contro-buttons-container__single'>
                  <Button type='submit' label='Finish' />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};
