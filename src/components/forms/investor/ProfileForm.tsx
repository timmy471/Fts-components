import Image from 'next/image';
import { assets } from '@src/assets';
import { IProfileProps } from 'types';
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

  const { currentPassword, newPassword, confirmPassword } = passwordVisibility;
  //   Depdnding on API expectation, this might change to different forms
  //   We then have diff initalValues and validationSchema would be a function
  //   Expecting an index as an argument to know what schema to return
  //   This index will be in a setState onClick of the tabPanes
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitProfileInfo}>
      {({
        errors,
        touched,
        values,
        isSubmitting,
        setFieldValue,
        getFieldProps,
        handleBlur,
        handleChange,
        setTouched,
      }) => (
        <Form noValidate autoComplete='off'>
          <div className='fa-tabs profile-tabs'>
            <Tabs
              defaultActiveKey='1'
              onChange={() => {
                setTouched({});
              }}
              tabBarGutter={3}>
              <TabPane tab='Personal Details' key='1' disabled={isSubmitting}>
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
                        style={{
                          backgroundColor: '#F3F3F3',
                          border:
                            errors.dateOfBirth && touched.dateOfBirth
                              ? '1px solid red'
                              : 'none',
                        }}
                        inputReadOnly
                        format='DD/MM/YYYY'
                        onChange={(date, dateString) =>
                          setFieldValue('dateOfBirth', dateString)
                        }
                      />
                      <ErrorMessage component={FormError} name='dateOfBirth' />
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
                        hasError={errors.nationality && touched.nationality}
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
                      <Button label={'Save Changes'} type='submit' fullWidth />
                    </Col>
                  </Row>
                </div>
              </TabPane>

              <TabPane tab='Employment' key='2' disabled={isSubmitting}>
                <div className='profile-card px-4 pt-4 pb-3 bio-data'>
                  <Row gutter={[20, 20]}>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Linkedin URL'
                        {...getFieldProps('employment.linkedin')}
                        hasError={errors.employment?.linkedin && touched.employment?.linkedin}
                      />
                      <ErrorMessage component={FormError} name='employment.linkedin' />
                    </Col>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Profession / Role'
                        {...getFieldProps('employment.profession')}
                        hasError={
                          errors.employment?.profession && touched.employment?.profession
                        }
                      />
                      <ErrorMessage component={FormError} name='employment.profession' />
                    </Col>

                    <Col xs={24} sm={12}>
                      <TextField
                        label='Firm / Company'
                        {...getFieldProps('employment.firm')}
                        hasError={errors.employment?.firm && touched.employment?.firm}
                      />
                      <ErrorMessage component={FormError} name='employment.firm' />
                    </Col>

                    <Col xs={24} sm={12}>
                      <SelectField
                        options={industries.map((industry) => ({
                          label: industry,
                          value: industry,
                        }))}
                        onChange={(value: string) => {
                          setFieldValue('employment.industry', value);
                        }}
                        onBlur={handleBlur}
                        onSelect={handleChange}
                        isSearchable={true}
                        style={{ backgroundColor: '#F3F3F3' }}
                        hasError={errors.employment?.industry && touched.employment?.industry}
                        placeholder='Industry'
                      />
                      <ErrorMessage component={FormError} name='employment.industry' />
                    </Col>

                    <Col xs={24} sm={12}>
                      <SelectField
                        options={incomeOptions}
                        onChange={(value: string) => {
                          setFieldValue('employment.income', value);
                        }}
                        onBlur={handleBlur}
                        onSelect={handleChange}
                        isSearchable={true}
                        style={{ backgroundColor: '#F3F3F3' }}
                        hasError={errors.employment?.income && touched.employment?.income}
                        placeholder='Annual Income'
                      />
                      <ErrorMessage component={FormError} name='employment.income' />
                    </Col>
                    <Col xs={24} className='submit-cta'>
                      <Button label={'Save Changes'} type='submit' fullWidth />
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab='Security' key='3' disabled={isSubmitting}>
                <div className='profile-card px-4 pt-4 pb-3 bio-data'>
                  <Row gutter={[20, 20]}>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Current Password'
                        {...getFieldProps('security.currentPassword')}
                        type={currentPassword ? 'text' : 'password'}
                        hasError={
                          errors.security?.currentPassword && touched.security?.currentPassword
                        }
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
                      <ErrorMessage component={FormError} name='security.currentPassword' />
                    </Col>
                  </Row>
                  <Row gutter={[20, 20]} className='mtop-3'>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='New Password'
                        {...getFieldProps('security.newPassword')}
                        type={newPassword ? 'text' : 'password'}
                        hasError={
                          errors.security?.newPassword && touched.security?.newPassword
                        }
                        endIcon={
                          <img
                            src={newPassword ? assets.EyeOpen.src : assets.EyeClose.src}
                            className='eye-icon'
                            onClick={() => onPasswordToggle('newPassword', !newPassword)}
                          />
                        }
                      />
                      <ErrorMessage component={FormError} name='security.newPassword' />
                    </Col>
                  </Row>
                  <Row gutter={[20, 20]} className='mtop-3'>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Confirm Password'
                        {...getFieldProps('security.confirmPassword')}
                        type={confirmPassword ? 'text' : 'password'}
                        hasError={
                          errors.security?.confirmPassword && touched.security?.confirmPassword
                        }
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
                      <ErrorMessage component={FormError} name='security.confirmPassword' />
                    </Col>
                    <Col xs={24} className='submit-cta'>
                      <Button label={'Save Changes'} type='submit' fullWidth />
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
                        hasError={errors.nextOfKin?.firstName && touched.nextOfKin?.firstName}
                      />
                      <ErrorMessage component={FormError} name='nextOfKin.firstName' />
                    </Col>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Last Name'
                        {...getFieldProps('nextOfKin.lastName')}
                        hasError={errors.nextOfKin?.lastName && touched.nextOfKin?.lastName}
                      />
                      <ErrorMessage component={FormError} name='nextOfKin.lastName' />
                    </Col>
                    <Col xs={24} sm={12}>
                      <TextField
                        label='Email'
                        className='fa_textfield'
                        {...getFieldProps('nextOfKin.email')}
                        hasError={errors.nextOfKin?.email && touched.nextOfKin?.email}
                      />
                      <ErrorMessage component={FormError} name='nextOfKin.email' />
                    </Col>

                    <Col xs={24} sm={12}>
                      <PhoneInput
                        placeholder='Phone Number'
                        className={`fa_textfield ${
                          errors.nextOfKin?.phoneNumber && touched.nextOfKin?.phoneNumber
                            ? 'fa_textfield__error'
                            : ''
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
                        hasError={errors.nextOfKin?.country && touched.nextOfKin?.country}
                        placeholder='Country of Residence'
                      />
                      <ErrorMessage component={FormError} name='nextOfKin.country' />
                    </Col>

                    <Col xs={24} sm={12}>
                      <TextField
                        label='City'
                        {...getFieldProps('nextOfKin.city')}
                        hasError={errors.nextOfKin?.city && touched.nextOfKin?.city}
                      />
                      <ErrorMessage component={FormError} name='nextOfKin.city' />
                    </Col>
                    <Col xs={24}>
                      <TextField
                        label='Address'
                        {...getFieldProps('nextOfKin.address')}
                        hasError={errors.nextOfKin?.address && touched.nextOfKin?.address}
                      />
                      <ErrorMessage component={FormError} name='nextOfKin.address' />
                    </Col>
                    <Col xs={24} className='submit-cta'>
                      <Button label={'Save Changes'} type='submit' fullWidth />
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
