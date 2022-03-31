import React from 'react'

import commonStyles from '../../styles/Common.module.css'
import newsStyles from '../../styles/News.module.css'

import { NewsCard } from './NewsCard'

import news1 from '../../assets/images/n1.png'
import news2 from '../../assets/images/n2.png'
import news3 from '../../assets/images/n3.png'

const news = [
  {
    id: 0,
    title:
      'Commentators brace for upheaval as Fed officials prepare to reveal future financial policy moves.',
    description:
      'The feature was made possible by a partnership between the credit union’s platform provider and NYDIG.',
    imgURL: news1,
    source: 'Bitcoin Magazine',
    time: '1 hour ago',
    tag: 'Bitcoin',
  },
  {
    id: 1,
    title:
      'The feature was made possible by a partnership between the credit union’s platform provider and NYDIG.',
    description:
      'Digital-asset firm Securitize is launching two tokenized funds that will track crypto indexes from S&P Dow Jones Indices.',
    imgURL: news2,
    source: 'Bloomberg',
    time: '4 hour ago',
    tag: 'Bitcoin',
  },
  {
    id: 2,
    title: 'Valkyrie Launches ETF to Track Bitcoin Balance Sheet Stocks',
    description:
      'Long on MicroStrategy, the passively managed ETF brings another crypto-tinted product to Wall Street’s ranks.',
    imgURL: news3,
    source: 'CoinDesk',
    time: '4 day ago',
    tag: 'Bitcoin',
  },
]

export const News = () => (
  <div className={newsStyles.news}>
    <span className={commonStyles.title}>Bitcoin News</span>
    {news.map(event => (
      <NewsCard key={event.id} event={event} />
    ))}
  </div>
)
