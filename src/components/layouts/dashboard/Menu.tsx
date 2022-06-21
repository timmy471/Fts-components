/* eslint-disable @next/next/no-img-element */
import { Layout, Drawer, Modal, Button, Row, Col, Dropdown, Menu as M } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useState, useEffect } from 'react';

import { assets } from '../../../assets';

interface IProps {}
export const Menu: NextPage<IProps> = () => {
  const { Sider } = Layout;

  const onLogout = () => {
    console.log('logged out');
  };

  return (
    <div>
      <Sider className='sider'>
        <Link href='/dashboard' passHref>
          <div className='logo'>
            <Image src={assets.FaLogoLight.src} width={200} height={50} alt='Logo' />
          </div>
        </Link>

        <div>
          <ul>
            <li className='topic'>
              <img
                src={assets.InvestmentsIcon.src}
                alt={assets.InvestmentsIcon.alt}
                height='25'
                width='25'
              />
              Investments
            </li>
            {/* <li className='active-topic'>
              <div className='active-item-with-dropdown'>
                <Row>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6} className='active'>
                    <img
                      src={assets.InvestmentsActiveIcon.src}
                      alt={assets.InvestmentsActiveIcon.alt}
                      height='25'
                      width='25'
                    />
                  </Col>
                  <Col xs={16} sm={16} md={16} lg={16} xl={16} className='mt-1'>
                    <span>Investments</span>
                    <br />
                    <span className='span-inactive'>Syndicate Deals</span>
                    <br />
                    <span className='span-inactive'>Funds</span>
                  </Col>
                </Row>
              </div>
            </li> */}
            <li className='topic'>
              <img
                src={assets.PortfolioIcon.src}
                alt={assets.PortfolioIcon.alt}
                height='25'
                width='25'
              />
              My Portfolio
            </li>
            {/* <li className='active-topic'>
              <div className='active-item'>
                <div className='active'>
                  <img
                    src={assets.PortfolioActiveIcon.src}
                    alt={assets.PortfolioActiveIcon.alt}
                    height='25'
                    width='25'
                  />
                </div>
                My Portfolio
              </div>
            </li> */}
            <li className='topic'>
              <img
                src={assets.WalletIcon.src}
                alt={assets.WalletIcon.alt}
                height='25'
                width='25'
              />
              Wallet
            </li>
            {/* <li className='active-topic'>
              <div className='active-item'>
                <div className='active'>
                  <img
                    src={assets.WalletActiveIcon.src}
                    alt={assets.WalletActiveIcon.alt}
                    height='25'
                    width='25'
                  />
                </div>
                Wallet
              </div>
            </li> */}
          </ul>
        </div>

        <div className='general-action'>
          <ul>
            <li className='topic'>
              <img
                src={assets.CommunityIcon.src}
                alt={assets.CommunityIcon.alt}
                height='25'
                width='25'
              />
              Community
            </li>
            <li className='topic'>
              <img
                src={assets.SettingsIcon.src}
                alt={assets.SettingsIcon.alt}
                height='25'
                width='25'
              />
              Settings
            </li>
            <li className='topic'>
              <img
                src={assets.LogoutIcon.src}
                alt={assets.LogoutIcon.alt}
                height='25'
                width='25'
              />
              Logout
            </li>
          </ul>
        </div>
      </Sider>
    </div>
  );
};
