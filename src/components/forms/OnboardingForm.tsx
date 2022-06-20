import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, ErrorMessage } from 'formik';
import { Col, Row, Radio } from 'antd';
import { defaultValidation, urlValidation } from '../../helpers';
import {
  Typography,
  SelectField,
  ControlButtons,
  FormError,
  TextField,
  Button,
  Pill,
} from '../../components';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { countries } from '../../helpers/constants';
import OtpInput from 'react-otp-input';
import * as Yup from 'yup';

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

interface IOption {
  value: string;
  label: string;
}

interface ISelectStates {
  nationality: boolean;
  country: boolean;
  income: boolean;
}

interface IProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  initialValues: IDetailFormValues;
  getValidationSchema: () => void;
  onDetailSubmit: (values: object) => void;
  options: [IOption];
  selectStates: ISelectStates;
}

export const OnboardingForm: React.FC<IProps> = ({
  currentStep,
  setCurrentStep,
  initialValues,
  getValidationSchema,
  onDetailSubmit,
  options,
  selectStates,
}) => {
  const router = useRouter();

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
          {({ errors, touched, setFieldValue, getFieldProps, setTouched, values }) => (
            <Form noValidate autoComplete='off'>
              {/* PROFILE */}
              {currentStep === 1 && (
                <div>
                  <Typography variant='body5' className='form-parent-label'>
                    Address
                  </Typography>
                  <Row gutter={[22, 12]}>
                    <Col xs={24} md={12}>
                      <div data-aos='fade-up'>
                        <SelectField
                          options={options}
                          id='nationality'
                          name='nationality'
                          value={values.nationality}
                          onChange={(val) => {
                            selectStates.nationality = true;
                            setFieldValue('nationality', val);
                          }}
                          onBlur={() => {
                            if (!selectStates.nationality)
                              setTouched({ ...touched, nationality: true });
                          }}
                          hasError={errors.nationality && touched.nationality}
                          isSearchable
                          placeholder='Nationality'
                        />
                        {errors.nationality && touched.nationality && (
                          <FormError msg='Nationality is required' />
                        )}
                      </div>
                    </Col>
                    <Col xs={24} md={12}>
                      <SelectField
                        options={getCountries}
                        id='country'
                        name='country'
                        value={values.country}
                        onChange={(val) => {
                          selectStates.country = true;
                          setFieldValue('country', val);
                        }}
                        onBlur={() => {
                          if (!selectStates.country) setTouched({ ...touched, country: true });
                        }}
                        hasError={errors.country && touched.country}
                        isSearchable
                        placeholder='Country of Residence'
                      />
                      {errors.country && touched.country && (
                        <FormError msg='Country is required' />
                      )}
                    </Col>

                    <Col xs={24} md={12}>
                      <div data-aos='fade-down'>
                        <TextField
                          placeholder='City'
                          {...getFieldProps('city')}
                          hasError={errors.city && touched.city}
                        />
                        <ErrorMessage component={FormError} name='city' />
                      </div>
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
                      <div data-aos='fade-down'>
                        <TextField
                          placeholder='Zip/Postal Code'
                          {...getFieldProps('zip')}
                          hasError={errors.zip && touched.zip}
                        />
                        <ErrorMessage component={FormError} name='zip' />
                      </div>
                    </Col>
                  </Row>

                  <Typography
                    variant='body5'
                    className='form-parent-label'
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
                <div data-aos='fade-up'>
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
                          options={incomeOptions}
                          id='nationality'
                          name='income'
                          value={values.income}
                          onChange={(val) => {
                            selectStates.income = true;
                            setFieldValue('income', val);
                          }}
                          onBlur={() => {
                            if (!selectStates.income) setTouched({ ...touched, income: true });
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
              {currentStep === 3 && (
                <div className='other-details-container' data-aos='fade-down'>
                  <Row>
                    <Col xs={24} md={15}>
                      <div>
                        <Typography variant='body5'>How do you want to invest?</Typography>
                        <Radio.Group
                          name='investmentMethod'
                          defaultValue={values.investmentMethod}
                          size='small'
                          className='radio-group'
                          onChange={(e) => setFieldValue('investmentMethod', e.target.value)}>
                          <Radio value={'individial'}>
                            <Typography variant='body7'> As an Individual</Typography>
                          </Radio>
                          <Radio value={'group'}>
                            <Typography variant='body7'> As a group</Typography>
                          </Radio>
                        </Radio.Group>
                        <div
                          className={errors.investmentMethod ? 'investment-method-error' : ''}>
                          <ErrorMessage component={FormError} name='investmentMethod' />
                        </div>
                      </div>
                      <div className='mt-1 d-flex d-flex justify-content-between'>
                        <Typography variant='body5'>
                          How Have you been involved in any past investment in Africa?
                        </Typography>
                        <div className='pill-wrapper'>
                          <Pill
                            value={values.pastInvestment}
                            onClick={() =>
                              setFieldValue('pastInvestment', !values.pastInvestment)
                            }
                          />
                        </div>
                      </div>

                      <div className='mt-2 d-flex justify-content-between align-items-base'>
                        <Typography variant='body5'>
                          Are you a past member of a syndicate?
                        </Typography>
                        <div className='pill-wrapper'>
                          <Pill
                            value={values.syndicateMember}
                            onClick={() =>
                              setFieldValue('syndicateMember', !values.syndicateMember)
                            }
                          />
                        </div>
                      </div>

                      <div className='mt-2 d-flex justify-content-between align-items-base'>
                        <Typography variant='body5'>
                          Have you been to any past Future Africa events?
                        </Typography>
                        <div className='pill-wrapper'>
                          <Pill
                            value={values.pastEvent}
                            onClick={() => {
                              setFieldValue('pastEvent', !values.pastEvent);
                              setShouldValidateEvent(!shouldValidateEvent);

                              if (values.event) setFieldValue('event', '');
                            }}
                          />
                        </div>
                      </div>

                      {shouldValidateEvent && (
                        <div className='mt-1'>
                          <TextField
                            placeholder='Enter event here'
                            {...getFieldProps('event')}
                            hasError={errors.event && touched.event}
                          />
                          <ErrorMessage component={FormError} name='event' />
                        </div>
                      )}
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
