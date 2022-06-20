import type { NextPage } from 'next';
import { Col, Row } from 'antd';
import { OnboardingSidebar } from './OnboardingSidebar';

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

export const OnboardingLayout: NextPage<IProps> = ({ children }) => {
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
          <div className='onboarding-form-container'>{children}</div>
        </Col>
      </Row>
    </div>
  );
};
