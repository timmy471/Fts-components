import {
  InvestorsDashboardLayout,
  Button,
  Typography,
  TextField,
  SelectField,
  WalletForm,
  MobileFilter,
  Pill,
} from '@src/components';
import AOS from 'aos';
import * as Yup from 'yup';
import Image from 'next/image';
import type { NextPage } from 'next';
import { assets } from '@src/assets/';
import { IWalletTableData } from 'type.d';
import { useState, useEffect } from 'react';
import { defaultValidation } from '@src/helpers';
import type { ColumnsType } from 'antd/lib/table';
import { CaretDownOutlined } from '@ant-design/icons';
import { Col, Modal, Row, Table, Collapse, Dropdown, Menu, DatePicker } from 'antd';

interface IProps {}

interface IFilter {
  q: string;
  provider: string;
  status: string;
  date: string | object;
}

const InvestorsWallet: NextPage<IProps> = () => {
  const { Panel } = Collapse;
  const { RangePicker } = DatePicker;
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [showDateFilter, setShowDateFilter] = useState<boolean>(false);
  const [isOpenMobileFilter, setisOpenMobileFilter] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<string | number | undefined>(undefined);
  const [filterParams, setFilterParams] = useState<IFilter>({
    q: '',
    provider: '',
    status: '',
    date: '',
  });

  const handleMobileFilterClick = () => setisOpenMobileFilter(!isOpenMobileFilter);

  const handlePaymentModalAction = () => setIsPaymentModalOpen(!isPaymentModalOpen);

  const fundWalledValidation = () =>
    Yup.object().shape({
      currency: defaultValidation('Currency'),
      amount: defaultValidation('Amount'),
    });

  const handleWalletFundSubmit = (values: object) => {
    console.log(values);
    handlePaymentModalAction();
  };

  const tableColumns: ColumnsType<IWalletTableData> = [
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Narration',
      dataIndex: 'narration',
    },
    {
      title: 'Via',
      dataIndex: 'via',
    },
    {
      title: 'Payment Provider',
      dataIndex: 'paymentProvider',
      width: 200,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  const walletData: IWalletTableData[] = [
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Wallet Funding',
      via: 'Paystack',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Fund Payment',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Fund Payment',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Fund payment',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Fund Payment',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Payment for Future Africa Fund',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Fund payment',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Fund Payment',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Payment for Future Africa Fund',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Fund payment',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Fund Payment',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
    {
      date: 'December 2, 2018',
      id: '2336987',
      narration: 'Payment for Future Africa Fund',
      via: 'AngelList',
      paymentProvider: 'Paystack',
      amount: '$5,000',
      status: 'Successful',
    },
  ];

  const dateMenuOptions = ['Today', 'Yesterday', 'This Month', 'Last Month', 'Date Range'];
  // const statusMenuOptions = [];
  // const providerMenuOptions = [];

  const handleDateOptionClick = (key: number) => {
    //Set date in filterOptions with moment helper function based on today, tomorrow etc
    if (showDateFilter) setShowDateFilter(false);
  };

  const dateMenu = (
    <Menu
      items={dateMenuOptions.map((option, key) => ({
        label: (
          <div
            onClick={() =>
              key < dateMenuOptions.length - 1
                ? handleDateOptionClick(key + 1)
                : setShowDateFilter(true)
            }>
            {option}
          </div>
        ),
        key: key,
      }))}
    />
  );

  return (
    <InvestorsDashboardLayout classN='wallet'>
      <div className='investor-wallet'>
        <Typography component='h4'>Wallet</Typography>
        <div className='mt-2' data-aos='fade-left'>
          {' '}
          <Row gutter={[32, 12]} className='wallet-cards-container'>
            <Col xs={24} xl={12}>
              <div className='wallet-header-cards d-flex justify-content-between'>
                <div className='d-flex'>
                  <div className='icon-container'>
                    <Image
                      src={assets.dollarBriefcaseIcon.src}
                      alt={assets.dollarBriefcaseIcon.alt}
                      width='100%'
                      height='100%'
                    />
                  </div>
                  <div>
                    <Typography variant='body8' state='secondary'>
                      Balance
                    </Typography>
                    <Typography component='h4'>$38,000</Typography>
                  </div>
                </div>
                <div>
                  <Button label='Fund Wallet' onClick={handlePaymentModalAction} />
                </div>
              </div>
            </Col>
            <Col xs={24} xl={12}>
              <div className='wallet-header-cards d-flex justify-content-between'>
                <div className='d-flex'>
                  <div className='icon-container'>
                    <Image
                      src={assets.dollarPlainIcon.src}
                      alt={assets.dollarPlainIcon.alt}
                      width='100%'
                      height='100%'
                    />
                  </div>
                  <div>
                    <Typography variant='body8' state='secondary'>
                      Total Invested
                    </Typography>
                    <Typography component='h4'>$56,000</Typography>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='mt-2'>
          <Row>
            <Col xs={24} md={showDateFilter ? 8 : 12}>
              <div className='wallet-search'>
                <TextField searchField placeholder='Search' name='search' required={false} />
              </div>
            </Col>
            <Col xs={24} md={showDateFilter ? 16 : 12}>
              <div className='filter-params-container'>
                <div className='desktop-filter-cta'>
                  <Typography className='mt-1'>Filter By</Typography>
                </div>
                <div
                  className='mobile-filter-cta cursor-pointer align-items-center'
                  onClick={handleMobileFilterClick}>
                  <Typography className='mt-1'>Filter By:</Typography>
                  <span className='mtop-2'>
                    <Image
                      src={assets.filterIcon.src}
                      alt={assets.filterIcon.alt}
                      width='20px'
                      height='20px'
                    />
                  </span>
                </div>

                <div className='d-flex filter-params'>
                  <SelectField
                    placeholder='All Providers'
                    required={false}
                    options={[]}
                    onChange={() => {}}
                    className='w-100 mr-2'
                  />
                  <SelectField
                    placeholder='All Status'
                    required={false}
                    options={[]}
                    onChange={() => {}}
                    className='w-100 mr-2'
                  />
                  <div className='mr-2 w-100'>
                    <Dropdown
                      overlay={dateMenu}
                      trigger={['click']}
                      overlayStyle={{ borderRadius: '10px!important' }}
                      overlayClassName='dropdown-container'>
                      <div className='cursor-pointer date-filter-cta w-100 d-flex justify-content-between align-items-center'>
                        <Typography className='mtop-3'>All Dates</Typography>{' '}
                        <CaretDownOutlined style={{ color: '#bfbfbf' }} />
                      </div>
                    </Dropdown>
                  </div>
                  <div className={`${showDateFilter ? '' : 'd-none'}`}>
                    <RangePicker
                      suffixIcon={null}
                      className='filter-date-picker'
                      onCalendarChange={(val) =>
                        // setFilterParams({ ...filterParams, date: val })
                        console.log(val)
                      }
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='wallet-accordion-container mt-1'>
          {walletData.map(
            ({ date, id, narration, via, paymentProvider, amount, status }, key) => {
              const bodyInfo = [
                { label: 'Id', value: id },
                { label: 'Narration', value: narration },
                { label: 'Via', value: via },
                { label: 'Payment Provider', value: paymentProvider },
              ];
              return (
                <Collapse
                  bordered={false}
                  expandIconPosition='end'
                  expandIcon={({ isActive }) => (
                    <CaretDownOutlined rotate={isActive ? 180 : 0} />
                  )}
                  className=''
                  key={key}>
                  <Panel
                    header={
                      <div className='w-100 d-flex justify-content-between pr-1'>
                        <div>
                          <Typography variant='body8'>Date</Typography>{' '}
                          <Typography variant='body7' className='wallet-detail'>
                            {date}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant='body8'>Amount</Typography>{' '}
                          <Typography variant='body7' className='wallet-detail'>
                            {amount}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant='body8'>Status</Typography>{' '}
                          <Typography variant='body7' className='wallet-detail'>
                            {status}
                          </Typography>
                        </div>
                      </div>
                    }
                    key={key}
                    className='wallet-accordion-panel'>
                    <div className='pr-4'>
                      {bodyInfo.map((info, key) => (
                        <div
                          className='d-flex justify-content-between align-items-center'
                          key={key}>
                          <Typography variant='body8'>{info.label}</Typography>
                          <Typography variant='body6'>{info.value}</Typography>
                        </div>
                      ))}
                    </div>
                  </Panel>
                </Collapse>
              );
            }
          )}
        </div>
        <div className='fa-table wallet-table mtop-1 pb-4'>
          <Table
            columns={tableColumns}
            dataSource={walletData.map((info, key) => ({ ...info, key }))}
            pagination={false}
            scroll={{ x: true, y: 'calc(100vh - 300px)' }}
          />
        </div>
        <Modal
          centered
          visible={isPaymentModalOpen}
          footer={null}
          closable={false}
          maskClosable={true}
          className='wallet-payment-modal'
          onOk={handlePaymentModalAction}
          onCancel={handlePaymentModalAction}>
          <WalletForm
            validationSchema={fundWalledValidation}
            onWalletFundSubmit={handleWalletFundSubmit}
          />
        </Modal>
        <MobileFilter visible={isOpenMobileFilter} handleClose={handleMobileFilterClick}>
          <div className='p-4 mobile-filter-accordion'>
            <div className='d-flex justify-content-between'>
              <Typography component='h5'>Filter</Typography>
              {/* <Typography className='cursor-pointer' variant='body6' state='tetiary'>
                Apply Filter
              </Typography> */}
            </div>
            <div className='mt-2'>
              <Collapse
                bordered={false}
                expandIconPosition='end'
                expandIcon={(info: any) => (
                  <CaretDownOutlined
                    style={{ color: '#bfbfbf' }}
                    onClick={() =>
                      activeKey === info.panelKey
                        ? setActiveKey(undefined)
                        : setActiveKey(info.panelKey)
                    }
                  />
                )}
                activeKey={activeKey}>
                <Panel
                  header={<Typography variant='body6'>All Providers</Typography>}
                  key={1}
                  className='wallet-filter-panel'></Panel>
                <Panel
                  header={<Typography variant='body6'>All Status</Typography>}
                  key={2}
                  className='wallet-filter-panel'></Panel>
                <Panel
                  header={<Typography variant='body6'>All Dates</Typography>}
                  key={3}
                  className='wallet-filter-panel'>
                  <div className='d-flex'>
                    {dateMenuOptions.map((option, key) => (
                      <Pill
                        label={option}
                        key={key}
                        onClick={() => setFilterParams({ ...filterParams, date: option })}
                        selected={filterParams.date === option}
                      />
                    ))}
                  </div>
                </Panel>
              </Collapse>
            </div>
          </div>
        </MobileFilter>
      </div>
    </InvestorsDashboardLayout>
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

export default InvestorsWallet;
