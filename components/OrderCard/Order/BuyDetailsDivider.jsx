import React from 'react'

import commonStyles from '../../../styles/Common.module.css'
import buyDetailsDividerStyles from '../../../styles/BuyDetailsDivider.module.css'

import SwitchIcon from '../../../assets/icons/switchIcon.svg'

export const BuyDetailsDivider = () => (
  <>
    <div className={commonStyles.fullWidthDivider} />
    <div className={buyDetailsDividerStyles.switch}>
      <SwitchIcon />
    </div>
  </>
)
