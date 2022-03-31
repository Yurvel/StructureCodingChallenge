import React from 'react'

import buyDetailsRowStyles from '../../../styles/BuyDetailsRow.module.css'

import RightArrowIcon from '../../../assets/icons/rightArrowIcon.svg'

export const BuyDetailsRow = ({ label, currency, onClick }) => (
  <div className={buyDetailsRowStyles.currency} onClick={onClick}>
    <span className={buyDetailsRowStyles.currencyDirection}>{label}</span>
    <div className={buyDetailsRowStyles.currencyCode}>
      <div className={buyDetailsRowStyles.mockRadioSmall} />
      <span>{currency}</span>
    </div>
    <RightArrowIcon className={buyDetailsRowStyles.arrowIcon} />
  </div>
)
