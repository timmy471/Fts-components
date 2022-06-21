import { Layout, Collapse } from 'antd';
import type { NextPage } from 'next';
import { useState } from 'react';

import { Menu, TopHeader } from '../../src/components';

interface IProps {}

const Dashboard: NextPage<IProps> = () => {
  const { Content } = Layout;
  const { Panel } = Collapse;
  const [visible, setVisible] = useState<boolean>(false);

  let user = {
    firstName: 'Abbey',
    lastName: 'Sunkami',
    role: 'Investor',
  };

  // Shows side drawer when you click on Menu button
  const showDrawer = () => {
    setVisible(true);
  };
  // Closes side drawer when clicked uppon
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
            classN='dashboard'
            subClassN='investments'
          />
        </div>
        <Layout className='site-layout'>
          <TopHeader />
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

export default Dashboard;
