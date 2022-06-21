import { Layout, Drawer, Dropdown, Menu, Row, Col } from 'antd';
import { DownOutlined, CaretDownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

import { assets } from '../../../assets';

export const TopHeader: NextPage = () => {
  const { Header } = Layout;
  const [visible, setVisible] = useState<boolean>(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header className='top-header'>
      <Row>
        <Col xs={19} sm={19} md={16} lg={16} xl={19}>
          <h3>Last Login:</h3>
          <span>March 03, 2022 09.23am</span>
        </Col>
        <Col xs={5} sm={5} md={8} lg={8} xl={5}>
          <Row>
            <Col xs={4} sm={6} md={6} lg={6} xl={6} className='mtop-1'>
              <div className='notif-bell'>
                <Image
                  src={assets.NotificationBellIcon.src}
                  alt={assets.NotificationBellIcon.alt}
                  height='25'
                  width='25'
                />
              </div>
            </Col>
            <Col xs={18} sm={18} md={18} lg={18} xl={18}>
              <Row gutter={[4, 4]}>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div>
                    <Image
                      src={assets.UserAvatarIcon.src}
                      alt={assets.UserAvatarIcon.alt}
                      height='40'
                      width='40'
                    />
                  </div>
                </Col>
                <Col xs={15} sm={15} md={15} lg={15} xl={15} className='ml-1 mtop-1'>
                  <div className='user-detail'>
                    <h3>
                      Abbey <br />
                      <span>Investor</span>
                    </h3>
                  </div>
                </Col>
                <Col
                  xs={2}
                  sm={2}
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
