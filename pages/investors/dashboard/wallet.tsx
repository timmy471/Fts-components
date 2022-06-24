import {
  InvestorsDashboardLayout,
  Button,
  Typography,
  TextField,
  SelectField,
  WalletForm,
} from '@src/components';
import * as Yup from 'yup';
import Image from 'next/image';
import { useState } from 'react';
import type { NextPage } from 'next';
import { assets } from '@src/assets/';
import { defaultValidation } from '@src/helpers';
import type { ColumnsType } from 'antd/lib/table';
import { CaretDownOutlined } from '@ant-design/icons';
import { Col, Modal, Row, Table, Collapse } from 'antd';

interface IProps {}
interface IDataType {
  date: string;
  id: string;
  narration: string;
  via: string;
  paymentProvider: string;
  amount: string;
  status: string;
}

const InvestorsWallet: NextPage<IProps> = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const { Panel } = Collapse;
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
  const tableColumns: ColumnsType<IDataType> = [
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

  const walletData: IDataType[] = [
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

  return (
    <InvestorsDashboardLayout classN='wallet' subClassN='wallet'>
      <div className='investor-wallet'>
        <Typography component='h4'>Wallet</Typography>
        <div className='mt-2'>
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
                      Balance
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
            <Col xs={24} md={12}>
              <div className='wallet-search'>
                <TextField searchField placeholder='Search' name='search' required={false} />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className='filter-params-container'>
                <div className='filter-cta cursor-pointer d-flex align-items-center'>
                  <Typography className='mt-1'>Filter By:</Typography>
                  <span className='mtop-2 d-none'>
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
                    onSelect={() => {}}
                    onChange={() => {}}
                    className='w-100 mr-2'
                  />
                  <SelectField
                    placeholder='All Status'
                    required={false}
                    options={[]}
                    onSelect={() => {}}
                    onChange={() => {}}
                    className='w-100 mr-2'
                  />
                  <SelectField
                    placeholder='All Dates'
                    required={false}
                    options={[]}
                    onSelect={() => {}}
                    onChange={() => {}}
                    className='w-100 '
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='wallet-accordion-container mt-1'>
          {walletData.map(
            ({ date, id, narration, via, paymentProvider, amount, status }, key) => (
              <Collapse
                bordered={false}
                expandIconPosition='end'
                expandIcon={({ isActive }) => (
                  <CaretDownOutlined rotate={isActive ? 180 : 0} />
                )}
                className=''>
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
                    <div className='d-flex justify-content-between'>
                      <Typography variant='body8'>ID</Typography>
                      <Typography variant='body6'>{id}</Typography>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <Typography variant='body8'>Naration</Typography>
                      <Typography variant='body6'>{narration}</Typography>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <Typography variant='body8'>Via</Typography>
                      <Typography variant='body6'>{via}</Typography>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <Typography variant='body8'>Payment Provider</Typography>
                      <Typography variant='body6'>{paymentProvider}</Typography>
                    </div>
                  </div>
                </Panel>
              </Collapse>
            )
          )}
        </div>
        <div className='fa-table wallet-table mtop-1 pb-4'>
          <Table
            columns={tableColumns}
            dataSource={walletData}
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
