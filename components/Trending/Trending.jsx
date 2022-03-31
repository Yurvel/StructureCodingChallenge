import React from 'react'

import commonStyles from '../../styles/Common.module.css'
import trendingStyles from '../../styles/Trending.module.css'

import { TrendingAsset } from './TrendingAsset'

const trendingList = [
  {
    id: 0,
    label: 'Polkastarter',
    amount: '$0.03617',
    growth: false,
    change: '15.58%',
  },
  {
    id: 1,
    label: 'Nio',
    amount: '$41.73',
    growth: true,
    change: '7.29%',
  },
  {
    id: 2,
    label: 'Keep',
    amount: '$52.44',
    growth: true,
    change: '9.63%',
  },
  {
    id: 3,
    label: 'Netflix',
    amount: '$591.69',
    growth: false,
    change: '1.05%',
  },
  {
    id: 4,
    label: 'Dai',
    amount: '$198.37',
    growth: false,
    change: '14.34%',
  },
  {
    id: 5,
    label: 'Steem',
    amount: '$0.6039',
    growth: true,
    change: '2.17%',
  },
]

export const Trending = () => (
  <div className={trendingStyles.trending}>
    <div className={trendingStyles.titleContainer}>
      <span className={commonStyles.title}>Trending</span>
      <span className={trendingStyles.action}>See more</span>
    </div>
    <div className={trendingStyles.list}>
      {trendingList.map(asset => (
        <TrendingAsset key={asset.id} asset={asset} />
      ))}
    </div>
  </div>
)
