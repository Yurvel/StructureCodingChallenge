import React from 'react'

import commonStyles from '../../styles/Common.module.css'
import statsStyles from '../../styles/Stats.module.css'

import { StatsLine } from './StatsLine'

const mainStats = [
  {
    id: 0,
    label: 'Market cap',
    value: '$1.1T',
  },
  {
    id: 1,
    label: 'Volume (24h)',
    value: '$25.9B',
  },
  {
    id: 2,
    label: 'Circulating supply',
    value: '18.9M BTC',
  },
  {
    id: 3,
    label: 'All time high',
    value: '$68,778.48',
  },
]

const priceChange = [
  {
    id: 0,
    label: '1h price change',
    value: '+ 0.05%',
  },
  {
    id: 1,
    label: '24h price change',
    value: '+ 2.88%',
  },
  {
    id: 2,
    label: '7d price change',
    value: '- 16.67%',
  },
]

export const Stats = () => (
  <div className={statsStyles.stats}>
    <span className={commonStyles.title}>Bitcoin Stats</span>
    <StatsLine stats={mainStats} />
    <StatsLine stats={priceChange} />
    <div className={commonStyles.fullWidthDivider} />
  </div>
)
