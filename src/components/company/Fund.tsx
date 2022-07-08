import Image from 'next/image';
import { useState } from 'react';
import { Typography } from '@src/components';
import { Row, Col, Tabs, Table, Collapse } from 'antd';
import { getTableAlternatingBg } from '@src/helpers';
import type { ColumnsType } from 'antd/lib/table';
import { IFundCompany, ISubscriptionHistoryData, IInvestmentData } from 'types';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

interface IProps {
  companyDetail: IFundCompany;
}

export const Fund: React.FC<IProps> = ({ companyDetail }) => {
  const { Panel } = Collapse;

  const [showCustomInfo, setShowCustomInfo] = useState<boolean>(false);

  if (!companyDetail) return null;

  const { logo, name: companyName } = companyDetail;

  const { TabPane } = Tabs;

  const subscriptionTableColumns: ColumnsType<ISubscriptionHistoryData> = [
    {
      title: 'Quater',
      dataIndex: 'quater',
      render: (value) => (
        <Typography className='mb-0' variant='body3'>
          {value}
        </Typography>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Certificate',
      dataIndex: 'certificate',
      render: () => (
        <Typography state='tetiary' variant='body3' className='cert-cta mb-0 cursor-pointer'>
          Signature Cert.
        </Typography>
      ),
    },
  ];

  const subscriptionHistoryData: ISubscriptionHistoryData[] = [
    {
      quater: 'Q2 2022',
      amount: '$10000',
      description: 'Future Africa Collective LLC',
      date: 'Apr 1 - Jun 30',
      certification: '',
    },
    {
      quater: 'Q3 2022',
      amount: '$40000',
      description: 'Future Africa Collective LLC',
      date: 'Mar 1 - Dec 30',
      certification: '',
    },
    {
      quater: 'Q2 2022',
      amount: '$10000',
      description: 'Future Africa Collective LLC',
      date: 'Apr 1 - Jun 30',
      certification: '',
    },
    {
      quater: 'Q3 2022',
      amount: '$40000',
      description: 'Future Africa Collective LLC',
      date: 'Mar 1 - Dec 30',
      certification: '',
    },
  ];

  const investmentTableColumns: ColumnsType<IInvestmentData> = [
    {
      title: 'Company/Fund',
      dataIndex: 'fund',
      render: (value) => (
        <Typography className='mb-0' variant='body3'>
          {value}
        </Typography>
      ),
    },
    {
      title: 'Deployed',
      dataIndex: 'amountDeployed',
    },
    {
      title: 'Value',
      dataIndex: 'amountValue',
    },
    {
      title: 'Investment Date',
      dataIndex: 'date',
    },
  ];

  const investmentTableData: IInvestmentData[] = [
    {
      fund: 'ShipShap',
      amountDeployed: '$10,000',
      amountValue: '$601.13',
      date: 'May 25, 2022',
    },
    {
      fund: 'ShipShap',
      amountDeployed: '$10,000',
      amountValue: '$601.13',
      date: 'May 25, 2022',
    },
    {
      fund: 'ShipShap',
      amountDeployed: '$10,000',
      amountValue: '$601.13',
      date: 'May 25, 2022',
    },
    {
      fund: 'ShipShap',
      amountDeployed: '$10,000',
      amountValue: '$601.13',
      date: 'May 25, 2022',
    },
  ];

  return (
    <div>
      <Row gutter={[22, 22]}>
        <Col xs={24} xl={6}>
          <div className='bg-white company-detail-container'>
            <div className='text-center company-intro'>
              <Image src={logo} alt={companyName} height={70} width={80} />
              <Typography component='h6'>{companyName}</Typography>
            </div>
            <div className='mobile-company-intro ml-1'>
              <Image src={logo} alt={companyName} height={55} width={70} />
              <div className='mtop-3 ml-1'>
                <Typography component='h6'>{companyName}</Typography>
              </div>
            </div>
            <div className='mt-2 other-detail'>
              <div className='section-one pb-2'>
                <div className='d-flex justify-content-between'>
                  <Typography variant='body8' state='secondary'>
                    Fund Manager
                  </Typography>
                  <Typography variant='body7' state='secondary'>
                    Future Africa
                  </Typography>
                </div>
                <div className='d-flex justify-content-between'>
                  <Typography variant='body8' state='secondary'>
                    Next Quarter
                  </Typography>
                  <Typography variant='body7' state='secondary'>
                    Apr 1 - Jun 30, 20
                  </Typography>
                </div>
                <div className='d-flex justify-content-between'>
                  <Typography variant='body8' state='secondary'>
                    Subscription
                  </Typography>
                  <Typography variant='body7' state='secondary'>
                    Active
                  </Typography>
                </div>
              </div>
              <div className='custom-information pt-2'>
                <div>
                  <div
                    className='d-flex justify-content-between show-custom-cta'
                    onClick={() => setShowCustomInfo(!showCustomInfo)}>
                    <Typography variant='body7'>Custom Information</Typography>
                    <span>{showCustomInfo ? <CaretUpOutlined /> : <CaretDownOutlined />}</span>
                  </div>

                  <div className={`custom-detail-info${showCustomInfo ? '__visible' : ''}`}>
                    <div className='d-flex justify-content-between mtop-1'>
                      <Typography variant='body8' state='secondary'>
                        Type
                      </Typography>
                      <Typography variant='body7' state='secondary'>
                        Public Company
                      </Typography>
                    </div>

                    <div className='d-flex justify-content-between'>
                      <Typography variant='body8' state='secondary'>
                        Links
                      </Typography>
                      <a
                        href={`https://${'wwww.google.com'}`}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Typography variant='body7' state='tetiary'>
                          Fund Profile
                        </Typography>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='investment-value-container mt-1 bg-white'>
            <Typography variant='body10' state='secondary' className='total-invested'>
              Total Subscription
            </Typography>
            <Typography component='h5'>$556,700</Typography>
            <Typography variant='body10' state='secondary' className='mtop-1'>
              70 Investment(s)
            </Typography>
          </div>
        </Col>
        <Col xs={24} xl={18}>
          <div className='fa-tabs fund-details-container'>
            <Tabs defaultActiveKey='1' tabBarGutter={7}>
              <TabPane tab='Subscription History' key='1'>
                <div className='bg-white tab-content pt-2'>
                  <div className='fund-accordion-container mt-1'>
                    {subscriptionHistoryData.map(
                      ({ date, quater, amount, description }, key) => {
                        const bodyInfo = [
                          { label: 'Amount', value: amount },
                          { label: 'Date', value: date },
                        ];
                        return (
                          <Collapse
                            bordered={false}
                            expandIconPosition='end'
                            expandIcon={({ isActive }) => (
                              <CaretDownOutlined rotate={isActive ? 180 : 0} />
                            )}
                            key={key}>
                            <Panel
                              header={
                                <div className='w-100 d-flex justify-content-between'>
                                  <Typography className='mb-0' variant='body7'>
                                    {quater}
                                  </Typography>{' '}
                                  <Typography className='mb-0' variant='body8'>
                                    {description}
                                  </Typography>{' '}
                                </div>
                              }
                              key={key}
                              className={key % 2 === 0 ? 'table-row-light' : 'table-row-dark'}>
                              <div className='pr-4'>
                                {bodyInfo.map((info, key) => (
                                  <div
                                    className='d-flex justify-content-between align-items-center'
                                    key={key}>
                                    <Typography variant='body8'>{info.label}</Typography>
                                    <Typography variant='body6'>{info.value}</Typography>
                                  </div>
                                ))}
                                <div className='d-flex justify-content-between align-items-center'>
                                  <Typography variant='body8'>{'Document'}</Typography>
                                  <Typography className='cert-cta' variant='body3'>
                                    {'Signature Cert.'}
                                  </Typography>
                                </div>
                              </div>
                            </Panel>
                          </Collapse>
                        );
                      }
                    )}
                  </div>

                  <div className='fund-table'>
                    <Table
                      columns={subscriptionTableColumns}
                      showHeader={false}
                      dataSource={subscriptionHistoryData.map((info, key) => ({
                        ...info,
                        key,
                      }))}
                      rowClassName={(record, index) => getTableAlternatingBg(index)}
                      pagination={false}
                      bordered={false}
                      size={'small'}
                    />
                  </div>
                </div>
              </TabPane>
              <TabPane tab='Fund Investment' key='2'>
                <div className='bg-white tab-content pt-2'>
                  <div className='fund-accordion-container mt-1'>
                    {investmentTableData.map(
                      ({ date, amountDeployed, amountValue, fund }, key) => {
                        const bodyInfo = [
                          { label: 'Value', value: amountValue },
                          { label: 'Date', value: date },
                        ];
                        return (
                          <Collapse
                            bordered={false}
                            expandIconPosition='end'
                            expandIcon={({ isActive }) => (
                              <CaretDownOutlined rotate={isActive ? 180 : 0} />
                            )}
                            key={key}>
                            <Panel
                              header={
                                <div className='w-100 d-flex justify-content-between'>
                                  <Typography className='mb-0' variant='body7'>
                                    {fund}
                                  </Typography>{' '}
                                  <Typography className='mb-0 ml-4' variant='body8'>
                                    {amountDeployed}
                                  </Typography>{' '}
                                </div>
                              }
                              key={key}
                              className={key % 2 === 0 ? 'table-row-light' : 'table-row-dark'}>
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

                  <div className='fund-table fa-table'>
                    <Table
                      columns={investmentTableColumns}
                      dataSource={investmentTableData.map((info, key) => ({
                        ...info,
                        key,
                      }))}
                      rowClassName={(record, index) => getTableAlternatingBg(index)}
                      pagination={false}
                      bordered={false}
                      size={'small'}
                    />
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </Col>
      </Row>
    </div>
  );
};
