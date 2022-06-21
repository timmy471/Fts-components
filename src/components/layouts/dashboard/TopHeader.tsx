import { Layout, Drawer, Dropdown, Menu, Row, Col } from 'antd';
import { DownOutlined, CaretDownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

import { assets } from '../../../assets';

interface IUser {
  firstName: string;
  lastName: string;
  role: string;
  lastLogin: string;
}

interface IProps {
  showDrawer: () => void;
  user: IUser;
}

export const TopHeader: NextPage<IProps> = ({ showDrawer, user }) => {
  const { Header } = Layout;

  return (
    <Header className='top-header'>
      <Row>
        <Col xs={3} sm={2} md={2} lg={0} xl={0}>
          <Image
            src={assets.HamburgerIcon.src}
            alt={assets.HamburgerIcon.alt}
            width={'25'}
            height={'25'}
            onClick={showDrawer}
            className='hamburger-icon'
          />
        </Col>
        <Col xs={15} sm={14} md={16} lg={16} xl={19}>
          <h3>Last Login:</h3>
          <span>{user.lastLogin}</span>
        </Col>
        <Col xs={6} sm={8} md={6} lg={8} xl={5}>
          <Row gutter={[20, 20]}>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className='notif-bell'>
                <Image
                  src={assets.NotificationBellIcon.src}
                  alt={assets.NotificationBellIcon.alt}
                  height='100'
                  width='100'
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={18} lg={18} xl={18}>
              <Row gutter={[4, 4]}>
                <Col xs={24} sm={24} md={7} lg={6} xl={6}>
                  <div style={{ height: '40px', width: '40px' }}>
                    <Image
                      src={assets.UserAvatarIcon.src}
                      alt={assets.UserAvatarIcon.alt}
                      height='100'
                      width='100'
                    />
                  </div>
                </Col>
                <Col xs={0} sm={0} md={13} lg={15} xl={15} className='ml-1 mtop-1'>
                  <div className='user-detail'>
                    <h3>
                      {user.firstName} <br />
                      <span>{user.role}</span>
                    </h3>
                  </div>
                </Col>
                <Col
                  xs={0}
                  sm={0}
                  md={2}
                  lg={2}
                  xl={2}
                  style={{ float: 'right' }}
                  className='mtop-1'>
                  <CaretDownOutlined style={{ color: '#3F3F3F' }} />{' '}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
