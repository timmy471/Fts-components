import React from 'react';
import Image from 'next/image';
import { assets } from '../../../assets';
import { Typography } from '../../';

export const OnboardingSidebar = () => {
  const {
    FaLogo: { src, alt },
    OnboardingImg,
  } = assets;
  return (
    <div className='onboarding-sidebar-container'>
      <div className='onboarding-sidebar'>
        <Image src={src} alt={alt} width={150} height={50} />
        <div className='text-center'>
          <Typography component='h5'>You made it this far, Mia!</Typography>
          <Typography component='p' variant='body7'>
            We just have few questions for you to answer and you will be on your way to the
            great deals awaiting you
          </Typography>
        </div>
        <div className='onboarding-img'>
          <div>
            <Image src={OnboardingImg.src} alt={OnboardingImg.alt} width={95} height={90} />
          </div>
        </div>
      </div>
    </div>
  );
};
