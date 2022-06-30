import { useWindowDimensions } from '@src/hooks';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Typography } from '@src/components';

export const PortfolioChart: React.FC = () => {
  const data = [
    {
      month: 'Jan',
      portfolioValue: 40000,
      amountInvested: 10000,
      timesInvested: 5,
    },
    {
      month: 'Feb',
      portfolioValue: 30000,
      amountInvested: 15000,
      timesInvested: 5,
    },
    {
      month: 'Mar',
      portfolioValue: 25000,
      amountInvested: 42000,
      timesInvested: 5,
    },
    {
      month: 'Apr',
      portfolioValue: 35000,
      amountInvested: 55000,
      timesInvested: 5,
    },
    {
      month: 'May',
      portfolioValue: 30000,
      amountInvested: 13000,
      timesInvested: 5,
    },
    {
      month: 'Jun',
      portfolioValue: 35000,
      amountInvested: 28000,
      timesInvested: 5,
    },
    {
      month: 'Jul',
      portfolioValue: 45000,
      amountInvested: 8000,
      timesInvested: 5,
    },
  ];

  const windowDimensions = useWindowDimensions();

  const isSmallDevice = windowDimensions && windowDimensions.width <= 670;

  const renderTooltip = (props: any) => {
    return (
      <div className='chart-value-indicator p-2'>
        <Typography variant='body9' state='primary'>
          Portfolio: ${props.payload[0]?.value}
        </Typography>
        <Typography variant='body9' state='primary'>
          Amount: ${props.payload[1]?.value}
        </Typography>
      </div>
    );
  };

  return (
    <div className='line-chart mt-1'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            left: -10,
            bottom: isSmallDevice ? 45 : 25,
          }}>
          <XAxis
            dataKey='month'
            dy={isSmallDevice ? 0 : 15}
            padding={isSmallDevice ? { left: 20, right: 5 } : { left: 40 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis axisLine={false} tickLine={false} />
          {/* <CartesianGrid /> */}
          <Tooltip content={renderTooltip} cursor={{ stroke: '#FFA800', strokeWidth: 2 }} />
          <Tooltip />
          <Line
            dataKey='amountInvested'
            type='stepBefore'
            stroke='#FFA800'
            dot={false}
            strokeWidth={2}
          />
          <Line
            dataKey='portfolioValue'
            type='stepBefore'
            stroke='#2F80ED'
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
