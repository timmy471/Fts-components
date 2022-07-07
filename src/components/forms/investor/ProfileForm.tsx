import Image from 'next/image';
import { assets } from '@src/assets';
import { IProfileProps } from 'type.d';
import type { DatePickerProps } from 'antd';
import PhoneInput from 'react-phone-number-input';
import { Tabs, Row, Col, DatePicker } from 'antd';
import { Formik, Form, ErrorMessage } from 'formik';
import { incomeOptions, industries } from '@src/helpers/constants';
import { getNationalitiesForForm, getCountries } from '@src/helpers';
import { SelectField, TextField, Button, FormError } from '@src/components';

export const ProfileForm: React.FC<IProfileProps> = ({
  initialValues,
  passwordVisibility,
  validationSchema,
  submitProfileInfo,
  onPasswordToggle,
}) => {
  const { TabPane } = Tabs;

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const { currentPassword, newPassword, confirmPassword } = passwordVisibility;
  return (
    <Formik
      initialValues={initialValues}
      //   validationSchema={validationSchema}
      onSubmit={submitProfileInfo}>
      {({
        errors,
        touched,
        values,
        setFieldValue,
        getFieldProps,
        handleBlur,
        handleChange,
      }) => (
        <Form noValidate autoComplete='off'>
          <div className='fa-tabs profile-tabs'>
            <Tabs defaultActiveKey='1' onChange={() => {}} tabBarGutter={3}>
              <TabPane tab='Personal Details' key='1'>
                <div className='profile-card px-4 pt-4 pb-3 bio-data'>
                  <Row gutter={[20, 20]}>
                    <Col xs={24} sm={12} md={8}>
                      <TextField
                        label='First Name'
                        {...getFieldProps('firstName')}
                        required={false}
                        disabled
                      />
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                      <TextField
                        label='Middle Name'
                        {...getFieldProps('middleName')}
                        required={false}
                      />
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                      <TextField
                        label='Last Name'
                        {...getFieldProps('lastName')}
                        required={false}
                        disabled
                      />
                    </Col>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Email'
                        className='fa_textfield'
                        {...getFieldProps('email')}
                        required={false}
                        disabled
                      />
                    </Col>
                    <Col xs={24} sm={12}>
                      <DatePicker
                        className='fa_textfield test'
                        placeholder='Date Of Birth'
                        style={{ backgroundColor: '#F3F3F3' }}
                        inputReadOnly
                        onChange={onDateChange}
                      />
                    </Col>
                    <Col xs={24} sm={12}>
                      <SelectField
                        options={getNationalitiesForForm()}
                        value={values.nationality}
                        onChange={(value: string) => {
                          setFieldValue('nationality', value);
                        }}
                        onBlur={handleBlur}
                        onSelect={handleChange}
                        isSearchable={true}
                        style={{ backgroundColor: '#F3F3F3' }}
                        //   hasError={errors.nationality && touched.nationality}
                        placeholder='Nationality'
                      />
                      <ErrorMessage component={FormError} name='nationality' />
                    </Col>
                    <Col xs={24} sm={12}>
                      <PhoneInput
                        placeholder='Phone Number'
                        className={`fa_textfield ${
                          errors.phoneNumber && touched.phoneNumber
                            ? 'fa_textfield__error'
                            : ''
                        }`}
                        style={{ backgroundColor: '#F3F3F3' }}
                        countryCallingCodeEditable={false}
                        name='phoneNumber'
                        value={values.phoneNumber}
                        onChange={(val: string) => setFieldValue('phoneNumber', val)}
                        defaultCountry='NG'
                        international
                      />
                      <ErrorMessage component={FormError} name='phoneNumber' />
                    </Col>

                    <Col xs={24} sm={12} className='sectioned-field'>
                      <SelectField
                        options={getCountries()}
                        onChange={(value: string) => {
                          setFieldValue('country', value);
                        }}
                        onBlur={handleBlur}
                        onSelect={handleChange}
                        isSearchable={true}
                        value={values.country}
                        style={{ backgroundColor: '#F3F3F3' }}
                        hasError={errors.country && touched.country}
                        placeholder='Country of Residence'
                        required={false}
                      />
                      <ErrorMessage component={FormError} name='country' />
                    </Col>

                    <Col xs={24} sm={12} className='sectioned-field'>
                      <TextField
                        label='City'
                        {...getFieldProps('city')}
                        hasError={errors.city && touched.city}
                        required={false}
                      />
                      <ErrorMessage component={FormError} name='city' />
                    </Col>
                    <Col xs={24}>
                      <TextField
                        label='Address'
                        {...getFieldProps('address')}
                        hasError={errors.address && touched.address}
                        required={false}
                      />
                      <ErrorMessage component={FormError} name='address' />
                    </Col>
                    <Col xs={24} className='submit-cta'>
                      <Button label={'Save Changes'} fullWidth />
                    </Col>
                  </Row>
                </div>
              </TabPane>

              <TabPane tab='Employment' key='2'>
                <div className='profile-card px-4 pt-4 pb-3 bio-data'>
                  <Row gutter={[20, 20]}>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Linkedin URL'
                        {...getFieldProps('linkedin')}
                        // hasError={errors.linkedin && touched.linkedin}
                      />
                      <ErrorMessage component={FormError} name='linkedin' />
                    </Col>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Profession / Role'
                        {...getFieldProps('profession')}
                        // hasError={errors.profession && touched.profession}
                      />
                      <ErrorMessage component={FormError} name='profession' />
                    </Col>

                    <Col xs={24} sm={12}>
                      <TextField
                        label='Firm / Company'
                        {...getFieldProps('firm')}
                        // hasError={errors.firm && touched.firm}
                      />
                      <ErrorMessage component={FormError} name='firm' />
                    </Col>

                    <Col xs={24} sm={12}>
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
                        style={{ backgroundColor: '#F3F3F3' }}
                        // hasError={errors.industry && touched.industry}
                        placeholder='Industry'
                      />
                      <ErrorMessage component={FormError} name='industry' />
                    </Col>

                    <Col xs={24} sm={12}>
                      <SelectField
                        options={incomeOptions}
                        onChange={(value: string) => {
                          setFieldValue('income', value);
                        }}
                        onBlur={handleBlur}
                        onSelect={handleChange}
                        isSearchable={true}
                        style={{ backgroundColor: '#F3F3F3' }}
                        // hasError={errors.income && touched.income}
                        placeholder='Annual Income'
                      />
                      <ErrorMessage component={FormError} name='income' />
                    </Col>
                    <Col xs={24} className='submit-cta'>
                      <Button label={'Save Changes'} fullWidth />
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab='Security' key='3'>
                <div className='profile-card px-4 pt-4 pb-3 bio-data'>
                  <Row gutter={[20, 20]} className='mt-1'>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Current Password'
                        {...getFieldProps('password')}
                        type={currentPassword ? 'text' : 'password'}
                        endIcon={
                          <img
                            src={currentPassword ? assets.EyeOpen.src : assets.EyeClose.src}
                            className='eye-icon'
                            onClick={() =>
                              onPasswordToggle('currentPassword', !currentPassword)
                            }
                          />
                        }
                      />
                    </Col>
                  </Row>
                  <Row gutter={[20, 20]}>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='New Password'
                        {...getFieldProps('newPassword')}
                        type={newPassword ? 'text' : 'password'}
                        endIcon={
                          <img
                            src={newPassword ? assets.EyeOpen.src : assets.EyeClose.src}
                            className='eye-icon'
                            onClick={() => onPasswordToggle('newPassword', !newPassword)}
                          />
                        }
                      />
                    </Col>
                  </Row>
                  <Row gutter={[20, 20]}>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Confirm Password'
                        {...getFieldProps('confirmPassword')}
                        type={confirmPassword ? 'text' : 'password'}
                        endIcon={
                          <img
                            src={confirmPassword ? assets.EyeOpen.src : assets.EyeClose.src}
                            className='eye-icon'
                            onClick={() =>
                              onPasswordToggle('confirmPassword', !confirmPassword)
                            }
                          />
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} sm={12}>
                      <Col xs={24} className='submit-cta'>
                        <Button label={'Save Changes'} fullWidth />
                      </Col>
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab='Next of Kin' key='4'>
                <div className='profile-card px-4 pt-4 pb-3 bio-data'>
                  <Row gutter={[20, 20]}>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='First Name'
                        {...getFieldProps('nextOfKin.firstName')}
                        // hasError={errors.nextOfKin.firstName && touched.nextOfKin.firstName}
                      />
                    </Col>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Last Name'
                        {...getFieldProps('nextOfKin.lastName')}
                        // hasError={errors.nextOfKin.lastName && touched.nextOfKin.lastName}
                      />
                    </Col>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Email'
                        className='fa_textfield'
                        {...getFieldProps('nextOfKin.email')}
                        // hasError={errors.nextOfKin.email && touched.nextOfKin.email}
                      />
                    </Col>

                    <Col xs={24} sm={12}>
                      <PhoneInput
                        placeholder='Phone Number'
                        className={`fa_textfield ${
                          //   errors.nextOfKin.phoneNumber && touched.nextOfKin.phoneNumber
                          false ? 'fa_textfield__error' : ''
                        }`}
                        style={{ backgroundColor: '#F3F3F3' }}
                        countryCallingCodeEditable={false}
                        name='phoneNumber'
                        value={values.nextOfKin.phoneNumber}
                        onChange={(val: string) => setFieldValue('nextOfKin.phoneNumber', val)}
                        defaultCountry='NG'
                        international
                      />
                      <ErrorMessage component={FormError} name='nextOfKin.phoneNumber' />
                    </Col>

                    <Col xs={24} sm={12}>
                      <SelectField
                        options={getCountries()}
                        onChange={(value: string) => {
                          setFieldValue('nextOfKin.country', value);
                        }}
                        onBlur={handleBlur}
                        onSelect={handleChange}
                        isSearchable={true}
                        value={values.nextOfKin.country}
                        style={{ backgroundColor: '#F3F3F3' }}
                        // hasError={errors.nextOfKin.country && touched.nextOfKin.country}
                        placeholder='Country of Residence'
                      />
                      <ErrorMessage component={FormError} name='nextOfKin.country' />
                    </Col>

                    <Col xs={24} sm={12}>
                      <TextField
                        label='City'
                        {...getFieldProps('nextOfKin.city')}
                        // hasError={errors.nextOfKin.city && touched.nextOfKin.city}
                      />
                      <ErrorMessage component={FormError} name='nextOfKin.city' />
                    </Col>
                    <Col xs={24}>
                      <TextField
                        label='Address'
                        {...getFieldProps('nextOfKin.address')}
                        // hasError={errors.nextOfKin.address && touched.nextOfKin.address}
                      />
                      <ErrorMessage component={FormError} name='nextOfKin.address' />
                    </Col>
                    <Col xs={24} className='submit-cta'>
                      <Button label={'Save Changes'} fullWidth />
                    </Col>
                  </Row>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
