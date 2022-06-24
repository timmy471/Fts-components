import { Col, Row, Radio } from 'antd';
import OtpInput from 'react-otp-input';
import { Dispatch, SetStateAction } from 'react';
import PhoneInput from 'react-phone-number-input';
import { Formik, Form, ErrorMessage } from 'formik';
import { industries } from '@src/helpers/constants';


import {
  Typography,
  SelectField,
  ControlButtons,
  FormError,
  TextField,
  Button,
  Pill,
} from '../../components';

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

interface IProps {
  currentStep: number;
  initialValues: IDetailFormValues;
  incomeOptions: IOption[];
  shouldValidateEvent: boolean;
  getCountries: () => IOption[];
  nationalityOptions: () => IOption[];
  setShouldValidateEvent: Dispatch<SetStateAction<boolean>>;
  getValidationSchema: () => void;
  onDetailSubmit: (values: object) => void;
  onPinSubmit: (values: object) => void;
  validatePin: () => object;
  handlePrevious: () => void;
}
export const OnboardingForm: React.FC<IProps> = ({
  currentStep,
  initialValues,
  nationalityOptions,
  getCountries,
  shouldValidateEvent,
  incomeOptions,
  setShouldValidateEvent,
  getValidationSchema,
  onDetailSubmit,
  onPinSubmit,
  validatePin,
  handlePrevious,
}) => {
  return (
    <div>
      {currentStep !== 4 ? (
        <Formik
          initialValues={initialValues}
          validationSchema={getValidationSchema}
          onSubmit={(values, { setTouched }) => {
            console.log(values);
            setTouched({});
            onDetailSubmit(values);
          }}>
          {({
            errors,
            touched,
            setFieldValue,
            getFieldProps,
            handleChange,
            handleBlur,
            values,
          }) => (
            <Form noValidate autoComplete='off'>
              {/* PROFILE */}
              {currentStep === 1 && (
                <div>
                  <Typography variant='body5' className='form-parent-label'>
                    Address
                  </Typography>
                  <Row gutter={[22, 12]}>
                    <Col xs={24} md={12}>
                      <div data-aos='fade-up' data-aos-once={true}>
                        <SelectField
                          options={nationalityOptions()}
                          onChange={(value: string) => {
                            setFieldValue('nationality', value);
                          }}
                          onBlur={handleBlur}
                          onSelect={handleChange}
                          isSearchable={true}
                          hasError={errors.nationality && touched.nationality}
                          placeholder='Nationality'
                        />
                        <ErrorMessage component={FormError} name='nationality' />
                      </div>
                    </Col>
                    <Col xs={24} md={12}>
                      <SelectField
                        options={getCountries()}
                        onChange={(value: string) => {
                          setFieldValue('country', value);
                        }}
                        onBlur={handleBlur}
                        onSelect={handleChange}
                        isSearchable={true}
                        hasError={errors.country && touched.country}
                        placeholder='Country of Residence'
                      />
                      <ErrorMessage component={FormError} name='country' />
                    </Col>

                    <Col xs={24} md={12}>
                      <div data-aos='fade-down' data-aos-once={true}>
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
                      <div data-aos='fade-down' data-aos-once={true}>
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
                <div data-aos='fade-up' data-aos-once={true}>
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
                        <SelectField
                          options={industries.map((industry) => ({
                            label: industry,
                            value: industry,
                          }))}
                          onChange={(value: string) => {
                            setFieldValue('industry', value);
                          }}
                          onBlur={handleBlur}
                          onSelect={handleChange}
                          isSearchable={true}
                          hasError={errors.industry && touched.industry}
                          placeholder='Industry'
                        />
                        <ErrorMessage component={FormError} name='industry' />
                      </div>
                      <div className='work-info-field'>
                        <SelectField
                          options={incomeOptions}
                          onChange={(value: string) => {
                            setFieldValue('income', value);
                          }}
                          onBlur={handleBlur}
                          onSelect={handleChange}
                          isSearchable={true}
                          hasError={errors.income && touched.income}
                          placeholder='Annual Income'
                        />
                        <ErrorMessage component={FormError} name='income' />
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
              {currentStep === 3 && (
                <div
                  className='other-details-container'
                  data-aos='fade-down'
                  data-aos-once={true}>
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
