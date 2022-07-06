import { IUser } from 'type.d';
import type { NextPage } from 'next';
import { Fragment, useState } from 'react';
import { Menu, FundManagerHeader } from '@src/components';
import { Layout } from 'antd';

interface IProps {}

const FundManagerDashboard: NextPage<IProps> = () => {
  const { Content } = Layout;
  const [visible, setVisible] = useState<boolean>(false);

  let user: IUser = {
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
    <div className='fund-manager-dashboard'>
      <FundManagerHeader
        classN='investments'
        user={user}
        visible={visible}
        onClose={onClose}
        showDrawer={showDrawer}
      />
      {/* <Menu
        user={user}
        onClose={onClose}
        visible={visible}
        classN='investments'
        subClassN='investments'
      /> */}
      <div className='fund-manager-site-layout'>
        <div className='fund-manager-layout-background'>
          <h1>Okasy</h1>
        </div>
      </div>
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

export default FundManagerDashboard;
