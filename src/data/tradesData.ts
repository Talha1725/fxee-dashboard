export interface Trade {
  id: string;
  pair: string;
  type: 'Long' | 'Short';
  status: 'open' | 'closed';
  profitLoss: number;
  percentage: number;
  realizedPL: string;
  unrealizedPL: string;
  investment: string;
  runtime: string;
  startTime: string;
  aiInsight: string;
  isProfit: boolean;
}

export const mockTrades: Trade[] = [
  {
    id: '1',
    pair: 'BTC/USD',
    type: 'Long',
    status: 'open',
    profitLoss: 5432,
    percentage: 12,
    realizedPL: '$5,721.83',
    unrealizedPL: '-$94.48',
    investment: '$2,000',
    runtime: '4d 19h',
    startTime: 'May 25, 12:34 PM',
    aiInsight: 'I detected a breakout above resistance and opened this long position to capture the upward momentum.',
    isProfit: true
  },
  {
    id: '2',
    pair: 'ETH/USD',
    type: 'Short',
    status: 'closed',
    profitLoss: -1234,
    percentage: -8,
    realizedPL: '-$1,234.00',
    unrealizedPL: '$0.00',
    investment: '$1,500',
    runtime: '2d 5h',
    startTime: 'May 23, 08:15 AM',
    aiInsight: 'I detected a breakout above resistance and opened this long position to capture the upward momentum.',
    isProfit: false
  },
  {
    id: '3',
    pair: 'ADA/USD',
    type: 'Long',
    status: 'open',
    profitLoss: 890,
    percentage: 15,
    realizedPL: '$890.00',
    unrealizedPL: '+$45.20',
    investment: '$800',
    runtime: '1d 12h',
    startTime: 'May 26, 14:22 PM',
    aiInsight: 'I detected a breakout above resistance and opened this long position to capture the upward momentum.',
    isProfit: true
  },
  {
    id: '4',
    pair: 'SOL/USD',
    type: 'Long',
    status: 'closed',
    profitLoss: 2100,
    percentage: 18,
    realizedPL: '$2,100.00',
    unrealizedPL: '$0.00',
    investment: '$1,200',
    runtime: '3d 8h',
    startTime: 'May 22, 16:45 PM',
    aiInsight: 'I detected a breakout above resistance and opened this long position to capture the upward momentum.',
    isProfit: true
  },
  {
    id: '5',
    pair: 'DOT/USD',
    type: 'Short',
    status: 'open',
    profitLoss: -567,
    percentage: -5,
    realizedPL: '-$567.00',
    unrealizedPL: '-$23.10',
    investment: '$1,100',
    runtime: '6d 2h',
    startTime: 'May 21, 09:30 AM',
    aiInsight: 'I detected a breakout above resistance and opened this long position to capture the upward momentum.',
    isProfit: false
  },
  {
    id: '6',
    pair: 'MATIC/USD',
    type: 'Long',
    status: 'closed',
    profitLoss: 345,
    percentage: 7,
    realizedPL: '$345.00',
    unrealizedPL: '$0.00',
    investment: '$500',
    runtime: '1d 18h',
    startTime: 'May 24, 11:20 AM',
    aiInsight: 'I detected a breakout above resistance and opened this long position to capture the upward momentum.',
    isProfit: true
  },
  {
    id: '7',
    pair: 'LINK/USD',
    type: 'Long',
    status: 'open',
    profitLoss: 1234,
    percentage: 22,
    realizedPL: '$1,234.00',
    unrealizedPL: '+$89.50',
    investment: '$600',
    runtime: '2d 14h',
    startTime: 'May 25, 07:15 AM',
    aiInsight: 'I detected a breakout above resistance and opened this long position to capture the upward momentum.',
    isProfit: true
  },
  {
    id: '8',
    pair: 'AVAX/USD',
    type: 'Short',
    status: 'closed',
    profitLoss: -890,
    percentage: -12,
    realizedPL: '-$890.00',
    unrealizedPL: '$0.00',
    investment: '$750',
    runtime: '4d 3h',
    startTime: 'May 20, 13:40 PM',
    aiInsight: 'I detected a breakout above resistance and opened this long position to capture the upward momentum.',
    isProfit: false
  }
];
