import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import commonStyles from '../../../styles/Common.module.css'
import assetsListStyles from '../../../styles/AssetsList.module.css'
import orderCardStyles from '../../../styles/OrderCard.module.css'

import { Asset } from './Asset'
import { CancelButton } from './CancelButton'
import { SearchInput } from './SearchInput'
import { Stock } from './Stock'

const assets = [
  {
    id: 0,
    label: 'Ethereum',
    code: 'ETH',
    price: '$183.34K',
    amount: '70.4205313',
  },
  {
    id: 1,
    label: 'Tron',
    code: 'TRX',
    price: '$125.89K',
    amount: '2,141,105.43',
  },
  {
    id: 2,
    label: 'Bitcoin',
    code: 'BTC',
    price: '$16.43K',
    amount: '0.42053132',
  },
  {
    id: 3,
    label: 'Bitcoin Standard Hash...',
    code: 'BTCST',
    price: '$5.2K',
    amount: '327.565399',
  },
]

const stocks = [
  {
    id: 0,
    label: 'Apple',
    code: 'APPL',
    price: '$171.01',
    change: '2.52%',
    growth: false,
  },
  {
    id: 1,
    label: 'Microsoft',
    code: 'MSFT',
    price: '$323.33',
    change: '1.08%',
    growth: true,
  },
]

export const AssetsList = ({ onStepChange }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: '477px' }}
        animate={{ height: '732px' }}
        exit={{ height: '477px' }}
        className={orderCardStyles.orderCard}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={assetsListStyles.assetListContainer}
        >
          <span className={commonStyles.title}>Which asset would you like to buy?</span>
          <SearchInput />
          <div className={assetsListStyles.list}>
            {assets.map(asset => (
              <Asset key={asset.id} asset={asset} />
            ))}
            <div className={commonStyles.fullWidthDivider} />
            {stocks.map(stock => (
              <Stock key={stock.id} stock={stock} />
            ))}
          </div>
          <CancelButton onClick={onStepChange} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
