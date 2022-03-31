import React from 'react'

import assetStyles from '../../../styles/Asset.module.css'

export const Asset = ({ asset }) => {
  const { label, code, price, amount } = asset

  return (
    <div className={assetStyles.asset}>
      <div className={assetStyles.leftPanel}>
        <div className={assetStyles.mockRadio} />
        <div className={assetStyles.assetInfo}>
          <span className={assetStyles.assetLabel}>{label}</span>
          <span className={assetStyles.assetCode}>{code}</span>
        </div>
      </div>
      <div className={assetStyles.rightPanel}>
        <span className={assetStyles.assetPrice}>{price}</span>
        <span className={assetStyles.assetAmount}>{amount}</span>
      </div>
    </div>
  )
}
