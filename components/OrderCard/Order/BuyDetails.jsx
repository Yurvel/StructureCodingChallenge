import React from 'react'

import buyDetailsStyles from '../../../styles/BuyDetails.module.css'

import { BuyDetailsRow } from './BuyDetailsRow'
import { BuyDetailsDivider } from './BuyDetailsDivider'

export const BuyDetails = ({ onStepChange }) => (
  <div className={buyDetailsStyles.buyDetails}>
    <BuyDetailsRow label='Buy' currency='BTC' onClick={onStepChange} />
    <BuyDetailsDivider />
    <BuyDetailsRow label='Pay width' currency='ETH' onClick={() => {}} />
  </div>
)
