import React, { useState } from 'react'

import amountInputStyles from '../../../styles/AmountInput.module.css'

export const AmountInput = () => {
  const [amount, setAmount] = useState('0')

  return (
    <div className={amountInputStyles.amount}>
      <span className={amountInputStyles.sign}>$</span>
      <input
        type='number'
        value={amount}
        onChange={e => setAmount(e.target.value)}
        style={{ width: 28 * amount?.length }}
        className={amountInputStyles.amountInput}
      />
    </div>
  )
}
