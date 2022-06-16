import { Typography } from '../../';
import { IFormStepper } from '../../../../type.d';
import { assets } from '../../../assets';
import Image from 'next/image';

export const FormStepper: React.FC<IFormStepper> = ({ currentStep = 3, steps }) => {
  const {
    checkImg: { src, alt },
  } = assets;
  return (
    <div className='form-stepper'>
      {steps.map((step, key) => {
        const index = key + 1;

        const getClassName = (className: string) => {
          if (currentStep === index) return `${className} ${className}__active`;

          if (currentStep > index) return `${className} ${className}__completed`;

          return className;
        };
        return (
          <div className='status-indicator' key={key}>
            <div className='number-indicator'>
              <Typography component='h5' className={getClassName('index')}>
                0{index}
              </Typography>
              <div className={getClassName('status-track')}>
                {currentStep > index ? (
                  <Image src={src} alt={alt} width={12} height={10} />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className={getClassName('text-indicator')}>
              <Typography variant='body8'>{step}</Typography>
              {/* <div></div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
