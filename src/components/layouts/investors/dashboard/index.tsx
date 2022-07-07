import { Layout } from 'antd';
import React, { useState } from 'react';
import { Menu, TopHeader } from '@src/components';

interface IProps {
  children: JSX.Element[] | JSX.Element;
  classN: string;
  subClassN?: string;
  contentClassName?: string;
}

export const InvestorsDashboardLayout: React.FC<IProps> = ({
  children,
  classN,
  subClassN,
  contentClassName,
}) => {
  const { Content } = Layout;
  const [visible, setVisible] = useState<boolean>(false);

  let user = {
    firstName: 'Abbey',
    lastName: 'Sunkami',
    role: 'Investor',
    lastLogin: 'March 03, 2022 09.23am',
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='investors-dashboard'>
      <Layout className='layout'>
        <div>
          <Menu
            user={user}
            onClose={onClose}
            visible={visible}
            classN={classN}
            subClassN={subClassN}
          />
        </div>
        <Layout className='site-layout'>
          <TopHeader showDrawer={showDrawer} user={user} />
          <Content className='site-content'>
            <div
              className={`site-layout-background ${contentClassName ? contentClassName : ''}`}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
