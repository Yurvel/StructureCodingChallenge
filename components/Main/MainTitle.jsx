import React from 'react'

import mainTitleStyles from '../../styles/MainTitle.module.css'

import BTCIcon from '../../assets/icons/BTCIcon.svg'

export const MainTitle = () => (
  <div className={mainTitleStyles.title}>
    <BTCIcon />
    <span className={mainTitleStyles.titleLabel}>Bitcoin</span>
    <span className={mainTitleStyles.titleCode}>BTC</span>
  </div>
)
