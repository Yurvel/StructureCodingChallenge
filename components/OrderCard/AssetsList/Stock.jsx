import React from 'react'

import stockStyles from '../../../styles/Stock.module.css'

import UpChange from '../../../assets/icons/upChange.svg'
import DownChange from '../../../assets/icons/downChange.svg'

export const Stock = ({ stock }) => {
  const { label, code, price, growth, change } = stock

  return (
    <div className={stockStyles.stock}>
      <div className={stockStyles.leftPanel}>
        <div className={stockStyles.mockRadio} />
        <div className={stockStyles.stockInfo}>
          <span className={stockStyles.stockLabel}>{label}</span>
          <span className={stockStyles.stockCode}>{code}</span>
        </div>
      </div>
      <div className={stockStyles.rightPanel}>
        <span className={stockStyles.stockPrice}>{price}</span>
        <div className={growth ? stockStyles.upChange : stockStyles.downChange}>
          {growth ? <UpChange /> : <DownChange />}
          <span className={stockStyles.stockChange}>{change}</span>
        </div>
      </div>
    </div>
  )
}
