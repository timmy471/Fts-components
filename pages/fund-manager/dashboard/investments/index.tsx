import Link from 'next/link';
import { IUser } from 'type.d';
import Image from 'next/image';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import { Fragment, useState } from 'react';
import { Menu, FundManagerHeader } from '@src/components';
import { Layout, Row, Col, Input, Dropdown, Button, Menu as M } from 'antd';
import { CaretDownOutlined, InfoCircleOutlined } from '@ant-design/icons';

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

  const menu = (
    <M
      items={[
        {
          key: '1',
          label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
              2nd menu item
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <div className='fund-manager-dashboard'>
      <FundManagerHeader showDrawer={showDrawer} user={user} />
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
