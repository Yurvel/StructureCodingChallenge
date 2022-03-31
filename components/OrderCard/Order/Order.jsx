import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import orderStyles from '../../../styles/Order.module.css'
import orderCardStyles from '../../../styles/OrderCard.module.css'

import { OperationsTabs } from './OperationsTabs'
import { AmountInput } from './AmountInput'
import { WalletDetails } from './WalletDetails'
import { BuyDetails } from './BuyDetails'
import { SubmitButton } from './SubmitButton'

export const Order = ({ onStepChange }) => {
  const operations = ['Buy', 'Sell']
  const [operation, setOperation] = useState(operations[0])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: '732px' }}
        animate={{ height: '477px' }}
        exit={{ height: '732px' }}
        className={orderCardStyles.orderCard}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={orderStyles.orderContainer}
        >
          <OperationsTabs tabsList={operations} activeTab={operation} onChange={setOperation} />
          <AmountInput />
          <WalletDetails />
          <BuyDetails onStepChange={onStepChange} />
          <SubmitButton onClick={() => {}} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
