import * as Yup from 'yup';
import Image from 'next/image';
import { useState } from 'react';
import {
  defaultValidation,
  emailValidation,
  passwordValidation,
  urlValidation,
} from '@src/helpers/validators';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import { Col, Row, Progress } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { IProfileFormValues, IProfilePasswordVisibility } from 'types';
import { InvestorsDashboardLayout, Typography, Button, ProfileForm } from '@src/components';

interface IProps {}

const Profile: NextPage<IProps> = () => {
  const [passwordVisibility, setPasswordVisibility] = useState<IProfilePasswordVisibility>({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const onPasswordToggle = (key: string, value: boolean) => {
    setPasswordVisibility({
      ...passwordVisibility,
      [key]: value,
    });
  };

  //These would come from storage
  const initialValues: IProfileFormValues = {
    firstName: 'Mia',
    lastName: 'Von Koschitzky-Kimani',
    middleName: '',
    email: 'mia@future.africa',
    dateOfBirth: '',
    nationality: 'American',
    phoneNumber: '+2348038564371',
    country: 'Nigeria',
    city: 'Lagos',
    address: '',
    employment: {
      linkedin: '',
      profession: '',
      firm: '',
      industry: undefined,
      income: undefined,
    },
    security: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    nextOfKin: {
      firstName: 'Taiwo',
      lastName: 'Kehinde',
      email: '',
      phoneNumber: '',
      country: undefined,
      city: '',
      address: '',
    },
    profileComplete: 50,
  };

  const { firstName, lastName, profileComplete } = initialValues;

  const [showCompleteStatus, setShowCompleteStatus] = useState<boolean>(profileComplete < 100);

  const basicInfoValidation = {
    firstName: defaultValidation('First Name'),
    lastName: defaultValidation('Last Name'),
    email: emailValidation(),
    phoneNumber: defaultValidation('Phone Number'),
    country: defaultValidation('Country'),
    city: defaultValidation('City'),
    address: defaultValidation('Address'),
  };

  const validationSchema = Yup.object().shape({
    ...basicInfoValidation,
    dateOfBirth: defaultValidation('Date Of Birth'),
    // dateOfBirth: Yup.string().test(
    //     "dateOfBirth",
    //     "Invalid Date Of Birth",
    //     (value) => moment().diff(moment(value), "days") <=0
    //   ),
    nationality: defaultValidation('Nationality'),

    employment: Yup.object({
      linkedin: urlValidation('Linkedin URL'),
      profession: defaultValidation('Profession'),
      firm: defaultValidation('Firm / Company'),
      industry: defaultValidation('Industry'),
      income: defaultValidation('Income'),
    }),
    security: Yup.object({
      currentPassword: defaultValidation('Current Password'),
      newPassword: passwordValidation('security.newPassword'),
      confirmPassword: Yup.string()
        .required('Re-enter Password')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords do not match'),
    }),
    nextOfKin: Yup.object({
      ...basicInfoValidation,
    }),
  });

  const getHelp = () => (
    <div className='questions-container profile-card text-center mtop-3'>
      <Image src={assets.questionsImg.src} alt={'Help'} width='50px' height='50px' />
      <Typography state='secondary' variant='body5' className='mtop-2'>
        Need help?
      </Typography>
      <Typography className='mt-1 mb-3' variant='body10' state='secondary'>
        Have questions or concerns regarding your Future Africa account? <br /> Our experts are
        here to help!
      </Typography>

      <Button label='Contact Us' />
    </div>
  );

  return (
    <InvestorsDashboardLayout classN=''>
      <div className='profile'>
        <Typography className='ml-1 page-title' component='h4'>
          Profile
        </Typography>
        <div className='mt-2'>
          <Row gutter={[18, 12]}>
            <Col xs={0} xl={6}>
              <div className='profile-card text-center profile-picture-container'>
                <div>
                  <Image src={assets.userAvatar.src} alt={''} width='100px' height='100px' />
                  <div className='camera-icon'>
                    <Image src={assets.cameraIcon.src} alt={''} width='40px' height='40px' />
                  </div>
                </div>
                <Typography variant='body8'>
                  {firstName} {lastName}
                </Typography>
              </div>
              {getHelp()}
            </Col>
            <Col xs={24} xl={18}>
              <div style={{ marginBottom: '1.5rem' }} className='mobile-show'>
                <div className='profile-card profile-picture-mobile px-3 d-flex align-items-center'>
                  <div style={{ position: 'relative' }}>
                    <Image src={assets.userAvatar.src} alt={''} width='100px' height='100px' />
                    <div className='camera-icon'>
                      <Image src={assets.cameraIcon.src} alt={''} width='40px' height='40px' />
                    </div>
                  </div>
                  <div className='ml-3'>
                    <Typography component='h4' className='mbottom-1'>
                      {firstName}
                    </Typography>
                    <Typography variant='body7'>{lastName}</Typography>
                  </div>
                </div>
              </div>
              {showCompleteStatus && (
                <div className='profile-card px-3 pb-2 profile-status-container'>
                  <Col xs={0} md={24}>
                    <div className='close-icon justify-content-end'>
                      <span onClick={() => setShowCompleteStatus(false)}>
                        <CloseOutlined color='#FFFFFF' />
                      </span>
                    </div>
                  </Col>

                  <div className='profile-status'>
                    <div
                      className='d-flex justify-content-between mbottom-2 align-items-center'
                      style={{ flexDirection: 'row' }}>
                      <Typography className='mb-0'>
                        Your Profile is not completed yet
                      </Typography>
                      <Col xs={2} md={0}>
                        <div className='close-icon justify-content-end '>
                          <span onClick={() => setShowCompleteStatus(false)}>
                            <CloseOutlined color='#FFFFFF' />
                          </span>
                        </div>
                      </Col>
                    </div>

                    <div className='d-flex justify-content-between'>
                      <Typography state='secondary' variant='body10' className='status-info'>
                        You are required to complete some information on your profile. Kindly
                        go to the sections below to fill in the details
                      </Typography>
                      <Typography className='status-text'>Percentage complete: 50%</Typography>
                    </div>
                    <div className='progress-indicator'>
                      <Progress
                        percent={profileComplete}
                        showInfo={false}
                        strokeColor='#FFA800'
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className='profile-form-container'>
                <ProfileForm
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  submitProfileInfo={(values) => {
                    console.log(JSON.stringify(values, null, 2));
                  }}
                  passwordVisibility={passwordVisibility}
                  onPasswordToggle={onPasswordToggle}
                />
              </div>
              <div className='mobile-show'>{getHelp()}</div>
            </Col>
          </Row>
        </div>
      </div>
    </InvestorsDashboardLayout>
  );
};

export async function getServerSideProps(context: any) {
  try {
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/?redirect=true',
      },
      props: {},
    };
  }
}

export default Profile;
