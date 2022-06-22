import { Layout } from 'antd';
import type { NextPage } from 'next';
import { useState } from 'react';

import { Menu, TopHeader } from '../../../src/components';

interface IProps {}

const InvestorsDashboard: NextPage<IProps> = () => {
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
            classN='investments'
            subClassN='investments'
          />
        </div>
        <Layout className='site-layout'>
          <TopHeader showDrawer={showDrawer} user={user} />
          <Content className='site-content'>
            <div className='site-layout-background'>
              <h1>Investments</h1>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
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

export default InvestorsDashboard;
